"use client";

import { useEffect } from "react";

/**
 * ChunkLoadRecovery:
 * Fixes broken website navigation and "Reload to try again" crashes caused by version skew / ChunkLoadError.
 * When a new version of the website is deployed, clients running a previously loaded version
 * will fail to fetch stale chunk hashes from GitHub Pages / static hosting (HTTP 404) when navigating
 * between tabs or when switching browser tabs (due to viewport link prefetching / stale router cache).
 *
 * This component:
 * 1. Tracks navigation link clicks so failed client-side transitions immediately hard-navigate to the clicked destination.
 * 2. Intercepts window error & unhandledrejection events for ChunkLoadError / failed module fetches.
 * 3. Transparently performs a hard navigation / reload to fetch the latest deployed assets without user interruption.
 * 4. Guards against infinite reload loops using a sessionStorage timestamp throttle.
 */

const RELOAD_STORAGE_KEY = "ftc772_chunk_reload_ts";
const RELOAD_THROTTLE_MS = 10000; // 10-second safeguard against reload loops

function isChunkOrDeployError(error: any): boolean {
  if (!error) return false;
  const message = (
    typeof error === "string"
      ? error
      : error.message || error.description || error.name || ""
  ).toLowerCase();

  return (
    message.includes("chunkloaderror") ||
    message.includes("loading chunk") ||
    message.includes("failed to fetch dynamically imported module") ||
    message.includes("importing a module script failed") ||
    message.includes("error loading dynamically imported module") ||
    message.includes("failed to load chunk") ||
    message.includes("loading css chunk")
  );
}

function safeHardNavigate(targetUrl?: string | null) {
  try {
    const lastReload = Number(sessionStorage.getItem(RELOAD_STORAGE_KEY) || "0");
    const now = Date.now();
    if (now - lastReload < RELOAD_THROTTLE_MS) {
      // Avoid looping if the network is genuinely broken
      return;
    }
    sessionStorage.setItem(RELOAD_STORAGE_KEY, String(now));
  } catch {
    // sessionStorage might be restricted in some privacy modes
  }

  if (targetUrl && targetUrl.startsWith("/") && targetUrl !== window.location.pathname) {
    window.location.assign(targetUrl);
  } else {
    window.location.reload();
  }
}

export default function ChunkLoadRecovery() {
  useEffect(() => {
    let lastClickedHref: string | null = null;
    let clickTimeout: ReturnType<typeof setTimeout> | null = null;

    // Track clicked internal links to know the user's intended destination
    const handleDocumentClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("a");
      if (target) {
        const href = target.getAttribute("href");
        if (
          href &&
          !href.startsWith("http://") &&
          !href.startsWith("https://") &&
          !href.startsWith("mailto:") &&
          !href.startsWith("#")
        ) {
          lastClickedHref = href;
          if (clickTimeout) clearTimeout(clickTimeout);
          clickTimeout = setTimeout(() => {
            lastClickedHref = null;
          }, 6000);
        }
      }
    };

    // Capture <script> and resource loading failures in capture phase
    const handleError = (e: ErrorEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.tagName === "SCRIPT") {
        const src = (target as HTMLScriptElement).src || "";
        if (src.includes("/_next/") || src.includes("/chunks/")) {
          safeHardNavigate(lastClickedHref);
          return;
        }
      }

      if (isChunkOrDeployError(e.error) || isChunkOrDeployError(e.message)) {
        safeHardNavigate(lastClickedHref);
      }
    };

    // Capture unhandled promise rejections (Next.js dynamic imports, flight data)
    const handleUnhandledRejection = (e: PromiseRejectionEvent) => {
      if (isChunkOrDeployError(e.reason)) {
        e.preventDefault();
        safeHardNavigate(lastClickedHref);
      }
    };

    window.addEventListener("click", handleDocumentClick, true);
    window.addEventListener("error", handleError, true);
    window.addEventListener("unhandledrejection", handleUnhandledRejection);

    return () => {
      if (clickTimeout) clearTimeout(clickTimeout);
      window.removeEventListener("click", handleDocumentClick, true);
      window.removeEventListener("error", handleError, true);
      window.removeEventListener("unhandledrejection", handleUnhandledRejection);
    };
  }, []);

  return null;
}

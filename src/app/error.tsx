"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    const msg = (error?.message || error?.name || "").toLowerCase();
    const isChunk =
      msg.includes("chunk") ||
      msg.includes("dynamically imported module") ||
      msg.includes("failed to fetch") ||
      msg.includes("importing a module script");

    if (isChunk) {
      try {
        const lastReload = Number(sessionStorage.getItem("ftc772_chunk_reload_ts") || "0");
        const now = Date.now();
        if (now - lastReload > 10000) {
          sessionStorage.setItem("ftc772_chunk_reload_ts", String(now));
          window.location.reload();
          return;
        }
      } catch {
        window.location.reload();
        return;
      }
    }
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-24">
      <div className="relative max-w-lg w-full rounded-3xl glass-panel p-8 text-center border border-white/10 shadow-2xl">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFBA24]/10 border border-[#FFBA24]/30 text-[#FFBA24] shadow-[0_0_20px_rgba(255,186,36,0.2)]">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold tracking-wide text-white mb-2">
          Page Update Available
        </h2>
        <p className="text-white/60 text-sm leading-relaxed mb-6">
          A new version of the website was updated, or a network hiccup occurred. Refresh the page to load the latest content.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => window.location.reload()}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#FFBA24] text-[#080808] font-bold text-xs uppercase tracking-[0.15em] hover:bg-[#FFD876] transition-all shadow-[0_4px_20px_rgba(255,186,36,0.3)]"
          >
            Refresh Now
          </button>
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-white/20 text-white font-medium text-xs uppercase tracking-[0.15em] hover:bg-white/10 transition-all"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-white/10 text-white/70 font-medium text-xs uppercase tracking-[0.15em] hover:text-[#FFBA24] transition-all"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}

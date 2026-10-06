"use client";

import { useEffect } from "react";

export default function GlobalError({
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
    <html lang="en">
      <body className="bg-[#080808] text-white flex min-h-screen items-center justify-center p-4 font-sans">
        <div className="max-w-md w-full rounded-3xl border border-white/10 bg-[#121212]/95 p-8 text-center shadow-2xl backdrop-blur-xl">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFBA24]/10 border border-[#FFBA24]/30 text-[#FFBA24] shadow-[0_0_20px_rgba(255,186,36,0.2)]">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </div>
          <h2 className="text-xl font-bold tracking-wide text-white mb-2">
            Site Update Available
          </h2>
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            A new update was deployed to FTC 772. Reloading will sync the latest version.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => window.location.reload()}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#FFBA24] text-[#080808] font-bold text-xs uppercase tracking-[0.15em] hover:bg-[#FFD876] transition-all shadow-[0_4px_20px_rgba(255,186,36,0.3)]"
            >
              Reload Website
            </button>
            <button
              onClick={() => reset()}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-white/20 text-white font-medium text-xs uppercase tracking-[0.15em] hover:bg-white/10 transition-all"
            >
              Retry
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LauncherLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "GDAdmin" && password === "TheGoldenSigma2007!") {
      router.push("/launcher/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="relative min-h-[calc(100vh-100px)] overflow-hidden bg-transparent pt-28 pb-16 md:pb-20 lg:pb-28 lg:pt-[150px]">
      <div className="container relative z-10 flex items-center justify-center">
        <div className="-mx-4 flex flex-wrap w-full">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[500px] rounded-[32px] border border-[#FFBA24]/20 bg-[#0c0c0c]/60 px-6 py-10 backdrop-blur-[2px] shadow-[0_15px_30px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.05)] sm:p-[60px]">
              <div className="mb-8 flex justify-center drop-shadow-[0_0_10px_rgba(255,186,36,0.4)]">
                <Image
                  src="/images/logo/logo.png"
                  alt="logo"
                  width={80}
                  height={80}
                  className="brightness-0 saturate-100 invert-[80%] sepia-[40%] saturate-[1500%] hue-rotate-[340deg]"
                  style={{ filter: "brightness(0) saturate(100%) invert(83%) sepia(48%) saturate(1215%) hue-rotate(338deg) brightness(101%) contrast(103%)" }}
                />
              </div>
              <h3 
                className="mb-3 text-center text-3xl sm:text-4xl text-[#FFBA24] lowercase tracking-wider drop-shadow-[0_0_10px_rgba(255,186,36,0.2)] font-names"
                style={{ fontFamily: '"Supercharge Straight Expand", sans-serif' }}
              >
                launcher login
              </h3>
              <p className="mb-11 text-center font-body text-sm font-medium text-white/60 tracking-widest uppercase">
                Sign in to access Launcher
              </p>
              <form onSubmit={handleLogin}>
                <div className="mb-6 flex flex-col items-center">
                  <label
                    htmlFor="username"
                    className="mb-3 block text-center font-body text-xs font-bold text-white/70 uppercase tracking-widest"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                    className="w-full text-center font-body rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-base font-medium text-white outline-none backdrop-blur-md transition-all duration-300 focus:border-[#FFBA24]/50 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(255,186,36,0.15)]"
                    required
                  />
                </div>
                <div className="mb-6 flex flex-col items-center">
                  <label
                    htmlFor="password"
                    className="mb-3 block text-center font-body text-xs font-bold text-white/70 uppercase tracking-widest"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full text-center font-body rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-base font-medium text-white outline-none backdrop-blur-md transition-all duration-300 focus:border-[#FFBA24]/50 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(255,186,36,0.15)]"
                    required
                  />
                </div>
                {error && (
                  <p className="mb-6 text-center font-body text-sm font-bold text-red-400 tracking-wide">
                    {error}
                  </p>
                )}
                <div className="mb-6 mt-8 flex justify-center">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center font-body rounded-2xl border border-white/10 border-t-white/30 bg-white/10 px-9 py-4 text-sm font-bold text-white uppercase tracking-widest backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#FFBA24]/80 hover:bg-[#FFBA24]/90 hover:text-black hover:shadow-[0_10px_25px_rgba(255,186,36,0.3)]"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

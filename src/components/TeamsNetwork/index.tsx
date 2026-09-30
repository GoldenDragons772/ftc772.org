"use client";

import { useState } from "react";

interface TeamItem {
  number: string;
  name: string;
  location: string;
  isInternational: boolean;
}

const usTeams: TeamItem[] = [
  { number: "11444", name: "Garnet Squadron", location: "SC", isInternational: false },
  { number: "30380", name: "BitFlip", location: "SC", isInternational: false },
  { number: "5064", name: "Aperture Science", location: "NC", isInternational: false },
  { number: "7149", name: "ENFORCERS", location: "NJ", isInternational: false },
  { number: "6168", name: "Maniacal Mechanics", location: "SC", isInternational: false },
  { number: "30355", name: "Black Box", location: "WA", isInternational: false },
  { number: "24769", name: "TalonSkies", location: "SC", isInternational: false },
  { number: "16010", name: "Astra Machina", location: "NE", isInternational: false },
  { number: "22437", name: "Demon Dogs", location: "NY", isInternational: false },
  { number: "25576", name: "Voyager X", location: "TX", isInternational: false },
  { number: "365", name: "MOE", location: "DE", isInternational: false },
];

const internationalTeams: TeamItem[] = [
  { number: "20265", name: "Heart of RoBots", location: "Romania", isInternational: true },
  { number: "19500", name: "RoBEARtics", location: "Canada", isInternational: true },
  { number: "26075", name: "Vampire Robotics", location: "Global", isInternational: true },
  { number: "19098", name: "Eastern Foxes", location: "Romania", isInternational: true },
  { number: "25538", name: "ARRA", location: "Romania", isInternational: true },
  { number: "28490", name: "ThunderBolts", location: "Greece", isInternational: true },
  { number: "33444", name: "ULYDALA", location: "Kazakhstan", isInternational: true },
  { number: "26587", name: "Triple Six", location: "UK", isInternational: true },
  { number: "25416", name: "Software Therapy", location: "Ireland", isInternational: true },
  { number: "19066", name: "AICitizens", location: "Romania", isInternational: true },
];

const allTeams = [...usTeams, ...internationalTeams];

export default function TeamsNetwork() {
  const [filter, setFilter] = useState<"all" | "us" | "intl">("all");
  const [search, setSearch] = useState("");

  const filteredUS = usTeams.filter(
    (t) =>
      t.number.includes(search) ||
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.location.toLowerCase().includes(search.toLowerCase())
  );

  const filteredIntl = internationalTeams.filter(
    (t) =>
      t.number.includes(search) ||
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="relative py-24 md:py-32">
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#FFBA24]">
              <span className="h-2 w-2 rounded-full bg-[#FFBA24] animate-pulse" />
              Connected Alliances
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl lowercase tracking-[0.06em] text-white"
              style={{ fontFamily: '"Supercharge Expand", sans-serif' }}
            >
              Our Robotics <span className="text-[#FFBA24]">Network</span>
            </h2>
            <p className="mt-3 max-w-xl text-base text-white/70">
              FTC 772 proudly collaborates, scrimmages, and trades scouting data with 21 elite
              teams across 8 US states and 6 countries.
            </p>
          </div>

          {/* Interactive Filters & Search */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex rounded-full border border-white/10 bg-black/40 p-1 backdrop-blur-md">
              <button
                onClick={() => setFilter("all")}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider uppercase transition-all ${
                  filter === "all"
                    ? "bg-[#FFBA24] text-black shadow-lg shadow-[#FFBA24]/30"
                    : "text-white/60 hover:text-white"
                }`}
              >
                All (21)
              </button>
              <button
                onClick={() => setFilter("us")}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider uppercase transition-all ${
                  filter === "us"
                    ? "bg-white text-black shadow-lg shadow-white/30"
                    : "text-white/60 hover:text-white"
                }`}
              >
                US (11)
              </button>
              <button
                onClick={() => setFilter("intl")}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider uppercase transition-all ${
                  filter === "intl"
                    ? "bg-[#FFBA24] text-black shadow-lg shadow-[#FFBA24]/30"
                    : "text-white/60 hover:text-white"
                }`}
              >
                International (10)
              </button>
            </div>

            <div className="relative">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search team or state..."
                className="w-48 sm:w-56 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs text-white placeholder-white/40 backdrop-blur-md focus:border-[#FFBA24] focus:outline-none transition-colors"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/40 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Main Network Display Card */}
        <div className="glass-panel-strong relative overflow-hidden rounded-[32px] p-6 sm:p-8 md:p-12">
          {/* Ambient wireframe accent in background */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[#FFBA24]/5 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />

          {/* Graphic Banner Title inside Frame matching attached image */}
          <div className="mb-8 border-b border-white/10 pb-6 flex items-center justify-between">
            <div
              className="text-2xl sm:text-3xl md:text-4xl lowercase tracking-wider text-white"
              style={{ fontFamily: '"Supercharge Straight Expand", sans-serif' }}
            >
              our robotics network
            </div>
            <div className="flex items-center gap-4 text-xs tracking-widest text-white/50">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-white" /> US
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#FFBA24]" /> International
              </span>
            </div>
          </div>

          {/* Dual Columns Grid */}
          <div className="grid gap-x-12 gap-y-2 lg:grid-cols-2">
            {/* Left Column: US Teams (White Numbers) */}
            {(filter === "all" || filter === "us") && (
              <div>
                <div className="mb-4 flex items-center justify-between border-b border-white/5 pb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
                  <span>US Teams</span>
                  <span>{filteredUS.length} Teams</span>
                </div>
                <div className="space-y-1">
                  {filteredUS.map((team) => (
                    <div
                      key={team.number}
                      className="group flex items-center justify-between rounded-xl px-4 py-2.5 transition-all duration-200 hover:bg-white/5 hover:translate-x-1"
                    >
                      <div className="flex items-center gap-5">
                        <span
                          className="min-w-[5.5rem] text-xl font-bold tracking-wider text-white transition-colors group-hover:text-white"
                          style={{ fontFamily: '"Supercharge Straight Expand", sans-serif' }}
                        >
                          {team.number.replace(/0/g, "o")}
                        </span>
                        <span className="text-sm font-medium text-white/90 group-hover:text-white">
                          {team.name}
                        </span>
                      </div>
                      <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-semibold text-white/70 group-hover:border-white/30 group-hover:text-white">
                        {team.location}
                      </span>
                    </div>
                  ))}
                  {filteredUS.length === 0 && (
                    <div className="py-6 text-center text-xs text-white/40">No matching US teams found</div>
                  )}
                </div>
              </div>
            )}

            {/* Right Column: International Teams (Gold Numbers) */}
            {(filter === "all" || filter === "intl") && (
              <div className={filter === "intl" ? "lg:col-span-2" : ""}>
                <div className="mb-4 flex items-center justify-between border-b border-white/5 pb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FFBA24]/60">
                  <span>International Teams</span>
                  <span>{filteredIntl.length} Teams</span>
                </div>
                <div className="space-y-1">
                  {filteredIntl.map((team) => (
                    <div
                      key={team.number}
                      className="group flex items-center justify-between rounded-xl px-4 py-2.5 transition-all duration-200 hover:bg-[#FFBA24]/5 hover:translate-x-1"
                    >
                      <div className="flex items-center gap-5">
                        <span
                          className="min-w-[5.5rem] text-xl font-bold tracking-wider text-[#FFBA24] transition-colors group-hover:text-[#FFD876]"
                          style={{ fontFamily: '"Supercharge Straight Expand", sans-serif' }}
                        >
                          {team.number.replace(/0/g, "o")}
                        </span>
                        <span className="text-sm font-medium text-white/90 group-hover:text-white">
                          {team.name}
                        </span>
                      </div>
                      <span className="rounded-md border border-[#FFBA24]/20 bg-[#FFBA24]/10 px-2.5 py-0.5 text-xs font-semibold text-[#FFBA24] group-hover:border-[#FFBA24]/40">
                        {team.location}
                      </span>
                    </div>
                  ))}
                  {filteredIntl.length === 0 && (
                    <div className="py-6 text-center text-xs text-white/40">No matching international teams found</div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Quick Alliance Stats Bar */}
          <div className="mt-10 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-white font-names">21</div>
              <div className="text-[10px] uppercase tracking-wider text-white/40 mt-0.5">Connected Teams</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white font-names">8</div>
              <div className="text-[10px] uppercase tracking-wider text-white/40 mt-0.5">US States</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#FFBA24] font-names">6</div>
              <div className="text-[10px] uppercase tracking-wider text-white/40 mt-0.5">Countries</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#FFBA24] font-names">1oo%</div>
              <div className="text-[10px] uppercase tracking-wider text-white/40 mt-0.5">Gracious Professionalism</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

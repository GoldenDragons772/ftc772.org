"use client";

import { useState } from "react";
import AnimatedStat from "@/components/Common/AnimatedStat";

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
  { number: "20265", name: "Heart of RoBots", location: "Bucharest, Romania", isInternational: true },
  { number: "19500", name: "RoBEARtics", location: "Alberta, Canada", isInternational: true },
  { number: "26075", name: "Vampire Robotics", location: "Romania / Global", isInternational: true },
  { number: "19098", name: "Eastern Foxes", location: "Romania", isInternational: true },
  { number: "25538", name: "ARRA", location: "Romania", isInternational: true },
  { number: "28490", name: "ThunderBolts", location: "Athens, Greece", isInternational: true },
  { number: "33444", name: "ULYDALA", location: "Almaty, Kazakhstan", isInternational: true },
  { number: "26587", name: "Triple Six", location: "England, UK", isInternational: true },
  { number: "25416", name: "Software Therapy", location: "Dublin, Ireland", isInternational: true },
  { number: "19066", name: "AICitizens", location: "Focșani, Romania", isInternational: true },
];

const allTeams = [...usTeams, ...internationalTeams];

import {
  WORLD_COUNTRY_PATHS,
  MAP_PIN_COORDS,
  COUNTRY_SUB_DOTS,
  MAP_VIEWBOX,
  MapPinCoord,
} from "./worldMapData";

interface CountryPin extends MapPinCoord {
  teams: TeamItem[];
}

const countryPins: CountryPin[] = MAP_PIN_COORDS.map((pin) => {
  let teams: TeamItem[] = [];
  if (pin.id === "usa") teams = usTeams;
  else if (pin.id === "canada")
    teams = [{ number: "19500", name: "RoBEARtics", location: "Alberta, Canada", isInternational: true }];
  else if (pin.id === "ireland")
    teams = [{ number: "25416", name: "Software Therapy", location: "Dublin, Ireland", isInternational: true }];
  else if (pin.id === "uk")
    teams = [{ number: "26587", name: "Triple Six", location: "England, UK", isInternational: true }];
  else if (pin.id === "romania")
    teams = [
      { number: "20265", name: "Heart of RoBots", location: "Bucharest, Romania", isInternational: true },
      { number: "19098", name: "Eastern Foxes", location: "Romania", isInternational: true },
      { number: "25538", name: "ARRA", location: "Romania", isInternational: true },
      { number: "19066", name: "AICitizens", location: "Focșani, Romania", isInternational: true },
      { number: "26075", name: "Vampire Robotics", location: "Romania / Global", isInternational: true },
    ];
  else if (pin.id === "greece")
    teams = [{ number: "28490", name: "ThunderBolts", location: "Athens, Greece", isInternational: true }];
  else if (pin.id === "kazakhstan")
    teams = [{ number: "33444", name: "ULYDALA", location: "Almaty, Kazakhstan", isInternational: true }];

  return {
    ...pin,
    teams,
  };
});

export default function TeamsNetwork() {
  const [viewMode, setViewMode] = useState<"map" | "directory">("map");
  const [selectedCountryId, setSelectedCountryId] = useState<string>("usa");

  const selectedCountry = countryPins.find((c) => c.id === selectedCountryId) || countryPins[0];

  return (
    <section className="relative py-12 md:py-16">
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#FFBA24]">
              <span className="h-2 w-2 rounded-full bg-[#FFBA24] animate-pulse" />
              <span>03</span>
              <span>Connected Alliances</span>
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

          {/* View Switcher: Map View & Directory View */}
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 p-1 backdrop-blur-md">
            <button
              onClick={() => setViewMode("map")}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                viewMode === "map"
                  ? "bg-[#FFBA24] text-black shadow-lg shadow-[#FFBA24]/30"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20M12 2a14.5 14.5 0 0 1 0 20M2 12h20" />
              </svg>
              <span>Map View</span>
            </button>
            <button
              onClick={() => setViewMode("directory")}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                viewMode === "directory"
                  ? "bg-white text-black shadow-lg shadow-white/30"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3.01" y2="6" />
                <line x1="3" y1="12" x2="3.01" y2="12" />
                <line x1="3" y1="18" x2="3.01" y2="18" />
              </svg>
              <span>Directory</span>
            </button>
          </div>
        </div>

        {/* Main Network Display Card */}
        <div className="glass-panel-strong relative overflow-hidden rounded-[32px] p-6 sm:p-8 md:p-10">
          {/* Ambient wireframe accent in background */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[#FFBA24]/5 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />

          {/* Banner Title Inside Frame */}
          <div className="mb-6 border-b border-white/10 pb-5 flex flex-wrap items-center justify-between gap-4">
            <div
              className="text-2xl sm:text-3xl md:text-4xl lowercase tracking-wider text-white"
              style={{ fontFamily: '"Supercharge Straight Expand", sans-serif' }}
            >
              our robotics network
            </div>
            <div className="flex items-center gap-4 text-xs tracking-widest text-white/50">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_8px_#FFFFFF]" /> US Base
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#FFBA24] shadow-[0_0_8px_#FFBA24]" /> International Partner
              </span>
            </div>
          </div>

          {/* ═════════════════════════════════════════════════════════════════ */}
          {/* 1. GRAPHICAL MAP VIEW (White Outline with Glowing Gold Pins)    */}
          {/* ═════════════════════════════════════════════════════════════════ */}
          {viewMode === "map" && (
            <div className="space-y-6 animate-fadeIn">
              {/* Country Selection Chips */}
              <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40 mr-1 flex-shrink-0">
                  Select Country:
                </span>
                {countryPins.map((cp) => (
                  <button
                    key={cp.id}
                    onClick={() => setSelectedCountryId(cp.id)}
                    className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wider transition-all duration-200 ${
                      selectedCountryId === cp.id
                        ? "border border-[#FFBA24] bg-[#FFBA24]/20 text-[#FFD876] shadow-sm shadow-[#FFBA24]/20"
                        : "border border-white/10 bg-white/5 text-white/60 hover:border-white/25 hover:text-white"
                    }`}
                  >
                    <span>{cp.flag}</span>
                    <span>{cp.name}</span>
                    <span className="rounded-full bg-black/40 px-1.5 py-0.2 text-[10px] text-white/70">
                      {cp.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* Graphic World Map Frame (Crisp Vector SVG) */}
              <div className="relative w-full aspect-[1000/500] min-h-[340px] sm:min-h-[440px] rounded-2xl overflow-hidden border border-white/10 bg-[#08090d] shadow-2xl">
                <svg
                  viewBox={MAP_VIEWBOX}
                  className="w-full h-full select-none"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    {/* Telemetry Arc Gradient */}
                    <linearGradient id="vectorTelemetryGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                      <stop offset="30%" stopColor="#FFBA24" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="#FFBA24" stopOpacity="0.35" />
                    </linearGradient>

                    {/* Grid Pattern */}
                    <pattern id="vectorGridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
                    </pattern>

                    {/* Ambient Glows */}
                    <radialGradient id="hqRadialGlow" cx="29%" cy="36%" r="22%">
                      <stop offset="0%" stopColor="#FFBA24" stopOpacity="0.14" />
                      <stop offset="100%" stopColor="#FFBA24" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="euRadialGlow" cx="54%" cy="28%" r="24%">
                      <stop offset="0%" stopColor="#FFBA24" stopOpacity="0.12" />
                      <stop offset="100%" stopColor="#FFBA24" stopOpacity="0" />
                    </radialGradient>

                    {/* Golden Glow Filter */}
                    <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Ambient Grid & Glow Backdrops */}
                  <rect width="100%" height="100%" fill="url(#vectorGridPattern)" />
                  <rect width="100%" height="100%" fill="url(#hqRadialGlow)" />
                  <rect width="100%" height="100%" fill="url(#euRadialGlow)" />

                  {/* Vector World Countries Layer */}
                  <g className="world-countries-layer">
                    {WORLD_COUNTRY_PATHS.map((country) => {
                      const isPartner = !!country.partnerId;
                      const isSelected = selectedCountryId === country.partnerId;

                      if (isPartner && country.partnerId) {
                        return (
                          <path
                            key={country.id}
                            id={`vector-country-${country.partnerId}`}
                            d={country.d}
                            onClick={() => setSelectedCountryId(country.partnerId!)}
                            className="cursor-pointer transition-all duration-300"
                            fill={
                              isSelected
                                ? "rgba(255, 186, 36, 0.38)"
                                : "rgba(255, 186, 36, 0.12)"
                            }
                            stroke={isSelected ? "#FFD876" : "#FFBA24"}
                            strokeWidth={isSelected ? 2.2 : 1.1}
                            filter={isSelected ? "url(#goldGlow)" : undefined}
                          >
                            <title suppressHydrationWarning>{country.name} ({countryPins.find((p) => p.id === country.partnerId)?.count} Teams)</title>
                          </path>
                        );
                      }

                      return (
                        <path
                          key={country.id}
                          d={country.d}
                          className="transition-colors duration-200"
                          fill="rgba(255, 255, 255, 0.025)"
                          stroke="rgba(255, 255, 255, 0.18)"
                          strokeWidth={0.65}
                        />
                      );
                    })}
                  </g>

                  {/* Telemetry Alliance Arcs */}
                  <g className="arcs-layer">
                    {countryPins
                      .filter((c) => c.arcPath)
                      .map((c) => {
                        const isSelected = selectedCountryId === c.id;
                        return (
                          <path
                            key={`vector-arc-${c.id}`}
                            d={c.arcPath!}
                            fill="none"
                            stroke="url(#vectorTelemetryGrad)"
                            strokeWidth={isSelected ? 2.4 : 1.3}
                            strokeDasharray={isSelected ? "6 3" : "4 4"}
                            strokeOpacity={isSelected ? 0.95 : 0.45}
                            filter={isSelected ? "url(#goldGlow)" : undefined}
                            className="transition-all duration-300"
                          />
                        );
                      })}
                  </g>

                  {/* White Sub-Dots Layer for Countries with Multiple Connected Teams */}
                  <g className="subdots-layer">
                    {COUNTRY_SUB_DOTS.map((dot) => {
                      const isCountrySelected = selectedCountryId === dot.countryId;
                      return (
                        <g
                          key={`subdot-${dot.countryId}-${dot.number}`}
                          className="group/subdot cursor-pointer transition-transform duration-200"
                          transform={`translate(${dot.x}, ${dot.y})`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedCountryId(dot.countryId);
                          }}
                        >
                          {/* Ambient soft white halo */}
                          <circle
                            r={isCountrySelected ? 5.0 : 3.8}
                            fill="none"
                            stroke="#FFFFFF"
                            strokeWidth={0.9}
                            className={`animate-pulse ${isCountrySelected ? "opacity-70" : "opacity-35"}`}
                            style={{ animationDuration: "2.4s" }}
                          />

                          {/* Crisp White Sub-Dot */}
                          <circle
                            r={isCountrySelected ? 2.8 : 2.2}
                            fill="#FFFFFF"
                            stroke="rgba(0, 0, 0, 0.85)"
                            strokeWidth={0.9}
                            className="transition-all duration-200 group-hover/subdot:scale-150"
                            filter="drop-shadow(0 0 3px rgba(255, 255, 255, 1))"
                          />

                          {/* Hover tooltip */}
                          <title>{`${dot.number} · ${dot.name} (${dot.location})`}</title>
                        </g>
                      );
                    })}
                  </g>

                  {/* Glowing Pin Beacons & Interactive Markers */}
                  <g className="pins-layer">
                    {countryPins.map((cp) => {
                      const isSelected = selectedCountryId === cp.id;
                      const isHQ = cp.id === "usa";
                      const isTop = cp.badgePosition === "top";
                      const badgeY = isTop ? -20 : 20;

                      return (
                        <g
                          key={`vector-pin-${cp.id}`}
                          onClick={() => setSelectedCountryId(cp.id)}
                          transform={`translate(${cp.x}, ${cp.y})`}
                          className="cursor-pointer group/pin"
                        >
                          {/* Expanding Ambient Radar Pulse */}
                          <circle
                            r={isHQ ? 8 : 6}
                            fill="none"
                            stroke={isHQ ? "#FFFFFF" : "#FFBA24"}
                            strokeWidth={1.6}
                            className={`animate-ping ${isHQ ? "opacity-70" : "opacity-50"}`}
                            style={{ animationDuration: isHQ ? "2.2s" : "3.0s" }}
                          />

                          {isSelected && (
                            <circle
                              r={isHQ ? 12 : 10}
                              fill="none"
                              stroke="#FFBA24"
                              strokeWidth={1.2}
                              className="animate-pulse opacity-60"
                            />
                          )}

                          {/* Center Radiant Beacon Dot */}
                          <circle
                            r={isHQ ? 5.5 : isSelected ? 5.0 : 4.0}
                            fill={isHQ ? "#FFFFFF" : "#FFBA24"}
                            stroke={isHQ ? "#FFBA24" : "#000000"}
                            strokeWidth={isHQ ? 2 : 1.5}
                            filter={isSelected || isHQ ? "url(#goldGlow)" : undefined}
                            className="transition-all duration-200 group-hover/pin:scale-125"
                          />

                          {/* Permanent Mini Pill Badge */}
                          <g transform={`translate(0, ${badgeY})`} className="transition-all duration-200">
                            {(() => {
                              const pillWidth = Math.max(74, Math.round(cp.label.length * 6.5 + 20));
                              return (
                                <>
                                  <rect
                                    x={-pillWidth / 2}
                                    y="-9"
                                    width={pillWidth}
                                    height="18"
                                    rx="9"
                                    className={`transition-all duration-200 ${
                                      isSelected
                                        ? "fill-[#FFBA24] stroke-white"
                                        : "fill-black/85 stroke-white/20 group-hover/pin:stroke-[#FFBA24]/60"
                                    }`}
                                    strokeWidth={1}
                                    filter={isSelected ? "drop-shadow(0 2px 8px rgba(255, 186, 36, 0.5))" : undefined}
                                  />
                                  <text
                                    textAnchor="middle"
                                    y="3.5"
                                    className={`text-[9.5px] font-bold tracking-wider transition-colors duration-200 select-none ${
                                      isSelected ? "fill-black" : "fill-white/90 group-hover/pin:fill-[#FFBA24]"
                                    }`}
                                    style={{ fontFamily: "sans-serif" }}
                                  >
                                    {cp.label}
                                  </text>
                                </>
                              );
                            })()}
                          </g>
                        </g>
                      );
                    })}
                  </g>
                </svg>

                {/* Interactive Selected Country Roster Card (Floating on Map) */}
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-30 max-w-[calc(100%-24px)] sm:max-w-sm rounded-2xl border border-white/15 bg-black/80 p-4 backdrop-blur-xl shadow-2xl transition-all duration-300">
                  <div className="mb-2.5 flex items-center justify-between border-b border-white/10 pb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{selectedCountry.flag}</span>
                      <div>
                        <div className="text-sm font-bold text-white tracking-wide">
                          {selectedCountry.name}
                        </div>
                        <div className="text-[10px] uppercase tracking-wider text-[#FFBA24] font-semibold">
                          {selectedCountry.count}{" "}
                          {selectedCountry.count === 1 ? "Connected Team" : "Connected Teams"}
                        </div>
                      </div>
                    </div>
                    {selectedCountry.id === "usa" && (
                      <span className="rounded-md border border-[#FFBA24]/30 bg-[#FFBA24]/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#FFBA24]">
                        FTC 772 HQ
                      </span>
                    )}
                  </div>

                  {/* Scrollable list of teams in this country */}
                  <div className="max-h-36 sm:max-h-44 space-y-1.5 overflow-y-auto pr-1 text-xs">
                    {selectedCountry.teams.map((team) => (
                      <div
                        key={team.number}
                        className="flex items-center justify-between rounded-lg bg-white/5 px-2.5 py-1.5 transition-colors hover:bg-white/10"
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className="font-bold text-[#FFBA24] tracking-wider text-xs"
                            style={{ fontFamily: '"Supercharge Straight Expand", sans-serif' }}
                          >
                            {team.number.replace(/0/g, "o")}
                          </span>
                          <span className="font-medium text-white/90 truncate max-w-[140px] sm:max-w-[170px]">
                            {team.name}
                          </span>
                        </div>
                        <span className="rounded bg-black/60 px-1.5 py-0.5 text-[10px] font-semibold text-white/70">
                          {team.location}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ═════════════════════════════════════════════════════════════════ */}
          {/* 2. DIRECTORY VIEW (Dual-Column Full Roster)                     */}
          {/* ═════════════════════════════════════════════════════════════════ */}
          {viewMode === "directory" && (
            <div className="grid gap-x-12 gap-y-6 lg:grid-cols-2 animate-fadeIn">
              {/* Left Column: US Teams */}
              <div>
                <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
                  <span className="flex items-center gap-2">
                    <span>🇺🇸</span>
                    <span>United States Alliances</span>
                  </span>
                  <span>11 Teams</span>
                </div>
                <div className="space-y-1">
                  {usTeams.map((team) => (
                    <div
                      key={team.number}
                      className="group flex items-center justify-between rounded-xl px-4 py-2.5 transition-all duration-200 hover:bg-white/5 hover:translate-x-1"
                    >
                      <div className="flex items-center gap-4 sm:gap-6">
                        <span
                          className="w-24 sm:w-28 flex-shrink-0 text-left text-xl font-bold tracking-wider text-white transition-colors group-hover:text-white"
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
                </div>
              </div>

              {/* Right Column: International Teams */}
              <div>
                <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FFBA24]/70">
                  <span className="flex items-center gap-2">
                    <span>🌍</span>
                    <span>International Alliances</span>
                  </span>
                  <span>10 Teams</span>
                </div>
                <div className="space-y-1">
                  {internationalTeams.map((team) => (
                    <div
                      key={team.number}
                      className="group flex items-center justify-between rounded-xl px-4 py-2.5 transition-all duration-200 hover:bg-[#FFBA24]/5 hover:translate-x-1"
                    >
                      <div className="flex items-center gap-4 sm:gap-6">
                        <span
                          className="w-24 sm:w-28 flex-shrink-0 text-left text-xl font-bold tracking-wider text-[#FFBA24] transition-colors group-hover:text-[#FFD876]"
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
                </div>
              </div>
            </div>
          )}

          {/* Quick Alliance Stats Bar */}
          <div className="mt-10 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div>
              <AnimatedStat value="21" className="text-2xl font-bold text-white font-names" />
              <div className="text-[10px] uppercase tracking-wider text-white/40 mt-0.5">Connected Teams</div>
            </div>
            <div>
              <AnimatedStat value="8" className="text-2xl font-bold text-white font-names" />
              <div className="text-[10px] uppercase tracking-wider text-white/40 mt-0.5">US States</div>
            </div>
            <div>
              <AnimatedStat value="6" className="text-2xl font-bold text-[#FFBA24] font-names" />
              <div className="text-[10px] uppercase tracking-wider text-white/40 mt-0.5">Countries</div>
            </div>
            <div>
              <AnimatedStat value="1oo%" className="text-2xl font-bold text-[#FFBA24] font-names" />
              <div className="text-[10px] uppercase tracking-wider text-white/40 mt-0.5">Gracious Professionalism</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

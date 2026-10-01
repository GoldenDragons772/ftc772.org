"use client";
import React, { useState, useEffect, useCallback } from 'react'
import teamData from './teamData'
import Image from 'next/image'
import { Team as TeamType } from '@/types/team'

function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamType | null>(null);

  const captains = teamData
    .filter(user => user.type === 'captain')
    .sort((a, b) => a.name.localeCompare(b.name));
  const members = teamData
    .filter(user => user.type === 'member')
    .sort((a, b) => a.name.localeCompare(b.name));
  const alumni = teamData.filter(user => user.type === 'mentor').sort((a, b) => {
    const yearA = a.gradYear ? parseInt(a.gradYear, 10) : 0;
    const yearB = b.gradYear ? parseInt(b.gradYear, 10) : 0;
    
    if (yearA !== yearB) {
      return yearB - yearA;
    }
    
    return a.name.localeCompare(b.name);
  });

  const allInteractiveMembers = [...captains, ...members, ...alumni];

  const handlePrevMember = useCallback(() => {
    if (!selectedMember) return;
    const currentIndex = allInteractiveMembers.findIndex(m => m.id === selectedMember.id);
    if (currentIndex === -1) return;
    const prevIndex = (currentIndex - 1 + allInteractiveMembers.length) % allInteractiveMembers.length;
    setSelectedMember(allInteractiveMembers[prevIndex]);
  }, [selectedMember, allInteractiveMembers]);

  const handleNextMember = useCallback(() => {
    if (!selectedMember) return;
    const currentIndex = allInteractiveMembers.findIndex(m => m.id === selectedMember.id);
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + 1) % allInteractiveMembers.length;
    setSelectedMember(allInteractiveMembers[nextIndex]);
  }, [selectedMember, allInteractiveMembers]);

  useEffect(() => {
    if (!selectedMember) return;

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedMember(null);
      } else if (e.key === 'ArrowLeft') {
        handlePrevMember();
      } else if (e.key === 'ArrowRight') {
        handleNextMember();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedMember, handlePrevMember, handleNextMember]);

  const getRoleStyle = (role: string) => {
    const r = role.toLowerCase();
    const isCaptain = r.includes('captain');
    
    let baseColor = 'gray';
    let borderClass = 'border-gray-500/60';
    
    if (r.includes('mech')) { baseColor = isCaptain ? 'purple' : 'pastel-purple'; borderClass = isCaptain ? 'border-purple-500/60' : 'border-purple-400/60'; }
    else if (r.includes('soft')) { baseColor = isCaptain ? 'blue' : 'pastel-blue'; borderClass = isCaptain ? 'border-blue-500/60' : 'border-blue-400/60'; }
    else if (r.includes('drive')) { baseColor = isCaptain ? 'orange' : 'pastel-orange'; borderClass = 'border-orange-400/60'; }
    else if (r.includes('strat')) { baseColor = 'orange'; borderClass = 'border-orange-500/60'; }
    else if (r.includes('elect')) { baseColor = 'yellow'; borderClass = 'border-[#FFBA24]/60'; }
    else if (r.includes('outreach') || r.includes('port')) { baseColor = isCaptain ? 'pink' : 'pastel-pink'; borderClass = isCaptain ? 'border-pink-500/60' : 'border-pink-400/60'; }
    else if (r.includes('scout')) { baseColor = 'cyan'; borderClass = 'border-cyan-400/60'; }
    else if (r.includes('design') || r.includes('media')) { baseColor = 'green'; borderClass = 'border-green-500/60'; }
    else if (r.includes('cnc')) { baseColor = 'indigo'; borderClass = 'border-indigo-500/60'; }

    const bgClass = isCaptain ? `metallic-${baseColor} border-[rgba(255,255,255,0.4)]` : `bg-black/20 ${borderClass}`;
    const textClass = isCaptain ? (baseColor === 'yellow' || baseColor.startsWith('pastel-') ? 'text-black' : 'text-white') : 'text-white/80';
    
    return { bgClass, textClass };
  };

  const selectedIndex = selectedMember ? allInteractiveMembers.findIndex(m => m.id === selectedMember.id) : -1;

  return (
    <>
      <section id="team" className="relative overflow-hidden">
        <div className="container relative z-10 py-16 md:py-18 lg:py-24">

          <div className="mb-4 flex justify-center">
            <div className="rounded-md border border-white/10 bg-black px-5 py-2 text-m font-semibold uppercase tracking-[0.5em] text-yellow shadow-[0_0_25px_rgba(0,0,0,0.35)]">
              Captains
            </div>
          </div>
          <div className="userProfiles flex flex-wrap justify-center items-stretch gap-4 mb-8">
            {captains.map((user) => (
              <div
                key={user.id}
                onClick={() => setSelectedMember(user)}
                role="button"
                tabIndex={0}
                aria-label={`View bio for ${user.name}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedMember(user);
                  }
                }}
                className="team-card captain-card relative w-52 min-h-[220px] flex flex-col py-4 px-4 rounded-[24px] overflow-hidden border border-yellow/60 shadow-[0_15px_30px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.05)] bg-[#0c0c0c]/80 backdrop-blur-[2px] transition-all duration-300 hover:-translate-y-2 hover:border-yellow hover:shadow-[0_20px_60px_rgba(251,176,64,0.45)] cursor-pointer select-none group focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow"
              >
                <div
                  className="absolute top-3 right-3 flex h-6 w-6 items-center justify-center rounded-full bg-black/60 border border-yellow/40 text-yellow opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-sm pointer-events-none"
                  aria-hidden="true"
                >
                  <svg className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="image w-full h-24 flex justify-center">
                  <Image width={96} height={96} className='rounded-full border border-white/10 object-cover w-24 h-24 group-hover:ring-2 group-hover:ring-yellow/60 transition-all duration-300' src={`/images/team/members/${user.image}`} alt={user.name} />
                </div>
                <div className="pt-3 text-center font-names lowercase tracking-wide whitespace-nowrap leading-snug font-bold gold-shine drop-shadow-[0_0_10px_rgba(255,186,36,0.3)] text-[16px]">
                  {user.name}
                </div>
                <div className="role mt-3 flex flex-wrap justify-center items-center content-start gap-1.5 text-center flex-grow">
                  {user.role.map((role, idx) => {
                    const style = getRoleStyle(role);
                    const rLower = role.toLowerCase();
                    const isLongBadge = rLower.includes('drive') || rLower.includes('strat') || ((rLower.includes('outreach') || rLower.includes('port')) && rLower.includes('captain'));
                    const badgeTextSize = isLongBadge ? 'text-[8.5px]' : 'text-[10px]';
                    return (
                      <div key={idx} className={`inline-flex items-center justify-center h-[22px] rounded-full border ${style.bgClass} px-3`}>
                        <span className={`${badgeTextSize} font-semibold uppercase tracking-[0.15em] whitespace-nowrap ${style.textClass} mt-[1px]`}>
                          {role}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 mb-8 flex items-center gap-6">
            <h2 className="text-xl md:text-2xl font-semibold uppercase tracking-[0.35em] text-yellow">
              Team Members
            </h2>
            <div className="h-[1px] bg-yellow/30 flex-grow rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16">
            {members.map((user) => (
              <div
                key={user.id}
                onClick={() => setSelectedMember(user)}
                role="button"
                tabIndex={0}
                aria-label={`View bio for ${user.name}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedMember(user);
                  }
                }}
                className="team-card member-card relative flex items-center gap-5 py-4 px-5 rounded-[24px] overflow-hidden backdrop-blur-[2px] transition-all duration-300 hover:-translate-y-1 shadow-[0_15px_30px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.05)] bg-[#0c0c0c]/80 border border-white/10 hover:border-yellow/70 hover:shadow-[0_20px_50px_rgba(251,176,64,0.25)] cursor-pointer select-none group focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow/50"
              >
                <div
                  className="absolute top-3 right-3 flex h-6 w-6 items-center justify-center rounded-full bg-black/60 border border-yellow/40 text-yellow opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-sm pointer-events-none"
                  aria-hidden="true"
                >
                  <svg className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="flex-shrink-0">
                  <Image width={72} height={72} className='rounded-full border border-white/10 object-cover w-[72px] h-[72px] group-hover:ring-2 group-hover:ring-yellow/60 transition-all duration-300' src={`/images/team/members/${user.image}`} alt={user.name} />
                </div>
                <div className="flex flex-col flex-grow text-left overflow-hidden pr-6">
                  <div className="flex items-center gap-2 mb-2 w-full overflow-hidden">
                    <div className="font-names lowercase tracking-wide leading-snug truncate text-[16px] text-white group-hover:text-yellow transition-colors duration-200">{user.name}</div>
                  </div>
                  <div className="flex flex-wrap items-center content-start gap-1.5">
                    {user.role.map((role, idx) => {
                      const style = getRoleStyle(role);
                      const rLower = role.toLowerCase();
                      const isLongBadge = rLower.includes('drive') || rLower.includes('strat') || ((rLower.includes('outreach') || rLower.includes('port')) && rLower.includes('captain'));
                      const badgeTextSize = isLongBadge ? 'text-[8.5px]' : 'text-[10px]';
                      return (
                        <div key={idx} className={`inline-flex items-center justify-center h-[22px] rounded-full border ${style.bgClass} px-3`}>
                          <span className={`${badgeTextSize} font-semibold uppercase tracking-[0.15em] whitespace-nowrap ${style.textClass} mt-[1px]`}>
                            {role}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 mb-8 flex items-center gap-6">
            <h2 className="text-xl md:text-2xl font-semibold uppercase tracking-[0.35em] text-yellow">
              Alumni
            </h2>
            <div className="h-[1px] bg-yellow/30 flex-grow rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16">
            {alumni.map((user) => {
              const isCaptain = user.role.some(role => role.toLowerCase().includes('captain'));
              return (
                <div
                  key={user.id}
                  onClick={() => setSelectedMember(user)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View profile for ${user.name}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedMember(user);
                    }
                  }}
                  className={`team-card alumni-card relative flex items-center gap-5 py-4 px-5 rounded-[24px] overflow-hidden backdrop-blur-[2px] transition-all duration-300 hover:-translate-y-1 shadow-[0_15px_30px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.05)] bg-[#0c0c0c]/80 cursor-pointer select-none group focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow/50 ${isCaptain ? 'border border-yellow/60 hover:shadow-[0_20px_60px_rgba(251,176,64,0.35)]' : 'border border-white/10 hover:border-yellow/50 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]'}`}
                >
                  <div
                    className="absolute top-3 right-3 flex h-6 w-6 items-center justify-center rounded-full bg-black/60 border border-yellow/40 text-yellow opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-sm pointer-events-none"
                    aria-hidden="true"
                  >
                    <svg className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <div className="flex-shrink-0">
                    <Image width={72} height={72} className='rounded-full border border-white/10 object-cover w-[72px] h-[72px] group-hover:ring-2 group-hover:ring-yellow/50 transition-all duration-300' src={`/images/team/members/${user.image}`} alt={user.name} />
                  </div>
                  <div className="flex flex-col flex-grow text-left overflow-hidden pr-6">
                    <div className="flex items-center gap-2 mb-2 w-full overflow-hidden">
                      <div className={`font-names lowercase tracking-wide leading-snug truncate text-[16px] ${isCaptain ? 'gold-shine drop-shadow-[0_0_10px_rgba(255,186,36,0.3)] font-bold' : 'text-white group-hover:text-yellow transition-colors duration-200'}`}>{user.name}</div>
                      <span className={`flex-shrink-0 rounded-[6px] ${user.gradYear === '26' ? 'metallic-yellow' : 'metallic-silver'} px-2 py-[2px] text-[9px] font-black tracking-widest text-black border border-[rgba(255,255,255,0.4)] shadow-[0_0_10px_rgba(255,186,36,0.2)] uppercase -translate-y-[2px]`}>
                        C/O '{user.gradYear || '25'}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center content-start gap-1.5">
                      {user.role.map((role, idx) => {
                        const style = getRoleStyle(role);
                        const rLower = role.toLowerCase();
                        const isLongBadge = rLower.includes('drive') || rLower.includes('strat') || ((rLower.includes('outreach') || rLower.includes('port')) && rLower.includes('captain'));
                        const badgeTextSize = isLongBadge ? 'text-[8.5px]' : 'text-[10px]';
                        return (
                          <div key={idx} className={`inline-flex items-center justify-center h-[22px] rounded-full border ${style.bgClass} px-3`}>
                            <span className={`${badgeTextSize} font-semibold uppercase tracking-[0.15em] whitespace-nowrap ${style.textClass} mt-[1px]`}>
                              {role}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── DYNAMIC POP-OUT PROFILE MODAL ─── */}
      {selectedMember && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="member-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-modal-backdrop"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="relative w-full max-w-lg md:max-w-xl overflow-hidden rounded-[32px] border border-yellow/60 bg-gradient-to-b from-[#18181b] via-[#0f0f11] to-[#08080a] p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.9),0_0_60px_rgba(251,176,64,0.3)] animate-pop-in text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient golden top glow */}
            <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-80 h-80 bg-yellow/20 blur-[100px] rounded-full" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 w-60 h-60 bg-yellow/10 blur-[80px] rounded-full" />

            {/* Close Button */}
            <button
              onClick={() => setSelectedMember(null)}
              aria-label="Close profile card"
              className="absolute top-4 right-4 sm:top-5 sm:right-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white/70 backdrop-blur-sm transition-all duration-200 hover:border-yellow hover:text-yellow hover:scale-110 active:scale-95"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Profile Content */}
            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Member Avatar */}
              <div className="relative mb-4">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-yellow via-yellow/40 to-yellow/80 shadow-[0_0_35px_rgba(251,176,64,0.4)]">
                  <Image
                    width={128}
                    height={128}
                    className="w-full h-full rounded-full object-cover border-2 border-black"
                    src={`/images/team/members/${selectedMember.image}`}
                    alt={selectedMember.name}
                  />
                </div>
                {/* Captain Star / Emblem Badge */}
                {selectedMember.type === 'captain' && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] metallic-yellow text-black border border-white/50 shadow-[0_0_15px_rgba(251,176,64,0.6)]">
                    Captain
                  </div>
                )}
                {selectedMember.type === 'member' && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-[0.18em] bg-black/80 border border-white/20 text-white/80 shadow-md">
                    Member
                  </div>
                )}
                {selectedMember.type === 'mentor' && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-[0.18em] metallic-silver text-black border border-white/40 shadow-md">
                    C/O '{selectedMember.gradYear || '25'}
                  </div>
                )}
              </div>

              {/* Name */}
              <h3
                id="member-modal-title"
                className={`mt-2 font-names text-2xl sm:text-3xl font-bold lowercase tracking-wide ${
                  selectedMember.type === 'captain'
                    ? 'gold-shine drop-shadow-[0_0_12px_rgba(255,186,36,0.35)]'
                    : 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]'
                }`}
              >
                {selectedMember.name}
              </h3>

              {/* Subteams / Roles */}
              <div className="mt-3 flex flex-wrap justify-center items-center gap-1.5 max-w-md">
                {selectedMember.role.map((role, idx) => {
                  const style = getRoleStyle(role);
                  return (
                    <div
                      key={idx}
                      className={`inline-flex items-center justify-center h-[24px] rounded-full border ${style.bgClass} px-3.5`}
                    >
                      <span className={`text-[10px] font-bold uppercase tracking-[0.15em] whitespace-nowrap ${style.textClass} mt-[1px]`}>
                        {role}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Decorative Accent Divider */}
              <div className="my-5 w-24 h-[1px] bg-gradient-to-r from-transparent via-yellow/50 to-transparent" />

              {/* Personal Bio Card */}
              <div className="relative w-full rounded-2xl border border-white/10 bg-black/60 p-5 sm:p-6 shadow-[inset_0_2px_12px_rgba(0,0,0,0.8)]">
                <span className="block text-yellow/50 text-3xl font-serif leading-none select-none mb-1">
                  “
                </span>
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed italic font-light px-2 sm:px-4">
                  {selectedMember.bio || (selectedMember.type === 'mentor' ? `Proud alumni contributing to FTC 772 Golden Dragons.` : `Member of FTC Team 772 Golden Dragons.`)}
                </p>
                <span className="block text-yellow/50 text-3xl font-serif leading-none select-none mt-1 text-right">
                  ”
                </span>
              </div>

              {/* Navigation Controls */}
              <div className="mt-6 flex items-center justify-between w-full pt-4 border-t border-white/10">
                <button
                  onClick={handlePrevMember}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-white/15 bg-white/5 text-xs text-gray-300 hover:border-yellow/70 hover:text-yellow hover:bg-yellow/10 transition-all duration-200 active:scale-95"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>Prev</span>
                </button>
                <span className="text-[11px] text-gray-400 font-mono uppercase tracking-widest">
                  {selectedIndex + 1} of {allInteractiveMembers.length}
                </span>
                <button
                  onClick={handleNextMember}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-white/15 bg-white/5 text-xs text-gray-300 hover:border-yellow/70 hover:text-yellow hover:bg-yellow/10 transition-all duration-200 active:scale-95"
                >
                  <span>Next</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Helper tip */}
              <p className="mt-2 text-[10px] text-gray-500 tracking-wider">
                Tip: Use ← → keys to browse, Esc to close
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Team

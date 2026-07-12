"use client";
import React, { useEffect } from 'react'
import teamData from './teamData'
import Image from 'next/image'

function Team() {
  // Removed custom JS equalization because Tailwind's flex/grid `items-stretch` and `h-full` natively equalizes heights.
  const members = teamData.filter(user => user.type === 'member');
  const alumni = teamData.filter(user => user.type === 'mentor').sort((a, b) => {
    const yearA = a.gradYear ? parseInt(a.gradYear, 10) : 0;
    const yearB = b.gradYear ? parseInt(b.gradYear, 10) : 0;
    
    if (yearA !== yearB) {
      return yearB - yearA;
    }
    
    return a.name.localeCompare(b.name);
  });
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
  return (
    <>
      <section id="team" className="relative overflow-hidden">
        <div className="container relative z-10 py-16 md:py-18 lg:py-24">


          <div className="mb-4 flex justify-center">
            <div className="rounded-md border border-white/10 bg-black px-5 py-2 text-m font-semibold uppercase tracking-[0.5em] text-yellow shadow-[0_0_25px_rgba(0,0,0,0.35)]">
              Current Members
            </div>
          </div>
          <div className="userProfiles flex flex-wrap justify-center items-stretch gap-4 mb-8">
            {members.map((user, id) => (
              <div
                key={id}
                className="team-card member-card w-52 min-h-[220px] flex flex-col card py-4 px-4 rounded-[24px] border border-yellow/60 shadow-[0_15px_30px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.05)] bg-[#0c0c0c]/60 backdrop-blur-[2px] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(251,176,64,0.35)]"
              >
                <div className="image w-full h-24 flex justify-center">
                  <Image width={96} height={96} className='rounded-full border border-white/10 object-cover' src={`/images/team/members/${user.image}`} alt={user.name} />
                </div>
                    <div className={`pt-3 text-center font-names lowercase tracking-wide whitespace-nowrap leading-snug gold-shine drop-shadow-[0_0_10px_rgba(255,186,36,0.3)] font-bold ${user.name.includes("Marie") ? "text-[14.5px]" : "text-[16px]"}`}>{user.name}</div>
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
              Alumni
            </h2>
            <div className="h-[1px] bg-yellow/30 flex-grow rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16">
            {alumni.map((user, id) => {
              const isCaptain = user.role.some(role => role.toLowerCase().includes('captain'));
              return (
                <div
                  key={id}
                  className={`team-card alumni-card flex items-center gap-5 py-4 px-5 rounded-[24px] backdrop-blur-[2px] transition-all duration-300 hover:-translate-y-1 shadow-[0_15px_30px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.05)] bg-[#0c0c0c]/60 ${isCaptain ? 'border border-yellow/60 hover:shadow-[0_20px_60px_rgba(251,176,64,0.35)]' : 'border border-white/10 hover:border-[#FFBA24]/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]'}`}
                >
                  <div className="flex-shrink-0">
                    <Image width={72} height={72} className='rounded-full border border-white/10 object-cover w-[72px] h-[72px]' src={`/images/team/members/${user.image}`} alt={user.name} />
                  </div>
                  <div className="flex flex-col flex-grow text-left overflow-hidden">
                    <div className="flex items-center gap-2 mb-2 w-full overflow-hidden">
                      <div className={`font-names lowercase tracking-wide leading-snug truncate ${isCaptain ? 'gold-shine drop-shadow-[0_0_10px_rgba(255,186,36,0.3)] font-bold' : 'text-white'} ${user.name.includes("Marie") ? "text-[14.5px]" : "text-[16px]"}`}>{user.name}</div>
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
    </>
  )
}

export default Team

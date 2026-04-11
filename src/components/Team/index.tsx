"use client";
import React, { useEffect } from 'react'
import teamData from './teamData'

function Team() {
  useEffect(() => {
    const equalizeHeights = () => {
      const cards = document.querySelectorAll('.team-card') as NodeListOf<HTMLElement>;
      let maxH = 0;
      cards.forEach(c => { c.style.minHeight = '0px'; });
      cards.forEach(c => {
        if (c.offsetHeight > maxH) maxH = c.offsetHeight;
      });
      cards.forEach(c => { c.style.minHeight = `${maxH}px`; });
    };

    equalizeHeights();
    setTimeout(equalizeHeights, 100);
    setTimeout(equalizeHeights, 500);
    window.addEventListener('resize', equalizeHeights);
    return () => window.removeEventListener('resize', equalizeHeights);
  }, []);
  const members = teamData.filter(user => user.type === 'member');
  const captains = members.filter(user =>
    user.role.some(role => role.toLowerCase().includes('captain'))
  );
  const nonCaptains = members.filter(user =>
    !user.role.some(role => role.toLowerCase().includes('captain'))
  );
  const alumni = teamData.filter(user => user.type === 'mentor');
  const splitRole = (role: string) =>
    role.split("/").map(part => part.trim()).filter(Boolean);
  const getRoleStyle = (part: string) => {
    const r = part.toLowerCase();
    if (r.includes('mech')) return { border: 'border-red-600/60' };
    if (r.includes('soft')) return { border: 'border-blue-500/60' };
    if (r.includes('drive')) return { border: 'border-purple-600/60' };
    if (r.includes('strat')) return { border: 'border-orange-500/60' };
    if (r.includes('elect')) return { border: 'border-yellow/60' };
    if (r.includes('outreach') || r.includes('port')) return { border: 'border-pink-500/60' };
    if (r.includes('scout')) return { border: 'border-cyan-400/60' };
    if (r.includes('design') || r.includes('media')) return { border: 'border-green-500/60' };
    if (r.includes('cnc')) return { border: 'border-indigo-500/60' };
    return { border: 'border-gray-500/60' };
  };
  return (
    <>
      <section id="team" className="relative overflow-hidden">
        <div className="container relative z-10 py-16 md:py-18 lg:py-24">
          <div className="mb-10 flex justify-center">
            <div className="w-full max-w-[860px] rounded-md border border-white/10 bg-black px-6 py-6 text-center shadow-[0_0_35px_rgba(0,0,0,0.45)]">
              <div className="text-4xl font-semibold uppercase tracking-[0.12em] text-white">
                Meet the Team
              </div>
              <p className="mt-3 text-xs font-normal uppercase tracking-[0.28em] text-white/70">
                Builders, programmers, and leaders driving the season forward.
              </p>
            </div>
          </div>

          <div className="mb-4 flex justify-center">
            <div className="rounded-md border border-white/10 bg-black px-5 py-2 text-m font-semibold uppercase tracking-[0.5em] text-yellow shadow-[0_0_25px_rgba(0,0,0,0.35)]">
              Current Members
            </div>
          </div>
          <div className="userProfiles flex flex-wrap justify-center items-stretch gap-4 mb-8">
            {captains.map((user, id) => (
              <div
                key={id}
                className="team-card w-52 h-full flex flex-col card py-4 px-4 rounded-md border border-yellow/60 shadow-[0_0_25px_rgba(251,176,64,0.25)] bg-[#171717] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="image w-full h-24 flex justify-center">
                  <img width={96} height={96} className='rounded-full border border-white/10 object-cover' src={`/images/team/members/${user.image}`} alt={user.name} />
                </div>
                <div className="pt-3 text-center font-names text-[15px] lowercase tracking-wide leading-snug bg-gradient-to-r from-[#FFF7b0] via-yellow to-yellow-dark text-transparent bg-clip-text">{user.name}</div>
                <div className="role mt-3 flex flex-col items-center gap-1.5 text-center">
                  {user.role.flatMap((role) =>
                    splitRole(role).map((part, idx) => {
                      const style = getRoleStyle(part);
                      return (
                        <div key={`${role}-${idx}`} className={`inline-flex items-center gap-2 rounded-full border ${style.border} bg-black/20 px-3 py-1`}>
                          <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/80">
                            {part}
                          </span>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="userProfiles flex flex-wrap justify-center items-stretch gap-4 mb-12">
            {nonCaptains.map((user, id) => (
              <div
                key={id}
                className="team-card w-48 h-full flex flex-col card py-4 px-4 rounded-md border border-white/10 bg-[#171717] shadow-[0_0_25px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="image w-full h-24 flex justify-center">
                  <img width={96} height={96} className='rounded-full border border-white/10 object-cover' src={`/images/team/members/${user.image}`} alt={user.name} />
                </div>
                <div className="pt-3 text-center font-names text-[15px] lowercase tracking-wide text-white leading-snug">{user.name}</div>
                <div className="role mt-3 flex flex-col items-center gap-1.5 text-center">
                  {user.role.flatMap((role) =>
                    splitRole(role).map((part, idx) => {
                      const style = getRoleStyle(part);
                      return (
                        <div key={`${role}-${idx}`} className={`inline-flex items-center gap-2 rounded-full border ${style.border} bg-black/20 px-3 py-1`}>
                          <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/80">
                            {part}
                          </span>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mb-4 flex justify-center">
            <div className="rounded-md border border-white/10 bg-black px-5 py-2 text-m font-semibold uppercase tracking-[0.35em] text-yellow shadow-[0_0_25px_rgba(0,0,0,0.35)]">
              Alumni
            </div>
          </div>
          {alumni.filter(user => user.role.some(role => role.toLowerCase().includes('captain'))).length > 0 && (
            <div className="userProfiles flex flex-wrap justify-center gap-4 mb-8 items-stretch">
              {alumni
                .filter(user => user.role.some(role => role.toLowerCase().includes('captain')))
                .map((user, id) => (
                  <div
                    key={id}
                    className="team-card w-52 h-full flex flex-col card py-4 px-4 rounded-md border border-yellow/60 shadow-[0_0_25px_rgba(251,176,64,0.25)] bg-[#171717] transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="image w-full h-24 flex justify-center">
                      <img width={96} height={96} className='rounded-full border border-white/10 object-cover' src={`/images/team/members/${user.image}`} alt={user.name} />
                    </div>
                    <div className="pt-3 text-center font-names text-[15px] lowercase tracking-wide leading-snug bg-gradient-to-r from-[#FFF7b0] via-yellow to-yellow-dark text-transparent bg-clip-text">{user.name}</div>
                    <div className="role mt-3 flex flex-col items-center gap-1.5 text-center">
                      {user.role.flatMap((role) =>
                        splitRole(role).map((part, idx) => {
                          const style = getRoleStyle(part);
                          return (
                            <div key={`${role}-${idx}`} className={`inline-flex items-center gap-2 rounded-full border ${style.border} bg-black/20 px-3 py-1`}>
                              <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/80">
                                {part}
                              </span>
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>
                ))}
            </div>
          )}
          <div className="userProfiles flex flex-wrap justify-center items-stretch gap-4">
            {alumni
              .filter(user => !user.role.some(role => role.toLowerCase().includes('captain')))
              .map((user, id) => (
                <div
                  key={id}
                  className="team-card w-48 h-full flex flex-col card py-4 px-4 rounded-md border border-white/10 bg-[#171717] shadow-[0_0_25px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="image w-full h-24 flex justify-center">
                    <img width={96} height={96} className='rounded-full border border-white/10 object-cover' src={`/images/team/members/${user.image}`} alt={user.name} />
                  </div>
                  <div className="pt-3 text-center font-names text-[15px] lowercase tracking-wide text-white leading-snug">{user.name}</div>
                  <div className="role mt-3 flex flex-col items-center gap-1.5 text-center">
                    {user.role.flatMap((role) =>
                      splitRole(role).map((part, idx) => {
                        const style = getRoleStyle(part);
                        return (
                          <div key={`${role}-${idx}`} className={`inline-flex items-center gap-2 rounded-full border ${style.border} bg-black/20 px-3 py-1`}>
                            <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/80">
                              {part}
                            </span>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Team

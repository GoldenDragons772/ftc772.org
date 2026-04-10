import React from 'react'
import teamData from './teamData'


function Team() {
  const members = teamData.filter(user => user.type === 'member');
  const alumni = teamData.filter(user => user.type === 'mentor');
  return (
    <>
      <section id="team" className="relative overflow-hidden bg-[#171717]">
        <div className="absolute inset-0 bg-dragon-grid bg-[size:32px_32px] opacity-20 [mask-image:radial-gradient(70%_70%_at_50%_10%,rgba(0,0,0,1),transparent)]" />
        <div className="container relative z-10 py-16 md:py-18 lg:py-24">
          <div className="mb-10 text-center">
            <div className="text-xl font-light uppercase tracking-[0.4em] text-yellow">Meet the Team</div>
            <div className="mt-3 font-display text-4xl lowercase tracking-[0.1em] text-white">
              golden dragons 772
            </div>
            <p className="mt-2 text-sm font-normal text-[#919191]">
              Builders, programmers, and leaders driving the season forward.
            </p>
          </div>

          <div className="mb-4 text-center text-2xl font-light uppercase tracking-[0.35em] text-yellow">
            Current Members
          </div>
          <div className="userProfiles flex flex-wrap justify-center gap-4 mb-12">
            {members.map((user, id) => {
              const isCaptain = user.role.some(role => role.toLowerCase().includes('captain'));
              return (
                <div
                  key={id}
                  className={`w-48 card py-4 px-3 rounded-md border transition-all duration-300 hover:-translate-y-1 ${
                    isCaptain 
                      ? 'border-yellow/60 shadow-[0_0_25px_rgba(251,176,64,0.25)] bg-[#171717]'
                      : 'border-white/10 bg-[#171717] shadow-[0_0_25px_rgba(0,0,0,0.4)]'
                  }`}
                >
                  <div className="image w-full h-24 flex justify-center">
                    <img width={96} height={96} className='rounded-full border border-white/10' src={`/images/team/members/${user.image}`} />
                  </div>
                  <div className="flex justify-center text-lg font-semibold py-3 text-white">{user.name}</div>
                  <div className="role">{user.role.map((role, idx) => (
                    <p key={idx} className='flex justify-center text-xs font-normal uppercase tracking-[0.2em] text-[#919191]'>{role}</p>
                  ))}</div>
                </div>
              );
            })}
          </div>
          <div className="mb-4 text-center text-2xl font-light uppercase tracking-[0.35em] text-yellow">Alumni</div>
          <div className="userProfiles flex flex-wrap justify-center gap-4">
            {alumni.map((user, id) => {
              const isCaptain = user.role.some(role => role.toLowerCase().includes('captain'));
              return (
                <div
                  key={id}
                  className={`w-48 card py-4 px-3 rounded-md border transition-all duration-300 hover:-translate-y-1 ${
                    isCaptain 
                      ? 'border-yellow/60 shadow-[0_0_25px_rgba(251,176,64,0.25)] bg-[#171717]'
                      : 'border-white/10 bg-[#171717] shadow-[0_0_25px_rgba(0,0,0,0.4)]'
                  }`}
                >
                  <div className="image w-full h-24 flex justify-center">
                    <img width={96} height={96} className='rounded-full border border-white/10' src={`/images/team/members/${user.image}`} />
                  </div>
                  <div className="flex justify-center text-lg font-semibold py-3 text-white">{user.name}</div>
                  <div className="role">{user.role.map((role, idx) => (
                    <p key={idx} className='flex justify-center text-xs uppercase tracking-[0.2em] text-[#919191]'>{role}</p>
                  ))}</div>
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

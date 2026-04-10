import React from 'react'
import teamData from './teamData'


function Team() {
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
            <div className="rounded-md border border-white/10 bg-black px-5 py-2 text-m font-semibold uppercase tracking-[0.35em] text-yellow shadow-[0_0_25px_rgba(0,0,0,0.35)]">
              Current Members
            </div>
          </div>
          <div className="userProfiles flex flex-wrap justify-center gap-4 mb-8">
            {captains.map((user, id) => (
              <div
                key={id}
                className="w-52 card py-4 px-4 rounded-md border border-yellow/60 shadow-[0_0_25px_rgba(251,176,64,0.25)] bg-[#171717] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="image w-full h-24 flex justify-center">
                  <img width={96} height={96} className='rounded-full border border-white/10' src={`/images/team/members/${user.image}`} />
                </div>
                <div className="pt-3 text-left text-lg font-semibold text-white">{user.name}</div>
                <div className="role mt-2 space-y-1 text-left">
                  {user.role.flatMap((role) =>
                    splitRole(role).map((part, idx) => (
                      <p key={`${role}-${idx}`} className='text-xs font-normal uppercase tracking-[0.2em] text-white/70'>
                        {part}
                      </p>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="userProfiles flex flex-wrap justify-center gap-4 mb-12">
            {nonCaptains.map((user, id) => (
              <div
                key={id}
                className="w-48 card py-4 px-4 rounded-md border border-white/10 bg-[#171717] shadow-[0_0_25px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="image w-full h-24 flex justify-center">
                  <img width={96} height={96} className='rounded-full border border-white/10' src={`/images/team/members/${user.image}`} />
                </div>
                <div className="pt-3 text-left text-lg font-semibold text-white">{user.name}</div>
                <div className="role mt-2 space-y-1 text-left">
                  {user.role.flatMap((role) =>
                    splitRole(role).map((part, idx) => (
                      <p key={`${role}-${idx}`} className='text-xs font-normal uppercase tracking-[0.2em] text-white/70'>
                        {part}
                      </p>
                    ))
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
          <div className="userProfiles flex flex-wrap justify-center gap-4 mb-8">
            {alumni
              .filter(user => user.role.some(role => role.toLowerCase().includes('captain')))
              .map((user, id) => (
                <div
                  key={id}
                  className="w-52 card py-4 px-4 rounded-md border border-yellow/60 shadow-[0_0_25px_rgba(251,176,64,0.25)] bg-[#171717] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="image w-full h-24 flex justify-center">
                    <img width={96} height={96} className='rounded-full border border-white/10' src={`/images/team/members/${user.image}`} />
                  </div>
                  <div className="pt-3 text-left text-lg font-semibold text-white">{user.name}</div>
                  <div className="role mt-2 space-y-1 text-left">
                    {user.role.flatMap((role) =>
                      splitRole(role).map((part, idx) => (
                        <p key={`${role}-${idx}`} className='text-xs uppercase tracking-[0.2em] text-white/70'>
                          {part}
                        </p>
                      ))
                    )}
                  </div>
                </div>
              ))}
          </div>
          <div className="userProfiles flex flex-wrap justify-center gap-4">
            {alumni
              .filter(user => !user.role.some(role => role.toLowerCase().includes('captain')))
              .map((user, id) => (
                <div
                  key={id}
                  className="w-48 card py-4 px-4 rounded-md border border-white/10 bg-[#171717] shadow-[0_0_25px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="image w-full h-24 flex justify-center">
                    <img width={96} height={96} className='rounded-full border border-white/10' src={`/images/team/members/${user.image}`} />
                  </div>
                  <div className="pt-3 text-left text-lg font-semibold text-white">{user.name}</div>
                  <div className="role mt-2 space-y-1 text-left">
                    {user.role.flatMap((role) =>
                      splitRole(role).map((part, idx) => (
                        <p key={`${role}-${idx}`} className='text-xs uppercase tracking-[0.2em] text-white/70'>
                          {part}
                        </p>
                      ))
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

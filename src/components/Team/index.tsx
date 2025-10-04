import React from 'react'
import teamData from './teamData'


function Team() {
  const members = teamData.filter(user => user.type === 'member');
  const alumni = teamData.filter(user => user.type === 'mentor');
  return (
    <>
      <section>
        <div className="py-16 md:py-18 lg:py-24">
          <div className="Heading text-4xl font-bold flex justify-center pb-10">Meet our Team</div>
          <div className="text-2xl font-semibold flex justify-center pb-4">Current Members</div>
          <div className="userProfiles flex flex-wrap justify-center gap-2 mb-10">
            {members.map((user, id) => {
              const isCaptain = user.role.some(role => role.toLowerCase().includes('captain'));
              return (
                <div
                  key={id}
                  className={`w-48 card py-4 px-2 bg-gray-dark rounded-lg border transition-all duration-300 hover:scale-105 ${
                    isCaptain 
                      ? 'border-2 shadow-2xl' 
                      : 'border-gray-700 shadow-xl hover:shadow-2xl'
                  }`}
                  style={isCaptain ? { 
                    borderColor: '#4a5568',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(74, 85, 104, 0.4), 0 0 15px rgba(74, 85, 104, 0.2)' 
                  } : {}}
                >
                  <div className="image w-full h-24 flex justify-center">
                    <img width={96} height={96} className='rounded-full' src={`/images/team/members/${user.image}`} />
                  </div>
                  <div className="flex justify-center text-lg font-bold py-3">{user.name}</div>
                  <div className="role">{user.role.map((role, idx) => (
                    <p key={idx} className='flex justify-center text-gray-400'>{role}</p>
                  ))}</div>
                </div>
              );
            })}
          </div>
          <div className="text-2xl font-semibold flex justify-center pb-4">Alumni</div>
          <div className="userProfiles flex flex-wrap justify-center gap-2">
            {alumni.map((user, id) => {
              const isCaptain = user.role.some(role => role.toLowerCase().includes('captain'));
              return (
                <div
                  key={id}
                  className={`w-48 card py-4 px-2 bg-gray-dark rounded-lg border transition-all duration-300 hover:scale-105 ${
                    isCaptain 
                      ? 'border-2 shadow-2xl' 
                      : 'border-gray-700 shadow-xl hover:shadow-2xl'
                  }`}
                  style={isCaptain ? { 
                    borderColor: '#4a5568',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(74, 85, 104, 0.4), 0 0 15px rgba(74, 85, 104, 0.2)' 
                  } : {}}
                >
                  <div className="image w-full h-24 flex justify-center">
                    <img width={96} height={96} className='rounded-full' src={`/images/team/members/${user.image}`} />
                  </div>
                  <div className="flex justify-center text-lg font-bold py-3">{user.name}</div>
                  <div className="role">{user.role.map((role, idx) => (
                    <p key={idx} className='flex justify-center text-gray-400'>{role}</p>
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
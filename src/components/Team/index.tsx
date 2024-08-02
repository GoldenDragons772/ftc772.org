import React from 'react'
import teamData from './teamData'

function Team() {
  return (
    <>
      <section>
        <div className="py-16 md:py-18 lg:py-24">
          <div className="Heading text-4xl font-bold flex justify-center pb-10">Meet our Team</div>
          <div className="userProfiles flex flex-wrap justify-center gap-2">
            {teamData.map((user, id) => (
              <div key={id} className="shadow-xl w-48 card py-4 px-2 bg-gray-dark rounded-lg border border-gray-700">
                <div className="image w-full h-24 flex justify-center">
                  <img width={96} height={96} className='rounded-full' src={`/images/team/members/${user.image}`} />
                </div>
                <div className="flex justify-center text-lg font-bold py-3">{user.name}</div>
                <div className="role">{user.role.map((role, id) => (
                  <p key={id} className='flex justify-center text-gray-400'>{role}</p>
                ))}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Team
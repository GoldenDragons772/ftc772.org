import Link from 'next/link'
import React from 'react'

export default function Banner() {
	const links = [
		{ href: "/", text: "Home" },
		{ href: "/about", text: "Team" },
		{ href: "/armory", text: "Robot"},
		{ href: "/sponsor", text: "Sponsors" },
		{ href: "/mission", text: "Mission" }
	  ];
  return (
    <>
		<div className="sticky flex w-screen h-20 items-center border-b-[1px] border-yellow-300">
			<div className="logo flex justify-start ml-4">
				<Link href={"/"}>
					<img src='/Golden_4.png' alt='Golden Dragons' width={40} height={40} />
				</Link>
			</div>
			<div className="Links w-full text-white flex justify-center ">
				<div className="links space-x-5">
				{links.map((link, index) => (
					<Link key={index} className='hover:opacity-60' href={link.href}>
						{link.text}
					</Link>
				))}
				</div>
			</div>
			<div className="join flex text-nowrap justify-end mr-4">
				<div className="px-4 py-2 bg-yellow-500 rounded-full text-black">Apply</div>
			</div>
		</div>
    </>
  )
}
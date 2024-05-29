import React from "react";

export default function sponsor() {
  return (
    <div className="w-full flex flex-col space-y-4">
      <div className="content flex-col justify-center">
        <h2 className="text-3xl mt-5 flex justify-center">Our Sponsors</h2>
        <div className="desc w-full flex justify-center">
          <p className=" w-96 text-center mt-4">
            We are grateful for the support of our sponsors since
            their generosity helps us to continue to compete in FTC (FIRST Tech
            Challenge) and provide students with hands-on experience using robotics
            and engineering.
          </p>
        </div>
      </div>
      <div className="list">
        <li className="gssm flex justify-center space-x-20 mt-5">
          <a href="https://scgssm.org" target="_blank">
            <img src="/gssm.png" className="bg-white h-32 p-7 rounded-xl" />
          </a>
          <a href="https://www.scgssm.org/who-we-are/gssm-foundation" target="_blank">
            <img src="/foundation.png" className="h-32 bg-white rounded-xl px-5 py-4" />
          </a>
          <a href="https://ed.sc.gov/" target="_blank">
            <img src="/department.png" className="h-32 bg-white rounded-xl" />
          </a>
        </li>
      </div>
    </div>
  );
}
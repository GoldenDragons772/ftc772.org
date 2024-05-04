'use client'
import Script from "next/script";
import React from 'react'

export default function about() {
  return (
    <div className="flex flex-col space-y-4">
      <Script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js" />
      <h2 className="text-3xl">About Us</h2>
      <p>
        The Golden Dragons are a FIRST Tech Challenge team based in Hartsville,
        South Carolina. Our team is made up of students across the state who are
        passionate about robotics and STEM education. We compete in the FIRST
        Tech Challenge, a robotics competition that challenges students to
        design, build, and program robots to compete in a head-to-head
        challenge.
      </p>
    </div>
  );
}

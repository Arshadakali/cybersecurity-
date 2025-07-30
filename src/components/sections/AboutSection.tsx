"use client";
import React from "react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <div>
      {/* Back to Home Button */}
      <div className="mb-6 text-center">
        <Link
          href="/"
          className="inline-block px-6 py-2 rounded-lg bg-cyan-700 text-white font-bold shadow hover:bg-cyan-600 transition"
        >
          ← Back to Home
        </Link>
      </div>

      <section className="p-8 rounded-xl mb-8 bg-gradient-to-br from-[#0a1833] via-[#11224d] to-[#0a1833] shadow-2xl border border-blue-900 flex flex-col md:flex-row gap-8 items-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-80 h-80 bg-blue-700/30 rounded-full blur-3xl top-[-4rem] left-[-4rem]" />
          <div className="absolute w-60 h-60 bg-cyan-400/20 rounded-full blur-2xl bottom-[-3rem] right-[-3rem]" />
        </div>
        <div className="flex-1 flex flex-col justify-center z-10">
          <h2 className="text-3xl font-extrabold mb-4 text-cyan-300 drop-shadow">
            About Us
          </h2>
          <p className="mb-4 text-lg text-blue-100">
            Our mission is to empower individuals and organizations to stay safe
            in the digital world. Our team consists of certified cybersecurity
            professionals dedicated to providing education, tools, and services
            to protect against modern threats.
          </p>
          <div className="flex flex-col gap-2 mb-4">
            <div className="flex items-center gap-2">
              <span className="inline-flex w-6 h-6 bg-cyan-500 text-white rounded-full items-center justify-center font-bold shadow">
                ✓
              </span>
              <span className="text-blue-100">
                Certified Ethical Hackers (CEH)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex w-6 h-6 bg-cyan-500 text-white rounded-full items-center justify-center font-bold shadow">
                ✓
              </span>
              <span className="text-blue-100">ISO 27001 Lead Auditors</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex w-6 h-6 bg-cyan-500 text-white rounded-full items-center justify-center font-bold shadow">
                ✓
              </span>
              <span className="text-blue-100">
                Years of experience in penetration testing and security
                consulting
              </span>
            </div>
          </div>
          <p className="text-sm text-cyan-200 italic">
            Why cybersecurity matters: In today's connected world, everyone is a
            target. We help you defend your data and privacy.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center z-10">
          <img
            src="/about-cyber.svg"
            alt="Cybersecurity Team"
            className="w-56 h-56 object-contain rounded-lg border-2 border-cyan-700 shadow-lg bg-[#0a1833]"
          />
        </div>
      </section>
    </div>
  );
}

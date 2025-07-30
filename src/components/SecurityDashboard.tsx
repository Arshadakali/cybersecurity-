"use client";
import React from 'react';

export default function SecurityDashboard() {
  return (
    <section className="p-8 rounded-xl mb-8 bg-gradient-to-br from-[#0a1833] via-[#11224d] to-[#0a1833] shadow-2xl border border-blue-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-80 h-80 bg-blue-700/30 rounded-full blur-3xl top-[-4rem] left-[-4rem]" />
        <div className="absolute w-60 h-60 bg-cyan-400/20 rounded-full blur-2xl bottom-[-3rem] right-[-3rem]" />
      </div>
      <div className="relative z-10">
        <h2 className="text-2xl font-bold mb-2 text-cyan-300 drop-shadow">Security Awareness Dashboard</h2>
        <ul className="list-disc ml-6 text-blue-100">
          <li>Stay updated: Patch your software regularly.</li>
          <li>Use strong, unique passwords for every account.</li>
          <li>Be cautious of suspicious emails and links.</li>
          <li>Enable two-factor authentication where possible.</li>
          <li>Backup your important data frequently.</li>
        </ul>
        <div className="mt-4 text-sm text-cyan-200">(Demo: Add live news or threat feeds here.)</div>
      </div>
    </section>
  );
}

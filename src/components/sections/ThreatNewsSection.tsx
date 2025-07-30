"use client";
import React from "react";
import Link from "next/link";

export default function ThreatNewsSection() {
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

      <section className="p-8 rounded-xl mb-8 bg-gradient-to-br from-[#0a1833] via-[#11224d] to-[#0a1833] shadow-2xl border border-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-80 h-80 bg-blue-700/30 rounded-full blur-3xl top-[-4rem] left-[-4rem]" />
          <div className="absolute w-60 h-60 bg-cyan-400/20 rounded-full blur-2xl bottom-[-3rem] right-[-3rem]" />
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl font-extrabold mb-6 text-cyan-300 drop-shadow">
            Threat Intelligence & News
          </h2>

          <p className="text-lg text-blue-100 mb-6">
            Stay informed about the latest cybersecurity threats,
            vulnerabilities, and security incidents. Our threat intelligence
            keeps you ahead of emerging risks and helps you protect your digital
            assets.
          </p>

          {/* Current Threat Landscape */}
          <div className="bg-red-900/20 rounded-lg p-6 border border-red-700/50 mb-8">
            <h3 className="font-bold text-red-300 mb-4 text-xl flex items-center">
              🚨 Current High-Priority Threats
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#11224d]/60 rounded-lg p-4 border border-red-700/30">
                <h4 className="font-semibold text-red-200 mb-2">
                  Ransomware Campaigns
                </h4>
                <p className="text-blue-100 text-sm mb-2">
                  Multiple ransomware groups targeting healthcare and financial
                  sectors with sophisticated encryption techniques.
                </p>
                <span className="text-xs text-red-300 font-semibold">
                  SEVERITY: HIGH
                </span>
              </div>
              <div className="bg-[#11224d]/60 rounded-lg p-4 border border-orange-700/30">
                <h4 className="font-semibold text-orange-200 mb-2">
                  Phishing Evolution
                </h4>
                <p className="text-blue-100 text-sm mb-2">
                  AI-generated phishing emails becoming increasingly
                  sophisticated and harder to detect.
                </p>
                <span className="text-xs text-orange-300 font-semibold">
                  SEVERITY: MEDIUM
                </span>
              </div>
            </div>
          </div>

          {/* Threat Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#11224d]/80 rounded-lg p-6 border border-cyan-700 shadow">
              <h3 className="font-bold text-cyan-200 mb-3 text-xl">
                🦠 Malware Alerts
              </h3>
              <ul className="list-disc ml-6 mb-4 text-blue-100 space-y-2 text-sm">
                <li>New trojan variants targeting banking apps</li>
                <li>Cryptomining malware in browser extensions</li>
                <li>Mobile malware disguised as legitimate apps</li>
                <li>Supply chain attacks on software updates</li>
              </ul>
            </div>

            <div className="bg-[#11224d]/80 rounded-lg p-6 border border-cyan-700 shadow">
              <h3 className="font-bold text-cyan-200 mb-3 text-xl">
                🎣 Phishing Campaigns
              </h3>
              <ul className="list-disc ml-6 mb-4 text-blue-100 space-y-2 text-sm">
                <li>Fake Microsoft 365 login pages</li>
                <li>COVID-19 themed email scams</li>
                <li>Cryptocurrency investment frauds</li>
                <li>Social media account takeovers</li>
              </ul>
            </div>

            <div className="bg-[#11224d]/80 rounded-lg p-6 border border-cyan-700 shadow">
              <h3 className="font-bold text-cyan-200 mb-3 text-xl">
                🔓 Data Breaches
              </h3>
              <ul className="list-disc ml-6 mb-4 text-blue-100 space-y-2 text-sm">
                <li>Major retailer customer data exposed</li>
                <li>Healthcare provider ransomware incident</li>
                <li>Cloud storage misconfiguration leaks</li>
                <li>Third-party vendor compromises</li>
              </ul>
            </div>
          </div>

          {/* Vulnerability Alerts */}
          <div className="bg-yellow-900/20 rounded-lg p-6 border border-yellow-700/50 mb-8">
            <h3 className="font-bold text-yellow-200 mb-4 text-xl">
              ⚠️ Critical Vulnerability Alerts
            </h3>
            <div className="space-y-4">
              <div className="bg-[#11224d]/60 rounded-lg p-4 border border-yellow-700/30">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-yellow-200">
                    CVE-2024-XXXX - Remote Code Execution
                  </h4>
                  <span className="text-xs text-red-300 font-semibold bg-red-900/30 px-2 py-1 rounded">
                    CRITICAL
                  </span>
                </div>
                <p className="text-blue-100 text-sm mb-2">
                  Zero-day vulnerability in popular web framework allows remote
                  code execution. Patch immediately.
                </p>
                <p className="text-xs text-yellow-300">
                  Affected: Web applications using Framework v2.1-2.8
                </p>
              </div>
              <div className="bg-[#11224d]/60 rounded-lg p-4 border border-orange-700/30">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-orange-200">
                    CVE-2024-YYYY - Privilege Escalation
                  </h4>
                  <span className="text-xs text-orange-300 font-semibold bg-orange-900/30 px-2 py-1 rounded">
                    HIGH
                  </span>
                </div>
                <p className="text-blue-100 text-sm mb-2">
                  Local privilege escalation vulnerability in operating system
                  kernel.
                </p>
                <p className="text-xs text-orange-300">
                  Affected: OS versions 10.1-10.5
                </p>
              </div>
            </div>
          </div>

          {/* Threat Intelligence Sources */}
          <div className="bg-cyan-900/20 rounded-lg p-6 border border-cyan-700/50 mb-6">
            <h3 className="font-bold text-cyan-200 mb-4 text-xl">
              📡 Intelligence Sources
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-cyan-300 mb-2">
                  Government Agencies
                </h4>
                <ul className="list-disc ml-6 text-blue-100 text-sm space-y-1">
                  <li>CISA Cybersecurity Advisories</li>
                  <li>FBI Internet Crime Reports</li>
                  <li>NSA Security Recommendations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-300 mb-2">
                  Industry Sources
                </h4>
                <ul className="list-disc ml-6 text-blue-100 text-sm space-y-1">
                  <li>Security Vendor Threat Reports</li>
                  <li>CERT Coordination Centers</li>
                  <li>Open Source Intelligence</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-cyan-200 mb-4">
              🔄 <strong>Stay Alert:</strong> Threat landscape changes rapidly.
              Subscribe to our alerts and check back regularly for the latest
              intelligence.
            </p>
            <Link
              href="/learning"
              className="inline-block px-6 py-2 rounded-lg bg-blue-700 text-white font-bold shadow hover:bg-blue-600 transition mr-4"
            >
              Learn Protection Strategies →
            </Link>
            <Link
              href="/tools"
              className="inline-block px-6 py-2 rounded-lg bg-green-700 text-white font-bold shadow hover:bg-green-600 transition"
            >
              Use Security Tools →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";
import React from "react";
import Link from "next/link";

export default function ServicesSection() {
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
          <h2 className="text-3xl font-extrabold mb-4 text-cyan-300 drop-shadow">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#11224d]/80 rounded-lg p-4 border border-cyan-700 shadow text-blue-100">
              <h3 className="font-bold text-cyan-200 mb-2">
                Penetration Testing
              </h3>
              <p>
                Simulated attacks to identify vulnerabilities before real
                hackers do.
              </p>
            </div>
            <div className="bg-[#11224d]/80 rounded-lg p-4 border border-cyan-700 shadow text-blue-100">
              <h3 className="font-bold text-cyan-200 mb-2">
                Vulnerability Assessment
              </h3>
              <p>Comprehensive scans to find and fix security weaknesses.</p>
            </div>
            <div className="bg-[#11224d]/80 rounded-lg p-4 border border-cyan-700 shadow text-blue-100">
              <h3 className="font-bold text-cyan-200 mb-2">
                Incident Response
              </h3>
              <p>Rapid action and support in the event of a cyber incident.</p>
            </div>
            <div className="bg-[#11224d]/80 rounded-lg p-4 border border-cyan-700 shadow text-blue-100">
              <h3 className="font-bold text-cyan-200 mb-2">Security Audits</h3>
              <p>Thorough reviews to ensure compliance and best practices.</p>
            </div>
            <div className="bg-[#11224d]/80 rounded-lg p-4 border border-cyan-700 shadow text-blue-100">
              <h3 className="font-bold text-cyan-200 mb-2">
                Network Security Setup
              </h3>
              <p>Design and implementation of secure network infrastructure.</p>
            </div>
            <div className="bg-[#11224d]/80 rounded-lg p-4 border border-cyan-700 shadow text-blue-100">
              <h3 className="font-bold text-cyan-200 mb-2">Cloud Security</h3>
              <p>Protecting your data and apps in the cloud.</p>
            </div>
            <div className="bg-[#11224d]/80 rounded-lg p-4 border border-cyan-700 shadow text-blue-100">
              <h3 className="font-bold text-cyan-200 mb-2">Compliance</h3>
              <p>
                GDPR, ISO, NIST and more—helping you meet regulatory
                requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cybersecurity Tools Section */}
      <section className="p-8 rounded-xl mb-8 bg-gradient-to-br from-[#0a1833] via-[#11224d] to-[#0a1833] shadow-2xl border border-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-80 h-80 bg-blue-700/30 rounded-full blur-3xl top-[-4rem] left-[-4rem]" />
          <div className="absolute w-60 h-60 bg-cyan-400/20 rounded-full blur-2xl bottom-[-3rem] right-[-3rem]" />
        </div>
        <div className="relative z-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-extrabold text-cyan-300 drop-shadow">
              Security Tools
            </h2>
            <Link
              href="/tools"
              className="px-4 py-2 rounded-lg bg-cyan-700 text-white font-bold shadow hover:bg-cyan-600 transition text-sm"
            >
              View All Tools →
            </Link>
          </div>
          <p className="text-blue-100 mb-6">
            Try our professional cybersecurity tools to assess and protect your
            digital assets.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/tools"
              className="block bg-[#11224d]/80 rounded-lg p-4 border border-cyan-700 shadow text-blue-100 hover:bg-cyan-900/40 transition group"
            >
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-3">🛡️</span>
                <h3 className="font-bold text-cyan-200 group-hover:text-cyan-100">
                  Malware Scanner
                </h3>
              </div>
              <p className="text-sm">
                Upload and scan files for malware, viruses, and security threats
                using advanced detection algorithms.
              </p>
            </Link>

            <Link
              href="/tools"
              className="block bg-[#11224d]/80 rounded-lg p-4 border border-cyan-700 shadow text-blue-100 hover:bg-cyan-900/40 transition group"
            >
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-3">🔐</span>
                <h3 className="font-bold text-cyan-200 group-hover:text-cyan-100">
                  Password Analyzer
                </h3>
              </div>
              <p className="text-sm">
                Real-time password strength evaluation with complexity analysis
                and security recommendations.
              </p>
            </Link>

            <Link
              href="/tools"
              className="block bg-[#11224d]/80 rounded-lg p-4 border border-cyan-700 shadow text-blue-100 hover:bg-cyan-900/40 transition group"
            >
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-3">🎣</span>
                <h3 className="font-bold text-cyan-200 group-hover:text-cyan-100">
                  URL Safety Checker
                </h3>
              </div>
              <p className="text-sm">
                Verify URL safety and detect phishing attempts before clicking
                suspicious links.
              </p>
            </Link>

            <Link
              href="/tools"
              className="block bg-[#11224d]/80 rounded-lg p-4 border border-cyan-700 shadow text-blue-100 hover:bg-cyan-900/40 transition group"
            >
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-3">🔍</span>
                <h3 className="font-bold text-cyan-200 group-hover:text-cyan-100">
                  Website Security Scanner
                </h3>
              </div>
              <p className="text-sm">
                Comprehensive security assessment of websites including
                vulnerability detection and SSL analysis.
              </p>
            </Link>
          </div>

          <div className="mt-6 p-4 bg-cyan-900/20 rounded-lg border border-cyan-700/50">
            <p className="text-cyan-200 text-sm">
              <strong>💡 Pro Tip:</strong> Use these tools regularly as part of
              your security routine. Combine multiple tools for comprehensive
              protection and always keep your security practices up to date.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

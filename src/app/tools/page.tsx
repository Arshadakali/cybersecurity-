"use client";
import React from "react";
import FileUploadScanner from "../../components/FileUploadScanner";
import PasswordStrengthChecker from "../../components/PasswordStrengthChecker";
import PhishingDetector from "../../components/PhishingDetector";
import VulnerabilityScanner from "../../components/VulnerabilityScanner";
import Link from "next/link";

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a1833] via-[#11224d] to-[#0a1833] p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-300 drop-shadow mb-4">
            Cybersecurity Tools
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-6">
            Professional security tools to protect and analyze your digital
            assets
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-2 rounded-lg bg-cyan-700 text-white font-bold shadow hover:bg-cyan-600 transition"
          >
            ← Back to Home
          </Link>
        </section>

        {/* Tools Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* File Upload Scanner */}
          <div className="p-8 rounded-xl bg-gradient-to-br from-[#0a1833] via-[#11224d] to-[#0a1833] shadow-2xl border border-blue-900 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute w-60 h-60 bg-blue-700/20 rounded-full blur-3xl top-[-2rem] left-[-2rem]" />
              <div className="absolute w-40 h-40 bg-cyan-400/15 rounded-full blur-2xl bottom-[-1rem] right-[-1rem]" />
            </div>
            <div className="relative z-10">
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-cyan-300 drop-shadow mb-2">
                  Malware Scanner
                </h2>
                <p className="text-blue-100 text-sm mb-4">
                  Upload files to scan for malware, viruses, and other security
                  threats. Our advanced detection engine analyzes file
                  signatures and behavior patterns.
                </p>
              </div>
              <div className="bg-[#11224d]/60 rounded-lg p-4 border border-cyan-700/50">
                <FileUploadScanner />
              </div>
            </div>
          </div>

          {/* Password Strength Checker */}
          <div className="p-8 rounded-xl bg-gradient-to-br from-[#0a1833] via-[#11224d] to-[#0a1833] shadow-2xl border border-blue-900 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute w-60 h-60 bg-blue-700/20 rounded-full blur-3xl top-[-2rem] left-[-2rem]" />
              <div className="absolute w-40 h-40 bg-cyan-400/15 rounded-full blur-2xl bottom-[-1rem] right-[-1rem]" />
            </div>
            <div className="relative z-10">
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-cyan-300 drop-shadow mb-2">
                  Password Analyzer
                </h2>
                <p className="text-blue-100 text-sm mb-4">
                  Evaluate password strength in real-time. Check for complexity,
                  length, and common patterns to ensure your passwords meet
                  security standards.
                </p>
              </div>
              <div className="bg-[#11224d]/60 rounded-lg p-4 border border-cyan-700/50">
                <PasswordStrengthChecker />
              </div>
            </div>
          </div>

          {/* Phishing Detector */}
          <div className="p-8 rounded-xl bg-gradient-to-br from-[#0a1833] via-[#11224d] to-[#0a1833] shadow-2xl border border-blue-900 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute w-60 h-60 bg-blue-700/20 rounded-full blur-3xl top-[-2rem] left-[-2rem]" />
              <div className="absolute w-40 h-40 bg-cyan-400/15 rounded-full blur-2xl bottom-[-1rem] right-[-1rem]" />
            </div>
            <div className="relative z-10">
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-cyan-300 drop-shadow mb-2">
                  URL Safety Checker
                </h2>
                <p className="text-blue-100 text-sm mb-4">
                  Verify the safety of URLs before clicking. Our system checks
                  against known phishing databases and analyzes suspicious
                  patterns.
                </p>
              </div>
              <div className="bg-[#11224d]/60 rounded-lg p-4 border border-cyan-700/50">
                <PhishingDetector />
              </div>
            </div>
          </div>

          {/* Vulnerability Scanner */}
          <div className="p-8 rounded-xl bg-gradient-to-br from-[#0a1833] via-[#11224d] to-[#0a1833] shadow-2xl border border-blue-900 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute w-60 h-60 bg-blue-700/20 rounded-full blur-3xl top-[-2rem] left-[-2rem]" />
              <div className="absolute w-40 h-40 bg-cyan-400/15 rounded-full blur-2xl bottom-[-1rem] right-[-1rem]" />
            </div>
            <div className="relative z-10">
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-cyan-300 drop-shadow mb-2">
                  Website Security Scanner
                </h2>
                <p className="text-blue-100 text-sm mb-4">
                  Comprehensive security assessment of websites. Identifies
                  vulnerabilities, SSL issues, and potential security weaknesses
                  in web applications.
                </p>
              </div>
              <div className="bg-[#11224d]/60 rounded-lg p-4 border border-cyan-700/50">
                <VulnerabilityScanner />
              </div>
            </div>
          </div>
        </section>

        {/* Usage Instructions */}
        <section className="mt-12 p-8 rounded-xl bg-gradient-to-br from-[#0a1833] via-[#11224d] to-[#0a1833] shadow-2xl border border-blue-900 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute w-80 h-80 bg-blue-700/30 rounded-full blur-3xl top-[-4rem] left-[-4rem]" />
            <div className="absolute w-60 h-60 bg-cyan-400/20 rounded-full blur-2xl bottom-[-3rem] right-[-3rem]" />
          </div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-4 text-cyan-300 drop-shadow">
              How to Use These Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-blue-100">
              <div>
                <h3 className="font-bold text-cyan-200 mb-2">
                  🛡️ Best Practices
                </h3>
                <ul className="list-disc ml-6 space-y-1 text-sm">
                  <li>Run regular scans on downloaded files</li>
                  <li>Use strong, unique passwords for each account</li>
                  <li>Verify URLs before entering sensitive information</li>
                  <li>Perform security assessments on your websites</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-cyan-200 mb-2">
                  ⚠️ Important Notes
                </h3>
                <ul className="list-disc ml-6 space-y-1 text-sm">
                  <li>These are demo tools for educational purposes</li>
                  <li>For production use, integrate with real security APIs</li>
                  <li>Always use multiple security layers</li>
                  <li>Keep tools and databases updated regularly</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-16 text-center text-cyan-700 text-xs">
          &copy; 2025 Cybersecurity Toolkit Demo - Professional Security Tools
        </footer>
      </div>
    </main>
  );
}

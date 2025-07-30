"use client";
import React from "react";
import Link from "next/link";

export default function LearningSection() {
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
            Learning & Awareness
          </h2>

          <p className="text-lg text-blue-100 mb-6">
            Build your cybersecurity knowledge with our comprehensive learning
            resources. From basic concepts to advanced techniques, we provide
            the education you need to stay secure in the digital world.
          </p>

          {/* Learning Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#11224d]/80 rounded-lg p-6 border border-cyan-700 shadow">
              <h3 className="font-bold text-cyan-200 mb-3 text-xl">
                🎓 Fundamentals
              </h3>
              <ul className="list-disc ml-6 mb-4 text-blue-100 space-y-2">
                <li>Understanding Cybersecurity Threats</li>
                <li>Phishing Recognition & Prevention</li>
                <li>Malware Types & Protection</li>
                <li>Social Engineering Awareness</li>
                <li>Data Privacy Principles</li>
              </ul>
            </div>

            <div className="bg-[#11224d]/80 rounded-lg p-6 border border-cyan-700 shadow">
              <h3 className="font-bold text-cyan-200 mb-3 text-xl">
                🔐 Best Practices
              </h3>
              <ul className="list-disc ml-6 mb-4 text-blue-100 space-y-2">
                <li>Creating Strong Passwords</li>
                <li>Multi-Factor Authentication (MFA)</li>
                <li>Safe Browsing Habits</li>
                <li>Secure Email Practices</li>
                <li>Mobile Device Security</li>
              </ul>
            </div>

            <div className="bg-[#11224d]/80 rounded-lg p-6 border border-cyan-700 shadow">
              <h3 className="font-bold text-cyan-200 mb-3 text-xl">
                🛠️ Practical Guides
              </h3>
              <ul className="list-disc ml-6 mb-4 text-blue-100 space-y-2">
                <li>Securing Your Home Network</li>
                <li>Setting Up VPN Protection</li>
                <li>Backup & Recovery Strategies</li>
                <li>Incident Response Planning</li>
                <li>Privacy Settings Configuration</li>
              </ul>
            </div>

            <div className="bg-[#11224d]/80 rounded-lg p-6 border border-cyan-700 shadow">
              <h3 className="font-bold text-cyan-200 mb-3 text-xl">
                📚 Resources
              </h3>
              <ul className="list-disc ml-6 mb-4 text-blue-100 space-y-2">
                <li>Security Checklists & Templates</li>
                <li>Interactive Learning Modules</li>
                <li>Video Tutorials & Webinars</li>
                <li>Industry Certification Guides</li>
                <li>Free Security Tools & Software</li>
              </ul>
            </div>
          </div>

          {/* Featured Learning Paths */}
          <div className="bg-cyan-900/20 rounded-lg p-6 border border-cyan-700/50 mb-6">
            <h3 className="font-bold text-cyan-200 mb-4 text-xl">
              🎯 Featured Learning Paths
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#11224d]/60 rounded-lg p-4 border border-cyan-700/30">
                <h4 className="font-semibold text-cyan-300 mb-2">
                  Beginner Track
                </h4>
                <p className="text-blue-100 text-sm">
                  Start your cybersecurity journey with essential concepts and
                  basic protection strategies.
                </p>
              </div>
              <div className="bg-[#11224d]/60 rounded-lg p-4 border border-cyan-700/30">
                <h4 className="font-semibold text-cyan-300 mb-2">
                  Business Track
                </h4>
                <p className="text-blue-100 text-sm">
                  Learn to protect your organization with enterprise-level
                  security practices and policies.
                </p>
              </div>
              <div className="bg-[#11224d]/60 rounded-lg p-4 border border-cyan-700/30">
                <h4 className="font-semibold text-cyan-300 mb-2">
                  Advanced Track
                </h4>
                <p className="text-blue-100 text-sm">
                  Deep dive into threat hunting, incident response, and advanced
                  security technologies.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-cyan-200 mb-4">
              💡 <strong>Stay Updated:</strong> Cybersecurity is constantly
              evolving. Regular learning and staying informed about new threats
              is crucial for maintaining strong security posture.
            </p>
            <Link
              href="/tools"
              className="inline-block px-6 py-2 rounded-lg bg-blue-700 text-white font-bold shadow hover:bg-blue-600 transition mr-4"
            >
              Try Our Security Tools →
            </Link>
            <Link
              href="/threat-news"
              className="inline-block px-6 py-2 rounded-lg bg-orange-700 text-white font-bold shadow hover:bg-orange-600 transition"
            >
              Latest Threat News →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

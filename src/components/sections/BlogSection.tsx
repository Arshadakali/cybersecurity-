"use client";
import React from "react";
import Link from "next/link";

export default function BlogSection() {
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
            Blog & Articles
          </h2>

          <p className="text-lg text-blue-100 mb-8">
            Explore our collection of cybersecurity insights, tutorials, and
            expert analysis. Stay informed with practical advice and real-world
            case studies from security professionals.
          </p>

          {/* Featured Articles */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-cyan-200 mb-6">
              📖 Featured Articles
            </h3>
            <div className="space-y-6">
              <article className="bg-[#11224d]/80 rounded-lg p-6 border border-cyan-700 shadow hover:bg-cyan-900/20 transition">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-xl font-semibold text-cyan-300">
                    The Evolution of Ransomware: From Simple Locks to Corporate
                    Nightmares
                  </h4>
                  <span className="text-xs text-cyan-400 bg-cyan-900/30 px-2 py-1 rounded">
                    NEW
                  </span>
                </div>
                <p className="text-blue-100 mb-3">
                  Explore how ransomware has evolved from simple file encryption
                  to sophisticated attacks targeting entire corporate
                  infrastructures. Learn about the latest tactics and how
                  organizations can defend themselves.
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-cyan-400">
                    By Security Team • 5 min read
                  </span>
                  <span className="text-blue-300">January 15, 2025</span>
                </div>
              </article>

              <article className="bg-[#11224d]/80 rounded-lg p-6 border border-cyan-700 shadow hover:bg-cyan-900/20 transition">
                <h4 className="text-xl font-semibold text-cyan-300 mb-3">
                  Zero Trust Architecture: Building Security from the Ground Up
                </h4>
                <p className="text-blue-100 mb-3">
                  Understand the principles of Zero Trust security and how to
                  implement this modern approach to protect your organization in
                  an increasingly connected world.
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-cyan-400">
                    By Dr. Sarah Chen • 8 min read
                  </span>
                  <span className="text-blue-300">January 10, 2025</span>
                </div>
              </article>

              <article className="bg-[#11224d]/80 rounded-lg p-6 border border-cyan-700 shadow hover:bg-cyan-900/20 transition">
                <h4 className="text-xl font-semibold text-cyan-300 mb-3">
                  Social Engineering: The Human Factor in Cybersecurity
                </h4>
                <p className="text-blue-100 mb-3">
                  Dive deep into social engineering tactics used by
                  cybercriminals and learn how to train your team to recognize
                  and resist these psychological manipulation techniques.
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-cyan-400">
                    By Mike Rodriguez • 6 min read
                  </span>
                  <span className="text-blue-300">January 5, 2025</span>
                </div>
              </article>
            </div>
          </div>

          {/* Article Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#11224d]/80 rounded-lg p-6 border border-cyan-700 shadow">
              <h3 className="font-bold text-cyan-200 mb-3 text-xl">
                🎓 Tutorials & Guides
              </h3>
              <ul className="list-disc ml-6 mb-4 text-blue-100 space-y-2 text-sm">
                <li>Step-by-step security implementations</li>
                <li>Tool configuration guides</li>
                <li>Best practice walkthroughs</li>
                <li>Hands-on security exercises</li>
              </ul>
              <p className="text-xs text-cyan-300">12 articles</p>
            </div>

            <div className="bg-[#11224d]/80 rounded-lg p-6 border border-cyan-700 shadow">
              <h3 className="font-bold text-cyan-200 mb-3 text-xl">
                🔍 Case Studies
              </h3>
              <ul className="list-disc ml-6 mb-4 text-blue-100 space-y-2 text-sm">
                <li>Real-world attack analysis</li>
                <li>Incident response stories</li>
                <li>Lessons learned from breaches</li>
                <li>Success stories in security</li>
              </ul>
              <p className="text-xs text-cyan-300">8 articles</p>
            </div>

            <div className="bg-[#11224d]/80 rounded-lg p-6 border border-cyan-700 shadow">
              <h3 className="font-bold text-cyan-200 mb-3 text-xl">
                🔬 Technology Deep Dives
              </h3>
              <ul className="list-disc ml-6 mb-4 text-blue-100 space-y-2 text-sm">
                <li>Emerging security technologies</li>
                <li>Cryptography explanations</li>
                <li>AI in cybersecurity</li>
                <li>Cloud security innovations</li>
              </ul>
              <p className="text-xs text-cyan-300">15 articles</p>
            </div>
          </div>

          {/* Industry Insights */}
          <div className="bg-purple-900/20 rounded-lg p-6 border border-purple-700/50 mb-8">
            <h3 className="font-bold text-purple-200 mb-4 text-xl">
              💼 Industry Insights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#11224d]/60 rounded-lg p-4 border border-purple-700/30">
                <h4 className="font-semibold text-purple-300 mb-2">
                  Market Trends
                </h4>
                <p className="text-blue-100 text-sm">
                  Analysis of cybersecurity market trends, emerging threats, and
                  industry forecasts.
                </p>
              </div>
              <div className="bg-[#11224d]/60 rounded-lg p-4 border border-purple-700/30">
                <h4 className="font-semibold text-purple-300 mb-2">
                  Regulatory Updates
                </h4>
                <p className="text-blue-100 text-sm">
                  Latest compliance requirements, regulatory changes, and their
                  impact on security practices.
                </p>
              </div>
              <div className="bg-[#11224d]/60 rounded-lg p-4 border border-purple-700/30">
                <h4 className="font-semibold text-purple-300 mb-2">
                  Expert Interviews
                </h4>
                <p className="text-blue-100 text-sm">
                  Conversations with industry leaders, researchers, and security
                  practitioners.
                </p>
              </div>
              <div className="bg-[#11224d]/60 rounded-lg p-4 border border-purple-700/30">
                <h4 className="font-semibold text-purple-300 mb-2">
                  Career Guidance
                </h4>
                <p className="text-blue-100 text-sm">
                  Tips for building a career in cybersecurity, certifications,
                  and skill development.
                </p>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-cyan-900/20 rounded-lg p-6 border border-cyan-700/50 mb-6">
            <h3 className="font-bold text-cyan-200 mb-4 text-xl">
              📧 Stay Updated
            </h3>
            <p className="text-blue-100 mb-4">
              Subscribe to our newsletter for weekly cybersecurity insights and
              the latest blog posts.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-2 rounded-lg bg-[#11224d] border border-cyan-700 text-blue-100 placeholder:text-cyan-300 focus:outline-none focus:border-cyan-500"
              />
              <button className="px-6 py-2 rounded-lg bg-cyan-700 text-white font-bold shadow hover:bg-cyan-600 transition">
                Subscribe
              </button>
            </div>
          </div>

          <div className="text-center">
            <p className="text-cyan-200 mb-4">
              📚 <strong>Knowledge is Power:</strong> Stay informed about the
              latest cybersecurity trends and protect yourself with expert
              insights.
            </p>
            <Link
              href="/learning"
              className="inline-block px-6 py-2 rounded-lg bg-blue-700 text-white font-bold shadow hover:bg-blue-600 transition mr-4"
            >
              Explore Learning Resources →
            </Link>
            <Link
              href="/threat-news"
              className="inline-block px-6 py-2 rounded-lg bg-orange-700 text-white font-bold shadow hover:bg-orange-600 transition"
            >
              Latest Threat Intelligence →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

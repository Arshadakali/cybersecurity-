"use client";
import React from "react";
import Link from "next/link";

export default function LegalSection() {
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
            Legal & Policy
          </h2>

          <p className="text-lg text-blue-100 mb-8">
            Our commitment to transparency and legal compliance. Review our
            policies to understand how we protect your data, provide our
            services, and maintain the highest standards of cybersecurity
            practice.
          </p>

          {/* Legal Documents */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#11224d]/80 rounded-lg p-6 border border-cyan-700 shadow hover:bg-cyan-900/20 transition">
              <h3 className="font-bold text-cyan-200 mb-3 text-xl flex items-center">
                🔒 Privacy Policy
              </h3>
              <p className="text-blue-100 mb-4 text-sm">
                Learn how we collect, use, and protect your personal
                information. We are committed to maintaining your privacy and
                securing your data according to industry best practices and
                legal requirements.
              </p>
              <div className="space-y-2 text-sm text-blue-200">
                <p>• Data collection and usage</p>
                <p>• Cookie and tracking policies</p>
                <p>• Third-party integrations</p>
                <p>• Your rights and choices</p>
              </div>
              <button className="mt-4 px-4 py-2 rounded-lg bg-cyan-700 text-white font-bold shadow hover:bg-cyan-600 transition text-sm">
                Read Full Policy
              </button>
            </div>

            <div className="bg-[#11224d]/80 rounded-lg p-6 border border-cyan-700 shadow hover:bg-cyan-900/20 transition">
              <h3 className="font-bold text-cyan-200 mb-3 text-xl flex items-center">
                📋 Terms of Service
              </h3>
              <p className="text-blue-100 mb-4 text-sm">
                Understand the terms and conditions for using our cybersecurity
                tools and services. These terms outline your rights and
                responsibilities when accessing our platform.
              </p>
              <div className="space-y-2 text-sm text-blue-200">
                <p>• Service usage guidelines</p>
                <p>• User responsibilities</p>
                <p>• Limitation of liability</p>
                <p>• Termination conditions</p>
              </div>
              <button className="mt-4 px-4 py-2 rounded-lg bg-cyan-700 text-white font-bold shadow hover:bg-cyan-600 transition text-sm">
                Read Terms
              </button>
            </div>

            <div className="bg-[#11224d]/80 rounded-lg p-6 border border-cyan-700 shadow hover:bg-cyan-900/20 transition">
              <h3 className="font-bold text-cyan-200 mb-3 text-xl flex items-center">
                🍪 Cookie Policy
              </h3>
              <p className="text-blue-100 mb-4 text-sm">
                Information about how we use cookies and similar technologies to
                enhance your experience and analyze website performance while
                respecting your privacy preferences.
              </p>
              <div className="space-y-2 text-sm text-blue-200">
                <p>• Essential cookies</p>
                <p>• Analytics and performance</p>
                <p>• Marketing preferences</p>
                <p>• Cookie management</p>
              </div>
              <button className="mt-4 px-4 py-2 rounded-lg bg-cyan-700 text-white font-bold shadow hover:bg-cyan-600 transition text-sm">
                Manage Cookies
              </button>
            </div>

            <div className="bg-[#11224d]/80 rounded-lg p-6 border border-cyan-700 shadow hover:bg-cyan-900/20 transition">
              <h3 className="font-bold text-cyan-200 mb-3 text-xl flex items-center">
                ⚖️ Acceptable Use Policy
              </h3>
              <p className="text-blue-100 mb-4 text-sm">
                Guidelines for appropriate use of our cybersecurity tools and
                services. This policy ensures our platform is used ethically and
                responsibly by all users.
              </p>
              <div className="space-y-2 text-sm text-blue-200">
                <p>• Prohibited activities</p>
                <p>• Ethical use guidelines</p>
                <p>• Security testing limits</p>
                <p>• Reporting violations</p>
              </div>
              <button className="mt-4 px-4 py-2 rounded-lg bg-cyan-700 text-white font-bold shadow hover:bg-cyan-600 transition text-sm">
                View Policy
              </button>
            </div>
          </div>

          {/* Compliance & Certifications */}
          <div className="bg-green-900/20 rounded-lg p-6 border border-green-700/50 mb-8">
            <h3 className="font-bold text-green-200 mb-4 text-xl">
              ✅ Compliance & Certifications
            </h3>
            <p className="text-blue-100 mb-4">
              We maintain compliance with industry standards and regulations to
              ensure the highest level of security and trust.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-[#11224d]/60 rounded-lg p-4 border border-green-700/30">
                <h4 className="font-semibold text-green-300 mb-2">
                  GDPR Compliant
                </h4>
                <p className="text-blue-100 text-sm">
                  Full compliance with European data protection regulations.
                </p>
              </div>
              <div className="bg-[#11224d]/60 rounded-lg p-4 border border-green-700/30">
                <h4 className="font-semibold text-green-300 mb-2">ISO 27001</h4>
                <p className="text-blue-100 text-sm">
                  Information security management system certification.
                </p>
              </div>
              <div className="bg-[#11224d]/60 rounded-lg p-4 border border-green-700/30">
                <h4 className="font-semibold text-green-300 mb-2">
                  SOC 2 Type II
                </h4>
                <p className="text-blue-100 text-sm">
                  Security, availability, and confidentiality controls audited.
                </p>
              </div>
            </div>
          </div>

          {/* Data Protection */}
          <div className="bg-blue-900/20 rounded-lg p-6 border border-blue-700/50 mb-8">
            <h3 className="font-bold text-blue-200 mb-4 text-xl">
              🛡️ Data Protection Measures
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-300 mb-3">
                  Technical Safeguards
                </h4>
                <ul className="list-disc ml-6 text-blue-100 text-sm space-y-1">
                  <li>End-to-end encryption</li>
                  <li>Secure data transmission (TLS 1.3)</li>
                  <li>Regular security audits</li>
                  <li>Access controls and monitoring</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-300 mb-3">
                  Administrative Controls
                </h4>
                <ul className="list-disc ml-6 text-blue-100 text-sm space-y-1">
                  <li>Staff security training</li>
                  <li>Incident response procedures</li>
                  <li>Data retention policies</li>
                  <li>Vendor security assessments</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-cyan-900/20 rounded-lg p-6 border border-cyan-700/50 mb-6">
            <h3 className="font-bold text-cyan-200 mb-4 text-xl">
              📞 Legal Contact Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-cyan-300 mb-2">
                  Data Protection Officer
                </h4>
                <p className="text-blue-100 text-sm mb-1">
                  Email: dpo@cybersecurity-demo.com
                </p>
                <p className="text-blue-100 text-sm">
                  For privacy-related inquiries and data requests
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-300 mb-2">
                  Legal Department
                </h4>
                <p className="text-blue-100 text-sm mb-1">
                  Email: legal@cybersecurity-demo.com
                </p>
                <p className="text-blue-100 text-sm">
                  For terms, compliance, and legal matters
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-cyan-200 mb-4">
              📄 <strong>Transparency First:</strong> We believe in clear,
              understandable policies that protect your rights while enabling
              secure services.
            </p>
            <p className="text-sm text-blue-300 mb-4">
              Last updated: January 2025 • We may update these policies
              periodically to reflect changes in our services or legal
              requirements.
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-2 rounded-lg bg-blue-700 text-white font-bold shadow hover:bg-blue-600 transition mr-4"
            >
              Contact Us →
            </Link>
            <Link
              href="/about"
              className="inline-block px-6 py-2 rounded-lg bg-green-700 text-white font-bold shadow hover:bg-green-600 transition"
            >
              About Our Team →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import SecurityDashboard from "../components/SecurityDashboard";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0a1833] via-[#11224d] to-[#0a1833] p-8">
      <section className="w-full max-w-3xl text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-300 drop-shadow mb-4">
          Empowering Digital Trust
        </h1>
        <p className="text-lg md:text-xl text-blue-100 mb-6">
          Comprehensive cybersecurity tools, resources, and services to protect
          your digital world.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Link
            href="/about"
            className="px-6 py-2 rounded-lg bg-cyan-700 text-white font-bold shadow hover:bg-cyan-600 transition"
          >
            About
          </Link>
          <Link
            href="/services"
            className="px-6 py-2 rounded-lg bg-cyan-700 text-white font-bold shadow hover:bg-cyan-600 transition"
          >
            Services
          </Link>
          <Link
            href="/tools"
            className="px-6 py-2 rounded-lg bg-cyan-700 text-white font-bold shadow hover:bg-cyan-600 transition"
          >
            Tools
          </Link>
          <Link
            href="/learning"
            className="px-6 py-2 rounded-lg bg-cyan-700 text-white font-bold shadow hover:bg-cyan-600 transition"
          >
            Learning
          </Link>
          <Link
            href="/threat-news"
            className="px-6 py-2 rounded-lg bg-cyan-700 text-white font-bold shadow hover:bg-cyan-600 transition"
          >
            Threat News
          </Link>
          <Link
            href="/blog"
            className="px-6 py-2 rounded-lg bg-cyan-700 text-white font-bold shadow hover:bg-cyan-600 transition"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="px-6 py-2 rounded-lg bg-cyan-700 text-white font-bold shadow hover:bg-cyan-600 transition"
          >
            Contact
          </Link>
          <Link
            href="/legal"
            className="px-6 py-2 rounded-lg bg-cyan-700 text-white font-bold shadow hover:bg-cyan-600 transition"
          >
            Legal
          </Link>
        </div>
      </section>
      <section className="w-full max-w-2xl mb-12">
        <SecurityDashboard />
      </section>
      <section className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          href="/services"
          className="block p-6 rounded-xl bg-[#11224d]/80 border border-cyan-700 shadow text-cyan-200 hover:bg-cyan-900/40 transition"
        >
          <h2 className="text-xl font-bold mb-2">Explore Our Services</h2>
          <p>Penetration testing, audits, compliance, and more.</p>
        </Link>
        <Link
          href="/learning"
          className="block p-6 rounded-xl bg-[#11224d]/80 border border-cyan-700 shadow text-cyan-200 hover:bg-cyan-900/40 transition"
        >
          <h2 className="text-xl font-bold mb-2">Learning & Awareness</h2>
          <p>Guides, best practices, and free resources.</p>
        </Link>
        <Link
          href="/threat-news"
          className="block p-6 rounded-xl bg-[#11224d]/80 border border-cyan-700 shadow text-cyan-200 hover:bg-cyan-900/40 transition"
        >
          <h2 className="text-xl font-bold mb-2">Threat Intelligence</h2>
          <p>Latest news, alerts, and breach analysis.</p>
        </Link>
        <Link
          href="/blog"
          className="block p-6 rounded-xl bg-[#11224d]/80 border border-cyan-700 shadow text-cyan-200 hover:bg-cyan-900/40 transition"
        >
          <h2 className="text-xl font-bold mb-2">Blog & Articles</h2>
          <p>Tutorials, case studies, and security explainers.</p>
        </Link>
      </section>
      <footer className="mt-16 text-center text-cyan-700 text-xs">
        &copy; 2025 Cybersecurity Toolkit Demo
      </footer>
    </main>
  );
}

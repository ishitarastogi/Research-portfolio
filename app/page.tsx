"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import PortfolioHero from "@/components/ui/portfolio-hero";

// ─── Data ────────────────────────────────────────────────────────────────────

const experience = [
  { company: "Hazeflow", role: "Research Analyst", current: true },
  { company: "Gelato Network", role: "Technical Writer" },
  { company: "Nethermind", role: "DeFi Analyst" },
];

const publications = [
  {
    publisher: "Hazeflow",
    items: [
      {
        title: "Raiku: Solving Solana's Biggest Pain Points",
        href: "https://hazeflow.xyz/blog/raiku-solving-solana-s-biggest-pain-points",
        tags: ["solana", "defi"],
      },
      {
        title: "Are L2s Really Secured by Ethereum?",
        href: "https://hazeflow.xyz/blog/are-l2s-really-secured-by-ethereum",
        tags: ["l2s"],
      },
      {
        title: "The State of Confidential AI in 2025",
        href: "https://hazeflow.xyz/blog/the-state-of-confidential-ai-in-2025-who-wins-and-who-loses",
        tags: ["defi"],
      },
      {
        title: "Why Are Based Rollups the Only Future of Ethereum?",
        href: "https://hazeflow.xyz/blog/why-are-based-rollups-the-only-future-of-ethereum",
        tags: ["l2s"],
      },
      {
        title: "Succinct Labs: SP1 vs SPN",
        href: "https://hazeflow.xyz/blog/succinct-labs-what-is-the-difference-between-sp1-and-spn",
        tags: ["l2s"],
      },
      {
        title: "Proof Generation on Succinct and RISC Zero",
        href: "https://hazeflow.xyz/blog/proof-generation-on-succinct-and-risc-zero",
        tags: ["l2s"],
      },
      {
        title: "Blobonomics: How Ethereum Is Hardening Its DA Layer",
        href: "https://hazeflow.xyz/blog/blobonomics-the-new-attack-surface-how-ethereum-is-hardening-its-da-layer",
        tags: ["l2s"],
      },
    ],
  },
  {
    publisher: "Phala Network",
    items: [
      {
        title: "GPU TEE Deep Dive: Securing AI at the Hardware Layer",
        href: "https://phala.com/posts/Phala-GPU-TEE-Deep-Dive",
        tags: ["defi"],
      },
      {
        title: "What Does It Take to Build Safe AGI?",
        href: "https://phala.com/posts/what-does-it-take-to-build-safe-agi",
        tags: ["defi"],
      },
    ],
  },
  {
    publisher: "Independent Research",
    items: [
      {
        title: "Not All L2s Prioritize Ethereum's Security Equally!",
        href: "https://app.t2.world/article/cm1dfkb61113363221mc9excti2x",
        tags: ["l2s"],
      },
      {
        title: 'Rollups, Reality, and the "Secured by Ethereum" Illusion',
        href: "https://app.t2.world/article/cm92zalxf00zm6w1pg5ah31nd",
        tags: ["l2s"],
      },
      {
        title: "Rollup Decentralisation: What Stage Are We Really At?",
        href: "https://mirror.xyz/0x4dc8b342dAe79b0426a05c4fb9d95eD1f9b97144/P0H7f8tSc-WLCthEeEsAeimD-rQ4WE2T94AwfmkcLgU",
        tags: ["l2s"],
      },
      {
        title: "Are Bitcoin L2s Real?",
        href: "https://mirror.xyz/0x4dc8b342dAe79b0426a05c4fb9d95eD1f9b97144/qe36fcgfuzfFSNnmsRPEo5SCaX94nl5mDgbJPBA-e-g",
        tags: ["l2s"],
      },
      {
        title: "Rollup Sequencers",
        href: "https://mirror.xyz/0x4dc8b342dAe79b0426a05c4fb9d95eD1f9b97144/3-NLGyJ6kytwJu7ewMU-D3KeEB-365Bq0P65pq7iHJ4",
        tags: ["l2s"],
      },
    ],
  },
];

const diagrams = [
  { file: "Alpenglow.png", title: "Alpenglow", desc: "Solana's sub-150ms finality upgrade" },
  { file: "Basedrollups.png", title: "Based Rollups", desc: "L1-sequenced rollup architecture" },
  { file: "PBSvsMCL.png", title: "PBS vs MCL", desc: "Block building comparison" },
  { file: "Solanatxcycle.png", title: "Solana Tx Cycle", desc: "Transaction lifecycle on Solana" },
  { file: "SPN.png", title: "SPN", desc: "Succinct Prover Network architecture" },
  { file: "ZK.png", title: "ZK Proofs", desc: "Zero-knowledge proof pipeline" },
];

const filterOptions = [
  { label: "Crypto Payments", value: "payments" },
  { label: "Stablecoins", value: "stablecoins" },
  { label: "Solana", value: "solana" },
  { label: "Tokenization", value: "tokenization" },
  { label: "DeFi", value: "defi" },
  { label: "L2s", value: "l2s" },
];

// ─── Socials ─────────────────────────────────────────────────────────────────

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);
const SubstackIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
  </svg>
);

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Page() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [lbOpen, setLbOpen] = useState(false);
  const [lbIdx, setLbIdx] = useState(0);

  // Scroll-reveal for sections below hero
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("v");
        });
      },
      { threshold: 0.06 }
    );
    document.querySelectorAll(".fi").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Lightbox keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!lbOpen) return;
      if (e.key === "Escape") setLbOpen(false);
      if (e.key === "ArrowLeft")
        setLbIdx((i) => (i - 1 + diagrams.length) % diagrams.length);
      if (e.key === "ArrowRight") setLbIdx((i) => (i + 1) % diagrams.length);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lbOpen]);

  useEffect(() => {
    document.body.style.overflow = lbOpen ? "hidden" : "";
  }, [lbOpen]);

  const openLB = (idx: number) => {
    setLbIdx(idx);
    setLbOpen(true);
  };

  // Filtered articles
  const filteredPubs = activeFilter
    ? publications
        .map((pub) => ({
          ...pub,
          items: pub.items.filter((item) =>
            item.tags.includes(activeFilter!)
          ),
        }))
        .filter((pub) => pub.items.length > 0)
    : publications;

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <PortfolioHero />

      {/* ── Experience ──────────────────────────────────────── */}
      <section
        id="about"
        className="max-w-[880px] mx-auto px-7 pt-16 pb-12"
        style={{ scrollMarginTop: "80px" }}
      >
        <p
          className="text-[0.84rem] font-medium mb-2.5"
          style={{ color: "var(--warm)" }}
        >
          hey, i'm ishita
        </p>
        <h1
          className="font-serif text-[clamp(1.9rem,4vw,2.8rem)] font-normal leading-[1.15] tracking-[-0.01em] max-w-[560px]"
          style={{ color: "var(--ink)" }}
        >
          I write about crypto payments, stablecoins &{" "}
          <em className="italic">Solana.</em>
        </h1>
        <p
          className="mt-4 text-[0.9rem] font-light max-w-[440px] leading-[1.6]"
          style={{ color: "var(--sub)" }}
        >
          Research Analyst exploring how crypto rails are replacing traditional
          finance — from stablecoin settlements to tokenized assets.
        </p>

        {/* Filter Tags */}
        <div className="mt-5 flex gap-2 flex-wrap">
          {filterOptions.map((f) => (
            <button
              key={f.value}
              onClick={() =>
                setActiveFilter(activeFilter === f.value ? null : f.value)
              }
              className="text-[0.7rem] font-medium px-[11px] py-[4px] rounded-[14px] border-[1.5px] cursor-pointer transition-all duration-200 select-none"
              style={{
                color:
                  activeFilter === f.value ? "var(--bg)" : "var(--sub)",
                background:
                  activeFilter === f.value ? "var(--ink)" : "var(--tag-bg)",
                borderColor:
                  activeFilter === f.value ? "var(--ink)" : "transparent",
              }}
            >
              {f.label}
            </button>
          ))}
          {activeFilter && (
            <button
              onClick={() => setActiveFilter(null)}
              className="text-[0.7rem] font-medium px-[11px] py-[4px] rounded-[14px] transition-all duration-200"
              style={{ color: "var(--warm)", textDecoration: "underline" }}
            >
              Show all
            </button>
          )}
        </div>

        {/* Experience Cards */}
        <div className="mt-9">
          <div
            className="text-[0.62rem] font-semibold tracking-[0.1em] uppercase mb-3"
            style={{ color: "var(--muted)" }}
          >
            Where I&apos;ve worked
          </div>
          <div className="flex gap-2.5 flex-wrap">
            {experience.map((exp) => (
              <div
                key={exp.company}
                className="flex-1 min-w-[160px] rounded-xl p-4 relative overflow-hidden transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  boxShadow: "0 0 0 transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 6px 18px rgba(0,0,0,0.06)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 0 transparent";
                }}
              >
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] rounded-t-xl"
                  style={{ background: "var(--warm)" }}
                />
                <div
                  className="text-[0.9rem] font-semibold"
                  style={{ color: "var(--ink)" }}
                >
                  {exp.company}
                </div>
                <div
                  className="text-[0.74rem]"
                  style={{ color: "var(--sub)" }}
                >
                  {exp.role}
                </div>
                {exp.current && (
                  <span
                    className="inline-block text-[0.58rem] font-semibold tracking-[0.06em] uppercase px-[7px] py-[2px] rounded-[4px] mt-1.5"
                    style={{
                      color: "var(--warm)",
                      background: "rgba(196,149,106,0.1)",
                    }}
                  >
                    current
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[880px] mx-auto px-7">
        <hr style={{ border: "none", height: "1px", background: "var(--border)" }} />
      </div>

      {/* ── Articles ────────────────────────────────────────── */}
      <section
        id="articles"
        className="max-w-[880px] mx-auto px-7 py-12"
        style={{ scrollMarginTop: "80px" }}
      >
        <h2
          className="fi font-serif text-[1.4rem] font-normal mb-7"
          style={{ color: "var(--ink)" }}
        >
          Writing
        </h2>

        {activeFilter && (
          <div
            className="flex items-center justify-between mb-5 px-3.5 py-2.5 rounded-lg text-[0.78rem]"
            style={{
              background: "rgba(196,149,106,0.08)",
              color: "var(--sub)",
            }}
          >
            <span>
              Filtering by:{" "}
              <strong>
                {filterOptions.find((f) => f.value === activeFilter)?.label}
              </strong>
            </span>
            <button
              onClick={() => setActiveFilter(null)}
              className="text-[0.7rem] font-medium underline"
              style={{ color: "var(--warm)", background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}
            >
              Show all
            </button>
          </div>
        )}

        {filteredPubs.map((pub) => (
          <div key={pub.publisher} className="fi mb-8 last:mb-0">
            <div
              className="text-[0.64rem] font-semibold tracking-[0.1em] uppercase mb-2 pb-1.5 border-b"
              style={{
                color: "var(--muted)",
                borderColor: "var(--border-light)",
              }}
            >
              {pub.publisher}
            </div>
            <div className="flex flex-col gap-px">
              {pub.items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline justify-between gap-3 px-2.5 py-2 rounded-md no-underline transition-all duration-200"
                  style={{ color: "inherit" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "var(--card)";
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateX(3px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "transparent";
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateX(0)";
                  }}
                >
                  <span
                    className="font-serif text-[0.96rem] font-normal leading-[1.35] flex-1"
                    style={{ color: "var(--ink)" }}
                  >
                    {item.title}
                  </span>
                  <span
                    className="text-[0.78rem] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200"
                    style={{ color: "var(--muted)" }}
                  >
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Divider */}
      <div className="max-w-[880px] mx-auto px-7">
        <hr style={{ border: "none", height: "1px", background: "var(--border)" }} />
      </div>

      {/* ── Diagrams ────────────────────────────────────────── */}
      <section
        id="diagrams"
        className="max-w-[880px] mx-auto px-7 py-12"
        style={{ scrollMarginTop: "80px" }}
      >
        <h2
          className="fi font-serif text-[1.4rem] font-normal mb-7"
          style={{ color: "var(--ink)" }}
        >
          Diagrams
        </h2>
        <div className="fi grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {diagrams.map((d, i) => (
            <button
              key={d.file}
              onClick={() => openLB(i)}
              className="group text-left rounded-[10px] overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "var(--card)",
                border: "1px solid rgba(0,0,0,0.05)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 5px 16px rgba(0,0,0,0.06)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div
                className="aspect-[16/10] overflow-hidden flex items-center justify-center"
                style={{ background: "var(--tag-bg)" }}
              >
                <img
                  src={`/assets/${d.file}`}
                  alt={d.title}
                  className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-[1.03]"
                />
              </div>
              <div className="px-3 py-2.5">
                <h4
                  className="font-serif text-[0.88rem] font-normal leading-[1.3]"
                  style={{ color: "var(--ink)" }}
                >
                  {d.title}
                </h4>
                <p className="text-[0.7rem] mt-0.5" style={{ color: "var(--muted)" }}>
                  {d.desc}
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <div id="contact" className="max-w-[880px] mx-auto px-7 pb-12 fi" style={{ scrollMarginTop: "80px" }}>
        <div
          className="rounded-[10px] px-7 py-6 flex items-center justify-between gap-4 flex-wrap"
          style={{ background: "var(--ink)" }}
        >
          <p
            className="font-serif text-[1.05rem]"
            style={{ color: "var(--bg)" }}
          >
            Want to work together?
          </p>
          <div className="flex gap-2">
            {[
              { label: "DM on X", href: "https://x.com/Ishita_30" },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/ishitarastogii/",
              },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 text-[0.74rem] font-medium rounded-[5px] no-underline transition-all duration-200 hover:bg-white/10"
                style={{
                  color: "var(--bg)",
                  border: "1px solid rgba(255,255,255,0.16)",
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer
        className="max-w-[880px] mx-auto px-7 pt-6 pb-11 flex items-center justify-between border-t flex-wrap gap-3"
        style={{ borderColor: "var(--border)" }}
      >
        <p className="text-[0.72rem]" style={{ color: "var(--muted)" }}>
          Ishita Rastogi
        </p>
        <div className="flex gap-3.5">
          {[
            { label: "X ↗", href: "https://x.com/Ishita_30" },
            {
              label: "LinkedIn ↗",
              href: "https://www.linkedin.com/in/ishitarastogii/",
            },
            {
              label: "GitHub ↗",
              href: "https://github.com/ishitarastogi",
            },
            {
              label: "Substack ↗",
              href: "https://substack.com/@ishitarastogi",
            },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.72rem] no-underline transition-colors duration-200"
              style={{ color: "var(--sub)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--ink)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--sub)";
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      </footer>

      {/* ── Lightbox ────────────────────────────────────────── */}
      {lbOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center px-11"
          style={{ background: "rgba(8,8,8,0.92)", backdropFilter: "blur(12px)" }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setLbOpen(false);
          }}
        >
          <button
            onClick={() => setLbOpen(false)}
            className="absolute top-4 right-5 w-[34px] h-[34px] rounded-full flex items-center justify-center text-white text-[0.95rem] transition-colors duration-200 hover:bg-white/15"
            style={{ background: "rgba(255,255,255,0.07)" }}
          >
            ✕
          </button>
          <button
            onClick={() =>
              setLbIdx((i) => (i - 1 + diagrams.length) % diagrams.length)
            }
            className="absolute left-[18px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-xl transition-all duration-200 hover:bg-white/10"
            style={{
              background: "rgba(255,255,255,0.05)",
              color: "rgba(255,255,255,0.55)",
            }}
          >
            ‹
          </button>
          <button
            onClick={() => setLbIdx((i) => (i + 1) % diagrams.length)}
            className="absolute right-[18px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-xl transition-all duration-200 hover:bg-white/10"
            style={{
              background: "rgba(255,255,255,0.05)",
              color: "rgba(255,255,255,0.55)",
            }}
          >
            ›
          </button>
          <img
            src={`/assets/${diagrams[lbIdx].file}`}
            alt={diagrams[lbIdx].title}
            className="max-w-[92%] max-h-[85vh] rounded-[5px]"
            style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.5)" }}
          />
        </div>
      )}
    </>
  );
}

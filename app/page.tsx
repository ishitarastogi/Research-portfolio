"use client";

import { useState, useEffect } from "react";
import PortfolioHero from "@/components/ui/portfolio-hero";

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
    publisher: "Raiku",
    items: [
      {
        title: "Issues with Existing LSTs",
        href: "https://x.com/raikucom/status/2058907590143119729?s=20",
        tags: ["solana", "defi"],
      },
      {
        title: "Reading Faster: How RPC 2.0 is Jumpstarting the Next Race on Solana",
        href: "https://x.com/raikucom/status/2056369015811915806?s=20",
        tags: ["solana"],
      },
      {
        title: "RPC 2.0 Part 1: Why Is Reading So Hard? (Solana Edition)",
        href: "https://x.com/raikucom/status/2053844718673359072?s=20",
        tags: ["solana"],
      },
      {
        title: "propAMM vs Orderbook",
        href: "https://x.com/raikucom/status/2051310553558106483?s=20",
        tags: ["solana", "defi"],
      },
      {
        title: "Why MEV is a Cat and Mouse Game",
        href: "https://x.com/raikucom/status/2046218193148981587?s=20",
        tags: ["solana", "defi"],
      },
      {
        title: "The $20B Question: Wen Perps?",
        href: "https://x.com/raikucom/status/2043685702882198000?s=20",
        tags: ["solana", "defi"],
      },
      {
        title: "MEV: How do Validators and RPCs Earn from it? (Part 3)",
        href: "https://x.com/raikucom/status/2038619261606748560?s=20",
        tags: ["solana", "defi"],
      },
      {
        title: "MEV: What's a Searcher? (Part 2)",
        href: "https://x.com/raikucom/status/2036066517394034795?s=20",
        tags: ["solana", "defi"],
      },
      {
        title: "MEV: What is it and Why Should You Care? (Part 1)",
        href: "https://x.com/raikucom/status/2033528755709186238?s=20",
        tags: ["solana", "defi"],
      },
      {
        title: "Are Solana Validators Profitable?",
        href: "https://x.com/raikucom/status/2031024285360251195?s=20",
        tags: ["solana"],
      },
      {
        title: "Staking and LSTs",
        href: "https://x.com/raikucom/status/2028519410223235114?s=20",
        tags: ["solana", "defi"],
      },
      {
        title: "How to Choose an RPC",
        href: "https://x.com/raikucom/status/2026054794331443387?s=20",
        tags: ["solana"],
      },
      {
        title: "MCL vs PBS",
        href: "https://x.com/raikucom/status/2023553655626998080?s=20",
        tags: ["solana"],
      },
      {
        title: "Solana Will Beat TradFi",
        href: "https://x.com/raikucom/status/2020965984237224423?s=20",
        tags: ["solana"],
      },
      {
        title: "Alpenglow: The Solana Upgrade That Rivals NASDAQ",
        href: "https://x.com/raikucom/status/2018360253641863244?s=20",
        tags: ["solana"],
      },
      {
        title: "What are Solana's Execution Limits?",
        href: "https://x.com/raikucom/status/2015812917921280466",
        tags: ["solana"],
      },
      {
        title: "How Are Solana Fees So Gosh-Dang Cheap?",
        href: "https://x.com/raikucom/status/2013280488622862443",
        tags: ["solana"],
      },
      {
        title: "Why Do Solana Apps Keep Winning?",
        href: "https://x.com/raikucom/status/2010728528749252912",
        tags: ["solana"],
      },
      {
        title: "What's In Your Account: Understanding The Solana Programming Model",
        href: "https://x.com/raikucom/status/2000931378339152154",
        tags: ["solana"],
      },
      {
        title: "Institutions Are Here",
        href: "https://x.com/raikucom/status/1998030687786463529",
        tags: ["solana"],
      },
      {
        title: "Downtime is a Meme",
        href: "https://x.com/raikucom/status/1995538734935150940",
        tags: ["solana"],
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
  { file: "Alpenglow.png", title: "Alpenglow", desc: "Solana sub-150ms finality upgrade" },
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

export default function Page() {
  const [activeFilter, setActiveFilter] = useState(null as string | null);
  const [lbOpen, setLbOpen] = useState(false);
  const [lbIdx, setLbIdx] = useState(0);

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

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!lbOpen) return;
      if (e.key === "Escape") setLbOpen(false);
      if (e.key === "ArrowLeft") setLbIdx((i) => (i - 1 + diagrams.length) % diagrams.length);
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

  const filteredPubs = activeFilter
    ? publications
        .map((pub) => ({
          ...pub,
          items: pub.items.filter((item) => activeFilter ? item.tags.includes(activeFilter) : true),
        }))
        .filter((pub) => pub.items.length > 0)
    : publications;

  return (
    <>
      <PortfolioHero />

      <section id="about" className="max-w-[880px] mx-auto px-7 pt-16 pb-12" style={{ scrollMarginTop: "80px" }}>
        <p className="text-[0.84rem] font-medium mb-2.5" style={{ color: "var(--warm)" }}>
          hey, i&apos;m ishita
        </p>
        <h1 className="font-serif text-[clamp(1.9rem,4vw,2.8rem)] font-normal leading-[1.15] tracking-[-0.01em] max-w-[560px]" style={{ color: "var(--ink)" }}>
          I write about crypto payments, stablecoins & <em className="italic">Solana.</em>
        </h1>
        <p className="mt-4 text-[0.9rem] font-light max-w-[440px] leading-[1.6]" style={{ color: "var(--sub)" }}>
          Research Analyst exploring how crypto rails are replacing traditional finance, from stablecoin settlements to tokenized assets.
        </p>

        <div className="mt-5 flex gap-2 flex-wrap">
          {filterOptions.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(activeFilter === f.value ? null : f.value)}
              className="text-[0.7rem] font-medium px-[11px] py-[4px] rounded-[14px] border-[1.5px] cursor-pointer transition-all duration-200 select-none"
              style={{
                color: activeFilter === f.value ? "var(--bg)" : "var(--sub)",
                background: activeFilter === f.value ? "var(--ink)" : "var(--tag-bg)",
                borderColor: activeFilter === f.value ? "var(--ink)" : "transparent",
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

        <div className="mt-9">
          <div className="text-[0.62rem] font-semibold tracking-[0.1em] uppercase mb-3" style={{ color: "var(--muted)" }}>
            Where I&apos;ve worked
          </div>
          <div className="flex gap-2.5 flex-wrap">
            {experience.map((exp) => (
              <div
                key={exp.company}
                className="flex-1 min-w-[160px] rounded-xl p-4 relative overflow-hidden transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: "var(--card)", border: "1px solid var(--border)", boxShadow: "0 0 0 transparent" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 18px rgba(0,0,0,0.06)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 transparent";
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-xl" style={{ background: "var(--warm)" }} />
                <div className="text-[0.9rem] font-semibold" style={{ color: "var(--ink)" }}>{exp.company}</div>
                <div className="text-[0.74rem]" style={{ color: "var(--sub)" }}>{exp.role}</div>
                {exp.current && (
                  <span
                    className="inline-block text-[0.58rem] font-semibold tracking-[0.06em] uppercase px-[7px] py-[2px] rounded-[4px] mt-1.5"
                    style={{ color: "var(--warm)", background: "rgba(196,149,106,0.1)" }}
                  >
                    current
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[880px] mx-auto px-7">
        <hr style={{ border: "none", height: "1px", background: "var(--border)" }} />
      </div>

      <section id="articles" className="max-w-[880px] mx-auto px-7 py-12" style={{ scrollMarginTop: "80px" }}>
        <h2 className="fi font-serif text-[1.4rem] font-normal mb-7" style={{ color: "var(--ink)" }}>
          Writing
        </h2>

        {activeFilter && (
          <div
            className="flex items-center justify-between mb-5 px-3.5 py-2.5 rounded-lg text-[0.78rem]"
            style={{ background: "rgba(196,149,106,0.08)", color: "var(--sub)" }}
          >
            <span>
              Filtering by: <strong>{filterOptions.find((f) => f.value === activeFilter)?.label}</strong>
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
              style={{ color: "var(--muted)", borderColor: "var(--border-light)" }}
            >
              {pub.publisher}
            </div>
            <div className="flex flex-col gap-px">
              {{pub.items.map((item) => (
                <a key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline justify-between gap-3 px-2.5 py-2 rounded-md no-underline transition-all duration-200"
                  style={{ color: "inherit" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "var(--card)";
                    (e.currentTarget as HTMLElement).style.transform = "translateX(3px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                    (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                  }}
                >
                  <span className="font-serif text-[0.96rem] font-normal leading-[1.35] flex-1" style={{ color: "var(--ink)" }}>
                    {item.title}
                  </span>
                  <span
                    className="text-[0.78rem] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200"
                    style={{ color: "var(--muted)" }}
                  >
                    {">"}
                  </span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>

      <div className="max-w-[880px] mx-auto px-7">
        <hr style={{ border: "none", height: "1px", background: "var(--border)" }} />
      </div>

      <section id="diagrams" className="max-w-[880px] mx-auto px-7 py-12" style={{ scrollMarginTop: "80px" }}>
        <h2 className="fi font-serif text-[1.4rem] font-normal mb-7" style={{ color: "var(--ink)" }}>
          Diagrams
        </h2>
        <div className="fi grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {diagrams.map((d, i) => (
            <button
              key={d.file}
              onClick={() => openLB(i)}
              className="group text-left rounded-[10px] overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: "var(--card)", border: "1px solid rgba(0,0,0,0.05)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 5px 16px rgba(0,0,0,0.06)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div className="aspect-[16/10] overflow-hidden flex items-center justify-center" style={{ background: "var(--tag-bg)" }}>
                <img src={`/assets/${d.file}`} alt={d.title} className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-[1.03]" />
              </div>
              <div className="px-3 py-2.5">
                <h4 className="font-serif text-[0.88rem] font-normal leading-[1.3]" style={{ color: "var(--ink)" }}>
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

      <div id="contact" className="max-w-[880px] mx-auto px-7 pb-12 fi" style={{ scrollMarginTop: "80px" }}>
        <div className="rounded-[10px] px-7 py-6 flex items-center justify-between gap-4 flex-wrap" style={{ background: "var(--ink)" }}>
          <p className="font-serif text-[1.05rem]" style={{ color: "var(--bg)" }}>
            Want to work together?
          </p>
          <div className="flex gap-2">
            {[
              { label: "DM on X", href: "https://x.com/Ishita_30" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/ishitarastogii/" },
            ].map((l) => (
              
               <a key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 text-[0.74rem] font-medium rounded-[5px] no-underline transition-all duration-200 hover:bg-white/10"
                style={{ color: "var(--bg)", border: "1px solid rgba(255,255,255,0.16)" }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <footer
        className="max-w-[880px] mx-auto px-7 pt-6 pb-11 flex items-center justify-between border-t flex-wrap gap-3"
        style={{ borderColor: "var(--border)" }}
      >
        <p className="text-[0.72rem]" style={{ color: "var(--muted)" }}>
          Ishita Rastogi
        </p>
        <div className="flex gap-3.5">
          {[
            { label: "X", href: "https://x.com/Ishita_30" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/ishitarastogii/" },
            { label: "GitHub", href: "https://github.com/ishitarastogi" },
            { label: "Substack", href: "https://substack.com/@ishitarastogi" },
         ].map((l) => (
            <a key={l.label}
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
            X
          </button>
          <button
            onClick={() => setLbIdx((i) => (i - 1 + diagrams.length) % diagrams.length)}
            className="absolute left-[18px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-xl transition-all duration-200 hover:bg-white/10"
            style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.55)" }}
          >
            {"<"}
          </button>
          <button
            onClick={() => setLbIdx((i) => (i + 1) % diagrams.length)}
            className="absolute right-[18px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-xl transition-all duration-200 hover:bg-white/10"
            style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.55)" }}
          >
            {">"}
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

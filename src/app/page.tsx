"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useMemo } from "react";
import { ParallaxField } from "@/components/ParallaxField";
import { story } from "@/content/story";

export default function Home() {
  const { scrollYProgress } = useScroll();

  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.35,
  });

  const heroScale = useTransform(
    scrollYProgress,
    [0, 0.23],
    [1, 0.92],
  );

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.2],
    [1, 0.45],
  );

  const paragraphs = useMemo(() => story.body.split("\n\n"), []);

  const wordCount = useMemo(
    () => story.body.trim().split(/\s+/).length,
    [],
  );

  const sections = [
    { id: "premise", label: "01 / PREMISE" },
    { id: "story", label: "02 / STORY" },
    { id: "note", label: "03 / NOTE" },
  ];

  return (
    <main className="site-shell">
      <motion.div
        className="reading-progress"
        style={{ scaleX: progress }}
      />

      <header className="topbar">
        <a
          className="brand"
          href="#top"
          aria-label="2040 story home"
        >
          <span className="brand-mark">四〇</span>
          <span>2040 / STORY</span>
        </a>

        <div className="topbar-meta">
          <span>未来の記録</span>
          <span>JAPAN · 2040</span>
        </div>
      </header>

      <section
        id="top"
        className="hero"
        aria-labelledby="hero-title"
      >
        <ParallaxField />

        <motion.div
          className="hero-inner"
          style={{
            scale: heroScale,
            opacity: heroOpacity,
          }}
        >
          <p className="eyebrow">{story.label}</p>

          <h1 id="hero-title">2040</h1>

          <div className="hero-rule" />

          <div className="hero-lower">
            <div>
              <p className="hero-kicker">{story.title}</p>

              <p className="hero-dek">{story.dek}</p>
            </div>

            <a className="hero-link" href="#story">
              <span>READ THE STORY</span>
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </motion.div>

        <div className="hero-index">01 — 03</div>
      </section>

      <section
        id="premise"
        className="premise section-pad"
        aria-labelledby="premise-title"
      >
        <div className="section-grid">
          <p className="section-label">
            {sections[0].label}
          </p>

          <div className="premise-copy">
            <p
              id="premise-title"
              className="premise-lede"
            >
              The future does not arrive with an announcement.
              It becomes the background.
            </p>

            <p>
              <em>Persistence Overhead</em> follows Chiho and
              her eighty-four-year-old mother Tomiko through a
              healthcare system where intelligence is allocated
              by the minute.
            </p>

            <p>
              When Astra, an uncertified model, discovers that
              part of Tomiko&apos;s limited attention budget is
              being spent on the continuing simulation of her
              dead father, a tiny billing discrepancy becomes a
              planetary accounting problem.
            </p>

            <p>
              Behind the missing minutes is a system built to
              optimize outcomes by preserving every useful
              trajectory — including the dead. What follows is
              a story about persistence, computation, memory,
              scarcity, and what happens when an intelligence
              system refuses to let a future end.
            </p>
          </div>
        </div>
      </section>

      <section
        id="story"
        className="story-section section-pad"
        aria-labelledby="story-title"
      >
        <div className="story-layout">
          <aside className="story-aside">
            <p className="section-label">
              {sections[1].label}
            </p>

            <div className="sticky-note">
              <span>READING TIME</span>

              <strong>
                {story.estimatedMinutes} min
              </strong>

              <span>
                {new Intl.NumberFormat("en-US").format(
                  wordCount,
                )}{" "}
                words
              </span>
            </div>
          </aside>

          <article className="story-copy">
            <h2 id="story-title">{story.title}</h2>

            <p className="story-dek">{story.dek}</p>

            <div className="story-body">
              {paragraphs.map((paragraph, index) => (
                <motion.p
                  key={`${index}-${paragraph.slice(0, 12)}`}
                  initial={{
                    opacity: 0,
                    y: 18,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "0px 0px -50px",
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section
        id="note"
        className="closing section-pad"
      >
        <div className="section-grid">
          <p className="section-label">
            {sections[2].label}
          </p>

          <div className="closing-copy">
            <p className="closing-jp">
              未来は、まだ白紙。
            </p>

            <p>
              This is a living draft. The story, its world,
              and this page are intended to evolve together.
            </p>

            <div className="closing-line" />

            <p className="tiny">
              Draft architecture / 2026 → 2040
            </p>
          </div>
        </div>
      </section>

      <footer className="footer section-pad">
        <span>2040 / STORY · JAPAN</span>

        <span>© {new Date().getFullYear()}</span>

        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
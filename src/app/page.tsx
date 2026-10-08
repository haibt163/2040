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

  const heroScale = useTransform(scrollYProgress, [0, 0.23], [1, 0.94]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.48]);

  const paragraphs = useMemo(() => story.body.split("\n\n"), []);
  const wordCount = useMemo(
    () => story.body.trim().split(/\s+/).length,
    [],
  );

  const sections = [
    { id: "story", label: "01 / STORY" },
    { id: "colophon", label: "02 / COLOPHON" },
  ];

  return (
    <main className="site-shell">
      <motion.div className="reading-progress" style={{ scaleX: progress }} />

      <header className="topbar">
        <a className="brand" href="#top" aria-label="West Window story home">
          <span className="brand-mark">西窓</span>
          <span>WEST WINDOW / 2040</span>
        </a>

        <div className="topbar-meta">
          <span>TOKYO · SETAGAYA</span>
          <span>OCTOBER 2040</span>
        </div>
      </header>

      <section id="top" className="hero" aria-labelledby="hero-title">
        <ParallaxField />

        <motion.div
          className="hero-inner"
          style={{ scale: heroScale, opacity: heroOpacity }}
        >
          <p className="eyebrow">{story.label} · TOKYO / 2040</p>

          <h1 id="hero-title" className="hero-title" aria-label={story.title}>
            <span>WEST</span>
            <span>WINDOW</span>
          </h1>

          <div className="hero-rule" />

          <div className="hero-lower">
            <div>
              <p className="hero-kicker">A story about a machine that outlived its owner.</p>
              <p className="hero-dek">{story.dek}</p>
            </div>

            <a className="hero-link" href="#story">
              <span>READ THE STORY</span>
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </motion.div>

        <div className="hero-index">01 — 02</div>
      </section>

      <section
        id="story"
        className="story-section section-pad"
        aria-labelledby="story-title"
      >
        <div className="story-layout">
          <aside className="story-aside">
            <p className="section-label">{sections[0].label}</p>

            <div className="sticky-note">
              <span>READING TIME</span>
              <strong>{story.estimatedMinutes} min</strong>
              <span>
                {new Intl.NumberFormat("en-US").format(wordCount)} words
              </span>
            </div>
          </aside>

          <article className="story-copy">
            <header className="story-heading">
              <p className="story-heading-kicker">TOKYO · 2040</p>
              <h2 id="story-title">{story.title}</h2>
            </header>

            <div className="story-body">
              {paragraphs.map((paragraph, index) => (
                <motion.p
                  key={String(index) + "-" + paragraph.slice(0, 12)}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -50px" }}
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
        id="colophon"
        className="closing section-pad"
        aria-labelledby="colophon-title"
      >
        <div className="section-grid">
          <p className="section-label">{sections[1].label}</p>

          <div className="closing-copy">
            <p id="colophon-title" className="closing-jp">
              西窓
            </p>

            <p className="closing-meta">
              WEST WINDOW · TOKYO · 2040
            </p>

            <div className="closing-line" />

            <p className="tiny">A speculative story / October 2040</p>
          </div>
        </div>
      </section>

      <footer className="footer section-pad">
        <span>WEST WINDOW / 2040 · JAPAN</span>

        <div className="footer-right">
          <span>© {new Date().getFullYear()}</span>

          <div className="social-links" aria-label="Social links">
            <a
              className="social-link"
              href="https://x.com/MarisFilius"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
              title="X"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.953 6.817H1.694l7.73-8.835L1.268 2.25h6.826l4.713 6.231 5.437-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"
                  fill="currentColor"
                />
              </svg>
            </a>

            <a
              className="social-link"
              href="https://github.com/haibt163/2040"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.62 1.22 3.26.93.1-.72.39-1.22.71-1.5-2.5-.29-5.14-1.25-5.14-5.56 0-1.23.44-2.24 1.16-3.03-.12-.29-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.16a10.76 10.76 0 0 1 5.64 0c2.15-1.46 3.1-1.16 3.1-1.16.61 1.55.23 2.69.11 2.98.72.79.76 1.04.76 2.1v3.11c0 .3.2.65.78.54A11.25 11.25 0 0 0 12 .75Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>

          <a href="#top">BACK TO TOP ↑</a>
        </div>
      </footer>
    </main>
  );
}

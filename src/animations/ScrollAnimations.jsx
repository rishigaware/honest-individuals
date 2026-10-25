/**
 * ScrollAnimations.jsx
 *
 * High-performance GSAP ScrollTrigger Animation Suite
 * - Dedicated Honest Individuals Brand Logo entrance & interactive animation
 * - Smooth, high-contrast section card reveals with spring physics
 * - Parallax ambient glow orbs & section divider line reveals
 * - 100% reliable layout: elements preserve full styles & visibility
 */

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

// ─── Utility ─────────────────────────────────────────────────────────────────
function qsa(parent, sel) {
  return parent ? Array.from(parent.querySelectorAll(sel)) : [];
}

// ─── 1. HONEST INDIVIDUALS Brand Logo Entrance & Hover System ────────────────
function initBrandLogoAnimation() {
  const logoEl = document.getElementById("navbar-brand-logo");
  if (!logoEl) return;

  const emblem = logoEl.querySelector(".brand-logo-img");
  const halo = logoEl.querySelector(".brand-emblem-halo");
  const honest = logoEl.querySelector(".brand-text-honest");
  const individuals = logoEl.querySelector(".brand-text-individuals");
  const badge = logoEl.querySelector(".brand-subtitle-badge");

  // Entrance Timeline on Load
  const tl = gsap.timeline({ delay: 0.2, defaults: { ease: "back.out(1.7)" } });

  if (emblem) {
    tl.fromTo(
      emblem,
      { scale: 0.4, opacity: 0, rotation: -12 },
      {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 0.9,
        ease: "elastic.out(1.1, 0.4)",
      },
      0,
    );
  }

  if (halo) {
    tl.fromTo(
      halo,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 0.5, duration: 0.8 },
      0.2,
    );
  }

  if (honest) {
    tl.fromTo(
      honest,
      { x: -20, opacity: 0, filter: "blur(4px)" },
      {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.6,
        ease: "power2.out",
      },
      0.25,
    );
  }

  if (individuals) {
    tl.fromTo(
      individuals,
      { x: -15, opacity: 0, scale: 0.85 },
      { x: 0, opacity: 1, scale: 1, duration: 0.7, ease: "back.out(2)" },
      0.35,
    );
  }

  if (badge) {
    tl.fromTo(
      badge,
      { y: 8, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
      0.5,
    );
  }

  // Interactive 3D tilt tracking on mousemove
  const handleMouseMove = (e) => {
    const rect = logoEl.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    if (emblem) {
      gsap.to(emblem, {
        rotationY: x * 0.15,
        rotationX: -y * 0.15,
        transformPerspective: 400,
        duration: 0.3,
        ease: "power1.out",
      });
    }
  };

  const handleMouseLeave = () => {
    if (emblem) {
      gsap.to(emblem, {
        rotationY: 0,
        rotationX: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  logoEl.addEventListener("mousemove", handleMouseMove);
  logoEl.addEventListener("mouseleave", handleMouseLeave);
}

// ─── 2. Section Scroll Revelations ───────────────────────────────────────────
function initSectionScrollAnimations(section) {
  if (!section) return;

  const headings = qsa(section, "h1, h2, h3");
  const cards = qsa(section, ".spotlight-card, .glass-panel");
  const pills = qsa(section, ".wf-float-pill, .badge");
  const ctaButtons = qsa(section, ".btn-primary, .btn-secondary");

  // Headings & Intro Reveal
  if (headings.length > 0) {
    gsap.from(headings, {
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        toggleActions: "play none none none",
        once: true,
      },
      y: 35,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
    });
  }

  // Badges & Pills Pop-in
  if (pills.length > 0) {
    gsap.from(pills, {
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        toggleActions: "play none none none",
        once: true,
      },
      scale: 0.7,
      opacity: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: "back.out(2)",
    });
  }

  // Cards: Staggered bounce reveal with subtle depth
  if (cards.length > 0) {
    gsap.from(cards, {
      scrollTrigger: {
        trigger: cards[0] || section,
        start: "top 88%",
        toggleActions: "play none none none",
        once: true,
      },
      y: 50,
      opacity: 0,
      scale: 0.95,
      duration: 0.85,
      stagger: 0.12,
      ease: "back.out(1.2)",
      clearProps: "transform,opacity",
    });
  }

  // CTA Buttons
  if (ctaButtons.length > 0) {
    gsap.from(ctaButtons, {
      scrollTrigger: {
        trigger: ctaButtons[0] || section,
        start: "top 92%",
        toggleActions: "play none none none",
        once: true,
      },
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
    });
  }
}

// ─── 3. Parallax Glow Orbs ───────────────────────────────────────────────────
function initGlowOrbParallax() {
  const orbs = document.querySelectorAll(".glow-orb");
  orbs.forEach((orb, i) => {
    gsap.to(orb, {
      yPercent: -(25 + i * 15),
      xPercent: i % 2 === 0 ? 8 : -8,
      scrollTrigger: {
        trigger: orb.closest("section") || orb.parentElement,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    });
  });
}

// ─── 4. Animated Section Dividers ────────────────────────────────────────────
function initSectionDividers() {
  const dividers = document.querySelectorAll(".section-divider-line");
  dividers.forEach((divider) => {
    gsap.from(divider, {
      scrollTrigger: {
        trigger: divider,
        start: "top 90%",
        toggleActions: "play none none none",
        once: true,
      },
      scaleX: 0,
      opacity: 0,
      transformOrigin: "center center",
      duration: 1.1,
      ease: "power3.out",
    });
  });
}

// ─── MASTER HOOK ─────────────────────────────────────────────────────────────
const SECTION_IDS = [
  "home",
  "services",
  "process",
  "cybersecurity",
  "career-hub",
  "trust",
  "portfolio",
  "contact",
];

export function useScrollAnimations() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Small raf delay to ensure React DOM hydration is complete
    const timer = setTimeout(() => {
      // 1. Brand Logo Entrance & Hover System
      initBrandLogoAnimation();

      // 2. All 8 Content Sections
      SECTION_IDS.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          initSectionScrollAnimations(el);
        }
      });

      // 3. Ambient Parallax Orbs & Section Dividers
      initGlowOrbParallax();
      initSectionDividers();

      // Refresh ScrollTrigger calculations
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);
}

export default function ScrollAnimations() {
  useScrollAnimations();
  return null;
}

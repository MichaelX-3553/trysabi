// ═══════════════════════════════════════════════════════════
// script.js — STA 413: Distribution of Quadratic Forms
// Built for Maxwell · SABI Knowledge Engine
// ═══════════════════════════════════════════════════════════

// ─── CONSTANTS & STATE ───────────────────────────────────

const QUIZ_TOTAL = 10;
const FAILSAFE_TIMEOUT = 4000;
const CONFETTI_COUNT = 30;

const state = {
  theme: "dark",
  scrollTicking: false,
  quizAnswers: {},
  quizSubmitted: false,
  currentSection: null,
  sequencerSelected: null,
  sequencerPlacements: {},
  matrixValues: [
    [1, 0],
    [0, 1],
  ],
  revealerStep: 1,
  identifierState: { 1: 1, 2: 1, 3: 1 },
  identifierComplete: { 1: false, 2: false, 3: false },
};

// ─── QUIZ FEEDBACK DATA ──────────────────────────────────

const quizFeedback = {
  1: {
    correct:
      "Exactly right! A quadratic form compresses a whole vector into one number — like computing a single 'impact score' for a design with multiple elements. The matrix A controls which elements interact and how strongly.",
    incorrect:
      "Not quite — think of it like scoring a logo composition. You have multiple design elements (that's X), a brief describing how they combine (that's A), and one final impact score (that's Q). Q = X′AX always gives a single number, not a vector or matrix. It captures both squared terms (from diagonal entries of A) and interactions (from off-diagonal entries). You've got this!",
  },
  2: {
    correct:
      "Spot on! Each Xᵢ² contributes one degree of freedom, and since A = I₃ (identity), all weights are 1. Three independent squared standard normals sum to χ²(3). Clean and simple.",
    incorrect:
      "Close thinking! When A is the identity matrix, Q = X₁² + X₂² + X₃² is a straight sum of squared N(0,1) variables — no scaling, no cross-terms. Each squared term contributes exactly 1 degree of freedom. Three terms → χ²(3). Think of it like three equal-value shots in basketball — each adds the same weight to the total. Keep going!",
  },
  3: {
    correct:
      "Exactly! A² = A — apply the transformation once, apply it again, same result. Like hitting 'Flatten Layers' in Illustrator — once it's flat, flattening again changes nothing. This property forces eigenvalues to be only 0 or 1, which is what makes the Distribution Theorem work.",
    incorrect:
      "Not quite — idempotent isn't about entries being 0 or 1, it's about the matrix operation. Think of Flatten Layers in Illustrator: flatten once, everything merges. Flatten again? Nothing changes — it's already flat. That's A² = A. The matrix has 'settled' after one application. This is crucial because it forces eigenvalues to be only 0 or 1. You're getting closer!",
  },
  4: {
    correct:
      "Nailed it! The eigenvalue 0 means one component contributes nothing — like an empty layer in your design file. The eigenvalue 2 means the remaining component is scaled by 2. So Q = 2Z₁² where Z₁ ~ N(0,1), giving Q ~ 2χ²(1). Two variables, but only 1 degree of freedom — rank is what matters, not dimension.",
    incorrect:
      "Almost! Eigenvalue 0 means that dimension contributes nothing (like a blank layer). Eigenvalue 2 means one dimension contributes, but scaled by 2. So Q = 0·Z₁² + 2·Z₂² = 2Z₂². That's one χ²(1) multiplied by 2 — giving 2χ²(1). The rank (number of nonzero eigenvalues) determines degrees of freedom, not the number of variables. You'll nail the next one!",
  },
  5: {
    correct:
      "Yes! AⱼAₗ = 0 means the projection matrices don't overlap — they capture completely separate information. Like CMYK plates in printing: cyan doesn't bleed into magenta. This orthogonality is what guarantees statistical independence between the quadratic form components.",
    incorrect:
      "Not quite — the condition AⱼAₗ = 0 is about independence, not about distribution type or equality. Think of CMYK color separation: each plate captures its own color information without interfering with the others. That's orthogonality — and it's what guarantees the quadratic form pieces are statistically independent. The chi-square distribution comes from each Aⱼ being idempotent (a separate condition). Keep building!",
  },
  6: {
    correct:
      "Perfect! 10 observations, but 1 degree of freedom is 'consumed' by estimating the mean X̄. That leaves 9 free deviations. So (n−1)S²/σ² = 9S²/σ² ~ χ²(9). Like a starting five on a basketball team — if you know the team average and four players' scores, the fifth is already determined.",
    incorrect:
      "Close! The key is that n−1 = 9, not n = 10. Out of 10 observations, once you know the sample mean X̄, only 9 deviations from that mean are 'free' — the 10th is forced. Think of a starting five: if 4 players scored and you know the team average, the 5th player's score is locked. One degree of freedom consumed → (n−1)S²/σ² ~ χ²(n−1) = χ²(9). Just remember to subtract 1!",
  },
  7: {
    correct:
      "Excellent! E(Q) = 2+2+2 = 6. Var(Q) = 2(2²+2²+2²) = 2(4+4+4) = 24. Notice: 2·E(Q) = 12 ≠ 24, so this is NOT a standard χ²(6). It's actually 2χ²(3) — a scaled chi-square. Equal weights, but they're not 1, so it scales rather than being pure chi-square.",
    incorrect:
      "Let's work through it step by step. Each term has weight aᵢ = 2. E(Q) = a₁+a₂+a₃ = 2+2+2 = 6. For variance: Var(Q) = 2(a₁²+a₂²+a₃²) = 2(4+4+4) = 24. Quick check: Is Var(Q) = 2·E(Q)? Is 24 = 12? No! So Q is NOT a standard chi-square. The answer is E(Q)=6, Var(Q)=24. You've got the formulas — just square each weight before summing!",
  },
  8: {
    correct:
      "Brilliant! Eigenvalues are only 0 and 1 → A is idempotent. Rank = number of 1-eigenvalues = 2. By the Distribution Theorem: Q ~ χ²(2). The two zero eigenvalues mean those dimensions contribute nothing — like empty layers. Only 2 layers have content, so 2 degrees of freedom!",
    incorrect:
      "Let's use the decision framework. Eigenvalues are 1, 1, 0, 0 — only 0s and 1s. That means A is idempotent (A² = A). Now count the non-zero eigenvalues: two 1s → rank = 2. The Distribution Theorem says: symmetric + idempotent + rank r → Q ~ σ²χ²(r). Here σ² = 1, so Q ~ χ²(2). Not χ²(4) because two dimensions are 'empty.' Just χ²(2). Keep trusting the framework!",
  },
  9: {
    correct:
      "Perfect application! Total df = n−1 = 14. Between-group df = k−1 = 2. By Cochran's Theorem, degrees of freedom add up: df(SSW) = 14 − 2 = 12. Alternatively: within each of the 3 groups, 5−1 = 4 free deviations, and 3×4 = 12 total. Beautiful!",
    incorrect:
      "Let's break this down. Total df = n − 1 = 15 − 1 = 14. Between-group df = k − 1 = 3 − 1 = 2. Since SSB + SSW = Total, we need df(SSB) + df(SSW) = df(Total). So 2 + df(SSW) = 14, giving df(SSW) = 12. You can also think: within each group of 5, there are 4 free deviations, and 3 groups × 4 = 12. The additive property of degrees of freedom is Cochran's gift to statistics!",
  },
  10: {
    correct:
      "Outstanding! A = (1/3)J is idempotent: A² = (1/9)J² = (1/9)(3J) = (1/3)J = A ✓. Eigenvalues of A: since J has eigenvalues 3,0,0, then (1/3)J has eigenvalues 1,0,0. Rank = 1. By the Distribution Theorem: Q ~ χ²(1). The 1/3 scaling made J into an idempotent matrix — that's the whole trick!",
    incorrect:
      "This one's tricky! Option A is tempting because J has eigenvalues 3,0,0. But the matrix is A = (1/3)J, not J! So A's eigenvalues are (1/3)×3 = 1, (1/3)×0 = 0, (1/3)×0 = 0. Eigenvalues are 1, 0, 0 — only 0s and 1s! Verify: A² = (1/3)J × (1/3)J = (1/9)J² = (1/9)(3J) = (1/3)J = A. Idempotent! Rank = 1. Q ~ χ²(1). The 1/3 factor was the key. The answer is B!",
  },
};

const quizScoreMessages = {
  high: "Maxwell, you crushed this. Distribution Theory doesn't confuse you anymore — you OWN it. 🎉 Quadratic forms, eigenvalues, Cochran's Theorem — you've got the complete toolkit. Go show your department what's up.",
  good: "Solid work, Maxwell! You've got a strong handle on the core ideas. A few areas to sharpen: review the questions you missed, especially the difference between scaled chi-square and standard chi-square. One more pass through those sections and you'll have this locked down.",
  fair: "You're building the foundation, Maxwell. The concepts are connecting — I can see it in the ones you got right. Focus on: (1) the eigenvalue → distribution connection, (2) when a quadratic form IS vs ISN'T chi-square, (3) the n−1 reasoning. Re-read Sections 2, 5, and 6, then try again. You've got this.",
  low: "No stress, Maxwell. This material is genuinely hard — it trips up most people the first time. Go back to the Prerequisites section, make sure those foundations feel solid, then work through Sections 1 and 2 slowly. Play with the Matrix Builder and Eigenvalue Revealer interactives until they feel natural. Then come back to the quiz. You've got the intelligence for this — it just needs time to click.",
};

// ─── UTILITIES ───────────────────────────────────────────

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

const store = {
  _mem: {},
  get(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return this._mem[key] || null;
    }
  },
  set(key, val) {
    try {
      localStorage.setItem(key, val);
    } catch {
      this._mem[key] = val;
    }
  },
  remove(key) {
    try {
      localStorage.removeItem(key);
    } catch {
      delete this._mem[key];
    }
  },
};

const forceAllVisible = () => {
  $$(".reveal:not(.visible)").forEach((el) => {
    el.classList.add("visible");
    el.style.opacity = "1";
    el.style.transform = "none";
  });
};

// ─── THEME TOGGLE ────────────────────────────────────────

const initTheme = () => {
  const saved = store.get("sabi-theme");
  const isDark = saved === "dark" || (!saved && true);
  state.theme = isDark ? "dark" : "light";
  document.documentElement.classList.toggle("dark-mode", isDark);

  const toggle = $("#darkToggle");
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    const nowDark = document.documentElement.classList.toggle("dark-mode");
    state.theme = nowDark ? "dark" : "light";
    store.set("sabi-theme", state.theme);
    toggle.setAttribute(
      "aria-label",
      nowDark ? "Switch to light mode" : "Switch to dark mode",
    );
  });
};

// ─── SCROLL HANDLER (MERGED: progress + nav + section tracking) ──

const initScrollHandler = () => {
  const progressFill = $("#progressFill");
  const nav = $("#mainNav");
  const sections = $$("section[id]");

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    // Progress bar
    if (progressFill) {
      progressFill.style.width = `${Math.min(progress, 100)}%`;
    }

    // Nav glass effect
    if (nav) {
      nav.classList.toggle("nav-scrolled", scrollTop > 60);
    }

    // Active section tracking
    let current = null;
    for (const section of sections) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.4) {
        current = section.id;
      }
    }
    if (current && current !== state.currentSection) {
      state.currentSection = current;
      store.set("sabi-section", current);
      store.set("sabi-scroll", String(scrollTop));
    }

    state.scrollTicking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!state.scrollTicking) {
        requestAnimationFrame(handleScroll);
        state.scrollTicking = true;
      }
    },
    { passive: true },
  );
};

// ─── INTERSECTION OBSERVER ───────────────────────────────

const initRevealObserver = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.05,
      rootMargin: "0px 0px -30px 0px",
    },
  );

  $$(".reveal").forEach((el) => observer.observe(el));
};

// ─── ACCORDIONS (Prerequisites) ──────────────────────────

const initAccordions = () => {
  $$(".accordion-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const expanded = trigger.getAttribute("aria-expanded") === "true";
      const content = $(`#${trigger.getAttribute("aria-controls")}`);
      if (!content) return;

      trigger.setAttribute("aria-expanded", String(!expanded));
      content.hidden = expanded;

      const icon = $(".accordion-icon", trigger);
      if (icon) icon.textContent = expanded ? "+" : "−";
    });
  });
};

// ─── HINT TOGGLES (Assignment) ───────────────────────────

const initHintToggles = () => {
  $$(".hint-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      const content = $(`#${btn.getAttribute("aria-controls")}`);
      if (!content) return;

      btn.setAttribute("aria-expanded", String(!expanded));
      content.hidden = expanded;
      btn.textContent = expanded ? "Show Hint" : "Hide Hint";
    });
  });
};

// ─── PREDICTION HOOKS ────────────────────────────────────

const initPredictions = () => {
  // Prediction 1: Is (X₁+X₂)² chi-square(2)?
  const pred1Btns = $$("#prediction-1 .prediction-btn");
  const pred1Feedback = $("#prediction1Feedback");

  pred1Btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      pred1Btns.forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");

      const prediction = btn.dataset.prediction;
      if (prediction === "no") {
        pred1Feedback.innerHTML =
          '<span class="feedback-correct">Great instinct!</span> It\'s actually 2χ²(1) — only 1 degree of freedom despite 2 variables. The eigenvalues reveal why. Keep reading to see the full breakdown.';
      } else {
        pred1Feedback.innerHTML =
          '<span class="feedback-neutral">Interesting guess!</span> Most people think 2 variables = 2 degrees of freedom. But the answer is surprising — it\'s 2χ²(1), not χ²(2). The eigenvalues explain everything. Keep reading!';
      }
      pred1Feedback.classList.add("show");
    });
  });

  // Prediction 2: Is weighted sum chi-square?
  const pred2Btns = $$("#prediction-2 .prediction-btn");
  const pred2Feedback = $("#prediction2Feedback");

  pred2Btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      pred2Btns.forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");

      const prediction = btn.dataset.prediction;
      if (prediction === "no") {
        pred2Feedback.innerHTML =
          '<span class="feedback-correct">Sharp thinking!</span> The different weights (1, 2, 3) break the chi-square pattern. Let\'s prove it with numbers.';
      } else {
        pred2Feedback.innerHTML =
          "<span class=\"feedback-neutral\">That's the common intuition!</span> But it turns out the different weights destroy the chi-square property. Let's see why — the proof is elegant.";
      }
      pred2Feedback.classList.add("show");
    });
  });
};

// ─── RECALL CHECKPOINTS ──────────────────────────────────

const initCheckpoints = () => {
  $$(".checkpoint").forEach((checkpoint) => {
    const options = $$(".checkpoint-option", checkpoint);
    const feedback = $(".checkpoint-feedback", checkpoint);

    options.forEach((option) => {
      option.addEventListener("click", () => {
        if (checkpoint.classList.contains("answered")) return;

        options.forEach((o) => {
          o.classList.remove("selected");
          o.setAttribute("aria-checked", "false");
        });
        option.classList.add("selected");
        option.setAttribute("aria-checked", "true");

        const isCorrect = option.dataset.correct === "true";
        checkpoint.classList.add("answered");

        if (isCorrect) {
          option.classList.add("correct");
          feedback.innerHTML = "✓ That's right! Strong recall.";
          feedback.className = "checkpoint-feedback show correct";
        } else {
          option.classList.add("incorrect");
          const correctOption = $$(
            '.checkpoint-option[data-correct="true"]',
            checkpoint,
          )[0];
          if (correctOption) correctOption.classList.add("correct");
          feedback.innerHTML =
            "Not quite — the correct answer is highlighted above. Review the section before moving on.";
          feedback.className = "checkpoint-feedback show incorrect";
        }
      });
    });
  });
};

// ─── COMPONENT 1: MATRIX ↔ ALGEBRA BUILDER ───────────────

const initMatrixBuilder = () => {
  const component = $("#interactive-1");
  if (!component) return;

  const cells = $$(".builder-cell", component);
  const expansion = $("#builderExpansion");
  const properties = $("#builderProperties");
  const feedback = $("#builderFeedback");
  let exploredCount = 0;
  const exploredConfigs = new Set();

  const updateBuilder = () => {
    const m = state.matrixValues;
    const a = m[0][0],
      b = m[0][1],
      d = m[1][1];

    // Update cell displays
    cells[0].textContent = a;
    cells[0].setAttribute("aria-label", `Row 1, Column 1. Value: ${a}`);
    cells[1].textContent = b;
    cells[1].setAttribute("aria-label", `Row 1, Column 2. Value: ${b}`);
    cells[2].textContent = b; // Symmetric
    cells[2].setAttribute("aria-label", `Row 2, Column 1. Value: ${b}`);
    cells[3].textContent = d;
    cells[3].setAttribute("aria-label", `Row 2, Column 2. Value: ${d}`);

    // Build expansion string
    const terms = [];
    if (a !== 0)
      terms.push(
        `<span class="term term-diagonal">${a === 1 ? "" : a}X₁²</span>`,
      );
    if (b !== 0)
      terms.push(
        `<span class="term term-cross">${b === 1 ? "" : 2 * b}X₁X₂</span>`,
      );
    if (d !== 0)
      terms.push(
        `<span class="term term-diagonal">${d === 1 ? "" : d}X₂²</span>`,
      );
    if (terms.length === 0) terms.push('<span class="term">0</span>');
    expansion.innerHTML = terms.join('<span class="term-op"> + </span>');

    // Check properties
    const isIdentity = a === 1 && b === 0 && d === 1;
    const a2_00 = a * a + b * b;
    const a2_01 = a * b + b * d;
    const a2_11 = b * b + d * d;
    const isIdempotent = a2_00 === a && a2_01 === b && a2_11 === d;

    // Eigenvalues
    const trace = a + d;
    const det = a * d - b * b;
    const disc = trace * trace - 4 * det;
    const sqrtDisc = disc >= 0 ? Math.sqrt(disc) : 0;
    const lam1 = (trace + sqrtDisc) / 2;
    const lam2 = (trace - sqrtDisc) / 2;
    const rank =
      (Math.abs(lam1) > 0.001 ? 1 : 0) + (Math.abs(lam2) > 0.001 ? 1 : 0);

    // Distribution
    let distText = "";
    if (a === 0 && b === 0 && d === 0) {
      distText = "Q = 0";
    } else if (isIdempotent) {
      distText = `χ²(${rank})`;
    } else if (rank === 1) {
      const nonzero = Math.abs(lam1) > 0.001 ? lam1 : lam2;
      distText = `${Math.round(nonzero * 100) / 100}χ²(1)`;
    } else {
      distText = `${Math.round(lam1 * 100) / 100}Z₁² + ${Math.round(lam2 * 100) / 100}Z₂²`;
    }

    // Update property badges
    const badges = $$(".prop-badge", properties);
    badges.forEach((badge) => {
      const prop = badge.dataset.prop;
      let active = false;
      if (prop === "symmetric") active = true;
      if (prop === "idempotent") active = isIdempotent;
      if (prop === "identity") active = isIdentity;
      if (prop === "distribution") {
        badge.textContent = distText;
        active = true;
      }
      badge.classList.toggle("prop-active", active);
    });

    // Track exploration
    const configKey = `${a}${b}${d}`;
    if (!exploredConfigs.has(configKey)) {
      exploredConfigs.add(configKey);
      exploredCount++;
    }

    // Discovery feedback
    if (a === 1 && b === 1 && d === 1) {
      feedback.innerHTML =
        "💡 Notice the cross-term appeared! This is exactly Example 2 from the lecture — Q = (X₁ + X₂)².";
      feedback.classList.add("show");
    } else if (isIdentity) {
      feedback.innerHTML =
        "✓ Identity matrix — pure sum of squares, no cross-terms!";
      feedback.classList.add("show");
    } else if (a === 0 && b === 0 && d === 0) {
      feedback.innerHTML = 'All zeros — Q = 0. The "empty canvas."';
      feedback.classList.add("show");
    } else {
      feedback.classList.remove("show");
    }

    if (exploredCount >= 3 && !component.classList.contains("explored")) {
      component.classList.add("explored");
    }
  };

  cells.forEach((cell, idx) => {
    cell.addEventListener("click", () => {
      const row = parseInt(cell.dataset.row);
      const col = parseInt(cell.dataset.col);
      const currentVal = state.matrixValues[row][col];
      const newVal = (currentVal + 1) % 3;

      if (row === col) {
        // Diagonal: just update
        state.matrixValues[row][col] = newVal;
      } else {
        // Off-diagonal: sync for symmetry
        state.matrixValues[0][1] = newVal;
        state.matrixValues[1][0] = newVal;
      }
      updateBuilder();
    });

    cell.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") cells[Math.min(idx + 1, 3)]?.focus();
      if (e.key === "ArrowLeft") cells[Math.max(idx - 1, 0)]?.focus();
      if (e.key === "ArrowDown") cells[Math.min(idx + 2, 3)]?.focus();
      if (e.key === "ArrowUp") cells[Math.max(idx - 2, 0)]?.focus();
    });
  });

  // Reset
  const resetBtn = $('[data-reset="matrix-builder"]', component);
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      state.matrixValues = [
        [1, 0],
        [0, 1],
      ];
      updateBuilder();
    });
  }

  updateBuilder();
};

// ─── COMPONENT 2: EIGENVALUE REVEALER ────────────────────

const initEigenvalueRevealer = () => {
  const component = $("#interactive-2");
  if (!component) return;

  const cards = $$(".revealer-card", component);
  const prevBtn = $("#revealerPrev");
  const nextBtn = $("#revealerNext");
  const progress = $("#revealerProgress");

  const updateRevealer = () => {
    cards.forEach((card, i) => {
      const step = i + 1;

      if (step <= state.revealerStep) {
        // This card should be visible
        const wasHidden = !card.classList.contains("revealed");

        card.classList.add("revealed");
        card.classList.toggle("card-active", step === state.revealerStep);
        card.classList.toggle("dimmed", step < state.revealerStep);

        // If this card was just revealed, scroll it into view
        if (wasHidden && step === state.revealerStep) {
          setTimeout(() => {
            card.scrollIntoView({ behavior: "smooth", block: "nearest" });
          }, 100);
        }
      } else {
        // This card should be hidden
        card.classList.remove("revealed", "card-active", "dimmed");
      }
    });

    prevBtn.disabled = state.revealerStep <= 1;

    if (state.revealerStep >= 5) {
      nextBtn.disabled = true;
      nextBtn.textContent = "Complete ✓";
    } else {
      nextBtn.disabled = false;
      nextBtn.textContent = "Next Step →";
    }

    progress.textContent = `Step ${state.revealerStep} of 5`;
  };

  nextBtn.addEventListener("click", () => {
    if (state.revealerStep < 5) {
      state.revealerStep++;
      updateRevealer();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (state.revealerStep > 1) {
      state.revealerStep--;
      updateRevealer();
    }
  });

  updateRevealer();
};

// ─── COMPONENT 3: PROOF SEQUENCER ────────────────────────

const initProofSequencer = () => {
  const component = $("#interactive-3");
  if (!component) return;

  const slots = $$(".seq-slot", component);
  const cards = $$(".seq-card", component);
  const checkBtn = $("#sequencerCheck");
  const resetBtn = $("#sequencerReset");
  const feedback = $("#sequencerFeedback");

  let drag = null; // { card, ghost, offsetX, offsetY, startX, startY, moved }

  // ── Helpers ────────────────────────────────────────

  const getSlotUnderPoint = (x, y) => {
    for (const slot of slots) {
      const r = slot.getBoundingClientRect();
      if (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) {
        return slot;
      }
    }
    return null;
  };

  const updateCheckButton = () => {
    const filled = Object.keys(state.sequencerPlacements).length;
    checkBtn.disabled = filled < 5;
  };

  const placeCardInSlot = (card, slot) => {
    const slotNum = slot.dataset.slot;

    // If slot already occupied, return that card first
    if (state.sequencerPlacements[slotNum]) {
      returnCardToPool(state.sequencerPlacements[slotNum]);
    }

    state.sequencerPlacements[slotNum] = card;
    card.classList.add("seq-placed");
    card.classList.remove("seq-selected", "seq-dragging");
    card.style.opacity = "";

    const placeholder = $(".slot-placeholder", slot);
    if (placeholder) placeholder.textContent = card.textContent;
    slot.classList.add("slot-filled");

    updateCheckButton();
  };

  const returnCardToPool = (card) => {
    for (const [slotNum, placed] of Object.entries(state.sequencerPlacements)) {
      if (placed === card) {
        const slot = slots.find((s) => s.dataset.slot === slotNum);
        if (slot) {
          const ph = $(".slot-placeholder", slot);
          if (ph) ph.textContent = "Drop step here";
          slot.classList.remove(
            "slot-filled",
            "slot-correct",
            "slot-incorrect",
          );
        }
        delete state.sequencerPlacements[slotNum];
        break;
      }
    }
    card.classList.remove("seq-placed", "seq-selected", "seq-dragging");
    card.style.opacity = "";
    updateCheckButton();
  };

  // ── Drag and Drop (pointer events) ─────────────────

  const onPointerDown = (card, e) => {
    if (card.classList.contains("seq-placed")) return;
    e.preventDefault();

    const rect = card.getBoundingClientRect();

    drag = {
      card,
      ghost: null,
      offsetX: e.clientX - rect.left,
      offsetY: e.clientY - rect.top,
      startX: e.clientX,
      startY: e.clientY,
      moved: false,
    };
  };

  const onPointerMove = (e) => {
    if (!drag) return;

    const dx = e.clientX - drag.startX;
    const dy = e.clientY - drag.startY;
    const distance = Math.abs(dx) + Math.abs(dy);

    // Start visual drag after 6px movement threshold
    if (!drag.moved && distance > 6) {
      drag.moved = true;

      // Create ghost clone
      const rect = drag.card.getBoundingClientRect();
      const ghost = drag.card.cloneNode(true);
      ghost.className = "seq-card-ghost";
      ghost.style.position = "fixed";
      ghost.style.width = rect.width + "px";
      ghost.style.left = e.clientX - drag.offsetX + "px";
      ghost.style.top = e.clientY - drag.offsetY + "px";
      document.body.appendChild(ghost);

      drag.ghost = ghost;
      drag.card.classList.add("seq-dragging");
    }

    if (drag.moved && drag.ghost) {
      e.preventDefault();
      drag.ghost.style.left = e.clientX - drag.offsetX + "px";
      drag.ghost.style.top = e.clientY - drag.offsetY + "px";

      // Highlight drop target
      const target = getSlotUnderPoint(e.clientX, e.clientY);
      slots.forEach((s) => s.classList.remove("slot-drag-hover"));
      if (target && !target.classList.contains("slot-filled")) {
        target.classList.add("slot-drag-hover");
      }
    }
  };

  const onPointerUp = (e) => {
    if (!drag) return;

    if (drag.moved && drag.ghost) {
      // ── It was a DRAG ──
      const target = getSlotUnderPoint(e.clientX, e.clientY);

      if (target && !target.classList.contains("slot-filled")) {
        placeCardInSlot(drag.card, target);
      } else {
        drag.card.classList.remove("seq-dragging");
        drag.card.style.opacity = "";
      }

      drag.ghost.remove();
      slots.forEach((s) => s.classList.remove("slot-drag-hover"));
    } else {
      // ── It was a TAP (no movement) — use select model ──
      cards.forEach((c) => c.classList.remove("seq-selected"));
      drag.card.classList.add("seq-selected");
      state.sequencerSelected = drag.card;
    }

    drag = null;
  };

  const onPointerCancel = () => {
    if (!drag) return;
    drag.card.classList.remove("seq-dragging");
    drag.card.style.opacity = "";
    if (drag.ghost) drag.ghost.remove();
    slots.forEach((s) => s.classList.remove("slot-drag-hover"));
    drag = null;
  };

  // Attach to cards
  cards.forEach((card) => {
    card.addEventListener("pointerdown", (e) => onPointerDown(card, e));
  });

  // Document-level move/up for reliable tracking
  document.addEventListener("pointermove", onPointerMove, { passive: false });
  document.addEventListener("pointerup", onPointerUp);
  document.addEventListener("pointercancel", onPointerCancel);

  // ── Slot clicks: place selected card or remove placed card ──

  slots.forEach((slot) => {
    slot.addEventListener("click", () => {
      if (drag) return; // Don't interfere with drag

      if (slot.classList.contains("slot-filled")) {
        // Click filled slot → return card to pool
        const slotNum = slot.dataset.slot;
        const card = state.sequencerPlacements[slotNum];
        if (card) returnCardToPool(card);
      } else if (state.sequencerSelected) {
        // Click empty slot while card is selected → place it
        placeCardInSlot(state.sequencerSelected, slot);
        state.sequencerSelected.classList.remove("seq-selected");
        state.sequencerSelected = null;
      }
    });
  });

  // ── Check order ──

  checkBtn.addEventListener("click", () => {
    let allCorrect = true;

    slots.forEach((slot) => {
      const slotNum = slot.dataset.slot;
      const card = state.sequencerPlacements[slotNum];
      if (!card) return;

      const isCorrect = card.dataset.correct === slotNum;
      slot.classList.toggle("slot-correct", isCorrect);
      slot.classList.toggle("slot-incorrect", !isCorrect);

      if (!isCorrect) allCorrect = false;
    });

    if (allCorrect) {
      feedback.innerHTML =
        '<span class="feedback-correct">✓ Proof complete!</span> Every step in the right place. You understand the logical chain perfectly.';
      feedback.className = "sequencer-feedback show correct";
      component.classList.add("completed");
      checkBtn.disabled = true;
    } else {
      feedback.innerHTML =
        "Not quite — the highlighted steps are in the wrong position. Think about the logical flow: what must come before what?";
      feedback.className = "sequencer-feedback show incorrect";
    }
  });

  // ── Reset ──

  resetBtn.addEventListener("click", () => {
    state.sequencerPlacements = {};
    state.sequencerSelected = null;
    cards.forEach((c) => {
      c.classList.remove("seq-placed", "seq-selected", "seq-dragging");
      c.style.opacity = "";
    });
    slots.forEach((s) => {
      s.classList.remove(
        "slot-filled",
        "slot-correct",
        "slot-incorrect",
        "slot-drag-hover",
      );
      const ph = $(".slot-placeholder", s);
      if (ph) ph.textContent = "Drop step here";
    });
    feedback.className = "sequencer-feedback";
    feedback.innerHTML = "";
    component.classList.remove("completed");
    updateCheckButton();
  });
};

// ─── COMPONENT 4: DECOMPOSITION EXPLORER ─────────────────

const initDecompositionExplorer = () => {
  const component = $("#interactive-4");
  if (!component) return;

  const scenarioBtns = $$(".scenario-btn", component);
  const segA = $("#decompSegA");
  const segB = $("#decompSegB");
  const indep = $("#decompIndep");
  const dfCheck = $("#decompDfCheck");
  const totalLabel = $("#decompTotalLabel");
  const decompFeedback = $("#decompFeedback");
  const bar = $("#decompBar");

  const scenarios = {
    "sample-var": {
      total: 10,
      segments: [
        { flex: 9, label: "χ²(9)", desc: "Σ(Xᵢ − X̄)²", class: "seg-a" },
        { flex: 1, label: "χ²(1)", desc: "n(X̄ − μ)²", class: "seg-b" },
      ],
      check: "9 + 1 = 10 ✓",
      valid: true,
      feedback:
        "Sample variance decomposition: the classic Cochran split. 9 degrees of freedom for the sample variance, 1 for the mean.",
    },
    "three-way": {
      total: 12,
      segments: [
        { flex: 4, label: "χ²(4)", desc: "Q₁", class: "seg-a" },
        { flex: 4, label: "χ²(4)", desc: "Q₂", class: "seg-c" },
        { flex: 4, label: "χ²(4)", desc: "Q₃", class: "seg-b" },
      ],
      check: "4 + 4 + 4 = 12 ✓",
      valid: true,
      feedback:
        "Three equal pieces, each with 4 degrees of freedom. All independent by Cochran's conditions.",
    },
    invalid: {
      total: 10,
      segments: [
        { flex: 6, label: "χ²(6)?", desc: "Q₁", class: "seg-a" },
        { flex: 6, label: "χ²(6)?", desc: "Q₂", class: "seg-error" },
      ],
      check: "6 + 6 = 12 ≠ 10 ✗",
      valid: false,
      feedback:
        "❌ Invalid! The ranks sum to 12, but the total is only 10. The matrices can't satisfy ΣAⱼ = I. Cochran's conditions are violated.",
    },
  };

  const renderScenario = (key) => {
    const scenario = scenarios[key];
    if (!scenario) return;

    totalLabel.textContent = `Total: χ²(${scenario.total})`;

    // Build segments
    bar.innerHTML = "";
    scenario.segments.forEach((seg, i) => {
      const div = document.createElement("div");
      div.className = `decomp-segment ${seg.class}`;
      div.style.flex = seg.flex;
      div.innerHTML = `<span class="seg-label">${seg.label}</span><span class="seg-desc">${seg.desc}</span>`;
      bar.appendChild(div);

      if (i < scenario.segments.length - 1 && scenario.valid) {
        const indepBadge = document.createElement("div");
        indepBadge.className = "decomp-independence";
        indepBadge.textContent = "Independent!";
        bar.appendChild(indepBadge);
      }
    });

    dfCheck.textContent = scenario.check;
    dfCheck.classList.toggle("df-error", !scenario.valid);
    bar.classList.toggle("decomp-invalid", !scenario.valid);

    decompFeedback.textContent = scenario.feedback;
    decompFeedback.classList.add("show");
  };

  scenarioBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      scenarioBtns.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");
      renderScenario(btn.dataset.scenario);
    });
  });

  renderScenario("sample-var");
};

// ─── COMPONENT 5: DEGREES OF FREEDOM CALCULATOR ──────────

const initDFCalculator = () => {
  const slider = $("#dfSlider");
  if (!slider) return;

  const valueDisplay = $("#dfValue");
  const barQ1 = $("#dfBarQ1");
  const barQ2 = $("#dfBarQ2");
  const dfQ1 = $("#dfQ1");
  const summary = $("#dfSummary");

  const update = () => {
    const n = parseInt(slider.value);
    const df = n - 1;

    valueDisplay.textContent = n;
    barQ1.style.flex = df;
    barQ2.style.flex = 1;
    dfQ1.textContent = df;
    summary.innerHTML = `Out of <strong>${n}</strong> observations, <strong>${df}</strong> deviations are free. The mean consumes <strong>1</strong>.`;
  };

  slider.addEventListener("input", update);
  update();
};

// ─── COMPONENT 6: WEIGHT EXPLORER ────────────────────────

const initWeightExplorer = () => {
  const component = $("#interactive-6");
  if (!component) return;

  const sliders = [
    { input: $("#weightA1"), display: $("#weightA1Val") },
    { input: $("#weightA2"), display: $("#weightA2Val") },
    { input: $("#weightA3"), display: $("#weightA3Val") },
  ];

  const eqDisplay = $("#weightEQ");
  const varDisplay = $("#weightVarQ");
  const twoEDisplay = $("#weight2EQ");
  const checkDisplay = $("#weightCheck");
  const barsContainer = $("#weightBars");

  const update = () => {
    const weights = sliders.map((s) => parseInt(s.input.value));
    sliders.forEach((s, i) => {
      s.display.textContent = weights[i];
    });

    const eq = weights.reduce((a, b) => a + b, 0);
    const varQ = 2 * weights.reduce((a, b) => a + b * b, 0);
    const twoE = 2 * eq;

    eqDisplay.textContent = eq;
    varDisplay.textContent = varQ;
    twoEDisplay.textContent = twoE;

    const isChi = varQ === twoE;
    const allEqual = weights.every((w) => w === weights[0]);
    const icon = isChi ? "✓" : "✗";
    let text = "";

    if (isChi && weights[0] === 1) {
      text = `YES — it's χ²(${weights.length})! Var(Q) = 2·E(Q)`;
    } else if (allEqual && weights[0] > 1) {
      text = `Scaled: ${weights[0]}χ²(${weights.length}). Equal weights but ≠ 1 — NOT standard χ²`;
    } else {
      text = `NOT chi-square. Var(Q) = ${varQ} ≠ 2·E(Q) = ${twoE}`;
    }

    checkDisplay.innerHTML = `<span class="weight-check-icon">${icon}</span><span class="weight-check-text">${text}</span>`;
    checkDisplay.classList.toggle("check-pass", isChi && weights[0] === 1);
    checkDisplay.classList.toggle("check-fail", !isChi || weights[0] !== 1);

    // Update bars
    const maxWeight = Math.max(...weights);
    const bars = $$(".weight-bar", barsContainer);
    bars.forEach((bar, i) => {
      bar.style.width = `${(weights[i] / 5) * 100}%`;
      bar.querySelector("span").textContent =
        `a${String.fromCharCode(8321 + i)}=${weights[i]}`;
      bar.dataset.weight = weights[i];
    });
  };

  sliders.forEach((s) => s.input.addEventListener("input", update));
  update();
};

// ─── COMPONENT 7: DISTRIBUTION IDENTIFIER ────────────────

const initDistributionIdentifier = () => {
  const component = $("#interactive-7");
  if (!component) return;

  const tabs = $$(".identifier-tab", component);
  const panels = $$(".identifier-panel", component);

  // Tab switching
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const tabNum = tab.dataset.tab;

      tabs.forEach((t) => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");

      panels.forEach((p) => {
        p.hidden = true;
        p.classList.remove("active");
      });

      const panel = $(`#id-panel-${tabNum}`);
      if (panel) {
        panel.hidden = false;
        panel.classList.add("active");
      }
    });
  });

  // Step interaction
  $$(".identifier-panel").forEach((panel) => {
    const panelId = panel.id.replace("id-panel-", "");
    const steps = $$(".id-step", panel);

    steps.forEach((step) => {
      const stepNum = parseInt(step.dataset.step);
      const options = $$(".id-option", step);
      const feedbackEl = $(".id-step-feedback", step);

      options.forEach((option) => {
        option.addEventListener("click", () => {
          if (step.classList.contains("step-answered")) return;

          options.forEach((o) => {
            o.classList.remove("selected");
            o.setAttribute("aria-checked", "false");
          });
          option.classList.add("selected");
          option.setAttribute("aria-checked", "true");

          const isCorrect = option.dataset.correct === "true";
          step.classList.add("step-answered");

          if (isCorrect) {
            option.classList.add("option-correct");
            feedbackEl.textContent = "✓ Correct!";
            feedbackEl.className = "id-step-feedback show correct";

            // Reveal next step after brief pause
            setTimeout(() => {
              const nextStep = steps[stepNum]; // stepNum is 1-indexed, array is 0-indexed
              if (nextStep) {
                nextStep.hidden = false;
                nextStep.scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                });
              } else {
                // All steps complete
                const completion = $(".id-completion", panel);
                if (completion) completion.hidden = false;
                state.identifierComplete[panelId] = true;

                // Mark tab
                const tab = $$(`.identifier-tab[data-tab="${panelId}"]`)[0];
                if (tab && !tab.textContent.includes("✓")) {
                  tab.textContent += " ✓";
                }
              }
            }, 500);
          } else {
            option.classList.add("option-incorrect");
            feedbackEl.textContent = "Not quite — try again.";
            feedbackEl.className = "id-step-feedback show incorrect";
            step.classList.remove("step-answered");

            setTimeout(() => {
              option.classList.remove("selected", "option-incorrect");
              option.setAttribute("aria-checked", "false");
              feedbackEl.className = "id-step-feedback";
            }, 1200);
          }
        });
      });
    });
  });
};

// ─── QUIZ ENGINE ─────────────────────────────────────────

const initQuiz = () => {
  const quizCards = $$(".quiz-card");
  const submitBtn = $("#quizSubmit");
  const submitHint = $("#quizSubmitHint");
  const progressText = $("#quizProgress");
  const resultsEl = $("#quizResults");
  const scoreNumber = $("#quizScoreNumber");
  const scoreMessage = $("#quizScoreMessage");
  const retryBtn = $("#quizRetry");

  const updateProgress = () => {
    const answered = Object.keys(state.quizAnswers).length;
    progressText.textContent = `${answered} of ${QUIZ_TOTAL} answered`;
    submitBtn.disabled = answered < QUIZ_TOTAL;
    submitHint.textContent =
      answered < QUIZ_TOTAL
        ? `Answer all ${QUIZ_TOTAL} questions to submit`
        : "Ready to submit!";
  };

  // Option selection
  quizCards.forEach((card) => {
    const qNum = card.dataset.question;
    const options = $$(".quiz-option", card);

    options.forEach((option) => {
      option.addEventListener("click", () => {
        if (state.quizSubmitted) return;

        options.forEach((o) => {
          o.classList.remove("selected");
          o.setAttribute("aria-checked", "false");
        });
        option.classList.add("selected");
        option.setAttribute("aria-checked", "true");

        state.quizAnswers[qNum] = option.dataset.value;
        updateProgress();
      });
    });
  });

  // Submit
  submitBtn.addEventListener("click", () => {
    if (Object.keys(state.quizAnswers).length < QUIZ_TOTAL) return;

    state.quizSubmitted = true;
    let score = 0;

    quizCards.forEach((card) => {
      const qNum = card.dataset.question;
      const correctVal = card.dataset.correct;
      const userVal = state.quizAnswers[qNum];
      const isCorrect = userVal === correctVal;
      const feedbackEl = $(".quiz-feedback", card);
      const fb = quizFeedback[qNum];

      if (isCorrect) {
        score++;
        card.classList.add("quiz-correct");
        feedbackEl.innerHTML = `<span class="feedback-correct">✓ ${fb.correct}</span>`;
      } else {
        card.classList.add("quiz-incorrect");
        // Highlight correct option
        const correctOption = $(
          `.quiz-option[data-value="${correctVal}"]`,
          card,
        );
        if (correctOption) correctOption.classList.add("quiz-answer-correct");
        feedbackEl.innerHTML = `<span class="feedback-incorrect">${fb.incorrect}</span>`;
      }
      feedbackEl.classList.add("show");

      // Disable options
      $$(".quiz-option", card).forEach((o) => {
        o.disabled = true;
      });
    });

    // Show results
    const pct = (score / QUIZ_TOTAL) * 100;
    let msgKey = "low";
    if (pct >= 90) msgKey = "high";
    else if (pct >= 60) msgKey = "good";
    else if (pct >= 30) msgKey = "fair";

    resultsEl.hidden = false;
    submitBtn.hidden = true;
    submitHint.hidden = true;

    // Animate score counter
    if (typeof window._gsapCountScore === "function") {
      window._gsapCountScore(score);
    } else {
      scoreNumber.textContent = score;
    }

    scoreMessage.textContent = quizScoreMessages[msgKey];

    // Save results
    store.set(
      "sabi-quiz",
      JSON.stringify({
        score,
        total: QUIZ_TOTAL,
        timestamp: Date.now(),
      }),
    );

    // Celebration for high scores
    if (pct >= 80) {
      const celebration = $("#celebration");
      const celebMsg = $("#celebrationMessage");
      if (celebration) {
        celebration.hidden = false;
        if (celebMsg) celebMsg.textContent = quizScoreMessages[msgKey];
        launchConfetti();
      }
    }

    // Scroll to results
    resultsEl.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  // Retry
  if (retryBtn) {
    retryBtn.addEventListener("click", () => {
      state.quizAnswers = {};
      state.quizSubmitted = false;

      quizCards.forEach((card) => {
        card.classList.remove("quiz-correct", "quiz-incorrect");
        const feedbackEl = $(".quiz-feedback", card);
        if (feedbackEl) {
          feedbackEl.classList.remove("show");
          feedbackEl.innerHTML = "";
        }
        $$(".quiz-option", card).forEach((o) => {
          o.classList.remove("selected", "quiz-answer-correct");
          o.setAttribute("aria-checked", "false");
          o.disabled = false;
        });
      });

      resultsEl.hidden = true;
      submitBtn.hidden = false;
      submitHint.hidden = false;
      updateProgress();

      $("#quiz-section").scrollIntoView({ behavior: "smooth" });
    });
  }

  updateProgress();
};

// ─── CONFETTI ────────────────────────────────────────────

const launchConfetti = () => {
  const container = $("#confettiContainer");
  if (!container) return;

  const colors = ["#d4a843", "#43a878", "#e8c468", "#5cb88a", "#c4943a"];

  for (let i = 0; i < CONFETTI_COUNT; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.cssText = `
      position: fixed;
      top: -10px;
      left: ${Math.random() * 100}%;
      width: ${6 + Math.random() * 6}px;
      height: ${6 + Math.random() * 6}px;
      background: ${colors[i % colors.length]};
      border-radius: ${Math.random() > 0.5 ? "50%" : "2px"};
      z-index: 10000;
      pointer-events: none;
    `;
    container.appendChild(piece);

    const xDrift = (Math.random() - 0.5) * 200;
    const duration = 2000 + Math.random() * 2000;

    const animation = piece.animate(
      [
        {
          transform: `translate(0, 0) rotate(0deg)`,
          opacity: 1,
        },
        {
          transform: `translate(${xDrift}px, ${window.innerHeight + 50}px) rotate(${360 + Math.random() * 720}deg)`,
          opacity: 0,
        },
      ],
      {
        duration,
        easing: "cubic-bezier(.22,1,.36,1)",
      },
    );

    animation.onfinish = () => piece.remove();
  }
};

// ─── GLOSSARY PANEL ──────────────────────────────────────

const initGlossary = () => {
  const panel = $("#glossaryPanel");
  const overlay = $("#glossaryOverlay");
  const openBtn = $("#glossaryOpen");
  const closeBtn = $("#glossaryClose");
  const searchInput = $("#glossarySearch");
  const items = $$(".glossary-item");

  if (!panel || !openBtn) return;

  let previousFocus = null;

  const openGlossary = () => {
    previousFocus = document.activeElement;
    panel.hidden = false;
    overlay.hidden = false;
    overlay.setAttribute("aria-hidden", "false");
    panel.focus();
    document.body.style.overflow = "hidden";
  };

  const closeGlossary = () => {
    panel.hidden = true;
    overlay.hidden = true;
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (previousFocus) previousFocus.focus();
  };

  openBtn.addEventListener("click", openGlossary);
  closeBtn.addEventListener("click", closeGlossary);
  overlay.addEventListener("click", closeGlossary);

  // Keyboard: Escape to close
  panel.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeGlossary();

    // Trap focus
    if (e.key === "Tab") {
      const focusable = $$("button, input, [tabindex]", panel);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  // Search
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase().trim();
      items.forEach((item) => {
        const term = item.dataset.term || "";
        const text = item.textContent.toLowerCase();
        item.style.display =
          query === "" || term.includes(query) || text.includes(query)
            ? ""
            : "none";
      });
    });
  }
};

// ─── WELCOME BACK & SESSION MANAGEMENT ───────────────────

const initWelcomeBack = () => {
  const savedSection = store.get("sabi-section");
  const savedScroll = store.get("sabi-scroll");

  if (!savedSection || savedSection === "hero") return;

  const overlay = $("#welcomeOverlay");
  const message = $("#welcomeMessage");
  const resumeBtn = $("#welcomeResume");
  const restartBtn = $("#welcomeRestart");

  if (!overlay) return;

  // Find section name
  const section = $(`#${savedSection}`);
  const sectionName = section
    ? $(".section-heading", section)?.textContent || savedSection
    : savedSection;

  message.textContent = `You were on "${sectionName}" last time.`;
  overlay.hidden = false;

  resumeBtn.addEventListener("click", () => {
    overlay.hidden = true;
    const scrollTo = parseInt(savedScroll) || 0;
    window.scrollTo({ top: scrollTo, behavior: "smooth" });
  });

  restartBtn.addEventListener("click", () => {
    overlay.hidden = true;
    window.scrollTo({ top: 0 });
  });
};

// ─── RESET PROGRESS ──────────────────────────────────────

const initReset = () => {
  const btn = $("#resetProgress");
  if (!btn) return;

  btn.addEventListener("click", () => {
    if (
      !confirm(
        "This will reset all your progress, quiz scores, and theme preference. Continue?",
      )
    )
      return;

    store.remove("sabi-theme");
    store.remove("sabi-scroll");
    store.remove("sabi-section");
    store.remove("sabi-quiz");

    window.location.reload();
  });
};

// ─── ABOVE-FOLD IMMEDIATE REVEAL ─────────────────────────

const revealAboveFold = () => {
  $$(".hero .reveal").forEach((el) => {
    el.classList.add("visible");
  });
};

// ─── INITIALIZATION ──────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  // Core systems
  initTheme();
  initScrollHandler();
  revealAboveFold();
  initRevealObserver();

  // UI components
  initAccordions();
  initHintToggles();
  initPredictions();
  initCheckpoints();

  // Interactive components
  initMatrixBuilder();
  initEigenvalueRevealer();
  initProofSequencer();
  initDecompositionExplorer();
  initDFCalculator();
  initWeightExplorer();
  initDistributionIdentifier();

  // Quiz
  initQuiz();

  // Panels
  initGlossary();
  initWelcomeBack();
  initReset();

  // Nuclear failsafe — guarantee visibility after 4 seconds
  setTimeout(() => {
    forceAllVisible();
  }, FAILSAFE_TIMEOUT);
});

// ═══════════════════════════════════════════════════════════
// GSAP ANIMATION ENGINE
// Wrapped in IIFE with complete error handling
// ═══════════════════════════════════════════════════════════

(function gsapAnimationEngine() {
  "use strict";

  const ULTIMATE_DEADLINE = 5000;

  const forceAllVisibleGSAP = () => {
    document.querySelectorAll(".reveal:not(.visible)").forEach((el) => {
      el.classList.add("visible");
      el.style.opacity = "1";
      el.style.transform = "none";
    });
  };

  const init = () => {
    try {
      // Check GSAP availability
      if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
        console.warn("GSAP not available — falling back to CSS transitions");
        return;
      }

      gsap.registerPlugin(ScrollTrigger);

      // Check reduced motion preference
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (prefersReduced) {
        forceAllVisibleGSAP();
        return;
      }

      // Mark GSAP ready — disables CSS transitions on .reveal
      document.documentElement.classList.add("gsap-ready");

      // ─── HERO ENTRANCE TIMELINE ────────────────────

      const heroTl = gsap.timeline({ defaults: { ease: "power2.out" } });

      const heroBadge = document.querySelector(".hero-badge");
      const titleWords = document.querySelectorAll(".title-word");
      const heroSubtitle = document.querySelector(".hero-subtitle");
      const heroMeta = document.querySelector(".hero-meta");
      const heroCta = document.querySelector(".hero-cta");
      const scrollHint = document.querySelector(".scroll-hint");
      const orbs = document.querySelectorAll(".orb");

      if (heroBadge) {
        heroTl.fromTo(
          heroBadge,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            onComplete() {
              heroBadge.classList.add("visible");
              gsap.set(heroBadge, { clearProps: "all" });
            },
          },
        );
      }

      if (titleWords.length) {
        heroTl.fromTo(
          titleWords,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power3.out",
            onComplete() {
              titleWords.forEach((w) => {
                w.classList.add("visible");
                gsap.set(w, { clearProps: "all" });
              });
            },
          },
          "-=0.3",
        );
      }

      if (heroSubtitle) {
        heroTl.fromTo(
          heroSubtitle,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            onComplete() {
              heroSubtitle.classList.add("visible");
              gsap.set(heroSubtitle, { clearProps: "all" });
            },
          },
          "-=0.2",
        );
      }

      if (heroMeta) {
        heroTl.fromTo(
          heroMeta,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.4,
            onComplete() {
              heroMeta.classList.add("visible");
              gsap.set(heroMeta, { clearProps: "all" });
            },
          },
          "-=0.1",
        );
      }

      if (heroCta) {
        heroTl.fromTo(
          heroCta,
          { opacity: 0, y: 20, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: "back.out(1.4)",
            onComplete() {
              heroCta.classList.add("visible");
              gsap.set(heroCta, { clearProps: "all" });
            },
          },
          "-=0.1",
        );
      }

      if (scrollHint) {
        heroTl.fromTo(
          scrollHint,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.6,
            onComplete() {
              scrollHint.classList.add("visible");
              gsap.set(scrollHint, { clearProps: "all" });
            },
          },
          "-=0.2",
        );
      }

      // Orbs fade in
      if (orbs.length) {
        heroTl.fromTo(
          orbs,
          { opacity: 0 },
          { opacity: 0.15, duration: 2, ease: "sine.inOut" },
          "-=0.5",
        );
      }

      // ─── NAV ENTRANCE ──────────────────────────────

      const nav = document.querySelector(".nav");
      if (nav) {
        gsap.fromTo(
          nav,
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, delay: 0.3, ease: "power2.out" },
        );
      }

      // ─── SCROLL-TRIGGERED REVEALS ──────────────────

      const revealElements = document.querySelectorAll(".reveal:not(.visible)");

      revealElements.forEach((el) => {
        // Skip hero elements (already animated)
        if (el.closest(".hero")) return;

        ScrollTrigger.create({
          trigger: el,
          start: "top 92%",
          once: true,
          onEnter: () => {
            gsap.fromTo(
              el,
              { opacity: 0, y: 24 },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out",
                onComplete() {
                  el.classList.add("visible");
                  gsap.set(el, { clearProps: "all" });
                },
              },
            );
          },
        });
      });

      // ─── COMPONENT-SPECIFIC ANIMATIONS ─────────────

      // Theorem cards: subtle scale entrance
      document.querySelectorAll(".theorem-card").forEach((card) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top 88%",
          once: true,
          onEnter: () => {
            gsap.fromTo(
              card,
              { opacity: 0, scale: 0.97 },
              {
                opacity: 1,
                scale: 1,
                duration: 0.7,
                ease: "power2.out",
                onComplete() {
                  card.classList.add("visible");
                  gsap.set(card, { clearProps: "all" });
                },
              },
            );
          },
        });
      });

      // Summary cards: stagger
      const summaryCards = document.querySelectorAll(".summary-card");
      if (summaryCards.length) {
        ScrollTrigger.create({
          trigger: ".summary-grid",
          start: "top 85%",
          once: true,
          onEnter: () => {
            gsap.fromTo(
              summaryCards,
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: "power2.out",
                onComplete() {
                  summaryCards.forEach((c) => {
                    c.classList.add("visible");
                    gsap.set(c, { clearProps: "all" });
                  });
                },
              },
            );
          },
        });
      }

      // Quiz cards: stagger
      const quizCards = document.querySelectorAll(".quiz-card");
      if (quizCards.length) {
        ScrollTrigger.create({
          trigger: "#quiz-section",
          start: "top 80%",
          once: true,
          onEnter: () => {
            gsap.fromTo(
              quizCards,
              { opacity: 0, y: 24 },
              {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.08,
                ease: "power2.out",
                onComplete() {
                  quizCards.forEach((c) => {
                    c.classList.add("visible");
                    gsap.set(c, { clearProps: "all" });
                  });
                },
              },
            );
          },
        });
      }

      // ─── SCORE COUNTER ANIMATION ───────────────────

      window._gsapCountScore = (target) => {
        const el = document.getElementById("quizScoreNumber");
        if (!el) return;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 1.5,
          ease: "power2.out",
          onUpdate() {
            el.textContent = Math.round(obj.val);
          },
        });
      };

      // ─── CELEBRATION ENTRANCE ──────────────────────

      const celebrationObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (
            mutation.type === "attributes" &&
            mutation.attributeName === "hidden"
          ) {
            const target = mutation.target;
            if (!target.hidden && target.id === "celebration") {
              gsap.fromTo(
                target,
                { opacity: 0, scale: 0.9 },
                { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.2)" },
              );
            }
          }
        });
      });

      const celebration = document.getElementById("celebration");
      if (celebration) {
        celebrationObserver.observe(celebration, { attributes: true });
      }

      // ─── MAGNETIC CTA HOVER (desktop only) ─────────

      if (window.innerWidth > 768) {
        const cta = document.querySelector(".hero-cta");
        if (cta) {
          cta.addEventListener("mousemove", (e) => {
            const rect = cta.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            gsap.to(cta, {
              x: x * 0.15,
              y: y * 0.15,
              duration: 0.3,
              ease: "power1.out",
            });
          });

          cta.addEventListener("mouseleave", () => {
            gsap.to(cta, {
              x: 0,
              y: 0,
              duration: 0.5,
              ease: "elastic.out(1, 0.4)",
            });
          });
        }
      }

      // ─── PARALLAX ORBS ─────────────────────────────

      document.querySelectorAll(".orb").forEach((orb, i) => {
        const speed = [0.03, -0.02, 0.015][i] || 0.02;
        ScrollTrigger.create({
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
          onUpdate: (self) => {
            gsap.set(orb, {
              y: self.progress * window.innerHeight * speed * 10,
            });
          },
        });
      });

      // ─── REFRESH & VERIFY ──────────────────────────

      ScrollTrigger.refresh();

      // Post-init verification: catch any stuck elements
      setTimeout(() => {
        document.querySelectorAll(".reveal:not(.visible)").forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight) {
            el.classList.add("visible");
            gsap.set(el, { clearProps: "all" });
          }
        });
      }, 2000);
    } catch (error) {
      console.error("GSAP animation engine error:", error);
      forceAllVisibleGSAP();
    }
  };

  // ─── INITIALIZATION STRATEGY ─────────────────────────

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Safety net: if DOMContentLoaded somehow missed
  window.addEventListener("load", () => {
    if (!document.documentElement.classList.contains("gsap-ready")) {
      init();
    }
  });

  // Ultimate deadline
  setTimeout(() => {
    forceAllVisibleGSAP();
  }, ULTIMATE_DEADLINE);
})();

// ═══════════════════════════════════════════════════════════
// script.js
// Nigerian History & Culture Learning Experience
// Built for Goodness Michael (Ire'Ayo)
// ═══════════════════════════════════════════════════════════

(function () {
'use strict';

// ─── UTILITIES ───────────────────────────────────────────

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

const storage = {
    get(key) { try { return localStorage.getItem(key); } catch (e) { return null; } },
    set(key, val) { try { localStorage.setItem(key, val); } catch (e) {} },
    remove(key) { try { localStorage.removeItem(key); } catch (e) {} }
};

// ─── STATE ───────────────────────────────────────────────

const state = {
    quizSubmitted: false
};

// ─── THEME TOGGLE ────────────────────────────────────────

function initTheme() {
    const toggle = $('#theme-toggle');
    const icon = $('#theme-icon');
    if (!toggle || !icon) return;

    const updateIcon = () => {
        const isLight = document.documentElement.classList.contains('light-mode');
        icon.innerHTML = isLight ? '&#127769;' : '&#9728;&#65039;';
        toggle.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
    };

    updateIcon();

    toggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('light-mode');
        const isLight = document.documentElement.classList.contains('light-mode');
        storage.set('sabi-nih-theme', isLight ? 'light' : 'dark');
        updateIcon();
    });
}

// ─── PROGRESS BAR & NAV SCROLL (SINGLE MERGED HANDLER) ──

function initScrollHandler() {
    const progressFill = $('#progress-fill');
    const progressBar = $('#progress-bar');
    const nav = $('#site-nav');

    let scrollTicking = false;
    let lastSaveTime = 0;

    const handleScroll = () => {
        if (scrollTicking) return;
        scrollTicking = true;

        requestAnimationFrame(() => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

            if (progressFill) {
                progressFill.style.width = progress + '%';
            }
            if (progressBar) {
                progressBar.setAttribute('aria-valuenow', Math.round(progress));
            }

            if (nav) {
                if (scrollTop > 60) {
                    nav.classList.add('scrolled');
                } else {
                    nav.classList.remove('scrolled');
                }
            }

            const now = Date.now();
            if (now - lastSaveTime > 2000) {
                storage.set('sabi-nih-scroll', String(Math.round(scrollTop)));
                lastSaveTime = now;
            }

            scrollTicking = false;
        });
    };

    const saveScrollPosition = () => {
        storage.set('sabi-nih-scroll', String(Math.round(window.scrollY)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('beforeunload', saveScrollPosition);
    window.addEventListener('pagehide', saveScrollPosition);

    handleScroll();
}

// ─── INTERSECTION OBSERVER (REVEAL SYSTEM) ───────────────

function initRevealObserver() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.05, rootMargin: '0px 0px -30px 0px' }
    );

    $$('.reveal').forEach((el) => observer.observe(el));
}

// ─── SMOOTH SCROLL FOR ANCHOR LINKS ─────────────────────

function initSmoothScroll() {
    $$('a[href^="#"]').forEach((link) => {
        link.addEventListener('click', (e) => {
            const id = link.getAttribute('href');
            if (!id || id === '#') return;
            const target = $(id);
            if (target) {
                e.preventDefault();
                const nav = $('#site-nav');
                const navHeight = nav ? nav.getBoundingClientRect().height : 0;
                const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight - 8;
                window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
            }
        });
    });
}

// ─── INTERACTIVE: PREDICTION QUIZ (Section 1) ────────────

function initPredictionQuiz() {
    const container = $('#interact-history-predict');
    if (!container) return;

    const options = $$('.predict-option', container);
    const commitBtn = $('.predict-commit', container);
    const feedbackEl = $('.predict-feedback', container);
    let selectedOption = null;

    options.forEach((opt) => {
        opt.addEventListener('click', () => {
            options.forEach((o) => o.classList.remove('selected'));
            opt.classList.add('selected');
            selectedOption = opt;
            commitBtn.disabled = false;
        });
    });

    commitBtn.addEventListener('click', () => {
        if (!selectedOption) return;
        commitBtn.disabled = true;
        options.forEach((o) => { o.disabled = true; });
        feedbackEl.hidden = false;

        const isCorrect = selectedOption.dataset.correct === 'true';
        const correctFb = $('.feedback-correct', feedbackEl);
        const otherFb = $('.feedback-other', feedbackEl);
        if (correctFb) correctFb.style.display = isCorrect ? 'block' : 'none';
        if (otherFb) otherFb.style.display = isCorrect ? 'none' : 'block';

        if (isCorrect) selectedOption.classList.add('correct');
    });
}

// ─── INTERACTIVE: BENEFIT BUILDER (Section 2) ────────────

function initBenefitBuilder() {
    const container = $('#interact-benefits');
    if (!container) return;

    const cards = $$('.benefit-card', container);
    const counter = $('.benefit-counter', container);
    const summary = $('.benefit-summary', container);
    let flipped = 0;

    cards.forEach((card) => {
        card.addEventListener('click', () => {
            if (card.getAttribute('aria-expanded') === 'true') return;
            card.setAttribute('aria-expanded', 'true');
            card.classList.add('flipped');
            flipped++;
            if (counter) counter.textContent = `(${flipped}/${cards.length} discovered)`;
            if (flipped === cards.length && summary) summary.hidden = false;
        });
    });
}

// ─── INTERACTIVE: CULTURE SORTER (Section 3) ─────────────

function initCultureSorter() {
    const container = $('#interact-culture-sort');
    if (!container) return;

    const items = $$('.sort-item', container);
    const checkBtn = $('.sort-check', container);
    const feedback = $('.sort-feedback', container);

    items.forEach((item) => {
        item.addEventListener('click', () => {
            if (container.classList.contains('checked')) return;
            const current = item.dataset.current;
            const badge = $('.sort-item-badge', item);

            if (current === '' || current === 'non-material') {
                item.dataset.current = 'material';
                if (badge) badge.textContent = 'Material';
                item.classList.remove('cat-nonmaterial');
                item.classList.add('classified', 'cat-material');
            } else {
                item.dataset.current = 'non-material';
                if (badge) badge.textContent = 'Non-material';
                item.classList.remove('cat-material');
                item.classList.add('classified', 'cat-nonmaterial');
            }

            const allDone = items.every((i) => i.dataset.current !== '');
            checkBtn.disabled = !allDone;
        });
    });

    checkBtn.addEventListener('click', () => {
        container.classList.add('checked');
        let correct = 0;

        items.forEach((item) => {
            const isRight = item.dataset.current === item.dataset.correct;
            item.classList.add(isRight ? 'sort-correct' : 'sort-incorrect');
            if (isRight) correct++;
        });

        checkBtn.disabled = true;
        if (feedback) {
            feedback.innerHTML = correct === items.length
                ? '<p>&#9989; Perfect! You clearly understand the difference between material and non-material culture.</p>'
                : `<p>You got <strong>${correct} out of ${items.length}</strong>. Remember: if you can touch it, it's material. If it lives in the mind (beliefs, language, customs), it's non-material.</p>`;
        }
    });
}

// ─── INTERACTIVE: HAIR-BRAIDING CONNECTOR (Section 4) ────

function initHairConnector() {
    const container = $('#interact-hair-connector');
    if (!container) return;

    const leftItems = $$('.left-item', container);
    const rightItems = $$('.right-item', container);
    const countEl = $('#connector-count');
    const feedback = $('.connector-feedback', container);
    let selectedLeft = null;
    let matched = 0;

    leftItems.forEach((item) => {
        item.addEventListener('click', () => {
            if (item.classList.contains('matched')) return;
            leftItems.forEach((i) => i.classList.remove('selected'));
            item.classList.add('selected');
            selectedLeft = item;
        });
    });

    rightItems.forEach((item) => {
        item.addEventListener('click', () => {
            if (!selectedLeft || item.classList.contains('matched')) return;

            if (selectedLeft.dataset.pair === item.dataset.pair) {
                selectedLeft.classList.remove('selected');
                selectedLeft.classList.add('matched');
                item.classList.add('matched');
                matched++;
                if (countEl) countEl.textContent = matched;

                if (matched === 5 && feedback) {
                    feedback.innerHTML = '<p>&#9989; All 5 matched! You just proved you understand culture better than most textbooks explain it. Every characteristic has a perfect parallel in hair-making.</p>';
                }
            } else {
                selectedLeft.classList.add('shake');
                item.classList.add('shake');
                const l = selectedLeft;
                setTimeout(() => {
                    l.classList.remove('shake');
                    item.classList.remove('shake');
                }, 500);
            }

            if (selectedLeft) selectedLeft.classList.remove('selected');
            selectedLeft = null;
        });
    });
}

// ─── INTERACTIVE: PREDICTION SLIDER (Section 5) ──────────

function initPredictionSlider() {
    const container = $('#interact-ethnic-slider');
    if (!container) return;

    const slider = $('#ethnic-slider');
    const display = $('#slider-display');
    const commitBtn = $('#slider-commit');
    const feedbackEl = $('.slider-feedback', container);
    const gapEl = $('.slider-gap', container);

    if (slider && display) {
        slider.addEventListener('input', () => {
            display.textContent = slider.value;
        });
    }

    if (commitBtn) {
        commitBtn.addEventListener('click', () => {
            const guess = parseInt(slider.value);
            commitBtn.disabled = true;
            slider.disabled = true;
            if (feedbackEl) feedbackEl.hidden = false;

            const actual = 350;
            const gap = Math.abs(guess - actual);

            if (gapEl) {
                if (gap <= 50) {
                    gapEl.textContent = `Your guess of ${guess} was very close! Great intuition for Nigeria's incredible diversity.`;
                } else if (gap <= 150) {
                    gapEl.textContent = `You guessed ${guess}. The gap is about ${gap}. Nigeria is even more diverse than most people expect!`;
                } else {
                    gapEl.textContent = `You guessed ${guess}. Most people underestimate it! 350+ distinct groups, each with their own language and customs.`;
                }
            }
        });
    }
}

// ─── INTERACTIVE: YORUBA PROFILE EXPLORER (Section 6) ────

function initYorubaProfile() {
    const container = $('#interact-yoruba-profile');
    if (!container) return;

    const tabs = $$('.profile-tab', container);
    const panels = $$('.profile-panel', container);

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            const num = tab.dataset.tab;

            tabs.forEach((t) => {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });
            panels.forEach((p) => {
                p.classList.remove('active');
                p.hidden = true;
            });

            tab.classList.add('active');
            tab.setAttribute('aria-selected', 'true');

            const panel = $(`#yoruba-panel-${num}`, container);
            if (panel) {
                panel.classList.add('active');
                panel.hidden = false;
            }
        });
    });
}

// ─── INTERACTIVE: SETTLEMENT TOGGLE (Section 7) ──────────

function initSettlementToggle() {
    const container = $('#interact-settlement');
    if (!container) return;

    const btns = $$('.toggle-btn', container);
    const visual = $('#settlement-visual');
    const label = $('#settlement-label');
    const dotsEl = visual ? $('.settlement-dots', visual) : null;

    const DOT_COUNT = 20;

    const descriptions = {
        yoruba: '<strong>Yoruba Pattern:</strong> Family compounds clustered together in a central town, with farmland surrounding the town. Everyone lives close together.',
        igbo: '<strong>Igbo Pattern:</strong> Family compounds spread out across the entire village territory. No central cluster. Each family has its own independent space.'
    };

    const generateDots = (pattern) => {
        if (!dotsEl) return;
        dotsEl.innerHTML = '';
        dotsEl.dataset.active = pattern;

        for (let i = 0; i < DOT_COUNT; i++) {
            const dot = document.createElement('span');
            dot.className = 'settlement-dot';

            if (pattern === 'yoruba') {
                const angle = (i / DOT_COUNT) * Math.PI * 2;
                const radius = 12 + Math.random() * 22;
                dot.style.left = (50 + Math.cos(angle) * radius) + '%';
                dot.style.top = (50 + Math.sin(angle) * radius) + '%';
            } else {
                const col = i % 5;
                const row = Math.floor(i / 5);
                dot.style.left = (8 + col * 20 + (Math.random() * 10 - 5)) + '%';
                dot.style.top = (8 + row * 22 + (Math.random() * 10 - 5)) + '%';
            }

            dotsEl.appendChild(dot);
        }
    };

    generateDots('yoruba');

    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            btns.forEach((b) => b.classList.remove('active'));
            btn.classList.add('active');
            const pattern = btn.dataset.pattern;
            generateDots(pattern);
            if (label) label.innerHTML = descriptions[pattern] || '';
        });
    });
}

// ─── INTERACTIVE: POWER SPECTRUM PLACER (Section 8) ──────

function initSpectrumPlacer() {
    const container = $('#interact-spectrum');
    if (!container) return;

    const chips = $$('.spectrum-chip', container);
    const slots = $$('.spectrum-slot', container);
    const checkBtn = $('.spectrum-check', container);
    const feedback = $('.spectrum-feedback', container);

    let selectedChip = null;
    const placements = {};
    const chipSlots = {};

    chips.forEach((chip) => {
        chip.addEventListener('click', () => {
            if (container.classList.contains('checked')) return;

            if (chipSlots[chip.dataset.group]) {
                const oldSlotNum = chipSlots[chip.dataset.group];
                delete placements[oldSlotNum];
                delete chipSlots[chip.dataset.group];
                chip.classList.remove('placed');
                slots.forEach((s) => {
                    if (s.dataset.slot === String(oldSlotNum)) {
                        s.textContent = '';
                        s.classList.remove('occupied');
                    }
                });
            }

            chips.forEach((c) => c.classList.remove('selected'));
            chip.classList.add('selected');
            selectedChip = chip;
        });
    });

    slots.forEach((slot) => {
        slot.addEventListener('click', () => {
            if (!selectedChip || container.classList.contains('checked')) return;

            if (placements[slot.dataset.slot]) {
                const prev = placements[slot.dataset.slot];
                prev.classList.remove('placed');
                delete chipSlots[prev.dataset.group];
            }

            placements[slot.dataset.slot] = selectedChip;
            chipSlots[selectedChip.dataset.group] = slot.dataset.slot;
            slot.textContent = selectedChip.textContent;
            slot.classList.add('occupied');
            selectedChip.classList.add('placed');
            selectedChip.classList.remove('selected');
            selectedChip = null;

            checkBtn.disabled = Object.keys(placements).length < 5;
        });
    });

    checkBtn.addEventListener('click', () => {
        container.classList.add('checked');
        let correct = 0;

        chips.forEach((chip) => {
            const placed = chipSlots[chip.dataset.group];
            const expected = chip.dataset.correct;
            const slotEl = slots.find((s) => s.dataset.slot === placed);

            if (placed === expected) {
                correct++;
                if (slotEl) slotEl.classList.add('slot-correct');
            } else {
                if (slotEl) slotEl.classList.add('slot-incorrect');
            }
        });

        checkBtn.disabled = true;
        if (feedback) {
            feedback.innerHTML = correct === 5
                ? '<p>&#9989; All correct! Yoruba/Benin were the most centralized, Tiv the most decentralized. The spectrum maps directly to how land and authority were distributed.</p>'
                : `<p>You got ${correct} out of 5. The correct order from most to least centralized: <strong>Yoruba/Benin, Nupe, Igbo, Ibibio, Tiv.</strong> The key is the land-authority principle.</p>`;
        }
    });
}

// ─── INTERACTIVE: HAUSA TRADE EXPLORER (Section 9) ───────

function initTradeExplorer() {
    const container = $('#interact-trade');
    if (!container) return;

    const stations = $$('.trade-station', container);
    const completeEl = $('.trade-complete', container);
    let revealed = 0;

    stations.forEach((station) => {
        station.addEventListener('click', () => {
            if (station.getAttribute('aria-expanded') === 'true') return;
            station.setAttribute('aria-expanded', 'true');
            station.classList.add('revealed');
            const detail = $('.station-detail', station);
            if (detail) detail.hidden = false;
            revealed++;
            if (revealed === stations.length && completeEl) {
                completeEl.hidden = false;
            }
        });
    });
}

// ─── INTERACTIVE: FULANI COMPARISON (Section 10) ─────────

function initFulaniCompare() {
    const btn = $('#fulani-highlight');
    if (!btn) return;

    const container = $('#interact-fulani');

    btn.addEventListener('click', () => {
        const rows = $$('.compare-row', container);
        const isHighlighted = rows[0] && rows[0].classList.contains('highlighted');
        rows.forEach((r) => r.classList.toggle('highlighted'));
        btn.textContent = isHighlighted ? 'Highlight the Differences' : 'Remove Highlights';
    });
}

// ─── INTERACTIVE: TRADITION SORTER (Section 11) ──────────

function initTraditionSorter() {
    const container = $('#interact-tradition-sort');
    if (!container) return;

    const cards = $$('.sorter-card', container);
    const zones = $$('.sorter-zone', container);
    const feedback = $('.sorter-feedback', container);

    let selectedCard = null;
    let correctCount = 0;
    let totalPlaced = 0;

    cards.forEach((card) => {
        card.addEventListener('click', () => {
            if (card.classList.contains('placed')) return;
            cards.forEach((c) => c.classList.remove('selected'));
            card.classList.add('selected');
            selectedCard = card;
        });
    });

    zones.forEach((zone) => {
        const zoneArea = $('.zone-area', zone);

        zone.addEventListener('click', () => {
            if (!selectedCard || !zoneArea) return;

            const correctZone = selectedCard.dataset.correct;
            const targetZone = zone.dataset.zone;

            selectedCard.classList.remove('selected');
            selectedCard.classList.add('placed');
            selectedCard.disabled = true;

            const badge = document.createElement('span');
            badge.className = 'placed-card';
            badge.textContent = selectedCard.textContent;

            if (correctZone === targetZone) {
                badge.classList.add('placed-correct');
                correctCount++;
                if (feedback) feedback.innerHTML = `<p>&#9989; Correct! "${selectedCard.textContent}" belongs in ${targetZone.replace('external', 'External Migration').replace('indigenous', 'Indigenous / Always Here').replace('creation', 'Creation Story')}.</p>`;
            } else {
                badge.classList.add('placed-incorrect');
                const zoneName = correctZone.replace('external', 'External Migration').replace('indigenous', 'Indigenous / Always Here').replace('creation', 'Creation Story');
                if (feedback) feedback.innerHTML = `<p>Not quite.. "${selectedCard.textContent}" actually belongs in <strong>${zoneName}</strong>. Keep going!</p>`;
            }

            zoneArea.appendChild(badge);
            totalPlaced++;
            selectedCard = null;

            if (totalPlaced === cards.length && feedback) {
                feedback.innerHTML += `<p><strong>All sorted!</strong> You got ${correctCount} out of ${cards.length} correct.</p>`;
            }
        });
    });
}

// ─── INTERACTIVE: BAYAJIDA JOURNEY (Section 12) ──────────

function initBayajidaJourney() {
    const container = $('#interact-bayajida');
    if (!container) return;

    const stops = $$('.journey-stop', container);
    const stories = $$('.journey-story', container);
    const completeEl = $('.journey-complete', container);
    let currentStop = 1;

    stops.forEach((stop) => {
        stop.addEventListener('click', () => {
            const num = parseInt(stop.dataset.stop);
            if (num !== currentStop) return;

            stories.forEach((s) => { s.hidden = true; });
            const story = container.querySelector(`[data-story="${num}"]`);
            if (story) story.hidden = false;

            stop.classList.remove('active', 'locked');
            stop.classList.add('visited');
            stop.setAttribute('aria-expanded', 'true');

            currentStop++;

            const next = container.querySelector(`[data-stop="${currentStop}"]`);
            if (next) {
                next.classList.remove('locked');
                next.classList.add('active');
                next.disabled = false;
            }

            if (currentStop > stops.length && completeEl) {
                completeEl.hidden = false;
            }
        });
    });
}

// ─── INTERACTIVE: CREATION SEQUENCE (Section 13) ─────────

function initCreationSequence() {
    const container = $('#interact-creation-order');
    if (!container) return;

    const cards = $$('.sequence-card', container);
    const checkBtn = $('.sequence-check', container);
    const resetBtn = $('.sequence-reset', container);
    const feedback = $('.sequence-feedback', container);

    cards.forEach((c) => { c.dataset.originalText = c.textContent; });

    let currentOrder = 1;

    const handleClick = (card) => {
        if (card.dataset.order || container.classList.contains('seq-checked')) return;
        card.dataset.order = String(currentOrder);
        card.innerHTML = '<span class="seq-num">' + currentOrder + '</span> ' + card.dataset.originalText;
        card.classList.add('numbered');
        currentOrder++;
        if (currentOrder > cards.length) checkBtn.disabled = false;
    };

    cards.forEach((card) => {
        card.addEventListener('click', () => handleClick(card));
    });

    checkBtn.addEventListener('click', () => {
        container.classList.add('seq-checked');
        let correct = 0;

        cards.forEach((card) => {
            const assigned = parseInt(card.dataset.order);
            const expected = parseInt(card.dataset.correct);
            card.classList.add(assigned === expected ? 'seq-correct' : 'seq-incorrect');
            if (assigned === expected) correct++;
        });

        checkBtn.hidden = true;
        if (resetBtn) resetBtn.hidden = false;

        if (feedback) {
            feedback.innerHTML = correct === cards.length
                ? '<p>&#9989; Perfect order! The Yoruba creation story flows exactly like this. From water to divine intervention to the birth of land at Ile-Ife.</p>'
                : `<p>You got ${correct} out of ${cards.length} in the right position. The sequence: water, God sends party, Obatala chosen, Obatala fails, Oduduwa takes over, chain descent, creation tools used, earth appears. Try again!</p>`;
        }
    });

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            currentOrder = 1;
            container.classList.remove('seq-checked');
            cards.forEach((card) => {
                card.dataset.order = '';
                card.innerHTML = card.dataset.originalText;
                card.classList.remove('numbered', 'seq-correct', 'seq-incorrect');
            });
            checkBtn.disabled = true;
            checkBtn.hidden = false;
            resetBtn.hidden = true;
            if (feedback) feedback.innerHTML = '';
        });
    }
}

// ─── INTERACTIVE: PATTERN SPOTTER (Section 13) ───────────

function initPatternSpotter() {
    const container = $('#interact-pattern');
    if (!container) return;

    const options = $$('.pattern-option', container);
    const feedback = $('.pattern-feedback', container);

    options.forEach((opt) => {
        opt.addEventListener('click', () => {
            if (container.classList.contains('answered')) return;
            container.classList.add('answered');
            options.forEach((o) => { o.disabled = true; });

            if (opt.dataset.correct === 'true') {
                opt.classList.add('correct');
                if (feedback) feedback.innerHTML = '<p>&#9989; Exactly! Nearly every tradition mentions communities already living in the area. These legends explain how dynasties formed among existing peoples, not how empty land was first populated.</p>';
            } else {
                opt.classList.add('incorrect');
                const right = options.find((o) => o.dataset.correct === 'true');
                if (right) right.classList.add('correct');
                if (feedback) feedback.innerHTML = '<p>Not quite. The common thread is that nearly ALL traditions mention <strong>pre-existing communities</strong> in the area. These are stories about dynasty formation, not about original settlement.</p>';
            }
        });
    });
}

// ─── CHECKPOINT TOGGLES ──────────────────────────────────

function initCheckpoints() {
    $$('.cp-toggle').forEach((toggle) => {
        toggle.addEventListener('click', () => {
            const answer = toggle.nextElementSibling;
            if (!answer) return;
            const isOpen = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', String(!isOpen));
            answer.hidden = isOpen;
            toggle.textContent = isOpen ? 'Reveal Answer' : 'Hide Answer';
        });
    });
}

// ─── QUIZ ENGINE ─────────────────────────────────────────

function initQuiz() {
    const container = $('#quiz-container');
    if (!container) return;

    const quizCards = $$('.quiz-card', container);
    const submitBtn = $('#quiz-submit');
    const progressEl = $('#quiz-progress');
    const resultsEl = $('#quiz-results');
    const resultsNumber = $('#results-number');
    const resultsPercent = $('#results-percent');
    const resultsMessage = $('#results-message');
    const retryBtn = $('#quiz-retry');

    const answers = {};

    quizCards.forEach((card) => {
        const options = $$('.quiz-option', card);
        const qNum = card.dataset.question;

        options.forEach((opt) => {
            opt.addEventListener('click', () => {
                if (state.quizSubmitted) return;
                options.forEach((o) => {
                    o.classList.remove('selected');
                    o.setAttribute('aria-checked', 'false');
                });
                opt.classList.add('selected');
                opt.setAttribute('aria-checked', 'true');
                answers[qNum] = opt.dataset.option;
                updateProgress();
            });
        });
    });

    const updateProgress = () => {
        const count = Object.keys(answers).length;
        if (progressEl) progressEl.textContent = `${count} of 15 answered`;
        if (submitBtn) submitBtn.disabled = count < 15;
    };

    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            state.quizSubmitted = true;
            let score = 0;

            quizCards.forEach((card) => {
                const qNum = card.dataset.question;
                const feedbackEl = $('.quiz-feedback', card);
                const correctDiv = $('.feedback-correct', card);
                const incorrectDiv = $('.feedback-incorrect', card);
                const correctAnswer = correctDiv ? correctDiv.dataset.answer : '';
                const userAnswer = answers[qNum];

                if (feedbackEl) feedbackEl.hidden = false;

                if (userAnswer === correctAnswer) {
                    score++;
                    card.classList.add('quiz-correct');
                    if (correctDiv) correctDiv.style.display = 'block';
                    if (incorrectDiv) incorrectDiv.style.display = 'none';
                } else {
                    card.classList.add('quiz-incorrect');
                    if (correctDiv) correctDiv.style.display = 'none';
                    if (incorrectDiv) incorrectDiv.style.display = 'block';

                    $$('.quiz-option', card).forEach((opt) => {
                        if (opt.dataset.option === correctAnswer) {
                            opt.classList.add('correct-answer');
                        }
                    });
                }

                $$('.quiz-option', card).forEach((opt) => { opt.disabled = true; });
            });

            submitBtn.hidden = true;
            if (resultsEl) resultsEl.hidden = false;

            if (window._gsapCountScore) {
                window._gsapCountScore(score);
            } else if (resultsNumber) {
                resultsNumber.textContent = score;
            }

            const percent = Math.round((score / 15) * 100);
            if (resultsPercent) resultsPercent.textContent = percent + '%';

            let msg = '';
            if (percent >= 90) {
                msg = "Goodness Michael.. you came, you studied, you conquered. This is A-grade mastery right here. You didn't just memorize facts, you UNDERSTOOD the patterns, the connections, the deeper meaning. Every ethnic group, every tradition, every principle.. you own this material now. Ire'Ayo, you too sabi! \uD83C\uDF89";
                launchConfetti();
            } else if (percent >= 60) {
                msg = "Nice work, Goodness! You've got a solid foundation. A few concepts need a second look. Try reviewing the sections where you missed questions.. the checkpoints and interactive activities are great for quick refreshers. You're closer to mastery than you think!";
            } else if (percent >= 30) {
                msg = "You're making progress! Some of these concepts are tricky, especially the tradition categories and the land-authority principle. Go back through the interactives in Sections 4, 8, and 11. Understanding builds piece by piece, like braiding.. one strand at a time. You've got this!";
            } else {
                msg = "No stress at all. This is a LOT of material and you're just getting started. Start from Section 1 and work through each interactive slowly. Don't rush. You WILL get there.";
            }

            if (resultsMessage) resultsMessage.innerHTML = '<p>' + msg + '</p>';

            const celebrationEl = $('#sec-celebration');
            const celebrationMsg = $('#celebration-message');
            if (celebrationEl) celebrationEl.hidden = false;
            if (celebrationMsg) celebrationMsg.textContent = msg;

            storage.set('sabi-nih-quiz', JSON.stringify({ score, total: 15, timestamp: new Date().toISOString() }));
        });
    }

    if (retryBtn) {
        retryBtn.addEventListener('click', () => {
            state.quizSubmitted = false;
            Object.keys(answers).forEach((k) => delete answers[k]);

            quizCards.forEach((card) => {
                card.classList.remove('quiz-correct', 'quiz-incorrect');
                const fb = $('.quiz-feedback', card);
                if (fb) fb.hidden = true;

                $$('.quiz-option', card).forEach((opt) => {
                    opt.disabled = false;
                    opt.classList.remove('selected', 'correct-answer');
                    opt.setAttribute('aria-checked', 'false');
                });
            });

            if (submitBtn) { submitBtn.hidden = false; submitBtn.disabled = true; }
            if (resultsEl) resultsEl.hidden = true;
            if (progressEl) progressEl.textContent = '0 of 15 answered';
            const celebrationEl = $('#sec-celebration');
            if (celebrationEl) celebrationEl.hidden = true;

            storage.remove('sabi-nih-quiz');
        });
    }
}

// ─── CONFETTI ────────────────────────────────────────────

function launchConfetti() {
    const container = $('#confetti-container');
    if (!container) return;

    const colors = [
        'oklch(70% 0.15 45)',
        'oklch(70% 0.15 105)',
        'oklch(70% 0.15 200)',
        'oklch(70% 0.15 330)',
        'oklch(80% 0.12 60)'
    ];

    container.innerHTML = '';

    for (let i = 0; i < 30; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.backgroundColor = colors[i % colors.length];
        piece.style.left = (Math.random() * 100) + 'vw';
        const size = 6 + Math.random() * 8;
        piece.style.width = size + 'px';
        piece.style.height = (size * (0.4 + Math.random() * 0.6)) + 'px';
        container.appendChild(piece);

        const anim = piece.animate([
            { transform: 'translateY(-10vh) rotate(0deg)', opacity: 1 },
            { transform: 'translateY(100vh) rotate(' + (360 + Math.random() * 720) + 'deg)', opacity: 0 }
        ], {
            duration: 2000 + Math.random() * 2000,
            delay: Math.random() * 500,
            easing: 'cubic-bezier(.22,1,.36,1)'
        });

        anim.onfinish = () => piece.remove();
    }
}

// ─── GLOSSARY ────────────────────────────────────────────

function initGlossary() {
    const openBtn = $('#glossary-open');
    const closeBtn = $('#glossary-close');
    const panel = $('#glossary-panel');
    const overlay = $('#glossary-overlay');
    const searchInput = $('#glossary-search');
    const entries = $$('.glossary-entry');

    if (!panel || !openBtn) return;

    const openGlossary = () => {
        panel.setAttribute('aria-hidden', 'false');
        panel.classList.add('open');
        if (overlay) overlay.hidden = false;
        document.body.style.overflow = 'hidden';
        if (searchInput) searchInput.focus();
    };

    const closeGlossary = () => {
        panel.setAttribute('aria-hidden', 'true');
        panel.classList.remove('open');
        if (overlay) overlay.hidden = true;
        document.body.style.overflow = '';
        openBtn.focus();
    };

    openBtn.addEventListener('click', openGlossary);
    if (closeBtn) closeBtn.addEventListener('click', closeGlossary);
    if (overlay) overlay.addEventListener('click', closeGlossary);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && panel.classList.contains('open')) {
            closeGlossary();
        }
    });

    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const q = searchInput.value.toLowerCase().trim();
            entries.forEach((entry) => {
                entry.style.display = entry.dataset.term.includes(q) ? '' : 'none';
            });
        });
    }
}

// ─── WELCOME BACK ────────────────────────────────────────

function initWelcomeBack() {
    const overlay = $('#welcome-overlay');
    const continueBtn = $('#welcome-continue');
    const restartBtn = $('#welcome-restart');
    if (!overlay) return;

    // Check if this app has been opened before, BEFORE we mark it visited
    const hasVisited = storage.get('sabi-nih-visited');
    const saved = storage.get('sabi-nih-scroll');

    // Always stamp this visit so future loads know the user has been here
    storage.set('sabi-nih-visited', '1');

    // Only show welcome-back if:
    // 1. User has genuinely been here before (not just leftover keys from another app)
    // 2. There is a real saved scroll position past the fold
    if (!hasVisited || !saved || parseInt(saved) < 300) return;

    const showOverlay = () => {
        overlay.classList.add('is-visible');
        document.body.style.overflow = 'hidden';
        // Move focus into the card for accessibility
        const firstBtn = continueBtn || restartBtn;
        if (firstBtn) setTimeout(() => firstBtn.focus(), 50);
    };

    const hideOverlay = () => {
        overlay.classList.remove('is-visible');
        document.body.style.overflow = '';
    };

    showOverlay();

    if (continueBtn) {
        continueBtn.addEventListener('click', () => {
            hideOverlay();
            window.scrollTo({ top: parseInt(saved), behavior: 'smooth' });
        });
    }

    if (restartBtn) {
        restartBtn.addEventListener('click', () => {
            hideOverlay();
            storage.remove('sabi-nih-scroll');
            window.scrollTo({ top: 0 });
        });
    }

    // Also allow Escape key to dismiss (start fresh)
    document.addEventListener('keydown', function onEsc(e) {
        if (e.key === 'Escape' && overlay.classList.contains('is-visible')) {
            hideOverlay();
            storage.remove('sabi-nih-scroll');
            document.removeEventListener('keydown', onEsc);
        }
    });
}

// ─── RESET ───────────────────────────────────────────────

function initReset() {
    const resetBtn = $('#footer-reset');
    if (!resetBtn) return;

    resetBtn.addEventListener('click', () => {
        if (confirm('Reset all progress? This will clear your quiz answers and saved position.')) {
            storage.remove('sabi-nih-scroll');
            storage.remove('sabi-nih-section');
            storage.remove('sabi-nih-quiz');
            storage.remove('sabi-nih-visited');
            window.scrollTo({ top: 0 });
            location.reload();
        }
    });
}

// ─── INITIALIZATION ──────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initScrollHandler();
    initRevealObserver();
    initSmoothScroll();

    // Interactives
    initPredictionQuiz();
    initBenefitBuilder();
    initCultureSorter();
    initHairConnector();
    initPredictionSlider();
    initYorubaProfile();
    initSettlementToggle();
    initSpectrumPlacer();
    initTradeExplorer();
    initFulaniCompare();
    initTraditionSorter();
    initBayajidaJourney();
    initCreationSequence();
    initPatternSpotter();

    // Checkpoints & Quiz
    initCheckpoints();
    initQuiz();

    // Panels & Session
    initGlossary();
    initReset();

    // Above-fold immediate reveal
    $$('.hero .reveal').forEach((el) => el.classList.add('visible'));

    // Nuclear failsafe: 4 seconds
    setTimeout(() => {
        $$('.reveal:not(.visible)').forEach((el) => el.classList.add('visible'));
    }, 4000);

    // Welcome back (after everything else)
    initWelcomeBack();
});

})();


// ═══════════════════════════════════════════════════════════
// GSAP ANIMATION ENGINE (Separate IIFE)
// ═══════════════════════════════════════════════════════════

(function () {
'use strict';

const forceAllVisible = () => {
    document.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
        el.classList.add('visible');
    });
};

const init = () => {
    try {
        if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
            forceAllVisible();
            return;
        }

        gsap.registerPlugin(ScrollTrigger);

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            forceAllVisible();
            return;
        }

        document.documentElement.classList.add('gsap-ready');

        // ─── Hero Entrance ───

        const heroEls = [
            { sel: '.hero-badge',    y: 20, dur: 0.5, delay: 0.1 },
            { sel: '.hero-title',    y: 30, dur: 0.65, delay: 0.25 },
            { sel: '.hero-subtitle', y: 20, dur: 0.5, delay: 0.45 },
            { sel: '.hero-meta',     y: 20, dur: 0.45, delay: 0.6 },
            { sel: '.hero-cta',      y: 0,  dur: 0.5, delay: 0.75, scale: true },
            { sel: '.scroll-hint',   y: 0,  dur: 0.4, delay: 0.95 }
        ];

        heroEls.forEach((cfg) => {
            const el = document.querySelector(cfg.sel);
            if (!el) return;
            el.classList.add('visible');

            const from = { opacity: 0 };
            const to = { opacity: 1, duration: cfg.dur, delay: cfg.delay, ease: 'power2.out' };

            if (cfg.y) { from.y = cfg.y; to.y = 0; }
            if (cfg.scale) { from.scale = 0.92; to.scale = 1; }

            to.onComplete = () => { gsap.set(el, { clearProps: 'all' }); };

            gsap.fromTo(el, from, to);
        });

        // ─── Nav Entrance ───

        const nav = document.querySelector('.site-nav');
        if (nav) {
            gsap.fromTo(nav,
                { y: -60, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, delay: 0.8, ease: 'power2.out',
                  onComplete() { gsap.set(nav, { clearProps: 'all' }); }
                }
            );
        }

        // ─── Scroll Reveals ───

        document.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
            ScrollTrigger.create({
                trigger: el,
                start: 'top 92%',
                once: true,
                onEnter: () => {
                    gsap.fromTo(el,
                        { opacity: 0, y: 24 },
                        {
                            opacity: 1, y: 0,
                            duration: 0.6,
                            ease: 'power2.out',
                            onComplete() {
                                el.classList.add('visible');
                                gsap.set(el, { clearProps: 'all' });
                            }
                        }
                    );
                }
            });
        });

        // ─── Score Counter (global hook for quiz) ───

        window._gsapCountScore = (target) => {
            const el = document.getElementById('results-number');
            if (!el) return;
            const obj = { val: 0 };
            gsap.to(obj, {
                val: target,
                duration: 1.5,
                ease: 'power2.out',
                onUpdate() { el.textContent = Math.round(obj.val); }
            });
        };

        // ─── Parallax Orbs ───

        document.querySelectorAll('.orb').forEach((orb, i) => {
            gsap.to(orb, {
                y: 'random(-30, 30)',
                x: 'random(-20, 20)',
                duration: 4 + i * 1.5,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });
        });

        // ─── Interactive Card Hover Lift (desktop) ───

        if (window.matchMedia('(hover: hover)').matches) {
            document.querySelectorAll('.benefit-card, .quiz-card, .trade-station').forEach((card) => {
                card.addEventListener('mouseenter', () => {
                    gsap.to(card, { y: -3, duration: 0.25, ease: 'power1.out' });
                });
                card.addEventListener('mouseleave', () => {
                    gsap.to(card, { y: 0, duration: 0.25, ease: 'power1.out' });
                });
            });
        }

        ScrollTrigger.refresh();

        // ─── Post-init Verification (2s) ───

        setTimeout(() => {
            document.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
                el.classList.add('visible');
                gsap.set(el, { clearProps: 'all' });
            });
        }, 2000);

    } catch (e) {
        console.warn('GSAP initialization failed:', e);
        forceAllVisible();
    }
};

// Initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Safety net: retry on window load
window.addEventListener('load', () => {
    if (!document.documentElement.classList.contains('gsap-ready')) {
        init();
    }
});

// Ultimate deadline: 5 seconds
setTimeout(forceAllVisible, 5000);

})();
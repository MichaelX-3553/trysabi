// ═══════════════════════════════════════════════════════════════
// script.js — PSY 111 Learning Experience Engine
// Built for Ayo · Federal University Lafia
// ═══════════════════════════════════════════════════════════════

// ─── CONSTANTS ───────────────────────────────────────────────

const TOTAL_QUESTIONS = 20;
const QUIZ_ANSWERS = {
  1: 'b', 2: 'c', 3: 'c', 4: 'd', 5: 'c',
  6: 'c', 7: 'b', 8: 'c', 9: 'c', 10: 'b',
  11: 'd', 12: 'b', 13: 'c', 14: 'd', 15: 'b',
  16: 'c', 17: 'c', 18: 'b', 19: 'c', 20: 'd'
};

const QUIZ_FEEDBACK = {
  1: {
    correct: "Locked in. Psychology covers behaviour AND mental processes, and it includes both humans and animals. Coon (2000) specifically included animals in the definition.",
    incorrect: "Not quite! When a scout evaluates a player, they look at both what the player DOES (behaviour) and how the player THINKS (mental processes). Psychology does exactly that, for both humans and animals. The answer is B."
  },
  2: {
    correct: "Sharp eye! The 4 goals are: Describe, Explain, Predict, and Control. 'Cure mental illness' is something clinical psychologists do, but it's not one of the four foundational goals.",
    incorrect: "Almost! Think of it like a scouting report: you describe what you see, explain why it happened, predict what happens next, and control it if possible. Curing illness isn't on that list. The answer is C."
  },
  3: {
    correct: "Clean answer. Biological approach = brain, neurons, chemistry, genetics. Whenever the explanation is about what's happening inside the nervous system, that's bio.",
    incorrect: "Close! If the explanation focuses on BRAIN CHEMISTRY and NEURONS, that's the Biological approach. Think of it like the team doctor examining a player's body to explain performance. The answer is C."
  },
  4: {
    correct: "The Ego is the basketball IQ of your mind. It says, 'I hear what you want (Id) and I hear what's right (Superego), let me find the smart play that handles both.'",
    incorrect: "Think of it this way: on the court, the Id wants to dunk on everybody (pleasure principle), the Superego says 'play fair' (morality principle), and the Ego finds the smart play that satisfies both (reality principle). The Ego is the mediator. Answer: D."
  },
  5: {
    correct: "Exactly right. The Ego develops during the Oral stage, and the Superego develops during the Phallic stage (ages 3-6).",
    incorrect: "Here's a memory trick: the Ego develops first (Oral stage, baby learning about reality). The Superego comes later (Phallic stage, ages 3-6, when the child starts learning moral standards). The answer is C."
  },
  6: {
    correct: "That's it. Naturalistic observation = watch without touching, like studying how animals behave in the wild or how people act at a party when they don't know they're being watched.",
    incorrect: "Think of it like watching a pickup game from the sideline without jumping in. You're just observing what happens naturally, no interference. That's naturalistic observation. The answer is C."
  },
  7: {
    correct: "Strong. Correlation means two things are RELATED, not that one CAUSES the other. Sleep and grades move together, but we can't say one causes the other without an experiment.",
    incorrect: "Remember: correlation is NOT causation! Just because two things happen together doesn't mean one causes the other. Ice cream sales and drowning both go up in summer. Ice cream doesn't cause drowning. This study shows a relationship (correlation), not a cause. The answer is B."
  },
  8: {
    correct: "Gestalt all day. While Structuralism broke consciousness into tiny pieces, Gestalt said 'stop dissecting everything, look at the WHOLE pattern.' Like watching a team play together instead of analyzing individual stats.",
    incorrect: "This is Gestalt's famous motto. Think about basketball: you can analyze each player's stats (structuralism), but the TEAM chemistry, the way the whole squad flows together, that's greater than the sum of individual stats. Gestalt. The answer is C."
  },
  9: {
    correct: "Clinical psychology = diagnosis and treatment of mental and emotional disorders. They're the ones working directly with patients in hospitals and clinics.",
    incorrect: "Diagnosis + treatment of mental disorders = Clinical Psychology. Clinical psychologists are to the mind what doctors are to the body. They diagnose the problem and treat it. The answer is C."
  },
  10: {
    correct: "Spot on. If identical twins raised in DIFFERENT environments still end up similar, their shared genes must be contributing. But notice: it says 'plays a role,' not 'determines everything.' Both nature and nurture matter.",
    incorrect: "Here's the logic: same DNA, different environments, but still similar outcomes? That means the DNA must be doing something. It doesn't mean environment is irrelevant, but it shows genetics plays a real role. Na both two dey work together o. The answer is B."
  },
  11: {
    correct: "The hypothalamus is the MVP of the brain. It handles almost everything that keeps you alive and feeling things. That's why psychologists find it so significant.",
    incorrect: "The hypothalamus is the Swiss Army knife of the brain: hunger, thirst, sleep, temperature, emotions, and it controls the pituitary gland (the master gland). Think of it as the team trainer who manages everything about the players' physical condition. The answer is D."
  },
  12: {
    correct: "Before conditioning, the bell means nothing to the dog. It's neutral. It only becomes a conditioned stimulus (CS) AFTER it's been paired with food repeatedly.",
    incorrect: "Before the experiment, the bell is just a random sound to the dog, no reaction, no meaning. That's what 'neutral' means. It only becomes a 'conditioned stimulus' AFTER repeated pairing with food. The answer is B."
  },
  13: {
    correct: "The child performs a behaviour (homework) to REMOVE something unpleasant (scolding). Removing something bad to increase a behaviour = negative reinforcement. This is the one everybody gets confused on exams. Not you though.",
    incorrect: "This is the trickiest concept in all of PSY 111. The child does homework (behaviour increases) to REMOVE the threat of scolding (something unpleasant goes away). Adding something good = positive reinforcement. Removing something bad = negative reinforcement. This removes something bad, so it's negative reinforcement. NOT punishment. The answer is C."
  },
  14: {
    correct: "Variable-Ratio is the champion of reinforcement schedules. Because the reward comes after an unpredictable number of responses, the organism keeps going at a steady rate, never knowing when the next reward drops.",
    incorrect: "Variable-Ratio keeps you guessing: you never know WHICH response will be rewarded, so you keep going at a steady pace. It's why slot machines are so addictive. Fixed-Interval produces scalloping (lazy, then burst). Variable-Ratio produces steady effort. The answer is D."
  },
  15: {
    correct: "Bandura said we learn by watching. You watch Thomas Agbo cook on the court, you remember the move, you try it yourself. Attention, Retention, Motor Reproduction, Reinforcement.",
    incorrect: "Bandura's whole point was that learning doesn't always require personal trial-and-error. You can learn just by watching someone else. Like watching Thomas play and then adding his moves to your own game. The answer is B."
  },
  16: {
    correct: "Selective attention = maintaining focus DESPITE distracting stimuli. You're selecting what to focus on and filtering out the rest. Freedom from distractibility.",
    incorrect: "The key word is 'ignoring distractions.' When you choose to focus on one thing while actively filtering out competing stimuli, that's selective attention. It's the 'freedom from distractibility' type. The answer is C."
  },
  17: {
    correct: "Earlier learning (driving right) is interfering with new learning (driving left). That's PROACTIVE interference: the old stuff pushes forward in time and disrupts the new.",
    incorrect: "The OLD learning is messing with the NEW learning. 'Pro' = forward. The earlier habit is reaching forward in time to disrupt what you're trying to learn now. That's proactive interference. The answer is C."
  },
  18: {
    correct: "7 plus or minus 2. That's 5 to 9 items, held by rehearsal, and they disappear the moment you stop repeating them.",
    incorrect: "STM capacity is 7 plus or minus 2 items (so 5 to 9). It's active, conscious, auditory memory, basically what you're 'holding in your head' at any moment. If you stop rehearsing, it's gone. The answer is B."
  },
  19: {
    correct: "The hypothalamus runs the hunger drive. When glucose drops too low, the hypothalamus signals that it's time to eat. This connects back to what we learned about the brain.",
    incorrect: "Remember the hypothalamus? It's the Swiss Army knife of the brain, controlling hunger, thirst, sleep, temperature, and emotions. Hunger is activated when glucose drops, and the hypothalamus detects it. The answer is C."
  },
  20: {
    correct: "AYO. You just bodied that quiz. Cardinal trait = the ONE trait that defines everything a person does. Like Gani Fawehinmi's fairness, everything he did traced back to that one value.",
    incorrect: "Cardinal traits are the rarest and most powerful. They're the single trait that dominates a person's entire life. Think of someone like Martin Luther King Jr., EVERYTHING he did revolved around equality and justice. That's a cardinal trait. The answer is D."
  }
};

const SCORE_MESSAGES = {
  high: "Ayo, you don murder this thing! 🏀 From Id, Ego, and Superego to Variable-Ratio schedules, you just ran through the ENTIRE field of psychology like it was a fast break. AD would be proud, fam. Go ace that exam.",
  good: "Solid performance, Ayo! You've got a strong grip on this material. A few concepts need another look though. Scroll back through the sections where you missed questions and hit those interactives one more time. You're close to mastery.",
  okay: "You've got the foundations, Ayo. Some areas need more time. That's completely normal for a course this massive. Focus on the sections that tripped you up, re-read the analogies, and try the interactives again. You'll get there.",
  low: "This is a starting point, not a finish line. PSY 111 is a LOT of material and nobody masters it in one read. Go back to the top, take it slow, and focus on one chapter at a time. Every concept you lock down is progress. You've got this."
};

// ─── STATE ───────────────────────────────────────────────────

const state = {
  quizAnswers: {},
  quizSubmitted: false,
  currentSection: 'hero',
  theme: 'dark'
};

// ─── UTILITIES ───────────────────────────────────────────────

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

const storage = {
  _mem: {},
  get(key) {
    try { return localStorage.getItem(key); }
    catch { return this._mem[key] || null; }
  },
  set(key, val) {
    try { localStorage.setItem(key, val); }
    catch { this._mem[key] = val; }
  },
  remove(key) {
    try { localStorage.removeItem(key); }
    catch { delete this._mem[key]; }
  }
};

// ─── THEME TOGGLE ────────────────────────────────────────────

function initTheme() {
  const saved = storage.get('sabi-psy111-theme');
  if (saved === 'light') {
    document.documentElement.classList.add('light-mode');
    state.theme = 'light';
  } else {
    state.theme = 'dark';
  }
}

function toggleTheme() {
  const isLight = document.documentElement.classList.toggle('light-mode');
  state.theme = isLight ? 'light' : 'dark';
  storage.set('sabi-psy111-theme', state.theme);
}

// ─── PROGRESS BAR + NAV SCROLL (MERGED SINGLE HANDLER) ──────

function initScrollHandler() {
  const progressFill = $('#progressFill');
  const nav = $('#nav');
  const sections = $$('section[id]');
  let rafId = null;

  const onScroll = () => {
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      // Progress bar
      if (progressFill) {
        progressFill.style.width = progress + '%';
      }

      // Nav glass effect
      if (nav) {
        if (scrollTop > 60) {
          nav.classList.add('nav--scrolled');
        } else {
          nav.classList.remove('nav--scrolled');
        }
      }

      // Current section tracking
      let currentId = 'hero';
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150) {
          currentId = section.id;
        }
      }

      if (currentId !== state.currentSection) {
        state.currentSection = currentId;
        storage.set('sabi-psy111-section', currentId);

        // Update nav dots
        $$('.nav__link').forEach(link => {
          const linkSection = link.dataset.section;
          if (linkSection === currentId) {
            link.classList.add('nav__link--active');
          } else {
            link.classList.remove('nav__link--active');
          }
        });
      }

      rafId = null;
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // Initial call
}

// ─── NAV DRAWER ──────────────────────────────────────────────

function initNavDrawer() {
  const toggle = $('#navToggle');
  const drawer = $('#navDrawer');
  const close = $('#navClose');
  const overlay = $('#navOverlay');
  const links = $$('.nav__link');

  if (!toggle || !drawer) return;

  const openDrawer = () => {
    drawer.classList.add('nav__drawer--open');
    overlay.classList.add('nav__overlay--visible');
    toggle.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
    // Focus first link
    const firstLink = $('a', drawer);
    if (firstLink) firstLink.focus();
  };

  const closeDrawer = () => {
    drawer.classList.remove('nav__drawer--open');
    overlay.classList.remove('nav__overlay--visible');
    toggle.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
    toggle.focus();
  };

  toggle.addEventListener('click', openDrawer);
  close.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  // Close on link click + smooth scroll
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      closeDrawer();
      const target = $(link.getAttribute('href'));
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 200);
      }
    });
  });

  // Close on escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('nav__drawer--open')) {
      closeDrawer();
    }
  });
}

// ─── INTERSECTION OBSERVER FOR REVEALS ───────────────────────

function initRevealObserver() {
  const reveals = $$('.reveal');
  if (!reveals.length) return;

  // Immediately reveal above-fold elements
  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 50) {
      el.classList.add('visible');
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: '0px 0px -30px 0px'
  });

  reveals.forEach(el => {
    if (!el.classList.contains('visible')) {
      observer.observe(el);
    }
  });
}

// ─── GENERIC MULTI-ROUND INTERACTIVE ENGINE ──────────────────

function createInteractive(config) {
  const {
    containerId,
    promptId,
    feedbackId,
    nextBtnId,
    resultId,
    scoreId,
    rounds,
    getButtons,
    onComplete
  } = config;

  let currentRound = 0;
  let score = 0;
  let answered = false;

  const container = $(`#${containerId}`);
  const prompt = $(`#${promptId}`);
  const feedback = $(`#${feedbackId}`);
  const nextBtn = $(`#${nextBtnId}`);
  const result = $(`#${resultId}`);
  const scoreEl = $(`#${scoreId}`);

  if (!container || !prompt || !rounds.length) return;

  const buttons = getButtons();

  const showRound = () => {
    const round = rounds[currentRound];
    prompt.textContent = round.prompt;
    feedback.textContent = '';
    feedback.className = 'interactive__feedback';
    nextBtn.style.display = 'none';
    answered = false;

    buttons.forEach(btn => {
      btn.classList.remove('interactive__btn--correct', 'interactive__btn--incorrect');
      btn.disabled = false;
    });
  };

  const handleAnswer = (selectedValue) => {
    if (answered) return;
    answered = true;

    const round = rounds[currentRound];
    const isCorrect = selectedValue === round.answer;

    if (isCorrect) score++;

    buttons.forEach(btn => {
      btn.disabled = true;
      const val = btn.dataset.answer;
      if (val === round.answer) {
        btn.classList.add('interactive__btn--correct');
      } else if (val === selectedValue && !isCorrect) {
        btn.classList.add('interactive__btn--incorrect');
      }
    });

    feedback.textContent = isCorrect ? round.correctFeedback : round.incorrectFeedback;
    feedback.className = 'interactive__feedback ' + (isCorrect ? 'interactive__feedback--correct' : 'interactive__feedback--incorrect');

    if (currentRound < rounds.length - 1) {
      nextBtn.style.display = '';
    } else {
      // Last round, show result
      setTimeout(() => {
        container.style.display = 'none';
        result.style.display = '';
        scoreEl.textContent = `${score} of ${rounds.length} correct!`;
        if (onComplete) onComplete(score, rounds.length);
      }, 1500);
    }
  };

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      handleAnswer(btn.dataset.answer);
    });
  });

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentRound++;
      showRound();
    });
  }

  showRound();
}

// ─── INTERACTIVE: IS THIS PSYCHOLOGY? ────────────────────────

function initIsPsych() {
  const rounds = [
    { prompt: "Studying why people fear spiders", answer: "true", correctFeedback: "Yes! Studying fear and phobias is a core area of psychology.", incorrectFeedback: "Actually, studying WHY people fear things is exactly what psychologists do. They investigate the causes and mechanisms of fear." },
    { prompt: "Reading someone's palm to predict their future", answer: "false", correctFeedback: "Correct! Palm reading is pseudoscience, not psychology. Psychology uses scientific methods.", incorrectFeedback: "Palm reading has no scientific basis. Psychology relies on research methods, data, and evidence. Not palm lines." },
    { prompt: "Testing whether music improves test scores", answer: "true", correctFeedback: "Yes! This is an experiment testing how a stimulus affects behaviour. Classic psychology.", incorrectFeedback: "This is actually a psychological experiment! It tests how a variable (music) affects another variable (test scores). That's the scientific method at work." },
    { prompt: "Guessing what your crush is thinking", answer: "false", correctFeedback: "Right! Guessing someone's thoughts isn't science. Psychology studies behaviour through systematic research.", incorrectFeedback: "Guessing isn't science. Psychologists study behaviour systematically. They don't just guess what people think. They design studies to find out." },
    { prompt: "Observing how rats learn to find food in a maze", answer: "true", correctFeedback: "Yes! Animal behaviour studies are a huge part of psychology. Skinner did exactly this kind of work.", incorrectFeedback: "Actually, animal experiments like maze studies are foundational to psychology! B.F. Skinner spent years studying how animals learn. The findings were then applied to humans." },
    { prompt: "Using horoscopes to explain personality", answer: "false", correctFeedback: "Correct! Horoscopes have no scientific evidence behind them. Psychology uses evidence-based methods.", incorrectFeedback: "Horoscopes are not science. Psychologists explain personality using research, theories like Allport's trait classifications, and evidence. Not star signs." },
    { prompt: "Measuring how stress affects memory", answer: "true", correctFeedback: "Yes! The relationship between stress and cognitive function is a major research area in psychology.", incorrectFeedback: "This is core psychology! Studying how stress (a variable) affects memory (another variable) uses scientific methods. Psychologists do this kind of research constantly." },
    { prompt: "Asking a traditional healer to interpret dreams", answer: "false", correctFeedback: "Right! While Freud did interpret dreams, he used a systematic method (free association). Traditional dream interpretation without scientific method isn't psychology.", incorrectFeedback: "While Freud DID study dreams, he used systematic methods like free association. Asking a traditional healer without scientific methodology isn't psychology as a science." }
  ];

  createInteractive({
    containerId: 'isPsychStage',
    promptId: 'isPsychPrompt',
    feedbackId: 'isPsychFeedback',
    nextBtnId: 'isPsychNext',
    resultId: 'isPsychResult',
    scoreId: 'isPsychScore',
    rounds,
    getButtons: () => $$('#isPsychStage .interactive__btn')
  });
}

// ─── INTERACTIVE: APPROACH MATCHER ───────────────────────────

function initApproachMatch() {
  const rounds = [
    { prompt: "A person feels anxious before public speaking because their heart races and palms sweat. A psychologist examines their adrenaline levels and nervous system activity.", answer: "biological", correctFeedback: "Biological! The focus is on the body's physical response: heart rate, sweat, adrenaline. That's biology.", incorrectFeedback: "When the explanation focuses on body chemistry, nervous system activity, and physical responses, that's the Biological approach. The answer is Biological." },
    { prompt: "A teenager is aggressive because they were frequently rewarded for fighting back at school. A psychologist looks at the consequences that maintained this behaviour.", answer: "behaviourist", correctFeedback: "Behaviourist! The focus is on rewards and consequences shaping observable behaviour.", incorrectFeedback: "This is about rewards and consequences shaping behaviour. That's the Behaviourist approach. They focus on what's reinforced and what's punished." },
    { prompt: "A woman has recurring nightmares that a psychologist traces back to repressed childhood trauma stored in her unconscious mind.", answer: "psychodynamic", correctFeedback: "Psychodynamic! Unconscious causes, childhood experiences, repressed memories. That's Freud's territory.", incorrectFeedback: "Repressed memories, unconscious causes, childhood trauma: that's the Psychodynamic approach. Freud's entire theory is built on these ideas." },
    { prompt: "A student fails exams because they use poor study strategies and can't organize information effectively. A psychologist helps them improve their thinking methods.", answer: "cognitive", correctFeedback: "Cognitive! The focus is on thinking patterns, information processing, and mental strategies.", incorrectFeedback: "When the explanation is about HOW someone thinks, processes information, and solves problems, that's Cognitive. It's about the mind as an information processor." }
  ];

  createInteractive({
    containerId: 'approachStage',
    promptId: 'approachPrompt',
    feedbackId: 'approachFeedback',
    nextBtnId: 'approachNext',
    resultId: 'approachResult',
    scoreId: 'approachScore',
    rounds,
    getButtons: () => $$('#approachStage .interactive__btn')
  });
}

// ─── INTERACTIVE: PSYCHE COURTROOM ───────────────────────────

function initPsycheCourt() {
  const scenarios = [
    {
      prompt: "You're walking past a store. You see the latest Jordans. They cost \u20A6150,000. You have \u20A6200,000 saved for school fees.",
      idText: "Buy them NOW. You NEED those Jordans. Who cares about school fees. You deserve them!",
      superText: "That money is for school. Buying shoes with it would be irresponsible. Your parents would be so disappointed.",
      options: [
        { text: "Buy a cheaper pair and save the rest for fees", value: "ego", correct: true },
        { text: "Buy them anyway, you'll find the money somehow", value: "id", correct: false },
        { text: "Don't buy any shoes at all. Shoes are vanity.", value: "superego", correct: false }
      ],
      correctFeedback: "That's the reality principle! The Ego found a way to satisfy the Id's desire (get shoes) within realistic and moral boundaries (don't blow all the school fees). Balance.",
      incorrectFeedbackId: "That's the Id winning. Pure pleasure principle, no planning. The Ego's job is to find a realistic middle ground, not just give in to impulse.",
      incorrectFeedbackSuperego: "That's the Superego being too strict. Denying yourself completely isn't balance either. The Ego's job is to find a realistic compromise, not total self-denial."
    },
    {
      prompt: "Your friend insulted you in front of everyone at the basketball court. You're furious.",
      idText: "Punch him right now! He disrespected you in front of everybody. Make him pay!",
      superText: "Turn the other cheek. Violence is always wrong, no matter what. Just forgive and forget.",
      options: [
        { text: "Walk away now, address it privately later when you're calm", value: "ego", correct: true },
        { text: "Punch him. He deserves it for the disrespect.", value: "id", correct: false },
        { text: "Say nothing ever. Just swallow it completely.", value: "superego", correct: false }
      ],
      correctFeedback: "Reality principle in action. You acknowledged the anger (Id), respected the moral boundary against violence (Superego), and found a realistic solution (address it later, privately).",
      incorrectFeedbackId: "That's the Id taking over. Pure aggression with no thought of consequences. The Ego would say: 'I hear you, but punching him gets us suspended from the court.'",
      incorrectFeedbackSuperego: "That's the Superego being too rigid. Swallowing everything builds resentment. The Ego's job is to address the issue in a way that's both realistic and acceptable."
    },
    {
      prompt: "It's 2am. You have an exam at 8am. Your friends are playing basketball outside and calling you to join.",
      idText: "GO PLAY! You've been studying all day. You NEED this. Ball is life!",
      superText: "You haven't studied enough. Study until 7am. No fun allowed. Discipline is everything.",
      options: [
        { text: "Study for 2 more hours, then sleep. Basketball can wait.", value: "ego", correct: true },
        { text: "Go play. You'll wing the exam somehow.", value: "id", correct: false },
        { text: "Study all night with zero sleep until the exam.", value: "superego", correct: false }
      ],
      correctFeedback: "Perfect Ego response. You acknowledged the desire for fun, respected the need to prepare, and made a plan that serves both: more study + rest for a clear head tomorrow.",
      incorrectFeedbackId: "That's the Id talking. 'Wing it' is the pleasure principle ignoring reality. The Ego would calculate: 'I need sleep AND study. Basketball at 2am serves neither.'",
      incorrectFeedbackSuperego: "Studying all night with NO sleep will actually hurt your exam performance. The Superego's 'no fun, maximum discipline' approach backfires here. The Ego finds the smart balance."
    }
  ];

  let currentRound = 0;
  let score = 0;

  const stage = $('#psycheStage');
  const promptEl = $('#psychePrompt');
  const idTextEl = $('#psycheIdText');
  const superTextEl = $('#psycheSuperText');
  const optionsContainer = $('#psycheOptions');
  const feedbackEl = $('#psycheFeedback');
  const nextBtn = $('#psycheNext');
  const resultEl = $('#psycheResult');
  const scoreEl = $('#psycheScore');

  if (!stage || !promptEl) return;

  const showRound = () => {
    const s = scenarios[currentRound];
    promptEl.textContent = s.prompt;
    idTextEl.textContent = s.idText;
    superTextEl.textContent = s.superText;
    feedbackEl.textContent = '';
    feedbackEl.className = 'interactive__feedback';
    nextBtn.style.display = 'none';

    optionsContainer.innerHTML = '';
    s.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'btn btn--outline interactive__btn';
      btn.dataset.answer = opt.value;
      btn.dataset.correct = opt.correct;
      btn.textContent = opt.text;
      btn.addEventListener('click', () => handlePsycheAnswer(opt, s));
      optionsContainer.appendChild(btn);
    });
  };

  const handlePsycheAnswer = (opt, scenario) => {
    const buttons = $$('.interactive__btn', optionsContainer);
    buttons.forEach(b => { b.disabled = true; });

    if (opt.correct) {
      score++;
      buttons.forEach(b => {
        if (b.dataset.correct === 'true') b.classList.add('interactive__btn--correct');
      });
      feedbackEl.textContent = scenario.correctFeedback;
      feedbackEl.className = 'interactive__feedback interactive__feedback--correct';
    } else {
      buttons.forEach(b => {
        if (b.dataset.correct === 'true') b.classList.add('interactive__btn--correct');
        if (b.dataset.answer === opt.value) b.classList.add('interactive__btn--incorrect');
      });
      const fb = opt.value === 'id' ? scenario.incorrectFeedbackId : scenario.incorrectFeedbackSuperego;
      feedbackEl.textContent = fb;
      feedbackEl.className = 'interactive__feedback interactive__feedback--incorrect';
    }

    if (currentRound < scenarios.length - 1) {
      nextBtn.style.display = '';
    } else {
      setTimeout(() => {
        stage.style.display = 'none';
        resultEl.style.display = '';
        scoreEl.textContent = `${score} of ${scenarios.length} correct!`;
      }, 1500);
    }
  };

  nextBtn.addEventListener('click', () => {
    currentRound++;
    showRound();
  });

  showRound();
}

// ─── INTERACTIVE: STAGE SEQUENCER ────────────────────────────

function initStageSeq() {
  const stages = [
    { name: 'Oral', detail: 'Birth - 1yr | Mouth | Ego develops' },
    { name: 'Anal', detail: '1 - 3yrs | Anus | Toilet training' },
    { name: 'Phallic', detail: '3 - 6yrs | Genitals | Superego develops' },
    { name: 'Latent', detail: '6 - Puberty | No sexual motivation' },
    { name: 'Genital', detail: 'Puberty+ | Mature sexuality' }
  ];

  const pool = $('#stageSeqPool');
  const track = $('#stageSeqTrack');
  const feedbackEl = $('#stageSeqFeedback');
  const resultEl = $('#stageSeqResult');
  const scoreEl = $('#stageSeqScore');

  if (!pool || !track) return;

  let nextExpected = 0;

  // Shuffle stages for the pool
  const shuffled = [...stages].sort(() => Math.random() - 0.5);

  pool.innerHTML = '';
  shuffled.forEach(stage => {
    const btn = document.createElement('button');
    btn.className = 'btn btn--outline stage-seq__card';
    btn.textContent = stage.name;
    btn.dataset.stage = stage.name;
    btn.addEventListener('click', () => handleStageTap(btn, stage));
    pool.appendChild(btn);
  });

  const handleStageTap = (btn, stage) => {
    const expected = stages[nextExpected];
    if (stage.name === expected.name) {
      // Correct
      btn.remove();
      const placed = document.createElement('div');
      placed.className = 'stage-seq__placed';
      placed.innerHTML = `<strong>${nextExpected + 1}. ${stage.name}</strong><span class="stage-seq__detail">${stage.detail}</span>`;
      track.appendChild(placed);
      feedbackEl.textContent = '';
      nextExpected++;

      if (nextExpected >= stages.length) {
        feedbackEl.textContent = 'All stages in order! You nailed it.';
        feedbackEl.className = 'interactive__feedback interactive__feedback--correct';
        setTimeout(() => {
          resultEl.style.display = '';
          scoreEl.textContent = 'Perfect sequence! All 5 stages in the correct order.';
        }, 1000);
      }
    } else {
      // Wrong
      btn.classList.add('interactive__btn--shake');
      feedbackEl.textContent = `Not yet! Think about which stage comes at position ${nextExpected + 1}.`;
      feedbackEl.className = 'interactive__feedback interactive__feedback--incorrect';
      setTimeout(() => btn.classList.remove('interactive__btn--shake'), 500);
    }
  };
}

// ─── INTERACTIVE: METHOD PICKER ──────────────────────────────

function initMethodPick() {
  const rounds = [
    { prompt: "You want to understand a patient's full psychological history to diagnose their condition. You need deep, detailed information about their background.", answer: "case-history", correctFeedback: "Case history! When you need the full picture of one person's life, you do a deep clinical investigation.", incorrectFeedback: "This calls for a case history. You need comprehensive, detailed information about one specific person. That's what case studies are designed for." },
    { prompt: "You want to study how teenagers interact at a party without them knowing they're being watched. No interference, just observation.", answer: "observation", correctFeedback: "Naturalistic observation! Watch in their natural environment without interfering. That's the method.", incorrectFeedback: "Watching behaviour in its natural setting without interference = naturalistic observation. No lab, no manipulation, just watching." },
    { prompt: "You want to know if students who exercise regularly get better grades than those who don't. You can't force students to exercise.", answer: "correlation", correctFeedback: "Correlation! You can't manipulate the variable (can't force exercise), so you measure the relationship between two existing variables.", incorrectFeedback: "Since you CAN'T control who exercises and who doesn't, you can't do an experiment. You can only measure the relationship between exercise and grades. That's correlation." },
    { prompt: "You want to PROVE that a new study technique actually causes better exam scores. You need cause-and-effect evidence.", answer: "experiment", correctFeedback: "Experiment! It's the only method that can prove cause and effect. You'd give one group the new technique (IV) and compare their scores (DV) to a control group.", incorrectFeedback: "When you need to PROVE cause and effect, only an experiment works. You'd manipulate the independent variable (study technique) and measure the dependent variable (exam scores)." }
  ];

  createInteractive({
    containerId: 'methodStage',
    promptId: 'methodPrompt',
    feedbackId: 'methodFeedback',
    nextBtnId: 'methodNext',
    resultId: 'methodResult',
    scoreId: 'methodScore',
    rounds,
    getButtons: () => $$('#methodStage .interactive__btn')
  });
}

// ─── INTERACTIVE: SCHOOL LINEUP ──────────────────────────────

function initSchoolLineup() {
  const flipCards = $$('.school-flip-card');
  const matchSection = $('#schoolMatch');
  const foundersContainer = $('#schoolMatchFounders');
  const schoolsContainer = $('#schoolMatchSchools');
  const feedbackEl = $('#schoolFeedback');
  const resultEl = $('#schoolResult');
  const scoreEl = $('#schoolScore');

  if (!flipCards.length || !matchSection) return;

  let flippedCount = 0;

  // Phase 1: Flip cards
  flipCards.forEach(card => {
    card.addEventListener('click', () => {
      if (!card.classList.contains('school-flip-card--flipped')) {
        card.classList.add('school-flip-card--flipped');
        flippedCount++;

        if (flippedCount >= flipCards.length) {
          // All flipped, show phase 2 after delay
          setTimeout(() => {
            matchSection.style.display = '';
            initSchoolMatch();
          }, 800);
        }
      }
    });
  });

  // Phase 2: Matching
  function initSchoolMatch() {
    const matchData = [
      { founder: 'Wilhelm Wundt', school: 'Structuralism' },
      { founder: 'William James', school: 'Functionalism' },
      { founder: 'Max Wertheimer', school: 'Gestalt' }
    ];

    const shuffledFounders = [...matchData].sort(() => Math.random() - 0.5);
    const shuffledSchools = [...matchData].sort(() => Math.random() - 0.5);

    let selectedFounder = null;
    let matchedCount = 0;

    foundersContainer.innerHTML = '';
    schoolsContainer.innerHTML = '';

    shuffledFounders.forEach(item => {
      const btn = document.createElement('button');
      btn.className = 'btn btn--outline school-match__item';
      btn.textContent = item.founder;
      btn.dataset.founder = item.founder;
      btn.dataset.school = item.school;
      btn.addEventListener('click', () => {
        if (btn.disabled) return;
        $$('.school-match__item', foundersContainer).forEach(b => b.classList.remove('school-match__item--selected'));
        btn.classList.add('school-match__item--selected');
        selectedFounder = item;
      });
      foundersContainer.appendChild(btn);
    });

    shuffledSchools.forEach(item => {
      const btn = document.createElement('button');
      btn.className = 'btn btn--outline school-match__item';
      btn.textContent = item.school;
      btn.dataset.school = item.school;
      btn.addEventListener('click', () => {
        if (btn.disabled || !selectedFounder) {
          if (!selectedFounder) {
            feedbackEl.textContent = 'Tap a founder first, then tap their school.';
            feedbackEl.className = 'interactive__feedback interactive__feedback--incorrect';
          }
          return;
        }

        if (selectedFounder.school === item.school) {
          // Correct match
          btn.classList.add('interactive__btn--correct');
          btn.disabled = true;
          const founderBtn = $(`.school-match__item[data-founder="${selectedFounder.founder}"]`, foundersContainer);
          if (founderBtn) {
            founderBtn.classList.add('interactive__btn--correct');
            founderBtn.classList.remove('school-match__item--selected');
            founderBtn.disabled = true;
          }
          matchedCount++;
          selectedFounder = null;
          feedbackEl.textContent = 'Matched!';
          feedbackEl.className = 'interactive__feedback interactive__feedback--correct';

          if (matchedCount >= matchData.length) {
            setTimeout(() => {
              resultEl.style.display = '';
              scoreEl.textContent = 'All 3 founders matched to their schools!';
            }, 800);
          }
        } else {
          // Wrong match
          btn.classList.add('interactive__btn--shake');
          feedbackEl.textContent = `Not quite. ${selectedFounder.founder} didn't found ${item.school}. Try again.`;
          feedbackEl.className = 'interactive__feedback interactive__feedback--incorrect';
          setTimeout(() => btn.classList.remove('interactive__btn--shake'), 500);
          selectedFounder = null;
          $$('.school-match__item', foundersContainer).forEach(b => b.classList.remove('school-match__item--selected'));
        }
      });
      schoolsContainer.appendChild(btn);
    });
  }
}

// ─── INTERACTIVE: CASE ROUTER ────────────────────────────────

function initCaseRouter() {
  const rounds = [
    { prompt: "A 10-year-old child is struggling with reading and has started skipping school. Her parents want to understand why she's having difficulty learning.", answer: "educational", correctFeedback: "Educational psychology! When a child struggles with learning or schoolwork, educational psychologists investigate the mental, physical, social, and emotional factors involved.", incorrectFeedback: "This is a learning difficulty in a school context. Educational psychologists specialize in helping children through the educational system. They'd examine what's causing the reading difficulty." },
    { prompt: "A woman experiences severe panic attacks, nightmares, and depression after being involved in a car accident six months ago.", answer: "clinical", correctFeedback: "Clinical psychology! Diagnosis and treatment of mental and emotional disorders. Panic attacks, nightmares, and depression are exactly what clinical psychologists handle.", incorrectFeedback: "Panic attacks, nightmares, and depression are mental/emotional disorders. Clinical psychologists specialize in diagnosing and treating these conditions." },
    { prompt: "A court needs to determine whether a suspect was mentally capable of understanding their actions during a crime.", answer: "forensic", correctFeedback: "Forensic psychology! Applying psychology to crime and the legal system. Evaluating a suspect's mental state for court is core forensic work.", incorrectFeedback: "When psychology meets the legal system, that's forensic psychology. Evaluating whether a suspect is mentally fit for trial is one of their key responsibilities." },
    { prompt: "A factory has seen a rise in worker injuries. Management wants to improve safety procedures and reduce workplace stress.", answer: "occupational", correctFeedback: "Occupational Health Psychology! They focus on work environments, worker safety, and well-being on the job.", incorrectFeedback: "Work environment + worker safety + well-being = Occupational Health Psychology. They apply psychology to improve the quality of work life." },
    { prompt: "Researchers want to understand how social media affects young people's political opinions and tendency to conform to group pressure.", answer: "clinical", correctFeedback: "That's actually Social Psychology! Attitudes, persuasion, conformity, and social influence are all in Social Psych's domain. But since Social wasn't an option here, Clinical was the closest alternative. The key is knowing it's about social behaviour.", incorrectFeedback: "This is really about Social Psychology (attitudes, persuasion, conformity). Among the available options, consider which specialty studies human social behaviour and group dynamics." }
  ];

  // Note: the last round is a bit of a trick since Social isn't always an option.
  // Adjusting to make it work with available buttons
  rounds[4] = {
    prompt: "A psychologist studies how growing up in rural vs urban Nigeria affects children's values, eating habits, and respect for authority.",
    answer: "educational",
    correctFeedback: "This is actually Cultural Psychology! Since it's not in the button options, the closest available fit would be Educational (studying factors affecting child development in different settings). The key concept: culture shapes behaviour.",
    incorrectFeedback: "This scenario is about how culture affects behaviour, which is Cultural Psychology. Among the options, think about which specialty studies how environment shapes children's development and learning."
  };

  // Rebuild with better-fitting rounds for available buttons
  const betterRounds = [
    { prompt: "A 10-year-old child is struggling with reading and has started skipping school. Her parents want to understand why.", answer: "educational", correctFeedback: "Educational psychology! They specialize in helping children through the educational system.", incorrectFeedback: "Learning difficulties in school = Educational Psychology. They examine mental, physical, social, and emotional factors affecting learning." },
    { prompt: "A woman has severe panic attacks and depression after a traumatic event. She needs diagnosis and treatment.", answer: "clinical", correctFeedback: "Clinical psychology! Diagnosis and treatment of mental and emotional disorders is their specialty.", incorrectFeedback: "Panic attacks and depression are mental/emotional disorders. Clinical psychologists diagnose and treat these conditions in hospitals and clinics." },
    { prompt: "A court needs to determine whether a murder suspect was mentally capable of understanding their actions during the crime.", answer: "forensic", correctFeedback: "Forensic psychology! Applying psychology to crime and the legal system is exactly what they do.", incorrectFeedback: "When psychology meets the courtroom, that's forensic psychology. Evaluating suspects' mental fitness for trial is one of their core functions." },
    { prompt: "A factory has seen a rise in worker injuries and burnout. Management wants to improve safety and reduce workplace stress.", answer: "occupational", correctFeedback: "Occupational Health Psychology! Work environment, safety, and worker well-being are their focus.", incorrectFeedback: "Workplace safety + worker well-being = Occupational Health Psychology. They apply psychology to improve quality of work life." },
    { prompt: "A teenager has been diagnosed with severe social anxiety and obsessive-compulsive behaviour. They need professional psychological help.", answer: "clinical", correctFeedback: "Clinical again! Diagnosing and treating OCD and social anxiety are classic clinical psychology cases.", incorrectFeedback: "Social anxiety and OCD are mental health disorders. Clinical psychologists specialize in diagnosing and treating exactly these kinds of conditions." }
  ];

  createInteractive({
    containerId: 'caseStage',
    promptId: 'casePrompt',
    feedbackId: 'caseFeedback',
    nextBtnId: 'caseNext',
    resultId: 'caseResult',
    scoreId: 'caseScore',
    rounds: betterRounds,
    getButtons: () => $$('#caseStage .interactive__btn')
  });
}

// ─── INTERACTIVE: NATURE OR NURTURE ──────────────────────────

function initNatureNurture() {
  const rounds = [
    { prompt: "Eye color", answer: "nature", correctFeedback: "Nature! Eye color is determined entirely by your genes.", incorrectFeedback: "Eye color is 100% genetic. You're born with it. Your environment can't change it. That's pure nature." },
    { prompt: "The language you speak", answer: "nurture", correctFeedback: "Nurture! Nobody is born speaking Yoruba or English. Language is learned from your environment.", incorrectFeedback: "You're not born speaking any language. You learn it from the people around you. Language is purely environmental (nurture)." },
    { prompt: "Intelligence level", answer: "both", correctFeedback: "Both! Genes set a range of potential, but your environment (education, nutrition, stimulation) determines where in that range you end up.", incorrectFeedback: "Intelligence is a classic 'both' answer. Genes provide a foundation, but your education, nutrition, and environment heavily influence how your intelligence develops." },
    { prompt: "Height", answer: "nature", correctFeedback: "Primarily nature! Your genes largely determine your maximum height, though nutrition plays a small role.", incorrectFeedback: "Height is primarily determined by genes from your parents. Nutrition can play a small role, but your genetic blueprint sets the main limit. That's nature." },
    { prompt: "Fear of dogs after being bitten", answer: "nurture", correctFeedback: "Nurture! You weren't born afraid of dogs. That fear was learned from a specific environmental experience.", incorrectFeedback: "Nobody is born afraid of dogs. This fear was learned from a specific experience (being bitten). That's environmental, that's nurture." },
    { prompt: "Being identical twins", answer: "nature", correctFeedback: "Nature! Identical twins result from a single zygote splitting. That's purely genetic.", incorrectFeedback: "Identical (monozygotic) twins happen when one fertilized egg splits into two. It's a genetic event, pure nature." },
    { prompt: "Being good at basketball", answer: "both", correctFeedback: "Both! Physical gifts (height, coordination) are nature. Skill development (handles, shooting, game sense) is nurture. You're the proof, Ayo.", incorrectFeedback: "Being good at basketball requires BOTH genetic gifts (height, coordination, athleticism) AND environmental factors (practice, coaching, watching games). Just like you: 6'5 is nature, guard skills are nurture." },
    { prompt: "Skin color", answer: "nature", correctFeedback: "Nature! Skin color is determined by genes that control melanin production.", incorrectFeedback: "Skin color is genetically determined. The genes you inherit from your parents control melanin production. That's nature." },
    { prompt: "Religious beliefs", answer: "nurture", correctFeedback: "Nurture! Nobody is born Christian or Muslim. Religious beliefs are learned from family, community, and culture.", incorrectFeedback: "You're not born with religious beliefs. They come from your family, community, and cultural environment. That's nurture." },
    { prompt: "Temperament at birth (being a calm or fussy baby)", answer: "nature", correctFeedback: "Primarily nature! Babies show different temperaments from birth, before environment has had much influence. Genetics plays a major role.", incorrectFeedback: "Some babies are calm from day one, others are fussy. Since this appears at birth before much environmental influence, it's primarily genetic (nature)." }
  ];

  createInteractive({
    containerId: 'nnStage',
    promptId: 'nnPrompt',
    feedbackId: 'nnFeedback',
    nextBtnId: 'nnNext',
    resultId: 'nnResult',
    scoreId: 'nnScore',
    rounds,
    getButtons: () => $$('#nnStage .interactive__btn')
  });
}

// ─── INTERACTIVE: BRAIN EXPLORER ─────────────────────────────

function initBrainExplorer() {
  const regions = $$('.brain-region');
  const infoPanel = $('#brainInfo');
  const damageToggle = $('#brainDamageToggle');

  if (!regions.length || !infoPanel) return;

  let damageMode = false;

  damageToggle.addEventListener('click', () => {
    damageMode = !damageMode;
    damageToggle.textContent = `Damage Mode: ${damageMode ? 'ON' : 'OFF'}`;
    damageToggle.setAttribute('aria-pressed', damageMode);
    damageToggle.classList.toggle('brain-explorer__damage-toggle--active', damageMode);

    // Reset info panel
    infoPanel.innerHTML = '<p class="brain-explorer__placeholder">Tap a brain region to learn about it</p>';

    // Toggle visual state on regions
    regions.forEach(r => r.classList.toggle('brain-region--damage-mode', damageMode));
  });

  regions.forEach(region => {
    region.addEventListener('click', () => {
      const name = region.dataset.name;
      const func = region.dataset.function;
      const damage = region.dataset.damage;
      const importance = region.dataset.importance;

      // Highlight active region
      regions.forEach(r => r.classList.remove('brain-region--active'));
      region.classList.add('brain-region--active');

      if (damageMode) {
        infoPanel.innerHTML = `
          <div class="brain-explorer__info-card brain-explorer__info-card--damage">
            <h4 class="brain-explorer__info-name">${name} — DAMAGED</h4>
            <p class="brain-explorer__info-text">${damage}</p>
            <p class="brain-explorer__info-note">${importance}</p>
          </div>
        `;
      } else {
        infoPanel.innerHTML = `
          <div class="brain-explorer__info-card">
            <h4 class="brain-explorer__info-name">${name}</h4>
            <p class="brain-explorer__info-text">${func}</p>
            <p class="brain-explorer__info-note">${importance}</p>
          </div>
        `;
      }
    });
  });
}

// ─── INTERACTIVE: PAVLOV'S LAB ───────────────────────────────

function initPavlovLab() {
  const phase1Rounds = [
    { prompt: "Step 1: The dog sees food. What happens automatically?", options: ["Salivation", "Nothing", "Barking"], answer: "Salivation", correctFeedback: "Correct! Food naturally triggers salivation. This is an unconditioned (unlearned) reflex.", incorrectFeedback: "Food naturally triggers salivation in dogs. It's an automatic reflex, no learning required. That's the Unconditioned Response (UR)." },
    { prompt: "Step 2: You ring a bell. The dog has NEVER heard this bell before. What happens?", options: ["Salivation", "Nothing", "Fear"], answer: "Nothing", correctFeedback: "Right! The bell means nothing to the dog yet. It's a neutral stimulus. No response.", incorrectFeedback: "The bell is completely new and meaningless to the dog. It's a neutral stimulus at this point. No salivation, no particular response." },
    { prompt: "Step 3: You ring the bell AND give food together, 20 times. Now you ring JUST the bell with no food. What happens?", options: ["Nothing", "Salivation", "Confusion"], answer: "Salivation", correctFeedback: "The dog salivates to the bell alone! Conditioning is complete. The bell is now a Conditioned Stimulus triggering a Conditioned Response.", incorrectFeedback: "After 20 pairings of bell+food, the dog's brain has linked them together. Now the bell alone triggers salivation. That's the magic of classical conditioning." }
  ];

  let currentRound = 0;
  let phase1Score = 0;

  const phase1El = $('#pavlovPhase1');
  const phase2El = $('#pavlovPhase2');
  const promptEl = $('#pavlovPrompt');
  const optionsEl = $('#pavlovOptions');
  const feedbackEl = $('#pavlovFeedback');
  const nextBtn = $('#pavlovNext');
  const resultEl = $('#pavlovResult');
  const scoreEl = $('#pavlovScore');

  if (!phase1El || !promptEl) return;

  const showPhase1Round = () => {
    const round = phase1Rounds[currentRound];
    promptEl.textContent = round.prompt;
    feedbackEl.textContent = '';
    feedbackEl.className = 'interactive__feedback';
    nextBtn.style.display = 'none';
    optionsEl.innerHTML = '';

    round.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'btn btn--outline interactive__btn';
      btn.textContent = opt;
      btn.dataset.answer = opt;
      btn.addEventListener('click', () => handlePhase1Answer(btn, opt, round));
      optionsEl.appendChild(btn);
    });
  };

  const handlePhase1Answer = (btn, selected, round) => {
    const buttons = $$('.interactive__btn', optionsEl);
    buttons.forEach(b => { b.disabled = true; });

    const isCorrect = selected === round.answer;
    if (isCorrect) phase1Score++;

    buttons.forEach(b => {
      if (b.dataset.answer === round.answer) b.classList.add('interactive__btn--correct');
      else if (b === btn && !isCorrect) b.classList.add('interactive__btn--incorrect');
    });

    feedbackEl.textContent = isCorrect ? round.correctFeedback : round.incorrectFeedback;
    feedbackEl.className = 'interactive__feedback ' + (isCorrect ? 'interactive__feedback--correct' : 'interactive__feedback--incorrect');

    if (currentRound < phase1Rounds.length - 1) {
      nextBtn.style.display = '';
    } else {
      // Move to phase 2 after delay
      nextBtn.textContent = 'Continue to Labeling Challenge →';
      nextBtn.style.display = '';
      nextBtn.onclick = () => {
        phase1El.style.display = 'none';
        phase2El.style.display = '';
        initPavlovPhase2();
      };
    }
  };

  nextBtn.addEventListener('click', () => {
    currentRound++;
    showPhase1Round();
  });

  // Phase 2: Label matching
  function initPavlovPhase2() {
    const labels = [
      { term: 'US', fullName: 'Unconditioned Stimulus' },
      { term: 'UR', fullName: 'Unconditioned Response' },
      { term: 'CS', fullName: 'Conditioned Stimulus' },
      { term: 'CR', fullName: 'Conditioned Response' }
    ];

    const elements = [
      { name: 'Food', matchTerm: 'US' },
      { name: 'Salivation to food', matchTerm: 'UR' },
      { name: 'Bell (after conditioning)', matchTerm: 'CS' },
      { name: 'Salivation to bell', matchTerm: 'CR' }
    ];

    const labelsContainer = $('#pavlovLabels');
    const elementsContainer = $('#pavlovElements');
    const matchFeedback = $('#pavlovMatchFeedback');

    let selectedLabel = null;
    let matched = 0;

    // Shuffle both
    const shuffledLabels = [...labels].sort(() => Math.random() - 0.5);
    const shuffledElements = [...elements].sort(() => Math.random() - 0.5);

    labelsContainer.innerHTML = '';
    elementsContainer.innerHTML = '';

    shuffledLabels.forEach(label => {
      const btn = document.createElement('button');
      btn.className = 'btn btn--outline pavlov-match__label';
      btn.textContent = `${label.term} (${label.fullName})`;
      btn.dataset.term = label.term;
      btn.addEventListener('click', () => {
        if (btn.disabled) return;
        $$('.pavlov-match__label', labelsContainer).forEach(b => b.classList.remove('school-match__item--selected'));
        btn.classList.add('school-match__item--selected');
        selectedLabel = label;
      });
      labelsContainer.appendChild(btn);
    });

    shuffledElements.forEach(el => {
      const btn = document.createElement('button');
      btn.className = 'btn btn--outline pavlov-match__element';
      btn.textContent = el.name;
      btn.dataset.matchTerm = el.matchTerm;
      btn.addEventListener('click', () => {
        if (btn.disabled || !selectedLabel) {
          if (!selectedLabel) {
            matchFeedback.textContent = 'Tap a term first (US, UR, CS, or CR), then tap the matching element.';
            matchFeedback.className = 'interactive__feedback interactive__feedback--incorrect';
          }
          return;
        }

        if (selectedLabel.term === el.matchTerm) {
          btn.classList.add('interactive__btn--correct');
          btn.disabled = true;
          const labelBtn = $(`.pavlov-match__label[data-term="${selectedLabel.term}"]`, labelsContainer);
          if (labelBtn) {
            labelBtn.classList.add('interactive__btn--correct');
            labelBtn.classList.remove('school-match__item--selected');
            labelBtn.disabled = true;
          }
          matched++;
          selectedLabel = null;
          matchFeedback.textContent = 'Matched!';
          matchFeedback.className = 'interactive__feedback interactive__feedback--correct';

          if (matched >= labels.length) {
            setTimeout(() => {
              resultEl.style.display = '';
              scoreEl.textContent = `Phase 1: ${phase1Score}/3 | Phase 2: All 4 terms matched! Great work.`;
            }, 800);
          }
        } else {
          btn.classList.add('interactive__btn--shake');
          matchFeedback.textContent = `Not quite. ${selectedLabel.term} doesn't match "${el.name}". Try again.`;
          matchFeedback.className = 'interactive__feedback interactive__feedback--incorrect';
          setTimeout(() => btn.classList.remove('interactive__btn--shake'), 500);
          selectedLabel = null;
          $$('.pavlov-match__label', labelsContainer).forEach(b => b.classList.remove('school-match__item--selected'));
        }
      });
      elementsContainer.appendChild(btn);
    });
  }

  showPhase1Round();
}

// ─── INTERACTIVE: REINFORCEMENT CLASSIFIER ───────────────────

function initReinforceClass() {
  const rounds = [
    { prompt: "A coach praises a player for a great defensive play. The player starts playing better defense more often.", answer: "positive", correctFeedback: "Positive reinforcement! Something pleasant (praise) was ADDED after the desired behaviour. Result: behaviour increases.", incorrectFeedback: "Something pleasant (praise) was ADDED. The behaviour (good defense) increased. Adding something good = positive reinforcement." },
    { prompt: "A student does their homework to avoid getting scolded by their teacher.", answer: "negative", correctFeedback: "Negative reinforcement! The student performs a behaviour (homework) to REMOVE something unpleasant (scolding). Behaviour increases.", incorrectFeedback: "The student does homework to REMOVE the threat of scolding. Something unpleasant is being removed. Behaviour increases. That's negative reinforcement, NOT punishment." },
    { prompt: "A child is grounded for breaking a neighbour's window. They stop throwing balls near windows.", answer: "punishment", correctFeedback: "Punishment! Something unpleasant (grounding) was ADDED after the undesired behaviour. Result: behaviour decreases.", incorrectFeedback: "Something unpleasant (grounding) was ADDED to decrease the behaviour (throwing balls near windows). Adding something bad = punishment." },
    { prompt: "A rat in Skinner's box presses a lever to stop a painful electric shock.", answer: "negative", correctFeedback: "Negative reinforcement! The rat performs a behaviour (lever press) to REMOVE something unpleasant (shock). Behaviour increases.", incorrectFeedback: "The rat presses the lever to STOP the shock. Something unpleasant is being removed. The lever-pressing behaviour increases. That's negative reinforcement." },
    { prompt: "A worker receives a bonus after exceeding their sales target. They continue working hard.", answer: "positive", correctFeedback: "Positive reinforcement! Something pleasant (bonus) was ADDED after the desired behaviour (high sales). Behaviour increases.", incorrectFeedback: "A bonus (something pleasant) was ADDED after good performance. The behaviour (working hard) increases. Adding something good = positive reinforcement." },
    { prompt: "A teenager loses their phone privileges for a week after coming home past curfew. They start coming home on time.", answer: "punishment", correctFeedback: "Punishment! Something pleasant (phone) was REMOVED after undesired behaviour. Result: behaviour decreases.", incorrectFeedback: "Something pleasant (phone privileges) was REMOVED to decrease the behaviour (staying out late). Removing something good to decrease behaviour = punishment." }
  ];

  createInteractive({
    containerId: 'reinforceStage',
    promptId: 'reinforcePrompt',
    feedbackId: 'reinforceFeedback',
    nextBtnId: 'reinforceNext',
    resultId: 'reinforceResult',
    scoreId: 'reinforceScore',
    rounds,
    getButtons: () => $$('#reinforceStage .interactive__btn')
  });
}

// ─── INTERACTIVE: LEARNING TYPE IDENTIFIER ───────────────────

function initLearningType() {
  const rounds = [
    { prompt: "A child sees their older sibling get praised for cleaning up. Without being told, the child starts cleaning too.", answer: "observational", correctFeedback: "Observational learning! The child watched someone else get reinforced and copied the behaviour. No personal trial and error.", incorrectFeedback: "The child didn't experience consequences themselves. They watched someone ELSE get praised and copied the behaviour. That's observational (social) learning." },
    { prompt: "A dog salivates when it hears the can opener because the sound has been paired with feeding time hundreds of times.", answer: "classical", correctFeedback: "Classical conditioning! The can opener (CS) was repeatedly paired with food (US), now it triggers salivation (CR) on its own.", incorrectFeedback: "A neutral sound (can opener) paired repeatedly with food = classical conditioning. The sound now triggers an automatic response (salivation)." },
    { prompt: "A student studies harder after receiving an A on their last test. The good grade motivated them to keep working.", answer: "operant", correctFeedback: "Operant conditioning! The good grade (positive reinforcement) followed the studying behaviour, increasing its frequency.", incorrectFeedback: "The student's behaviour (studying) was followed by a positive consequence (good grade), which increased the behaviour. That's operant conditioning: learning from consequences." },
    { prompt: "A teenager starts dressing like their favourite musician after following them on social media.", answer: "observational", correctFeedback: "Observational learning! The teen observed a model (the musician) and imitated their style. Classic social learning.", incorrectFeedback: "The teenager watched a model (musician) and copied their style. No personal reward or punishment, just observation and imitation. That's observational learning." },
    { prompt: "A toddler touches a hot stove and never touches it again. The pain taught them.", answer: "operant", correctFeedback: "Operant conditioning! The behaviour (touching stove) was followed by a negative consequence (pain/punishment). The behaviour decreased.", incorrectFeedback: "The toddler performed an action (touched stove) and experienced a consequence (pain). This consequence decreased the behaviour. That's operant conditioning." },
    { prompt: "Your heart races whenever you hear a dentist's drill because you associate the sound with pain from past visits.", answer: "classical", correctFeedback: "Classical conditioning! The drill sound (CS) has been paired with pain (US) during past visits. Now the sound alone triggers anxiety (CR).", incorrectFeedback: "The drill sound was originally neutral but got paired with pain during dental visits. Now the sound alone triggers an anxiety response. That's classical conditioning." }
  ];

  createInteractive({
    containerId: 'learningTypeStage',
    promptId: 'learningTypePrompt',
    feedbackId: 'learningTypeFeedback',
    nextBtnId: 'learningTypeNext',
    resultId: 'learningTypeResult',
    scoreId: 'learningTypeScore',
    rounds,
    getButtons: () => $$('#learningTypeStage .interactive__btn')
  });
}

// ─── INTERACTIVE: ATTENTION TYPE SORTER ──────────────────────

function initAttentionSort() {
  const rounds = [
    { prompt: "A goalkeeper watches only the ball during a penalty kick, blocking out the crowd and the kicker's movements.", answer: "focused", correctFeedback: "Focused attention! Responding to one specific stimulus with full concentration.", incorrectFeedback: "Locking onto one specific stimulus (the ball) = focused attention. It's the simplest and most basic type." },
    { prompt: "A security guard monitors CCTV cameras for 8 hours straight, watching for any unusual activity.", answer: "sustained", correctFeedback: "Sustained attention! Maintaining consistent focus over a long, repetitive period.", incorrectFeedback: "Keeping focus over a long, continuous period without breaks = sustained attention. It's about endurance of concentration." },
    { prompt: "A student successfully studies in a noisy cafeteria, completely ignoring conversations and background music.", answer: "selective", correctFeedback: "Selective attention! Maintaining focus DESPITE distracting stimuli. Freedom from distractibility.", incorrectFeedback: "Focusing on studying while filtering out noise and distractions = selective attention. You're SELECTING what to process and rejecting the rest." },
    { prompt: "A chef moves between checking the oven timer, stirring the sauce, and chopping vegetables, switching tasks constantly.", answer: "alternating", correctFeedback: "Alternating attention! Shifting focus between different tasks that require different cognitive demands.", incorrectFeedback: "Moving back and forth between different tasks, each requiring a different type of thinking = alternating attention. The key is the SWITCHING." },
    { prompt: "A drummer plays a complex rhythm pattern with both hands and feet while simultaneously singing the lyrics.", answer: "divided", correctFeedback: "Divided attention! Responding to multiple tasks at the SAME TIME. This is the highest and most difficult level.", incorrectFeedback: "Performing multiple complex tasks simultaneously = divided attention. It's the highest level and the hardest to achieve. Your drumming experience is a perfect example!" }
  ];

  createInteractive({
    containerId: 'attentionStage',
    promptId: 'attentionPrompt',
    feedbackId: 'attentionFeedback',
    nextBtnId: 'attentionNext',
    resultId: 'attentionResult',
    scoreId: 'attentionScore',
    rounds,
    getButtons: () => $$('#attentionStage .interactive__btn')
  });
}

// ─── INTERACTIVE: MEMORY OR FORGETTING MATCH ─────────────────

function initMemForget() {
  const rounds = [
    { prompt: "You learned French in secondary school. Now you're learning Spanish, but you keep accidentally using French words instead of Spanish ones.", answer: "proactive", correctFeedback: "Proactive interference! The OLD learning (French) is pushing FORWARD and disrupting your NEW learning (Spanish).", incorrectFeedback: "The earlier learning (French) is interfering with the new learning (Spanish). Old disrupting new = PRO-active (forward-acting) interference." },
    { prompt: "You glance at a crowded room and for a split second you see everything clearly, but most of the details vanish almost immediately.", answer: "sensory", correctFeedback: "Sensory Register! Huge capacity but extremely brief. You captured everything for a fraction of a second, then most of it was lost.", incorrectFeedback: "That split-second snapshot of the entire room = sensory register. Massive capacity, but the information vanishes almost instantly." },
    { prompt: "You crammed chemistry formulas all night, passed the test the next morning, but a week later you can't remember a single formula.", answer: "stm", correctFeedback: "Short-Term Memory! You held the formulas through rehearsal (cramming), but they never made it to long-term memory. Once rehearsal stopped, trace decay took over.", incorrectFeedback: "Cramming keeps info in STM through rehearsal. But without elaborate rehearsal (connecting it to meaningful knowledge), it never reaches LTM. Once the exam ended, trace decay erased it." },
    { prompt: "You moved to a new house and memorized the new address. After a few months, you can't remember your old address anymore.", answer: "retroactive", correctFeedback: "Retroactive interference! The NEW learning (new address) pushed BACKWARD and displaced your OLD memory (old address).", incorrectFeedback: "New info (new address) is disrupting old info (old address). New disrupting old = RETRO-active (backward-acting) interference." },
    { prompt: "You can still ride a bicycle perfectly even though you haven't ridden one in 5 years.", answer: "ltm", correctFeedback: "Long-Term Memory! Motor skills stored through meaningful, elaborate practice become relatively permanent. This knowledge has meaning and is deeply encoded.", incorrectFeedback: "Bicycle riding is stored in LTM through years of meaningful practice. It's connected to real physical experience, so it persists without further rehearsal. That's the power of LTM." },
    { prompt: "You studied for 6 exams, but during the last exam, you keep mixing up information from subject 5 with subject 6.", answer: "retroactive", correctFeedback: "Retroactive interference! The later-studied material (subject 6) is competing with and confusing the earlier-studied material (subject 5).", incorrectFeedback: "The most recently studied material is interfering with previously studied material. New disrupting old = retroactive interference. The competition between subjects causes confusion." }
  ];

  createInteractive({
    containerId: 'memForgetStage',
    promptId: 'memForgetPrompt',
    feedbackId: 'memForgetFeedback',
    nextBtnId: 'memForgetNext',
    resultId: 'memForgetResult',
    scoreId: 'memForgetScore',
    rounds,
    getButtons: () => $$('#memForgetStage .interactive__btn')
  });
}

// ─── INTERACTIVE: MOTIVE CLASSIFIER ──────────────────────────

function initMotiveClass() {
  const rounds = [
    { prompt: "You eat because your blood sugar dropped and your stomach is growling.", answer: "physiological", correctFeedback: "Physiological! Hunger is a primary survival motive activated by the hypothalamus when glucose levels drop.", incorrectFeedback: "Hunger triggered by low blood sugar is a physiological (primary/survival) motive. It's unlearned and essential for staying alive." },
    { prompt: "You explore a new part of campus you've never been to, just because you're curious about what's there.", answer: "stimulus", correctFeedback: "Stimulus motive! Exploration and curiosity are innate drives that depend on external stimulation.", incorrectFeedback: "Curiosity and exploration are stimulus motives. They're innate but triggered by external novelty. You're not exploring to survive; you're exploring because something new is out there." },
    { prompt: "You study extra hard because you want to have the highest grade in the entire class, not just pass.", answer: "social", correctFeedback: "Social motive! The achievement motive is the need to excel and measure up to high self-imposed standards.", incorrectFeedback: "Wanting to be THE BEST, not just okay, is the achievement motive. That's a social motive because it's about your standards relative to others." },
    { prompt: "A baby cries and reaches out to be held by its mother.", answer: "physiological", correctFeedback: "Physiological! The contact/maternal drive is a primary survival motive. Babies need physical touch for healthy development.", incorrectFeedback: "The need for physical contact and maternal care is a primary physiological motive. It's essential for infant survival and development." },
    { prompt: "You feel restless and agitated after sitting in lectures all day. You NEED to move.", answer: "stimulus", correctFeedback: "Stimulus motive! The activity motive is the tendency to avoid idleness. Your body needs to move.", incorrectFeedback: "The urge to move and avoid sitting still = activity motive. It's a stimulus motive because it's innate but triggered by the external condition of being sedentary." },
    { prompt: "You join a study group because you don't want to prepare for exams alone. Being around others reduces your anxiety.", answer: "social", correctFeedback: "Social motive! The affiliative motive is the need to be with others, especially during stressful situations.", incorrectFeedback: "Seeking the company of others during stress = affiliative motive. It's a social motive about relationships and belonging to a supportive group." },
    { prompt: "A politician campaigns aggressively, spending millions, to win an election and gain control over government decisions.", answer: "social", correctFeedback: "Social motive! The power motive is the need to gain power and control over others.", incorrectFeedback: "The drive to gain power and control over others = power motive. It's a social motive because it's about your relationship to and influence over other people." },
    { prompt: "You pull your hand away from a hot plate before you even consciously register the pain.", answer: "physiological", correctFeedback: "Physiological! The pain motive leads to avoidance learning. It's crucial for survival.", incorrectFeedback: "The pain motive is physiological, it's an unlearned survival mechanism. You don't need to be taught to pull away from heat. Your body does it automatically." }
  ];

  createInteractive({
    containerId: 'motiveStage',
    promptId: 'motivePrompt',
    feedbackId: 'motiveFeedback',
    nextBtnId: 'motiveNext',
    resultId: 'motiveResult',
    scoreId: 'motiveScore',
    rounds,
    getButtons: () => $$('#motiveStage .interactive__btn')
  });
}

// ─── INTERACTIVE: TRAIT CLASSIFIER ───────────────────────────

function initTraitClass() {
  const rounds = [
    { prompt: "Martin Luther King Jr.'s entire life revolved around one thing: equality and justice. Every speech, every march, every decision traced back to this single value.", answer: "cardinal", correctFeedback: "Cardinal trait! One single dominant trait that ALL of a person's activities revolve around. MLK's was equality/justice.", incorrectFeedback: "When ONE trait dominates a person's ENTIRE life, that's a cardinal trait. MLK's fight for equality wasn't just a hobby; it was the center of everything he did." },
    { prompt: "Your friend is known for being funny, kind, hardworking, and always late. These are the first things anyone thinks of when they hear their name.", answer: "central", correctFeedback: "Central traits! The core traits that characterize someone's personality. Usually 5-10 of them. They're what comes to mind first.", incorrectFeedback: "The traits people immediately associate with you = central traits. They're the core of your personality, the first things that pop into someone's head at the mention of your name." },
    { prompt: "Your usually serious uncle only cracks jokes at family parties. In every other context, he's completely serious.", answer: "secondary", correctFeedback: "Secondary trait! A less consistent quality that only appears in specific situations. Not a core part of who he is.", incorrectFeedback: "A trait that only shows up in certain situations = secondary trait. Your uncle's humor only appears at parties. It's not his defining characteristic." },
    { prompt: "Nelson Mandela dedicated 27 years in prison and his entire political career to one cause: ending apartheid and fighting for freedom.", answer: "cardinal", correctFeedback: "Cardinal trait! Mandela's entire existence was organized around the fight for freedom and equality. One dominant, all-encompassing trait.", incorrectFeedback: "When a person's ENTIRE life orbits one single value or cause, that's a cardinal trait. Mandela's was freedom/equality. Everything he did served that one purpose." },
    { prompt: "A classmate you've known for 3 years is consistently described as confident, creative, loyal, and competitive.", answer: "central", correctFeedback: "Central traits! These are the consistent, core characteristics that define your classmate across most situations.", incorrectFeedback: "Consistent traits that define someone across most situations = central traits. These are what people immediately think of when that person's name comes up." },
    { prompt: "You give spare change to beggars when you're in a particularly good mood, but you don't normally go out of your way to help strangers.", answer: "secondary", correctFeedback: "Secondary trait! Generosity here is situational and inconsistent. It only appears under specific conditions (good mood), not as a core part of identity.", incorrectFeedback: "This helping behavior only appears sometimes, when mood allows. It's not a core, consistent trait. Situational and inconsistent = secondary trait." }
  ];

  createInteractive({
    containerId: 'traitStage',
    promptId: 'traitPrompt',
    feedbackId: 'traitFeedback',
    nextBtnId: 'traitNext',
    resultId: 'traitResult',
    scoreId: 'traitScore',
    rounds,
    getButtons: () => $$('#traitStage .interactive__btn')
  });
}

// ─── CHECKPOINT HANDLERS ─────────────────────────────────────

function initCheckpoints() {
  // Reveal-answer buttons
  $$('.checkpoint__reveal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const qNum = btn.dataset.cpReveal;
      const answer = $(`#cpAnswer${qNum}`);
      if (answer) {
        answer.style.display = '';
        btn.style.display = 'none';
      }
    });
  });

  // Multiple-choice checkpoint questions
  $$('.checkpoint__opt').forEach(btn => {
    btn.addEventListener('click', () => {
      const qNum = btn.dataset.cpAnswer;
      const feedbackEl = $(`#cpFeedback${qNum}`);
      const allOpts = $$(`[data-cp-answer="${qNum}"]`);

      // Disable all options for this question
      allOpts.forEach(b => { b.disabled = true; });

      const isCorrect = btn.dataset.correct === 'true';

      if (isCorrect) {
        btn.classList.add('interactive__btn--correct');
        if (feedbackEl) {
          feedbackEl.textContent = 'Correct!';
          feedbackEl.className = 'checkpoint__feedback checkpoint__feedback--correct';
        }
      } else {
        btn.classList.add('interactive__btn--incorrect');
        // Highlight correct answer
        allOpts.forEach(b => {
          if (b.dataset.correct === 'true') b.classList.add('interactive__btn--correct');
        });
        if (feedbackEl) {
          feedbackEl.textContent = 'Not quite. The correct answer is highlighted above.';
          feedbackEl.className = 'checkpoint__feedback checkpoint__feedback--incorrect';
        }
      }
    });
  });
}

// ... QUIZ ENGINE .............................................

function initQuiz() {
  const options = $$('.quiz-option');
  const submitBtn = $('#quizSubmitBtn');
  const submitHint = $('#quizSubmitHint');
  const progressText = $('#quizAnswered');
  const resultsArea = $('#quizResults');
  const scoreNum = $('#quizScoreNumber');
  const scorePercent = $('#quizScorePercent');
  const scoreMsg = $('#quizScoreMessage');
  const retryBtn = $('#quizRetryBtn');

  if (!options.length || !submitBtn) return;

  // Load saved state if it exists
  const savedQuiz = storage.get('sabi-psy111-quiz');
  if (savedQuiz) {
    try {
      const parsed = JSON.parse(savedQuiz);
      state.quizAnswers = parsed.answers || {};
      state.quizSubmitted = parsed.submitted || false;
      
      // Restore selections
      Object.entries(state.quizAnswers).forEach(([q, val]) => {
        const btn = $(`.quiz-option[data-q="${q}"][data-value="${val}"]`);
        if (btn) {
          btn.classList.add('quiz-option--selected');
          btn.setAttribute('aria-checked', 'true');
        }
      });
      
      updateProgress();
      if (state.quizSubmitted) {
        showResults(parsed.score, parsed.total);
        applyFeedback();
      }
    } catch(e) {}
  }

  function updateProgress() {
    const answeredCount = Object.keys(state.quizAnswers).length;
    if (progressText) progressText.textContent = answeredCount;
    
    if (answeredCount === TOTAL_QUESTIONS && !state.quizSubmitted) {
      submitBtn.disabled = false;
      submitHint.textContent = "All questions answered. Ready to submit.";
      submitBtn.classList.add('btn--pulse');
    } else if (!state.quizSubmitted) {
      submitBtn.disabled = true;
      submitHint.textContent = `Answer all ${TOTAL_QUESTIONS} questions to submit.`;
      submitBtn.classList.remove('btn--pulse');
    }
  }

  options.forEach(opt => {
    opt.addEventListener('click', () => {
      if (state.quizSubmitted) return; // Locked after submit

      const q = opt.dataset.q;
      const val = opt.dataset.value;
      
      // Clear siblings in this question
      $$(`.quiz-option[data-q="${q}"]`).forEach(sibling => {
        sibling.classList.remove('quiz-option--selected');
        sibling.setAttribute('aria-checked', 'false');
      });
      
      // Select this one
      opt.classList.add('quiz-option--selected');
      opt.setAttribute('aria-checked', 'true');
      
      state.quizAnswers[q] = val;
      updateProgress();
      
      // Save state
      storage.set('sabi-psy111-quiz', JSON.stringify({
        answers: state.quizAnswers,
        submitted: false
      }));
    });
  });

  submitBtn.addEventListener('click', () => {
    if (Object.keys(state.quizAnswers).length < TOTAL_QUESTIONS) return;
    
    let score = 0;
    
    // Calculate score
    for (let i = 1; i <= TOTAL_QUESTIONS; i++) {
      if (state.quizAnswers[i] === QUIZ_ANSWERS[i]) {
        score++;
      }
    }
    
    state.quizSubmitted = true;
    submitBtn.disabled = true;
    submitBtn.textContent = "Submitted";
    submitBtn.classList.remove('btn--pulse');
    
    // Save final state
    storage.set('sabi-psy111-quiz', JSON.stringify({
      answers: state.quizAnswers,
      score: score,
      total: TOTAL_QUESTIONS,
      submitted: true,
      timestamp: Date.now()
    }));
    
    applyFeedback();
    showResults(score, TOTAL_QUESTIONS);
    
    // Trigger celebration if passed
    if (score >= 12) {
      const celeb = $('#celebration');
      if (celeb) celeb.style.display = '';
      fireConfetti();
    }
    
    // Scroll to results
    setTimeout(() => {
      resultsArea.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 500);
  });

  function applyFeedback() {
    for (let i = 1; i <= TOTAL_QUESTIONS; i++) {
      const qCard = $(`.quiz-card[data-question="${i}"]`);
      if (!qCard) continue;
      
      const userAnswer = state.quizAnswers[i];
      const correctAnswer = QUIZ_ANSWERS[i];
      const isCorrect = userAnswer === correctAnswer;
      const feedbackEl = $('.quiz-card__feedback', qCard);
      
      // Disable all options
      $$('.quiz-option', qCard).forEach(opt => opt.disabled = true);
      
      // Highlight correct/incorrect options
      const selectedBtn = $(`.quiz-option[data-q="${i}"][data-value="${userAnswer}"]`);
      const correctBtn = $(`.quiz-option[data-q="${i}"][data-value="${correctAnswer}"]`);
      
      if (isCorrect) {
        if (selectedBtn) selectedBtn.classList.add('quiz-option--correct');
        qCard.classList.add('quiz-card--correct');
        if (feedbackEl) {
          feedbackEl.textContent = QUIZ_FEEDBACK[i].correct;
          feedbackEl.className = 'quiz-card__feedback quiz-card__feedback--correct visible';
        }
      } else {
        if (selectedBtn) selectedBtn.classList.add('quiz-option--incorrect');
        if (correctBtn) correctBtn.classList.add('quiz-option--correct');
        qCard.classList.add('quiz-card--incorrect');
        if (feedbackEl) {
          feedbackEl.textContent = QUIZ_FEEDBACK[i].incorrect;
          feedbackEl.className = 'quiz-card__feedback quiz-card__feedback--incorrect visible';
        }
      }
    }
  }

  function showResults(score, total) {
    resultsArea.style.display = '';
    scoreNum.textContent = score;
    const percent = Math.round((score / total) * 100);
    scorePercent.textContent = `${percent}%`;
    
    // Set ring color
    const ring = $('.quiz-results__score-ring');
    if (ring) {
      if (percent >= 90) ring.style.borderColor = 'var(--success)';
      else if (percent >= 60) ring.style.borderColor = 'var(--info)';
      else if (percent >= 30) ring.style.borderColor = 'var(--warning)';
      else ring.style.borderColor = 'var(--error)';
    }
    
    if (percent >= 90) scoreMsg.textContent = SCORE_MESSAGES.high;
    else if (percent >= 60) scoreMsg.textContent = SCORE_MESSAGES.good;
    else if (percent >= 30) scoreMsg.textContent = SCORE_MESSAGES.okay;
    else scoreMsg.textContent = SCORE_MESSAGES.low;
  }

  if (retryBtn) {
    retryBtn.addEventListener('click', () => {
      // Clear state
      state.quizAnswers = {};
      state.quizSubmitted = false;
      storage.remove('sabi-psy111-quiz');
      
      // Reset DOM
      options.forEach(opt => {
        opt.classList.remove('quiz-option--selected', 'quiz-option--correct', 'quiz-option--incorrect');
        opt.setAttribute('aria-checked', 'false');
        opt.disabled = false;
      });
      
      $$('.quiz-card').forEach(card => {
        card.classList.remove('quiz-card--correct', 'quiz-card--incorrect');
        const fb = $('.quiz-card__feedback', card);
        if (fb) {
          fb.className = 'quiz-card__feedback';
          fb.textContent = '';
        }
      });
      
      submitBtn.textContent = 'Submit Quiz';
      resultsArea.style.display = 'none';
      const celeb = $('#celebration');
      if (celeb) celeb.style.display = 'none';
      
      updateProgress();
      
      // Scroll back to top of quiz
      const quizSection = $('#sec-quiz');
      if (quizSection) quizSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
}

// ... CONFETTI ENGINE .........................................

function fireConfetti() {
  const container = $('#confettiContainer');
  // Check user preference for motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!container || prefersReduced || !container.animate) return;
  
  const colors = ['var(--accent)', 'var(--tertiary)', 'var(--success)', 'var(--info)'];
  const pieceCount = window.innerWidth < 768 ? 20 : 35;
  
  for (let i = 0; i < pieceCount; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    
    // Randomize properties
    const size = Math.random() * 8 + 6; // 6px to 14px
    const bg = colors[Math.floor(Math.random() * colors.length)];
    const left = Math.random() * 100;
    const duration = Math.random() * 2000 + 2000; // 2s to 4s
    const delay = Math.random() * 500;
    const rotateStart = Math.random() * 360;
    const rotateEnd = rotateStart + (Math.random() > 0.5 ? 720 : -720);
    const xDrift = (Math.random() - 0.5) * 100;
    
    piece.style.cssText = `
      position: absolute;
      top: -20px;
      left: ${left}%;
      width: ${size}px;
      height: ${size * (Math.random() > 0.5 ? 1 : 2.5)}px;
      background: ${bg};
      border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
      z-index: 1000;
      pointer-events: none;
    `;
    
    container.appendChild(piece);
    
    const animation = piece.animate([
      { transform: `translate3d(0, 0, 0) rotate(${rotateStart}deg)`, opacity: 1 },
      { transform: `translate3d(${xDrift}px, 110vh, 0) rotate(${rotateEnd}deg)`, opacity: 0 }
    ], {
      duration: duration,
      delay: delay,
      easing: 'cubic-bezier(.37,0,.63,1)'
    });
    
    animation.onfinish = () => piece.remove();
  }
}

// ... GLOSSARY ................................................

function initGlossary() {
  const trigger = $('#glossaryTrigger');
  const panel = $('#glossaryPanel');
  const close = $('#glossaryClose');
  const overlay = $('#glossaryOverlay');
  const searchInput = $('#glossarySearch');
  const items = $$('.glossary-item');

  if (!trigger || !panel) return;

  const openGlossary = () => {
    panel.classList.add('glossary-panel--open');
    overlay.classList.add('glossary-overlay--visible');
    panel.setAttribute('aria-hidden', 'false');
    if (searchInput) {
      setTimeout(() => searchInput.focus(), 100);
    }
  };

  const closeGlossary = () => {
    panel.classList.remove('glossary-panel--open');
    overlay.classList.remove('glossary-overlay--visible');
    panel.setAttribute('aria-hidden', 'true');
    trigger.focus();
  };

  trigger.addEventListener('click', openGlossary);
  close.addEventListener('click', closeGlossary);
  overlay.addEventListener('click', closeGlossary);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && panel.classList.contains('glossary-panel--open')) {
      closeGlossary();
    }
  });

  // Search filtering
  if (searchInput && items.length) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase().trim();
      items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(term)) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }
}

// ... WELCOME BACK SYSTEM .....................................

function initWelcomeBack() {
  const overlay = $('#welcomeBack');
  const contBtn = $('#wbContinue');
  const resetBtn = $('#wbRestart');
  const sectionText = $('#wbSection');
  
  if (!overlay) return;
  
  const savedSectionId = storage.get('sabi-psy111-section');
  
  if (savedSectionId && savedSectionId !== 'hero') {
    // Map IDs to friendly names
    const names = {
      'sec-what-is-psych': 'Chapter 1: What is Psychology',
      'sec-approaches': 'Chapter 2: Four Approaches',
      'sec-freud-psyche': 'Chapter 3: Freud\'s Three Voices',
      'sec-psychosexual': 'Chapter 4: Growing Up Freud',
      'sec-methods': 'Chapter 5: Research Methods',
      'sec-schools': 'Chapter 6: Schools of Psychology',
      'sec-specialties': 'Chapter 7: Where Psychology Works',
      'sec-nature-nurture': 'Chapter 8: Nature vs Nurture',
      'sec-brain': 'Chapter 9: The Brain',
      'sec-classical': 'Chapter 10: Pavlov\'s Dog',
      'sec-operant': 'Chapter 11: Skinner\'s Box',
      'sec-observational': 'Chapter 12: Learning by Watching',
      'sec-attention': 'Chapter 13: Attention',
      'sec-memory-forgetting': 'Chapter 14: Remember & Forget',
      'sec-motivation': 'Chapter 15: Motivation',
      'sec-personality': 'Chapter 16: Personality',
      'sec-quiz': 'The Final Quiz'
    };
    
    if (names[savedSectionId]) {
      sectionText.textContent = names[savedSectionId];
      overlay.style.display = 'flex';
      
      contBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
        const target = $(`#${savedSectionId}`);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      });
      
      resetBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
        storage.set('sabi-psy111-section', 'hero');
        window.scrollTo(0, 0);
      });
    }
  }
}

// ... RESET SYSTEM ............................................

function initReset() {
  const resetBtn = $('#resetProgress');
  if (!resetBtn) return;
  
  resetBtn.addEventListener('click', () => {
    if (confirm('Reset all quiz progress and saved checkpoints?')) {
      localStorage.removeItem('sabi-psy111-section');
      localStorage.removeItem('sabi-psy111-quiz');
      // Intentionally not removing theme preference
      window.location.reload();
    }
  });
}

// ─── INITIALIZATION ──────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  // Core Systems
  initTheme();
  $('#themeToggle')?.addEventListener('click', toggleTheme);
  
  initScrollHandler();
  initNavDrawer();
  initRevealObserver(); // Fallback handles IO reveals
  initGlossary();
  initWelcomeBack();
  initReset();
  
  // Teaching Interactives
  initIsPsych();
  initApproachMatch();
  initPsycheCourt();
  initStageSeq();
  initMethodPick();
  initSchoolLineup();
  initCaseRouter();
  initNatureNurture();
  initBrainExplorer();
  initPavlovLab();
  initReinforceClass();
  initLearningType();
  initAttentionSort();
  initMemForget();
  initMotiveClass();
  initTraitClass();
  
  // Checkpoints & Quiz
  initCheckpoints();
  initQuiz();
  
  // Nuclear Failsafe: Ensure content isn't invisible if everything crashes
  setTimeout(() => {
    $$('.reveal:not(.visible)').forEach(el => {
      el.classList.add('visible');
    });
  }, 4000);
});

// ═══════════════════════════════════════════════════════════════
// GSAP ANIMATION ENGINE
// ═══════════════════════════════════════════════════════════════

(function() {
  // Ensure we don't break if GSAP fails to load
  function emergencyReveal() {
    const hidden = document.querySelectorAll('.reveal:not(.visible)');
    for (let i = 0; i < hidden.length; i++) {
      hidden[i].classList.add('visible');
    }
  }

  // Ultimate deadline: if GSAP hasn't done its job in 5 seconds, force visibility
  setTimeout(emergencyReveal, 5000);

  window.addEventListener('load', () => {
    try {
      if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        console.warn('GSAP not loaded. Using CSS fallbacks.');
        return;
      }
      
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) return; // Respect OS settings
      
      // Register plugin
      gsap.registerPlugin(ScrollTrigger);
      
      // Mark body so CSS knows GSAP is handling .reveal elements
      document.body.classList.add('gsap-ready');
      
      // 1. Hero Entrance Timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      // Select hero elements safely
      const badge = document.querySelector('.hero__badge');
      const title = document.querySelector('.hero__title');
      const sub = document.querySelector('.hero__subtitle');
      const stats = document.querySelectorAll('.hero__stat');
      const cta = document.querySelector('.hero__cta');
      
      if (badge && title) {
        tl.fromTo(badge, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "+=0.2")
          .fromTo(title, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.4")
          .fromTo(sub, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.4");
          
        if (stats.length) {
          tl.fromTo(stats, { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 }, "-=0.2");
        }
        
        if (cta) {
          tl.fromTo(cta, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.5)' }, "-=0.2");
        }
        
        tl.add(() => {
          // Hand control back to CSS so hover states work properly
          gsap.set([badge, title, sub, ...stats, cta], { clearProps: "all" });
          [badge, title, sub].forEach(el => el.classList.add('visible'));
        });
      }

      // 2. Parallax Orbs
      const orbs = document.querySelectorAll('.orb');
      orbs.forEach((orb, i) => {
        gsap.to(orb, {
          y: "random(-40, 40)",
          x: "random(-40, 40)",
          rotation: "random(-20, 20)",
          duration: "random(4, 8)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.5
        });
      });

      // 3. Scroll Reveals (The Engine)
      const revealElements = document.querySelectorAll('.gsap-ready .reveal:not(.hero__badge):not(.hero__title):not(.hero__subtitle)');
      
      revealElements.forEach(el => {
        // Skip elements already visible via IO
        if (el.classList.contains('visible')) return;
        
        ScrollTrigger.create({
          trigger: el,
          start: "top 85%", 
          onEnter: () => {
            gsap.fromTo(el, 
              { y: 24, opacity: 0 },
              { 
                y: 0, 
                opacity: 1, 
                duration: 0.6, 
                ease: "power2.out",
                onComplete: () => {
                  el.classList.add('visible');
                  gsap.set(el, { clearProps: "all" });
                }
              }
            );
          },
          once: true
        });
      });

      // 4. Staggered Cards
      const grids = document.querySelectorAll('.card-grid');
      grids.forEach(grid => {
        const cards = grid.querySelectorAll('.card');
        if (!cards.length) return;
        
        ScrollTrigger.create({
          trigger: grid,
          start: "top 80%",
          onEnter: () => {
            gsap.fromTo(cards,
              { y: 30, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out",
                onComplete: () => {
                  cards.forEach(c => {
                    c.classList.add('visible');
                    gsap.set(c, { clearProps: "all" });
                  });
                }
              }
            );
          },
          once: true
        });
      });

      // Verification pass
      setTimeout(() => {
        ScrollTrigger.refresh();
        emergencyReveal(); // Catch anything that got stuck
      }, 2000);

    } catch(err) {
      console.error("GSAP Engine failed to initialize:", err);
      emergencyReveal(); // Ensure content is accessible
    }
  });
})();
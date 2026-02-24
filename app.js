/**
 * =====================================================
 * SABI MVP — App Logic (Enhanced with Teasers)
 * =====================================================
 * 
 * Handles:
 *   - Code entry & validation
 *   - API calls to Google Apps Script backend
 *   - Portal rendering (student greeting + lesson cards)
 *   - localStorage persistence for returning visitors
 *   - WhatsApp link generation
 *   - All UI states (loading, error, empty, success)
 *   - Teaser card interactions (toast on tap)
 * 
 * No frameworks. No build tools. Pure vanilla JavaScript.
 * =====================================================
 */

(function () {
  'use strict';

  // =====================================================
  // CONFIGURATION
  // =====================================================

  /**
   * ⚠️  IMPORTANT: Replace this URL with your actual Google Apps Script
   *     Web App deployment URL after completing the setup guide.
   *     It looks like: https://script.google.com/macros/s/XXXX.../exec
   */
  const API_URL = 'https://script.google.com/macros/s/AKfycbyCcE3b0jh8ES3fRWPnhEcjxUt9oJU1yyJUD6mt4uHe5CkZa6rIKJGk59OzjHb9lyOF/exec';

  // Storage key
  const STORAGE_KEY = 'sabi-code';

  // Lesson card emojis (cycles)
  const LESSON_EMOJIS = ['📘', '📗', '📙', '📕', '📓'];

  // =====================================================
  // DOM ELEMENTS
  // =====================================================

  const screenEntry = document.getElementById('screen-entry');
  const screenPortal = document.getElementById('screen-portal');
  const codeForm = document.getElementById('code-form');
  const codeInput = document.getElementById('code-input');
  const submitBtn = document.getElementById('submit-btn');
  const errorMessage = document.getElementById('error-message');
  const waLinkEntry = document.getElementById('wa-link-entry');
  const faqToggle = document.getElementById('faq-toggle');
  const faqContent = document.getElementById('faq-content');
  const portalGreeting = document.getElementById('portal-greeting');
  const portalSubtitle = document.getElementById('portal-subtitle');
  const lessonsContainer = document.getElementById('lessons-container');
  const noLessons = document.getElementById('no-lessons');
  const waLinkPortal = document.getElementById('wa-link-portal');
  const waLinkTeaser = document.getElementById('wa-link-teaser');
  const switchUser = document.getElementById('switch-user');
  const switchName = document.getElementById('switch-name');
  const toastEl = document.getElementById('toast');

  // =====================================================
  // STATE
  // =====================================================

  let isLoading = false;
  let whatsappNumber = '';
  let currentCode = '';
  let currentName = '';

  // =====================================================
  // INITIALIZATION
  // =====================================================

  function init() {
    fetchConfig();
    bindEvents();
    bindTeaserCards();

    const savedCode = getStoredCode();
    if (savedCode) {
      codeInput.value = savedCode;
      updateButtonState();
      submitCode(savedCode);
    }
  }

  // =====================================================
  // CONFIG
  // =====================================================

  function fetchConfig() {
    fetch(API_URL + '?action=config')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.whatsappNumber) {
          whatsappNumber = data.whatsappNumber;
          updateWhatsAppLinks();
        }
      })
      .catch(() => {
        // Silent fail
      });
  }

  function updateWhatsAppLinks() {
    if (!whatsappNumber) return;

    const entryLink = 'https://wa.me/' + whatsappNumber + '?text=' +
      encodeURIComponent('Hey! I need a lesson');
    waLinkEntry.href = entryLink;

    // Teaser CTA link
    const teaserLink = 'https://wa.me/' + whatsappNumber + '?text=' +
      encodeURIComponent("Hey! I saw the features coming to sabi. Tell me more! 👀");
    waLinkTeaser.href = teaserLink;
  }

  function getPortalWhatsAppLink(code) {
    if (!whatsappNumber) return '#';
    return 'https://wa.me/' + whatsappNumber + '?text=' +
      encodeURIComponent('Hey! I need another lesson. My code is ' + code);
  }

  // =====================================================
  // EVENT BINDING
  // =====================================================

  function bindEvents() {
    codeInput.addEventListener('input', () => {
      codeInput.value = codeInput.value.toUpperCase().replace(/[^A-Z]/g, '');
      updateButtonState();
      clearError();
    });

    codeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!isLoading && codeInput.value.length === 5) {
        submitCode(codeInput.value.trim());
      }
    });

    faqToggle.addEventListener('click', () => {
      const expanded = faqToggle.getAttribute('aria-expanded') === 'true';
      faqToggle.setAttribute('aria-expanded', !expanded);
      faqContent.hidden = expanded ? false : true;
      // Fix: toggle correctly
      if (expanded) {
        faqContent.hidden = true;
      } else {
        faqContent.hidden = false;
      }
    });

    switchUser.addEventListener('click', () => {
      clearStoredCode();
      currentCode = '';
      currentName = '';
      showScreen('entry');
      codeInput.value = '';
      updateButtonState();
      codeInput.focus();
    });
  }

  /**
   * Bind click handlers on teaser cards
   * Tapping a card shows a toast with the feature-specific message
   */
  function bindTeaserCards() {
    const cards = document.querySelectorAll('.teaser-card');
    cards.forEach((card) => {
      card.addEventListener('click', () => {
        const msg = card.getAttribute('data-msg') || 'Coming soon! 🔥';
        showToast(msg);
      });
    });
  }

  // =====================================================
  // BUTTON STATE
  // =====================================================

  function updateButtonState() {
    submitBtn.disabled = codeInput.value.length < 5;
  }

  // =====================================================
  // CODE SUBMISSION
  // =====================================================

  function submitCode(inputCode) {
    if (isLoading) return;

    const code = inputCode.toUpperCase().trim();
    if (code.length !== 5) return;

    setLoading(true);
    clearError();

    fetch(API_URL + '?action=lookup&code=' + encodeURIComponent(code))
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);

        if (data.success) {
          currentCode = code;
          currentName = data.student.name;
          storeCode(code);
          renderPortal(data.student, data.lessons, code);
          showScreen('portal');
        } else if (data.error === 'not_found') {
          showError("That code doesn't exist. Check your WhatsApp for the right one.");
          shakeInput();
          clearStoredCode();
        } else {
          showError('Something went wrong. Please try again.');
        }
      })
      .catch(() => {
        setLoading(false);
        showError('Connection error. Check your internet and try again.');
      });
  }

  // =====================================================
  // UI STATE MANAGEMENT
  // =====================================================

  function setLoading(loading) {
    isLoading = loading;
    if (loading) {
      submitBtn.textContent = '...';
      submitBtn.classList.add('loading');
      codeInput.classList.add('disabled');
      codeInput.setAttribute('disabled', 'true');
    } else {
      submitBtn.textContent = 'Open →';
      submitBtn.classList.remove('loading');
      codeInput.classList.remove('disabled');
      codeInput.removeAttribute('disabled');
    }
  }

  function showError(msg) {
    errorMessage.textContent = msg;
    errorMessage.classList.add('visible');
  }

  function clearError() {
    errorMessage.textContent = '';
    errorMessage.classList.remove('visible');
    codeInput.classList.remove('error');
  }

  function shakeInput() {
    codeInput.classList.add('error');
    setTimeout(() => {
      codeInput.classList.remove('error');
    }, 450);
  }

  function showScreen(screen) {
    if (screen === 'portal') {
      screenEntry.classList.remove('active');
      screenEntry.classList.add('fade-out');
      setTimeout(() => {
        screenEntry.style.display = 'none';
        screenPortal.style.display = 'flex';
        void screenPortal.offsetWidth;
        screenPortal.classList.add('active');
      }, 200);
    } else {
      screenPortal.classList.remove('active');
      screenPortal.classList.add('fade-out');
      setTimeout(() => {
        screenPortal.style.display = 'none';
        screenPortal.classList.remove('fade-out');
        screenEntry.style.display = 'flex';
        void screenEntry.offsetWidth;
        screenEntry.classList.add('active');
        screenEntry.classList.remove('fade-out');
      }, 200);
    }
  }

  // =====================================================
  // TOAST
  // =====================================================

  function showToast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add('visible');
    setTimeout(() => {
      toastEl.classList.remove('visible');
    }, 2000);
  }

  // =====================================================
  // PORTAL RENDERING
  // =====================================================

  function renderPortal(student, lessons, code) {
    portalGreeting.textContent = 'Hey, ' + student.name + ' 👋';
    waLinkPortal.href = getPortalWhatsAppLink(code);
    switchName.textContent = student.name;

    if (lessons && lessons.length > 0) {
      portalSubtitle.textContent = 'Your lessons:';
      noLessons.hidden = true;
      lessonsContainer.style.display = 'flex';
      renderLessonCards(lessons);
    } else {
      portalSubtitle.textContent = '';
      lessonsContainer.style.display = 'none';
      noLessons.hidden = false;
    }
  }

  function renderLessonCards(lessons) {
    lessonsContainer.innerHTML = '';

    for (let i = 0; i < lessons.length; i++) {
      const lesson = lessons[i];
      const emoji = LESSON_EMOJIS[i % LESSON_EMOJIS.length];
      const card = createLessonCard(lesson, emoji);
      lessonsContainer.appendChild(card);
    }
  }

  function createLessonCard(lesson, emoji) {
    const card = document.createElement('a');
    card.className = 'lesson-card';
    card.href = '/lessons/' + lesson.path + '/';
    card.setAttribute('aria-label', 'Open ' + lesson.subject + ' lesson');

    const emojiSpan = document.createElement('span');
    emojiSpan.className = 'lesson-emoji';
    emojiSpan.textContent = emoji;
    emojiSpan.setAttribute('aria-hidden', 'true');

    const info = document.createElement('div');
    info.className = 'lesson-info';

    const subject = document.createElement('div');
    subject.className = 'lesson-subject';
    subject.textContent = lesson.subject;

    const courseCode = document.createElement('div');
    courseCode.className = 'lesson-course-code';
    courseCode.textContent = lesson.courseCode || '';

    const date = document.createElement('div');
    date.className = 'lesson-date';
    date.textContent = 'Delivered ' + formatRelativeDate(lesson.deliveredAt);

    info.appendChild(subject);
    if (lesson.courseCode) {
      info.appendChild(courseCode);
    }
    info.appendChild(date);

    card.appendChild(emojiSpan);
    card.appendChild(info);

    return card;
  }

  // =====================================================
  // DATE FORMATTING
  // =====================================================

  function formatRelativeDate(dateStr) {
    if (!dateStr) return '';

    try {
      const date = new Date(dateStr);
      if (isNaN(date.getTime())) return dateStr;

      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const target = new Date(date.getFullYear(), date.getMonth(), date.getDate());
      const diffMs = today.getTime() - target.getTime();
      const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

      if (diffDays === 0) return 'today';
      if (diffDays === 1) return 'yesterday';
      if (diffDays < 7) return diffDays + ' days ago';

      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return months[date.getMonth()] + ' ' + date.getDate();
    } catch (e) {
      return dateStr;
    }
  }

  // =====================================================
  // LOCAL STORAGE
  // =====================================================

  function storeCode(code) {
    try { localStorage.setItem(STORAGE_KEY, code); } catch (e) { /* silent */ }
  }

  function getStoredCode() {
    try { return localStorage.getItem(STORAGE_KEY) || ''; } catch (e) { return ''; }
  }

  function clearStoredCode() {
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) { /* silent */ }
  }

  // =====================================================
  // BOOT
  // =====================================================

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
(() => {
  const app = document.getElementById('app');
  const homeBtn = document.getElementById('homeBtn');
  const letters = ['A','B','C','D','E','F'];
  let currentSet = null;
  let quizQuestions = [];
  let index = 0;
  let selected = null;
  let checked = false;
  let results = [];
  let selectedCount = 20;

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g,'&amp;')
      .replace(/</g,'&lt;')
      .replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;')
      .replace(/'/g,'&#039;');
  }

  function nl2br(value) { return escapeHtml(value).replace(/\n/g,'<br>'); }

  function shuffle(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function getCountOptions(total) {
    const max = Math.min(total, 60);
    const options = [];
    for (let n = 10; n <= max; n += 10) options.push(n);
    if (!options.includes(total) && total < 10) options.push(total);
    return options;
  }

  function showHome() {
    currentSet = null;
    homeBtn.classList.add('hidden');
    const set = QUESTION_SETS[0];
    const countOptions = getCountOptions(set.questions.length);
    selectedCount = countOptions.includes(20) ? 20 : (countOptions[0] || set.questions.length);

    app.innerHTML = `
      <section class="home-wrap">
        <div class="hero hero-textbook">
          <div class="hero-copy">
            <div class="hero-rule"><span></span><b>ENGLISH PRACTICE</b><span></span></div>
            <h1>UPGRADE<br><span>PRACTICE</span></h1>
            <p class="hero-saying">Practice Makes Perfect.</p>
            <p class="data-note">※データ設定の関係で、同じ問題が出題されることがあります。</p>
          </div>

          <div class="study-illustration" aria-hidden="true">
            <svg viewBox="0 0 260 210" role="img">
              <path class="blob" d="M44 44c26-31 70-43 113-30 44 13 73 51 70 93-3 43-40 80-88 86-48 6-98-22-113-65C13 91 20 72 44 44Z"/>
              <path class="desk-line" d="M40 169H222"/>
              <g class="book">
                <path d="M63 111c19-8 39-7 59 3v48c-20-10-40-11-59-3Z"/>
                <path d="M122 114c20-10 40-11 60-3v48c-20-8-40-7-60 3Z"/>
                <path d="M122 114v48"/>
                <path d="M75 124c11-3 22-2 34 2M75 137c11-3 22-2 34 2M135 126c11-4 22-5 34-2M135 139c11-4 22-5 34-2"/>
              </g>
              <g class="pencil">
                <path d="M171 77l34 34-12 12-34-34Z"/>
                <path d="M159 89l-7 20 20-7Z"/>
                <path d="M205 111l8 8-12 12-8-8Z"/>
              </g>
              <g class="letters">
                <text x="66" y="83">A</text>
                <text x="95" y="65">B</text>
                <text x="127" y="81">C</text>
              </g>
              <g class="sparkles">
                <path d="M198 50v20M188 60h20"/>
                <path d="M49 86v14M42 93h14"/>
              </g>
            </svg>
          </div>
        </div>

        <article class="launch-card">
          <div class="launch-top">
            <div>
              <div class="set-number">${escapeHtml(set.label)}</div>
              <h2>${escapeHtml(set.title)}</h2>
              <p>${escapeHtml(set.range)}</p>
            </div>
            <div class="question-total"><strong>${set.questions.length}</strong><span>QUESTIONS</span></div>
          </div>

          <div class="launch-divider"></div>

          <div class="option-block">
            <div class="option-heading">
              <span>出題数</span>
              <small>Number of Questions</small>
            </div>
            <div class="count-selector" role="group" aria-label="出題数">
              ${countOptions.map(n => `
                <button class="count-btn ${n === selectedCount ? 'active' : ''}" data-count="${n}" type="button">${n}</button>
              `).join('')}
            </div>
          </div>

          <button id="startPractice" class="start-btn" type="button">
            <span>Start!</span><span class="start-arrow">→</span>
          </button>
        </article>
      </section>
    `;


    app.querySelectorAll('[data-count]').forEach(btn => {
      btn.addEventListener('click', () => {
        selectedCount = Number(btn.dataset.count);
        app.querySelectorAll('[data-count]').forEach(b => b.classList.toggle('active', b === btn));
      });
    });

    document.getElementById('startPractice').addEventListener('click', () => {
      startSet(set.id, null, selectedCount);
    });
  }

  function startSet(setId, onlyIds = null, count = selectedCount) {
    currentSet = QUESTION_SETS.find(s => s.id === setId);
    let pool = onlyIds
      ? currentSet.questions.filter(q => onlyIds.includes(q.id))
      : [...currentSet.questions];

    pool = shuffle(pool);
    quizQuestions = onlyIds ? pool : pool.slice(0, Math.min(count, pool.length));
    selectedCount = quizQuestions.length;
    index = 0;
    selected = null;
    checked = false;
    results = [];
    homeBtn.classList.remove('hidden');
    renderQuestion();
  }

  function renderQuestion() {
    const q = quizQuestions[index];
    const progress = (index / quizQuestions.length) * 100;
    app.innerHTML = `
      <section class="quiz-wrap">
        <div class="quiz-head">
          <div>
            <div class="quiz-kicker">${escapeHtml(currentSet.label)}</div>
            <h1>${escapeHtml(currentSet.title)}</h1>
          </div>
          <div class="progress-text"><strong>${index + 1}</strong><span>/ ${quizQuestions.length}</span></div>
        </div>
        <div class="progress-track"><div class="progress-bar" style="width:${progress}%"></div></div>

        <article class="question-card">
          <div class="question-label">QUESTION ${index + 1}</div>
          <div class="question-text">${nl2br(q.text)}</div>

          <div class="question-translation">
            <div class="translation-badge">日本語</div>
            <div class="translation-text">${escapeHtml(q.translation || '')}</div>
          </div>

          <div class="tap-hint">日本語の意味を確認して、選択肢をタップ</div>
          <div class="choices">
            ${q.choices.map((choice, i) => `
              <button class="choice" data-choice="${i}" type="button">
                <span class="choice-letter">${letters[i]}</span>
                <span class="choice-text">${escapeHtml(choice)}</span>
              </button>
            `).join('')}
          </div>
          <div id="feedbackArea"></div>
          <div id="nextArea"></div>
        </article>
      </section>
    `;

    const choiceBtns = [...app.querySelectorAll('.choice')];
    choiceBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (checked) return;
        selected = Number(btn.dataset.choice);
        checkAnswer();
      });
    });
  }

  function checkAnswer() {
    if (selected === null || checked) return;
    const q = quizQuestions[index];
    const isCorrect = selected === q.answer;
    checked = true;
    results.push({ id: q.id, correct: isCorrect });

    const choiceBtns = [...app.querySelectorAll('.choice')];
    choiceBtns.forEach(btn => {
      const i = Number(btn.dataset.choice);
      btn.disabled = true;
      if (i === q.answer) btn.classList.add('correct');
      if (i === selected && !isCorrect) btn.classList.add('wrong');
    });

    const feedbackArea = document.getElementById('feedbackArea');
    feedbackArea.innerHTML = `
      <div class="feedback ${isCorrect ? 'correct' : 'wrong'}">
        <span class="feedback-mark">${isCorrect ? '✓' : '×'}</span>
        <div>
          <strong>${isCorrect ? 'Correct!' : 'Not quite.'}</strong>
          ${isCorrect ? '<span>正解です。</span>' : `<span>正解：${letters[q.answer]}. ${escapeHtml(q.choices[q.answer])}</span>`}
        </div>
      </div>
      <div class="learning-note point-only-note">
        <div class="note-row point-row">
          <div class="note-label point-label">POINT</div>
          <div class="note-body">${escapeHtml(q.tip || '')}</div>
        </div>
      </div>
    `;

    const nextArea = document.getElementById('nextArea');
    nextArea.innerHTML = `
      <div class="action-row">
        <button id="nextBtn" class="next-btn" type="button">
          ${index === quizQuestions.length - 1 ? 'RESULT' : 'NEXT'} <span>→</span>
        </button>
      </div>
    `;
    document.getElementById('nextBtn').addEventListener('click', () => {
      if (index === quizQuestions.length - 1) showResult();
      else {
        index += 1;
        selected = null;
        checked = false;
        renderQuestion();
      }
    });
  }

  function showResult() {
    const correct = results.filter(r => r.correct).length;
    const total = results.length;
    const percent = Math.round(correct / total * 100);
    const missedIds = results.filter(r => !r.correct).map(r => r.id);
    app.innerHTML = `
      <section class="result-card">
        <span class="eyebrow">SESSION COMPLETE</span>
        <div class="score-ring" style="--score-angle:${percent * 3.6}deg">
          <div class="score-inner">
            <div class="score-number">${correct}/${total}</div>
            <div class="score-unit">${percent}%</div>
          </div>
        </div>
        <h2>${missedIds.length === 0 ? 'Perfect!' : 'Good work!'}</h2>
        <p>${missedIds.length === 0 ? '全問正解です。この調子で続けましょう。' : `間違えた問題は ${missedIds.length} 問です。もう一度チャレンジできます。`}</p>
        <div class="result-actions">
          <button id="retryAll" class="secondary-btn" type="button">${total}問をもう一度</button>
          ${missedIds.length ? '<button id="retryMissed" class="primary-btn result-primary" type="button">間違えた問題だけ</button>' : ''}
        </div>
        ${missedIds.length ? `
          <div class="missed-box">
            <h3>間違えた問題</h3>
            <div class="missed-list">${missedIds.map(id => `<span class="missed-chip">Q${id}</span>`).join('')}</div>
          </div>` : ''}
      </section>
    `;

    document.getElementById('retryAll').addEventListener('click', () => startSet(currentSet.id, null, total));
    const retryMissed = document.getElementById('retryMissed');
    if (retryMissed) retryMissed.addEventListener('click', () => startSet(currentSet.id, missedIds, missedIds.length));
  }

  homeBtn.addEventListener('click', showHome);
  showHome();
})();

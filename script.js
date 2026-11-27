"use strict";

// ==================== БАЗА ДАННЫХ ====================
const BOARD_DATA = [
  { name: "🚀 СТАРТ", type: "start", color: "#2d3238", sector: "Служебная" },
  { name: "HONOR", type: "company", price: 100, rent: 25, color: "#1e90ff", sector: "Мобильный", difficulty: 1 },
  { name: "XIAOMI", type: "company", price: 120, rent: 30, color: "#1e90ff", sector: "Мобильный", difficulty: 1 },
  { name: "🌐 VPN", type: "vpn", color: "#ff8c00", sector: "Спецклетка" },
  { name: "SAMSUNG", type: "company", price: 140, rent: 35, color: "#1e90ff", sector: "Мобильный", difficulty: 1 },
  { name: "LENOVO", type: "company", price: 160, rent: 40, color: "#228b22", sector: "ПК и CPU", difficulty: 2 },
  { name: "🎴 ШАНС", type: "chance", color: "#9b59b6", sector: "Спецклетка" },
  { name: "🔒 SANDBOX", type: "sandbox", color: "#2d3238", sector: "Служебная" },
  { name: "AMD", type: "company", price: 200, rent: 50, color: "#228b22", sector: "ПК и CPU", difficulty: 2 },
  { name: "⚔️ DDoS", type: "ddos", color: "#ff8c00", sector: "Спецклетка" },
  { name: "INTEL", type: "company", price: 220, rent: 55, color: "#228b22", sector: "ПК и CPU", difficulty: 2 },
  { name: "RED HAT", type: "company", price: 240, rent: 60, color: "#ffcc00", sector: "ОС и софт", difficulty: 2 },
  { name: "UBUNTU", type: "company", price: 260, rent: 65, color: "#ffcc00", sector: "ОС и софт", difficulty: 2 },
  { name: "CISCO", type: "company", price: 280, rent: 70, color: "#dc143c", sector: "Сети", difficulty: 3 },
  { name: "🎴 КАЗНА", type: "treasury", color: "#9b59b6", sector: "Спецклетка" },
  { name: "🏆 ХАКАТОН", type: "hackathon", color: "#2d3238", sector: "Служебная" },
  { name: "KASPERSKY", type: "company", price: 300, rent: 75, color: "#dc143c", sector: "Сети", difficulty: 3 },
  { name: "HUAWEI", type: "company", price: 320, rent: 80, color: "#dc143c", sector: "Сети", difficulty: 3 },
  { name: "💥 БАГ", type: "bug", color: "#ff8c00", sector: "Спецклетка" },
  { name: "YANDEX", type: "company", price: 340, rent: 85, color: "#ba55d3", sector: "Бигтех РФ", difficulty: 3 },
  { name: "VK TECH", type: "company", price: 360, rent: 90, color: "#ba55d3", sector: "Бигтех РФ", difficulty: 3 },
  { name: "OZON", type: "company", price: 380, rent: 95, color: "#ba55d3", sector: "Бигтех РФ", difficulty: 3 },
  { name: "🧾 НАЛОГ", type: "tax", color: "#2d3238", sector: "Служебная" },
  { name: "ORACLE", type: "company", price: 400, rent: 100, color: "#00ffff", sector: "БД и ИИ", difficulty: 3 },
  { name: "MICROSOFT", type: "company", price: 420, rent: 105, color: "#ffcc00", sector: "ОС и софт", difficulty: 3 },
  { name: "🐧 OPEN SRC", type: "opensource", color: "#ff8c00", sector: "Спецклетка" },
  { name: "IBM", type: "company", price: 440, rent: 110, color: "#00ffff", sector: "БД и ИИ", difficulty: 3 },
  { name: "NVIDIA", type: "company", price: 460, rent: 115, color: "#00ffff", sector: "БД и ИИ", difficulty: 3 },
  { name: "APPLE", type: "company", price: 500, rent: 125, color: "#1e90ff", sector: "Мобильный", difficulty: 3 },
  { name: "🎴 КАЗНА", type: "treasury", color: "#9b59b6", sector: "Спецклетка" }
];

// ==================== ПУЛ ВОПРОСОВ ====================
// difficulty: 1 — лёгкие, 2 — средние, 3 — сложные.
// Каждый вопрос используется не более одного раза за партию.
const QUESTION_POOL = {
  1: [
    { q: "Сколько бит в одном байте?", opts: ["A) 4", "B) 8", "C) 16", "D) 10"], ans: "B" },
    { q: "Что означает аббревиатура CPU?", opts: ["A) Центральный процессор", "B) Видеокарта", "C) Блок питания", "D) Сетевая карта"], ans: "A" },
    { q: "Какая память теряет данные при выключении?", opts: ["A) SSD", "B) RAM", "C) HDD", "D) Flash"], ans: "B" },
    { q: "Какая команда Linux показывает список файлов?", opts: ["A) cd", "B) pwd", "C) ls", "D) rm"], ans: "C" },
    { q: "Какой порт по умолчанию у HTTP?", opts: ["A) 21", "B) 22", "C) 80", "D) 443"], ans: "C" },
    { q: "Что означает LAN?", opts: ["A) Local Area Network", "B) Large Access Node", "C) Link Aggregation", "D) Local App Network"], ans: "A" },
    { q: "Какой порт используется для SSH?", opts: ["A) 21", "B) 22", "C) 80", "D) 443"], ans: "B" },
    { q: "Как расшифровывается AI?", opts: ["A) Auto Input", "B) Artificial Intelligence", "C) Advanced Interface", "D) Auto Integer"], ans: "B" },
    { q: "Что такое DNS?", opts: ["A) Протокол передачи файлов", "B) Система доменных имён", "C) Язык разметки", "D) Тип памяти"], ans: "B" },
    { q: "Какая маска подсети у /24?", opts: ["A) 255.0.0.0", "B) 255.255.0.0", "C) 255.255.255.0", "D) 255.255.255.255"], ans: "C" },
    { q: "Что делает команда ping?", opts: ["A) Копирует файлы", "B) Проверяет доступность узла", "C) Удаляет файлы", "D) Меняет права"], ans: "B" },
    { q: "Что такое RAM?", opts: ["A) Постоянная память", "B) Оперативная память", "C) Видеопамять", "D) Кэш процессора"], ans: "B" }
  ],
  2: [
    { q: "Какая система счисления используется внутри процессора?", opts: ["A) Десятичная", "B) Восьмеричная", "C) Двоичная", "D) Шестнадцатеричная"], ans: "C" },
    { q: "Какая команда даёт права root в Linux?", opts: ["A) admin", "B) sudo", "C) rootgo", "D) access"], ans: "B" },
    { q: "Какой пакетный менеджер используется в Ubuntu?", opts: ["A) yum", "B) apt", "C) pacman", "D) brew"], ans: "B" },
    { q: "Какая атака перегружает сервер запросами?", opts: ["A) Фишинг", "B) DDoS", "C) Брутфорс", "D) Сниффинг"], ans: "B" },
    { q: "Какая команда показывает IP и маску интерфейса?", opts: ["A) ifconfig", "B) lsblk", "C) df -h", "D) uname -a"], ans: "A" },
    { q: "Какой файл в Windows резолвит имена без DNS?", opts: ["A) boot.ini", "B) hosts", "C) autoexec.bat", "D) config.sys"], ans: "B" },
    { q: "Какой оператор SQL выбирает данные?", opts: ["A) INSERT", "B) UPDATE", "C) SELECT", "D) DELETE"], ans: "C" },
    { q: "Что такое DHCP?", opts: ["A) Протокол передачи файлов", "B) Автоматическая выдача IP", "C) Язык разметки", "D) Тип памяти"], ans: "B" },
    { q: "Какой порт у HTTPS?", opts: ["A) 25", "B) 53", "C) 80", "D) 443"], ans: "D" },
    { q: "Что делает команда grep?", opts: ["A) Ищет текст по шаблону", "B) Удаляет файлы", "C) Копирует папки", "D) Меняет владельца"], ans: "A" },
    { q: "Какой уровень OSI отвечает за IP-маршрутизацию?", opts: ["A) 1", "B) 2", "C) 3", "D) 7"], ans: "C" },
    { q: "Что такое VPN?", opts: ["A) Виртуальная частная сеть", "B) Протокол передачи файлов", "C) Язык программирования", "D) Тип базы данных"], ans: "A" }
  ],
  3: [
    { q: "Какой алгоритм шифрования используется в HTTPS по умолчанию?", opts: ["A) MD5", "B) AES", "C) SHA-1", "D) DES"], ans: "B" },
    { q: "Что означает аббревиатура CIDR?", opts: ["A) Classless Inter-Domain Routing", "B) Common Internet Data Route", "C) Central Internet Data Router", "D) Class Interface Data Route"], ans: "A" },
    { q: "Какая команда Linux показывает открытые порты?", opts: ["A) netstat -tuln", "B) ls -la", "C) df -h", "D) uname -a"], ans: "A" },
    { q: "Что такое RAID 1?", opts: ["A) Чередование дисков", "B) Зеркалирование дисков", "C) Чётность", "D) Гибрид"], ans: "B" },
    { q: "Какой уровень OSI отвечает за шифрование?", opts: ["A) 3", "B) 4", "C) 6", "D) 7"], ans: "C" },
    { q: "Что такое BGP?", opts: ["A) Протокол маршрутизации", "B) Тип базы данных", "C) Язык разметки", "D) Кодек"], ans: "A" },
    { q: "Какой тип атаки подменяет DNS-записи?", opts: ["A) DDoS", "B) DNS-спуфинг", "C) Брутфорс", "D) SQL-инъекция"], ans: "B" },
    { q: "Что означает ACID в базах данных?", opts: ["A) Набор свойств транзакций", "B) Тип индекса", "C) Язык запросов", "D) Формат хранения"], ans: "A" },
    { q: "Какой протокол используется для синхронизации времени?", opts: ["A) HTTP", "B) NTP", "C) SMTP", "D) FTP"], ans: "B" },
    { q: "Что такое NAT?", opts: ["A) Преобразование сетевых адресов", "B) Тип шифрования", "C) Язык программирования", "D) Формат файла"], ans: "A" },
    { q: "Какой алгоритм используется в цифровых подписях?", opts: ["A) RSA", "B) MD5", "C) Base64", "D) XOR"], ans: "A" },
    { q: "Что означает аббревиатура SLA?", opts: ["A) Service Level Agreement", "B) System Load Average", "C) Software License Act", "D) Secure Login Access"], ans: "A" }
  ]
};

const PLAYER_COLORS = ["#ff5555", "#4488ff", "#44cc44", "#ffcc44"];
const PLAYER_MARKERS = ["🔴", "🔵", "🟢", "🟡"];
const HOUSE_COST = 100, HOTEL_COST = 300, SKIP_COST = 50, START_BONUS = 200;
const SAVE_KEY = "it_monopoly_save";
const SAVE_VERSION = 2;
const GRID_COLS = 9, GRID_ROWS = 8, BOARD_SIZE = BOARD_DATA.length;

const SECTOR_COUNTS = BOARD_DATA.reduce((counts, cell) => {
  if (cell.type === "company") counts[cell.sector] = (counts[cell.sector] || 0) + 1;
  return counts;
}, {});

const GRID_POSITIONS = [];
for (let col = GRID_COLS - 1; col >= 0; col--) GRID_POSITIONS.push([col, GRID_ROWS - 1]);
for (let row = GRID_ROWS - 2; row >= 0; row--) GRID_POSITIONS.push([0, row]);
for (let col = 1; col < GRID_COLS; col++) GRID_POSITIONS.push([col, 0]);
for (let row = 1; row < GRID_ROWS - 1; row++) GRID_POSITIONS.push([GRID_COLS - 1, row]);

const CHANCE_EVENTS = [
  ["💾 Утечка данных: −$150", -150], ["🚀 Инвестиции: +$300", 300],
  ["🐛 Найдена ошибка: +$100", 100], ["⚡ Ремонт сервера: −$200", -200],
  ["🏅 Выигран тендер: +$250", 250], ["🔒 Восстановление после взлома: −$180", -180],
  ["💡 Патент: +$200", 200], ["📉 Снижение стоимости акций: −$120", -120]
];
const TREASURY_EVENTS = [
  ["💰 Дивиденды: +$80", 80], ["🧾 Дополнительный налог: −$100", -100],
  ["🎁 Бонус: +$60", 60], ["🛠 Рефакторинг: −$90", -90],
  ["📈 Рост трафика: +$70", 70], ["🔧 Оборудование: −$110", -110]
];

let state = null, numPlayers = 2;
const playerConfigs = Array.from({ length: 4 }, (_, i) => ({ name: `P${i + 1}`, isAI: false }));
let sessionId = 0, aiTimer = null, modalResolve = null, audioContext = null;
const CANCELLED = Symbol("cancelled");
const $ = id => document.getElementById(id);

function escapeHTML(v) {
  return String(v).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function randomItem(a) { return a[Math.floor(Math.random() * a.length)]; }
function currentPlayer() { return state?.players[state.currentPlayerIdx] || null; }
function getPlayer(id) { return state?.players.find(p => p.id === id) || null; }
function activePlayers() { return state ? state.players.filter(p => !p.bankrupt) : []; }
function assertSession(t) { if (t !== sessionId || !state) throw CANCELLED; }
async function wait(ms, t) { await new Promise(r => setTimeout(r, ms)); assertSession(t); }
function stopSession() { sessionId++; clearTimeout(aiTimer); aiTimer = null; closeModal(null); }

function reportError(e) {
  if (e === CANCELLED) return;
  console.error("IT-MONOPOLY:", e);
  if (state) { state.phase = "error"; updateUI(); }
  openDialog("Ошибка", `<div class="modal-info">${escapeHTML(e instanceof Error ? e.message : String(e))}<br><br>Подробности в консоли.</div>`);
}

// ==================== ЗВУК ====================
function playSound(kind) {
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    if (!audioContext || audioContext.state === "closed") audioContext = new AC();
    if (audioContext.state === "suspended") audioContext.resume().catch(() => {});
    const o = audioContext.createOscillator(), g = audioContext.createGain();
    const freqs = { roll: 600, success: 900, error: 250, buy: 800, dice: 450, money: 1100, win: 1300, point: 1500 };
    const now = audioContext.currentTime;
    o.frequency.value = freqs[kind] || 500;
    g.gain.setValueAtTime(0.045, now);
    g.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
    o.connect(g); g.connect(audioContext.destination);
    o.start(now); o.stop(now + 0.09);
    o.onended = () => { o.disconnect(); g.disconnect(); };
  } catch (e) {}
}

// ==================== МОДАЛКИ ====================
function closeModal(result = null) {
  const resolve = modalResolve;
  modalResolve = null;
  $("modal-overlay").classList.remove("active");
  $("modal-box").innerHTML = "";
  if (resolve) resolve(result);
}

function openDialog(title, body, buttons = [{ label: "[ OK ]", value: "ok", kind: "primary" }]) {
  closeModal(null);
  const box = $("modal-box");
  box.innerHTML = `<h3 id="modal-title">${escapeHTML(title)}</h3><div class="modal-content">${body}</div><div class="modal-buttons"></div>`;
  const actions = box.querySelector(".modal-buttons");
  const promise = new Promise(r => { modalResolve = r; });
  for (const a of buttons) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = `btn-${a.kind || "secondary"}`;
    b.textContent = a.label;
    b.disabled = Boolean(a.disabled);
    b.addEventListener("click", () => {
      const r = typeof a.value === "function" ? a.value() : a.value;
      if (r !== undefined) closeModal(r);
    });
    actions.appendChild(b);
  }
  $("modal-overlay").classList.add("active");
  const first = actions.querySelector("button:not(:disabled)");
  if (first) first.focus();
  return promise;
}

async function gameDialog(token, title, body, buttons) {
  assertSession(token);
  const r = await openDialog(title, body, buttons);
  assertSession(token);
  return r;
}
async function gameNotice(token, player, title, body) {
  updateUI();
  if (!player.isAI) await gameDialog(token, title, body);
}

// ==================== ВОПРОСЫ ====================
function pickQuestion(difficulty) {
  if (!state) return null;
  const used = state.usedQuestions || {};
  const pool = QUESTION_POOL[difficulty] || QUESTION_POOL[1];
  const available = pool.filter((_, i) => !used[`${difficulty}-${i}`]);
  if (!available.length) {
    // Все вопросы уровня отработаны — сбрасываем пул для этого уровня.
    pool.forEach((_, i) => { delete used[`${difficulty}-${i}`]; });
    return randomItem(pool);
  }
  const idx = pool.indexOf(randomItem(available));
  used[`${difficulty}-${idx}`] = true;
  state.usedQuestions = used;
  return pool[idx];
}

function questionProgress(difficulty) {
  if (!state) return { done: 0, total: 0 };
  const pool = QUESTION_POOL[difficulty] || QUESTION_POOL[1];
  const used = state.usedQuestions || {};
  const done = pool.filter((_, i) => used[`${difficulty}-${i}`]).length;
  return { done, total: pool.length };
}

function difficultyBadge(d) {
  return d === 1 ? "🟢" : d === 2 ? "🟡" : "🔴";
}

async function askQuestion(token, cell) {
  const question = pickQuestion(cell.difficulty || 1);
  if (!question) {
    // Если пул пуст (не должно случаться) — используем заглушку.
    return null;
  }
  const prog = questionProgress(cell.difficulty || 1);
  const optionsHTML = question.opts.map(o => `
    <label>
      <input type="radio" name="quiz-answer" value="${escapeHTML(o[0])}">
      ${escapeHTML(o)}
    </label>
  `).join("");

  const answer = await gameDialog(
    token,
    `🧠 ВОПРОС ${difficultyBadge(cell.difficulty || 1)}`,
    `<div class="modal-color-bar" style="background:${cell.color}"></div>
     <div class="quiz-progress">
       Сложность: ${difficultyBadge(cell.difficulty || 1)} &nbsp;|&nbsp;
       Использовано: ${prog.done} / ${prog.total}
     </div>
     <div class="quiz-question">${escapeHTML(question.q)}</div>
     <div class="quiz-options">${optionsHTML}</div>
     <div id="quiz-warning" class="modal-warning"></div>`,
    [
      {
        label: "[ ОТВЕТИТЬ ]",
        kind: "primary",
        value: () => {
          const s = document.querySelector('input[name="quiz-answer"]:checked');
          if (!s) { $("quiz-warning").textContent = "Сначала выбери вариант ответа."; return undefined; }
          return s.value;
        }
      },
      { label: "[ ОТМЕНА ]", value: null }
    ]
  );

  if (answer === null) return null;
  const correct = answer === question.ans;
  if (correct) playSound("point");
  return { correct, question };
}

function correctAnswer(q) {
  return q.opts.find(o => o[0] === q.ans) || "?";
}

// ==================== МЕНЮ ====================
function renderPlayerConfig() {
  const c = $("players-config");
  c.innerHTML = "";
  for (let i = 0; i < numPlayers; i++) {
    const row = document.createElement("div");
    row.className = `player-row p${i + 1}`;
    row.innerHTML = `<span class="name">${PLAYER_MARKERS[i]} PLAYER_${i + 1}</span>
      <label><input type="checkbox" ${playerConfigs[i].isAI ? "checked" : ""}> ИИ-бот</label>`;
    row.querySelector("input").addEventListener("change", e => { playerConfigs[i].isAI = e.target.checked; });
    c.appendChild(row);
  }
}

function initMenu() {
  const btns = document.querySelectorAll(".num-btn");
  btns.forEach(b => b.addEventListener("click", () => {
    btns.forEach(x => x.classList.remove("active"));
    b.classList.add("active");
    numPlayers = Number(b.dataset.num);
    renderPlayerConfig();
  }));
  renderPlayerConfig();
  refreshLoadButton();
  $("menu-status").textContent = "Готово. Выбери игроков и нажми START.";
}

function showHelp() {
  if (state && state.phase !== "ready") return;
  openDialog("// HELP.md", `<div class="modal-info">
    <strong>Цель:</strong> остаться единственным игроком без банкротства.<br><br>
    🎲 ROLL — бросить кубик.<br>⏭ SKIP — пропустить ход за $${SKIP_COST}.<br>
    🚀 Прохождение старта — +$${START_BONUS}.<br><br>
    💼 Свободную компанию можно купить либо получить через викторину.<br>
    🟢🟡🔴 — сложность вопроса (чем дороже компания, тем сложнее).<br>
    ✓ Верный ответ — компания бесплатно.<br>✗ Неверный — за 150% цены.<br><br>
    🚨 Чужая компания: аренда или пентест (верно — скидка 50%, неверно — ×2).<br>
    🌟 Полный сектор → аренда ×2.<br>
    🏠 Дом $${HOUSE_COST} → ×3. 🏨 Отель $${HOTEL_COST} → ×4.<br>
    🏦 Залог 50%, выкуп 60%.<br>
    📊 STATS — балансы и вопросы.<br>
    💾 Сохранение между ходами.
  </div>`);
}

function showGameScreen() {
  $("menu-screen").classList.remove("active");
  $("game-screen").classList.add("active");
}

function startGame() {
  try {
    stopSession();
    const players = Array.from({ length: numPlayers }, (_, i) => ({
      id: i, name: `P${i + 1}`, money: 1000, pos: 0,
      color: PLAYER_COLORS[i], marker: PLAYER_MARKERS[i],
      companies: [], isAI: Boolean(playerConfigs[i].isAI), bankrupt: false
    }));
    state = {
      version: SAVE_VERSION, boardSize: BOARD_SIZE, players,
      currentPlayerIdx: 0, owners: {}, mortgagedCells: {}, buildings: {},
      blockedCells: {}, gameLog: [], balanceHistory: Object.fromEntries(players.map(p => [p.id, [1000]])),
      turnNumber: 1, diceValue: 1, phase: "ready", gameOver: false,
      usedQuestions: {},     // ← новое: какие вопросы уже заданы
      stats: { questionsAsked: 0, questionsCorrect: 0 }  // ← новое: счётчик
    };
    showGameScreen();
    buildBoard();
    addLog(`🎮 Игра началась! Игроков: ${numPlayers}.`);
    updateUI();
    drawInitialDice();
    saveGame(true);
    scheduleAI();
  } catch (e) { reportError(e); }
}

function restartGame() {
  if (state) {
    numPlayers = state.players.length;
    state.players.forEach((p, i) => { playerConfigs[i].isAI = p.isAI; });
  }
  startGame();
}

function backToMenu() {
  stopSession();
  state = null;
  $("game-screen").classList.remove("active");
  $("menu-screen").classList.add("active");
  document.querySelectorAll(".num-btn").forEach(b => b.classList.toggle("active", Number(b.dataset.num) === numPlayers));
  renderPlayerConfig();
  refreshLoadButton();
}

// ==================== ПОЛЕ ====================
function buildBoard() {
  if (GRID_POSITIONS.length !== BOARD_SIZE) throw new Error(`Размер поля не совпадает: клеток ${BOARD_SIZE}, позиций ${GRID_POSITIONS.length}.`);
  const board = $("board");
  board.innerHTML = "";
  BOARD_DATA.forEach((data, idx) => {
    const [col, row] = GRID_POSITIONS[idx];
    const cell = document.createElement("div");
    cell.id = `cell-${idx}`;
    cell.dataset.cell = String(idx);
    cell.className = `cell ${data.type === "company" ? "company" : "service"}`;
    cell.style.gridColumn = String(col + 1);
    cell.style.gridRow = String(row + 1);
    cell.innerHTML = `
      ${data.type === "company" ? `<div class="cell-color" style="background:${data.color}"></div>` : ""}
      <div class="cell-name">
        ${data.type === "company" ? `<span class="diff-badge">${difficultyBadge(data.difficulty || 1)}</span>` : ""}
        ${escapeHTML(data.name)}
      </div>
      ${data.type === "company" ? `<div class="cell-price">$${data.price}</div>` : ""}
      <div class="cell-owner"></div>
      <div class="cell-buildings"></div>
      <div class="cell-tokens"></div>
    `;
    board.appendChild(cell);
  });
}

function renderPanels() {
  if (!state) return;
  const left = $("left-panel"), right = $("right-panel");
  left.innerHTML = ""; right.innerHTML = "";
  const half = Math.ceil(state.players.length / 2);
  state.players.forEach((p, i) => {
    const card = document.createElement("div");
    const isActive = i === state.currentPlayerIdx && !p.bankrupt && !state.gameOver;
    card.className = ["player-card", isActive ? "active" : "", p.bankrupt ? "bankrupt" : ""].filter(Boolean).join(" ");
    card.style.borderColor = p.color;
    const companies = p.companies.length
      ? p.companies.map(ci => `
          <button type="button" class="asset-btn ${state.mortgagedCells[ci] ? "mortgaged" : ""}" data-asset="${ci}">
            ${state.mortgagedCells[ci] ? "🔒" : "·"} ${escapeHTML(BOARD_DATA[ci].name)}
          </button>`).join("")
      : "—";
    const monopolies = Object.keys(SECTOR_COUNTS).filter(s => checkMonopoly(p.id, s));
    card.innerHTML = `
      <div class="badge">&gt; ACTIVE &lt;</div>
      <div class="p-name" style="color:${p.color}">
        ${p.marker} ${escapeHTML(p.name)} ${p.isAI ? "[AI]" : ""}
      </div>
      <div class="p-money ${p.money < 0 ? "negative" : ""}">
        ${p.bankrupt ? "БАНКРОТ" : `$${p.money}`}
      </div>
      <div class="p-section">// COMPANIES</div>
      <div class="p-list">${companies}</div>
      <div class="p-section">// MONOPOLIES</div>
      <div class="p-list">${monopolies.length ? monopolies.map(s => `<div style="color:#ffcc00">★ ${escapeHTML(s)}</div>`).join("") : "—"}</div>
    `;
    (i < half ? left : right).appendChild(card);
  });
}

function updateControls() {
  if (!state) return;
  const p = currentPlayer();
  const ready = state.phase === "ready" && !state.gameOver;
  const human = ready && p && !p.isAI && !p.bankrupt;
  $("roll-btn").disabled = !human;
  $("skip-btn").disabled = !human;
  $("stats-btn").disabled = !ready;
  $("help-game-btn").disabled = !ready;
  $("save-btn").disabled = !ready;
}

function updateUI() {
  if (!state) return;
  const p = currentPlayer();
  if (p) {
    $("turn-info").textContent = state.gameOver ? "> GAME OVER"
      : `> T${state.turnNumber} | ${p.marker} ${p.name}` + (p.isAI ? " [AI]" : "");
    $("turn-info").style.color = p.color;
  }
  renderPanels();
  BOARD_DATA.forEach((data, idx) => {
    const cell = $(`cell-${idx}`);
    if (!cell) return;
    cell.querySelector(".cell-tokens").textContent = state.players.filter(x => !x.bankrupt && x.pos === idx).map(x => x.marker).join("");
    const b = state.buildings[idx] || { houses: 0, hotels: 0 };
    cell.querySelector(".cell-buildings").textContent = b.hotels ? "🏨" : b.houses ? "🏠" : "";
    const owner = getPlayer(getCellOwnerId(idx));
    const mortgaged = Boolean(state.mortgagedCells[idx]);
    const blocked = isCellBlocked(idx);
    cell.classList.toggle("blocked", blocked);
    const ol = cell.querySelector(".cell-owner");
    if (owner) {
      cell.style.borderColor = owner.color;
      cell.style.background = mortgaged ? "#1f1418" : "#1a2129";
      ol.textContent = `${owner.name}${mortgaged ? " 🔒" : ""}${blocked ? " ⚔️" : ""}`;
      ol.style.color = owner.color;
    } else {
      cell.style.borderColor = "#21262d";
      cell.style.background = data.type === "company" ? "#141a21" : "#1a2129";
      ol.textContent = data.type === "company" ? "free" : "";
      ol.style.color = "#6e7681";
    }
    cell.title = data.type === "company" ? `${data.name}: $${data.price}, аренда $${getRent(idx)}` : data.name;
  });
  renderLog();
  updateControls();
}

function renderLog() {
  if (!state) return;
  $("log").innerHTML = state.gameLog.slice(-12).map(m => `<div>${escapeHTML(m)}</div>`).join("");
  $("log").scrollTop = $("log").scrollHeight;
}
function addLog(m) {
  if (!state) return;
  state.gameLog.push(m);
  if (state.gameLog.length > 100) state.gameLog.shift();
  renderLog();
}

// ==================== СОБСТВЕННОСТЬ ====================
function getCellOwnerId(idx) {
  if (!state) return null;
  return Object.prototype.hasOwnProperty.call(state.owners, idx) ? state.owners[idx] : null;
}
function checkMonopoly(pid, sector) {
  const p = getPlayer(pid), req = SECTOR_COUNTS[sector];
  if (!p || p.bankrupt || !req) return false;
  const owned = p.companies.filter(ci => BOARD_DATA[ci].sector === sector && !state.mortgagedCells[ci]).length;
  return owned === req;
}
function isCellBlocked(idx) { return Boolean(state && state.blockedCells[idx] > state.turnNumber); }
function getRent(idx) {
  const cell = BOARD_DATA[idx];
  if (!state || !cell || cell.type !== "company" || state.mortgagedCells[idx] || isCellBlocked(idx)) return 0;
  const oid = getCellOwnerId(idx);
  if (oid === null) return 0;
  const b = state.buildings[idx] || { houses: 0, hotels: 0 };
  if (b.hotels) return cell.rent * 4;
  if (b.houses) return cell.rent * 3;
  return checkMonopoly(oid, cell.sector) ? cell.rent * 2 : cell.rent;
}
function buyCompany(player, ci, price) {
  if (getCellOwnerId(ci) !== null) throw new Error("Эта компания уже принадлежит игроку.");
  player.money -= price;
  player.companies.push(ci);
  state.owners[ci] = player.id;
}
async function announceMonopoly(token, player, sector) {
  if (!checkMonopoly(player.id, sector)) return;
  playSound("success");
  addLog(`🌟 ${player.name} собрал сектор «${sector}».`);
  await gameNotice(token, player, "🌟 МОНОПОЛИЯ!", `<div class="modal-info">
    ${escapeHTML(player.name)} собрал сектор «${escapeHTML(sector)}»!<br><br>
    Аренда без построек ×2.<br>Доступно строительство.
  </div>`);
}
function mortgageCompany(player, ci) {
  if (getCellOwnerId(ci) !== player.id || state.mortgagedCells[ci]) return;
  const v = Math.floor(BOARD_DATA[ci].price * 0.5);
  player.money += v;
  state.mortgagedCells[ci] = true;
  addLog(`🏦 ${player.name} заложил ${BOARD_DATA[ci].name}: +$${v}.`);
  playSound("money");
}
async function manageProperty(ci) {
  if (!state || state.phase !== "ready" || state.gameOver) return;
  const p = currentPlayer();
  if (!p || p.isAI || getCellOwnerId(ci) !== p.id) return;
  const token = sessionId, cell = BOARD_DATA[ci];
  state.phase = "management";
  updateControls();
  try {
    const mortgaged = Boolean(state.mortgagedCells[ci]);
    const amount = Math.floor(cell.price * (mortgaged ? 0.6 : 0.5));
    const choice = await gameDialog(token, "🏦 УПРАВЛЕНИЕ КОМПАНИЕЙ",
      `<div class="modal-info">
        ${escapeHTML(cell.name)}<br>Баланс: $${p.money}<br><br>
        ${mortgaged ? `Стоимость выкупа: $${amount}.` : `При залоге ты получишь $${amount}.<br>Заложенная не приносит аренду.`}
      </div>`,
      [
        { label: mortgaged ? `[ ВЫКУПИТЬ ] $${amount}` : `[ ЗАЛОЖИТЬ ] +$${amount}`, value: "confirm", kind: "primary", disabled: mortgaged && p.money < amount },
        { label: "[ НАЗАД ]", value: "cancel" }
      ]);
    if (choice === "confirm") {
      if (mortgaged) { p.money -= amount; delete state.mortgagedCells[ci]; addLog(`🏦 ${p.name} выкупил ${cell.name}.`); playSound("money"); }
      else mortgageCompany(p, ci);
    }
    assertSession(token);
    state.phase = "ready";
    updateUI();
    saveGame(true);
  } catch (e) { reportError(e); }
}

// ==================== КУБИК ====================
function drawDiceFace(ctx, cx, cy, r, value) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = "#1f2a35"; ctx.strokeStyle = "#00ff88"; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.rect(cx - r, cy - r, r * 2, r * 2); ctx.fill(); ctx.stroke();
  const dots = {
    1: [[0, 0]], 2: [[-0.5, -0.5], [0.5, 0.5]], 3: [[-0.5, -0.5], [0, 0], [0.5, 0.5]],
    4: [[-0.5, -0.5], [0.5, -0.5], [-0.5, 0.5], [0.5, 0.5]],
    5: [[-0.5, -0.5], [0.5, -0.5], [0, 0], [-0.5, 0.5], [0.5, 0.5]],
    6: [[-0.5, -0.6], [0.5, -0.6], [-0.5, 0], [0.5, 0], [-0.5, 0.6], [0.5, 0.6]]
  }[value] || [];
  ctx.fillStyle = "#00ff88";
  dots.forEach(([dx, dy]) => { ctx.beginPath(); ctx.arc(cx + dx * r, cy + dy * r, 6, 0, Math.PI * 2); ctx.fill(); });
}
function drawInitialDice() {
  const ctx = $("dice-canvas").getContext("2d");
  if (ctx) drawDiceFace(ctx, 50, 50, 40, state?.diceValue || 1);
}
async function animateDice(token) {
  const canvas = $("dice-canvas"), ctx = canvas.getContext("2d");
  if (!ctx) { await wait(200, token); return; }
  for (let f = 0; f < 14; f++) {
    assertSession(token);
    drawDiceFace(ctx, 50, 50, 40, Math.floor(Math.random() * 6) + 1);
    if (f % 4 === 0) playSound("dice");
    await wait(50, token);
  }
  drawDiceFace(ctx, 50, 50, 40, state.diceValue);
  playSound("roll");
  await wait(180, token);
}

async function movePlayer(token, player, steps) {
  for (let s = 0; s < steps; s++) {
    assertSession(token);
    player.pos = (player.pos + 1) % BOARD_SIZE;
    if (player.pos === 0) { player.money += START_BONUS; addLog(`🚀 ${player.name} прошёл старт: +$${START_BONUS}.`); playSound("success"); }
    updateUI();
    await wait(90, token);
  }
  addLog(`📍 ${player.name} → ${BOARD_DATA[player.pos].name}`);
  await wait(150, token);
}

async function playTurn(asAI = false) {
  if (!state || state.gameOver || state.phase !== "ready" || modalResolve) return;
  const p = currentPlayer();
  if (!p || p.bankrupt || p.isAI !== asAI) return;
  clearTimeout(aiTimer); aiTimer = null;
  const token = sessionId;
  state.phase = "rolling";
  state.diceValue = Math.floor(Math.random() * 6) + 1;
  updateControls();
  try {
    await animateDice(token);
    addLog(`[T${state.turnNumber}] ${p.marker} ${p.name}: выпало ${state.diceValue}.`);
    state.phase = "moving";
    await movePlayer(token, p, state.diceValue);
    state.phase = "resolving";
    await handleCell(token, p, p.pos);
    assertSession(token);
    if (!await settleDebts(token)) return;
    assertSession(token);
    finishTurn();
  } catch (e) { reportError(e); }
}

function scheduleAI(delay = 700) {
  clearTimeout(aiTimer); aiTimer = null;
  if (!state || state.gameOver || state.phase !== "ready" || !currentPlayer()?.isAI) return;
  const token = sessionId;
  aiTimer = setTimeout(() => {
    aiTimer = null;
    if (token !== sessionId || !state || state.gameOver || state.phase !== "ready" || !currentPlayer()?.isAI) return;
    if (modalResolve) { scheduleAI(300); return; }
    void playTurn(true);
  }, delay);
}

// ==================== КОМПАНИИ ====================
async function handleCompany(token, player, ci, cell) {
  const ownerId = getCellOwnerId(ci);
  if (ownerId === null) {
    if (player.isAI) {
      if (player.money >= cell.price + 100) { buyCompany(player, ci, cell.price); playSound("buy"); addLog(`💼 ${player.name} купил ${cell.name}.`); await announceMonopoly(token, player, cell.sector); }
      else addLog(`⏭ ${player.name} пропустил ${cell.name}.`);
      return;
    }
    await showPurchaseDialog(token, player, ci, cell);
    return;
  }
  if (ownerId === player.id) {
    if (state.mortgagedCells[ci]) {
      const cost = Math.floor(cell.price * 0.6);
      if (player.isAI) { if (player.money >= cost + 200) { player.money -= cost; delete state.mortgagedCells[ci]; addLog(`🏦 ${player.name} выкупил ${cell.name}.`); } return; }
      const choice = await gameDialog(token, "🏦 ВЫКУП",
        `<div class="modal-info">${escapeHTML(cell.name)}<br>Выкуп: $${cost}<br>Баланс: $${player.money}</div>`,
        [
          { label: `[ ВЫКУПИТЬ ] $${cost}`, value: "buyback", kind: "primary", disabled: player.money < cost },
          { label: "[ ПРОПУСТИТЬ ]", value: "skip" }
        ]);
      if (choice === "buyback") { player.money -= cost; delete state.mortgagedCells[ci]; playSound("money"); addLog(`🏦 ${player.name} выкупил ${cell.name}.`); }
      return;
    }
    const b = state.buildings[ci] || { houses: 0, hotels: 0 };
    if (checkMonopoly(player.id, cell.sector) && !b.hotels) {
      await showBuildDialog(token, player, ci, cell, b);
    } else {
      addLog(`🏠 ${player.name} на своей компании ${cell.name}.`);
    }
    return;
  }
  const owner = getPlayer(ownerId), rent = getRent(ci);
  if (!owner || owner.bankrupt || rent === 0) { addLog(`🛡 ${cell.name}: аренда не взимается.`); return; }
  let payment = rent;
  if (!player.isAI) {
    const choice = await gameDialog(token, "🚨 ЧУЖАЯ КОМПАНИЯ",
      `<div class="modal-info">${escapeHTML(cell.name)}<br>Владелец: ${escapeHTML(owner.name)}<br>Аренда: $${rent}<br><br>Пентест: верно — $${Math.floor(rent / 2)}, неверно — $${rent * 2}.<br>Отмена вопроса — обычная аренда.</div>`,
      [
        { label: "[ ПЕНТЕСТ ]", value: "pentest", kind: "primary" },
        { label: `[ ЗАПЛАТИТЬ ] $${rent}`, value: "pay" }
      ]);
    if (choice === "pentest") {
      const result = await askQuestion(token, cell);
      if (result && result.correct === true) { payment = Math.floor(rent / 2); playSound("success"); }
      else if (result && result.correct === false) {
        payment = rent * 2; playSound("error");
        await gameDialog(token, "✗ ПЕНТЕСТ НЕ ПРОЙДЕН",
          `<div class="modal-info">Аренда: $${payment}<br>Правильный ответ: ${escapeHTML(correctAnswer(result.question))}</div>`);
      }
    }
  }
  player.money -= payment;
  owner.money += payment;
  addLog(`💸 ${player.name} → ${owner.name}: $${payment} за ${cell.name}.`);
}

async function showPurchaseDialog(token, player, ci, cell) {
  const penalty = Math.floor(cell.price * 1.5);
  const choice = await gameDialog(token, "💼 СВОБОДНАЯ КОМПАНИЯ",
    `<div class="modal-color-bar" style="background:${cell.color}"></div>
     <div class="modal-info">
       ${escapeHTML(cell.name)} ${difficultyBadge(cell.difficulty || 1)}<br>
       Цена: $${cell.price}<br>Базовая аренда: $${cell.rent}<br>
       Сектор: ${escapeHTML(cell.sector)}<br>Баланс: $${player.money}
     </div>
     <div class="modal-warning">Викторина: верно — бесплатно. Неверно — покупка за $${penalty}.</div>`,
    [
      { label: `[ КУПИТЬ ] $${cell.price}`, value: "buy", kind: "primary", disabled: player.money < cell.price },
      { label: "[ ВИКТОРИНА ]", value: "quiz", kind: "primary" },
      { label: "[ ПРОПУСТИТЬ ]", value: "skip" }
    ]);
  if (choice === "buy") { buyCompany(player, ci, cell.price); playSound("buy"); addLog(`💼 ${player.name} купил ${cell.name} за $${cell.price}.`); await announceMonopoly(token, player, cell.sector); return; }
  if (choice !== "quiz") { addLog(`⏭ ${player.name} пропустил ${cell.name}.`); return; }
  const result = await askQuestion(token, cell);
  if (!result) { addLog(`⏭ ${player.name} отменил викторину.`); return; }
  state.stats.questionsAsked++;
  if (result.correct) state.stats.questionsCorrect++;
  const cost = result.correct ? 0 : penalty;
  buyCompany(player, ci, cost);
  playSound(result.correct ? "success" : "error");
  addLog(result.correct ? `🎉 ${player.name} получил ${cell.name} бесплатно.` : `❌ ${player.name} получил ${cell.name} за $${cost}.`);
  updateUI();
  await gameDialog(token, result.correct ? "✓ ВЕРНО!" : "✗ ОШИБКА",
    `<div class="modal-info">${escapeHTML(cell.name)} теперь принадлежит тебе.<br>Стоимость: $${cost}.${result.correct ? "" : `<br>Правильный ответ: ${escapeHTML(correctAnswer(result.question))}`}</div>`);
  await announceMonopoly(token, player, cell.sector);
}

async function showBuildDialog(token, player, ci, cell, building) {
  const hotel = building.houses === 1, cost = hotel ? HOTEL_COST : HOUSE_COST;
  if (player.isAI) {
    const reserve = hotel ? 300 : 200;
    if (player.money >= cost + reserve) { player.money -= cost; state.buildings[ci] = { houses: 1, hotels: hotel ? 1 : 0 }; addLog(`${hotel ? "🏨" : "🏠"} ${player.name}: ${cell.name}.`); }
    return;
  }
  const choice = await gameDialog(token, "🏗 СТРОИТЕЛЬСТВО",
    `<div class="modal-info">${escapeHTML(cell.name)}<br>Текущая аренда: $${getRent(ci)}<br>Баланс: $${player.money}<br><br>${hotel ? "Отель" : "Дом"} стоит $${cost}.<br>Новая аренда: $${cell.rent * (hotel ? 4 : 3)}.</div>`,
    [
      { label: hotel ? `[ ПОСТРОИТЬ ОТЕЛЬ ] $${cost}` : `[ ПОСТРОИТЬ ДОМ ] $${cost}`, value: "build", kind: "primary", disabled: player.money < cost },
      { label: "[ ПРОПУСТИТЬ ]", value: "skip" }
    ]);
  if (choice === "build") { player.money -= cost; state.buildings[ci] = { houses: 1, hotels: hotel ? 1 : 0 }; playSound("buy"); addLog(`${hotel ? "🏨" : "🏠"} ${player.name} построил ${hotel ? "отель" : "дом"} на ${cell.name}.`); }
}

// ==================== СПЕЦКЛЕТКИ ====================
async function moneyEvent(token, player, title, amount, description) {
  player.money += amount;
  playSound(amount >= 0 ? "success" : "error");
  addLog(`${title}: ${player.name} ${amount >= 0 ? "+" : "−"}$${Math.abs(amount)}.`);
  await gameNotice(token, player, title, `<div class="modal-info">${escapeHTML(description)}<br><br>Баланс: $${player.money}.</div>`);
}
async function handleVPN(token, player) {
  const free = BOARD_DATA.map((c, ci) => ci).filter(ci => BOARD_DATA[ci].type === "company" && getCellOwnerId(ci) === null);
  if (!free.length) { addLog("🌐 VPN: свободных компаний нет."); return; }
  const target = randomItem(free);
  player.pos = target;
  addLog(`🌐 ${player.name} → ${BOARD_DATA[target].name}.`);
  await gameNotice(token, player, "🌐 VPN", `<div class="modal-info">Телепорт на ${escapeHTML(BOARD_DATA[target].name)}.</div>`);
  assertSession(token);
  await handleCompany(token, player, target, BOARD_DATA[target]);
}
async function handleDDoS(token, player) {
  const targets = activePlayers().filter(x => x.id !== player.id).flatMap(x => x.companies);
  if (!targets.length) { addLog("⚔️ DDoS: подходящих целей нет."); return; }
  const target = randomItem(targets);
  state.blockedCells[target] = state.turnNumber + 3;
  addLog(`⚔️ ${BOARD_DATA[target].name}: блокировка аренды.`);
  await gameNotice(token, player, "⚔️ DDoS", `<div class="modal-info">${escapeHTML(BOARD_DATA[target].name)} не приносит аренду в течение следующих двух ходов.</div>`);
}
async function handleCell(token, player, ci) {
  assertSession(token);
  const cell = BOARD_DATA[ci];
  if (!cell) throw new Error(`Не найдена клетка ${ci}.`);
  switch (cell.type) {
    case "company": await handleCompany(token, player, ci, cell); break;
    case "chance": { const ev = randomItem(CHANCE_EVENTS); await moneyEvent(token, player, "🎴 ШАНС", ev[1], ev[0]); break; }
    case "treasury": { const ev = randomItem(TREASURY_EVENTS); await moneyEvent(token, player, "🎴 КАЗНА", ev[1], ev[0]); break; }
    case "bug": player.pos = (player.pos - 3 + BOARD_SIZE) % BOARD_SIZE; await moneyEvent(token, player, "💥 БАГ", -100, "Потеря $100 и откат на три клетки."); break;
    case "tax": await moneyEvent(token, player, "🧾 НАЛОГ", -150, "Уплата налога: $150."); break;
    case "hackathon": await moneyEvent(token, player, "🏆 ХАКАТОН", 200, "Награда за победу: $200."); break;
    case "sandbox": await moneyEvent(token, player, "🔒 SANDBOX", -100, "Расходы на изолированную среду: $100."); break;
    case "vpn": await handleVPN(token, player); break;
    case "ddos": await handleDDoS(token, player); break;
    case "opensource":
      player.money += 150;
      activePlayers().forEach(x => { if (x.id !== player.id) x.money += 50; });
      playSound("success");
      addLog(`🐧 ${player.name}: +$150, остальным активным +$50.`);
      await gameNotice(token, player, "🐧 OPEN SOURCE", `<div class="modal-info">Ты получаешь $150.<br>Остальные активные игроки — по $50.</div>`);
      break;
    default: break;
  }
}

// ==================== ДОЛГИ ====================
function eliminatePlayer(player) {
  for (const ci of player.companies) { delete state.owners[ci]; delete state.mortgagedCells[ci]; delete state.buildings[ci]; delete state.blockedCells[ci]; }
  player.companies = []; player.money = 0; player.bankrupt = true;
  addLog(`💀 ${player.name} обанкротился.`);
  playSound("error");
}
async function settleDebts(token) {
  for (const player of state.players) {
    if (player.bankrupt || player.money >= 0) continue;
    while (player.money < 0) {
      assertSession(token);
      const available = player.companies.filter(ci => !state.mortgagedCells[ci]);
      const possible = available.reduce((t, ci) => t + Math.floor(BOARD_DATA[ci].price * 0.5), 0);
      if (player.money + possible < 0) {
        eliminatePlayer(player);
        updateUI();
        if (!player.isAI) await gameDialog(token, "💀 БАНКРОТСТВО", `<div class="modal-info">Залога всех компаний не хватает.<br>${escapeHTML(player.name)} выбывает.</div>`);
        break;
      }
      if (player.isAI) { const t = [...available].sort((a, b) => BOARD_DATA[a].price - BOARD_DATA[b].price)[0]; mortgageCompany(player, t); continue; }
      const choice = await gameDialog(token, "💳 НУЖНО ПОКРЫТЬ ДОЛГ",
        `<div class="modal-info">${escapeHTML(player.name)}<br>Баланс: $${player.money}<br><br>Выбери компанию для залога.</div>`,
        available.map(ci => ({ label: `[ ЗАЛОЖИТЬ ] ${BOARD_DATA[ci].name} +$${Math.floor(BOARD_DATA[ci].price * 0.5)}`, value: ci, kind: "primary" })));
      if (Number.isInteger(choice)) { mortgageCompany(player, choice); updateUI(); }
    }
  }
  if (activePlayers().length <= 1) { await endGame(token); return false; }
  return true;
}

// ==================== КОНЕЦ ХОДА ====================
function finishTurn() {
  if (!state || state.gameOver) return;
  state.players.forEach(p => {
    const h = state.balanceHistory[p.id] || [];
    h.push(p.money);
    if (h.length > 30) h.shift();
    state.balanceHistory[p.id] = h;
  });
  let next = state.currentPlayerIdx;
  do { next = (next + 1) % state.players.length; } while (state.players[next].bankrupt);
  state.currentPlayerIdx = next;
  state.turnNumber++;
  state.phase = "ready";
  for (const ci of Object.keys(state.blockedCells)) if (state.blockedCells[ci] <= state.turnNumber) delete state.blockedCells[ci];
  updateUI();
  saveGame(true);
  scheduleAI();
}

async function skipTurn() {
  if (!state || state.gameOver || state.phase !== "ready" || modalResolve) return;
  const p = currentPlayer();
  if (!p || p.isAI || p.bankrupt) return;
  if (p.money < SKIP_COST) { openDialog("Недостаточно средств", `<div class="modal-info">Для пропуска нужно $${SKIP_COST}.</div>`); return; }
  const token = sessionId;
  state.phase = "confirming";
  updateControls();
  try {
    const choice = await gameDialog(token, "⏭ ПРОПУСК ХОДА", `<div class="modal-info">Пропустить ход за $${SKIP_COST}?</div>`,
      [
        { label: `[ ПРОПУСТИТЬ ] $${SKIP_COST}`, value: "skip", kind: "primary" },
        { label: "[ ОТМЕНА ]", value: "cancel" }
      ]);
    if (choice === "skip") { p.money -= SKIP_COST; addLog(`⏭ ${p.name} пропустил ход: −$${SKIP_COST}.`); finishTurn(); }
    else { state.phase = "ready"; updateUI(); }
  } catch (e) { reportError(e); }
}

async function endGame(token) {
  state.gameOver = true;
  state.phase = "finished";
  clearTimeout(aiTimer); aiTimer = null;
  try { localStorage.removeItem(SAVE_KEY); } catch (e) {}
  const winner = activePlayers()[0];
  updateUI();
  playSound("win");
  const results = state.players.map(p => `${p.marker} ${escapeHTML(p.name)}: ${p.bankrupt ? "банкрот" : `$${p.money}, компаний: ${p.companies.length}`}`).join("<br>");
  const quizStats = `<br><br>📊 Вопросов задано: ${state.stats.questionsAsked}<br>✓ Верных: ${state.stats.questionsCorrect}`;
  const choice = await gameDialog(token, "🏆 ИГРА ОКОНЧЕНА",
    `<div class="modal-info">${winner ? `Победитель: ${winner.marker} ${escapeHTML(winner.name)}` : "Все выбыли."}<br><br>${results}${quizStats}</div>`,
    [
      { label: "[ НОВАЯ ИГРА ]", value: "restart", kind: "primary" },
      { label: "[ В МЕНЮ ]", value: "menu" }
    ]);
  if (choice === "restart") restartGame();
  else backToMenu();
}

// ==================== СТАТИСТИКА ====================
function showStats() {
  if (!state || state.phase !== "ready") return;
  const rows = state.players.map(p => {
    const monos = Object.keys(SECTOR_COUNTS).filter(s => checkMonopoly(p.id, s)).length;
    const mortg = p.companies.filter(ci => state.mortgagedCells[ci]).length;
    return `<tr>
      <td style="color:${p.color}">${p.marker} ${escapeHTML(p.name)} ${p.bankrupt ? "✗" : ""}</td>
      <td>$${p.money}</td>
      <td>${p.companies.length}</td>
      <td>${mortg}</td>
      <td>${monos}</td>
    </tr>`;
  }).join("");
  openDialog("📊 СТАТИСТИКА",
    `<canvas id="stats-canvas" class="stats-chart" width="500" height="180"></canvas>
     <div class="stats-wrap"><table class="stats-table">
       <thead><tr><th>Игрок</th><th>Баланс</th><th>Комп.</th><th>Залог</th><th>Моноп.</th></tr></thead>
       <tbody>${rows}</tbody>
     </table></div>
     <div class="quiz-stat-line">
       📊 Вопросов задано: <strong>${state.stats.questionsAsked}</strong> &nbsp;|&nbsp;
       ✓ Верных: <strong>${state.stats.questionsCorrect}</strong>
     </div>`);
  drawStatsChart();
}

function drawStatsChart() {
  const c = $("stats-canvas");
  if (!c || !state) return;
  const ctx = c.getContext("2d"); if (!ctx) return;
  const W = c.width, H = c.height;
  const left = 60, right = W - 12, top = 12, bottom = H - 22;
  let min = 0, max = 1000;
  Object.values(state.balanceHistory).forEach(h => h.forEach(v => { min = Math.min(min, v); max = Math.max(max, v); }));
  const range = max - min || 1;
  ctx.clearRect(0, 0, W, H);
  ctx.font = "10px Consolas, monospace";
  for (let i = 0; i <= 4; i++) {
    const y = top + (bottom - top) * i / 4;
    const v = Math.round(max - range * i / 4);
    ctx.strokeStyle = "#21262d"; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(left, y); ctx.lineTo(right, y); ctx.stroke();
    ctx.fillStyle = "#8b949e"; ctx.fillText(`$${v}`, 3, y + 3);
  }
  const maxLen = Math.max(2, ...state.players.map(p => (state.balanceHistory[p.id] || []).length));
  state.players.forEach(p => {
    const h = state.balanceHistory[p.id] || []; if (!h.length) return;
    ctx.strokeStyle = p.color; ctx.lineWidth = 2; ctx.beginPath();
    h.forEach((v, i) => {
      const x = left + (right - left) * i / (maxLen - 1);
      const y = top + (bottom - top) * (1 - (v - min) / range);
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    });
    ctx.stroke();
  });
  ctx.fillStyle = "#8b949e";
  ctx.fillText("История баланса по завершённым ходам", left, H - 5);
}

// ==================== СОХРАНЕНИЕ ====================
function refreshLoadButton() {
  try { $("load-btn").disabled = !localStorage.getItem(SAVE_KEY); }
  catch (e) { $("load-btn").disabled = true; $("menu-status").textContent = "Хранилище недоступно."; }
}
function saveGame(silent = false) {
  if (!state || state.gameOver || state.phase !== "ready") return false;
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(state));
    refreshLoadButton();
    if (!silent) { playSound("buy"); openDialog("💾 СОХРАНЕНО", `<div class="modal-info">Позиция сохранена в браузере.</div>`); }
    return true;
  } catch (e) {
    console.warn("Ошибка сохранения:", e);
    if (!silent) openDialog("Сохранение недоступно", `<div class="modal-info">Браузер не разрешил запись в localStorage.</div>`);
    return false;
  }
}
function validateSave(data) {
  const isObj = v => v !== null && typeof v === "object" && !Array.isArray(v);
  if (!isObj(data) || data.version !== SAVE_VERSION || data.boardSize !== BOARD_SIZE) throw new Error("Сохранение от другой версии игры.");
  if (!Array.isArray(data.players) || data.players.length < 2 || data.players.length > 4 ||
      !Number.isInteger(data.currentPlayerIdx) || data.currentPlayerIdx < 0 || data.currentPlayerIdx >= data.players.length ||
      !Number.isInteger(data.turnNumber) || data.turnNumber < 1 || data.phase !== "ready" || data.gameOver !== false) {
    throw new Error("Повреждены основные данные сохранения.");
  }
  for (const k of ["owners", "mortgagedCells", "buildings", "blockedCells", "balanceHistory"]) if (!isObj(data[k])) throw new Error(`Повреждён раздел: ${k}.`);
  const owners = {}, used = new Set();
  data.players.forEach((p, i) => {
    if (!isObj(p) || p.id !== i || !Number.isFinite(p.money) || p.money < 0 || !Number.isInteger(p.pos) || p.pos < 0 || p.pos >= BOARD_SIZE || !Array.isArray(p.companies) || typeof p.bankrupt !== "boolean" || typeof p.isAI !== "boolean") throw new Error("Повреждены данные игрока.");
    p.name = `P${i + 1}`; p.color = PLAYER_COLORS[i]; p.marker = PLAYER_MARKERS[i];
    if (p.bankrupt && p.companies.length) throw new Error("Некорректные компании выбывшего игрока.");
    for (const ci of p.companies) {
      if (!Number.isInteger(ci) || BOARD_DATA[ci]?.type !== "company" || used.has(ci)) throw new Error("Повреждён список компаний.");
      used.add(ci); owners[ci] = p.id;
    }
    const h = data.balanceHistory[p.id];
    data.balanceHistory[p.id] = Array.isArray(h) && h.every(Number.isFinite) ? h.slice(-30) : [p.money];
  });
  data.owners = owners;
  const m = {}, b = {}, bl = {};
  for (const ci of used) {
    if (data.mortgagedCells[ci]) m[ci] = true;
    const bd = data.buildings[ci];
    if (isObj(bd)) { const hotels = bd.hotels === 1 ? 1 : 0; b[ci] = { houses: hotels || bd.houses === 1 ? 1 : 0, hotels }; }
    const ex = data.blockedCells[ci];
    if (Number.isInteger(ex) && ex > data.turnNumber) bl[ci] = ex;
  }
  data.mortgagedCells = m; data.buildings = b; data.blockedCells = bl;
  data.gameLog = Array.isArray(data.gameLog) ? data.gameLog.filter(x => typeof x === "string").slice(-100) : [];
  data.diceValue = Number.isInteger(data.diceValue) && data.diceValue >= 1 && data.diceValue <= 6 ? data.diceValue : 1;
  data.usedQuestions = isObj(data.usedQuestions) ? data.usedQuestions : {};
  data.stats = isObj(data.stats) ? data.stats : { questionsAsked: 0, questionsCorrect: 0 };
  if (data.players[data.currentPlayerIdx].bankrupt || data.players.filter(p => !p.bankrupt).length < 2) throw new Error("В сохранении нет продолжающейся игры.");
  return data;
}
function loadGame() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) { openDialog("Нет сохранения", `<div class="modal-info">Сохранённая игра не найдена.</div>`); refreshLoadButton(); return; }
    const restored = validateSave(JSON.parse(raw));
    stopSession();
    state = restored;
    numPlayers = state.players.length;
    state.players.forEach((p, i) => { playerConfigs[i].isAI = p.isAI; });
    showGameScreen();
    buildBoard();
    addLog("💾 Сохранение загружено.");
    updateUI();
    drawInitialDice();
    scheduleAI();
  } catch (e) {
    console.error("Ошибка загрузки:", e);
    openDialog("Не удалось загрузить игру", `<div class="modal-info">${escapeHTML(e instanceof Error ? e.message : String(e))}</div>`);
  }
}

// ==================== ИНИЦИАЛИЗАЦИЯ ====================
function init() {
  try {
    if (BOARD_SIZE !== GRID_POSITIONS.length) throw new Error("Количество клеток не совпадает с размером поля.");
    initMenu();
    $("start-btn").addEventListener("click", startGame);
    $("load-btn").addEventListener("click", loadGame);
    $("help-btn").addEventListener("click", showHelp);
    $("roll-btn").addEventListener("click", () => { void playTurn(false); });
    $("skip-btn").addEventListener("click", () => { void skipTurn(); });
    $("stats-btn").addEventListener("click", showStats);
    $("help-game-btn").addEventListener("click", showHelp);
    $("save-btn").addEventListener("click", () => saveGame(false));
    $("reset-btn").addEventListener("click", () => { if (confirm("Начать новую игру?")) restartGame(); });
    $("menu-btn").addEventListener("click", () => { if (confirm("Вернуться в меню? Ход не сохранится.")) backToMenu(); });
    $("board").addEventListener("click", e => { const c = e.target.closest("[data-cell]"); if (c) void manageProperty(Number(c.dataset.cell)); });
    const assetHandler = e => { const b = e.target.closest("[data-asset]"); if (b) void manageProperty(Number(b.dataset.asset)); };
    $("left-panel").addEventListener("click", assetHandler);
    $("right-panel").addEventListener("click", assetHandler);
  } catch (e) {
    $("menu-status").textContent = "Ошибка инициализации. Подробности в консоли.";
    reportError(e);
  }
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
else init();

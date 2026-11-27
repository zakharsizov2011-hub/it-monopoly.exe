"use strict";

// ==================== ДАННЫЕ ====================

const BOARD_DATA = [
  {
    name: "🚀 СТАРТ",
    type: "start",
    color: "#2d3238",
    sector: "Служебная"
  },
  {
    name: "HONOR",
    type: "company",
    price: 100,
    rent: 25,
    color: "#1e90ff",
    sector: "Мобильный",
    q: "Сколько бит в одном байте?",
    opts: ["A) 4", "B) 8", "C) 16", "D) 10"],
    ans: "B"
  },
  {
    name: "XIAOMI",
    type: "company",
    price: 120,
    rent: 30,
    color: "#1e90ff",
    sector: "Мобильный",
    q: "Какая система счисления используется для представления битов?",
    opts: ["A) Десятичная", "B) Восьмеричная", "C) Двоичная", "D) Шестнадцатеричная"],
    ans: "C"
  },
  {
    name: "🌐 VPN",
    type: "vpn",
    color: "#ff8c00",
    sector: "Спецклетка"
  },
  {
    name: "SAMSUNG",
    type: "company",
    price: 140,
    rent: 35,
    color: "#1e90ff",
    sector: "Мобильный",
    q: "Какая память обычно теряет данные при выключении питания?",
    opts: ["A) SSD", "B) RAM", "C) HDD", "D) Flash ROM"],
    ans: "B"
  },
  {
    name: "LENOVO",
    type: "company",
    price: 160,
    rent: 40,
    color: "#228b22",
    sector: "ПК и CPU",
    q: "Какая команда Linux показывает список файлов?",
    opts: ["A) cd", "B) pwd", "C) ls", "D) rm"],
    ans: "C"
  },
  {
    name: "🎴 ШАНС",
    type: "chance",
    color: "#9b59b6",
    sector: "Спецклетка"
  },
  {
    name: "🔒 SANDBOX",
    type: "sandbox",
    color: "#2d3238",
    sector: "Служебная"
  },
  {
    name: "AMD",
    type: "company",
    price: 200,
    rent: 50,
    color: "#228b22",
    sector: "ПК и CPU",
    q: "Какая утилита проверяет доступность узла с помощью ICMP Echo?",
    opts: ["A) ping", "B) mkdir", "C) chmod", "D) grep"],
    ans: "A"
  },
  {
    name: "⚔️ DDoS",
    type: "ddos",
    color: "#ff8c00",
    sector: "Спецклетка"
  },
  {
    name: "INTEL",
    type: "company",
    price: 220,
    rent: 55,
    color: "#228b22",
    sector: "ПК и CPU",
    q: "Что такое CPU?",
    opts: ["A) Центральный процессор", "B) Видеокарта", "C) Блок питания", "D) Сетевая карта"],
    ans: "A"
  },
  {
    name: "RED HAT",
    type: "company",
    price: 240,
    rent: 60,
    color: "#ffcc00",
    sector: "ОС и софт",
    q: "Какая команда позволяет выполнять разрешённые команды от имени другого пользователя, обычно root?",
    opts: ["A) admin", "B) sudo", "C) rootgo", "D) access"],
    ans: "B"
  },
  {
    name: "UBUNTU",
    type: "company",
    price: 260,
    rent: 65,
    color: "#ffcc00",
    sector: "ОС и софт",
    q: "Какой инструмент используется для управления пакетами в Ubuntu?",
    opts: ["A) yum", "B) apt", "C) pacman", "D) brew"],
    ans: "B"
  },
  {
    name: "CISCO",
    type: "company",
    price: 280,
    rent: 70,
    color: "#dc143c",
    sector: "Сети",
    q: "Какой TCP-порт по умолчанию использует SSH?",
    opts: ["A) 21", "B) 22", "C) 80", "D) 443"],
    ans: "B"
  },
  {
    name: "🎴 КАЗНА",
    type: "treasury",
    color: "#9b59b6",
    sector: "Спецклетка"
  },
  {
    name: "🏆 ХАКАТОН",
    type: "hackathon",
    color: "#2d3238",
    sector: "Служебная"
  },
  {
    name: "KASPERSKY",
    type: "company",
    price: 300,
    rent: 75,
    color: "#dc143c",
    sector: "Сети",
    q: "Как называется распределённая атака, перегружающая сервис запросами?",
    opts: ["A) Фишинг", "B) DDoS", "C) Брутфорс", "D) Сниффинг"],
    ans: "B"
  },
  {
    name: "HUAWEI",
    type: "company",
    price: 320,
    rent: 80,
    color: "#dc143c",
    sector: "Сети",
    q: "Как расшифровывается LAN?",
    opts: ["A) Local Area Network", "B) Large Access Node", "C) Link Aggregation Node", "D) Local App Network"],
    ans: "A"
  },
  {
    name: "💥 БАГ",
    type: "bug",
    color: "#ff8c00",
    sector: "Спецклетка"
  },
  {
    name: "YANDEX",
    type: "company",
    price: 340,
    rent: 85,
    color: "#ba55d3",
    sector: "Бигтех РФ",
    q: "Какая система сопоставляет доменные имена и IP-адреса?",
    opts: ["A) VPN", "B) NAT", "C) DNS", "D) MAC"],
    ans: "C"
  },
  {
    name: "VK TECH",
    type: "company",
    price: 360,
    rent: 90,
    color: "#ba55d3",
    sector: "Бигтех РФ",
    q: "Какой порт по умолчанию использует HTTPS?",
    opts: ["A) 25", "B) 53", "C) 80", "D) 443"],
    ans: "D"
  },
  {
    name: "OZON",
    type: "company",
    price: 380,
    rent: 95,
    color: "#ba55d3",
    sector: "Бигтех РФ",
    q: "Какая из перечисленных команд может показать IP-адрес и маску сетевого интерфейса?",
    opts: ["A) ifconfig", "B) lsblk", "C) df -h", "D) uname -a"],
    ans: "A"
  },
  {
    name: "🧾 НАЛОГ",
    type: "tax",
    color: "#2d3238",
    sector: "Служебная"
  },
  {
    name: "ORACLE",
    type: "company",
    price: 400,
    rent: 100,
    color: "#00ffff",
    sector: "БД и ИИ",
    q: "Какой оператор SQL используется для выборки данных?",
    opts: ["A) INSERT", "B) UPDATE", "C) SELECT", "D) DELETE"],
    ans: "C"
  },
  {
    name: "MICROSOFT",
    type: "company",
    price: 420,
    rent: 105,
    color: "#ffcc00",
    sector: "ОС и софт",
    q: "Как называется файл локального сопоставления имён узлов и IP-адресов в Windows?",
    opts: ["A) boot.ini", "B) hosts", "C) autoexec.bat", "D) config.sys"],
    ans: "B"
  },
  {
    name: "🐧 OPEN SRC",
    type: "opensource",
    color: "#ff8c00",
    sector: "Спецклетка"
  },
  {
    name: "IBM",
    type: "company",
    price: 440,
    rent: 110,
    color: "#00ffff",
    sector: "БД и ИИ",
    q: "Как расшифровывается AI?",
    opts: ["A) Auto Input", "B) Artificial Intelligence", "C) Advanced Interface", "D) Auto Integer"],
    ans: "B"
  },
  {
    name: "NVIDIA",
    type: "company",
    price: 460,
    rent: 115,
    color: "#00ffff",
    sector: "БД и ИИ",
    q: "К какому уровню модели OSI относится IP?",
    opts: ["A) 1", "B) 2", "C) 3", "D) 7"],
    ans: "C"
  },
  {
    name: "APPLE",
    type: "company",
    price: 500,
    rent: 125,
    color: "#1e90ff",
    sector: "Мобильный",
    q: "Какая маска соответствует IPv4-префиксу /24?",
    opts: ["A) 255.0.0.0", "B) 255.255.0.0", "C) 255.255.255.0", "D) 255.255.255.255"],
    ans: "C"
  },
  {
    name: "🎴 КАЗНА",
    type: "treasury",
    color: "#9b59b6",
    sector: "Спецклетка"
  }
];

const PLAYER_COLORS = [
  "#ff5555",
  "#4488ff",
  "#44cc44",
  "#ffcc44"
];

const PLAYER_MARKERS = ["🔴", "🔵", "🟢", "🟡"];

const HOUSE_COST = 100;
const HOTEL_COST = 300;
const SKIP_COST = 50;
const START_BONUS = 200;

const SAVE_KEY = "it_monopoly_save";
const SAVE_VERSION = 2;

const GRID_COLS = 9;
const GRID_ROWS = 8;
const BOARD_SIZE = BOARD_DATA.length;

const SECTOR_COUNTS = BOARD_DATA.reduce((counts, cell) => {
  if (cell.type === "company") {
    counts[cell.sector] = (counts[cell.sector] || 0) + 1;
  }

  return counts;
}, {});

// По часовой стрелке от нижнего правого угла.
const GRID_POSITIONS = [];

for (let col = GRID_COLS - 1; col >= 0; col--) {
  GRID_POSITIONS.push([col, GRID_ROWS - 1]);
}

for (let row = GRID_ROWS - 2; row >= 0; row--) {
  GRID_POSITIONS.push([0, row]);
}

for (let col = 1; col < GRID_COLS; col++) {
  GRID_POSITIONS.push([col, 0]);
}

for (let row = 1; row < GRID_ROWS - 1; row++) {
  GRID_POSITIONS.push([GRID_COLS - 1, row]);
}

const CHANCE_EVENTS = [
  ["💾 Утечка данных: −$150", -150],
  ["🚀 Инвестиции: +$300", 300],
  ["🐛 Найдена ошибка: +$100", 100],
  ["⚡ Ремонт сервера: −$200", -200],
  ["🏅 Выигран тендер: +$250", 250],
  ["🔒 Восстановление после взлома: −$180", -180],
  ["💡 Патент: +$200", 200],
  ["📉 Снижение стоимости акций: −$120", -120]
];

const TREASURY_EVENTS = [
  ["💰 Дивиденды: +$80", 80],
  ["🧾 Дополнительный налог: −$100", -100],
  ["🎁 Бонус: +$60", 60],
  ["🛠 Рефакторинг: −$90", -90],
  ["📈 Рост трафика: +$70", 70],
  ["🔧 Оборудование: −$110", -110]
];

let state = null;
let numPlayers = 2;

const playerConfigs = Array.from({ length: 4 }, (_, i) => ({
  name: `P${i + 1}`,
  isAI: false
}));

let sessionId = 0;
let aiTimer = null;
let modalResolve = null;
let audioContext = null;

const CANCELLED = Symbol("cancelled");

const $ = id => document.getElementById(id);

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function currentPlayer() {
  return state?.players[state.currentPlayerIdx] || null;
}

function getPlayer(id) {
  return state?.players.find(player => player.id === id) || null;
}

function activePlayers() {
  return state ? state.players.filter(player => !player.bankrupt) : [];
}

function assertSession(token) {
  if (token !== sessionId || !state) {
    throw CANCELLED;
  }
}

async function wait(ms, token) {
  await new Promise(resolve => setTimeout(resolve, ms));
  assertSession(token);
}

function stopSession() {
  sessionId++;

  clearTimeout(aiTimer);
  aiTimer = null;

  closeModal(null);
}

function reportError(error) {
  if (error === CANCELLED) return;

  console.error("IT-MONOPOLY:", error);

  if (state) {
    state.phase = "error";
    updateUI();
  }

  const message = error instanceof Error
    ? error.message
    : String(error);

  openDialog(
    "Ошибка",
    `<div class="modal-info">
      ${escapeHTML(message)}<br><br>
      Подробности доступны в консоли браузера.
      Можно вернуться в меню или начать новую игру.
    </div>`
  );
}

// ==================== ЗВУК ====================

function playSound(kind) {
  try {
    const AudioContextClass =
      window.AudioContext || window.webkitAudioContext;

    if (!AudioContextClass) return;

    if (!audioContext || audioContext.state === "closed") {
      audioContext = new AudioContextClass();
    }

    if (audioContext.state === "suspended") {
      audioContext.resume().catch(() => {});
    }

    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    const frequencies = {
      roll: 600,
      success: 900,
      error: 250,
      buy: 800,
      dice: 450,
      money: 1100,
      win: 1300
    };

    const now = audioContext.currentTime;

    oscillator.frequency.value = frequencies[kind] || 500;

    gain.gain.setValueAtTime(0.045, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    oscillator.start(now);
    oscillator.stop(now + 0.09);

    oscillator.onended = () => {
      oscillator.disconnect();
      gain.disconnect();
    };
  } catch (error) {
    // Недоступность звука не должна останавливать игру.
  }
}

// ==================== МОДАЛЬНЫЕ ОКНА ====================

function closeModal(result = null) {
  const resolve = modalResolve;
  modalResolve = null;

  $("modal-overlay").classList.remove("active");
  $("modal-box").innerHTML = "";

  if (resolve) {
    resolve(result);
  }
}

function openDialog(title, body, buttons = [
  { label: "[ OK ]", value: "ok", kind: "primary" }
]) {
  closeModal(null);

  const box = $("modal-box");

  box.innerHTML = `
    <h3 id="modal-title">${escapeHTML(title)}</h3>
    <div class="modal-content">${body}</div>
    <div class="modal-buttons"></div>
  `;

  const actions = box.querySelector(".modal-buttons");

  const promise = new Promise(resolve => {
    modalResolve = resolve;
  });

  for (const action of buttons) {
    const button = document.createElement("button");

    button.type = "button";
    button.className = `btn-${action.kind || "secondary"}`;
    button.textContent = action.label;
    button.disabled = Boolean(action.disabled);

    button.addEventListener("click", () => {
      const result = typeof action.value === "function"
        ? action.value()
        : action.value;

      // undefined означает, что окно пока нельзя закрывать.
      if (result !== undefined) {
        closeModal(result);
      }
    });

    actions.appendChild(button);
  }

  $("modal-overlay").classList.add("active");

  const firstButton = actions.querySelector("button:not(:disabled)");
  if (firstButton) firstButton.focus();

  return promise;
}

async function gameDialog(token, title, body, buttons) {
  assertSession(token);

  const result = await openDialog(title, body, buttons);

  assertSession(token);

  return result;
}

async function gameNotice(token, player, title, body) {
  updateUI();

  if (!player.isAI) {
    await gameDialog(token, title, body);
  }
}

// ==================== МЕНЮ ====================

function renderPlayerConfig() {
  const container = $("players-config");
  container.innerHTML = "";

  for (let i = 0; i < numPlayers; i++) {
    const row = document.createElement("div");

    row.className = `player-row p${i + 1}`;
    row.innerHTML = `
      <span class="name">
        ${PLAYER_MARKERS[i]} PLAYER_${i + 1}
      </span>
      <label>
        <input
          type="checkbox"
          ${playerConfigs[i].isAI ? "checked" : ""}
        >
        ИИ-бот
      </label>
    `;

    row.querySelector("input").addEventListener("change", event => {
      playerConfigs[i].isAI = event.target.checked;
    });

    container.appendChild(row);
  }
}

function initMenu() {
  const buttons = document.querySelectorAll(".num-btn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      buttons.forEach(item => item.classList.remove("active"));

      button.classList.add("active");
      numPlayers = Number(button.dataset.num);

      renderPlayerConfig();
    });
  });

  renderPlayerConfig();
  refreshLoadButton();

  $("menu-status").textContent =
    "Готово. Выбери игроков и нажми START.";
}

function showHelp() {
  if (state && state.phase !== "ready") return;

  openDialog(
    "// HELP.md",
    `<div class="modal-info">
      <strong>Цель:</strong> остаться единственным игроком
      без банкротства.<br><br>

      🎲 ROLL — бросить кубик.<br>
      ⏭ SKIP — пропустить ход за $${SKIP_COST}.<br>
      🚀 Прохождение старта — +$${START_BONUS}.<br><br>

      💼 Свободную компанию можно купить либо получить
      через викторину.<br>
      ✓ Верный ответ — компания бесплатно.<br>
      ✗ Неверный ответ — компания за 150% цены.<br><br>

      🚨 На чужой компании нужно заплатить аренду.
      Пентест: верный ответ уменьшает её вдвое,
      неверный — удваивает.<br><br>

      🌟 Полный сектор даёт аренду ×2.<br>
      🏠 Дом стоит $${HOUSE_COST}: аренда ×3 от базовой.<br>
      🏨 Отель стоит $${HOTEL_COST}: аренда ×4 от базовой.<br>
      Строительство доступно при попадании на свою
      компанию полного незаложенного сектора.<br><br>

      🏦 Нажми на свою компанию на поле или в списке:
      залог даёт 50% цены, выкуп стоит 60%.
      Заложенная компания не приносит аренду
      и не участвует в монополии.<br><br>

      💳 При долге предложен залог компаний.
      Если его недостаточно — банкротство.<br>
      ⚔️ DDoS блокирует аренду на следующие два хода.<br><br>

      💾 Сохранение выполняется между ходами.
      LOAD загружает последнюю сохранённую позицию.<br>
      📊 STATS показывает балансы и имущество.
    </div>`
  );
}

function showGameScreen() {
  $("menu-screen").classList.remove("active");
  $("game-screen").classList.add("active");
}

function startGame() {
  try {
    stopSession();

    const players = Array.from({ length: numPlayers }, (_, i) => ({
      id: i,
      name: `P${i + 1}`,
      money: 1000,
      pos: 0,
      color: PLAYER_COLORS[i],
      marker: PLAYER_MARKERS[i],
      companies: [],
      isAI: Boolean(playerConfigs[i].isAI),
      bankrupt: false
    }));

    state = {
      version: SAVE_VERSION,
      boardSize: BOARD_SIZE,
      players,
      currentPlayerIdx: 0,
      owners: {},
      mortgagedCells: {},
      buildings: {},
      blockedCells: {},
      gameLog: [],
      balanceHistory: Object.fromEntries(
        players.map(player => [player.id, [1000]])
      ),
      turnNumber: 1,
      diceValue: 1,
      phase: "ready",
      gameOver: false
    };

    showGameScreen();
    buildBoard();

    addLog(`🎮 Игра началась! Игроков: ${numPlayers}.`);
    updateUI();
    drawInitialDice();

    saveGame(true);
    scheduleAI();
  } catch (error) {
    reportError(error);
  }
}

function restartGame() {
  if (state) {
    numPlayers = state.players.length;

    state.players.forEach((player, i) => {
      playerConfigs[i].isAI = player.isAI;
    });
  }

  startGame();
}

function backToMenu() {
  stopSession();
  state = null;

  $("game-screen").classList.remove("active");
  $("menu-screen").classList.add("active");

  document.querySelectorAll(".num-btn").forEach(button => {
    button.classList.toggle(
      "active",
      Number(button.dataset.num) === numPlayers
    );
  });

  renderPlayerConfig();
  refreshLoadButton();
}

// ==================== ПОЛЕ И ИНТЕРФЕЙС ====================

function buildBoard() {
  if (GRID_POSITIONS.length !== BOARD_SIZE) {
    throw new Error(
      `Размер поля не совпадает: клеток ${BOARD_SIZE}, ` +
      `позиций ${GRID_POSITIONS.length}.`
    );
  }

  const board = $("board");
  board.innerHTML = "";

  BOARD_DATA.forEach((data, idx) => {
    const [col, row] = GRID_POSITIONS[idx];
    const cell = document.createElement("div");

    cell.id = `cell-${idx}`;
    cell.dataset.cell = String(idx);
    cell.className = `cell ${
      data.type === "company" ? "company" : "service"
    }`;

    cell.style.gridColumn = String(col + 1);
    cell.style.gridRow = String(row + 1);

    cell.innerHTML = `
      ${data.type === "company" ? `
        <div
          class="cell-color"
          style="background:${data.color}"
        ></div>
      ` : ""}

      <div class="cell-name">${escapeHTML(data.name)}</div>

      ${data.type === "company" ? `
        <div class="cell-price">$${data.price}</div>
      ` : ""}

      <div class="cell-owner"></div>
      <div class="cell-buildings"></div>
      <div class="cell-tokens"></div>
    `;

    board.appendChild(cell);
  });
}

function renderPanels() {
  if (!state) return;

  const left = $("left-panel");
  const right = $("right-panel");

  left.innerHTML = "";
  right.innerHTML = "";

  const half = Math.ceil(state.players.length / 2);

  state.players.forEach((player, index) => {
    const card = document.createElement("div");

    const isActive =
      index === state.currentPlayerIdx &&
      !player.bankrupt &&
      !state.gameOver;

    card.className = [
      "player-card",
      isActive ? "active" : "",
      player.bankrupt ? "bankrupt" : ""
    ].filter(Boolean).join(" ");

    card.style.borderColor = player.color;

    const companies = player.companies.length
      ? player.companies.map(ci => `
          <button
            type="button"
            class="asset-btn ${
              state.mortgagedCells[ci] ? "mortgaged" : ""
            }"
            data-asset="${ci}"
          >
            ${state.mortgagedCells[ci] ? "🔒" : "·"}
            ${escapeHTML(BOARD_DATA[ci].name)}
          </button>
        `).join("")
      : "—";

    const monopolies = Object.keys(SECTOR_COUNTS)
      .filter(sector => checkMonopoly(player.id, sector));

    card.innerHTML = `
      <div class="badge">&gt; ACTIVE &lt;</div>

      <div class="p-name" style="color:${player.color}">
        ${player.marker} ${escapeHTML(player.name)}
        ${player.isAI ? "[AI]" : ""}
      </div>

      <div class="p-money ${player.money < 0 ? "negative" : ""}">
        ${player.bankrupt ? "БАНКРОТ" : `$${player.money}`}
      </div>

      <div class="p-section">// COMPANIES</div>
      <div class="p-list">${companies}</div>

      <div class="p-section">// MONOPOLIES</div>
      <div class="p-list">
        ${monopolies.length
          ? monopolies.map(sector => `
              <div style="color:#ffcc00">
                ★ ${escapeHTML(sector)}
              </div>
            `).join("")
          : "—"}
      </div>
    `;

    (index < half ? left : right).appendChild(card);
  });
}

function updateControls() {
  if (!state) return;

  const player = currentPlayer();

  const ready =
    state.phase === "ready" &&
    !state.gameOver;

  const humanTurn =
    ready &&
    player &&
    !player.isAI &&
    !player.bankrupt;

  $("roll-btn").disabled = !humanTurn;
  $("skip-btn").disabled = !humanTurn;

  $("stats-btn").disabled = !ready;
  $("help-game-btn").disabled = !ready;
  $("save-btn").disabled = !ready;
}

function updateUI() {
  if (!state) return;

  const player = currentPlayer();

  if (player) {
    $("turn-info").textContent = state.gameOver
      ? "> GAME OVER"
      : `> T${state.turnNumber} | ${player.marker} ${player.name}` +
        (player.isAI ? " [AI]" : "");

    $("turn-info").style.color = player.color;
  }

  renderPanels();

  BOARD_DATA.forEach((data, idx) => {
    const cell = $(`cell-${idx}`);
    if (!cell) return;

    cell.querySelector(".cell-tokens").textContent = state.players
      .filter(item => !item.bankrupt && item.pos === idx)
      .map(item => item.marker)
      .join("");

    const buildings = state.buildings[idx] || {
      houses: 0,
      hotels: 0
    };

    cell.querySelector(".cell-buildings").textContent =
      buildings.hotels ? "🏨" : buildings.houses ? "🏠" : "";

    const owner = getPlayer(getCellOwnerId(idx));
    const mortgaged = Boolean(state.mortgagedCells[idx]);
    const blocked = isCellBlocked(idx);

    cell.classList.toggle("blocked", blocked);

    const ownerLabel = cell.querySelector(".cell-owner");

    if (owner) {
      cell.style.borderColor = owner.color;
      cell.style.background = mortgaged ? "#1f1418" : "#1a2129";

      ownerLabel.textContent =
        `${owner.name}${mortgaged ? " 🔒" : ""}` +
        `${blocked ? " ⚔️" : ""}`;

      ownerLabel.style.color = owner.color;
    } else {
      cell.style.borderColor = "#21262d";
      cell.style.background =
        data.type === "company" ? "#141a21" : "#1a2129";

      ownerLabel.textContent =
        data.type === "company" ? "free" : "";

      ownerLabel.style.color = "#6e7681";
    }

    cell.title = data.type === "company"
      ? `${data.name}: цена $${data.price}, аренда $${getRent(idx)}`
      : data.name;
  });

  renderLog();
  updateControls();
}

function renderLog() {
  if (!state) return;

  $("log").innerHTML = state.gameLog
    .slice(-12)
    .map(message => `<div>${escapeHTML(message)}</div>`)
    .join("");

  $("log").scrollTop = $("log").scrollHeight;
}

function addLog(message) {
  if (!state) return;

  state.gameLog.push(message);

  if (state.gameLog.length > 100) {
    state.gameLog.shift();
  }

  renderLog();
}

// ==================== СОБСТВЕННОСТЬ ====================

function getCellOwnerId(idx) {
  if (!state) return null;

  return Object.prototype.hasOwnProperty.call(state.owners, idx)
    ? state.owners[idx]
    : null;
}

function checkMonopoly(playerId, sector) {
  const player = getPlayer(playerId);
  const required = SECTOR_COUNTS[sector];

  if (!player || player.bankrupt || !required) {
    return false;
  }

  const owned = player.companies.filter(ci =>
    BOARD_DATA[ci].sector === sector &&
    !state.mortgagedCells[ci]
  ).length;

  return owned === required;
}

function isCellBlocked(idx) {
  return Boolean(
    state &&
    state.blockedCells[idx] > state.turnNumber
  );
}

function getRent(idx) {
  const cell = BOARD_DATA[idx];

  if (
    !state ||
    !cell ||
    cell.type !== "company" ||
    state.mortgagedCells[idx] ||
    isCellBlocked(idx)
  ) {
    return 0;
  }

  const ownerId = getCellOwnerId(idx);
  if (ownerId === null) return 0;

  const buildings = state.buildings[idx] || {
    houses: 0,
    hotels: 0
  };

  if (buildings.hotels) return cell.rent * 4;
  if (buildings.houses) return cell.rent * 3;

  return checkMonopoly(ownerId, cell.sector)
    ? cell.rent * 2
    : cell.rent;
}

function buyCompany(player, ci, price) {
  if (getCellOwnerId(ci) !== null) {
    throw new Error("Эта компания уже принадлежит игроку.");
  }

  player.money -= price;
  player.companies.push(ci);
  state.owners[ci] = player.id;
}

async function announceMonopoly(token, player, sector) {
  if (!checkMonopoly(player.id, sector)) return;

  playSound("success");
  addLog(`🌟 ${player.name} собрал сектор «${sector}».`);

  await gameNotice(
    token,
    player,
    "🌟 МОНОПОЛИЯ!",
    `<div class="modal-info">
      ${escapeHTML(player.name)} собрал сектор
      «${escapeHTML(sector)}»!<br><br>
      Аренда без построек ×2.<br>
      Доступно строительство при попадании на свои компании.
    </div>`
  );
}

function mortgageCompany(player, ci) {
  if (
    getCellOwnerId(ci) !== player.id ||
    state.mortgagedCells[ci]
  ) {
    return;
  }

  const value = Math.floor(BOARD_DATA[ci].price * 0.5);

  player.money += value;
  state.mortgagedCells[ci] = true;

  addLog(
    `🏦 ${player.name} заложил ${BOARD_DATA[ci].name}: +$${value}.`
  );

  playSound("money");
}

async function manageProperty(ci) {
  if (!state || state.phase !== "ready" || state.gameOver) {
    return;
  }

  const player = currentPlayer();

  if (
    !player ||
    player.isAI ||
    getCellOwnerId(ci) !== player.id
  ) {
    return;
  }

  const token = sessionId;
  const cell = BOARD_DATA[ci];

  state.phase = "management";
  updateControls();

  try {
    const mortgaged = Boolean(state.mortgagedCells[ci]);
    const amount = Math.floor(cell.price * (mortgaged ? 0.6 : 0.5));

    const choice = await gameDialog(
      token,
      "🏦 УПРАВЛЕНИЕ КОМПАНИЕЙ",
      `<div class="modal-info">
        ${escapeHTML(cell.name)}<br>
        Баланс: $${player.money}<br><br>
        ${mortgaged
          ? `Стоимость выкупа: $${amount}.`
          : `При залоге ты получишь $${amount}.<br>
             Заложенная компания не приносит аренду
             и не участвует в монополии.`}
      </div>`,
      [
        {
          label: mortgaged
            ? `[ ВЫКУПИТЬ ] $${amount}`
            : `[ ЗАЛОЖИТЬ ] +$${amount}`,
          value: "confirm",
          kind: "primary",
          disabled: mortgaged && player.money < amount
        },
        {
          label: "[ НАЗАД ]",
          value: "cancel"
        }
      ]
    );

    if (choice === "confirm") {
      if (mortgaged) {
        player.money -= amount;
        delete state.mortgagedCells[ci];

        addLog(`🏦 ${player.name} выкупил ${cell.name}.`);
        playSound("money");
      } else {
        mortgageCompany(player, ci);
      }
    }

    assertSession(token);

    state.phase = "ready";
    updateUI();
    saveGame(true);
  } catch (error) {
    reportError(error);
  }
}

// ==================== КУБИК И ДВИЖЕНИЕ ====================

function drawDiceFace(ctx, cx, cy, r, value) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  ctx.fillStyle = "#1f2a35";
  ctx.strokeStyle = "#00ff88";
  ctx.lineWidth = 3;

  ctx.beginPath();
  ctx.rect(cx - r, cy - r, r * 2, r * 2);
  ctx.fill();
  ctx.stroke();

  const dots = {
    1: [[0, 0]],
    2: [[-0.5, -0.5], [0.5, 0.5]],
    3: [[-0.5, -0.5], [0, 0], [0.5, 0.5]],
    4: [[-0.5, -0.5], [0.5, -0.5], [-0.5, 0.5], [0.5, 0.5]],
    5: [[-0.5, -0.5], [0.5, -0.5], [0, 0], [-0.5, 0.5], [0.5, 0.5]],
    6: [[-0.5, -0.6], [0.5, -0.6], [-0.5, 0], [0.5, 0], [-0.5, 0.6], [0.5, 0.6]]
  }[value] || [];

  ctx.fillStyle = "#00ff88";

  dots.forEach(([dx, dy]) => {
    ctx.beginPath();
    ctx.arc(
      cx + dx * r,
      cy + dy * r,
      6,
      0,
      Math.PI * 2
    );
    ctx.fill();
  });
}

function drawInitialDice() {
  const ctx = $("dice-canvas").getContext("2d");

  if (ctx) {
    drawDiceFace(ctx, 50, 50, 40, state?.diceValue || 1);
  }
}

async function animateDice(token) {
  const canvas = $("dice-canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    await wait(200, token);
    return;
  }

  for (let frame = 0; frame < 14; frame++) {
    assertSession(token);

    drawDiceFace(
      ctx,
      50,
      50,
      40,
      Math.floor(Math.random() * 6) + 1
    );

    if (frame % 4 === 0) {
      playSound("dice");
    }

    await wait(50, token);
  }

  drawDiceFace(ctx, 50, 50, 40, state.diceValue);
  playSound("roll");

  await wait(180, token);
}

async function movePlayer(token, player, steps) {
  for (let step = 0; step < steps; step++) {
    assertSession(token);

    player.pos = (player.pos + 1) % BOARD_SIZE;

    if (player.pos === 0) {
      player.money += START_BONUS;

      addLog(`🚀 ${player.name} прошёл старт: +$${START_BONUS}.`);
      playSound("success");
    }

    updateUI();
    await wait(90, token);
  }

  addLog(`📍 ${player.name} → ${BOARD_DATA[player.pos].name}`);

  await wait(150, token);
}

async function playTurn(asAI = false) {
  if (
    !state ||
    state.gameOver ||
    state.phase !== "ready" ||
    modalResolve
  ) {
    return;
  }

  const player = currentPlayer();

  if (
    !player ||
    player.bankrupt ||
    player.isAI !== asAI
  ) {
    return;
  }

  clearTimeout(aiTimer);
  aiTimer = null;

  const token = sessionId;

  // Блокируем повторное нажатие сразу, а не после анимации.
  state.phase = "rolling";
  state.diceValue = Math.floor(Math.random() * 6) + 1;

  updateControls();

  try {
    await animateDice(token);

    addLog(
      `[T${state.turnNumber}] ${player.marker} ` +
      `${player.name}: выпало ${state.diceValue}.`
    );

    state.phase = "moving";

    await movePlayer(token, player, state.diceValue);

    state.phase = "resolving";

    await handleCell(token, player, player.pos);

    assertSession(token);

    if (!await settleDebts(token)) {
      return;
    }

    assertSession(token);
    finishTurn();
  } catch (error) {
    reportError(error);
  }
}

function scheduleAI(delay = 700) {
  clearTimeout(aiTimer);
  aiTimer = null;

  if (
    !state ||
    state.gameOver ||
    state.phase !== "ready" ||
    !currentPlayer()?.isAI
  ) {
    return;
  }

  const token = sessionId;

  aiTimer = setTimeout(() => {
    aiTimer = null;

    if (
      token !== sessionId ||
      !state ||
      state.gameOver ||
      state.phase !== "ready" ||
      !currentPlayer()?.isAI
    ) {
      return;
    }

    // Бот не должен заменять открытое окно справки/статистики.
    if (modalResolve) {
      scheduleAI(300);
      return;
    }

    void playTurn(true);
  }, delay);
}

// ==================== ВИКТОРИНА ====================

async function askQuestion(token, cell) {
  const options = cell.opts.map(option => `
    <label>
      <input
        type="radio"
        name="quiz-answer"
        value="${escapeHTML(option[0])}"
      >
      ${escapeHTML(option)}
    </label>
  `).join("");

  const answer = await gameDialog(
    token,
    "🧠 ВОПРОС",
    `<div
       class="modal-color-bar"
       style="background:${cell.color}"
     ></div>

     <div class="quiz-question">
       ${escapeHTML(cell.q)}
     </div>

     <div class="quiz-options">${options}</div>
     <div id="quiz-warning" class="modal-warning"></div>`,
    [
      {
        label: "[ ОТВЕТИТЬ ]",
        kind: "primary",
        value: () => {
          const selected = document.querySelector(
            'input[name="quiz-answer"]:checked'
          );

          if (!selected) {
            $("quiz-warning").textContent =
              "Сначала выбери вариант ответа.";

            return undefined;
          }

          return selected.value;
        }
      },
      {
        label: "[ ОТМЕНА ]",
        value: null
      }
    ]
  );

  return answer === null ? null : answer === cell.ans;
}

function correctAnswer(cell) {
  return cell.opts.find(option => option[0] === cell.ans) || "?";
}

// ==================== КОМПАНИИ ====================

async function handleCompany(token, player, ci, cell) {
  const ownerId = getCellOwnerId(ci);

  // Свободная компания.
  if (ownerId === null) {
    if (player.isAI) {
      if (player.money >= cell.price + 100) {
        buyCompany(player, ci, cell.price);

        playSound("buy");
        addLog(`💼 ${player.name} купил ${cell.name}.`);

        await announceMonopoly(token, player, cell.sector);
      } else {
        addLog(`⏭ ${player.name} пропустил ${cell.name}.`);
      }

      return;
    }

    await showPurchaseDialog(token, player, ci, cell);
    return;
  }

  // Своя компания.
  if (ownerId === player.id) {
    if (state.mortgagedCells[ci]) {
      const cost = Math.floor(cell.price * 0.6);

      if (player.isAI) {
        if (player.money >= cost + 200) {
          player.money -= cost;
          delete state.mortgagedCells[ci];

          addLog(`🏦 ${player.name} выкупил ${cell.name}.`);
        }

        return;
      }

      const choice = await gameDialog(
        token,
        "🏦 ВЫКУП",
        `<div class="modal-info">
          ${escapeHTML(cell.name)}<br>
          Выкуп: $${cost}<br>
          Баланс: $${player.money}
        </div>`,
        [
          {
            label: `[ ВЫКУПИТЬ ] $${cost}`,
            value: "buyback",
            kind: "primary",
            disabled: player.money < cost
          },
          {
            label: "[ ПРОПУСТИТЬ ]",
            value: "skip"
          }
        ]
      );

      if (choice === "buyback") {
        player.money -= cost;
        delete state.mortgagedCells[ci];

        playSound("money");
        addLog(`🏦 ${player.name} выкупил ${cell.name}.`);
      }

      return;
    }

    const building = state.buildings[ci] || {
      houses: 0,
      hotels: 0
    };

    if (
      checkMonopoly(player.id, cell.sector) &&
      !building.hotels
    ) {
      await showBuildDialog(token, player, ci, cell, building);
    } else {
      addLog(`🏠 ${player.name} на своей компании ${cell.name}.`);
    }

    return;
  }

  // Чужая компания.
  const owner = getPlayer(ownerId);
  const rent = getRent(ci);

  if (!owner || owner.bankrupt || rent === 0) {
    addLog(`🛡 ${cell.name}: аренда не взимается.`);
    return;
  }

  let payment = rent;

  if (!player.isAI) {
    const choice = await gameDialog(
      token,
      "🚨 ЧУЖАЯ КОМПАНИЯ",
      `<div class="modal-info">
        ${escapeHTML(cell.name)}<br>
        Владелец: ${escapeHTML(owner.name)}<br>
        Аренда: $${rent}<br><br>
        Пентест: верно — $${Math.floor(rent / 2)},
        неверно — $${rent * 2}.<br>
        Отмена вопроса — обычная аренда.
      </div>`,
      [
        {
          label: "[ ПЕНТЕСТ ]",
          value: "pentest",
          kind: "primary"
        },
        {
          label: `[ ЗАПЛАТИТЬ ] $${rent}`,
          value: "pay"
        }
      ]
    );

    if (choice === "pentest") {
      const result = await askQuestion(token, cell);

      if (result === true) {
        payment = Math.floor(rent / 2);
        playSound("success");
      } else if (result === false) {
        payment = rent * 2;
        playSound("error");

        await gameDialog(
          token,
          "✗ ПЕНТЕСТ НЕ ПРОЙДЕН",
          `<div class="modal-info">
            Аренда: $${payment}<br>
            Правильный ответ:
            ${escapeHTML(correctAnswer(cell))}
          </div>`
        );
      }
    }
  }

  player.money -= payment;
  owner.money += payment;

  addLog(
    `💸 ${player.name} → ${owner.name}: $${payment} ` +
    `за ${cell.name}.`
  );
}

async function showPurchaseDialog(token, player, ci, cell) {
  const penalty = Math.floor(cell.price * 1.5);

  const choice = await gameDialog(
    token,
    "💼 СВОБОДНАЯ КОМПАНИЯ",
    `<div
       class="modal-color-bar"
       style="background:${cell.color}"
     ></div>

     <div class="modal-info">
       ${escapeHTML(cell.name)}<br>
       Цена: $${cell.price}<br>
       Базовая аренда: $${cell.rent}<br>
       Сектор: ${escapeHTML(cell.sector)}<br>
       Баланс: $${player.money}
     </div>

     <div class="modal-warning">
       Викторина: верно — бесплатно.
       Неверно — покупка за $${penalty}.
     </div>`,
    [
      {
        label: `[ КУПИТЬ ] $${cell.price}`,
        value: "buy",
        kind: "primary",
        disabled: player.money < cell.price
      },
      {
        label: "[ ВИКТОРИНА ]",
        value: "quiz",
        kind: "primary"
      },
      {
        label: "[ ПРОПУСТИТЬ ]",
        value: "skip"
      }
    ]
  );

  if (choice === "buy") {
    buyCompany(player, ci, cell.price);

    playSound("buy");
    addLog(`💼 ${player.name} купил ${cell.name} за $${cell.price}.`);

    await announceMonopoly(token, player, cell.sector);
    return;
  }

  if (choice !== "quiz") {
    addLog(`⏭ ${player.name} пропустил ${cell.name}.`);
    return;
  }

  const result = await askQuestion(token, cell);

  if (result === null) {
    addLog(`⏭ ${player.name} отменил викторину.`);
    return;
  }

  const cost = result ? 0 : penalty;

  buyCompany(player, ci, cost);
  playSound(result ? "success" : "error");

  addLog(
    result
      ? `🎉 ${player.name} получил ${cell.name} бесплатно.`
      : `❌ ${player.name} получил ${cell.name} за $${cost}.`
  );

  updateUI();

  await gameDialog(
    token,
    result ? "✓ ВЕРНО!" : "✗ ОШИБКА",
    `<div class="modal-info">
      ${escapeHTML(cell.name)} теперь принадлежит тебе.<br>
      Стоимость: $${cost}.
      ${result ? "" : `
        <br>Правильный ответ:
        ${escapeHTML(correctAnswer(cell))}
      `}
    </div>`
  );

  await announceMonopoly(token, player, cell.sector);
}

async function showBuildDialog(token, player, ci, cell, building) {
  const hotel = building.houses === 1;
  const cost = hotel ? HOTEL_COST : HOUSE_COST;

  if (player.isAI) {
    const reserve = hotel ? 300 : 200;

    if (player.money >= cost + reserve) {
      player.money -= cost;

      state.buildings[ci] = {
        houses: 1,
        hotels: hotel ? 1 : 0
      };

      addLog(
        `${hotel ? "🏨" : "🏠"} ${player.name}: ${cell.name}.`
      );
    }

    return;
  }

  const choice = await gameDialog(
    token,
    "🏗 СТРОИТЕЛЬСТВО",
    `<div class="modal-info">
      ${escapeHTML(cell.name)}<br>
      Текущая аренда: $${getRent(ci)}<br>
      Баланс: $${player.money}<br><br>
      ${hotel ? "Отель" : "Дом"} стоит $${cost}.<br>
      Новая аренда: $${cell.rent * (hotel ? 4 : 3)}.
    </div>`,
    [
      {
        label: hotel
          ? `[ ПОСТРОИТЬ ОТЕЛЬ ] $${cost}`
          : `[ ПОСТРОИТЬ ДОМ ] $${cost}`,
        value: "build",
        kind: "primary",
        disabled: player.money < cost
      },
      {
        label: "[ ПРОПУСТИТЬ ]",
        value: "skip"
      }
    ]
  );

  if (choice === "build") {
    player.money -= cost;

    state.buildings[ci] = {
      houses: 1,
      hotels: hotel ? 1 : 0
    };

    playSound("buy");

    addLog(
      `${hotel ? "🏨" : "🏠"} ${player.name} построил ` +
      `${hotel ? "отель" : "дом"} на ${cell.name}.`
    );
  }
}

// ==================== СПЕЦИАЛЬНЫЕ КЛЕТКИ ====================

async function moneyEvent(token, player, title, amount, description) {
  player.money += amount;

  playSound(amount >= 0 ? "success" : "error");

  addLog(
    `${title}: ${player.name} ` +
    `${amount >= 0 ? "+" : "−"}$${Math.abs(amount)}.`
  );

  await gameNotice(
    token,
    player,
    title,
    `<div class="modal-info">
      ${escapeHTML(description)}<br><br>
      Баланс: $${player.money}.
    </div>`
  );
}

async function handleVPN(token, player) {
  const freeCompanies = BOARD_DATA
    .map((cell, ci) => ci)
    .filter(ci =>
      BOARD_DATA[ci].type === "company" &&
      getCellOwnerId(ci) === null
    );

  if (!freeCompanies.length) {
    addLog("🌐 VPN: свободных компаний нет.");
    return;
  }

  const target = randomItem(freeCompanies);

  player.pos = target;
  addLog(`🌐 ${player.name} → ${BOARD_DATA[target].name}.`);

  await gameNotice(
    token,
    player,
    "🌐 VPN",
    `<div class="modal-info">
      Телепорт на ${escapeHTML(BOARD_DATA[target].name)}.
    </div>`
  );

  assertSession(token);
  await handleCompany(token, player, target, BOARD_DATA[target]);
}

async function handleDDoS(token, player) {
  const targets = activePlayers()
    .filter(item => item.id !== player.id)
    .flatMap(item => item.companies);

  if (!targets.length) {
    addLog("⚔️ DDoS: подходящих целей нет.");
    return;
  }

  const target = randomItem(targets);

  // После завершения текущего хода остаются два полных хода.
  state.blockedCells[target] = state.turnNumber + 3;

  addLog(`⚔️ ${BOARD_DATA[target].name}: блокировка аренды.`);

  await gameNotice(
    token,
    player,
    "⚔️ DDoS",
    `<div class="modal-info">
      ${escapeHTML(BOARD_DATA[target].name)}
      не приносит аренду в течение следующих двух ходов.
    </div>`
  );
}

async function handleCell(token, player, ci) {
  assertSession(token);

  const cell = BOARD_DATA[ci];

  if (!cell) {
    throw new Error(`Не найдена клетка ${ci}.`);
  }

  switch (cell.type) {
    case "company":
      await handleCompany(token, player, ci, cell);
      break;

    case "chance": {
      const event = randomItem(CHANCE_EVENTS);

      await moneyEvent(
        token,
        player,
        "🎴 ШАНС",
        event[1],
        event[0]
      );

      break;
    }

    case "treasury": {
      const event = randomItem(TREASURY_EVENTS);

      await moneyEvent(
        token,
        player,
        "🎴 КАЗНА",
        event[1],
        event[0]
      );

      break;
    }

    case "bug":
      player.pos = (player.pos - 3 + BOARD_SIZE) % BOARD_SIZE;

      await moneyEvent(
        token,
        player,
        "💥 БАГ",
        -100,
        "Потеря $100 и откат на три клетки. " +
        "Клетка после отката повторно не разыгрывается."
      );

      break;

    case "tax":
      await moneyEvent(
        token,
        player,
        "🧾 НАЛОГ",
        -150,
        "Уплата налога: $150."
      );
      break;

    case "hackathon":
      await moneyEvent(
        token,
        player,
        "🏆 ХАКАТОН",
        200,
        "Награда за победу: $200."
      );
      break;

    case "sandbox":
      await moneyEvent(
        token,
        player,
        "🔒 SANDBOX",
        -100,
        "Расходы на изолированную среду: $100."
      );
      break;

    case "vpn":
      await handleVPN(token, player);
      break;

    case "ddos":
      await handleDDoS(token, player);
      break;

    case "opensource":
      player.money += 150;

      activePlayers().forEach(item => {
        if (item.id !== player.id) {
          item.money += 50;
        }
      });

      playSound("success");
      addLog(`🐧 ${player.name}: +$150, остальным активным игрокам +$50.`);

      await gameNotice(
        token,
        player,
        "🐧 OPEN SOURCE",
        `<div class="modal-info">
          Ты получаешь $150.<br>
          Остальные активные игроки получают по $50.
        </div>`
      );

      break;

    default:
      // На старте бонус уже начислен во время движения.
      break;
  }
}

// ==================== ДОЛГИ И БАНКРОТСТВО ====================

function eliminatePlayer(player) {
  for (const ci of player.companies) {
    delete state.owners[ci];
    delete state.mortgagedCells[ci];
    delete state.buildings[ci];
    delete state.blockedCells[ci];
  }

  player.companies = [];
  player.money = 0;
  player.bankrupt = true;

  addLog(`💀 ${player.name} обанкротился и выбыл из игры.`);
  playSound("error");
}

async function settleDebts(token) {
  for (const player of state.players) {
    if (player.bankrupt || player.money >= 0) continue;

    while (player.money < 0) {
      assertSession(token);

      const available = player.companies.filter(
        ci => !state.mortgagedCells[ci]
      );

      const possibleIncome = available.reduce(
        (total, ci) =>
          total + Math.floor(BOARD_DATA[ci].price * 0.5),
        0
      );

      if (player.money + possibleIncome < 0) {
        eliminatePlayer(player);

        updateUI();

        if (!player.isAI) {
          await gameDialog(
            token,
            "💀 БАНКРОТСТВО",
            `<div class="modal-info">
              Даже залог всех компаний не покрывает долг.<br>
              ${escapeHTML(player.name)} выбывает.
            </div>`
          );
        }

        break;
      }

      if (player.isAI) {
        const target = [...available].sort(
          (a, b) => BOARD_DATA[a].price - BOARD_DATA[b].price
        )[0];

        mortgageCompany(player, target);
        continue;
      }

      const choice = await gameDialog(
        token,
        "💳 НУЖНО ПОКРЫТЬ ДОЛГ",
        `<div class="modal-info">
          ${escapeHTML(player.name)}<br>
          Баланс: $${player.money}<br><br>
          Выбери компанию для залога.
        </div>`,
        available.map(ci => ({
          label:
            `[ ЗАЛОЖИТЬ ] ${BOARD_DATA[ci].name} ` +
            `+$${Math.floor(BOARD_DATA[ci].price * 0.5)}`,
          value: ci,
          kind: "primary"
        }))
      );

      if (Number.isInteger(choice)) {
        mortgageCompany(player, choice);
        updateUI();
      }
    }
  }

  if (activePlayers().length <= 1) {
    await endGame(token);
    return false;
  }

  return true;
}

// ==================== ХОДЫ И ЗАВЕРШЕНИЕ ИГРЫ ====================

function finishTurn() {
  if (!state || state.gameOver) return;

  state.players.forEach(player => {
    const history = state.balanceHistory[player.id] || [];

    history.push(player.money);

    if (history.length > 30) {
      history.shift();
    }

    state.balanceHistory[player.id] = history;
  });

  let nextIndex = state.currentPlayerIdx;

  do {
    nextIndex = (nextIndex + 1) % state.players.length;
  } while (state.players[nextIndex].bankrupt);

  state.currentPlayerIdx = nextIndex;
  state.turnNumber++;
  state.phase = "ready";

  for (const ci of Object.keys(state.blockedCells)) {
    if (state.blockedCells[ci] <= state.turnNumber) {
      delete state.blockedCells[ci];
    }
  }

  updateUI();
  saveGame(true);
  scheduleAI();
}

async function skipTurn() {
  if (
    !state ||
    state.gameOver ||
    state.phase !== "ready" ||
    modalResolve
  ) {
    return;
  }

  const player = currentPlayer();

  if (!player || player.isAI || player.bankrupt) return;

  if (player.money < SKIP_COST) {
    openDialog(
      "Недостаточно средств",
      `<div class="modal-info">
        Для пропуска нужно $${SKIP_COST}.
      </div>`
    );

    return;
  }

  const token = sessionId;

  state.phase = "confirming";
  updateControls();

  try {
    const choice = await gameDialog(
      token,
      "⏭ ПРОПУСК ХОДА",
      `<div class="modal-info">
        Пропустить ход за $${SKIP_COST}?
      </div>`,
      [
        {
          label: `[ ПРОПУСТИТЬ ] $${SKIP_COST}`,
          value: "skip",
          kind: "primary"
        },
        {
          label: "[ ОТМЕНА ]",
          value: "cancel"
        }
      ]
    );

    if (choice === "skip") {
      player.money -= SKIP_COST;
      addLog(`⏭ ${player.name} пропустил ход: −$${SKIP_COST}.`);

      finishTurn();
    } else {
      state.phase = "ready";
      updateUI();
    }
  } catch (error) {
    reportError(error);
  }
}

async function endGame(token) {
  state.gameOver = true;
  state.phase = "finished";

  clearTimeout(aiTimer);
  aiTimer = null;

  try {
    localStorage.removeItem(SAVE_KEY);
  } catch (error) {
    console.warn("Не удалось удалить сохранение:", error);
  }

  const winner = activePlayers()[0];

  updateUI();
  playSound("win");

  const results = state.players.map(player => `
    ${player.marker} ${escapeHTML(player.name)}:
    ${player.bankrupt
      ? "банкрот"
      : `$${player.money}, компаний: ${player.companies.length}`}
  `).join("<br>");

  const choice = await gameDialog(
    token,
    "🏆 ИГРА ОКОНЧЕНА",
    `<div class="modal-info">
      ${winner
        ? `Победитель: ${winner.marker} ${escapeHTML(winner.name)}`
        : "Все игроки выбыли."}
      <br><br>
      ${results}
    </div>`,
    [
      {
        label: "[ НОВАЯ ИГРА ]",
        value: "restart",
        kind: "primary"
      },
      {
        label: "[ В МЕНЮ ]",
        value: "menu"
      }
    ]
  );

  if (choice === "restart") {
    restartGame();
  } else {
    backToMenu();
  }
}

// ==================== СТАТИСТИКА ====================

function showStats() {
  if (!state || state.phase !== "ready") return;

  const rows = state.players.map(player => {
    const monopolies = Object.keys(SECTOR_COUNTS)
      .filter(sector => checkMonopoly(player.id, sector))
      .length;

    const mortgaged = player.companies.filter(
      ci => state.mortgagedCells[ci]
    ).length;

    return `
      <tr>
        <td style="color:${player.color}">
          ${player.marker} ${escapeHTML(player.name)}
          ${player.bankrupt ? " ✗" : ""}
        </td>
        <td>$${player.money}</td>
        <td>${player.companies.length}</td>
        <td>${mortgaged}</td>
        <td>${monopolies}</td>
      </tr>
    `;
  }).join("");

  openDialog(
    "📊 СТАТИСТИКА",
    `<canvas
       id="stats-canvas"
       class="stats-chart"
       width="500"
       height="180"
     ></canvas>

     <div class="stats-wrap">
       <table class="stats-table">
         <thead>
           <tr>
             <th>Игрок</th>
             <th>Баланс</th>
             <th>Комп.</th>
             <th>Залог</th>
             <th>Моноп.</th>
           </tr>
         </thead>
         <tbody>${rows}</tbody>
       </table>
     </div>`
  );

  drawStatsChart();
}

function drawStatsChart() {
  const canvas = $("stats-canvas");
  if (!canvas || !state) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const width = canvas.width;
  const height = canvas.height;

  const left = 60;
  const right = width - 12;
  const top = 12;
  const bottom = height - 22;

  let min = 0;
  let max = 1000;

  Object.values(state.balanceHistory).forEach(history => {
    history.forEach(value => {
      min = Math.min(min, value);
      max = Math.max(max, value);
    });
  });

  const range = max - min || 1;

  ctx.clearRect(0, 0, width, height);
  ctx.font = "10px Consolas, monospace";

  for (let i = 0; i <= 4; i++) {
    const y = top + (bottom - top) * i / 4;
    const value = Math.round(max - range * i / 4);

    ctx.strokeStyle = "#21262d";
    ctx.lineWidth = 1;

    ctx.beginPath();
    ctx.moveTo(left, y);
    ctx.lineTo(right, y);
    ctx.stroke();

    ctx.fillStyle = "#8b949e";
    ctx.fillText(`$${value}`, 3, y + 3);
  }

  const maxLength = Math.max(
    2,
    ...state.players.map(
      player => (state.balanceHistory[player.id] || []).length
    )
  );

  state.players.forEach(player => {
    const history = state.balanceHistory[player.id] || [];
    if (!history.length) return;

    ctx.strokeStyle = player.color;
    ctx.fillStyle = player.color;
    ctx.lineWidth = 2;
    ctx.beginPath();

    history.forEach((value, index) => {
      const x = left +
        (right - left) * index / (maxLength - 1);

      const y = top +
        (bottom - top) * (1 - (value - min) / range);

      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });

    ctx.stroke();

    if (history.length === 1) {
      const y = top +
        (bottom - top) * (1 - (history[0] - min) / range);

      ctx.beginPath();
      ctx.arc(left, y, 3, 0, Math.PI * 2);
      ctx.fill();
    }
  });

  ctx.fillStyle = "#8b949e";
  ctx.fillText("История баланса по завершённым ходам", left, height - 5);
}

// ==================== СОХРАНЕНИЕ ====================

function refreshLoadButton() {
  try {
    $("load-btn").disabled = !localStorage.getItem(SAVE_KEY);
  } catch (error) {
    $("load-btn").disabled = true;

    $("menu-status").textContent =
      "Хранилище браузера недоступно. Играть можно без сохранений.";
  }
}

function saveGame(silent = false) {
  if (
    !state ||
    state.gameOver ||
    state.phase !== "ready"
  ) {
    return false;
  }

  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(state));
    refreshLoadButton();

    if (!silent) {
      playSound("buy");

      openDialog(
        "💾 СОХРАНЕНО",
        `<div class="modal-info">
          Текущая позиция сохранена в этом браузере.
        </div>`
      );
    }

    return true;
  } catch (error) {
    console.warn("Ошибка сохранения:", error);

    if (!silent) {
      openDialog(
        "Сохранение недоступно",
        `<div class="modal-info">
          Браузер не разрешил запись в localStorage.
          Проверь настройки хранения данных сайта.
        </div>`
      );
    }

    return false;
  }
}

function validateSave(data) {
  const isObject = value =>
    value !== null &&
    typeof value === "object" &&
    !Array.isArray(value);

  if (
    !isObject(data) ||
    data.version !== SAVE_VERSION ||
    data.boardSize !== BOARD_SIZE
  ) {
    throw new Error(
      "Сохранение создано другой версией игры. Начни новую игру."
    );
  }

  if (
    !Array.isArray(data.players) ||
    data.players.length < 2 ||
    data.players.length > 4 ||
    !Number.isInteger(data.currentPlayerIdx) ||
    data.currentPlayerIdx < 0 ||
    data.currentPlayerIdx >= data.players.length ||
    !Number.isInteger(data.turnNumber) ||
    data.turnNumber < 1 ||
    data.phase !== "ready" ||
    data.gameOver !== false
  ) {
    throw new Error("Повреждены основные данные сохранения.");
  }

  for (const key of [
    "owners",
    "mortgagedCells",
    "buildings",
    "blockedCells",
    "balanceHistory"
  ]) {
    if (!isObject(data[key])) {
      throw new Error(`Повреждён раздел сохранения: ${key}.`);
    }
  }

  const owners = {};
  const usedCompanies = new Set();

  data.players.forEach((player, index) => {
    if (
      !isObject(player) ||
      player.id !== index ||
      !Number.isFinite(player.money) ||
      player.money < 0 ||
      !Number.isInteger(player.pos) ||
      player.pos < 0 ||
      player.pos >= BOARD_SIZE ||
      !Array.isArray(player.companies) ||
      typeof player.bankrupt !== "boolean" ||
      typeof player.isAI !== "boolean"
    ) {
      throw new Error("Повреждены данные игрока.");
    }

    player.name = `P${index + 1}`;
    player.color = PLAYER_COLORS[index];
    player.marker = PLAYER_MARKERS[index];

    if (player.bankrupt && player.companies.length) {
      throw new Error("Некорректные компании выбывшего игрока.");
    }

    for (const ci of player.companies) {
      if (
        !Number.isInteger(ci) ||
        BOARD_DATA[ci]?.type !== "company" ||
        usedCompanies.has(ci)
      ) {
        throw new Error("Повреждён список компаний.");
      }

      usedCompanies.add(ci);
      owners[ci] = player.id;
    }

    const history = data.balanceHistory[player.id];

    data.balanceHistory[player.id] =
      Array.isArray(history) && history.every(Number.isFinite)
        ? history.slice(-30)
        : [player.money];
  });

  data.owners = owners;

  const mortgagedCells = {};
  const buildings = {};
  const blockedCells = {};

  for (const ci of usedCompanies) {
    if (data.mortgagedCells[ci]) {
      mortgagedCells[ci] = true;
    }

    const building = data.buildings[ci];

    if (isObject(building)) {
      const hotels = building.hotels === 1 ? 1 : 0;

      buildings[ci] = {
        houses: hotels || building.houses === 1 ? 1 : 0,
        hotels
      };
    }

    const expiry = data.blockedCells[ci];

    if (
      Number.isInteger(expiry) &&
      expiry > data.turnNumber
    ) {
      blockedCells[ci] = expiry;
    }
  }

  data.mortgagedCells = mortgagedCells;
  data.buildings = buildings;
  data.blockedCells = blockedCells;

  data.gameLog = Array.isArray(data.gameLog)
    ? data.gameLog.filter(item => typeof item === "string").slice(-100)
    : [];

  data.diceValue =
    Number.isInteger(data.diceValue) &&
    data.diceValue >= 1 &&
    data.diceValue <= 6
      ? data.diceValue
      : 1;

  if (
    data.players[data.currentPlayerIdx].bankrupt ||
    data.players.filter(player => !player.bankrupt).length < 2
  ) {
    throw new Error("Сохранение не содержит продолжающейся игры.");
  }

  return data;
}

function loadGame() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);

    if (!raw) {
      openDialog(
        "Нет сохранения",
        `<div class="modal-info">
          Сохранённая игра не найдена.
        </div>`
      );

      refreshLoadButton();
      return;
    }

    const restored = validateSave(JSON.parse(raw));

    stopSession();

    state = restored;
    numPlayers = state.players.length;

    state.players.forEach((player, i) => {
      playerConfigs[i].isAI = player.isAI;
    });

    showGameScreen();
    buildBoard();

    addLog("💾 Сохранение загружено.");

    updateUI();
    drawInitialDice();
    scheduleAI();
  } catch (error) {
    console.error("Ошибка загрузки:", error);

    openDialog(
      "Не удалось загрузить игру",
      `<div class="modal-info">
        ${escapeHTML(
          error instanceof Error ? error.message : String(error)
        )}
      </div>`
    );
  }
}

// ==================== ПОДКЛЮЧЕНИЕ СОБЫТИЙ ====================

function init() {
  try {
    if (BOARD_SIZE !== GRID_POSITIONS.length) {
      throw new Error("Количество клеток не совпадает с размером поля.");
    }

    initMenu();

    $("start-btn").addEventListener("click", startGame);
    $("load-btn").addEventListener("click", loadGame);
    $("help-btn").addEventListener("click", showHelp);

    $("roll-btn").addEventListener("click", () => {
      void playTurn(false);
    });

    $("skip-btn").addEventListener("click", () => {
      void skipTurn();
    });

    $("stats-btn").addEventListener("click", showStats);
    $("help-game-btn").addEventListener("click", showHelp);

    $("save-btn").addEventListener("click", () => {
      saveGame(false);
    });

    $("reset-btn").addEventListener("click", () => {
      if (confirm("Начать новую игру с теми же игроками?")) {
        restartGame();
      }
    });

    $("menu-btn").addEventListener("click", () => {
      if (
        confirm(
          "Вернуться в меню? Незавершённый ход не сохраняется."
        )
      ) {
        backToMenu();
      }
    });

    $("board").addEventListener("click", event => {
      const cell = event.target.closest("[data-cell]");

      if (cell) {
        void manageProperty(Number(cell.dataset.cell));
      }
    });

    const assetClickHandler = event => {
      const button = event.target.closest("[data-asset]");

      if (button) {
        void manageProperty(Number(button.dataset.asset));
      }
    };

    $("left-panel").addEventListener("click", assetClickHandler);
    $("right-panel").addEventListener("click", assetClickHandler);
  } catch (error) {
    $("menu-status").textContent =
      "Ошибка инициализации. Подробности в консоли браузера.";

    reportError(error);
  }
}

// Работает и с defer, и при подключении в конце body.
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}

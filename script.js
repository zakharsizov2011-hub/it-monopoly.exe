// ==================== ДАННЫЕ ====================
const BOARD_DATA = [
  { name: "🚀 СТАРТ", type: "start", color: "#2d3238", sector: "Служебная" },
  { name: "HONOR", type: "company", price: 100, rent: 25, color: "#1e90ff", sector: "Мобильный",
    q: "Сколько бит в одном байте?", opts: ["A) 4", "B) 8", "C) 16", "D) 10"], ans: "B" },
  { name: "XIAOMI", type: "company", price: 120, rent: 30, color: "#1e90ff", sector: "Мобильный",
    q: "Система счисления внутри процессора?", opts: ["A) 10-я", "B) 8-я", "C) 2-я", "D) 16-я"], ans: "C" },
  { name: "🌐 VPN", type: "vpn", color: "#ff8c00", sector: "Спецклетка" },
  { name: "SAMSUNG", type: "company", price: 140, rent: 35, color: "#1e90ff", sector: "Мобильный",
    q: "Какая память очищается при выключении?", opts: ["A) SSD", "B) RAM", "C) HDD", "D) BIOS"], ans: "B" },
  { name: "LENOVO", type: "company", price: 160, rent: 40, color: "#228b22", sector: "ПК и CPU",
    q: "Команда Linux: список файлов?", opts: ["A) cd", "B) pwd", "C) ls", "D) rm"], ans: "C" },
  { name: "🎴 ШАНС", type: "chance", color: "#9b59b6", sector: "Спецклетка" },
  { name: "🔒 SANDBOX", type: "sandbox", color: "#2d3238", sector: "Служебная" },
  { name: "AMD", type: "company", price: 200, rent: 50, color: "#228b22", sector: "ПК и CPU",
    q: "Утилита проверки узла через ICMP?", opts: ["A) ping", "B) mkdir", "C) chmod", "D) grep"], ans: "A" },
  { name: "⚔️ DDoS", type: "ddos", color: "#ff8c00", sector: "Спецклетка" },
  { name: "INTEL", type: "company", price: 220, rent: 55, color: "#228b22", sector: "ПК и CPU",
    q: "Что такое CPU?", opts: ["A) Процессор", "B) Видеокарта", "C) БП", "D) Сетевуха"], ans: "A" },
  { name: "RED HAT", type: "company", price: 240, rent: 60, color: "#ffcc00", sector: "ОС и софт",
    q: "Права root в Linux?", opts: ["A) admin", "B) sudo", "C) rootgo", "D) access"], ans: "B" },
  { name: "UBUNTU", type: "company", price: 260, rent: 65, color: "#ffcc00", sector: "ОС и софт",
    q: "Пакетный менеджер Ubuntu?", opts: ["A) yum", "B) apt", "C) pacman", "D) brew"], ans: "B" },
  { name: "CISCO", type: "company", price: 280, rent: 70, color: "#dc143c", sector: "Сети",
    q: "TCP-порт SSH?", opts: ["A) 21", "B) 22", "C) 80", "D) 443"], ans: "B" },
  { name: "🎴 КАЗНА", type: "treasury", color: "#9b59b6", sector: "Спецклетка" },
  { name: "🏆 ХАКАТОН", type: "hackathon", color: "#2d3238", sector: "Служебная" },
  { name: "KASPERSKY", type: "company", price: 300, rent: 75, color: "#dc143c", sector: "Сети",
    q: "Атака потоком запросов?", opts: ["A) Фишинг", "B) DDoS", "C) Брутфорс", "D) Сниффинг"], ans: "B" },
  { name: "HUAWEI", type: "company", price: 320, rent: 80, color: "#dc143c", sector: "Сети",
    q: "Что такое LAN?", opts: ["A) Local Area Network", "B) Large Access Node", "C) Link Agg", "D) Local App Net"], ans: "A" },
  { name: "💥 БАГ", type: "bug", color: "#ff8c00", sector: "Спецклетка" },
  { name: "YANDEX", type: "company", price: 340, rent: 85, color: "#ba55d3", sector: "Бигтех РФ",
    q: "Домены → IP?", opts: ["A) VPN", "B) NAT", "C) DNS", "D) MAC"], ans: "C" },
  { name: "VK TECH", type: "company", price: 360, rent: 90, color: "#ba55d3", sector: "Бигтех РФ",
    q: "Порт HTTPS?", opts: ["A) 25", "B) 53", "C) 80", "D) 443"], ans: "D" },
  { name: "OZON", type: "company", price: 380, rent: 95, color: "#ba55d3", sector: "Бигтех РФ",
    q: "Команда IP и маски?", opts: ["A) ifconfig", "B) lsblk", "C) df -h", "D) uname -a"], ans: "A" },
  { name: "🧾 НАЛОГ", type: "tax", color: "#2d3238", sector: "Служебная" },
  { name: "ORACLE", type: "company", price: 400, rent: 100, color: "#00ffff", sector: "БД и ИИ",
    q: "SQL: выборка данных?", opts: ["A) INSERT", "B) UPDATE", "C) SELECT", "D) DELETE"], ans: "C" },
  { name: "MICROSOFT", type: "company", price: 420, rent: 105, color: "#ffcc00", sector: "ОС и софт",
    q: "Файл hosts в Windows?", opts: ["A) boot.ini", "B) hosts", "C) autoexec.bat", "D) config.sys"], ans: "B" },
  { name: "🐧 OPEN SRC", type: "opensource", color: "#ff8c00", sector: "Спецклетка" },
  { name: "IBM", type: "company", price: 440, rent: 110, color: "#00ffff", sector: "БД и ИИ",
    q: "Что такое AI?", opts: ["A) Auto Input", "B) Artificial Intelligence", "C) Adv Interface", "D) Auto Int"], ans: "B" },
  { name: "NVIDIA", type: "company", price: 460, rent: 115, color: "#00ffff", sector: "БД и ИИ",
    q: "Уровень OSI для IP-маршрутизации?", opts: ["A) 1", "B) 2", "C) 3", "D) 7"], ans: "C" },
  { name: "APPLE", type: "company", price: 500, rent: 125, color: "#1e90ff", sector: "Мобильный",
    q: "Маска /24?", opts: ["A) 255.0.0.0", "B) 255.255.0.0", "C) 255.255.255.0", "D) 255.255.255.255"], ans: "C" },
];

const SECTOR_COUNTS = { "Мобильный": 4, "ПК и CPU": 4, "ОС и софт": 3, "Сети": 3, "Бигтех РФ": 3, "БД и ИИ": 3 };
const PLAYER_COLORS = ["#ff5555", "#4488ff", "#44cc44", "#ffcc44"];
const PLAYER_MARKERS = ["🔴", "🔵", "🟢", "🟡"];

const HOUSE_COST = 100, HOTEL_COST = 300, SKIP_COST = 50;
const SAVE_KEY = "it_monopoly_save";

// Позиции клеток по периметру 8×8 (30 клеток)
let GRID_POSITIONS = [];
for (let i = 0; i < 8; i++) GRID_POSITIONS.push([7 - i, 7]);
for (let i = 1; i < 7; i++) GRID_POSITIONS.push([0, 7 - i]);
for (let i = 0; i < 8; i++) GRID_POSITIONS.push([i, 0]);
for (let i = 1; i < 7; i++) GRID_POSITIONS.push([7, i]);

const CHANCE_EVENTS = [
  ["💾 Утечка данных в облаке! Штраф: −$150", -150],
  ["🚀 Ваш стартап получил инвестиции: +$300", 300],
  ["🐛 Критический баг найден вовремя: +$100", 100],
  ["⚡ Сгорел сервер: −$200", -200],
  ["🏅 Выиграли тендер: +$250", 250],
  ["🔒 Взлом сайта: −$180", -180],
  ["💡 Патент на изобретение: +$200", 200],
  ["📉 Курс акций упал: −$120", -120],
];

const TREASURY_EVENTS = [
  ["💰 Дивиденды: +$80", 80],
  ["🧾 Налоговая проверка: −$100", -100],
  ["🎁 Бонус за лояльность: +$60", 60],
  ["🛠 Внеплановый рефакторинг: −$90", -90],
  ["📈 Рост трафика: +$70", 70],
  ["🔧 Замена оборудования: −$110", -110],
];

// ==================== СОСТОЯНИЕ ====================
let state = null;
let numPlayers = 2;
let playerConfigs = [
  { name: "PLAYER_1", isAI: false },
  { name: "PLAYER_2", isAI: false },
  { name: "PLAYER_3", isAI: false },
  { name: "PLAYER_4", isAI: false },
];

// ==================== ЗВУКИ ====================
function playSound(kind) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.connect(g); g.connect(ctx.destination);
    if (kind === "roll") { o.frequency.value = 600; o.start(); o.stop(ctx.currentTime + 0.08); }
    else if (kind === "success") { o.frequency.value = 900; o.start(); o.stop(ctx.currentTime + 0.1); }
    else if (kind === "error") { o.frequency.value = 300; o.start(); o.stop(ctx.currentTime + 0.2); }
    else if (kind === "buy") { o.frequency.value = 800; o.start(); o.stop(ctx.currentTime + 0.08); }
    else if (kind === "dice") { o.frequency.value = 500; o.start(); o.stop(ctx.currentTime + 0.03); }
    else if (kind === "money") { o.frequency.value = 1100; o.start(); o.stop(ctx.currentTime + 0.05); }
  } catch (e) {}
}

// ==================== МЕНЮ ====================
function initMenu() {
  const numBtns = document.querySelectorAll(".num-btn");
  numBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      numBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      numPlayers = parseInt(btn.dataset.num);
      renderPlayerConfig();
    });
  });
  renderPlayerConfig();
  document.getElementById("start-btn").addEventListener("click", startGame);
  document.getElementById("help-btn").addEventListener("click", showHelp);
}

function renderPlayerConfig() {
  const container = document.getElementById("players-config");
  container.innerHTML = "";
  for (let i = 0; i < numPlayers; i++) {
    const row = document.createElement("div");
    row.className = `player-row p${i + 1}`;
    row.innerHTML = `
      <span class="name">${PLAYER_MARKERS[i]} PLAYER_${i + 1}</span>
      <label>
        <input type="checkbox" id="ai-${i}" ${playerConfigs[i].isAI ? "checked" : ""}>
        ИИ-бот
      </label>
    `;
    container.appendChild(row);
    row.querySelector(`#ai-${i}`).addEventListener("change", e => {
      playerConfigs[i].isAI = e.target.checked;
    });
  }
}

function showHelp() {
  showModal(`
    <h3>// HELP.md</h3>
    <div class="modal-info">
      🎯 ЦЕЛЬ: разорить соперников.<br><br>
      🎲 [ ROLL ] — бросить кубик.<br>
      ⏭ [ SKIP $50 ] — пропустить ход.<br><br>
      💼 КОМПАНИЯ: buy / quiz / skip.<br>
      🚨 ЧУЖАЯ: аренда или пентест.<br>
      🌟 МОНОПОЛИЯ: весь сектор → ×2.<br>
      🏗 ДОМ $100 (×3), ОТЕЛЬ $300 (×4).<br>
      🏦 ЗАЛОГ 50%, выкуп 60%.<br>
      🎴 ШАНС / КАЗНА: события.<br>
      📊 [ STATS ] — статистика.<br><br>
      💾 Сохранение в localStorage.
    </div>
    <div class="modal-buttons">
      <button class="btn-secondary" onclick="closeModal()">[ CLOSE ]</button>
    </div>
  `);
}

function startGame() {
  document.getElementById("menu-screen").classList.remove("active");
  document.getElementById("game-screen").classList.add("active");

  const players = [];
  for (let i = 0; i < numPlayers; i++) {
    players.push({
      id: i,
      name: `P${i + 1}`,
      money: 1000,
      pos: 0,
      color: PLAYER_COLORS[i],
      marker: PLAYER_MARKERS[i],
      companies: [],
      mortgaged: [],
      isAI: playerConfigs[i].isAI,
    });
  }

  state = {
    players,
    currentPlayerIdx: 0,
    blockedCells: {},
    buildings: {},
    gameLog: [],
    gameOver: false,
    turnNumber: 1,
    animating: false,
    diceValue: 1,
    balanceHistory: Object.fromEntries(players.map(p => [p.id, [1000]])),
    owners: {},
    mortgagedCells: {},
  };

  buildBoard();
  renderPanels();
  updateUI();
  addLog(`🎮 Игра началась! ${numPlayers} игроков.`);
  setTimeout(checkAI, 500);
}

// ==================== ДОСКА ====================
function ensureGridPositions() {
  // Защита: если массив потерялся или короче 30 — пересоздаём
  if (typeof GRID_POSITIONS === "undefined" || !Array.isArray(GRID_POSITIONS) || GRID_POSITIONS.length !== 30) {
    GRID_POSITIONS = [];
    for (let i = 0; i < 8; i++) GRID_POSITIONS.push([7 - i, 7]);
    for (let i = 1; i < 7; i++) GRID_POSITIONS.push([0, 7 - i]);
    for (let i = 0; i < 8; i++) GRID_POSITIONS.push([i, 0]);
    for (let i = 1; i < 7; i++) GRID_POSITIONS.push([7, i]);
  }
}

function buildBoard() {
  ensureGridPositions();
    // Защита: если BOARD_DATA короче 30 — дополняем заглушками
  while (BOARD_DATA.length < 30) {
    BOARD_DATA.push({ name: "—", type: "empty", color: "#21262d", sector: "Служебная" });
  }

  const board = document.getElementById("board");
  board.innerHTML = "";

  for (let idx = 0; idx < 30; idx++) {
    const data = BOARD_DATA[idx];
    const pos = GRID_POSITIONS[idx];
    if (!pos) continue; // на всякий случай
    const col = pos[0];
    const row = pos[1];
    const isService = ["start", "sandbox", "hackathon", "tax"].includes(data.type);

    const cell = document.createElement("div");
    cell.className = "cell" + (isService ? " service" : "");
    cell.id = `cell-${idx}`;
    cell.style.gridColumn = col + 1;
    cell.style.gridRow = row + 1;

    let html = "";
    if (data.type === "company") {
      html += `<div class="cell-color" style="background:${data.color}"></div>`;
    }
    html += `<div class="cell-name">${data.name}</div>`;
    if (data.type === "company") {
      html += `<div class="cell-price">$${data.price}</div>`;
    }
    html += `<div class="cell-owner"></div>`;
    html += `<div class="cell-buildings"></div>`;
    html += `<div class="cell-tokens"></div>`;
    cell.innerHTML = html;
    board.appendChild(cell);
  }

  const center = document.createElement("div");
  center.className = "cell";
  center.style.gridColumn = "2 / 8";
  center.style.gridRow = "2 / 8";
  center.style.background = "#0f1419";
  center.style.border = "2px solid #00ff88";
  center.style.padding = "0";
  center.style.overflow = "hidden";
  center.innerHTML = `<div id="center-slot" style="width:100%;height:100%"></div>`;
  board.appendChild(center);

  const centerPanel = document.querySelector(".center-panel");
  if (centerPanel) {
    document.getElementById("center-slot").appendChild(centerPanel);
    centerPanel.style.maxHeight = "none";
    centerPanel.style.height = "100%";
  }
}

function renderPanels() {
  const left = document.getElementById("left-panel");
  const right = document.getElementById("right-panel");
  left.innerHTML = "";
  right.innerHTML = "";

  const half = Math.ceil(state.players.length / 2);
  state.players.forEach((p, i) => {
    const parent = i < half ? left : right;
    const card = document.createElement("div");
    card.className = "player-card";
    card.id = `player-card-${i}`;
    card.style.borderColor = p.color;
    card.innerHTML = `
      <div class="badge">> ACTIVE <</div>
      <div class="p-name" style="color:${p.color}">${p.marker} ${p.name}</div>
      <div class="p-money" id="money-${i}">$1000</div>
      <div class="p-section">// COMPANIES</div>
      <div class="p-list" id="companies-${i}">—</div>
      <div class="p-section">// MONOPOLIES</div>
      <div class="p-list" id="monopoly-${i}">—</div>
    `;
    parent.appendChild(card);
  });
}

// ==================== UI ====================
function updateUI() {
  if (!state) return;
  const cur = state.players[state.currentPlayerIdx];

  const turnInfo = document.getElementById("turn-info");
  turnInfo.textContent = `> T${state.turnNumber} | ${cur.marker} ${cur.name}`;
  turnInfo.style.color = cur.color;

  state.players.forEach((p, i) => {
    const card = document.getElementById(`player-card-${i}`);
    if (!card) return;
    card.classList.toggle("active", i === state.currentPlayerIdx);

    const moneyEl = document.getElementById(`money-${i}`);
    moneyEl.textContent = `$${p.money}`;
    moneyEl.classList.toggle("negative", p.money < 0);

    const compEl = document.getElementById(`companies-${i}`);
    if (p.companies.length) {
      compEl.innerHTML = p.companies.map(c => {
        const m = state.mortgagedCells[c] ? "🔒" : "·";
        return `<div class="${state.mortgagedCells[c] ? "mortgaged" : ""}">${m} ${BOARD_DATA[c].name}</div>`;
      }).join("");
    } else {
      compEl.textContent = "—";
    }

    const monos = Object.keys(SECTOR_COUNTS).filter(s => checkMonopoly(i, s));
    const monoEl = document.getElementById(`monopoly-${i}`);
    monoEl.innerHTML = monos.length
      ? monos.map(m => `<div style="color:#ffcc00">★ ${m}</div>`).join("")
      : "—";
  });

  for (let idx = 0; idx < 30; idx++) {
    const cell = document.getElementById(`cell-${idx}`);
    if (!cell) continue;
    const data = BOARD_DATA[idx];

    const tokensEl = cell.querySelector(".cell-tokens");
    tokensEl.innerHTML = state.players.filter(p => p.pos === idx).map(p => p.marker).join("");

    const b = state.buildings[idx] || { houses: 0, hotels: 0 };
    cell.querySelector(".cell-buildings").textContent = b.hotels > 0 ? "🏨" : (b.houses > 0 ? "🏠" : "");

    const ownerId = state.owners[idx];
    const ownerEl = cell.querySelector(".cell-owner");
    if (ownerId !== undefined && ownerId !== null) {
      const owner = state.players[ownerId];
      const isM = !!state.mortgagedCells[idx];
      cell.style.borderColor = owner.color;
      cell.style.borderWidth = isM ? "1px" : "3px";
      cell.style.background = isM ? "#1f1418" : "#1a2129";
      ownerEl.textContent = isM ? `${owner.name} 🔒` : owner.name;
      ownerEl.style.color = owner.color;
    } else {
      cell.style.borderColor = "#21262d";
      cell.style.borderWidth = "2px";
      cell.style.background = ["start", "sandbox", "hackathon", "tax"].includes(data.type) ? "#1a2129" : "#141a21";
      ownerEl.textContent = data.type === "company" ? "free" : "";
      ownerEl.style.color = "#6e7681";
    }
  }
}

// ==================== ЛОГ ====================
function addLog(msg) {
  if (!state) return;
  state.gameLog.push(msg);
  if (state.gameLog.length > 100) state.gameLog.shift();
  const log = document.getElementById("log");
  log.innerHTML = state.gameLog.slice(-8).map(l => `<div>${l}</div>`).join("");
  log.scrollTop = log.scrollHeight;
}

// ==================== ЛОГИКА ====================
function getCellOwnerId(idx) {
  return state.owners[idx] !== undefined ? state.owners[idx] : null;
}

function checkMonopoly(playerId, sector) {
  if (["Служебная", "Спецклетка"].includes(sector)) return false;
  const owned = state.players[playerId].companies.filter(c =>
    BOARD_DATA[c].sector === sector && !state.mortgagedCells[c]
  ).length;
  return owned === SECTOR_COUNTS[sector];
}

function getRent(idx) {
  const cell = BOARD_DATA[idx];
  const ownerId = getCellOwnerId(idx);
  if (ownerId === null || state.mortgagedCells[idx]) return 0;
  const b = state.buildings[idx] || { houses: 0, hotels: 0 };
  if (b.hotels > 0) return cell.rent * 4;
  if (b.houses > 0) return cell.rent * 3;
  if (checkMonopoly(ownerId, cell.sector)) return cell.rent * 2;
  return cell.rent;
}

function announceMonopoly(player, sector) {
  if (["Служебная", "Спецклетка"].includes(sector)) return;
  if (checkMonopoly(player.id, sector)) {
    playSound("success");
    addLog(`[MONOPOLY] ${player.name} → ${sector} ×2`);
    if (!player.isAI) {
      showModal(`
        <h3>🌟 МОНОПОЛИЯ!</h3>
        <div class="modal-info">
          ${player.name} собрал монополию «${sector}»!<br><br>
          Все ${SECTOR_COUNTS[sector]} компаний сектора теперь ваши.<br>
          Аренда ×2, доступно строительство!
        </div>
        <div class="modal-buttons">
          <button class="btn-primary" onclick="closeModal()">[ OK ]</button>
        </div>
      `);
    }
  }
}

// ==================== КУБИК ====================
function animateDice(frame) {
  const canvas = document.getElementById("dice-canvas");
  const ctx = canvas.getContext("2d");
  const size = 100;
  const cx = size / 2, cy = size / 2;
  const r = size / 2 - 10;

  ctx.clearRect(0, 0, size, size);

  if (frame < 20) {
    const angle = frame * 0.3;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(angle);
    ctx.fillStyle = "#2a3540";
    ctx.strokeStyle = "#00ff88";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.rect(-r, -r, r * 2, r * 2);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    playSound("dice");
    setTimeout(() => animateDice(frame + 1), 40);
  } else {
    drawDiceFace(ctx, cx, cy, r, state.diceValue);
    playSound("roll");
    setTimeout(finishRoll, 200);
  }
}

function drawDiceFace(ctx, cx, cy, r, value) {
  ctx.clearRect(0, 0, 100, 100);
  ctx.fillStyle = "#1f2a35";
  ctx.strokeStyle = "#00ff88";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.rect(cx - r, cy - r, r * 2, r * 2);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#2a3540";
  ctx.fillRect(cx - r + 8, cy - r + 8, 22, 22);

  const dots = {
    1: [[0, 0]],
    2: [[-0.5, -0.5], [0.5, 0.5]],
    3: [[-0.5, -0.5], [0, 0], [0.5, 0.5]],
    4: [[-0.5, -0.5], [0.5, -0.5], [-0.5, 0.5], [0.5, 0.5]],
    5: [[-0.5, -0.5], [0.5, -0.5], [0, 0], [-0.5, 0.5], [0.5, 0.5]],
    6: [[-0.5, -0.6], [0.5, -0.6], [-0.5, 0], [0.5, 0], [-0.5, 0.6], [0.5, 0.6]],
  }[value] || [];

  ctx.fillStyle = "#00ff88";
  dots.forEach(([dx, dy]) => {
    ctx.beginPath();
    ctx.arc(cx + dx * r * 0.6, cy + dy * r * 0.6, 7, 0, Math.PI * 2);
    ctx.fill();
  });
}

// ==================== БРОСОК ====================
function rollDice() {
  if (!state || state.gameOver || state.animating) return;
  if (state.players[state.currentPlayerIdx].isAI) return;
  document.getElementById("roll-btn").disabled = true;
  document.getElementById("skip-btn").disabled = true;
  state.diceValue = Math.floor(Math.random() * 6) + 1;
  animateDice(0);
}

function finishRoll() {
  const p = state.players[state.currentPlayerIdx];
  const dice = state.diceValue;
  addLog(`[T${state.turnNumber}] ${p.marker} ${p.name} → ${dice}`);

  const oldPos = p.pos;
  const newPos = (oldPos + dice) % 30;
  const passedStart = newPos < oldPos;

  state.animating = true;
  const steps = passedStart ? (30 - oldPos) + newPos : newPos - oldPos;
  moveStep(p, oldPos, steps, passedStart);
}

function moveStep(player, current, remaining, passedStart) {
  if (remaining <= 0) {
    state.animating = false;
    if (passedStart) {
      player.money += 200;
      addLog(`💰 ${player.name} +$200 (СТАРТ)`);
      playSound("success");
    }
    const cellIdx = player.pos;
    addLog(`📍 ${player.name} → ${BOARD_DATA[cellIdx].name}`);
    updateUI();
    setTimeout(() => handleCell(player, cellIdx), 200);
    return;
  }
  current = (current + 1) % 30;
  player.pos = current;
  updateUI();
  setTimeout(() => moveStep(player, current, remaining - 1, passedStart), 60);
}

// ==================== ОБРАБОТКА КЛЕТОК ====================
function handleCell(player, cellIdx) {
  if (!state || state.gameOver) return;
  const cell = BOARD_DATA[cellIdx];

  switch (cell.type) {
    case "company": handleCompany(player, cellIdx, cell); break;
    case "bug": handleBug(player); break;
    case "tax": handleTax(player); break;
    case "hackathon": handleHackathon(player); break;
    case "sandbox": handleSandbox(player); break;
    case "vpn": handleVPN(player); break;
    case "ddos": handleDDoS(player); break;
    case "opensource": handleOpenSource(player); break;
    case "chance": handleChance(player); break;
    case "treasury": handleTreasury(player); break;
    default: finishTurn();
  }
}

function handleCompany(player, cellIdx, cell) {
  const ownerId = getCellOwnerId(cellIdx);

  if (ownerId === null) {
    if (player.isAI) {
      if (player.money >= cell.price + 100) {
        player.money -= cell.price;
        player.companies.push(cellIdx);
        state.owners[cellIdx] = player.id;
        playSound("buy");
        addLog(`[AI] купил ${cell.name}`);
        announceMonopoly(player, cell.sector);
      } else {
        addLog(`[AI] пропустил ${cell.name}`);
      }
      finishTurn();
      return;
    }
    showPurchaseDialog(player, cellIdx, cell);
  } else if (ownerId === player.id) {
    if (state.mortgagedCells[cellIdx]) {
      if (!player.isAI) {
        const buyback = Math.floor(cell.price * 0.6);
        showModal(`
          <h3>🏦 ВЫКУП</h3>
          <div class="modal-info">Выкупить ${cell.name} за $${buyback}?</div>
          <div class="modal-buttons">
            <button class="btn-primary" id="buyback-yes">[ ВЫКУПИТЬ ]</button>
            <button class="btn-secondary" id="buyback-no">[ ОТМЕНА ]</button>
          </div>
        `);
        document.getElementById("buyback-yes").onclick = () => {
          if (player.money >= buyback) {
            player.money -= buyback;
            delete state.mortgagedCells[cellIdx];
            playSound("money");
            addLog(`🏦 ${player.name} выкупил ${cell.name}`);
            updateUI();
          }
          closeModal();
          finishTurn();
        };
        document.getElementById("buyback-no").onclick = () => { closeModal(); finishTurn(); };
      } else {
        finishTurn();
      }
      return;
    }

    if (checkMonopoly(player.id, cell.sector)) {
      const b = state.buildings[cellIdx] || { houses: 0, hotels: 0 };
      if (b.houses === 0 || (b.houses === 1 && b.hotels === 0)) {
        if (player.isAI) {
          if (b.houses === 0 && player.money >= HOUSE_COST + 200) {
            player.money -= HOUSE_COST;
            b.houses = 1;
            state.buildings[cellIdx] = b;
            addLog(`[AI] дом ${cell.name}`);
          } else if (b.houses === 1 && b.hotels === 0 && player.money >= HOTEL_COST + 300) {
            player.money -= HOTEL_COST;
            b.hotels = 1;
            state.buildings[cellIdx] = b;
            addLog(`[AI] отель ${cell.name}`);
          }
          finishTurn();
          return;
        }
        showBuildDialog(player, cellIdx, cell, b);
        return;
      }
    }
    addLog(`🏠 ${player.name} на своей ${cell.name}`);
    finishTurn();
  } else {
    if (state.blockedCells[cellIdx]) {
      addLog(`⚔️ ${cell.name} под DDoS`);
      finishTurn();
      return;
    }
    const base = getRent(cellIdx);
    if (base === 0) {
      addLog(`🏦 ${cell.name} заложена`);
      finishTurn();
      return;
    }
    const owner = state.players[ownerId];

    if (player.isAI) {
      player.money -= base;
      owner.money += base;
      addLog(`[AI] → $${base} → ${owner.name}`);
      finishTurn();
      return;
    }

    showModal(`
      <h3>🚨 ЧУЖАЯ КОМПАНИЯ</h3>
      <div class="modal-info">
        ${cell.name}<br>
        Владелец: ${owner.name}<br>
        Аренда: $${base}<br><br>
        Запустить пентест (риск)?
      </div>
      <div class="modal-buttons">
        <button class="btn-primary" id="rent-pentest">[ ПЕНТЕСТ ] ✓ $${Math.floor(base / 2)} / ✗ $${base * 2}</button>
        <button class="btn-secondary" id="rent-pay">[ ЗАПЛАТИТЬ $${base} ]</button>
      </div>
    `);
    document.getElementById("rent-pentest").onclick = () => {
      closeModal();
      askQuestion(cell).then(result => {
        let final = base;
        if (result === true) {
          final = Math.floor(base / 2);
          playSound("success");
          addLog(`🛡 ${player.name} пентест ✓ → $${final}`);
        } else if (result === false) {
          final = base * 2;
          playSound("error");
          const correct = cell.opts.find(o => o.startsWith(cell.ans));
          addLog(`🚨 ${player.name} пентест ✗ → $${final}`);
          showModal(`
            <h3>✗ ПРОВАЛ</h3>
            <div class="modal-info">Двойная аренда: $${final}<br><br>Правильно: ${correct}</div>
            <div class="modal-buttons"><button class="btn-secondary" onclick="closeModal()">[ OK ]</button></div>
          `);
        }
        player.money -= final;
        owner.money += final;
        updateUI();
        finishTurn();
      });
    };
    document.getElementById("rent-pay").onclick = () => {
      player.money -= base;
      owner.money += base;
      addLog(`💸 ${player.name} → $${base} → ${owner.name}`);
      closeModal();
      updateUI();
      finishTurn();
    };
  }
}

function showPurchaseDialog(player, cellIdx, cell) {
  const price = cell.price;
  const penalty = Math.floor(price * 1.5);
  const canBuy = player.money >= price;

  showModal(`
    <h3>💼 СВОБОДНАЯ КОМПАНИЯ</h3>
    <div class="modal-color-bar" style="background:${cell.color}"></div>
    <div class="modal-info">
      > ${cell.name}<br>
      💰 Цена: $${price}<br>
      📈 Аренда: $${cell.rent}<br>
      sector: ${cell.sector}
    </div>
    <div class="modal-buttons">
      ${canBuy
        ? `<button class="btn-primary" id="buy-now">[ BUY ] $${price}</button>`
        : `<button class="btn-secondary" disabled>[ NO FUNDS ] ${player.money}/${price}</button>`}
      <button class="btn-primary" style="background:#58a6ff" id="quiz-btn">[ QUIZ ] бесплатно</button>
      <button class="btn-secondary" id="skip-buy">[ SKIP ]</button>
    </div>
    <div class="modal-warning">! ошибка → forced buy $${penalty}</div>
  `);

  if (canBuy) {
    document.getElementById("buy-now").onclick = () => {
      player.money -= price;
      player.companies.push(cellIdx);
      state.owners[cellIdx] = player.id;
      playSound("buy");
      addLog(`💼 ${player.name} купил ${cell.name}`);
      closeModal();
      updateUI();
      announceMonopoly(player, cell.sector);
      finishTurn();
    };
  }
  document.getElementById("quiz-btn").onclick = () => {
    closeModal();
    askQuestion(cell).then(result => {
      if (result === null) { finishTurn(); return; }
      if (result === true) {
        playSound("success");
        player.companies.push(cellIdx);
        state.owners[cellIdx] = player.id;
        addLog(`🎉 ${player.name} → ${cell.name}`);
        showModal(`<h3>✓ ВЕРНО!</h3><div class="modal-info">${cell.name} бесплатно!</div>
          <div class="modal-buttons"><button class="btn-primary" onclick="closeModal()">[ OK ]</button></div>`);
        announceMonopoly(player, cell.sector);
        updateUI();
        setTimeout(finishTurn, 100);
      } else {
        playSound("error");
        player.money -= penalty;
        player.companies.push(cellIdx);
        state.owners[cellIdx] = player.id;
        addLog(`❌ ${player.name} → ${cell.name} $${penalty}`);
        const correct = cell.opts.find(o => o.startsWith(cell.ans));
        showModal(`<h3>✗ ОШИБКА!</h3><div class="modal-info">Принудительная покупка: $${penalty}<br><br>Правильно: ${correct}</div>
          <div class="modal-buttons"><button class="btn-secondary" onclick="closeModal()">[ OK ]</button></div>`);
        announceMonopoly(player, cell.sector);
        updateUI();
        setTimeout(finishTurn, 100);
      }
    });
  };
  document.getElementById("skip-buy").onclick = () => {
    addLog(`⏭ ${player.name} пропустил ${cell.name}`);
    closeModal();
    finishTurn();
  };
}

function askQuestion(cell) {
  return new Promise(resolve => {
    const optsHtml = cell.opts.map(o =>
      `<label><input type="radio" name="quiz" value="${o[0]}"> ${o}</label>`
    ).join("");
    showModal(`
      <h3>🧠 БЛИЦ-ВОПРОС</h3>
      <div class="modal-color-bar" style="background:${cell.color}"></div>
      <div class="quiz-question">${cell.q}</div>
      <div class="quiz-options">${optsHtml}</div>
      <div class="modal-buttons">
        <button class="btn-primary" id="quiz-submit">[ SUBMIT ]</button>
        <button class="btn-secondary" id="quiz-cancel">[ CANCEL ]</button>
      </div>
    `);
    document.getElementById("quiz-submit").onclick = () => {
      const sel = document.querySelector('input[name="quiz"]:checked');
      if (!sel) return;
      closeModal();
      resolve(sel.value === cell.ans);
    };
    document.getElementById("quiz-cancel").onclick = () => {
      closeModal();
      resolve(null);
    };
  });
}

function showBuildDialog(player, cellIdx, cell, b) {
  const rent = getRent(cellIdx);
  const canHouse = b.houses === 0 && player.money >= HOUSE_COST;
  const canHotel = b.houses === 1 && b.hotels === 0 && player.money >= HOTEL_COST;

  showModal(`
    <h3>🏗 СТРОИТЕЛЬСТВО</h3>
    <div class="modal-color-bar" style="background:${cell.color}"></div>
    <div class="modal-info">
      > ${cell.name}<br>
      🏠 ${b.houses}/1 &nbsp; 🏨 ${b.hotels}/1<br>
      Текущая аренда: $${rent}
    </div>
    <div class="modal-buttons">
      ${canHouse ? `<button class="btn-primary" id="build-house">[ HOUSE ] $${HOUSE_COST} → ×3</button>` : (b.houses === 1 ? `<button class="btn-secondary" disabled>[ OK ] дом есть</button>` : `<button class="btn-secondary" disabled>[ NO FUNDS ]</button>`)}
      ${canHotel ? `<button class="btn-primary" style="background:#e3b341" id="build-hotel">[ HOTEL ] $${HOTEL_COST} → ×4</button>` : (b.hotels === 1 ? `<button class="btn-secondary" disabled>[ OK ] отель есть</button>` : (b.houses === 0 ? `<button class="btn-secondary" disabled>[ LOCKED ] сначала дом</button>` : `<button class="btn-secondary" disabled>[ NO FUNDS ]</button>`))}
      <button class="btn-secondary" id="build-exit">[ EXIT ]</button>
    </div>
  `);

  if (canHouse) document.getElementById("build-house").onclick = () => {
    player.money -= HOUSE_COST;
    b.houses = 1;
    state.buildings[cellIdx] = b;
    playSound("buy");
    addLog(`🏠 дом на ${cell.name}`);
    closeModal();
    updateUI();
    finishTurn();
  };
  if (canHotel) document.getElementById("build-hotel").onclick = () => {
    player.money -= HOTEL_COST;
    b.hotels = 1;
    state.buildings[cellIdx] = b;
    playSound("buy");
    addLog(`🏨 отель на ${cell.name}`);
    closeModal();
    updateUI();
    finishTurn();
  };
  document.getElementById("build-exit").onclick = () => {
    closeModal();
    finishTurn();
  };
}

function handleChance(player) {
  const ev = CHANCE_EVENTS[Math.floor(Math.random() * CHANCE_EVENTS.length)];
  const text = ev[0], delta = ev[1];
  player.money += delta;
  playSound(delta > 0 ? "money" : "error");
  addLog(`🎴 ${player.name} шанс: ${delta >= 0 ? "+" : ""}${delta}$`);
  if (!player.isAI) {
    showModal(`<h3>🎴 ШАНС</h3><div class="modal-info">${text}<br><br>${delta >= 0 ? "+" : ""}${delta}$</div>
      <div class="modal-buttons"><button class="btn-primary" onclick="closeModal();finishTurn()">[ OK ]</button></div>`);
  } else {
    finishTurn();
  }
}

function handleTreasury(player) {
  const ev = TREASURY_EVENTS[Math.floor(Math.random() * TREASURY_EVENTS.length)];
  const text = ev[0], delta = ev[1];
  player.money += delta;
  playSound(delta > 0 ? "money" : "error");
  addLog(`🎴 ${player.name} казна: ${delta >= 0 ? "+" : ""}${delta}$`);
  if (!player.isAI) {
    showModal(`<h3>🎴 КАЗНА</h3><div class="modal-info">${text}<br><br>${delta >= 0 ? "+" : ""}${delta}$</div>
      <div class="modal-buttons"><button class="btn-primary" onclick="closeModal();finishTurn()">[ OK ]</button></div>`);
  } else {
    finishTurn();
  }
}

function handleBug(player) {
  playSound("error");
  player.money -= 100;
  player.pos = (player.pos - 3 + 30) % 30;
  addLog(`💥 ${player.name}: −$100, откат на 3`);
  if (!player.isAI) {
    showModal(`<h3>💥 БАГ</h3><div class="modal-info">−$100, откат на 3 клетки</div>
      <div class="modal-buttons"><button class="btn-primary" onclick="closeModal();updateUI();finishTurn()">[ OK ]</button></div>`);
  } else {
    updateUI();
    finishTurn();
  }
}

function handleTax(player) {
  playSound("error");
  player.money -= 150;
  addLog(`🧾 ${player.name}: −$150`);
  if (!player.isAI) {
    showModal(`<h3>🧾 НАЛОГ</h3><div class="modal-info">−$150</div>
      <div class="modal-buttons"><button class="btn-primary" onclick="closeModal();finishTurn()">[ OK ]</button></div>`);
  } else {
    finishTurn();
  }
}

function handleHackathon(player) {
  playSound("success");
  player.money += 200;
  addLog(`🏆 ${player.name}: +$200`);
  if (!player.isAI) {
    showModal(`<h3>🏆 ХАКАТОН</h3><div class="modal-info">+$200</div>
      <div class="modal-buttons"><button class="btn-primary" onclick="closeModal();finishTurn()">[ OK ]</button></div>`);
  } else {
    finishTurn();
  }
}

function handleSandbox(player) {
  playSound("error");
  player.money -= 100;
  addLog(`🔒 ${player.name}: −$100`);
  if (!player.isAI) {
    showModal(`<h3>🔒 SANDBOX</h3><div class="modal-info">−$100</div>
      <div class="modal-buttons"><button class="btn-primary" onclick="closeModal();finishTurn()">[ OK ]</button></div>`);
  } else {
    finishTurn();
  }
}

function handleVPN(player) {
  const free = BOARD_DATA.map((c, i) => i).filter(i =>
    BOARD_DATA[i].type === "company" && getCellOwnerId(i) === null
  );
  if (free.length) {
    const target = free[Math.floor(Math.random() * free.length)];
    player.pos = target;
    addLog(`🌐 ${player.name} → ${BOARD_DATA[target].name}`);
    if (!player.isAI) {
      showModal(`<h3>🌐 VPN</h3><div class="modal-info">Телепорт на ${BOARD_DATA[target].name}</div>
        <div class="modal-buttons"><button class="btn-primary" id="vpn-ok">[ OK ]</button></div>`);
      document.getElementById("vpn-ok").onclick = () => {
        closeModal();
        updateUI();
        handleCell(player, target);
      };
    } else {
      updateUI();
      setTimeout(() => handleCell(player, target), 200);
    }
  } else {
    finishTurn();
  }
}

function handleDDoS(player) {
  const enemies = state.players.filter(p => p.id !== player.id && p.companies.length);
  if (enemies.length) {
    const enemy = enemies[Math.floor(Math.random() * enemies.length)];
    const target = enemy.companies[Math.floor(Math.random() * enemy.companies.length)];
    state.blockedCells[target] = 2;
    addLog(`⚔️ ${player.name} → ${BOARD_DATA[target].name} блок`);
    if (!player.isAI) {
      showModal(`<h3>⚔️ DDoS</h3><div class="modal-info">${BOARD_DATA[target].name} заблокирована на 2 хода</div>
        <div class="modal-buttons"><button class="btn-primary" onclick="closeModal();finishTurn()">[ OK ]</button></div>`);
    } else {
      finishTurn();
    }
  } else {
    addLog(`⚔️ DDoS: нет целей`);
    finishTurn();
  }
}

function handleOpenSource(player) {
  player.money += 150;
  playSound("success");
  state.players.forEach(p => { if (p.id !== player.id) p.money += 50; });
  addLog(`🐧 ${player.name}: +$150, остальным +$50`);
  if (!player.isAI) {
    showModal(`<h3>🐧 OPEN SOURCE</h3><div class="modal-info">+$150 вам, +$50 остальным</div>
      <div class="modal-buttons"><button class="btn-primary" onclick="closeModal();finishTurn()">[ OK ]</button></div>`);
  } else {
    finishTurn();
  }
}

// ==================== КОНЕЦ ХОДА ====================
function finishTurn() {
  if (!state || state.gameOver) return;

  for (const p of state.players) {
    if (p.money < 0) {
      const available = p.companies.filter(c => !state.mortgagedCells[c]);
      if (!available.length) {
        endGame(state.players.filter(pl => pl.id !== p.id).map(pl => pl.id));
        return;
      }
      if (p.isAI) {
        for (const c of available) {
          const val = Math.floor(BOARD_DATA[c].price / 2);
          p.money += val;
          state.mortgagedCells[c] = true;
          addLog(`[AI] залог ${BOARD_DATA[c].name} +$${val}`);
          if (p.money >= 0) break;
        }
      }
    }
  }

  for (const c in state.blockedCells) {
    state.blockedCells[c]--;
    if (state.blockedCells[c] <= 0) delete state.blockedCells[c];
  }

  state.players.forEach(p => {
    state.balanceHistory[p.id].push(p.money);
    if (state.balanceHistory[p.id].length > 30) state.balanceHistory[p.id].shift();
  });

  state.currentPlayerIdx = (state.currentPlayerIdx + 1) % state.players.length;
  state.turnNumber++;
  updateUI();
  document.getElementById("roll-btn").disabled = false;
  document.getElementById("skip-btn").disabled = false;
  saveGame(true);

  setTimeout(checkAI, 800);
}

function checkAI() {
  if (!state || state.gameOver) return;
  const p = state.players[state.currentPlayerIdx];
  if (p.isAI) {
    document.getElementById("roll-btn").disabled = true;
    document.getElementById("skip-btn").disabled = true;
    setTimeout(() => {
      state.diceValue = Math.floor(Math.random() * 6) + 1;
      animateDice(0);
    }, 400);
  }
}

function endGame(winnerIds) {
  state.gameOver = true;
  document.getElementById("roll-btn").disabled = true;
  playSound("win");

  const winners = winnerIds.map(id => state.players[id]);
  const text = winners.map(w => `🏆 ${w.marker} ${w.name}`).join("<br>");
  const stats = state.players.map(p =>
    `${p.marker} ${p.name}: $${p.money} (${p.companies.length} комп.)`
  ).join("<br>");

  showModal(`
    <h3>🏆 ИГРА ОКОНЧЕНА!</h3>
    <div class="modal-info">${text}<br><br>━━━━━━━━━━━━<br>${stats}</div>
    <div class="modal-buttons">
      <button class="btn-primary" id="restart-yes">[ НОВАЯ ИГРА ]</button>
      <button class="btn-secondary" onclick="backToMenu()">[ В МЕНЮ ]</button>
    </div>
  `);
  document.getElementById("restart-yes").onclick = () => { closeModal(); restartGame(); };
}

function restartGame() {
  const configs = state.players.map(p => ({ name: p.name, isAI: p.isAI }));
  numPlayers = configs.length;
  playerConfigs = configs;
  startGame();
}

function backToMenu() {
  closeModal();
  state = null;
  document.getElementById("game-screen").classList.remove("active");
  document.getElementById("menu-screen").classList.add("active");
}

// ==================== SKIP ====================
function skipTurn() {
  if (!state || state.gameOver || state.animating) return;
  const p = state.players[state.currentPlayerIdx];
  if (p.isAI) return;
  if (p.money < SKIP_COST) {
    showModal(`<h3>!</h3><div class="modal-info">Нужно $${SKIP_COST} для пропуска</div>
      <div class="modal-buttons"><button class="btn-secondary" onclick="closeModal()">[ OK ]</button></div>`);
    return;
  }
  if (!confirm(`Пропустить ход за $${SKIP_COST}?`)) return;
  p.money -= SKIP_COST;
  addLog(`⏭ ${p.name} пропустил ход за $${SKIP_COST}`);
  updateUI();
  finishTurn();
}

// ==================== МОДАЛКИ ====================
function showModal(html) {
  const overlay = document.getElementById("modal-overlay");
  const box = document.getElementById("modal-box");
  box.innerHTML = html;
  overlay.classList.add("active");
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("active");
}

// ==================== СТАТИСТИКА ====================
function showStats() {
  if (!state) return;
  const tableRows = state.players.map((p) => {
    const monos = Object.keys(SECTOR_COUNTS).filter(s => checkMonopoly(p.id, s)).length;
    return `<tr>
      <td style="color:${p.color}">${p.marker} ${p.name}</td>
      <td>$${p.money}</td>
      <td>${p.companies.length}</td>
      <td>${p.companies.filter(c => state.mortgagedCells[c]).length}</td>
      <td>${monos}</td>
    </tr>`;
  }).join("");

  showModal(`
    <h3>📊 STATISTICS</h3>
    <canvas class="stats-chart" id="stats-canvas" width="500" height="180"></canvas>
    <table class="stats-table">
      <tr><th>Игрок</th><th>Баланс</th><th>Компаний</th><th>Залог</th><th>Монополий</th></tr>
      ${tableRows}
    </table>
    <div class="modal-buttons">
      <button class="btn-secondary" onclick="closeModal()">[ CLOSE ]</button>
    </div>
  `);

  setTimeout(drawStatsChart, 50);
}

function drawStatsChart() {
  const canvas = document.getElementById("stats-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height;

  ctx.clearRect(0, 0, w, h);

  let maxVal = 1000, minVal = 0;
  Object.values(state.balanceHistory).forEach(hist => {
    hist.forEach(v => { if (v > maxVal) maxVal = v; if (v < minVal) minVal = v; });
  });
  const range = maxVal - minVal || 1;

  ctx.strokeStyle = "#21262d";
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = 10 + (h - 20) * i / 4;
    ctx.beginPath(); ctx.moveTo(30, y); ctx.lineTo(w - 10, y); ctx.stroke();
    ctx.fillStyle = "#6e7681";
    ctx.font = "10px Consolas";
    ctx.fillText(`$${Math.round(maxVal - range * i / 4)}`, 2, y + 3);
  }

  state.players.forEach((p) => {
    const hist = state.balanceHistory[p.id];
    if (hist.length < 2) return;
    ctx.strokeStyle = p.color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    hist.forEach((v, i) => {
      const x = 30 + (w - 40) * i / (hist.length - 1);
      const y = 10 + (h - 20) * (1 - (v - minVal) / range);
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    });
    ctx.stroke();
  });
}

// ==================== СОХРАНЕНИЕ ====================
function saveGame(silent) {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(state));
    if (!silent) {
      playSound("buy");
      showModal(`<h3>💾 SAVED</h3><div class="modal-info">Игра сохранена в localStorage</div>
        <div class="modal-buttons"><button class="btn-primary" onclick="closeModal()">[ OK ]</button></div>`);
    }
  } catch (e) {}
}

function loadGame() {
  try {
    const data = localStorage.getItem(SAVE_KEY);
    if (!data) return false;
    state = JSON.parse(data);
    numPlayers = state.players.length;
    document.getElementById("menu-screen").classList.remove("active");
    document.getElementById("game-screen").classList.add("active");
    buildBoard();
    renderPanels();
    updateUI();
    addLog("💾 Игра загружена");
    setTimeout(checkAI, 500);
    return true;
  } catch (e) { return false; }
}

// ==================== ИНИЦИАЛИЗАЦИЯ ====================
document.addEventListener("DOMContentLoaded", () => {
  initMenu();

  document.getElementById("roll-btn").addEventListener("click", rollDice);
  document.getElementById("skip-btn").addEventListener("click", skipTurn);
  document.getElementById("stats-btn").addEventListener("click", showStats);
  document.getElementById("help-game-btn").addEventListener("click", showHelp);
  document.getElementById("save-btn").addEventListener("click", () => saveGame(false));
  document.getElementById("reset-btn").addEventListener("click", () => {
    if (confirm("Начать заново? Прогресс будет потерян.")) restartGame();
  });
  document.getElementById("menu-btn").addEventListener("click", () => {
    if (confirm("Вернуться в меню?")) backToMenu();
  });

  if (localStorage.getItem(SAVE_KEY)) {
    setTimeout(() => {
      if (confirm("Найдено сохранение. Загрузить?")) loadGame();
    }, 300);
  }
});

window.closeModal = closeModal;
window.backToMenu = backToMenu;
window.finishTurn = finishTurn;
window.updateUI = updateUI;
window.handleCell = handleCell;

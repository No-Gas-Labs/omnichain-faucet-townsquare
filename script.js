// 🪓 No_Gas_Labs™ — TownSquare Build
// Fuck yes. Let’s make these wallets sing.
// If this breaks, blame recursion not the dev.
<!DOCTYPE html><html lang="en">

<head>

  <meta charset="UTF-8">

  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Omnichain Faucet TownSquare</title>

  <style>

    body {

      margin: 0;

      background: #0f0f23;

      color: #ffd700;

      font-family: 'Courier New', monospace;

    }

    header {

      background: #1a1a2e;

      color: #ffd700;

      display: flex;

      align-items: center;

      justify-content: space-between;

      padding: 1rem;

    }

    button {

      background: #ff00c8;

      color: #ffd700;

      border: none;

      padding: 0.5rem 1rem;

      font-size: 1rem;

      border-radius: 4px;

    }

    #grid {

      display: grid;

      grid-template-columns: repeat(10, 1fr);

      grid-auto-rows: 10vw;

      gap: 2px;

      margin: 1rem;

    }

    .tile {

      background: #1a1a2e;

      position: relative;

      display: flex;

      align-items: center;

      justify-content: center;

      font-size: 0.8rem;

      color: #ffd700;

    }

    .shrine {

      background: #ff00c8;

      cursor: pointer;

      overflow: hidden;

    }

    .shrine:hover::before {

      content: '';

      position: absolute;

      top: 0;

      left: 0;

      right: 0;

      bottom: 0;

      background: rgba(255, 0, 200, 0.3);

      mix-blend-mode: screen;

      animation: glitch 1s infinite;

    }

    @keyframes glitch {

      0% { transform: translate(0,0); }

      20% { transform: translate(-2px,2px); }

      40% { transform: translate(2px,-2px); }

      60% { transform: translate(-1px,1px); }

      80% { transform: translate(1px,-1px); }

      100% { transform: translate(0,0); }

    }

    #xp {

      font-size: 1rem;

      padding: 0 1rem;

    }

    #wallet-modal.hidden {

      display: none;

    }

    .modal-content {

      background: #1a1a2e;

      border: 2px solid #ff00c8;

      color: #ffd700;

      padding: 1rem;

      border-radius: 8px;

      text-align: center;

      width: 90%;

      max-width: 300px;

    }

    .modal-content img {

      width: 100%;

    }

  </style>

</head>

<body>

  <header>

    <h1>Omnichain Faucet TownSquare</h1>

    <button id="wallet-btn">Connect</button>

    <div id="xp">XP: <span id="xpCount">0</span></div>

  </header>

  <main id="grid"></main>

  <div id="log"></div>

  <div id="wallet-modal" class="hidden">

    <div class="modal-content">

      <p id="wallet-text">Scan to connect</p>

      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkAQMAAABKLAcXAAAABlBMVEX///8AAABVwtN+AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAzUlEQVQ4jaWUOw6EMAxEB1Gk5AbLTeBaKVYiUi62uYm5QUoKhNfOfgQdcdxEj2KUmYkBLrMwc3jAz3JSBXnARRrCBPQNNLMTTUwjxzYqmgYKHW+NpI44+5M/A2m6cc2nrO9RGbnLqVIDiabjA0ui7dlCcnRZP0aqoRfEEQeAd5jJY1RNl+jTipE6EjF9IRBH90mnp4ETa5tWKt0eauybron0ZQUMrPFQDel2HFrObzfNtOYlsTbTRLKp0m0dlf+LhDq2UMmz3OOfroEu8waEPGD3j5lKAgAAAABJRU5ErkJggg==" alt="wallet qr">

      <p id="wallet-address">0xFAKE123...789</p>

      <button id="wallet-connect">Connect</button>

      <button id="wallet-disconnect" class="hidden">Disconnect</button>

      <button id="wallet-close">Close</button>

    </div>

  </div>

  <script>

    const faucets = ['EOS', 'TON', 'SUI'];

    let xp = Number(localStorage.getItem('xp') || 0);

    let claims = Number(localStorage.getItem('claims') || 0);

    let loop = Number(localStorage.getItem('loop') || 0);document.addEventListener('DOMContentLoaded', () => {

  loop++;

  localStorage.setItem('loop', loop);

  document.querySelector('#xpCount').textContent = xp;

  if (xp >= 10) document.body.classList.add('tier1');

  if (xp >= 25) document.body.classList.add('tier2');

  const grid = document.getElementById('grid');

  for (let i = 0; i < 100; i++) {

    const tile = document.createElement('div');

    tile.className = 'tile';

    if ([12, 45, 78].includes(i)) {

      tile.classList.add('shrine');

      tile.textContent = faucets[[12, 45, 78].indexOf(i)];

      tile.addEventListener('click', () => claim(faucets[[12, 45, 78].indexOf(i)]));

    }

    grid.appendChild(tile);

  }

  if (loop > 1) logMessage('You came back. The shrine remembers.');

  const walletBtn = document.getElementById('wallet-btn');

  const walletModal = document.getElementById('wallet-modal');

  document.getElementById('wallet-close').addEventListener('click', () => walletModal.classList.add('hidden'));

  walletBtn.addEventListener('click', () => walletModal.classList.remove('hidden'));

  document.body.addEventListener('click', startAmbient, { once: true });

  setInterval(npcInterrupt, 15000);

});

function claim(network) {

  alert(`💧 Received 0.001 ${network} from the ${network} Shrine!`);

  xp++;

  claims++;

  localStorage.setItem('xp', xp);

  localStorage.setItem('claims', claims);

  document.querySelector('#xpCount').textContent = xp;

  if (xp >= 10) document.body.classList.add('tier1');

  if (xp >= 25) document.body.classList.add('tier2');

  if (claims === 77) alert('🌑 A hidden shrine awakens.');

  if (Math.random() < 0.05) dropScroll();

  console.log('🔧 What the fuck did we just do?', { xp, claims });

}

function talk() {

  const lines = [

    'Featherstone: Gas fees used to bleed us dry.',

    'Dr. Trask: This faucet remembers.',

    "Machiavelli: This isn’t a simulation. It's a siege.",

    'Vendy the Machine: BRRZTT! TOKEN INFUSION IMMINENT.'

  ];

  alert(lines[Math.floor(Math.random() * lines.length)]);

  if (Math.random() < 0.05) dropScroll();

  console.log('🔧 What the fuck did we just do? NPC chat fired.');

}

function npcInterrupt() {

  const messages = [

    'Vendy: I used to vend tokens. Now I vend shame.',

    'Machiavelli: UX fatigue is a design decision.',

    'Dr. Trask: The shrine remembers your loops.'

  ];

  logMessage(messages[Math.floor(Math.random() * messages.length)]);

}

function dropScroll() {

  const scrolls = [

    'Scroll I: The shrine feeds on loops.',

    'Scroll II: Featherstone whispers from Loop Zero.',

    'Scroll III: Burn tokens, gain favor.'

  ];

  logMessage('📜 ' + scrolls[Math.floor(Math.random() * scrolls.length)]);

}

function logMessage(msg) {

  const log = document.getElementById('log');

  const p = document.createElement('p');

  p.textContent = msg;

  log.appendChild(p);

}

function startAmbient() {

  const ctx = new (window.AudioContext || window.webkitAudioContext)();

  const osc = ctx.createOscillator();

  const gain = ctx.createGain();

  osc.type = 'sine';

  osc.frequency.value = 60;

  gain.gain.value = 0.02;

  osc.connect(gain).connect(ctx.destination);

  osc.start();

}

  </script>

</body>

</html>

// 🪓 No_Gas_Labs™ — TownSquare Build
// Fuck yes. Let’s make these wallets sing.
// If this breaks, blame recursion not the dev.

const faucets = ['EOS', 'TON', 'SUI'];
let xp = Number(localStorage.getItem('xp') || 0);
let claims = Number(localStorage.getItem('claims') || 0);
let loop = Number(localStorage.getItem('loop') || 0);

document.addEventListener('DOMContentLoaded', () => {
  loop++;
  localStorage.setItem('loop', loop);
  document.querySelector('#xp span').textContent = xp;
  if (xp >= 10) document.body.classList.add('tier1');
  if (xp >= 25) document.body.classList.add('tier2');
  const grid = document.getElementById('town-grid');
  for (let i = 0; i < 100; i++) {
    const tile = document.createElement('div');
    tile.className = 'tile';
    if ([12, 45, 78].includes(i)) {
      tile.classList.add('npc');
      tile.textContent = '🧙';
      tile.addEventListener('click', talk);
    }
    grid.appendChild(tile);
  }

  document.querySelectorAll('#faucets li').forEach(li => {
    li.addEventListener('click', () => claim(li.dataset.net));
  });

  if (loop > 1) logMessage('You came back. The shrine remembers.');

  const walletBtn = document.getElementById('wallet-btn');
  const walletModal = document.getElementById('wallet-modal');
  document.getElementById('close-wallet').addEventListener('click', () => walletModal.classList.add('hidden'));
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
  document.querySelector('#xp span').textContent = xp;
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
  // fuck yeah, background hum for the shrine
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.value = 60;
  gain.gain.value = 0.02;
  osc.connect(gain).connect(ctx.destination);
  osc.start();
}

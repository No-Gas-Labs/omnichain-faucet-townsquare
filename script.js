// 🪓 No_Gas_Labs™ — TownSquare Build // Fuck yes. Let’s make these wallets sing. // If this breaks, blame recursion not the dev.
// 🪓 No_Gas_Labs™ — TownSquare Build // Fuck yes. Let’s make these wallets sing. // If this breaks, blame recursion not the dev.

document.addEventListener('DOMContentLoaded', () => { const grid = document.getElementById('grid'); const xpCounter = document.getElementById('xpCount'); const modal = document.getElementById('wallet-modal'); const walletBtn = document.getElementById('wallet-btn'); const closeBtn = document.getElementById('wallet-close');

let xp = Number(localStorage.getItem('xp')) || 0; let claims = Number(localStorage.getItem('claims')) || 0; let loop = Number(localStorage.getItem('loop')) || 0;

loop++; localStorage.setItem('loop', loop); xpCounter.textContent = xp;

if (xp >= 10) document.body.classList.add('tier1'); if (xp >= 25) document.body.classList.add('tier2');

const npcs = [22, 55, 88]; const shrines = [12, 45, 78]; const networks = ['EOS', 'TON', 'SUI'];

for (let i = 0; i < 100; i++) { const tile = document.createElement('div'); tile.classList.add('tile');

if (npcs.includes(i)) {
  tile.classList.add('npc');
  tile.textContent = '🧍';
  tile.addEventListener('click', () => {
    const lines = [
      'Featherstone: Back in my day… gas fees cost your soul™.',
      'Dr. Trask: This faucet remembers.',
      "Machiavelli: This isn’t a simulation. It’s a siege.",
      'Vendy the Machine: BRRZTT! TOKEN INFUSION IMMINENT.',
      '🪙 Honor-Bearer: Grant protocol detected… shrine unlocking.'
    ];
    alert(lines[Math.floor(Math.random() * lines.length)]);
    if (Math.random() < 0.05) dropScroll();
  });
}

if (shrines.includes(i)) {
  const index = shrines.indexOf(i);
  tile.classList.add('shrine');
  tile.textContent = networks[index];
  tile.addEventListener('click', () => claim(networks[index]));
}

grid.appendChild(tile);

}

if (loop > 1) logMessage('You came back. The shrine remembers.');

const Faucet = { dripAmounts: { EOS: 0.0005, TON: 0.0012, SUI: 0.0008 }, lastClaim: null, claim(network) { const now = Date.now(); const cooldown = 1000 * 60 * 60; if (this.lastClaim && now - this.lastClaim < cooldown) { alert('⏳ Shrine still recharging. Come back later.'); return; } const drip = this.dripAmounts[network]; alert(💧 You’ve received ${drip} ${network}.); this.lastClaim = now; xp++; claims++; localStorage.setItem('xp', xp); localStorage.setItem('claims', claims); xpCounter.textContent = xp; if (xp >= 10) document.body.classList.add('tier1'); if (xp >= 25) document.body.classList.add('tier2'); if (claims === 77) alert('🌑 A hidden shrine awakens.'); if (Math.random() < 0.05) dropScroll(); console.log('🔧 What the fuck did we just do?', { xp, claims }); } };

window.claimFaucet = Faucet.claim.bind(Faucet);

walletBtn.addEventListener('click', () => modal.classList.remove('hidden')); closeBtn.addEventListener('click', () => modal.classList.add('hidden'));

function dropScroll() { const scrolls = [ 'Scroll I: The shrine feeds on loops.', 'Scroll II: Featherstone whispers from Loop Zero.', 'Scroll III: Burn tokens, gain favor.' ]; logMessage('📜 ' + scrolls[Math.floor(Math.random() * scrolls.length)]); }

function logMessage(msg) { const log = document.getElementById('log'); const p = document.createElement('p'); p.textContent = msg; log.appendChild(p); } });


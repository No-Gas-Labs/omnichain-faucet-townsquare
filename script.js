// 🪓 No_Gas_Labs™ — TownSquare Build
// Fuck yes. Let’s make these wallets sing.
// If this breaks, blame recursion not the dev.

const faucets = ['EOS', 'TON', 'SUI'];
let xp = 0;

document.addEventListener('DOMContentLoaded', () => {
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

  const walletBtn = document.getElementById('wallet-btn');
  const walletModal = document.getElementById('wallet-modal');
  document.getElementById('close-wallet').addEventListener('click', () => walletModal.classList.add('hidden'));
  walletBtn.addEventListener('click', () => walletModal.classList.remove('hidden'));
});

function claim(network) {
  alert(`💧 Received 0.001 ${network} from the ${network} Shrine!`);
  xp++;
  document.querySelector('#xp span').textContent = xp;
}

function talk() {
  const lines = [
    'Featherstone: Gas fees used to bleed us dry.',
    'Dr. Trask: This faucet remembers.',
    "Machiavelli: This isn’t a simulation. It's a siege.",
    'Vendy the Machine: BRRZTT! TOKEN INFUSION IMMINENT.'
  ];
  alert(lines[Math.floor(Math.random() * lines.length)]);
}

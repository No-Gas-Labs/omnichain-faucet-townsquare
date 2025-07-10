// 🪓 No_Gas_Labs™ — TownSquare Build
// Fuck yes. Let’s make these wallets sing.
// If this breaks, blame recursion not the dev.

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('grid');
  for (let i = 0; i < 100; i++) {
    const tile = document.createElement('div');
    tile.className = 'tile';
    if (i === 22 || i === 77 || i === 45) {
      tile.classList.add('npc');
      tile.textContent = '🧍';
    }
    grid.appendChild(tile);
  }

  const xpDisplay = document.getElementById('xp');
  let xp = 0;
  const addXP = amt => {
    xp += amt;
    xpDisplay.textContent = 'XP: ' + xp;
  };

  document.querySelectorAll('.claim').forEach(btn => {
    btn.addEventListener('click', () => {
      const chain = btn.dataset.chain;
      alert(`💧 Drip from ${chain}!`);
      addXP(10);
      console.log(`🔧 What the fuck did we just do? Claimed ${chain}`);
    });
  });

  const sidebar = document.getElementById('sidebar');
  document.getElementById('walletToggle').addEventListener('click', () => {
    sidebar.classList.toggle('show');
  });
  document.getElementById('connectBtn').addEventListener('click', () => {
    alert('🔌 Wallet connected… sort of.');
    sidebar.classList.remove('show');
  });
});

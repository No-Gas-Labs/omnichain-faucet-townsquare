// 🪓 No_Gas_Labs™ — TownSquare Build
// Fuck yes. Let’s make these wallets sing.
// If this breaks, blame recursion not the dev.

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('grid');
  const xpCounter = document.getElementById('xp');
  const modal = document.getElementById('wallet-modal');
  let xp = 0;

  // build grid tiles
  for (let i = 0; i < 100; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');

    // sprinkle some NPCs
    if (i === 22 || i === 55 || i === 88) {
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
      });
    }

    grid.appendChild(tile);
  }

  const Faucet = {
    dripAmounts: { EOS: 0.0005, TON: 0.0012, SUI: 0.0008 },
    lastClaim: null,
    claim(network) {
      const now = Date.now();
      const cooldown = 1000 * 60 * 60;
      if (this.lastClaim && now - this.lastClaim < cooldown) {
        alert('⏳ Shrine still recharging. Come back later.');
        return;
      }
      const drip = this.dripAmounts[network];
      alert(`💧 You’ve received ${drip} ${network}.`);
      this.lastClaim = now;
      xp += 1;
      xpCounter.textContent = `XP: ${xp}`;
      console.log('🔧 What the fuck did we just do?');
    }
  };

  window.claimFaucet = Faucet.claim.bind(Faucet);

  document.getElementById('wallet-btn').addEventListener('click', () => {
    modal.classList.add('open');
  });
  document.getElementById('close-wallet').addEventListener('click', () => {
    modal.classList.remove('open');
  });
});

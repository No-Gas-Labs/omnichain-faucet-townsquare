// 🪓 No_Gas_Labs™ — TownSquare Build
// Fuck yes. Let’s make these wallets sing.
// If this breaks, blame recursion not the dev.

let xp = 0;

const faucets = document.querySelectorAll('.faucet');
const xpCount = document.getElementById('xpCount');
const walletModal = document.getElementById('walletModal');
const walletButton = document.getElementById('walletButton');
const closeModal = document.getElementById('closeModal');

faucets.forEach(faucet => {
  faucet.addEventListener('click', () => {
    const chain = faucet.dataset.chain;
    alert(`You’ve claimed from the ${chain} faucet!`);
    xp += 10;
    xpCount.textContent = xp;
  });
});

walletButton.onclick = () => {
  walletModal.style.display = 'block';
};

closeModal.onclick = () => {
  walletModal.style.display = 'none';
};

window.onclick = event => {
  if (event.target == walletModal) {
    walletModal.style.display = 'none';
  }
};

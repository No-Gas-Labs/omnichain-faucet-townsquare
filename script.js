// 🪓 No_Gas_Labs™ — TownSquare Build
// Fuck yes. Let’s make these wallets sing.
// If this breaks, blame recursion not the dev.

document.addEventListener("DOMContentLoaded", () => {
  let xp = 0;
  const xpCount = document.getElementById("xpCount");
  const walletButton = document.getElementById("walletButton");
  const walletModal = document.getElementById("walletModal");
  const closeWallet = document.getElementById("closeWallet");

  document.querySelectorAll(".faucetBtn").forEach(btn => {
    btn.addEventListener("click", () => {
      const chain = btn.dataset.chain;
      alert(`Received 0.001 ${chain} from the ${chain} Shrine.`);
      xp++;
      xpCount.textContent = `XP: ${xp}`;
    });
  });

  walletButton.addEventListener("click", () => {
    walletModal.classList.remove("hidden");
  });

  closeWallet.addEventListener("click", () => {
    walletModal.classList.add("hidden");
  });

  console.log("🔧 What the fuck did we just do?");
});

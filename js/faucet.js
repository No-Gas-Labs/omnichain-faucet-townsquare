// Simulated faucet activation (TON, EOS, SUI)
document.addEventListener("DOMContentLoaded", () => {
  const npcTiles = document.querySelectorAll(".npc");

  npcTiles.forEach((tile) => {
    tile.addEventListener("dblclick", () => {
      const faucetChains = ["TON", "EOS", "SUI"];
      const chosen = faucetChains[Math.floor(Math.random() * faucetChains.length)];

      alert(`🔓 Faucet Request Sent to ${chosen} Shrine\n\n📥 Awaiting token infusion…`);
    });
  });
});

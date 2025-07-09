// Placeholder NPC dialogue logic
document.addEventListener("DOMContentLoaded", () => {
  const tiles = document.querySelectorAll(".npc");

  tiles.forEach((npcTile, index) => {
    npcTile.addEventListener("click", () => {
      const lines = [
        "Featherstone: Back in my day… gas fees cost your soul™.",
        "Dr. Trask: This faucet remembers.",
        "Machiavelli: This isn’t a simulation. It’s a siege.",
        "Vendy the Machine: BRRZTT! TOKEN INFUSION IMMINENT.",
        "🪙 Honor-Bearer: Grant protocol detected… shrine unlocking."
      ];

      alert(lines[index % lines.length]);
    });
  });
});

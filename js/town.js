document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("grid");

  for (let i = 0; i < 400; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");

    // Add a few NPCs for now
    if (i === 111 || i === 288 || i === 333) {
      tile.classList.add("npc");
      tile.innerText = "🧍";
    }

    grid.appendChild(tile);
  }
});

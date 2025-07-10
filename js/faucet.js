// js/faucet.js — ultra-microdrip faucet logic for NGL™ TownSquare

const Faucet = {
  shrineNetworks: ["EOS", "TON", "SUI"],
  dripAmounts: {
    EOS: 0.0005,
    TON: 0.0012,
    SUI: 0.0008
  },
  state: {
    lastClaimed: null,
    availableShrines: ["EOS", "TON", "SUI"]
  },
  claim(network) {
    if (!this.shrineNetworks.includes(network)) {
      alert(`❌ Unknown shrine network: ${network}`);
      return;
    }

    const now = Date.now();
    const cooldown = 1000 * 60 * 60 * 1; // 1 hour cooldown
    if (this.state.lastClaimed && now - this.state.lastClaimed < cooldown) {
      alert("⏳ Shrine still recharging. Come back after the cooldown.");
      return;
    }

    const drip = this.dripAmounts[network];
    alert(`💧 You’ve received ${drip} ${network} from the ${network} Shrine.`);

    this.state.lastClaimed = now;
  }
};

export default Faucet;

import { describe, it, expect } from 'vitest'

describe('XP increment logic', () => {
  it('should increment XP', () => {
    let xp = 0;
    const gainXP = () => xp += 1;
    gainXP();
    expect(xp).toBe(1);
  });
});

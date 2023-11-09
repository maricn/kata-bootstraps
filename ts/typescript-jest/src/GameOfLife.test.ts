import { GameOfLife } from "./GameOfLife";

describe("GameOfLife", () => {
  it("should always return alive if not dead", () => {
    const gameOfLife = new GameOfLife();

    const cellStatus = gameOfLife.getCellStatus();

    expect(cellStatus).toBe("ALIVE");
  });

  it("should die when underpopulated", () => {
    const gameOfLife = new GameOfLife();
    const neighbors = { numOfDead: 2, numOfAlive: 1}

    const cellStatus = gameOfLife.getCellStatus(neighbors);

    expect(cellStatus).toBe("DEAD");
  });
});

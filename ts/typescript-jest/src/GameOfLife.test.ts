import { GameOfLife } from "./GameOfLife";

describe("GameOfLife", () => {
  it("should die when underpopulated, when it has no neighbour", () => {
    const gameOfLife = new GameOfLife();

    const cellStatus = gameOfLife.getCellStatus(0);

    expect(cellStatus).toBe("DEAD");
  });

  it("should die when underpopulated, when it has 1 neighbour", () => {
    const gameOfLife = new GameOfLife();

    const cellStatus = gameOfLife.getCellStatus(1);

    expect(cellStatus).toBe("DEAD");
  });

  it("should die when underpopulated, when it has 2 neighbours", () => {
    const gameOfLife = new GameOfLife();

    const cellStatus = gameOfLife.getCellStatus(2);

    expect(cellStatus).toBe("ALIVE");
  });
});

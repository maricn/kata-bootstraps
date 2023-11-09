import { GameOfLife } from "./GameOfLife";

describe("GameOfLife", () => {
  it("should always return alive if not dead", () => {
    const gameOfLife = new GameOfLife();

    const cellStatus = gameOfLife.getCellStatus();

    expect(cellStatus).toBe("ALIVE");
  });
});

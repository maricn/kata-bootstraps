import { Cell } from "./Cell";

describe("Cell", () => {
  it("should die when underpopulated, when it has no neighbour", () => {
    const cell = new Cell();

    const cellStatus = cell.getCellStatus(0);

    expect(cellStatus).toBe("DEAD");
  });

  it("should die when underpopulated, when it has 1 neighbour", () => {
    const cell = new Cell();

    const cellStatus = cell.getCellStatus(1);

    expect(cellStatus).toBe("DEAD");
  });

  it("should die when underpopulated, when it has 2 neighbours", () => {
    const cell = new Cell();

    const cellStatus = cell.getCellStatus(2);

    expect(cellStatus).toBe("ALIVE");
  });

  it("should be alive, when it has 3 neighbours", () => {
    const cell = new Cell();

    const cellStatus = cell.getCellStatus(3);

    expect(cellStatus).toBe("ALIVE");
  });

  it("should die when overpopulated, when it has 5 neighbours", () => {
    const cell = new Cell();

    const cellStatus = cell.getCellStatus(5);

    expect(cellStatus).toBe("DEAD");
  });

  it("should stay alive =3", () => {
    const cell = new Cell();
    const aliveCellStatus = cell.getCellStatus(3)

    const cellStatus = cell.getCellStatus(3);

    expect(cellStatus).toBe("ALIVE");
  });

  it("should stay dead <3", () => {
    const cell = new Cell();
    const deadCellStatus = cell.getCellStatus(0)

    const cellStatus = cell.getCellStatus(2);

    expect(cellStatus).toBe("DEAD");
  });
  it("should stay dead >3", () => {
    const cell = new Cell();
    const deadCellStatus = cell.getCellStatus(0)

    const cellStatus = cell.getCellStatus(189);

    expect(cellStatus).toBe("DEAD");
  });
});

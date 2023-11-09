export class GameOfLife {
  public getCellStatus(a: number) {
    if (a < 2) {
      return "DEAD";
    }

    return "ALIVE";
  }
}

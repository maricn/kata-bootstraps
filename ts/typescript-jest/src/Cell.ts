export class Cell {
  public getCellStatus(numOfNeighbors: number) {
    if (numOfNeighbors == 2 || numOfNeighbors == 3) return "ALIVE"
    else return "DEAD"
  }
}

type Particle = {
  x: number;
  y: number;
  // Other particle properties can be added here if needed
};

export class Grid {
  private grid: Map<string, Particle[]>;
  private cellSize: number;

  constructor(cellSize: number) {
    this.grid = new Map();
    this.cellSize = cellSize;
  }

  private getKey(x: number, y: number): string {
    const cellX = Math.floor(x / this.cellSize);
    const cellY = Math.floor(y / this.cellSize);
    return `${cellX},${cellY}`;
  }

  insert(particle: Particle) {
    const key = this.getKey(particle.x, particle.y);
    if (!this.grid.has(key)) {
      this.grid.set(key, []);
    }
    this.grid.get(key)!.push(particle);
  }

  query(x: number, y: number, radius: number): Particle[] {
    const nearbyParticles: Particle[] = [];
    const minCellX = Math.floor((x - radius) / this.cellSize);
    const maxCellX = Math.floor((x + radius) / this.cellSize);
    const minCellY = Math.floor((y - radius) / this.cellSize);
    const maxCellY = Math.floor((y + radius) / this.cellSize);

    for (let cellX = minCellX; cellX <= maxCellX; cellX++) {
      for (let cellY = minCellY; cellY <= maxCellY; cellY++) {
        const key = `${cellX},${cellY}`;
        if (this.grid.has(key)) {
          nearbyParticles.push(...this.grid.get(key)!);
        }
      }
    }

    return nearbyParticles;
  }

  clear() {
    this.grid.clear();
  }

  getParticlesInCell(x: number, y: number): Particle[] {
    const key = this.getKey(x, y);
    return this.grid.get(key) || [];
  }
}
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QcmService {
  private responses: { [key: string]: number[] } = {};

  constructor() { }

  setResponses(category: string, responses: number[]) {
    this.responses[category] = responses;
  }

  getAverage(category: string): number {
    const validResponses = this.responses[category].filter(value => value !== null);
    const total = validResponses.reduce((a, b) => a + b, 0);
    const count = validResponses.length;

    return count === 0 ? 0 : total / count;
  }

  getAllAverages(): { [key: string]: number } {
    const averages: { [key: string]: number } = {};
    for (const category in this.responses) {
      averages[category] = this.getAverage(category);
    }
    return averages;
  }

  getGlobalAverage(): number {
    const allAverages = this.getAllAverages();
    const total = Object.values(allAverages).reduce((sum, avg) => sum + avg, 0);
    const count = Object.keys(allAverages).length;

    return count === 0 ? 0 : total / count;
  }

  getRseImage(globalAverage: number): string {
    if (globalAverage < 0.8) {
      return 'RSE-E.png';
    } else if (globalAverage < 1.6) {
      return 'RSE-D.png';
    } else if (globalAverage < 2.4) {
      return 'RSE-C.png';
    } else if (globalAverage < 3.2) {
      return 'RSE-B.png';
    } else {
      return 'RSE-A.png';
    }
  }
}

/**
 * CSV Writer with Generics
 */

/**
 * CSV Writer Project
 */

import { appendFileSync } from 'fs';

export class CSVWriter<T> {
  private csv: string;

  // marking constructor parameters as public or private handle creating properties with those names
  // and initializing them to undefined
  // they can be accessed by this.param the same was the csv property above could be
  constructor(private columns: (keyof T)[]){
    // add header
    this.csv = this.columns.join(',') + '\n';
  }

  addRows(values: T[]): void {
    let rows = values.map(value => this.formatRow(value));
    this.csv += rows.join('\n');
    console.log(this.csv);
  }

  private formatRow(value: T): string {
    return this.columns.map((col) => value[col]).join(',')
  }

  save(filename: string): void {
    appendFileSync(filename, this.csv);
    this.csv = '\n';

    console.log(`File saved to ${filename}`);
  }

  log(): void {
    console.log(`\n------ RECORDS ------\n`)
    console.log(this.csv);
  }
}


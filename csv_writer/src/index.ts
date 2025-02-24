/**
 * CSV Writer Project
 */

import { appendFileSync } from 'fs';

interface Payment {
  id: string;
  amount: number;
  to: string;
  notes: string;
}

type PaymentColumns = ('id' | 'amount' | 'to' | 'notes')[]

class CSVWriter {
  private csv: string;

  // marking constructor parameters as public or private handle creating properties with those names
  // and initializing them to undefined
  // they can be accessed by this.param the same was the csv property above could be
  constructor(private columns: PaymentColumns){
    // add header
    this.csv = this.columns.join(',') + '\n';
  }

  addRows(values: Payment[]): void {
    let rows = values.map(value => this.formatRow(value));
    this.csv += rows.join('\n');
    console.log(this.csv);
  }

  private formatRow(payment: Payment): string {
    return this.columns.map((col) => payment[col]).join(',')
  }

  save(filename: string): void {
    appendFileSync(filename, this.csv);
    this.csv = '\n';

    console.log(`File saved to ${filename}`);
  }
}

const writer = new CSVWriter(['id', 'amount', 'to', 'notes'])
const firstPayment: Payment = {id: '1', amount: 20, to: 'Mac', notes: 'burgers'}
writer.addRows([firstPayment]);
writer.save('./payments.csv');

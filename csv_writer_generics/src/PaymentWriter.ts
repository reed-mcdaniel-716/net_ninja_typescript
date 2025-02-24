/**
 * Payment CSV Writer Implementation
 */

import { CSVWriter } from "./index";

interface Payment {
  id: string;
  amount: number;
  to: string;
  notes: string;
}


const paymentWriter = new CSVWriter<Payment>(['id', 'amount', 'to', 'notes'])
const firstPayment: Payment = {id: '1', amount: 20, to: 'Mac', notes: 'burgers'}
paymentWriter.addRows([firstPayment]);
paymentWriter.save('./payment.csv')

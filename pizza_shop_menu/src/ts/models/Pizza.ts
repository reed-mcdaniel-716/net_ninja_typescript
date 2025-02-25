import { DataResource } from "../services/DataResource";

export interface PizzaProps {
  title: string;
  description: string;
  toppings: string[];
  price: number;
}

const PIZZAS_ENDPOINT = 'http://localhost:4000/pizzas';

export const Pizza = new DataResource<PizzaProps>(PIZZAS_ENDPOINT);

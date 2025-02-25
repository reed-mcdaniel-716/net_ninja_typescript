import { Pizza, PizzaProps } from "./models/Pizza";

const form = document.querySelector('form')!;

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  const newPizza: PizzaProps = {
    title: data.get('title') as string,
    description: data.get('description') as string,
    toppings: data.getAll('toppings') as string[],
    price: parseInt(data.get('price') as string),
  }

  const resp = await Pizza.save(newPizza);

  if(!resp.ok){
    console.error(`Failed to save pizza with status code ${resp.status}`)
  }

  if(resp.ok){
    // redirect to homepage
    window.location.href = '/';
  }
})

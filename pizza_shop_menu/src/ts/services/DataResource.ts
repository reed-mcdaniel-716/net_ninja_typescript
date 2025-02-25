export class DataResource<T> {
  constructor(private endpoint: string){}

  async loadAll(): Promise<T[]> {
    const resp = await fetch(this.endpoint);
    return resp.json();
  }

  async loadOne(id: number): Promise<T> {
    const resp = await fetch(`${this.endpoint}/${id}`);
    return resp.json();
  }

  async delete(id:number): Promise<Response> {
    const resp = await fetch(`${this.endpoint}/${id}`, {
      method: 'DELETE'
    });
    return resp.json();
  }

  async save(data: T): Promise<Response> {
    const resp = await fetch(this.endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    });
    return resp.json();
  }

}

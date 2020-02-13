export class Personne {
  id: number;
  name: string;
  firstname: string;
  path: string;
  age: number;
  cin: number;
  job: string;
  constructor(id = 0, name= '', firstname = '', path = '', age = 0 , cin = 1, job = '') {
    this.id = id;
    this.name = name;
    this.firstname = firstname;
    this.path = path;
    this.age = age;
    this.cin = cin;
    this.job = job;
  }
}

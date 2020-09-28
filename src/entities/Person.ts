class Person {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName?: string) {
    this.firstName = firstName;
    this.lastName = lastName ? lastName : '';
  }
}

const person = new Person("Sandoval", "Saúl")

console.log(person['lastName']);

export default person;
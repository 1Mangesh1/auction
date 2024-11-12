export class Team {
  public readonly id: number;
  public name: string;
  public city: string;
  public static counter: number = 0;

  constructor(name: string, city: string) {
    Team.counter += 1;
    this.name = name;
    this.city = city;
    this.id = Team.counter;
  }
}

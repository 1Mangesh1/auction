import { Team } from "./Team/team";

export class FranchiseService {
  public franchise: Franchise[] = [];
  public registeredTeams: RegisteredTeam[] = [];

  createOne(name: string) {
    let newFranchise = new Franchise(name);
    this.franchise = [...this.franchise, newFranchise];
    return newFranchise;
  }

  getRegisteredFranchiseTeams() {
    return this.registeredTeams;
  }

  getAllFranchises() {
    return this.franchise;
  }

  deleteOne(franchiseId: number) {
    return (this.franchise = this.franchise.filter(
      (current) => current.id !== franchiseId
    ));
  }

  addOneTeam(franchiseId: number, name: string, city: string) {
    let franchise = this.franchise.find(
      (currentFranchise) => currentFranchise.id === franchiseId
    );
    let newTeam = new Team(name, city);
    if (franchise) {
      if (franchise.teams) {
        // problematic
        franchise.teams = [...franchise.teams, newTeam];
      }
      return newTeam;
    }
    throw new Error("Franchise not Found");
  }
  // franchise will register for team in auction
  registerOneTeamForAuction(teamRegistrationInfo: RegisteredTeam) {
    let currentRegistration = new RegisteredTeam(teamRegistrationInfo);
    this.registeredTeams = [...this.registeredTeams, currentRegistration];
    return this.registeredTeams;
  }

  getFranchiseTeam(franchise: Franchise) {}
}

export class Franchise {
  public readonly id: number;
  public name: string;
  public teams?: Team[];
  public static counter: number = 0;

  constructor(name: string) {
    Franchise.counter = +1;
    this.name = name;
    this.id = Franchise.counter;
    this.teams = [];
  }
}

export class RegisteredTeam {
  public readonly id: number;
  public static counter: number = 0;
  public readonly auctionId: number;
  public readonly editionId: number;
  public readonly teamId: number;
  public purse: number;

  constructor(team: RegisteredTeam) {
    RegisteredTeam.counter += 1;
    this.id = RegisteredTeam.counter;
    this.auctionId = team.auctionId;
    this.editionId = team.editionId;
    this.purse = team.purse;
    this.teamId = team.teamId;
  }
}

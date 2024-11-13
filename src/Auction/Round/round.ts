import { Player } from "../../Players/playerService";

export class RoundService {}

export class Round {
  private static counter: number = 0;
  private readonly id: number;
  public poolPlayers: Player[];
  public status: "ongoing" | "pending" | "concluded";

  constructor(roundPlayers: Player[]) {
    Round.counter += 1;
    this.id = Round.counter;
    this.poolPlayers = roundPlayers;
    this.status = "pending";
  }
}

import { Player } from "../Players/playerService";
import { Round } from "./Round/round";
import { CreateAuctionDTO } from "./Types";

export class AuctionService {
  public auctions: Auction[] = [];

  createOne(auction: CreateAuctionDTO) {
    let newAuction = new Auction(auction);
    this.auctions = [...this.auctions, newAuction];
    return newAuction;
  }
  start(auctionId: number) {
    let currentAuction = this.auctions.find(
      (auction) => auction.id === auctionId
    );
    if (currentAuction) return currentAuction.startRound();
    else throw new Error("auction not found");
  }
}

export class Auction {
  public readonly id: number;
  private static counter: number = 0;
  public readonly editionId: number;
  private rounds: Round[];
  private readonly coolDownPeriod: number;
  public registeredTeams: RegisteredTeams[];
  public approvedPlayers: Player[];

  constructor(auctionDTO: CreateAuctionDTO) {
    Auction.counter += 1;
    this.id = Auction.counter;
    this.rounds = [];
    this.editionId = auctionDTO.editionId;
    let newRound: Round;
    for (
      let currentRound = 0;
      currentRound < auctionDTO.roundCount;
      currentRound++
    ) {
      newRound = new Round(auctionDTO.registeredPlayers);
      this.rounds = [...this.rounds, newRound];
    }
    this.registeredTeams = auctionDTO.registeredTeams;
    this.approvedPlayers = auctionDTO.registeredPlayers;
    this.coolDownPeriod = auctionDTO.coolDownPeriod;
  }

  startRound() {}
}

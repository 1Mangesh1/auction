import { Player } from "../Players/playerService";

export type CreateAuctionDTO = {
  registeredPlayers: Player[];
  editionId: number;
  registeredTeams: Team[];
  roundCount: number;
  coolDownPeriod: number;
};

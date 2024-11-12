import { League, LeagueService } from "../League/leagueService";
import { CreateLeagueDTO } from "../League/Types";
import { EditionService } from "./editionService";
import { CreateEditionDTO } from "./Types";

describe("edition", () => {
  let editionService: EditionService;
  let leagueService: LeagueService;
  let iplDTO: CreateLeagueDTO;
  beforeEach(() => {
    editionService = new EditionService();
    leagueService = new LeagueService();
    iplDTO = {
      name: "IPL",
    };
  });

  it("Each edition should have league reference", () => {
    //when
    let league = leagueService.addOne(iplDTO);
    let editionDTO: CreateEditionDTO = {
      name: "TATA",
      leagueId: league.id,
    };
    editionService.addOne(editionDTO);
    let searchedEdition = editionService.getAll().find((currentEdition) => {
      return currentEdition.leagueId === league.id;
    });
    let searchedEditionLeague = leagueService.getAll().find((league) => {
      return league.id === searchedEdition?.leagueId;
    });
    //then
    expect(searchedEditionLeague?.name).toBe("IPL");
  });
});

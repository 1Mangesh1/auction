import { FranchiseService } from "./Franchise";
import { Team } from "./Team/team";

describe("Franchises", () => {
  let franchiseService: FranchiseService;
  beforeEach(() => {
    franchiseService = new FranchiseService();
  });
  it("should have no franchise at the start", () => {
    let franchises = franchiseService.getAllFranchises();
    expect(franchises).toHaveLength(0);
  });
  it("should be able to create one franchise", () => {
    let franchises = franchiseService.getAllFranchises();

    let newFranchise = franchiseService.createOne("Mumbai Indians");
    franchises = franchiseService.getAllFranchises();
    let currentFranchise = franchises.find(
      (franchise) => franchise.id === newFranchise.id
    );
    expect(franchises).toHaveLength(1);
    expect(currentFranchise?.name).toBe("Mumbai Indians");
  });
  it("should be able to delete one franchise", () => {
    let franchises = franchiseService.getAllFranchises();

    let newFranchise = franchiseService.createOne("Mumbai Indians");
    franchises = franchiseService.getAllFranchises();

    expect(franchises).toHaveLength(1);

    franchiseService.deleteOne(newFranchise.id);
    franchises = franchiseService.getAllFranchises();

    let currentFranchise = franchises.find(
      (franchise) => franchise.id === newFranchise.id
    );

    expect(franchises).toHaveLength(0);
    expect(currentFranchise).toBeUndefined();
  });
  it("should be able to add one Team to franchise", () => {
    // given
    let franchises = franchiseService.getAllFranchises();

    // when
    let newFranchise = franchiseService.createOne("Mumbai Indians");
    franchises = franchiseService.getAllFranchises();
    let team = franchiseService.addOneTeam(
      newFranchise.id,
      "Mumbai Indians",
      "Mumbai"
    );
    expect(franchises).toHaveLength(1);
    let currentFranchise = franchises.find(
      (franchise) => franchise.id === newFranchise.id
    );

    let franchiseTeam = currentFranchise?.teams?.find(
      (teams) => teams?.id === team?.id
    );
    // then
    // expect(franchises).toHaveLength(0);
    expect(currentFranchise?.teams).toHaveLength(1);
    expect(franchiseTeam?.name).toBe("Mumbai Indians");
  });
});

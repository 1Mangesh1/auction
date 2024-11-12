import { FranchiseService } from "./Franchise";

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
});

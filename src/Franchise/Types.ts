import { Team } from "./Team/team";

export type CreateFranchiseDTO = {
  name: string;
  team?: Team;
  city: string;
};

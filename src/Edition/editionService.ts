import { League } from "../League/leagueService";
import { CreateEditionDTO } from "./Types";

export class EditionService{
public editions: Edition[] = []

getAll(leagueId?: number){
    if (leagueId) {
        return this.editions.filter((edition) => edition.leagueId === leagueId)
    }

    return this.editions
}

addOne(edition: CreateEditionDTO){
    let newEdition = new Edition(edition)
    
    this.editions = [...this.editions, newEdition]

    return newEdition
}
}

export class Edition{
    public readonly leagueId: number
    public readonly name: string
    public readonly id: number
    private static counter: number = 0

    constructor(edition: CreateEditionDTO){
        this.leagueId = edition.leagueId
        this.name = edition.name
        Edition.counter+=1
        this.id = Edition.counter
    }
 } 
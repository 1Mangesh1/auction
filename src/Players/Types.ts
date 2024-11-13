export type createPlayerDTO={
    name: string,
    nationality: string,
    dob:string
    calculated_skills: Skill
}


export type Skill = {
    batter: 1|2|3|4|5;
    bowler:1|2|3|4|5;
    allRounder:1|2|3|4|5;
    wicketKeeper:1|2|3|4|5;

}

export type Application = {
    id: number,
    playerId: number,
    base_price:number
}
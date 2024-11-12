export class LeagueService{
    public leagues: League[] = []

    getAll(){
        return this.leagues
    }

    addOne(name: string){
        let newLeague:League = new League(name)
        this.leagues = [...this.leagues, newLeague]
        return newLeague
    }

    deleteOne(id:number){
        this.leagues=this.leagues.filter((league)=>league.id!==id)
    }
}

export class League{
    public static counter: number = 0
    public id : number;
    public name: string;
    // public editions: Edition[]

    constructor(name:string){
        League.counter+=1
        this.name = name
        this.id = League.counter;

    }
}
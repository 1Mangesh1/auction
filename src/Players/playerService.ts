import { createPlayerDTO, Skill } from "./Types";

class PlayerService {
  public players: Player[] = [];
  getPlayers() {
    return this.players;
  }
  addPlayer(player:createPlayerDTO) {
    let newPlayer = new Player(player)
    this.players = [...this.players,newPlayer]
    return newPlayer.id
  }
  removePlayer(id:number){
    this.players = this.players.filter((player)=>{
        return player.id !== id
    })
    return true
  }
}

class Player {
  public id: number;
  public name: string;
  public nationality: string;
  public dob: string;
  public calculated_skills: Skill;
  public static counter: number = 0;

  constructor(player: createPlayerDTO) {
    Player.counter = +1;
    this.id = Player.counter;
    this.name = player.name;
    this.calculated_skills = player.calculated_skills;
    this.nationality = player.nationality;
    this.dob = player.dob;
  }
}

export { PlayerService, Player };

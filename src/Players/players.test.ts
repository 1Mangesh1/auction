import { PlayerService, } from "./playerService"
import { createPlayerDTO } from "./Types"

describe("players",()=>{
    let playerService: PlayerService
    let thala:createPlayerDTO = {
        name:"thala",
        nationality:"India",
        dob: "01/01/1970",
        calculated_skills : {
            batter:5,
            bowler:5,
            wicketKeeper:5,
            allRounder:5
        }
    }
    let chiku:createPlayerDTO = {
        name:"chiku",
        nationality:"India",
        dob: "01/01/2000",
        calculated_skills : {
            batter:4,
            bowler:4,
            wicketKeeper:4,
            allRounder:4
        }
    }
    beforeEach(()=>{
        playerService = new PlayerService()
    })
    it("should start with an empty list of players",()=>{
        expect(playerService.getPlayers()).toHaveLength(0)
    })
    it("should add a player",()=>{
        playerService.addPlayer(thala)
        expect(playerService.getPlayers()).toHaveLength(1)
    })

    it("should add multiple players",()=>{
        playerService.addPlayer(thala)
        playerService.addPlayer(chiku)
        expect(playerService.getPlayers()).toHaveLength(2)
    })

    it("should remove a player",()=>{
        let thalaId=playerService.addPlayer(thala)
        playerService.removePlayer(thalaId)
        expect(playerService.getPlayers()).toHaveLength(0)
    })

    it("should able to apply for auction",()=>{
        
    })

})
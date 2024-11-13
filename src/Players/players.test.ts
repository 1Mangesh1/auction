import { ApplicationService } from "../Application/application"
import { CreateApplicationDTO } from "../Application/types"
import { CreateEditionDTO } from "../Edition/Types"
import { PlayerService } from "./playerService"
import { CreatePlayerDTO, EditPlayerDTO } from "./Types"

describe("Player Service",()=>{
    let playerService: PlayerService
    let applicationService: ApplicationService
    beforeEach(() => {
        playerService = new PlayerService()
    })

    it("should start with no players", () => {
        const players = playerService.getAll();
        expect(players).toHaveLength(0);
    })

    it("should be able to add one player", ()=>{
        let players = playerService.getAll();
        expect(players).toHaveLength(0);
        let thala: CreatePlayerDTO = {
            dob: 2002,
            name: "Mahi",
            nationality: "indian",
            skills : {
                batter: 0,
                bowler: 0,
                allRounder:0,
                wicketKeeper: 1
            }
        }
        let newPlayer = playerService.addOne(thala)
        players = playerService.getAll()
        expect(players).toHaveLength(1)
    })

    it("Should able delete player", ()=>{
        let thala: CreatePlayerDTO = {
            dob: 2002,
            name: "Mahi",
            nationality: "indian",
            skills : {
                batter: 0,
                bowler: 0,
                allRounder:0,
                wicketKeeper: 1
            }
        }
        let newPlayer = playerService.addOne(thala)
        let players = playerService.getAll()
        expect(players).toHaveLength(1)
        let isDeleted = playerService.deleteOne(newPlayer.id)
        players = playerService.getAll()
        expect(players).toHaveLength(0)
        expect(isDeleted).toBeTruthy()
    })

    it("should be able to edit player profile",()=>{
        let thala: CreatePlayerDTO = {
            dob: 2002,
            name: "Mahi",
            nationality: "indian",
            skills : {
                batter: 0,
                bowler: 0,
                allRounder:0,
                wicketKeeper: 1
            }
        }
        let newPlayer = playerService.addOne(thala)
        let editPlayer: EditPlayerDTO = {
            name: "msd"
        }
        playerService.editOne(newPlayer.id, editPlayer);
        let players = playerService.getAll();
        let player = players.find((player) => player.id === newPlayer.id)
        expect(player?.name).toBe("msd")

    })
    it("should be able to apply for auction application",()=>{
        // auction 
        // player 
        //Applications
        let auctionId=1     //findAuction()
        let thala: CreatePlayerDTO = {
            dob: 2002,
            name: "Mahi",
            nationality: "indian",
            skills : {
                batter: 0,
                bowler: 0,
                allRounder:0,
                wicketKeeper: 1
            }
        }
        let newPlayer = playerService.addOne(thala)
        let applicationDTO: CreateApplicationDTO
        // newPlayer.apply()
        //RegisteredPlayers 

        //PlayerPool
    })


})
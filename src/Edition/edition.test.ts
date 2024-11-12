import { League, LeagueService } from "../League/leagueService"


describe("edition",()=>{
    let editionService : EditionService
    let leagueService: LeagueService
    beforeEach(()=>{
        editionService = new EditionService()
    })

    it("")

    it("Each edition should have league reference",()=>{
        let league = leagueService.addOne("IPL")
        let edition = editionService.addOne("TATA",league)
        
        expect(edition.league.name).toBe("IPL")
    })
})
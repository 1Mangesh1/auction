import { Application, ApplicationService } from "./application"
import { CreateApplicationDTO } from "./types"

describe("Application Service", () => {
  let applicationService: ApplicationService
  
  beforeEach(() => {
    applicationService = new ApplicationService()
  })

  it("should start with no application", () => {
    let applications = applicationService.getAll()
    expect(applications).toHaveLength(0)
  })
  it("should add one application", () => {
    let applications = applicationService.getAll();
    expect(applications).toHaveLength(0);
    let application: CreateApplicationDTO = {
        playerId : 1,
        auctionId : 1,
      roundBasePrice: {1:200 ,2:40,3:0}
    } 

    let newApplication = applicationService.addOne(application)
    applications = applicationService.getAll()

    expect(applications).toHaveLength(1)
    let currentApplication = applications.find((application)=>application.id===newApplication.id)
    expect(currentApplication?.playerId).toBe(1)
  })
  
 it("should delete one application", () => {
    let applications = applicationService.getAll();
    expect(applications).toHaveLength(0);
    let application: CreateApplicationDTO = {
        playerId : 1,
        auctionId : 1,
      roundBasePrice: {1:200 ,2:40,3:0}
    } 
    let newApplication = applicationService.addOne(application)
    applications = applicationService.getAll()
    expect(applications).toHaveLength(1)
    applicationService.deleteOne(newApplication.id)
    applications = applicationService.getAll()
    expect(applications).toHaveLength(0)
  })

})
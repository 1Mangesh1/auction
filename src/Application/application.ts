import { ApplicationMeta, CreateApplicationDTO,Status } from "./types";

export class ApplicationService{
    private applications: Application[]

    constructor(){
        this.applications = []
    }

    getAll(){
        return this.applications;
    }

    addOne(application: CreateApplicationDTO){
        let newApplication = new Application(application);
        this.applications=[...this.applications,newApplication]
        return newApplication
    }
    deleteOne(id: number){
        this.applications = this.applications.filter((application)=>application.id!==id)
    }
    approve(id:number,meta:ApplicationMeta)
    {
        this.applications = this.applications.map((application)=>{
            if(application.id===id){
                application.status = "accepted"
                application.meta = meta
            }
            return application
        })

    }
    reject(id:number,meta:ApplicationMeta){
        this.applications = this.applications.map((application)=>{
            if(application.id===id){
                application.status = "rejected"
                application.meta = meta
            }
            return application
        })

    }
    getAllApproved(){
        return this.applications.filter((application)=>application.status==="accepted")
    }

}

export class Application{
    private static counter: number = 0;
    public readonly id: number
    public readonly playerId: number
    public readonly auctionId:number
    public status: Status
    public roundBasePrice: {[key: number]: number}
    public meta: ApplicationMeta = {}

    constructor(application: CreateApplicationDTO){
        Application.counter += 1
        this.id = Application.counter
        this.auctionId = application.auctionId
        this.playerId = application.playerId
        this.status = "pending"
        this.roundBasePrice = application.roundBasePrice
        
    }
}
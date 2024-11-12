- [ ] **System types**
playerApllication {

id: number

status: enum (accepted, rejected)

date: datetime

editionId: number

basePrice: 



AuctionRound{

id:number

playerPool: PlayerPool

bids: Bid[]



playerPool{





- [ ] **LeagueService**
- type
    - id: number
    - name: string


- methods
    - createOne(name)
    - getAll
    - getOne


- [ ] **EditionService**
- type
    - id: number
    - leagueId: number (foreign) 
    - name: string
    - planned start date: datetime
    - planned end date: datetime
    - player application open date: datetime
    - player application end date: datetime
    - applications: playerApllication


- methods
    - createOne(legueId,EditionName)
    - getAll
    - getOne
    - startApplications(application, date?) //can be automatic
    - stopApplications //can be automatic
****

- [ ] **Auction**
- types 
    - id: number
    - Auction purse amount: number
    - max retention allowed: number
    - rounds: AuctionRound
    - numberOfRounds: number
    - plannedStartDate: date
    - coolDownPeriod: time
    - editionId: number
    - RegisteredFranchise: RegisteredFranchise[]


RegisteredFranchise

- type
    - id: number
    - auctionId: number
    - teamId: number
    - purse: number


 RegisteredPlayers sub-class of Players:



- methods
    - create
    - startAuction // can be automatic
    - displayPlayer
    - 

- [ ] FranchiseService
type

id: number

name: string

Teams: Team[]

Method

- createOne (name, purse, city)
- RegisterForAuction ()
- addTeams (TeamDTO)



- [ ] Team 
    - [ ] Type
        - purse: number
        - id: number
        - city: string
        - Players: Players
        - FranchiseId: number
    - [ ] Methods
        - createOne (name, city)
        - addPlayer (player: Player | Player[])
        - 

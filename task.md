# flow

1. Setup leagues

   - write tests
     1. start with no leagues - done
     2. add one league - done
     3. get all leagues - done
     4. delete one league -

2. Setup Edition

   - write tests
     1. start with no Edition
     2. add one Edition
     3. get all Edition

3. setup franchise

   - write tests
     1. start with no franchise
     2. add one franchise
     3. get all franchise
     4. delete one franchise

4. setup auction
   - write tests
     1. start with no auction
     2. create Auction
     3. get auction
     4. start with no Registered franchises
     5. Get Registered franchises

# Components:

- Auction -

  1.  AuctionId
  2.  EditionId
  3.  Rounds: Round
  4.  Number Of rounds
  5.  coolDown_Period
  6.  RegisteredTeams[]
  7.  ApprovedPlayers[]

- Methods:
  1. createAuction()
  2. start(AuctionDTO = registeredPlayers, editionId,RegisteredTeams, no. of. rounds, coolDownPeriod)
  3. startRound() = return Roundplayers/ PlayerPool
  4. getRounds(auctionID) = return auctionRounds[]

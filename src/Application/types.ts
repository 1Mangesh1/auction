

export type Status = "accepted" | "rejected"| "pending"
export type RoundBasePrice = {[key: number]: number}
export type CreateApplicationDTO = {
    playerId: number,
    auctionId:number,
    roundBasePrice: RoundBasePrice

}

export type ApplicationMeta= {
    authorityId?: number,
    authorityComment?: string
    authorizedOn?: string
}
export type EditApplicationDTO = {
    roundBasePrice : RoundBasePrice
}
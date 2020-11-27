export interface SessionToken {
    tokenId: string,
    username: string,
    valid: boolean,
    expirationTime: Date,
    accessRight: AccessRight[]
}

export enum AccessRight {
    CREATE,
    READ,
    UPDATE,
    DELETE
}
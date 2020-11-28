export interface User {
    id: string,
    name: string, 
    age:  number,
    email: string,
    workingPosition: WorkingPostion
}

export enum WorkingPostion {
    JUNIOR,
    PROGRAMMER,
    ENGINNER,
    EXPERT,
    MANAGER
}
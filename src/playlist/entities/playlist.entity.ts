import { Song } from "@prisma/client"

export class Playlist {
    Id:number
    Nev:String
    Songs:Song[]
}

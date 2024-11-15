import { Playlist } from "@prisma/client";

export class Song {
    ID: number;
    Cim: string;
    Szerzo: string;
    Hossz: string;
    Ar: number;
    playlists: Playlist[]
}

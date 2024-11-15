import { PartialType } from '@nestjs/mapped-types';
import { CreateSongDto } from './create-song.dto';
import { Playlist } from '@prisma/client';

export class UpdateSongDto extends PartialType(CreateSongDto) {
    PLaylists:Playlist[]
}

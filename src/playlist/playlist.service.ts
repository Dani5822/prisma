import { Injectable } from '@nestjs/common';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PlaylistService {
  constructor(private db:PrismaService=db) {}

  create(createPlaylistDto: CreatePlaylistDto) {
    return this.db.playlist.create({ data: createPlaylistDto });
  }

  findAll() {
    return this.db.playlist.findMany({ include: { Songs: true } });
  }

  findOne(id: number) {
    return this.db.playlist.findUnique({ where: { Id: id }, include: { Songs: true } });
  }

  remove(id: number) {
    return this.db.playlist.delete({ where: { Id: id } });
  }

  addSongToPlaylist(listid: number, songid: number) {
    return this.db.playlist.update({
      where: { Id: listid },
      data: { Songs: { connect: { Id: songid } } },
    });
  }

  deletesongfromplaylist(listid: number, songid: number) {
    return this.db.playlist.update({
      where: { Id: listid },
      data: { Songs: { disconnect: { Id: songid } } },
    });
  }
}

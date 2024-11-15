import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { CreatePlaylistDto } from './dto/create-playlist.dto';


@Controller('playlist')
export class PlaylistController {
  constructor(private readonly playlistService: PlaylistService) {}

  @Post()
  async create(@Body() createPlaylistDto: CreatePlaylistDto) {
    return await this.playlistService.create(createPlaylistDto);
  
  }

  @Get()
  async findAll() {
    return await this.playlistService.findAll();
  }

  @Get(':id(\\d+)')
  async findOne(@Param('id') id: string) {
    return await this.playlistService.findOne(+id);
    
  }

  @Post('/:listid(\\d+)/:songid(\\d+)')
  async addSongToPlaylist(@Param('listid') listid: string, @Param('songid') songid: string) {
    return await this.playlistService.addSongToPlaylist(+listid,+songid);
  }

  @Delete("/:listid(\\d+)/:songid(\\d+)")
  async deletesongfromplaylist(@Param('listid') listid: string, @Param('songid') songid: string) {
    return await this.playlistService.deletesongfromplaylist(+listid,+songid);
  }

  @Delete(':listid(\\d+)')
  async remove(@Param('listid') id: string) {
    return await this.playlistService.remove(+id);
  }
}

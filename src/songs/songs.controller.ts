import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Post()
  create(@Body() createSongDto: CreateSongDto) {
    return this.songsService.create(createSongDto);
  }

  @Get()
  findAll() {
    return this.songsService.findAll();
  }
  
  @Get('/free')
  findfree(){
    return this.songsService.findfree();
  }

  @Get('/top/:count(\\d+)?')
  gettop(@Param('count') count: string){
    if(count){
      return this.songsService.gettop(+count);
    }else{
      return this.songsService.gettop(10);
    }
  }
  
  @Get('/popularArtist')
  groupbyszerzo(){
    return this.songsService.groupbyszerzo();
  }

  @Get(':id(\\d+)')
  findOne(@Param('id') id: string) {
    return this.songsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSongDto: UpdateSongDto) {
    return this.songsService.update(+id, updateSongDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.songsService.remove(+id);
  }
}

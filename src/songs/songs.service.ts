import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { PrismaService } from 'src/prisma.service';


@Injectable()
export class SongsService {
  db:PrismaService;
  constructor(db:PrismaService){
    this.db=db;
  }

  async create(createSongDto: CreateSongDto) {
    return await this.db.song.create({data:createSongDto});
  }

  async findAll() {
    return await this.db.song.findMany();
  }

  async findOne(id: number) {
    return await this.db.song.findUnique({where:{Id:id}});
  }

  async update(id: number, updateSongDto: UpdateSongDto) {
    try {
      return await this.db.song.update({where:{Id:id},data:updateSongDto});
    } catch (error) {
      return error;      
    }
  }

  async remove(id: number) {
    try {
      return await this.db.song.delete({where:{Id:id}});
    } catch (error) {
      return error;      
    }
  }

  async findfree(){
    return await this.db.song.findMany({where:{Ar:0}});
  }

  async gettop(count:number){
    return await this.db.song.findMany({orderBy:{ertekeles:'desc'}, take:count});
  }

  async groupbyszerzo(){
    return ((await this.db.song.groupBy({by:['Szerzo'],_count:{Cim:true},orderBy: {_count: {Cim: 'desc'}}}))).map((x)=>({Szerzo:x.Szerzo,songsnumber:x._count.Cim}));
  }

}

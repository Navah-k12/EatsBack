import { Injectable } from '@nestjs/common';
import { CreateMysteryboxDto } from './dto/create-mysterybox.dto';
import { UpdateMysteryboxDto } from './dto/update-mysterybox.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MysteryboxService {
  constructor(private prisma:PrismaService){}
  create(createMysteryboxDto: CreateMysteryboxDto) {
    return 'This action adds a new mysterybox';
  }

  findAll() {
    return this.prisma.mysterybox.findMany;
  }

  findOne(id: number) {
    return `This action returns a #${id} mysterybox`;
  }

  update(id: number, updateMysteryboxDto: UpdateMysteryboxDto) {
    return `This action updates a #${id} mysterybox`;
  }

  remove(id: number) {
    return `This action removes a #${id} mysterybox`;
  }
}

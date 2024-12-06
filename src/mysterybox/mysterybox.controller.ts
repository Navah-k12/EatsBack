import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MysteryboxService } from './mysterybox.service';
import { CreateMysteryboxDto } from './dto/create-mysterybox.dto';
import { UpdateMysteryboxDto } from './dto/update-mysterybox.dto';

@Controller('mysterybox')
export class MysteryboxController {
  constructor(private readonly mysteryboxService: MysteryboxService) {}

  @Post()
  create(@Body() createMysteryboxDto: CreateMysteryboxDto) {
    return this.mysteryboxService.create(createMysteryboxDto);
  }

  @Get()
  findAll() {
    return this.mysteryboxService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mysteryboxService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMysteryboxDto: UpdateMysteryboxDto) {
    return this.mysteryboxService.update(+id, updateMysteryboxDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mysteryboxService.remove(+id);
  }
}

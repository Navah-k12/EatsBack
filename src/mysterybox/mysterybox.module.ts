import { Module } from '@nestjs/common';
import { MysteryboxService } from './mysterybox.service';
import { MysteryboxController } from './mysterybox.controller';
import { PrismaModule } from 'src/prisma/prisma.module';


@Module({
  imports:[PrismaModule],
  controllers: [MysteryboxController],
  providers: [MysteryboxService],
})
export class MysteryboxModule {}

import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { MysteryboxModule } from './mysterybox/mysterybox.module';
import { TaskModule } from './task/task.module';
import { PrismaService } from './prisma/prisma.service';



@Module({
  imports: [
    TaskModule,
    PrismaModule,
    UserModule,
    RestaurantsModule,
    MysteryboxModule,
    
  ],
  controllers: [PrismaService],
  providers: [PrismaService],                                                              
})

export class AppModule {}

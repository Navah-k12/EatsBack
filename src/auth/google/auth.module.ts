import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service'; 
import { AuthService } from '../auth.service'; 
import { AuthController } from './auth.controller';
import { JwtStrategy } from '../jwt-strategy';
import { GoogleStrategy } from './google.strategy'; // Importa GoogleStrategy
import { GoogleAuthGuard } from './google-auth.guard'; // Importa GoogleAuthGuard

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'your_secret_key', // Cambia esta clave a algo más seguro
      signOptions: { expiresIn: '1h' }, // Token válido por 1 hora
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaService, JwtStrategy, GoogleStrategy, GoogleAuthGuard],
})
export class AuthModule {}

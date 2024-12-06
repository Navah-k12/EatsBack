import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PrismaService } from '../prisma/prisma.service';
import { JwtStrategy } from './jwt-strategy'; 
import { JwtAuthGuard } from './jwt-auth.aguard';  // Importa JwtAuthGuard

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'your_secret_key', // Cambia esta clave a algo más seguro
      signOptions: { expiresIn: '1h' }, // Token válido por 1 hora
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaService, JwtStrategy, JwtAuthGuard], // Añadir JwtAuthGuard aquí
})
export class AuthModule {}

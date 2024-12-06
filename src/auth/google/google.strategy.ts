import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { PrismaService } from 'src/prisma/prisma.service'; // Asegúrate de la ruta correcta
import { AuthService } from '../auth.service'; 

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    private prisma: PrismaService,
    private authService: AuthService,
  ) {
    super({
      clientID: 'YOUR_GOOGLE_CLIENT_ID', // Reemplaza con tu Client ID de Google
      clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET', // Reemplaza con tu Client Secret de Google
      callbackURL: 'http://localhost:3000/auth/google/callback', // La URL de callback
      scope: ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ) {
    // Verifica si el usuario existe en la base de datos
    const user = await this.prisma.user.findUnique({
      where: { email: profile.emails[0].value },
    });

    if (!user) {
      // Si el usuario no existe, puedes crear uno nuevo o lanzar un error
      const newUser = await this.prisma.user.create({
        data: {
          username: profile.displayName,
          email: profile.emails[0].value,
          password: '', // En este caso no es necesario, pero puedes generar uno
          phone: '', // Si es necesario, agrega el teléfono
        },
      });
      return done(null, newUser);
    }

    // Si el usuario existe, retorna el usuario
    return done(null, user);
  }
}

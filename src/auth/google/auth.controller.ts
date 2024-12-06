import { Controller, Get, UseGuards, Req, Res } from '@nestjs/common';
import { AuthService } from '../auth.service'; 
import { JwtAuthGuard } from '../jwt-auth.aguard';
import { GoogleAuthGuard } from './google-auth.guard'; // Crea un guard de Google

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Ruta para redirigir al usuario a Google para iniciar sesión
  @Get('google')
  @UseGuards(GoogleAuthGuard)
  async googleAuth(@Req() req) {}

  // Ruta para manejar el callback de Google
  @Get('google/callback')
  @UseGuards(GoogleAuthGuard)
  googleAuthRedirect(@Req() req, @Res() res) {
    const user = req.user;
    // Aquí, puedes generar el JWT u otra lógica de autenticación que necesites
    res.redirect(`http://localhost:3000/dashboard?user=${user.email}`);
  }
}

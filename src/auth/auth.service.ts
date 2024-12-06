import { Injectable, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterAuthDto) {
    const { username, email, password, lastName, phone } = registerDto;

    const existingUser = await this.prisma.user.findUnique({
      where: { username },  // Usamos 'username' en lugar de 'name'
    });
    if (existingUser) {
      throw new BadRequestException('El usuario ya existe');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.prisma.user.create({
      data: {
        username,   // Usamos 'username' en lugar de 'name'
        email,
        password: hashedPassword,
        lastName,   // Si es opcional
        phone,      // Si es opcional
      },
    });

    return { message: 'Usuario registrado con éxito', user };
  }

  async login(loginDto: LoginAuthDto) {
    const { username, password } = loginDto;

    const user = await this.prisma.user.findUnique({
      where: { username },  // Usamos 'username' en lugar de 'name'
    });
    if (!user) {
      throw new BadRequestException('Usuario o contraseña incorrectos');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new BadRequestException('Usuario o contraseña incorrectos');
    }

    // Generar el token JWT
    const payload = { username: user.username, sub: user.id };
    const token = this.jwtService.sign(payload);

    return { message: 'Login exitoso', token };
  }
}

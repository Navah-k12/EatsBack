import { IsString, IsEmail, MinLength } from 'class-validator';

export class RegisterAuthDto {
  @IsString()
  username: string;  // Cambié 'name' por 'username'

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  lastName?: string;

  @IsString()
  phone?: string;
}

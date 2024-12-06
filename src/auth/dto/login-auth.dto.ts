import { IsString } from 'class-validator';

export class LoginAuthDto {
  @IsString()
  username: string;  // Cambié 'name' por 'username'

  @IsString()
  password: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class SignUpBodyDto {
  @ApiProperty({
    example: 'test@gmail.com',
  })
  email: string;

  @ApiProperty({
    example: '1234',
  })
  password: string;
}

export class SignInBodyDto {
  @ApiProperty({
    example: 'test@gmail.com',
  })
  email: string;

  @ApiProperty({
    example: '1234',
  })
  password: string;
}

export class GetSessionInfoDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;

  @ApiProperty()
  'iat': number;
  @ApiProperty()
  'exp': number;
}

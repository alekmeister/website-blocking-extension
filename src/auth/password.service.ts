import { Injectable } from '@nestjs/common';
import { randomBytes, pbkdf2Sync } from 'crypto';

@Injectable()
export class PasswordService {
  getSalt() {
    return randomBytes(16).toString('hex');
  }

  getHash(password: string, salt: string) {
    return pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  }
}

// randomBytes(16) - генерирует массив с числами - 16 элементов
// toString('hex') - переводит массив в 16-ричный формат hex

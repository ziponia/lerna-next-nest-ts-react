import { Injectable } from '@nestjs/common';
import { User } from 'src/user.interface';

@Injectable()
export class UserService {
  findAll(): User[] {
    const users: User[] = [
      { id: 1, name: '홍길동' },
      { id: 2, name: '기동이' },
      { id: 3, name: '제프' },
      { id: 4, name: '지포니아' },
      { id: 5, name: '갤럭시' },
    ];

    return users;
  }
}

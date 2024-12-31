import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/user.entity';
import { hashCompare } from 'src/utils';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEMail(email);
    if (user && hashCompare(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User) {
    const payload = {
      username: user.username,
      email: user.email,
      sub: user.id,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(data: User) {
    return this.usersService.create(data);
  }

  async loginOsu(data: {
    accessToken: string;
    refreshToken: string;
  }): Promise<any> {
    const user = await fetch('https://osu.ppy.sh/api/v2/me', {
      headers: {
        Authorization: `Bearer ${data.accessToken}`,
      },
    }).then((res) => res.json());
    return user;
  }
}

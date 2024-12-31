// src/auth/strategies/osu.strategy.ts
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-oauth2';
import { Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class OsuStrategy extends PassportStrategy(Strategy, 'osu') {
  constructor() {
    super({
      authorizationURL: 'https://osu.ppy.sh/oauth/authorize',
      tokenURL: 'https://osu.ppy.sh/oauth/token',
      clientID: process.env.OSU_CLIENT_ID,
      clientSecret: process.env.OSU_CLIENT_SECRET,
      callbackURL: 'http://localhost:8000/auth/osu/callback',
    });
  }

  async validate(accessToken: string, refreshToken: string): Promise<any> {
    return { accessToken, refreshToken };
  }
}

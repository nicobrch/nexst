import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { Public } from './auth/constants';
import { AppService } from './app.service';
import { OsuAuthGuard } from './auth/guards/osu-auth.guard';

@Controller()
export class AppController {
  constructor(
    private authService: AuthService,
    private appService: AppService,
  ) {}

  @Public()
  @Get('hello')
  async getHello() {
    return this.appService.getHello();
  }

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('auth/logout')
  async logout(@Request() req) {
    return req.logout();
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Public()
  @Post('auth/register')
  async register(@Request() req) {
    return this.authService.register(req.body);
  }

  @Public()
  @UseGuards(OsuAuthGuard)
  @Get('auth/osu')
  async loginOsu() {
    // Redirects to osu! for OAuth
  }

  @Public()
  @UseGuards(OsuAuthGuard)
  @Get('auth/osu/callback')
  async callbackOsu(@Request() req) {
    return this.authService.loginOsu(req.user);
  }
}

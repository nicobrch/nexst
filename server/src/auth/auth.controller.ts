import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { Public } from './constants';
import { OsuAuthGuard } from './guards/osu-auth.guard';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('logout')
  async logout(@Request() req) {
    return req.logout();
  }

  @Public()
  @Post('register')
  async register(@Request() req) {
    return this.authService.register(req.body);
  }

  @Public()
  @UseGuards(OsuAuthGuard)
  @Get('osu')
  async loginOsu() {
    // Redirects to osu! for OAuth
  }

  @Public()
  @UseGuards(OsuAuthGuard)
  @Get('osu/callback')
  async callbackOsu(@Request() req) {
    return this.authService.loginOsu(req.user);
  }
}

import { Body, Controller, Post } from '@nestjs/common';
// import { Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
    // this.authService.test();
  }

  @Post('signup')
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }

  // signup(
  //   @Body('email') email: string,
  //   @Body('password') password: string,
  //   ) {
  //   console.log({
  //     email,
  //     typeOfEmail: typeof email,
  //     password,
  //     typeOfPassword: typeof password,
  //   })
  // signup(@Req() req: Request) {
  //   console.log(req);
  //   return "signup";

  @Post('signin')
  signin() {
    return this.authService.signin();
    // return "signin";
  }
}

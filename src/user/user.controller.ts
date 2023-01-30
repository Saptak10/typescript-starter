import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';
import { JwtGaurd } from 'src/auth/gaurd';

@Controller('users')
export class UserController {
    constructor(private userService: UserService)
    @UseGuards(JwtGaurd)
    // @UseGuards(AuthGuard('jwt'))
    @Get('me')
    getMe(@Req() req: Request) {
        console.log({
            user: req.user,
        });
        return this.userService.getMe(req);
    }
}

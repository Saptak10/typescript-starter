import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    getMe(req: Request ) {
        // return 'users info page';
        return req.user;
    }
}

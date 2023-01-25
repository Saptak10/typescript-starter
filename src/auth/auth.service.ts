import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
    // test() {
    //     return "test";
    // }

    signin() {
        return { msg: "signin" };
    }

    signup() {
        return { msg: "signup" };
    }
}
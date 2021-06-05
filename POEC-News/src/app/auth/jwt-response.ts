export class JwtResponse {
    accessToken: string;
    type: string;
    loginName: string;
    email: string; // former userName
    accredit: number;
    roles: string[];
}
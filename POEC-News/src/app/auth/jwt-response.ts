export class JwtResponse {
    accessToken: string;
    type: string;
    id: string;
    loginName: string;
    email: string; // former userName
    accredit: string;
    roles: string[];
}
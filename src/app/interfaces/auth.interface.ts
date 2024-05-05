export interface AuthRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: Profile;
}

export interface Profile {
  id: Number;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

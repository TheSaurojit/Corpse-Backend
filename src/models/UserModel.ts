export interface UserModel {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  photoURL?: string;
  isVerified: boolean;
  createdAt: number;
  updatedAt: number;
}

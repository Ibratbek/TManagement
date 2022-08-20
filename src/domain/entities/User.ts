export type User = {
  id: string;
  fullName: string;
  email: string;
  password: string;
  verified: boolean;
  verificationCode: string;
  createdAt: Date;
  updatedAt: Date;
};

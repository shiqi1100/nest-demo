import { Document } from 'mongoose';

export interface User extends Document {
  readonly _id: string;
  readonly user_name: string;
  readonly password: string;
}
// user.dto.ts
export class CreateUserDTO {
  readonly _id: string;
  readonly user_name: string;
  readonly password: string;
}

export class EditUserDTO {
  readonly user_name: string;
  readonly password: string;
}

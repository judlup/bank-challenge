import { UserModel } from 'src/Domain/model/user/user.model';

export class LoginPresenter {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  status: string;
  created_at: Date;
  updated_at: Date;
  token?: string;
  constructor(user: UserModel) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.phone = user.phone;
    this.role = user.role;
    this.status = user.status;
    this.created_at = user.created_at;
    this.updated_at = user.updated_at;
    this.token = user.token;
  }
}

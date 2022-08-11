export interface UserModel {
    name:	string;
    email:	string;
    username:	string;
    password:	string;
    date:	string;
    gender:	string;
    community:	string;
}
export interface RegisterUserFormData extends UserModel{
    checkPassword: string;
}

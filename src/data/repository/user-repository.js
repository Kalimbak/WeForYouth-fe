import { SERVER_URL } from "../constants";

export class UserRepositoryImpl{
    REGISTER_USER_ENDPOINT= "/api/user/register";
    /**
     * 
     * @param {(password: string, confirmPassword: string): boolean} checkPassword 
     */
    constructor(checkPassword){
    /**
     * 
     * @type {(password: string, confirmPassword: string): boolean} 
     */
        this.checkPassword = checkPassword;
        
    }
    /**
     * 
     * @param {RegisterUserFormData} userFormData 
     * @param {boolean}
     */
    async registerUser(userFormData){
        const isPasswordChecked = 
            this.checkPassword(userFormData.checkPassword, userFormData.passwords);
        if(!isPasswordChecked) return false;
        /**
         * @type {UserModel}
         */
        const requestData = {
            name: userFormData.name,
            username: userFormData.username,
            email: userFormData.email,
            password: userFormData.password,
            community: userFormData.community,
            date: userFormData.date,
            gender: userFormData.gender
        }
        const endPoint = `${SERVER_URL}${this.REGISTER_USER_ENDPOINT}`;
        const request = fetch(
            endPoint,
            {
                method: "POST",
                body: JSON.stringify(requestData)
            }
        );
        const response = await request;
        if(response.status == 200) return true;
        return false;
    }
    login(){

    }
    getAllUsers(){

    }
}
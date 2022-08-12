import { SERVER_URL } from "../constants";

export class UserRepositoryImpl{
    REGISTER_USER_ENDPOINT= "/api/user/register";
    GET_COMMUNITIES_ENDPOINT= "/api/communities";
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
        const endPoint = `${SERVER_URL}/api/user/register`;
        const request = fetch(
            endPoint,
            {
                method: "POST",
                body: JSON.stringify(requestData)
            }
        );
        const response = await request;
        if(response.status === 200) return true;
        return false;
    }
    // /**
    //  * 
    //  * @param {loginModel} loginForm 
    //  * @param {Boolean}
    //  */
     login(){
// const loginData = {
//     email: loginForm.email,
//     password: loginForm.password
// }
// const login = fetch(
//     `${SERVER_URL}/api/user/login`,
//     {
//         method: "POST",
//         body: JSON.stringify(loginData)
//     }
// );
// const response = await login;
// if(responce.status == 200) return true;
// return false;
    }
    getAllUsers(){

    }
    async getAllCommuties(){
        const endPoint = `${SERVER_URL}/api/communities`;
        const response = await fetch(endPoint);
        const communities = await response.json()
        return communities.data.comunities;
    }
}
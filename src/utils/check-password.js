/**
 * 
 * @param {string} password 
 * @param {string} confirmPassword 
 * @returns {boolean}
 */
export default function checkPassword(password, confirmPassword){
    return password === confirmPassword;
}
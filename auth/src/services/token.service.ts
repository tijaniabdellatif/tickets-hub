import jwt,{Secret} from "jsonwebtoken"

interface IActivation {

    token:string,
    activation_code:string;
}

const secret:Secret = '@un12@@//tr'

export const createToken = (user:Object) :IActivation => {

    const activationCode:string = Math.floor(

        1000 + Math.random() * 9000
    ).toString();

    const token = jwt.sign({user,activationCode},secret as Secret,{

        expiresIn:'10m'
    })

    return {token:token,activation_code:activationCode}
}
export interface ISignUp {
    name : string,
    email : string,
    role : string
    password : string,
    rePassword : string,
    isSubscribe : boolean,
    isAcceptTerm : boolean
}

export type SignContextType = {
    signUp : ISignUp,
    submit : (value : ISignUp) => void
}
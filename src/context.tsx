import React, { useState } from 'react';
import { ISignUp, SignContextType } from './types.signUP';

type Props = {
    children: React.ReactNode
};

export const SignUpContext = React.createContext<SignContextType | string>(
    "sign up should be used inside SignUpProvider"
)

const SignUpProvider: React.FC<Props> = ({ children }) => {
    const [signUp, setSignUp] = useState<ISignUp>({
        name: '',
        email: '',
        role : '',
        password: '',
        rePassword: '',
        isSubscribe: false,
        isAcceptTerm: false
    });
    const [jwtToken, setJwtToken] = useState('');

    const submit = (value: ISignUp) => {
        setSignUp(signup => ({
            ...signup,
            ...value
        }));
        console.log('set value on submit'); 
        console.log(signUp);
    }

    const value: SignContextType = {
        signUp,
        submit,
        jwtToken,
        setJwtToken,
    }

    return <SignUpContext.Provider {...{ value, children }} />
}

export default SignUpProvider;

export const useSignUp = (): SignContextType => {
    const context = React.useContext(SignUpContext);
    if (typeof context === 'string') {
        throw new Error(context);
    }

    return context;
}
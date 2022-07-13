import { SignUpContext } from '../context';
import { SignContextType } from '../types.signUP';
import { useContext } from 'react';

function Result() {
    const { signUp } = useContext(SignUpContext) as SignContextType;

    return (
        <div>
            <p>This is result page</p>
            <p>name : {signUp.name}</p>
            <p>email : {signUp.email}</p>
            <p>role : {signUp.role}</p>
            <p>password : {signUp.password}</p>
            <p>rePassword : {signUp.rePassword}</p>
            <p>isSubscribe : {signUp.isSubscribe ? 'true' : 'false'}</p>
            <p>isAcceptTerm : {signUp.isAcceptTerm ? 'true' : 'false'}</p>
        </div>
    )
}

export default Result;
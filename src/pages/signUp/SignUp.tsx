import { useFormik } from "formik"
import * as Yup from "yup";
import './signUp.scss';
import Title from "../../components/title/title";
import InputGroup from "../../components/inputGroup/inputGroup";
import { SignUpContext } from '../../context';
import { SignContextType } from '../../types.signUP';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";


function SignUp() {
    const { submit } = useContext(SignUpContext) as SignContextType;
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            role: "",
            name: "",
            email: "",
            password: "",
            rePassword: "",
            isSubscribe: false,
            isAcceptTerm : false
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required("Required"),
            email: Yup.string()
                    .email("Invalid email address")
                    .required("Required"),
            password: Yup.string()
                    .min(8, "Must be 8 characters or more")
                    .required("Required"),
            rePassword: Yup.string()
                    .oneOf([Yup.ref('password'), null], 'Passwords must match')
                    .required('Reuired'),
            role: Yup.string().required('Required')
        }),
        onSubmit: (values) => {
                    console.log("submitted!");
                    console.log(values);
                    submit(values);
                    navigate(`/result`);
                },
        });

    return (
        <div className='container'>
            <form className="card" onSubmit={formik.handleSubmit}>
                <div className='formTitle'>
                    <Title normal="Sign" highligh="Up" color="yellow" />
                </div>
                <div>
                    <p className='grayColor'>Choose your role</p>
                    <div className='radioGroup'>
                        <div>
                            <input 
                                className='inputRadio' 
                                type="radio" 
                                value="Candidate" 
                                id='candidate' 
                                name='role'
                                onChange={formik.handleChange('role')}
                            />
                            <label htmlFor="candidate">Candidate</label>
                        </div>
                        <div>
                            <input 
                                className='inputRadio' 
                                type="radio" 
                                value="Employer" 
                                id='employer' 
                                name='role'
                                onChange={formik.handleChange('role')}
                            />
                            <label htmlFor="employer">Employer</label>
                        </div>
                        {formik.touched.role && formik.errors.role ? <div className='error'>{formik.errors.role}</div> : null}
                    </div>
                    <div className='spacing'>
                        <InputGroup 
                            label="Name" 
                            type="text"
                            placeholder="Type your name here"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            name='name'
                        />
                        {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
                    </div>
                    <div className='spacing'>
                        <InputGroup 
                            label="Email" 
                            type="text"
                            placeholder="Type your email here"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            name='email'
                        />
                        {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
                    </div>
                    <div className='spacing'>
                        <InputGroup 
                            label="Password" 
                            type="password"
                            placeholder="create password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            name='password'
                        />
                        {formik.touched.password && formik.errors.password ? <div className='error'>{formik.errors.password}</div> : null}
                    </div>
                    <div className='spacing'>
                        <InputGroup 
                            label="Re-enter password" 
                            type="password"
                            placeholder="Re-type password"
                            value={formik.values.rePassword}
                            onChange={formik.handleChange}
                            name='rePassword'
                        />
                        {formik.touched.rePassword && formik.errors.rePassword ? <div className='error'>{formik.errors.rePassword}</div> : null}
                    </div>
                    <div className='checkboxGroup'>
                        <div>
                            <input 
                                type="checkbox" 
                                name="isSubscribe" 
                                id="isSubscribe" 
                                onChange={formik.handleChange}
                            />
                            <label htmlFor="subscribe">Subscribe to new letter</label>
                        </div>
                        <div>
                            <input 
                                type="checkbox" 
                                name="isAcceptTerm" 
                                id="isAcceptTerm"
                                onChange={formik.handleChange}
                            />
                            <label htmlFor="acceptTerm">I accept Term of Use</label>
                        </div>
                    </div>
                    <button type="submit" className='btn'>Sign Up</button>
                    <div className='center'>
                        <p>Already have an account?</p>
                        <p className='highlightBlue'>Log in</p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignUp;
import "./signUp/signUp.scss";
import { useFormik } from "formik";
import { useCallback, useContext, useState } from "react";
import { GoogleReCaptcha, GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import * as Yup from "yup";
import InputGroup from "../components/inputGroup/inputGroup";
import { siteKey, domainBackend } from "../lib/constant";
import { useNavigate } from "react-router-dom";
import { SignUpContext } from "../context";
import { SignContextType } from "../types.signUP";
import Title from "../components/title/title";

function SignIn() {
	const [token, setToken] = useState("");
	const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);

	const { setJwtToken } = useContext(SignUpContext) as SignContextType;

	const navigate = useNavigate();

	const onVerify = useCallback((token: string) => {
		setToken(token);
	}, []);

	const formik = useFormik({
		initialValues: {
			username: "",
			password: "",
		},
		validationSchema: Yup.object().shape({
			username: Yup.string().required("Required"),
			password: Yup.string().required("Required"),
		}),
		onSubmit: async (values) => {
			try {
				console.log("token", token);
				setRefreshReCaptcha((r) => !r);
				const response = await fetch(`${domainBackend}/signin-captcha`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json; charset=UTF-8",
					},
					body: JSON.stringify({
						username: values.username,
						password: values.password,
						captcha: token,
					}),
				});

				if (!response.ok) {
					throw new Error(`Error! status: ${response.status}`);
				}
				const result = await response.json();
				setJwtToken(result["access_token"]);
				navigate(`/otp-verify`);
			} catch (err) {
				console.log(err);
			}
		},
	});

	return (
		<GoogleReCaptchaProvider reCaptchaKey={siteKey ?? ""}>
			<div className="container">
				<form className="card" onSubmit={formik.handleSubmit}>
					<div className="formTitle">
						<Title normal="Log" highligh="In" color="blue" />
					</div>
					<div>
						<div className="spacing">
							<InputGroup
								label="Username"
								type="text"
								placeholder="Type your name here"
								value={formik.values.username}
								onChange={formik.handleChange}
								name="username"
							/>
							{formik.touched.username && formik.errors.username ? (
								<div className="error">{formik.errors.username}</div>
							) : null}
						</div>
						<div className="spacing">
							<InputGroup
								label="Password"
								type="password"
								placeholder="create password"
								value={formik.values.password}
								onChange={formik.handleChange}
								name="password"
							/>
							{formik.touched.password && formik.errors.password ? (
								<div className="error">{formik.errors.password}</div>
							) : null}
						</div>
						<button type="submit" className="btn">
							Log In
						</button>
						<div className='center'>
                        <p>Don't have any account?</p>
                        <p className='highlightBlue'>Sign up</p>
                    </div>
					</div>
					<GoogleReCaptcha onVerify={onVerify} refreshReCaptcha={refreshReCaptcha} />
				</form>
			</div>
		</GoogleReCaptchaProvider>
	);
}

export default SignIn;

import { useContext, useEffect, useState } from "react";
import { SignUpContext } from "../context";
import { SignContextType } from "../types.signUP";
import * as Yup from "yup";
import { useFormik } from "formik";
import { domainBackend } from "../lib/constant";
import "./signUp/signUp.scss";
import InputGroup from "../components/inputGroup/inputGroup";

function OtpPage() {
	const [qrcode, setQrcode] = useState("");

	const { jwtToken } = useContext(SignUpContext) as SignContextType;

	useEffect(() => {
		fetch(`${domainBackend}/create-otp`, {
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				Authorization: "Bearer " + jwtToken,
			},
		})
			.then((response) => response.json())
			.then((data) => setQrcode(data.url))
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const formik = useFormik({
		initialValues: {
			otp: "",
		},
		validationSchema: Yup.object().shape({
			otp: Yup.string().required("Required"),
		}),
		onSubmit: (values) => {
			try {
				fetch(`${domainBackend}/verify-otp`, {
					method: "POST",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
						Authorization: "Bearer " + jwtToken,
					},
					body: JSON.stringify(values),
				})
					.then((response) => response.json())
					.then((data) => {
						if (data) {
							alert("Verify OTP success.");
						} else {
							alert("Invalid OTP");
						}
					});
			} catch (err) {
				console.log(err);
			}
		},
	});
	return (
		<div className="container">
			<form className="card" onSubmit={formik.handleSubmit}>
				<p className="textCenter">Scan this QR CODE to get OTP</p>
				<div className="centerImage">
					<img src={qrcode} alt="qrcode" />
				</div>
				<div className="spacing">
					<InputGroup
						label="OTP"
						type="text"
						placeholder="Enter otp here"
						value={formik.values.otp}
						onChange={formik.handleChange}
						name="otp"
					/>
					{formik.touched.otp && formik.errors.otp ? (
						<div className="error">{formik.errors.otp}</div>
					) : null}
				</div>
				<button className="btn" type="submit">
					Submit
				</button>
			</form>
		</div>
	);
}

export default OtpPage;

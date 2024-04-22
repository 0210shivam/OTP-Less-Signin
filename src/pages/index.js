import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
	const router = useRouter();
	const [otplessUser, setOtplessUser] = useState(null);

	useEffect(() => {
		const handleUserData = (user) => {
			setOtplessUser(user);
			router.push("/shivam");
		};

		const initOTPless = (callback) => {
			const otplessInit = Reflect.get(window, "otplessInit");

			const loadScript = () => {
				const isScriptLoaded = document.getElementById("otpless-sdk");
				if (isScriptLoaded) return;

				const script = document.createElement("script");
				script.id = "otpless-sdk";
				script.type = "text/javascript";
				script.src = "https://otpless.com/v2/auth.js";
				// *Adding app id
				script.setAttribute("data-appid", "6RCKF1RI83CRIC3XLMEM");
				document.body.appendChild(script);
			};

			otplessInit ? otplessInit() : loadScript();

			Reflect.set(window, "otpless", callback);
		};

		// *Initialize OTPless with the callback function
		initOTPless(handleUserData);
	}, []);

	return (
		<div
			style={{
				height: "100vh",
				backgroundColor: "white",
				padding: "30px",
			}}
		>
			<div id="otpless-login-page"></div>
		</div>
	);
}

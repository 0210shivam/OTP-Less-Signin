import React, { useState } from "react";
import { magicLink } from "otpless-next-js-auth-sdk";

export default SignInPage = () => {
	const [mobile, setMobile] = useState("");
	const [email, setEmail] = useState("");

	const handleSignIn = async (event) => {
		event.preventDefault();
		// Your redirect URI, clientId, and clientSecret should be securely stored, perhaps in environment variables
		const redirectURI = "http://localhost:3000/shivam";
		const clientId = "XHT59BXE2A3UO2DJ20N40QFBLH526D7T";
		const clientSecret = "lcte01t1vc472er23817sb8r1j7efrxp";
		const channel = "WHATSAPP"; // or 'sms', depending on your preference

		try {
			const magicLinkTokens = await magicLink(
				mobile,
				email,
				redirectURI,
				clientId,
				clientSecret,
				channel
			);
			console.log("MagicLink Tokens Details:", magicLinkTokens);
			// Redirect the user or handle the magic link tokens here
		} catch (error) {
			console.error("Error generating magic link:", error);
			// Handle errors here
		}
	};

	return (
		<form onSubmit={handleSignIn}>
			<input
				type="text"
				value={mobile}
				onChange={(e) => setMobile(e.target.value)}
				placeholder="Mobile Number"
				required
			/>
			<input
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				placeholder="Email Address"
				required
			/>
			<button type="submit">Sign In with OTPless</button>
		</form>
	);
};

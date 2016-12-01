AccountsTemplates.removeField('password');
AccountsTemplates.addFields([
	{
		_id: 'username',
		type: 'text',
		displayName: 'Username',
		required: true
	},
	{
	    _id: 'password',
	    type: 'password',
	    displayName: 'Password',
	    placeholder: {
	        signUp: "Password: at least 12 characters, 1 digit, 1 lowercase and 1 uppercase"
	    },
	    required: true,
	    minLength: 12,
	    re: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{12,}/,
	    errStr: 'At least 12 chars: 1 digit, 1 lowercase, and 1 uppercase',
	}
]);

AccountsTemplates.configure({
	showReCaptcha: true,
    // sendVerificationEmail: true,
    // showResendVerificationEmailLink: true,
    // enforceEmailVerification: true,
    // texts: {
    //     info: {
    //         emailSent: "info.emailSent",
    //         emailVerified: "info.emailVerified",
    //         signUpVerifyEmail: "Successful Registration! Please check your email and follow the instructions.",
    //         verificationEmailSent: "A new email has been sent to you. If the email doesn't show up in your inbox, be sure to check your spam folder.",
    //     }
    // }
});
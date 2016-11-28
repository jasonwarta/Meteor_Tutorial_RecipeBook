AccountsTemplates.removeField('password');
AccountsTemplates.addFields([
	{
		_id: 'username',
		type: 'text',
		displayName: 'Username',
		required: true
	}
	,
	{
	    _id: 'password',
	    type: 'password',
	    placeholder: {
	        signUp: "Password"
	    },
	    required: true,
	    minLength: 8,
	    re: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*-_=+]).{8,}/,
	    errStr: 'At least 1 digit, 1 lowercase, and 1 uppercase, and 1 of \"!@#$%^&*-_=+\"',
	}
]);

AccountsTemplates.configure({
	showReCaptcha: true
});
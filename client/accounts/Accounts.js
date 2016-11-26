AccountsTemplates.addFields([
{
	_id: 'username',
	type: 'text',
	displayName: 'Username',
	required: true
}
]);

AccountsTemplates.configure({
	showReCaptcha: true
});
import toast from 'react-hot-toast';

// validate login page username
export async function usernameValidate(values) {
	const error = usernameVerify({}, values);

	return error;
}

// validate username
function usernameVerify(error = {}, values) {
	if (!values.username) {
		error.username = toast.error('Username Required...!');
	} else if (values.username.includes(' ')) {
		error.username = toast.error('Invalid Username...!');
	}

	return error;
}

// validate login page username
export async function passwordValidate(values) {
	const error = passwordVerify({}, values);

	return error;
}

// validate password
function passwordVerify(error = {}, values) {
	const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

	if (!values.password) {
		error.password = toast.error('Password Required...!');
	} else if (values.password.includes(' ')) {
		error.password = toast.error('Wrong Password...!');
	} else if (values.password.length < 4) {
		error.password = toast.error(
			'Password must be more than 4 characters long...!'
		);
	} else if (!specialChars.test(values.password)) {
		error.password = toast.error('Password must have special character...!');
	}
	return error;
}

// validate reset password
export async function resetPasswordValidation(values) {
	const error = passwordVerify({}, values);

	if (values.password !== values.confirm_pwd) {
		error.exist = toast.error('Password not match...!');
	}
	return error;
}

// validate register form
export async function registerValidation(values) {
	const errors = usernameVerify({}, values);
	passwordVerify(errors, values);
	emailVerify(errors, values);

	return errors;
}

// validate email
function emailVerify(error = {}, value) {
	if (!value.email) {
		error.email = toast.error('Email Required...!');
	} else if (value.email.includes(' ')) {
		error.email = toast.error('Wrong Email...!');
	} else if (
		!/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i.test(
			value.email
		)
	) {
		error.email = toast.error('Invalid email adress...!');
	}
	return error;
}

// validate profile page
export async function profileValidation(values) {
	const errors = emailVerify({}, values);
	return errors;
}

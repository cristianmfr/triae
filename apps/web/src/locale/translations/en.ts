const en = {
	'common.loading': 'Loading...',
	'common.error': 'An error occurred',
	'common.save': 'Save',
	'common.cancel': 'Cancel',
	'common.delete': 'Delete',
	'common.edit': 'Edit',
	'common.confirm': 'Confirm',
	'common.back': 'Back',
	'common.next': 'Next',
	'common.search': 'Search',

	'auth.signIn': 'Sign In',
	'auth.signOut': 'Sign Out',
	'auth.signUp': 'Sign Up',
	'auth.email': 'Email',
	'auth.password': 'Password',
	'auth.forgotPassword': 'Forgot password?',
	'auth.noAccount': "Don't have an account?",
	'auth.hasAccount': 'Already have an account?',

	'validation.required': 'This field is required',
	'validation.email': 'Invalid email address',
	'validation.minLength': 'Must be at least {{min}} characters',
	'validation.maxLength': 'Must be at most {{max}} characters',

	'error.notFound': 'Page not found',
	'error.unauthorized': 'You are not authorized to access this page',
	'error.generic': 'Something went wrong. Please try again.',
} as const

export type TranslationKey = keyof typeof en

export default en

const en = {
  'auth.title': 'Log in to Triae',
  'auth.methods.email': 'Continue with email',
  'auth.methods.email.title': 'Type your email and password',
  'auth.methods.email.submit': 'Continue',
  'auth.methods.email.back': 'Back to login',
  'auth.forgot.label': 'Dont have a account?',
  'auth.forgot.link': 'Sign up',

  'setup.title': 'Create your first workspace',
  'setup.subtitle':
    'Workspaces are shared environments where teams can work on projects, cycles and issues.',

  'forms.setup.workspace.name': 'Workspace name',
  'forms.setup.workspace.url': '/workspace-url',
  'forms.setup.workspace.description': 'Workspace description',
  'forms.setup.workspace.submit': 'Create workspace',

  'workspace.menu.options.settings': 'Settings',
  'workspace.menu.options.logout': 'Log out',

  'workspace.sidebar.options.inbox': 'Inbox',
  'workspace.sidebar.options.leads': 'Leads',

  'toast.success.setup.message': 'Workspace created successfully!',

  'toast.error.auth.message':
    'Error when authenticating. Verify your credentials and try again.',
  'toast.error.setup.message': 'Error when creating workspace.',

  'fields.email.label': 'Email',
  'fields.email.placeholder': 'example@email.com',
  'fields.password.label': 'Password',
  'fields.password.placeholder': '******',
} as const

export type TranslationKey = keyof typeof en

export default en

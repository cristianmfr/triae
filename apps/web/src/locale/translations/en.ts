const en = {
  'auth.title': 'Boas vindas ao Triae',
  'auth.message': 'Para acessar sua conta selecione o método de login',
  'auth.methods.email': 'Entrar com email e senha',
  'auth.methods.google': 'Entrar com o Google',
  'auth.methods.email.title': 'Digite seu email e senha',
  'auth.methods.email.submit': 'Continuar',
  'auth.methods.email.back': 'Voltar para o início',
  'auth.signup.label': 'Ainda não tem uma conta?',
  'auth.signup.button': 'Enviar email',

  'signup.title': 'Crie sua conta gratuitamente',
  'signup.message':
    'Para criar sua conta informe seu email abaixo para enviarmos um link de confirmação',

  'setup.title': 'Crie seu primeiro espaço de trabalho',
  'setup.subtitle':
    'Os espaços de trabalho são ambientes compartilhados onde as equipes podem trabalhar em projetos, ciclos e problemas.',

  'forms.setup.workspace.name': 'Nome do espaço',
  'forms.setup.workspace.description': 'Descrição (opcional)',
  'forms.setup.workspace.submit': 'Criar espaço de trabalho',

  'workspace.menu.options.settings': 'Configurações',
  'workspace.menu.options.logout': 'Sair',

  'workspace.sidebar.options.inbox': 'Inbox',
  'workspace.sidebar.options.leads': 'Leads',

  'toast.success.setup.message': 'Espaço de trabalho criado com sucesso!',

  'toast.error.auth.message':
    'Ocorreu um erro ao tentar realizar seu login. Verifique suas credenciais e tente novamente.',
  'toast.error.setup.message':
    'Ocorreu um erro ao criar seu espaço de trabalho. Tente novamente mais tarde.',

  'fields.email.label': 'Email',
  'fields.email.placeholder': 'seu@email.com',
  'fields.password.label': 'Senha',
  'fields.password.placeholder': '******',
} as const

export type TranslationKey = keyof typeof en

export default en

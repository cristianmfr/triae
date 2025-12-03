import type { TranslationKey } from './en'

const ptBR: Record<TranslationKey, string> = {
	'common.loading': 'Carregando...',
	'common.error': 'Ocorreu um erro',
	'common.save': 'Salvar',
	'common.cancel': 'Cancelar',
	'common.delete': 'Excluir',
	'common.edit': 'Editar',
	'common.confirm': 'Confirmar',
	'common.back': 'Voltar',
	'common.next': 'Próximo',
	'common.search': 'Buscar',

	'auth.signIn': 'Entrar',
	'auth.signOut': 'Sair',
	'auth.signUp': 'Cadastrar',
	'auth.email': 'E-mail',
	'auth.password': 'Senha',
	'auth.forgotPassword': 'Esqueceu a senha?',
	'auth.noAccount': 'Não tem uma conta?',
	'auth.hasAccount': 'Já tem uma conta?',

	'validation.required': 'Este campo é obrigatório',
	'validation.email': 'Endereço de e-mail inválido',
	'validation.minLength': 'Deve ter pelo menos {{min}} caracteres',
	'validation.maxLength': 'Deve ter no máximo {{max}} caracteres',

	'error.notFound': 'Página não encontrada',
	'error.unauthorized': 'Você não tem autorização para acessar esta página',
	'error.generic': 'Algo deu errado. Por favor, tente novamente.',
}

export default ptBR

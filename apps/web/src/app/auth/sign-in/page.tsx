import { useI18n } from '@/hooks/use-i18n'

export default function SignIn() {
	const { t } = useI18n()

	return (
		<div>
			<span>{t('auth.signIn')}</span>
		</div>
	)
}

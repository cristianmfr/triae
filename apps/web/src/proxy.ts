import { type NextRequest, NextResponse } from 'next/server'
import { createI18nMiddleware } from 'next-international/middleware'

const I18nMiddleware = createI18nMiddleware({
  locales: ['en'],
  defaultLocale: 'en',
  urlMappingStrategy: 'rewrite',
})

const publicRoutes = [{ path: '/login', whenAuthenticated: 'redirect' }]

const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = '/login'
const REDIRECT_WHEN_AUTHENTICATED_ROUTE = '/'
const REDIRECT_WHEN_NOT_HAS_WORKSPACES = '/setup'

function normalizePath(path: string): string {
  const localePattern = /^\/(en)(\/|$)/
  return path.replace(localePattern, '/')
}

export default async function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname
  const normalizedPath = normalizePath(path)

  const publicRoute = publicRoutes.find(
    (route) =>
      normalizedPath === route.path ||
      normalizedPath.startsWith(`${route.path}/`),
  )

  const authToken = request.cookies.get('triae_session_token')
  const hasWorkspacesString = request.cookies.get(
    '_triae.access.has-workspaces',
  )

  const hasWorkspaces =
    // biome-ignore lint/complexity/noUselessTernary: needed
    !!hasWorkspacesString && hasWorkspacesString.value === 'true' ? true : false

  const isSetupRoute =
    normalizedPath === REDIRECT_WHEN_NOT_HAS_WORKSPACES ||
    normalizedPath.startsWith(`${REDIRECT_WHEN_NOT_HAS_WORKSPACES}/`)

  if (!authToken && !publicRoute) {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE
    return NextResponse.redirect(redirectUrl)
  }

  if (
    authToken &&
    publicRoute &&
    publicRoute.whenAuthenticated === 'redirect'
  ) {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = REDIRECT_WHEN_AUTHENTICATED_ROUTE
    return NextResponse.redirect(redirectUrl)
  }

  if (authToken && !hasWorkspaces) {
    if (!isSetupRoute) {
      const redirectUrl = request.nextUrl.clone()
      redirectUrl.pathname = REDIRECT_WHEN_NOT_HAS_WORKSPACES
      return NextResponse.redirect(redirectUrl)
    }
    return I18nMiddleware(request)
  }

  if (authToken && hasWorkspaces && isSetupRoute) {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = REDIRECT_WHEN_AUTHENTICATED_ROUTE
    return NextResponse.redirect(redirectUrl)
  }

  return I18nMiddleware(request)
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'],
}

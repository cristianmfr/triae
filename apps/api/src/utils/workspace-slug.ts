export function generateWorkspaceSlug(username: string, slug: string) {
  const resolvedUsername = username.toLowerCase().trim()
  const resolvedSlug = slug.toLocaleLowerCase().trim()

  return `${resolvedUsername}.${resolvedSlug}`
}

export function splitWorkspaceSlug(data: string) {
  const splitSlug = data.split('.')

  const username = splitSlug[0]
  const slug = splitSlug[1]

  return { username, slug }
}

import { defineMiddleware } from 'astro/middleware'

export const onRequest = defineMiddleware(async ({ request, cookies, redirect }, next) => {
  // Get current URL
  const url = new URL(request.url)
  
  // Skip auth check for login page and api routes
  if (url.pathname === '/login' || url.pathname.startsWith('/api/')) {
    return next()
  }

  const sessionPassword = cookies.get('session-pw')?.value
  
  // Redirect to login if not authenticated
  if (sessionPassword !== import.meta.env.PROJECT_PASSWORD) {
    return redirect('/login')
  }

  return next()
}) 
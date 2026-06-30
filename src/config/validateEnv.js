export function validateEnvironment() {
  const required = [
    'VITE_GEMINI_API_KEY',
    'VITE_FIREBASE_API_KEY',
    'VITE_FIREBASE_PROJECT_ID',
    'VITE_FIREBASE_APP_ID',
  ]

  const missing = required.filter((key) => !import.meta.env[key])

  if (missing.length > 0) {
    console.error(
      'Missing environment variables:',
      missing.join(', '),
      '\n\nCreate .env.local file with these variables.',
    )

    if (import.meta.env.VITE_APP_ENV === 'production') {
      throw new Error('Missing critical environment variables')
    }
  } else {
    console.log('✅ All environment variables are configured')
  }
}
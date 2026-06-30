// Gemini configuration is centralized here so request code stays consistent and secrets stay in env files.
export const GEMINI_CONFIG = {
	API_KEY: import.meta.env.VITE_GEMINI_API_KEY,
	API_URL:
		'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
	MODEL: 'gemini-2.0-flash',

	TEMPERATURE: 0.7,
	MAX_TOKENS: 2000,
	TOP_P: 0.9,

	TIMEOUT: 30000,
	RETRY_ATTEMPTS: 3,
	RETRY_DELAY: 1000,

	validate() {
		if (!this.API_KEY) {
			throw new Error('VITE_GEMINI_API_KEY is not set in .env.local')
		}
	},
}

GEMINI_CONFIG.validate()

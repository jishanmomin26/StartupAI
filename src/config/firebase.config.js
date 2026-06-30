// Firebase configuration is centralized here so later services can import one source of truth.
export const FIREBASE_CONFIG = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	appId: import.meta.env.VITE_FIREBASE_APP_ID,

	firestore: {
		persistence: true,
		timestampsInSnapshots: true,
	},

	collections: {
		ideas: 'ideas',
		users: 'users',
		analytics: 'analytics',
	},

	validate() {
		const required = ['apiKey', 'projectId', 'appId']

		for (const field of required) {
			if (!this[field]) {
				throw new Error(`Firebase ${field} is not set in .env.local`)
			}
		}
	},
}

FIREBASE_CONFIG.validate()

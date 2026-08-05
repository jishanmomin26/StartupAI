import { ref, set, get, remove } from 'firebase/database'
import { db } from '../config/firebase.js'

const IDEAS_ROOT = 'ideas'

const isNonEmptyString = (value) => typeof value === 'string' && value.trim().length > 0

const validateIdea = (idea) => {
	if (!idea || typeof idea !== 'object') {
		throw new Error('Invalid idea object')
	}

	if (!isNonEmptyString(idea.id) || !isNonEmptyString(idea.name) || !isNonEmptyString(idea.description)) {
		throw new Error('Idea missing required fields')
	}
}

export const generateSessionId = () => {
	const timestamp = Date.now().toString(36)
	const randomStr = Math.random().toString(36).slice(2, 11)

	return `session_${timestamp}_${randomStr}`
}

export const saveIdea = async (sessionId, idea) => {
	try {
		if (!isNonEmptyString(sessionId)) {
			throw new Error('Invalid session ID')
		}

		validateIdea(idea)

		const ideaRef = ref(db, `${IDEAS_ROOT}/${sessionId}/${idea.id}`)
		const now = Date.now()
		const ideaToSave = {
			...idea,
			generatedAt: idea.generatedAt || now,
			savedAt: now,
		}

		await set(ideaRef, ideaToSave)

		return { id: idea.id }
	} catch (error) {
		console.error('Error saving idea:', error)
		throw new Error(`Failed to save idea. Please try again. ${error.message}`)
	}
}

export const getIdeas = async (sessionId) => {
	try {
		if (!isNonEmptyString(sessionId)) {
			throw new Error('Invalid session ID')
		}

		const ideasRef = ref(db, `${IDEAS_ROOT}/${sessionId}`)
		const snapshot = await get(ideasRef)

		if (!snapshot.exists()) {
			return []
		}

		const data = snapshot.val()

		return Object.values(data).sort((leftIdea, rightIdea) => (rightIdea.savedAt || 0) - (leftIdea.savedAt || 0))
	} catch (error) {
		console.error('Error loading ideas:', error)
		throw new Error(`Failed to load ideas. Please try again. ${error.message}`)
	}
}

export const deleteIdea = async (sessionId, ideaId) => {
	try {
		if (!isNonEmptyString(sessionId)) {
			throw new Error('Invalid session ID')
		}

		if (!isNonEmptyString(ideaId)) {
			throw new Error('Invalid idea ID')
		}

		const ideaRef = ref(db, `${IDEAS_ROOT}/${sessionId}/${ideaId}`)
		await remove(ideaRef)
	} catch (error) {
		console.error('Error deleting idea:', error)
		throw new Error(`Failed to delete idea. Please try again. ${error.message}`)
	}
}

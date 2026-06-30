// Theme tokens live here so styling constants stay aligned across Tailwind and future UI code.
export const THEME = {
	colors: {
		primary: '#3B82F6',
		secondary: '#10B981',
		danger: '#EF4444',
		success: '#10B981',
		warning: '#F59E0B',
		info: '#3B82F6',
		surface: '#F9FAFB',
		border: '#E5E7EB',
		text: {
			primary: '#1F2937',
			secondary: '#6B7280',
			light: '#9CA3AF',
		},
	},
	spacing: {
		xs: '0.5rem',
		sm: '1rem',
		md: '1.5rem',
		lg: '2rem',
		xl: '3rem',
	},
	typography: {
		h1: { size: '2.5rem', weight: 700 },
		h2: { size: '2rem', weight: 700 },
		h3: { size: '1.5rem', weight: 600 },
		body: { size: '1rem', weight: 400 },
		small: { size: '0.875rem', weight: 400 },
	},
	breakpoints: {
		mobile: '0px',
		tablet: '640px',
		desktop: '1024px',
		wide: '1280px',
	},
	transitions: {
		fast: '150ms',
		normal: '300ms',
		slow: '500ms',
	},
	zIndex: {
		dropdown: 10,
		sticky: 20,
		modal: 30,
		toast: 40,
		tooltip: 50,
	},
}

import { useState } from 'react'
import CheckboxGroup from './CheckboxGroup.jsx'
import Input from './Input.jsx'
import Select from './Select.jsx'

const FORM_OPTIONS = {
  skills: [
    { value: 'programming', label: 'Programming' },
    { value: 'design', label: 'Design' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'finance', label: 'Finance' },
    { value: 'sales', label: 'Sales' },
    { value: 'product', label: 'Product' },
  ],
  budget: [
    { value: '0-5k', label: '$0-5K' },
    { value: '5-20k', label: '$5K-20K' },
    { value: '20-50k', label: '$20K-50K' },
    { value: '50k+', label: '$50K+' },
  ],
  goals: [
    { value: 'make-money', label: 'Make money' },
    { value: 'social-impact', label: 'Social impact' },
    { value: 'personal-growth', label: 'Personal growth' },
    { value: 'learn-tech', label: 'Learn technology' },
  ],
}

/**
 * Main form for collecting startup idea generation inputs.
 *
 * Captures:
 * - Startup interest (text)
 * - User skills (multi-select)
 * - Available budget (single select)
 * - Target audience (text)
 * - Startup goal (single select)
 *
 * Validates all fields and calls onSubmit with validated data.
 * Does not handle API submission - parent component handles that.
 *
 * @param {function} onSubmit - Called with form data on valid submission
 * @param {boolean} isLoading - Whether form is processing (disables submit)
 * @returns {JSX} Form element
 */
export default function IdeaForm({ onSubmit, isLoading = false }) {
  const [formData, setFormData] = useState({
    interest: '',
    skills: [],
    budget: '',
    targetAudience: '',
    goal: '',
  })
  const [errors, setErrors] = useState({
    interest: '',
    skills: '',
    budget: '',
    targetAudience: '',
    goal: '',
  })

  const validateForm = () => {
    const newErrors = {}

    if (!formData.interest.trim()) {
      newErrors.interest = 'Interest must be provided'
    } else if (formData.interest.trim().length < 3) {
      newErrors.interest = 'Interest must be at least 3 characters'
    }

    if (formData.skills.length === 0) {
      newErrors.skills = 'Please select at least one skill'
    }

    if (!formData.budget) {
      newErrors.budget = 'Please select a budget range'
    }

    if (!formData.targetAudience.trim()) {
      newErrors.targetAudience = 'Target audience must be provided'
    } else if (formData.targetAudience.trim().length < 3) {
      newErrors.targetAudience = 'Target audience must be at least 3 characters'
    }

    if (!formData.goal) {
      newErrors.goal = 'Please select a startup goal'
    }

    return newErrors
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSkillsChange = (selectedSkill) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.includes(selectedSkill)
        ? prev.skills.filter((skill) => skill !== selectedSkill)
        : [...prev.skills, selectedSkill],
    }))
    setErrors((prev) => ({ ...prev, skills: '' }))
  }

  const handleSelectChange = (event) => {
    const { name, value } = event.target

    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const newErrors = validateForm()

    if (Object.keys(newErrors).length > 0) {
      setErrors((prev) => ({ ...prev, ...newErrors }))
      return
    }

    if (onSubmit) {
      onSubmit(formData)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-2xl p-lg">
      <h2 className="mb-lg text-2xl font-bold text-slate-900">Tell us about your startup idea</h2>

      <Input
        label="What are you interested in building?"
        name="interest"
        value={formData.interest}
        onChange={handleInputChange}
        placeholder="e.g., AI fitness tracking"
        error={errors.interest}
        helpText="Be specific about your industry or problem space"
        required
        disabled={isLoading}
      />

      <CheckboxGroup
        label="What skills do you have?"
        name="skills"
        value={formData.skills}
        onChange={(event) => handleSkillsChange(event.target.value)}
        options={FORM_OPTIONS.skills}
        error={errors.skills}
        helpText="Select all skills you have"
        layout="grid"
        required
        disabled={isLoading}
      />

      <Select
        label="What's your available budget?"
        name="budget"
        value={formData.budget}
        onChange={handleSelectChange}
        options={FORM_OPTIONS.budget}
        placeholder="Select your budget"
        error={errors.budget}
        required
        disabled={isLoading}
      />

      <Input
        label="Who is your target audience?"
        name="targetAudience"
        value={formData.targetAudience}
        onChange={handleInputChange}
        placeholder="e.g., Busy professionals"
        error={errors.targetAudience}
        helpText="Describe the people who will use your product"
        required
        disabled={isLoading}
      />

      <Select
        label="What's your primary goal?"
        name="goal"
        value={formData.goal}
        onChange={handleSelectChange}
        options={FORM_OPTIONS.goals}
        placeholder="Select your primary goal"
        error={errors.goal}
        required
        disabled={isLoading}
      />

      <button
        type="submit"
        disabled={isLoading}
        className="mt-lg w-full rounded-lg bg-primary px-lg py-sm font-bold text-white transition-colors hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isLoading ? 'Generating...' : 'Generate Startup Idea'}
      </button>
    </form>
  )
}
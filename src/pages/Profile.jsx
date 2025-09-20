import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { 
  ChevronLeftIcon,
  ChevronRightIcon,
  AcademicCapIcon,
  SparklesIcon,
  HeartIcon,
  BriefcaseIcon,
  MapPinIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'
import VoiceButton from '../components/VoiceButton.jsx'

const STEPS = [
  { id: 'education', title: 'Education Level', icon: AcademicCapIcon },
  { id: 'skills', title: 'Your Skills', icon: SparklesIcon },
  { id: 'interests', title: 'Interests', icon: HeartIcon },
  { id: 'domains', title: 'Preferred Areas', icon: BriefcaseIcon },
  { id: 'location', title: 'Location', icon: MapPinIcon }
]

const EDUCATION_OPTIONS = [
  { value: 'high_school', label: 'High School', icon: '🎓', desc: '12th grade or equivalent' },
  { value: 'undergraduate', label: 'Bachelor\'s Degree', icon: '📚', desc: 'Currently pursuing or completed' },
  { value: 'postgraduate', label: 'Master\'s Degree', icon: '🎯', desc: 'Currently pursuing or completed' },
  { value: 'diploma', label: 'Diploma/Certificate', icon: '📜', desc: 'Professional certification' }
]

const DOMAIN_OPTIONS = [
  { id: 'tech', label: 'Technology', icon: '💻', color: 'bg-blue-100 text-blue-700 border-blue-200' },
  { id: 'marketing', label: 'Marketing', icon: '📱', color: 'bg-green-100 text-green-700 border-green-200' },
  { id: 'design', label: 'Design', icon: '🎨', color: 'bg-purple-100 text-purple-700 border-purple-200' },
  { id: 'business', label: 'Business', icon: '💼', color: 'bg-orange-100 text-orange-700 border-orange-200' },
  { id: 'finance', label: 'Finance', icon: '💰', color: 'bg-yellow-100 text-yellow-700 border-yellow-200' },
  { id: 'healthcare', label: 'Healthcare', icon: '🏥', color: 'bg-red-100 text-red-700 border-red-200' }
]

const SKILL_SUGGESTIONS = [
  'Communication', 'Leadership', 'Problem Solving', 'Teamwork', 'Time Management',
  'Python', 'JavaScript', 'Excel', 'PowerPoint', 'Photoshop', 'Figma',
  'Data Analysis', 'Project Management', 'Social Media', 'Writing', 'Research'
]

export default function Profile() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    education: '',
    skills: '',
    interests: '',
    domains: [],
    location: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const currentStepData = STEPS[currentStep]
  const StepIcon = currentStepData.icon
  const isLastStep = currentStep === STEPS.length - 1
  const canProceed = validateCurrentStep()

  function validateCurrentStep() {
    const step = STEPS[currentStep].id
    switch (step) {
      case 'education': return formData.education !== ''
      case 'skills': return formData.skills.trim() !== ''
      case 'interests': return formData.interests.trim() !== ''
      case 'domains': return formData.domains.length > 0
      case 'location': return formData.location.trim() !== ''
      default: return false
    }
  }

  function updateFormData(field, value) {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  function toggleDomain(domainId) {
    setFormData(prev => ({
      ...prev,
      domains: prev.domains.includes(domainId) 
        ? prev.domains.filter(d => d !== domainId)
        : [...prev.domains, domainId]
    }))
  }

  function addSkillSuggestion(skill) {
    const currentSkills = formData.skills ? formData.skills + ', ' : ''
    updateFormData('skills', currentSkills + skill)
  }

  function nextStep() {
    if (canProceed && currentStep < STEPS.length - 1) {
      setCurrentStep(prev => prev + 1)
    }
  }

  function prevStep() {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    }
  }

  async function handleSubmit() {
    setIsSubmitting(true)
    localStorage.setItem('internpath-profile', JSON.stringify(formData))
    
    // Simulate processing
    setTimeout(() => {
      setIsSubmitting(false)
      navigate('/recommendations')
    }, 2000)
  }

  function renderStepContent() {
    const step = STEPS[currentStep].id

    switch (step) {
      case 'education':
        return (
          <div className="space-y-4">
            <p className="text-center text-slate-600 mb-6">What's your current education level?</p>
            {EDUCATION_OPTIONS.map(option => (
              <button
                key={option.value}
                type="button"
                onClick={() => updateFormData('education', option.value)}
                className={`w-full p-4 rounded-2xl border-2 transition-all duration-300 text-left ${
                  formData.education === option.value
                    ? 'border-blue-500 bg-blue-50 shadow-lg'
                    : 'border-slate-200 bg-white hover:border-blue-300 hover:shadow-md'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{option.icon}</span>
                  <div>
                    <div className="font-semibold text-slate-800">{option.label}</div>
                    <div className="text-sm text-slate-500">{option.desc}</div>
                  </div>
                  {formData.education === option.value && (
                    <CheckCircleIcon className="w-6 h-6 text-blue-600 ml-auto" />
                  )}
                </div>
              </button>
            ))}
          </div>
        )

      case 'skills':
        return (
          <div className="space-y-4">
            <p className="text-center text-slate-600 mb-6">What are your key skills?</p>
            <div className="relative">
              <textarea
                value={formData.skills}
                onChange={(e) => updateFormData('skills', e.target.value)}
                placeholder="e.g., Communication, Python, Design..."
                className="w-full p-4 rounded-2xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none resize-none h-24 bg-white"
              />
              <div className="absolute top-4 right-4">
                <VoiceButton />
              </div>
            </div>
            <div className="text-sm text-slate-500 mb-3">💡 Tap to add:</div>
            <div className="flex flex-wrap gap-2">
              {SKILL_SUGGESTIONS.map(skill => (
                <button
                  key={skill}
                  type="button"
                  onClick={() => addSkillSuggestion(skill)}
                  className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 transition-colors"
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        )

      case 'interests':
        return (
          <div className="space-y-4">
            <p className="text-center text-slate-600 mb-6">What interests you most?</p>
            <div className="relative">
              <textarea
                value={formData.interests}
                onChange={(e) => updateFormData('interests', e.target.value)}
                placeholder="e.g., Artificial Intelligence, Social Impact, Innovation..."
                className="w-full p-4 rounded-2xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none resize-none h-24 bg-white"
              />
              <div className="absolute top-4 right-4">
                <VoiceButton />
              </div>
            </div>
            <div className="text-sm text-slate-500">Share what excites you professionally</div>
          </div>
        )

      case 'domains':
        return (
          <div className="space-y-4">
            <p className="text-center text-slate-600 mb-6">Which areas interest you? (Select multiple)</p>
            <div className="grid grid-cols-2 gap-3">
              {DOMAIN_OPTIONS.map(domain => (
                <button
                  key={domain.id}
                  type="button"
                  onClick={() => toggleDomain(domain.id)}
                  className={`p-4 rounded-2xl border-2 transition-all duration-300 ${
                    formData.domains.includes(domain.id)
                      ? `${domain.color} border-current shadow-lg scale-105`
                      : 'border-slate-200 bg-white hover:shadow-md'
                  }`}
                >
                  <div className="text-2xl mb-2">{domain.icon}</div>
                  <div className="text-sm font-semibold">{domain.label}</div>
                  {formData.domains.includes(domain.id) && (
                    <CheckCircleIcon className="w-5 h-5 mt-2 mx-auto" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )

      case 'location':
        return (
          <div className="space-y-4">
            <p className="text-center text-slate-600 mb-6">Where would you like to work?</p>
            <div className="relative">
              <input
                type="text"
                value={formData.location}
                onChange={(e) => updateFormData('location', e.target.value)}
                placeholder="e.g., Mumbai, Delhi, Remote, Anywhere in India"
                className="w-full p-4 rounded-2xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none bg-white"
              />
              <div className="absolute top-4 right-4">
                <VoiceButton />
              </div>
            </div>
            <div className="text-sm text-slate-500">You can specify cities, states, or 'Remote'</div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      {/* Progress Header */}
      <div className="max-w-md mx-auto mb-8">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="p-2 rounded-xl bg-white shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <div className="text-sm font-medium text-slate-600">
            {currentStep + 1} of {STEPS.length}
          </div>
          <div className="w-9 h-9" /> {/* Spacer */}
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-200 rounded-full h-2 mb-6">
          <div 
            className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }}
          />
        </div>

        {/* Step Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
            <StepIcon className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">{currentStepData.title}</h2>
        </div>
      </div>

      {/* Step Content */}
      <div className="max-w-md mx-auto mb-8">
        {renderStepContent()}
      </div>

      {/* Navigation */}
      <div className="max-w-md mx-auto">
        {isLastStep ? (
          <button
            onClick={handleSubmit}
            disabled={!canProceed || isSubmitting}
            className={`w-full py-4 px-6 rounded-2xl font-semibold text-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-3 ${
              canProceed && !isSubmitting
                ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:shadow-xl transform hover:scale-[1.02]'
                : 'bg-slate-300 text-slate-500 cursor-not-allowed'
            }`}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Creating Your Profile...</span>
              </>
            ) : (
              <>
                <SparklesIcon className="w-6 h-6" />
                <span>Get My Recommendations</span>
              </>
            )}
          </button>
        ) : (
          <button
            onClick={nextStep}
            disabled={!canProceed}
            className={`w-full py-4 px-6 rounded-2xl font-semibold text-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-3 ${
              canProceed
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl transform hover:scale-[1.02]'
                : 'bg-slate-300 text-slate-500 cursor-not-allowed'
            }`}
          >
            <span>Continue</span>
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  )
}
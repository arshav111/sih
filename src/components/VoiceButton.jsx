import { MicrophoneIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function VoiceButton({ label = 'Voice input', onClick, className = '' }) {
  const [isListening, setIsListening] = useState(false)

  const handleClick = () => {
    if (onClick) {
      onClick()
    } else {
      // Simulate voice input
      setIsListening(true)
      setTimeout(() => {
        setIsListening(false)
        alert('Voice input feature coming soon! 🎤\n\nThis will allow you to speak your input instead of typing.')
      }, 1000)
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isListening}
      className={`
        relative flex items-center justify-center p-3 rounded-xl border-2 transition-all duration-300 group
        ${isListening 
          ? 'border-red-400 bg-red-50 scale-105' 
          : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
        }
        ${className}
      `}
      aria-label={label}
      title={label}
    >
      {/* Animated listening indicator */}
      {isListening && (
        <div className="absolute inset-0 rounded-xl bg-red-400/20 animate-pulse"></div>
      )}
      
      <MicrophoneIcon 
        className={`w-5 h-5 relative z-10 transition-colors duration-300 ${
          isListening 
            ? 'text-red-600' 
            : 'text-gray-600 group-hover:text-blue-600'
        }`} 
      />
      
      {/* Listening animation dots */}
      {isListening && (
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 flex gap-1">
          <div className="w-1 h-1 bg-red-500 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
          <div className="w-1 h-1 bg-red-500 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
          <div className="w-1 h-1 bg-red-500 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
        </div>
      )}
      
      {/* Tooltip */}
      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {isListening ? 'Listening...' : 'Click to speak'}
      </div>
    </button>
  )
}
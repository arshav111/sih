import { NavLink } from 'react-router-dom'
import { 
  HomeIcon, 
  UserIcon, 
  SparklesIcon, 
  ChatBubbleLeftRightIcon 
} from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next'

export default function BottomNav() {
  const { t } = useTranslation()
  
  return (
    <nav className="bg-white border-t border-gray-200 sticky bottom-0 z-50">
      <div className="max-w-md mx-auto px-4 py-2 grid grid-cols-4 gap-1">
        
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 p-3 rounded-xl ${
              isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-600'
            }`
          }
        >
          <HomeIcon className="h-6 w-6" />
          <span className="text-xs">Home</span>
        </NavLink>

        <NavLink
          to="/recommendations"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 p-3 rounded-xl ${
              isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-600'
            }`
          }
        >
          <SparklesIcon className="h-6 w-6" />
          <span className="text-xs">Matches</span>
        </NavLink>

        <NavLink
          to="/feedback"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 p-3 rounded-xl ${
              isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-600'
            }`
          }
        >
          <ChatBubbleLeftRightIcon className="h-6 w-6" />
          <span className="text-xs">Feedback</span>
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 p-3 rounded-xl ${
              isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-600'
            }`
          }
        >
          <UserIcon className="h-6 w-6" />
          <span className="text-xs">Profile</span>
        </NavLink>

      </div>
    </nav>
  )
}
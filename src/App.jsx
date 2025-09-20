import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Landing from './pages/Landing.jsx'
import Profile from './pages/Profile.jsx'
import Recommendations from './pages/Recommendations.jsx'
import Feedback from './pages/Feedback.jsx'
import BottomNav from './components/BottomNav.jsx'
import LanguageToggle from './components/LanguageToggle.jsx'

export default function App() {
  const location = useLocation()
  const { t } = useTranslation()

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Simple Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-blue-600 text-white grid place-items-center font-bold">
              IP
            </div>
            <span className="font-semibold text-gray-800">InternPath</span>
          </Link>
          <LanguageToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 mx-auto w-full max-w-md px-4">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </main>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  )
}
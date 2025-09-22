import { useState } from 'react'

const SAMPLE_INTERNSHIPS = [
  {
    id: 1,
    title: 'Frontend Developer Intern',
    company: 'TechCorp India',
    location: 'Mumbai, Remote',
    match: '92%',
    skills: ['JavaScript', 'React', 'Communication'],
    stipend: '₹25,000/month'
  },
  {
    id: 2,
    title: 'Digital Marketing Intern',
    company: 'BrandForce',
    location: 'Delhi, Hybrid',
    match: '87%',
    skills: ['Social Media', 'Content', 'Analytics'],
    stipend: '₹20,000/month'
  },
  {
    id: 3,
    title: 'Data Analyst Intern',
    company: 'DataInsights',
    location: 'Bangalore, On-site',
    match: '83%',
    skills: ['Excel', 'Python', 'Analysis'],
    stipend: '₹30,000/month'
  }
]

export default function Recommendations() {
  const [saved, setSaved] = useState(new Set())

  const toggleSave = (id) => {
    setSaved(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Your Matches</h1>
        <p className="text-gray-600">Perfect internships for you</p>
      </div>

      {/* Recommendations */}
      <div className="space-y-4">
        {SAMPLE_INTERNSHIPS.map((internship) => (
          <div key={internship.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            {/* Header */}
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{internship.title}</h3>
                <p className="text-gray-600 text-sm">{internship.company}</p>
              </div>
              <div className="text-right">
                <div className="bg-green-100 text-green-800 px-2 py-1 rounded-lg text-sm font-medium">
                  {internship.match} match
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-3">
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span>📍 {internship.location}</span>
                <span>💰 {internship.stipend}</span>
              </div>

              {/* Skills */}
              <div>
                <div className="text-sm text-gray-500 mb-2">Matching skills:</div>
                <div className="flex flex-wrap gap-2">
                  {internship.skills.map(skill => (
                    <span key={skill} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-lg text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-3">
                <button
                  onClick={() => toggleSave(internship.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                    saved.has(internship.id)
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {saved.has(internship.id) ? '❤️ Saved' : '🤍 Save'}
                </button>
                <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
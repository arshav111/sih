import { useState } from 'react'

export default function Feedback() {
  const [rating, setRating] = useState(null)
  const [comment, setComment] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const submitFeedback = () => {
    // Simple submission
    console.log('Feedback:', { rating, comment })
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setRating(null)
      setComment('')
    }, 2000)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h2>
          <p className="text-gray-600">Your feedback helps us improve</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Feedback</h1>
        <p className="text-gray-600">Help us improve InternPath</p>
      </div>

      <div className="max-w-md mx-auto space-y-6">
        {/* Rating */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
            How were your recommendations?
          </h3>
          
          <div className="flex justify-center gap-8">
            <button
              onClick={() => setRating('good')}
              className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-colors ${
                rating === 'good'
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200 hover:border-green-300'
              }`}
            >
              <div className="text-3xl">👍</div>
              <span className="font-medium text-gray-700">Good</span>
            </button>

            <button
              onClick={() => setRating('bad')}
              className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-colors ${
                rating === 'bad'
                  ? 'border-red-500 bg-red-50'
                  : 'border-gray-200 hover:border-red-300'
              }`}
            >
              <div className="text-3xl">👎</div>
              <span className="font-medium text-gray-700">Not Good</span>
            </button>
          </div>
        </div>

        {/* Comment */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">
            Any suggestions?
          </h4>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Tell us how we can improve..."
            className="w-full p-4 border border-gray-300 rounded-xl resize-none h-24 focus:border-blue-500 focus:outline-none"
          />
        </div>

        {/* Submit */}
        <button
          onClick={submitFeedback}
          disabled={!rating}
          className={`w-full py-4 px-6 rounded-xl font-semibold transition-colors ${
            rating
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Submit Feedback
        </button>
      </div>
    </div>
  )
}
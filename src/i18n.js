import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      appName: 'InternPath',
      findMyInternship: 'Find My Internship',
      introduction: 'AI-powered internship recommendations tailored for you.',
      profile: 'Profile',
      recommendations: 'Recommendations',
      feedback: 'Feedback',
      home: 'Home',
      skills: 'Skills',
      interests: 'Interests',
      educationLevel: 'Education Level',
      preferredFields: 'Preferred Fields',
      submitProfile: 'Save & Get Recommendations',
      whyRecommended: 'Why Recommended?',
      rateThese: 'Rate these recommendations',
      thumbsUp: 'Thumbs Up',
      thumbsDown: 'Thumbs Down',
      comments: 'Comments (optional)',
      submitFeedback: 'Submit Feedback',
      language: 'Language'
    }
  },
  hi: {
    translation: {
      appName: 'इंटर्नपाथ',
      findMyInternship: 'मेरे लिए इंटर्नशिप ढूँढें',
      introduction: 'आपके लिए एआई आधारित इंटर्नशिप सुझाव।',
      profile: 'प्रोफ़ाइल',
      recommendations: 'सिफ़ारिशें',
      feedback: 'प्रतिक्रिया',
      home: 'होम',
      skills: 'कौशल',
      interests: 'रूचियाँ',
      educationLevel: 'शिक्षा स्तर',
      preferredFields: 'वांछित क्षेत्र',
      submitProfile: 'सहेजें और सुझाव देखें',
      whyRecommended: 'क्यों सुझाव दिया गया?',
      rateThese: 'इन सुझावों को रेट करें',
      thumbsUp: 'पसंद',
      thumbsDown: 'नापसंद',
      comments: 'टिप्पणी (वैकल्पिक)',
      submitFeedback: 'प्रतिक्रिया भेजें',
      language: 'भाषा'
    }
  },
  ta: {
    translation: {
      appName: 'இன்டெர்ன்பாத்',
      findMyInternship: 'எனக்கான இன்டெர்ன்ஷிப்',
      introduction: 'உங்களுக்கான AI அடிப்படையிலான இன்டெர்ன்ஷிப் பரிந்துரைகள்.',
      profile: 'சுயவிவரம்',
      recommendations: 'பரிந்துரைகள்',
      feedback: 'கருத்து',
      home: 'முகப்பு',
      skills: 'திறன்கள்',
      interests: 'ஆர்வங்கள்',
      educationLevel: 'கல்வி நிலை',
      preferredFields: 'விருப்ப துறைகள்',
      submitProfile: 'சேமித்து பரிந்துரைகள் காணவும்',
      whyRecommended: 'ஏன் பரிந்துரைக்கப்பட்டது?',
      rateThese: 'இந்த பரிந்துரைகளை மதிப்பிடவும்',
      thumbsUp: 'நன்று',
      thumbsDown: 'பிடிக்கவில்லை',
      comments: 'கருத்து (விருப்பம்)',
      submitFeedback: 'கருத்து சமர்ப்பிக்கவும்',
      language: 'மொழி'
    }
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
})

export default i18n
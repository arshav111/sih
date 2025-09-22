import speech_recognition as sr
import pyttsx3
from gtts import gTTS
import os
from internship_advisor import recommend_internship


def speech_to_text(lang="en-IN"):
    recognizer = sr.Recognizer()
    with sr.Microphone() as source:
        print(f"🎤 Speak now ({lang})...")
        audio = recognizer.listen(source)

    try:
        text = recognizer.recognize_google(audio, language=lang)
        print(f"📝 You said: {text}")
        return text
    except sr.UnknownValueError:
        print("⚠️ Could not understand audio")
        return ""
    except sr.RequestError as e:
        print(f"⚠️ Could not request results; {e}")
        return ""


def text_to_speech(text, lang="en"):
    try:
        tts = gTTS(text=text, lang=lang)
        filename = "temp_voice.mp3"
        tts.save(filename)
        os.system(f"start {filename}")  # Windows playback
    except Exception:
        engine = pyttsx3.init()
        engine.say(text)
        engine.runAndWait()


if __name__ == "__main__":
    print("🎤 Speak now (internship assistant)...")
    query = speech_to_text("en-IN")

    if query:
        print(f"DEBUG - Recognized query: {query}")

        # 🔹 Directly call internship advisor
        answer = recommend_internship(query)

        print(f"Answer: {answer}")
        text_to_speech(answer, lang="en")
    else:
        print("⚠️ No query detected.")

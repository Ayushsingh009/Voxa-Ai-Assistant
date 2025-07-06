# 🧠 Voxa - AI Voice Assistant

**Voxa** is a smart, voice-enabled virtual assistant that listens to your voice, understands your queries via **Google Gemini AI**, and speaks back intelligent answers — all in real-time!

## 🎯 Live Demo

🌐 [voxa-ai-assistant.netlify.app](https://voxa-ai-assistant.netlify.app)

---

## 🔍 Features

- 🎙️ **Voice Input:** Ask anything using your mic
- 🤖 **Gemini AI Integration:** Intelligent, contextual answers
- 🔊 **Text-to-Speech:** Natural, human-like spoken replies
- ✨ **Markdown Cleanup:** No asterisks or formatting glitches
- 📏 **Short Responses:** Trimmed to ~30 words for clarity
- 🧠 **Clean, Minimal UI:** Mobile-friendly and responsive

---

## 🛠️ Tech Stack

- **React.js**
- **Vite**
- **@google/generative-ai**
- **Web Speech API (STT & TTS)**
- **Netlify (deployment)**

---

## 🚀 Future Enhancements

- 🧠 Context-aware conversations
- 🗂️ Chat history with timestamps
- 🌐 Multi-language support
- 🎙️ Voice profile selection
- 🛡️ Mic permission/privacy banner
- 🔄 Continuous listening toggle
- ✍️ Typing input fallback mode

---

## 🧪 Local Setup Instructions

```bash
git clone https://github.com/your-username/voxa-ai-assistant.git
cd voxa-ai-assistant
npm install
Create a .env file in the root:-VITE_GEMINI_API_KEY=your_actual_api_key_here
npm run dev
"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

export type Language = "en" | "hi" | "bn" | "te" | "mr" | "ta" | "gu" | "kn" | "or" | "ml"

export interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // App Info
    "app.title": "ResQ",
    "app.subtitle": "Rescue Quick",
    "app.tagline": "Your Emergency Helper",
    "app.description": "Get help fast. Stay safe. Simple to use.",

    // Navigation
    "nav.home": "Home",
    "nav.alerts": "Alerts",
    "nav.map": "Map",
    "nav.teams": "Help Teams",
    "nav.sos": "Emergency",

    // Emergency
    "emergency.sos": "HELP ME NOW",
    "emergency.call": "Call for Help",
    "emergency.location": "Share My Location",
    "emergency.active": "Getting Help",
    "emergency.safe": "I Am Safe",

    // Alerts
    "alerts.title": "Safety Alerts",
    "alerts.weather": "Weather Warning",
    "alerts.fire": "Fire Alert",
    "alerts.flood": "Flood Warning",
    "alerts.earthquake": "Earthquake Alert",
    "alerts.none": "All Safe Now",

    // Teams
    "teams.title": "Help Teams Near You",
    "teams.available": "Ready to Help",
    "teams.busy": "Helping Others",
    "teams.contact": "Call Team",

    // Status
    "status.safe": "All Clear",
    "status.warning": "Be Careful",
    "status.danger": "Emergency",
    "status.location": "Location On",

    // Actions
    "action.view": "See More",
    "action.call": "Call Now",
    "action.cancel": "Cancel",
    "action.confirm": "Yes, Help Me",
    "action.wait": "Please Wait",
  },
  es: {
    "app.title": "ResQ",
    "app.subtitle": "Rescate Rápido",
    "app.tagline": "Tu Ayuda de Emergencia",
    "app.description": "Obtén ayuda rápido. Mantente seguro. Fácil de usar.",

    "nav.home": "Inicio",
    "nav.alerts": "Alertas",
    "nav.map": "Mapa",
    "nav.teams": "Equipos",
    "nav.sos": "Emergencia",

    "emergency.sos": "AYÚDAME AHORA",
    "emergency.call": "Pedir Ayuda",
    "emergency.location": "Compartir Ubicación",
    "emergency.active": "Obteniendo Ayuda",
    "emergency.safe": "Estoy Seguro",

    "alerts.title": "Alertas de Seguridad",
    "alerts.weather": "Alerta del Tiempo",
    "alerts.fire": "Alerta de Fuego",
    "alerts.flood": "Alerta de Inundación",
    "alerts.earthquake": "Alerta de Terremoto",
    "alerts.none": "Todo Seguro",

    "teams.title": "Equipos de Ayuda Cerca",
    "teams.available": "Listos para Ayudar",
    "teams.busy": "Ayudando a Otros",
    "teams.contact": "Llamar Equipo",

    "status.safe": "Todo Bien",
    "status.warning": "Ten Cuidado",
    "status.danger": "Emergencia",
    "status.location": "Ubicación Activa",

    "action.view": "Ver Más",
    "action.call": "Llamar Ahora",
    "action.cancel": "Cancelar",
    "action.confirm": "Sí, Ayúdame",
    "action.wait": "Espera Por Favor",
  },
  hi: {
    "app.title": "ResQ",
    "app.subtitle": "तुरंत बचाव",
    "app.tagline": "आपकी आपातकालीन मदद",
    "app.description": "जल्दी मदद पाएं। सुरक्षित रहें। आसान उपयोग।",

    "nav.home": "घर",
    "nav.alerts": "चेतावनी",
    "nav.map": "नक्शा",
    "nav.teams": "मदद टीम",
    "nav.sos": "आपातकाल",

    "emergency.sos": "मुझे अभी मदद चाहिए",
    "emergency.call": "मदद के लिए कॉल करें",
    "emergency.location": "मेरी जगह बताएं",
    "emergency.active": "मदद आ रही है",
    "emergency.safe": "मैं सुरक्षित हूं",

    "alerts.title": "सुरक्षा चेतावनी",
    "alerts.weather": "मौसम चेतावनी",
    "alerts.fire": "आग की चेतावनी",
    "alerts.flood": "बाढ़ की चेतावनी",
    "alerts.earthquake": "भूकंप चेतावनी",
    "alerts.none": "सब सुरक्षित है",

    "teams.title": "पास की मदद टीमें",
    "teams.available": "मदद के लिए तैयार",
    "teams.busy": "दूसरों की मदद कर रहे",
    "teams.contact": "टीम को कॉल करें",

    "status.safe": "सब ठीक है",
    "status.warning": "सावधान रहें",
    "status.danger": "आपातकाल",
    "status.location": "जगह चालू है",

    "action.view": "और देखें",
    "action.call": "अभी कॉल करें",
    "action.cancel": "रद्द करें",
    "action.confirm": "हां, मेरी मदद करें",
    "action.wait": "कृपया प्रतीक्षा करें",
  },
  bn: {
    "app.title": "ResQ",
    "app.subtitle": "দ্রুত উদ্ধার",
    "app.tagline": "আপনার জরুরি সাহায্য",
    "app.description": "দ্রুত সাহায্য পান। নিরাপদ থাকুন। সহজ ব্যবহার।",

    "nav.home": "বাড়ি",
    "nav.alerts": "সতর্কতা",
    "nav.map": "মানচিত্র",
    "nav.teams": "সাহায্য দল",
    "nav.sos": "জরুরি",

    "emergency.sos": "এখনই আমাকে সাহায্য করুন",
    "emergency.call": "সাহায্যের জন্য কল করুন",
    "emergency.location": "আমার অবস্থান শেয়ার করুন",
    "emergency.active": "সাহায্য আসছে",
    "emergency.safe": "আমি নিরাপদ",

    "alerts.title": "নিরাপত্তা সতর্কতা",
    "alerts.weather": "আবহাওয়া সতর্কতা",
    "alerts.fire": "আগুনের সতর্কতা",
    "alerts.flood": "বন্যার সতর্কতা",
    "alerts.earthquake": "ভূমিকম্পের সতর্কতা",
    "alerts.none": "সব নিরাপদ",

    "teams.title": "কাছের সাহায্য দল",
    "teams.available": "সাহায্যের জন্য প্রস্তুত",
    "teams.busy": "অন্যদের সাহায্য করছে",
    "teams.contact": "দলকে কল করুন",

    "status.safe": "সব ঠিক আছে",
    "status.warning": "সতর্ক থাকুন",
    "status.danger": "জরুরি অবস্থা",
    "status.location": "অবস্থান চালু",

    "action.view": "আরো দেখুন",
    "action.call": "এখনই কল করুন",
    "action.cancel": "বাতিল",
    "action.confirm": "হ্যাঁ, আমাকে সাহায্য করুন",
    "action.wait": "অনুগ্রহ করে অপেক্ষা করুন",
  },
  pt: {
    "app.title": "ResQ",
    "app.subtitle": "Resgate Rápido",
    "app.tagline": "Sua Ajuda de Emergência",
    "app.description": "Obtenha ajuda rápido. Fique seguro. Fácil de usar.",

    "nav.home": "Início",
    "nav.alerts": "Alertas",
    "nav.map": "Mapa",
    "nav.teams": "Equipes",
    "nav.sos": "Emergência",

    "emergency.sos": "ME AJUDE AGORA",
    "emergency.call": "Pedir Ajuda",
    "emergency.location": "Compartilhar Localização",
    "emergency.active": "Obtendo Ajuda",
    "emergency.safe": "Estou Seguro",

    "alerts.title": "Alertas de Segurança",
    "alerts.weather": "Alerta do Tempo",
    "alerts.fire": "Alerta de Fogo",
    "alerts.flood": "Alerta de Enchente",
    "alerts.earthquake": "Alerta de Terremoto",
    "alerts.none": "Tudo Seguro",

    "teams.title": "Equipes de Ajuda Próximas",
    "teams.available": "Prontas para Ajudar",
    "teams.busy": "Ajudando Outros",
    "teams.contact": "Ligar para Equipe",

    "status.safe": "Tudo Bem",
    "status.warning": "Tenha Cuidado",
    "status.danger": "Emergência",
    "status.location": "Localização Ativa",

    "action.view": "Ver Mais",
    "action.call": "Ligar Agora",
    "action.cancel": "Cancelar",
    "action.confirm": "Sim, Me Ajude",
    "action.wait": "Por Favor Aguarde",
  },
  fr: {
    "app.title": "ResQ",
    "app.subtitle": "Sauvetage Rapide",
    "app.tagline": "Votre Aide d'Urgence",
    "app.description": "Obtenez de l'aide rapidement. Restez en sécurité. Facile à utiliser.",

    "nav.home": "Accueil",
    "nav.alerts": "Alertes",
    "nav.map": "Carte",
    "nav.teams": "Équipes",
    "nav.sos": "Urgence",

    "emergency.sos": "AIDEZ-MOI MAINTENANT",
    "emergency.call": "Demander de l'Aide",
    "emergency.location": "Partager Ma Position",
    "emergency.active": "Aide en Route",
    "emergency.safe": "Je Suis en Sécurité",

    "alerts.title": "Alertes de Sécurité",
    "alerts.weather": "Alerte Météo",
    "alerts.fire": "Alerte Incendie",
    "alerts.flood": "Alerte Inondation",
    "alerts.earthquake": "Alerte Séisme",
    "alerts.none": "Tout va Bien",

    "teams.title": "Équipes d'Aide Proches",
    "teams.available": "Prêtes à Aider",
    "teams.busy": "Aidant d'Autres",
    "teams.contact": "Appeler l'Équipe",

    "status.safe": "Tout va Bien",
    "status.warning": "Soyez Prudent",
    "status.danger": "Urgence",
    "status.location": "Position Active",

    "action.view": "Voir Plus",
    "action.call": "Appeler Maintenant",
    "action.cancel": "Annuler",
    "action.confirm": "Oui, Aidez-Moi",
    "action.wait": "Veuillez Patienter",
  },
  ar: {
    "app.title": "ResQ",
    "app.subtitle": "الإنقاذ السريع",
    "app.tagline": "مساعدتك في الطوارئ",
    "app.description": "احصل على المساعدة بسرعة. ابق آمناً. سهل الاستخدام.",

    "nav.home": "الرئيسية",
    "nav.alerts": "التنبيهات",
    "nav.map": "الخريطة",
    "nav.teams": "فرق المساعدة",
    "nav.sos": "طوارئ",

    "emergency.sos": "ساعدني الآن",
    "emergency.call": "طلب المساعدة",
    "emergency.location": "مشاركة موقعي",
    "emergency.active": "المساعدة قادمة",
    "emergency.safe": "أنا بأمان",

    "alerts.title": "تنبيهات الأمان",
    "alerts.weather": "تنبيه الطقس",
    "alerts.fire": "تنبيه الحريق",
    "alerts.flood": "تنبيه الفيضان",
    "alerts.earthquake": "تنبيه الزلزال",
    "alerts.none": "كل شيء آمن",

    "teams.title": "فرق المساعدة القريبة",
    "teams.available": "جاهزة للمساعدة",
    "teams.busy": "تساعد آخرين",
    "teams.contact": "اتصل بالفريق",

    "status.safe": "كل شيء بخير",
    "status.warning": "كن حذراً",
    "status.danger": "طوارئ",
    "status.location": "الموقع نشط",

    "action.view": "رؤية المزيد",
    "action.call": "اتصل الآن",
    "action.cancel": "إلغاء",
    "action.confirm": "نعم، ساعدني",
    "action.wait": "يرجى الانتظار",
  },
  zh: {
    "app.title": "ResQ",
    "app.subtitle": "快速救援",
    "app.tagline": "您的紧急帮助",
    "app.description": "快速获得帮助。保持安全。简单易用。",

    "nav.home": "首页",
    "nav.alerts": "警报",
    "nav.map": "地图",
    "nav.teams": "救援队",
    "nav.sos": "紧急情况",

    "emergency.sos": "现在帮助我",
    "emergency.call": "请求帮助",
    "emergency.location": "分享我的位置",
    "emergency.active": "正在获得帮助",
    "emergency.safe": "我很安全",

    "alerts.title": "安全警报",
    "alerts.weather": "天气警报",
    "alerts.fire": "火灾警报",
    "alerts.flood": "洪水警报",
    "alerts.earthquake": "地震警报",
    "alerts.none": "一切安全",

    "teams.title": "附近的救援队",
    "teams.available": "准备帮助",
    "teams.busy": "正在帮助他人",
    "teams.contact": "联系团队",

    "status.safe": "一切正常",
    "status.warning": "小心",
    "status.danger": "紧急情况",
    "status.location": "位置开启",

    "action.view": "查看更多",
    "action.call": "立即呼叫",
    "action.cancel": "取消",
    "action.confirm": "是的，帮助我",
    "action.wait": "请稍候",
  },
  te: {
    "app.title": "ResQ",
    "app.subtitle": "త్వరిత రక్షణ",
    "app.tagline": "మీ అత్యవసర సహాయం",
    "app.description": "త్వరగా సహాయం పొందండి. సురక్షితంగా ఉండండి. సులభంగా ఉపయోగించండి.",
    "nav.home": "ముంగిలి",
    "nav.alerts": "హెచ్చరికలు",
    "nav.map": "మ్యాప్",
    "nav.teams": "సహాయ బృందాలు",
    "nav.sos": "అత్యవసరం",
    "emergency.sos": "ఇప్పుడే నాకు సహాయం చేయండి",
    "emergency.safe": "నేను సురక్షితంగా ఉన్నాను",
    "status.safe": "అంతా క్లియర్",
    "action.safe": "నేను సురక్షితంగా ఉన్నాను - హెచ్చరికలు ఆపండి",
  },
  mr: {
    "app.title": "ResQ",
    "app.subtitle": "जलद बचाव",
    "app.tagline": "तुमची आपत्कालीन मदत",
    "app.description": "लवकर मदत मिळवा. सुरक्षित राहा. वापरण्यास सोपे.",
    "nav.home": "घर",
    "nav.alerts": "इशारे",
    "nav.map": "नकाशा",
    "nav.teams": "मदत संघ",
    "nav.sos": "आपत्काल",
    "emergency.sos": "आता मला मदत करा",
    "emergency.safe": "मी सुरक्षित आहे",
    "status.safe": "सर्व ठीक आहे",
    "action.safe": "मी सुरक्षित आहे - इशारे थांबवा",
  },
  ta: {
    "app.title": "ResQ",
    "app.subtitle": "விரைவு மீட்பு",
    "app.tagline": "உங்கள் அவசர உதவி",
    "app.description": "விரைவாக உதவி பெறுங்கள். பாதுகாப்பாக இருங்கள். எளிதாக பயன்படுத்துங்கள்.",
    "nav.home": "வீடு",
    "nav.alerts": "எச்சரிக்கைகள்",
    "nav.map": "வரைபடம்",
    "nav.teams": "உதவி குழுக்கள்",
    "nav.sos": "அவசரநிலை",
    "emergency.sos": "இப்போதே எனக்கு உதவுங்கள்",
    "emergency.safe": "நான் பாதுகாப்பாக இருக்கிறேன்",
    "status.safe": "எல்லாம் சரி",
    "action.safe": "நான் பாதுகாப்பாக இருக்கிறேன் - எச்சரிக்கைகளை நிறுத்துங்கள்",
  },
  gu: {
    "app.title": "ResQ",
    "app.subtitle": "ઝડપી બચાવ",
    "app.tagline": "તમારી કટોકટીની મદદ",
    "app.description": "ઝડપથી મદદ મેળવો. સુરક્ષિત રહો. ઉપયોગમાં સરળ.",
    "nav.home": "ઘર",
    "nav.alerts": "ચેતવણીઓ",
    "nav.map": "નકશો",
    "nav.teams": "મદદ ટીમો",
    "nav.sos": "કટોકટી",
    "emergency.sos": "હવે મને મદદ કરો",
    "emergency.safe": "હું સુરક્ષિત છું",
    "status.safe": "બધું સાફ",
    "action.safe": "હું સુરક્ષિત છું - ચેતવણીઓ બંધ કરો",
  },
  ur: {
    "app.title": "ResQ",
    "app.subtitle": "فوری بچاؤ",
    "app.tagline": "آپ کی ہنگامی مدد",
    "app.description": "جلدی مدد حاصل کریں۔ محفوظ رہیں۔ استعمال میں آسان۔",
    "nav.home": "گھر",
    "nav.alerts": "انتباہات",
    "nav.map": "نقشہ",
    "nav.teams": "مدد کی ٹیمیں",
    "nav.sos": "ہنگامی حالت",
    "emergency.sos": "ابھی میری مدد کریں",
    "emergency.safe": "میں محفوظ ہوں",
    "status.safe": "سب ٹھیک ہے",
    "action.safe": "میں محفوظ ہوں - انتباہات بند کریں",
  },
  kn: {
    "app.title": "ResQ",
    "app.subtitle": "ತ್ವರಿತ ರಕ್ಷಣೆ",
    "app.tagline": "ನಿಮ್ಮ ತುರ್ತು ಸಹಾಯ",
    "app.description": "ಬೇಗ ಸಹಾಯ ಪಡೆಯಿರಿ. ಸುರಕ್ಷಿತವಾಗಿರಿ. ಬಳಸಲು ಸುಲಭ.",
    "nav.home": "ಮನೆ",
    "nav.alerts": "ಎಚ್ಚರಿಕೆಗಳು",
    "nav.map": "ನಕ್ಷೆ",
    "nav.teams": "ಸಾಹಾಯ ತಂಡಗಳು",
    "nav.sos": "ತುರ್ತುಸ್ಥಿತಿ",
    "emergency.sos": "ಈಗಲೇ ನನಗೆ ಸಹಾಯ ಮಾಡಿ",
    "emergency.safe": "ನಾನು ಸುರಕ್ಷಿತವಾಗಿದ್ದೇನೆ",
    "status.safe": "ಎಲ್ಲವೂ ಸರಿ",
    "action.safe": "ನಾನು ಸುರಕ್ಷಿತವಾಗಿದ್ದೇನೆ - ಎಚ್ಚರಿಕೆಗಳನ್ನು ನಿಲ್ಲಿಸಿ",
  },
  or: {
    "app.title": "ResQ",
    "app.subtitle": "ଶୀଘ୍ର ଉଦ୍ଧାର",
    "app.tagline": "ଆପଣଙ୍କର ଜରୁରୀକାଳୀନ ସାହାଯ୍ୟ",
    "app.description": "ଶୀଘ୍ର ସାହାଯ୍ୟ ପାଆନ୍ତୁ। ସୁରକ୍ଷିତ ରୁହନ୍ତୁ। ବ୍ୟବହାର କରିବାକୁ ସହଜ।",
    "nav.home": "ଘର",
    "nav.alerts": "ସତର୍କତା",
    "nav.map": "ମାନଚିତ୍ର",
    "nav.teams": "ସାହାଯ୍ୟ ଦଳ",
    "nav.sos": "ଜରୁରୀକାଳୀନ",
    "emergency.sos": "ଏବେ ମୋତେ ସାହାଯ୍ୟ କରନ୍ତୁ",
    "emergency.safe": "ମୁଁ ସୁରକ୍ଷିତ ଅଛି",
    "status.safe": "ସବୁ ଠିକ୍ ଅଛି",
    "action.safe": "ମୁଁ ସୁରକ୍ଷିତ ଅଛି - ସତର୍କତା ବନ୍ଦ କରନ୍ତୁ",
  },
  ml: {
    "app.title": "ResQ",
    "app.subtitle": "വേഗത്തിലുള്ള രക്ഷാപ്രവർത്തനം",
    "app.tagline": "നിങ്ങളുടെ അടിയന്തര സഹായം",
    "app.description": "വേഗത്തിൽ സഹായം നേടുക. സുരക്ഷിതമായിരിക്കുക. ഉപയോഗിക്കാൻ എളുപ്പം.",
    "nav.home": "വീട്",
    "nav.alerts": "മുന്നറിയിപ്പുകൾ",
    "nav.map": "ഭൂപടം",
    "nav.teams": "സഹായ സംഘങ്ങൾ",
    "nav.sos": "അടിയന്തരാവസ്ഥ",
    "emergency.sos": "ഇപ്പോൾ എന്നെ സഹായിക്കുക",
    "emergency.safe": "ഞാൻ സുരക്ഷിതനാണ്",
    "status.safe": "എല്ലാം ശരിയാണ്",
    "action.safe": "ഞാൻ സുരക്ഷിതനാണ് - മുന്നറിയിപ്പുകൾ നിർത്തുക",
  },
  pa: {
    "app.title": "ResQ",
    "app.subtitle": "ਤੇਜ਼ ਬਚਾਅ",
    "app.tagline": "ਤੁਹਾਡੀ ਐਮਰਜੈਂਸੀ ਮਦਦ",
    "app.description": "ਜਲਦੀ ਮਦਦ ਲਓ। ਸੁਰੱਖਿਤ ਰਹੋ। ਵਰਤਣ ਵਿੱਚ ਆਸਾਨ।",
    "nav.home": "ਘਰ",
    "nav.alerts": "ਚੇਤਾਵਨੀਆਂ",
    "nav.map": "ਨਕਸ਼ਾ",
    "nav.teams": "ਮਦਦ ਟੀਮਾਂ",
    "nav.sos": "ਐਮਰਜੈਂਸੀ",
    "emergency.sos": "ਹੁਣੇ ਮੇਰੀ ਮਦਦ ਕਰੋ",
    "emergency.safe": "ਮੈਂ ਸੁਰੱਖਿਤ ਹਾਂ",
    "status.safe": "ਸਭ ਕੁਝ ਠੀਕ ਹੈ",
    "action.safe": "ਮੈਂ ਸੁਰੱਖਿਤ ਹਾਂ - ਚੇਤਾਵਨੀਆਂ ਬੰਦ ਕਰੋ",
  },
  as: {
    "app.title": "ResQ",
    "app.subtitle": "দ্ৰুত উদ্ধাৰ",
    "app.tagline": "আপোনাৰ জৰুৰীকালীন সহায়",
    "app.description": "দ্ৰুতভাৱে সহায় লওক। সুৰক্ষিত থাকক। ব্যৱহাৰ কৰিবলৈ সহজ।",
    "nav.home": "ঘৰ",
    "nav.alerts": "সতৰ্কবাণী",
    "nav.map": "মানচিত্ৰ",
    "nav.teams": "সহায় দল",
    "nav.sos": "জৰুৰীকালীন",
    "emergency.sos": "এতিয়াই মোক সহায় কৰক",
    "emergency.safe": "মই সুৰক্ষিত আছো",
    "status.safe": "সকলো ঠিক আছে",
    "action.safe": "মই সুৰক্ষিত আছো - সতৰ্কবাণী বন্ধ কৰক",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === "ur" ? "rtl" : "ltr"
  }, [language])
  
  const t = (key: string): string => {
    const translation = translations[language]?.[key as keyof (typeof translations)[typeof language]]
    return translation || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export const languages = [
  { code: "en" as Language, name: "English", flag: "🇮🇳", native: "English" },
  { code: "hi" as Language, name: "Hindi", flag: "🇮🇳", native: "हिंदी" },
  { code: "bn" as Language, name: "Bengali", flag: "🇮🇳", native: "বাংলা" },
  { code: "te" as Language, name: "Telugu", flag: "🇮🇳", native: "తెలుగు" },
  { code: "mr" as Language, name: "Marathi", flag: "🇮🇳", native: "मराठी" },
  { code: "ta" as Language, name: "Tamil", flag: "🇮🇳", native: "தமிழ்" },
  { code: "gu" as Language, name: "Gujarati", flag: "🇮🇳", native: "ગુજરાતી" },
  { code: "kn" as Language, name: "Kannada", flag: "🇮🇳", native: "ಕನ್ನಡ" },
  { code: "or" as Language, name: "Odia", flag: "🇮🇳", native: "ଓଡ଼ିଆ" },
  { code: "ml" as Language, name: "Malayalam", flag: "🇮🇳", native: "മലയാളം" },
]

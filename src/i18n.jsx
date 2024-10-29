import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'fr',
    resources: {
      en: {
        translation: {
            "title": "Web Developer",
            "home": "Home",
            "resume": "My Resume",
            "intro": "Freshly graduated web developer, I am constantly seeking for new opportunities to enhance my skills. My strong curiosity, diligent work ethic and communication abilities make me a valuable asset to your company and projects. I am available immediately for any type of contract in France, Japan, or elsewhere in the world.",
            "skills": "My Skills",
            "about": "About Me",
            "about-text": "First, I graduated with a degree in Physical Measurements then a Sound Engineer bachelor degree, beginning my career as an assistant and sound engineer in the audiovisual industry. I then fulfilled a lifelong dream by spending a year discovering Japan. During this experience, I developed a passion for web development and programming. Now, with a government-recognized qualification as a web developer, I am seeking a new position where I can fully thrive. ",
            "about-text2": "Outside of programming, I have a passion for video games, music, and bouldering. These activities allow me to clear my mind and also fuel my creativity. "
          }
      },
      fr: {
        translation: {
            "title": "Développeur Web",
            "home": "Acceuil",
            "resume": "Mon CV",
            "intro": "Développeur web fraîchement diplômé, je suis en constante recherche de nouvelles opportunités pour m’améliorer. Ma grande curiosité, mon travail sérieux et mes capacités de communications, font de moi un atout précieux pour votre entreprise et vos projets. Disponible dès à présent pour tous types de contrats en France, au Japon ou ailleurs dans le monde.",
            "skills": "Mes Compétences",
            "about": "À propos",
            "about-text": "D’abord diplômé d’un IUT Mesure Physique, puis de l’ISTS Paris j’ai commencé ma vie professionnelle à travailler en tant qu’assistant et ingénieur du son dans l’audiovisuel. Ensuite j’ai réalisé le rêve de ma vie en partant à la découverte du Japon pendant un an. C’est durant cette expérience que je me suis passionné pour le développement web et la programmation.  Maintenant titulaire d’un diplôme reconnu par l’état en tant que développeur web, je suis à la recherche d’un nouveau travail dans lequel je pourrai m’épanouir pleinement. ",
            "about-text2": "En dehors de la programmation, je me passionne pour les jeux vidéo, la musique et l’escalade. Ces activités sont pour moi une façon de faire le vide dans mon esprit mais aussi de nourrir ma créativité. "
        }
      }
    }
  });

export default i18n;
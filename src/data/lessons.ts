export interface Lesson {
  id: number;
  title: string;
  content: string;
  code?: string;
}

export const lessons: Lesson[] = [
  {
    id: 1,
    title: "Introduction à JavaScript",
    content: `JavaScript est un langage de programmation polyvalent qui permet de créer des sites web interactifs.

Points clés de cette leçon :
• Histoire de JavaScript
• Rôle dans le développement web
• Outils nécessaires pour commencer`,
    code: `// Votre premier code JavaScript
console.log("Bonjour le monde!");`
  },
  {
    id: 2,
    title: "Variables et Types de Données",
    content: `Découvrez comment stocker et manipuler différents types de données en JavaScript.

Types principaux :
• Nombres (numbers)
• Chaînes de caractères (strings)
• Booléens (booleans)
• Tableaux (arrays)
• Objets (objects)`,
    code: `// Déclaration de variables
let nom = "Alice";
const age = 25;
let estEtudiant = true;`
  },
  {
    id: 3,
    title: "Opérateurs et Expressions",
    content: `Apprenez à manipuler les données avec les opérateurs JavaScript.

• Opérateurs arithmétiques (+, -, *, /, %)
• Opérateurs de comparaison (==, ===, !=, !==)
• Opérateurs logiques (&&, ||, !)`,
    code: `// Exemples d'opérations
let somme = 10 + 5;  // 15
let estMajeur = age >= 18;  // true
let peutVoter = estMajeur && estCitoyen;`
  },
  {
    id: 4,
    title: "Structures Conditionnelles",
    content: `Découvrez comment prendre des décisions dans votre code.

• if / else
• switch / case
• Opérateur ternaire`,
    code: `// Structure if/else
if (age >= 18) {
  console.log("Majeur");
} else {
  console.log("Mineur");
}`
  },
  {
    id: 5,
    title: "Boucles et Itérations",
    content: `Apprenez à répéter des actions avec les boucles.

• Boucle for
• Boucle while
• Boucle do...while
• forEach pour les tableaux`,
    code: `// Exemple de boucle for
for (let i = 0; i < 5; i++) {
  console.log(\`Itération \${i}\`);
}`
  },
  {
    id: 6,
    title: "Fonctions",
    content: `Les fonctions sont des blocs de code réutilisables.

• Déclaration de fonctions
• Paramètres et arguments
• Valeur de retour
• Fonctions fléchées`,
    code: `// Déclaration de fonction
function calculerAge(anneeNaissance) {
  return 2024 - anneeNaissance;
}

// Fonction fléchée
const saluer = (nom) => \`Bonjour \${nom}!\`;`
  },
  {
    id: 7,
    title: "Tableaux (Arrays)",
    content: `Les tableaux permettent de stocker des collections de données.

• Création et manipulation
• Méthodes principales (push, pop, shift, unshift)
• Parcours de tableaux
• Méthodes map, filter, reduce`,
    code: `// Manipulation de tableaux
const fruits = ['pomme', 'banane', 'orange'];
fruits.push('fraise');
const longueurs = fruits.map(fruit => fruit.length);`
  },
  {
    id: 8,
    title: "Objets",
    content: `Les objets permettent de regrouper des données connexes.

• Création d'objets
• Propriétés et méthodes
• This keyword
• Object destructuring`,
    code: `const personne = {
  nom: 'Marie',
  age: 25,
  saluer() {
    return \`Bonjour, je m'appelle \${this.nom}\`;
  }
};`
  },
  {
    id: 9,
    title: "DOM Manipulation",
    content: `Apprenez à interagir avec la page web.

• Sélection d'éléments
• Modification du contenu
• Gestion des événements
• Création d'éléments`,
    code: `// Manipulation du DOM
const titre = document.querySelector('h1');
titre.textContent = 'Nouveau titre';
titre.addEventListener('click', () => {
  console.log('Titre cliqué');
});`
  },
  {
    id: 10,
    title: "Événements",
    content: `Gérez les interactions utilisateur.

• Types d'événements
• Event listeners
• Event bubbling
• Event delegation`,
    code: `document.getElementById('bouton')
  .addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Bouton cliqué');
  });`
  },
  {
    id: 11,
    title: "Asynchrone - Promesses",
    content: `Comprendre la programmation asynchrone.

• Promesses
• then/catch
• async/await
• Gestion des erreurs`,
    code: `async function chargerDonnees() {
  try {
    const reponse = await fetch('api/data');
    const donnees = await reponse.json();
    return donnees;
  } catch (erreur) {
    console.error(erreur);
  }
}`
  },
  {
    id: 12,
    title: "API Fetch",
    content: `Communiquez avec des API externes.

• Requêtes HTTP
• Méthodes GET, POST
• Headers et options
• Traitement des réponses`,
    code: `fetch('https://api.exemple.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));`
  },
  {
    id: 13,
    title: "Classes et POO",
    content: `Programmation Orientée Objet en JavaScript.

• Définition de classes
• Constructor
• Méthodes et propriétés
• Héritage`,
    code: `class Animal {
  constructor(nom) {
    this.nom = nom;
  }
  
  parler() {
    console.log(\`\${this.nom} fait du bruit\`);
  }
}`
  },
  {
    id: 14,
    title: "Modules ES6",
    content: `Organisation du code en modules.

• Import/Export
• Modules nommés
• Export par défaut
• Gestion des dépendances`,
    code: `// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// main.js
import { add, subtract } from './math.js';`
  },
  {
    id: 15,
    title: "Gestion d'Erreurs",
    content: `Techniques de gestion des erreurs.

• Try/Catch
• Throw
• Types d'erreurs
• Erreurs personnalisées`,
    code: `try {
  throw new Error('Une erreur est survenue');
} catch (erreur) {
  console.error(erreur.message);
} finally {
  console.log('Nettoyage...');
}`
  },
  {
    id: 16,
    title: "Regex",
    content: `Expressions régulières en JavaScript.

• Patterns
• Méthodes test et match
• Groupes de capture
• Flags`,
    code: `const email = "test@example.com";
const emailRegex = /^[\\w-]+(\\.[\\w-]+)*@[\\w-]+(\\.[\\w-]+)*$/;
console.log(emailRegex.test(email));`
  },
  {
    id: 17,
    title: "Map et Set",
    content: `Collections de données avancées.

• Map vs Object
• Set vs Array
• WeakMap et WeakSet
• Cas d'utilisation`,
    code: `const map = new Map();
map.set('clé', 'valeur');

const set = new Set([1, 2, 2, 3, 3]);
console.log([...set]); // [1, 2, 3]`
  },
  {
    id: 18,
    title: "JSON",
    content: `Manipulation de données JSON.

• Parse et Stringify
• Validation
• Transformation
• Storage API`,
    code: `const obj = { nom: 'Jean', age: 30 };
const json = JSON.stringify(obj);
const parsed = JSON.parse(json);`
  },
  {
    id: 19,
    title: "Storage APIs",
    content: `Stockage côté client.

• localStorage
• sessionStorage
• Cookies
• IndexedDB`,
    code: `// localStorage
localStorage.setItem('user', 'Jean');
const user = localStorage.getItem('user');`
  },
  {
    id: 20,
    title: "Date et Temps",
    content: `Manipulation des dates.

• Objet Date
• Formats
• Calculs
• Timezone`,
    code: `const now = new Date();
const timestamp = now.getTime();
const formatted = now.toLocaleDateString('fr-FR');`
  },
  {
    id: 21,
    title: "ES6+ Features",
    content: `Fonctionnalités modernes de JavaScript.

• Destructuring
• Spread operator
• Rest parameters
• Template literals`,
    code: `// Destructuring
const { nom, age } = personne;
const [premier, ...reste] = tableau;`
  },
  {
    id: 22,
    title: "Animations JavaScript",
    content: `Création d'animations.

• requestAnimationFrame
• Transitions
• Animations CSS
• Canvas basics`,
    code: `function animate() {
  requestAnimationFrame(animate);
  element.style.transform = \`translateX(\${x}px)\`;
}`
  },
  {
    id: 23,
    title: "Web APIs",
    content: `APIs du navigateur.

• Geolocation
• Clipboard
• Notifications
• File API`,
    code: `navigator.geolocation.getCurrentPosition(
  position => {
    const { latitude, longitude } = position.coords;
    console.log(\`Lat: \${latitude}, Long: \${longitude}\`);
  }
);`
  },
  {
    id: 24,
    title: "Performance",
    content: `Optimisation des performances.

• Debounce/Throttle
• Memoization
• Web Workers
• Performance API`,
    code: `function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}`
  },
  {
    id: 25,
    title: "Testing",
    content: `Tests en JavaScript.

• Jest basics
• Test unitaires
• Mocking
• Test coverage`,
    code: `test('addition', () => {
  expect(add(2, 2)).toBe(4);
  expect(add(0, 0)).toBe(0);
});`
  },
  {
    id: 26,
    title: "Sécurité",
    content: `Bonnes pratiques de sécurité.

• XSS Prevention
• CSRF
• Input validation
• Sanitization`,
    code: `// Exemple de sanitization
const sanitize = (input) => {
  return input.replace(/[<>]/g, '');
};`
  },
  {
    id: 27,
    title: "Debugging",
    content: `Techniques de debugging.

• Console methods
• Debugger
• Sources panel
• Break points`,
    code: `// Debugging
console.log('Debug info');
console.table(data);
debugger;
console.trace();`
  },
  {
    id: 28,
    title: "Design Patterns",
    content: `Patterns de conception courants.

• Singleton
• Observer
• Factory
• Module pattern`,
    code: `// Singleton pattern
const Singleton = (function() {
  let instance;
  return {
    getInstance() {
      if (!instance) instance = new Object();
      return instance;
    }
  };
})();`
  },
  {
    id: 29,
    title: "Accessibilité",
    content: `Développement accessible.

• ARIA attributes
• Keyboard navigation
• Screen readers
• Focus management`,
    code: `const button = document.createElement('button');
button.setAttribute('aria-label', 'Fermer');
button.addEventListener('keydown', handleKeyboard);`
  },
  {
    id: 30,
    title: "Projet Final",
    content: `Mettez en pratique tout ce que vous avez appris.

• Planification
• Implementation
• Testing
• Deployment

C'est le moment de créer votre propre application en utilisant les concepts appris !`,
    code: `// Votre projet final commence ici !
// Utilisez tout ce que vous avez appris
// pour créer quelque chose d'extraordinaire !`
  }
];
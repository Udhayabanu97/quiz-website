export interface Question {
  id: number;
  question: string;
  options: string[];
  answerIndex: number;
  correctAnswer: string;
}

const quizData: Question[] = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Rome"],
    answerIndex: 0,
    correctAnswer: "Paris",
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mercury", "Jupiter", "Mars"],
    answerIndex: 0,
    correctAnswer: "Mars",
  },
  {
    id: 3,
    question: "Which operating system is developed by Apple Inc.?",
    options: ["macOS", "Windows", "Linux", "Android"],
    answerIndex: 0,
    correctAnswer: "macOS",
  },
  {
    id: 4,
    question: "What is the chemical symbol for gold?",
    options: ["Ag", "Fe", "Au", "Hg"],
    answerIndex: 0,
    correctAnswer: "Au",
  },
  {
    id: 5,
    question: "What is the deepest point in the ocean?",
    options: [
      "Puerto Rico Trench",
      "Tonga Trench",
      "Java Trench",
      "Mariana Trench",
    ],
    answerIndex: 0,
    correctAnswer: "Mariana Trench",
  },
  {
    id: 6,
    question: "Who painted the Mona Lisa?",
    options: [
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Vincent van Gogh",
      "Michelangelo",
    ],
    answerIndex: 0,
    correctAnswer: "Leonardo da Vinci",
  },
  {
    id: 7,
    question: "What does URL stand for?",
    options: [
      "Uniform Resource Locator",
      "Universal Reference Locator",
      "Unified Resource Link",
      "Universal Routing Language",
    ],
    answerIndex: 0,
    correctAnswer: "Uniform Resource Locator",
  },
  {
    id: 8,
    question: "What is the main ingredient in guacamole?",
    options: ["Tomato", "Avocado", "Onion", "Lime"],
    answerIndex: 0,
    correctAnswer: "Avocado",
  },
  {
    id: 9,
    question: "What is the smallest country in the world?",
    options: ["Monaco", "Vatican City", "Nauru", "Tuvalu"],
    answerIndex: 0,
    correctAnswer: "Vatican City",
  },
  {
    id: 10,
    question: "What is the largest organ in the human body?",
    options: ["Skin", "Liver", "Heart", "Lungs"],
    answerIndex: 0,
    correctAnswer: "Skin",
  },
  {
    id: 11,
    question: "What is the primary function of RAM?",
    options: [
      "Long-term data storage",
      "Booting the operating system",
      "Temporary data storage",
      "Connecting to the internet",
    ],
    answerIndex: 0,
    correctAnswer: "Temporary data storage",
  },
  {
    id: 12,
    question: "What does an operating system do?",
    options: [
      "Manages computer hardware",
      "Provides a user interface",
      "All of the above",
      " Only browses the internet",
    ],
    answerIndex: 0,
    correctAnswer: "All of the above",
  },
  {
    id: 13,
    question:
      "Which of the following is NOT a high-level programming language?",
    options: ["Python", "Assembly Language", "Java", "C++"],
    answerIndex: 0,
    correctAnswer: "Assembly Language",
  },
  {
    id: 14,
    question:
      "What is a program that allows users to browse the internet called?",
    options: ["Search Engine", "Web Server", "Web Browser", "Website"],
    answerIndex: 0,
    correctAnswer: "Web Browser",
  },
  {
    id: 15,
    question: "What is the currency of Japan?",
    options: ["Yen", "Yuan", "Won", "Euro"],
    answerIndex: 0,
    correctAnswer: "Yen",
  },
  {
    id: 16,
    question: "Who was the first woman to win a Nobel Prize?",
    options: [
      "Marie Curie",
      "Mother Teresa",
      "Rosa Parks",
      " Malala Yousafzai",
    ],
    answerIndex: 0,
    correctAnswer: "Marie Curie",
  },
  {
    id: 17,
    question: "What was the name given to Android 4.3?",
    options: ["Lollipop", "Nutella", "Froyo", "Malala Yousafzai"],
    answerIndex: 0,
    correctAnswer: "Nutella",
  },
  {
    id: 18,
    question: "who is the founder of Facebook?",
    options: ["Mark Zuckerberg", "Jeff Bezos", "Bill Gates", "Larry Page"],
    answerIndex: 0,
    correctAnswer: "Mark Zuckerberg",
  },
  {
    id: 19,
    question: "What is the scientific name for the voice box?",
    options: ["Larynx", "Trachea", "Pharynx", "Bronchus"],
    answerIndex: 0,
    correctAnswer: "Larynx",
  },
  {
    id: 20,
    question: "What country is most associated with the invention of pizza?",
    options: ["France", "Greece", "Italy", "China"],
    answerIndex: 0,
    correctAnswer: "Italy",
  },
  {
    id: 21,
    question: "What is the fear of public speaking called?",
    options: [
      "Stage fright",
      "Social mutism",
      "Glossophobia",
      "Performance anxiety",
    ],
    answerIndex: 0,
    correctAnswer: "Glossophobia",
  },
  {
    id: 22,
    question:
      "What is the process of finding and fixing errors in code called?",
    options: ["Compiling", "Interpreting", "Debugging", "Linking"],
    answerIndex: 0,
    correctAnswer: "Debugging",
  },
  {
    id: 23,
    question: "What is the basic unit of heredity in living organisms?",
    options: ["Cell", "Gene", "Organ", "Tissue"],
    answerIndex: 0,
    correctAnswer: "Gene",
  },
  {
    id: 24,
    question: "In which language is 'Hola' a greeting meaning 'Hello'?",
    options: ["French", "Spanish", "Italian", "German"],
    answerIndex: 0,
    correctAnswer: "Spanish",
  },
  {
    id: 25,
    question: "What is the scientific study of weather patterns called?",
    options: ["Geology", "Meteorology", "Astronomy", "Oceanography"],
    answerIndex: 0,
    correctAnswer: "Meteorology",
  },
];

export default quizData;

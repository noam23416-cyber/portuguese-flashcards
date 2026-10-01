// ===================================================================
// Portuguese (Brazilian) Learning Content
// Structure: LEVELS (groups of lessons, increasing difficulty)
//            LESSONS (each has 10 cards: pt / he / en)
// To add more content later: add new card objects to a lesson's
// `cards` array (keep ~10 per lesson), or add a whole new lesson
// object and reference its id inside a level's `lessons` array.
// ===================================================================

// Each level belongs to a "category" — shown under one of the two tabs
// on the home screen: "words" (vocabulary/grammar) or "numbers".
const LEVELS = [
  {
    id: 1,
    category: "words",
    title: { he: "יסודות", en: "Basics" },
    lessons: [1, 4, 5, 56, 57]
  },
  {
    id: 2,
    category: "words",
    title: { he: "חיי היומיום", en: "Daily Life" },
    lessons: [6, 7, 8, 9, 10]
  },
  {
    id: 3,
    category: "words",
    title: { he: "פעלים ותיאורים", en: "Verbs & Descriptions" },
    lessons: [11, 12, 13, 14, 15]
  },
  {
    id: 4,
    category: "words",
    title: { he: "שיחה", en: "Conversation" },
    lessons: [16, 17, 18, 19, 20]
  },
  {
    id: 5,
    category: "words",
    title: { he: "מתקדם", en: "Advanced" },
    lessons: [21, 22, 24, 25, 58]
  },
  {
    id: 6,
    category: "words",
    title: { he: "הטיית פעלים בהווה", en: "Present Tense Conjugations" },
    lessons: [26, 27, 28, 29, 30]
  },
  {
    id: 7,
    category: "words",
    title: { he: "הטיית פעלים בהווה 2", en: "Present Tense Conjugations 2" },
    lessons: [31, 32, 33, 34, 35]
  },
  {
    id: 8,
    category: "words",
    title: { he: "הטיית פעלים בעבר", en: "Past Tense Conjugations" },
    lessons: [36, 37, 38, 39, 40]
  },
  {
    id: 9,
    category: "words",
    title: { he: "הטיית פעלים בעבר 2", en: "Past Tense Conjugations 2" },
    lessons: [41, 42, 43, 44, 45]
  },
  {
    id: 10,
    category: "words",
    title: { he: "עתיד ואוצר מילים נוסף", en: "Future Tense & More Vocabulary" },
    lessons: [46, 47, 48, 49, 50]
  },
  {
    id: 12,
    category: "numbers",
    title: { he: "מספרים 0-19", en: "Numbers 0-19" },
    lessons: [2, 3]
  },
  {
    id: 13,
    category: "numbers",
    title: { he: "מספרים עגולים (20-1000)", en: "Round Numbers (20-1000)" },
    lessons: [23]
  },
  {
    id: 11,
    category: "numbers",
    title: { he: "מספרים מלאים עד 1000", en: "Full Numbers up to 1000" },
    lessons: [51, 52, 53, 54, 55]
  },
  {
    id: 14,
    category: "numbers",
    title: { he: "תרגול מספרים אקראי", en: "Random Number Drill" },
    lessons: [59, 60, 61, 62, 63]
  },
  {
    id: 15,
    category: "sentences",
    title: { he: "פעלים נפוצים - השלמת משפטים", en: "Common Verbs - Fill in the Blank" },
    lessons: [64, 65, 66, 67, 68, 69, 70]
  },
  {
    id: 16,
    category: "sentences",
    title: { he: "פעלים נוספים - השלמת משפטים", en: "More Verbs - Fill in the Blank" },
    lessons: [71, 72, 73, 74, 75, 76, 77, 78]
  },
  {
    id: 17,
    category: "sentences",
    title: { he: "תרגול משפטים (מהשיעורים)", en: "Sentence Practice (from lessons)" },
    lessons: [79, 80, 81, 82, 83, 84, 85, 86, 87]
  },
  {
    id: 18,
    category: "words",
    title: { he: "בריאות, מטבח וטבע", en: "Health, Kitchen & Nature" },
    lessons: [88, 89, 90, 91, 92]
  },
  {
    id: 19,
    category: "words",
    title: { he: "ביגוד, תחבורה ומקצועות", en: "Clothing, Transport & Professions" },
    lessons: [93, 94, 95, 96, 97]
  },
  {
    id: 20,
    category: "words",
    title: { he: "בית ספר ואוכל", en: "School & Food" },
    lessons: [98, 99, 100, 101, 102]
  },
  {
    id: 21,
    category: "words",
    title: { he: "חומרים, פעלים ותארים", en: "Materials, Verbs & Adjectives" },
    lessons: [103, 104, 105, 106, 107]
  },
  {
    id: 22,
    category: "words",
    title: { he: "טכנולוגיה, כלים וים", en: "Tech, Tools & Beach" },
    lessons: [108, 109, 110, 111, 112]
  },
  {
    id: 23,
    category: "words",
    title: { he: "משפחה, קישור ושגרה", en: "Family, Connectors & Routine" },
    lessons: [113, 114, 115, 116, 117]
  },
  {
    id: 24,
    category: "words",
    title: { he: "גיאוגרפיה, ספורט ומדע", en: "Geography, Sports & Science" },
    lessons: [118, 119, 120, 121, 122]
  },
  {
    id: 25,
    category: "words",
    title: { he: "סלנג, בישול ואינטרנט", en: "Slang, Cooking & Internet" },
    lessons: [123, 124, 125, 126, 127]
  },
  {
    id: 26,
    category: "words",
    title: { he: "טיפוח, רכב ומזג אוויר", en: "Personal Care, Car & Weather" },
    lessons: [128, 129, 130, 131, 132]
  },
  {
    id: 27,
    category: "words",
    title: { he: "בית, משרד ואירועים", en: "House, Office & Events" },
    lessons: [133, 134, 135, 136, 137]
  },
  {
    id: 28,
    category: "words",
    title: { he: "שלילה, מידות וחירום", en: "Negation, Measures & Emergency" },
    lessons: [138, 139, 140, 141, 142]
  },
  {
    id: 29,
    category: "words",
    title: { he: "עבודה, רגשות וטבע", en: "Work, Emotions & Nature" },
    lessons: [143, 144, 145, 146, 147]
  },
  {
    id: 30,
    category: "sentences",
    title: { he: "פעלים -ER - השלמת משפטים", en: "-ER Verbs - Fill in the Blank" },
    lessons: [148, 149, 150, 151, 152, 153, 154, 155, 156, 157]
  },
  {
    id: 31,
    category: "sentences",
    title: { he: "פעלים -IR - השלמת משפטים", en: "-IR Verbs - Fill in the Blank" },
    lessons: [158, 159, 160, 161, 162, 163, 164, 165, 166, 167]
  },
  {
    id: 32,
    category: "sentences",
    title: { he: "פעלים לא רגילים נוספים", en: "More Irregular Verbs" },
    lessons: [168, 169, 170, 171, 172]
  },
  {
    id: 33,
    category: "numbers",
    title: { he: "תרגול מספרים אקראי 2", en: "Random Number Drill 2" },
    lessons: [173, 174, 175, 176, 177, 178, 179, 180, 181, 182]
  }
];

const LESSONS = [
  {
    id: 1,
    level: 1,
    title: { he: "ברכות ונימוס", en: "Greetings & Politeness" },
    cards: [
      { pt: "Olá", he: "שלום", en: "Hello" },
      { pt: "Oi", he: "היי", en: "Hi" },
      { pt: "Bom dia", he: "בוקר טוב", en: "Good morning" },
      { pt: "Boa tarde", he: "צהריים טובים", en: "Good afternoon" },
      { pt: "Boa noite", he: "ערב טוב / לילה טוב", en: "Good evening / night" },
      { pt: "Por favor", he: "בבקשה", en: "Please" },
      { pt: "Obrigado", he: "תודה (גבר מדבר)", en: "Thank you (male speaker)" },
      { pt: "De nada", he: "על לא דבר", en: "You're welcome" },
      { pt: "Com licença", he: "סליחה (לבקש רשות)", en: "Excuse me" },
      { pt: "Desculpa", he: "סליחה (התנצלות)", en: "Sorry" }
    ]
  },
  {
    id: 2,
    level: 12,
    title: { he: "מספרים 0-9", en: "Numbers 0-9" },
    cards: [
      { pt: "zero", he: "אפס", en: "zero" },
      { pt: "um", he: "אחת", en: "one" },
      { pt: "dois", he: "שתיים", en: "two" },
      { pt: "três", he: "שלוש", en: "three" },
      { pt: "quatro", he: "ארבע", en: "four" },
      { pt: "cinco", he: "חמש", en: "five" },
      { pt: "seis", he: "שש", en: "six" },
      { pt: "sete", he: "שבע", en: "seven" },
      { pt: "oito", he: "שמונה", en: "eight" },
      { pt: "nove", he: "תשע", en: "nine" }
    ]
  },
  {
    id: 3,
    level: 12,
    title: { he: "מספרים 10-19", en: "Numbers 10-19" },
    cards: [
      { pt: "dez", he: "עשר", en: "ten" },
      { pt: "onze", he: "אחת עשרה", en: "eleven" },
      { pt: "doze", he: "שתים עשרה", en: "twelve" },
      { pt: "treze", he: "שלוש עשרה", en: "thirteen" },
      { pt: "quatorze", he: "ארבע עשרה", en: "fourteen" },
      { pt: "quinze", he: "חמש עשרה", en: "fifteen" },
      { pt: "dezesseis", he: "שש עשרה", en: "sixteen" },
      { pt: "dezessete", he: "שבע עשרה", en: "seventeen" },
      { pt: "dezoito", he: "שמונה עשרה", en: "eighteen" },
      { pt: "dezenove", he: "תשע עשרה", en: "nineteen" }
    ]
  },
  {
    id: 4,
    level: 1,
    title: { he: "צבעים", en: "Colors" },
    cards: [
      { pt: "vermelho", he: "אדום", en: "red" },
      { pt: "azul", he: "כחול", en: "blue" },
      { pt: "verde", he: "ירוק", en: "green" },
      { pt: "amarelo", he: "צהוב", en: "yellow" },
      { pt: "preto", he: "שחור", en: "black" },
      { pt: "branco", he: "לבן", en: "white" },
      { pt: "rosa", he: "ורוד", en: "pink" },
      { pt: "roxo", he: "סגול", en: "purple" },
      { pt: "cinza", he: "אפור", en: "gray" },
      { pt: "marrom", he: "חום", en: "brown" }
    ]
  },
  {
    id: 5,
    level: 1,
    title: { he: "משפחה", en: "Family" },
    cards: [
      { pt: "mãe", he: "אמא", en: "mother" },
      { pt: "pai", he: "אבא", en: "father" },
      { pt: "filho", he: "בן", en: "son" },
      { pt: "filha", he: "בת", en: "daughter" },
      { pt: "irmão", he: "אח", en: "brother" },
      { pt: "irmã", he: "אחות", en: "sister" },
      { pt: "avô", he: "סבא", en: "grandfather" },
      { pt: "avó", he: "סבתא", en: "grandmother" },
      { pt: "tio", he: "דוד", en: "uncle" },
      { pt: "tia", he: "דודה", en: "aunt" }
    ]
  },
  {
    id: 6,
    level: 2,
    title: { he: "אוכל ומשקאות", en: "Food & Drinks" },
    cards: [
      { pt: "água", he: "מים", en: "water" },
      { pt: "pão", he: "לחם", en: "bread" },
      { pt: "arroz", he: "אורז", en: "rice" },
      { pt: "feijão", he: "שעועית", en: "beans" },
      { pt: "carne", he: "בשר", en: "meat" },
      { pt: "frango", he: "עוף (בשר)", en: "chicken (meat)" },
      { pt: "peixe", he: "דג", en: "fish" },
      { pt: "fruta", he: "פרי", en: "fruit" },
      { pt: "café", he: "קפה", en: "coffee" },
      { pt: "leite", he: "חלב", en: "milk" }
    ]
  },
  {
    id: 7,
    level: 2,
    title: { he: "חלקי גוף", en: "Body Parts" },
    cards: [
      { pt: "cabeça", he: "ראש", en: "head" },
      { pt: "olho", he: "עין", en: "eye" },
      { pt: "nariz", he: "אף", en: "nose" },
      { pt: "boca", he: "פה", en: "mouth" },
      { pt: "orelha", he: "אוזן", en: "ear" },
      { pt: "mão", he: "יד", en: "hand" },
      { pt: "pé", he: "כף רגל", en: "foot" },
      { pt: "braço", he: "זרוע", en: "arm" },
      { pt: "perna", he: "רגל", en: "leg" },
      { pt: "coração", he: "לב", en: "heart" }
    ]
  },
  {
    id: 8,
    level: 2,
    title: { he: "ביגוד", en: "Clothing" },
    cards: [
      { pt: "camisa", he: "חולצה", en: "shirt" },
      { pt: "calça", he: "מכנסיים", en: "pants" },
      { pt: "sapato", he: "נעל", en: "shoe" },
      { pt: "vestido", he: "שמלה", en: "dress" },
      { pt: "casaco", he: "מעיל", en: "coat" },
      { pt: "meia", he: "גרב", en: "sock" },
      { pt: "chapéu", he: "כובע", en: "hat" },
      { pt: "cinto", he: "חגורה", en: "belt" },
      { pt: "saia", he: "חצאית", en: "skirt" },
      { pt: "óculos", he: "משקפיים", en: "glasses" }
    ]
  },
  {
    id: 9,
    level: 2,
    title: { he: "הבית", en: "The House" },
    cards: [
      { pt: "casa", he: "בית", en: "house" },
      { pt: "quarto", he: "חדר שינה", en: "bedroom" },
      { pt: "cozinha", he: "מטבח", en: "kitchen" },
      { pt: "banheiro", he: "חדר אמבטיה", en: "bathroom" },
      { pt: "sala", he: "סלון", en: "living room" },
      { pt: "porta", he: "דלת", en: "door" },
      { pt: "janela", he: "חלון", en: "window" },
      { pt: "mesa", he: "שולחן", en: "table" },
      { pt: "cadeira", he: "כיסא", en: "chair" },
      { pt: "cama", he: "מיטה", en: "bed" }
    ]
  },
  {
    id: 10,
    level: 2,
    title: { he: "חיות", en: "Animals" },
    cards: [
      { pt: "cachorro", he: "כלב", en: "dog" },
      { pt: "gato", he: "חתול", en: "cat" },
      { pt: "pássaro", he: "ציפור", en: "bird" },
      { pt: "cavalo", he: "סוס", en: "horse" },
      { pt: "vaca", he: "פרה", en: "cow" },
      { pt: "porco", he: "חזיר", en: "pig" },
      { pt: "galinha", he: "תרנגולת", en: "hen / chicken" },
      { pt: "leão", he: "אריה", en: "lion" },
      { pt: "elefante", he: "פיל", en: "elephant" },
      { pt: "macaco", he: "קוף", en: "monkey" }
    ]
  },
  {
    id: 11,
    level: 3,
    title: { he: "הפועל SER (להיות - קביעות)", en: "Verb SER (to be - permanent)" },
    short: "SER - הווה",
    cards: [
      { pt: "eu sou", he: "אני", en: "I am" },
      { pt: "você é", he: "את/ה", en: "you are" },
      { pt: "ele é", he: "הוא", en: "he is" },
      { pt: "ela é", he: "היא", en: "she is" },
      { pt: "nós somos", he: "אנחנו", en: "we are" },
      { pt: "vocês são", he: "אתם/אתן", en: "you (pl.) are" },
      { pt: "eles são", he: "הם", en: "they are (masc.)" },
      { pt: "elas são", he: "הן", en: "they are (fem.)" },
      { pt: "Eu sou de Israel", he: "אני מישראל", en: "I am from Israel" },
      { pt: "Ela é professora", he: "היא מורה", en: "She is a teacher" }
    ]
  },
  {
    id: 12,
    level: 3,
    title: { he: "הפועל ESTAR (להיות - מצב)", en: "Verb ESTAR (to be - state)" },
    short: "ESTAR - הווה",
    cards: [
      { pt: "eu estou", he: "אני (מצב רגעי)", en: "I am (temporary state)" },
      { pt: "você está", he: "את/ה", en: "you are" },
      { pt: "ele/ela está", he: "הוא/היא", en: "he/she is" },
      { pt: "nós estamos", he: "אנחנו", en: "we are" },
      { pt: "vocês estão", he: "אתם/אתן", en: "you (pl.) are" },
      { pt: "eles/elas estão", he: "הם/הן", en: "they are" },
      { pt: "Estou bem", he: "אני בסדר / טוב", en: "I'm fine" },
      { pt: "Estou cansado", he: "אני עייף", en: "I'm tired" },
      { pt: "Como você está?", he: "מה שלומך?", en: "How are you?" },
      { pt: "Estou com fome", he: "אני רעב", en: "I'm hungry" }
    ]
  },
  {
    id: 13,
    level: 3,
    title: { he: "פעלים נפוצים (הווה)", en: "Common Verbs (present)" },
    short: "פעלים נפוצים",
    cards: [
      { pt: "eu tenho", he: "יש לי", en: "I have" },
      { pt: "eu vou", he: "אני הולך / נוסע", en: "I go" },
      { pt: "eu faço", he: "אני עושה", en: "I do / make" },
      { pt: "eu quero", he: "אני רוצה", en: "I want" },
      { pt: "eu posso", he: "אני יכול", en: "I can" },
      { pt: "eu sei", he: "אני יודע", en: "I know" },
      { pt: "eu falo", he: "אני מדבר", en: "I speak" },
      { pt: "eu como", he: "אני אוכל", en: "I eat" },
      { pt: "eu bebo", he: "אני שותה", en: "I drink" },
      { pt: "eu moro", he: "אני גר / חי", en: "I live" }
    ]
  },
  {
    id: 14,
    level: 3,
    title: { he: "תארים", en: "Adjectives" },
    cards: [
      { pt: "grande", he: "גדול", en: "big" },
      { pt: "pequeno", he: "קטן", en: "small" },
      { pt: "bonito", he: "יפה", en: "beautiful / handsome" },
      { pt: "feio", he: "מכוער", en: "ugly" },
      { pt: "bom", he: "טוב", en: "good" },
      { pt: "ruim", he: "רע", en: "bad" },
      { pt: "novo", he: "חדש / צעיר", en: "new / young" },
      { pt: "velho", he: "ישן / זקן", en: "old" },
      { pt: "rápido", he: "מהיר", en: "fast" },
      { pt: "lento", he: "איטי", en: "slow" }
    ]
  },
  {
    id: 15,
    level: 3,
    title: { he: "רגשות", en: "Emotions" },
    cards: [
      { pt: "feliz", he: "שמח", en: "happy" },
      { pt: "triste", he: "עצוב", en: "sad" },
      { pt: "com medo", he: "מפוחד", en: "scared" },
      { pt: "com raiva", he: "כועס", en: "angry" },
      { pt: "surpreso", he: "מופתע", en: "surprised" },
      { pt: "cansado", he: "עייף", en: "tired" },
      { pt: "com fome", he: "רעב", en: "hungry" },
      { pt: "com sede", he: "צמא", en: "thirsty" },
      { pt: "nervoso", he: "עצבני / לחוץ", en: "nervous" },
      { pt: "animado", he: "נרגש", en: "excited" }
    ]
  },
  {
    id: 16,
    level: 4,
    title: { he: "מילות שאלה", en: "Question Words" },
    cards: [
      { pt: "o quê", he: "מה", en: "what" },
      { pt: "quem", he: "מי", en: "who" },
      { pt: "onde", he: "איפה", en: "where" },
      { pt: "quando", he: "מתי", en: "when" },
      { pt: "por quê", he: "למה", en: "why" },
      { pt: "como", he: "איך", en: "how" },
      { pt: "qual", he: "איזה / איזו", en: "which" },
      { pt: "quanto", he: "כמה", en: "how much" },
      { pt: "quantos", he: "כמה (לרבים)", en: "how many" },
      { pt: "de onde", he: "מאיפה", en: "from where" }
    ]
  },
  {
    id: 17,
    level: 4,
    title: { he: "ניווט והכוונה", en: "Directions" },
    cards: [
      { pt: "esquerda", he: "שמאל", en: "left" },
      { pt: "direita", he: "ימין", en: "right" },
      { pt: "em frente", he: "ישר קדימה", en: "straight ahead" },
      { pt: "perto", he: "קרוב", en: "near" },
      { pt: "longe", he: "רחוק", en: "far" },
      { pt: "aqui", he: "כאן", en: "here" },
      { pt: "lá", he: "שם", en: "there" },
      { pt: "rua", he: "רחוב", en: "street" },
      { pt: "esquina", he: "פינת רחוב", en: "corner" },
      { pt: "norte", he: "צפון", en: "north" }
    ]
  },
  {
    id: 18,
    level: 4,
    title: { he: "קניות", en: "Shopping" },
    cards: [
      { pt: "Quanto custa?", he: "כמה זה עולה?", en: "How much does it cost?" },
      { pt: "dinheiro", he: "כסף", en: "money" },
      { pt: "loja", he: "חנות", en: "store" },
      { pt: "preço", he: "מחיר", en: "price" },
      { pt: "caro", he: "יקר", en: "expensive" },
      { pt: "barato", he: "זול", en: "cheap" },
      { pt: "pagar", he: "לשלם", en: "to pay" },
      { pt: "comprar", he: "לקנות", en: "to buy" },
      { pt: "vender", he: "למכור", en: "to sell" },
      { pt: "troco", he: "עודף", en: "change (money)" }
    ]
  },
  {
    id: 19,
    level: 4,
    title: { he: "במסעדה", en: "At the Restaurant" },
    cards: [
      { pt: "cardápio", he: "תפריט", en: "menu" },
      { pt: "garçom", he: "מלצר", en: "waiter" },
      { pt: "conta", he: "חשבון", en: "the bill" },
      { pt: "prato", he: "צלחת / מנה", en: "plate / dish" },
      { pt: "copo", he: "כוס", en: "glass / cup" },
      { pt: "colher", he: "כף", en: "spoon" },
      { pt: "garfo", he: "מזלג", en: "fork" },
      { pt: "faca", he: "סכין", en: "knife" },
      { pt: "sobremesa", he: "קינוח", en: "dessert" },
      { pt: "A conta, por favor", he: "החשבון, בבקשה", en: "The bill, please" }
    ]
  },
  {
    id: 20,
    level: 4,
    title: { he: "נסיעות", en: "Travel" },
    cards: [
      { pt: "aeroporto", he: "שדה תעופה", en: "airport" },
      { pt: "hotel", he: "מלון", en: "hotel" },
      { pt: "passaporte", he: "דרכון", en: "passport" },
      { pt: "mala", he: "מזוודה", en: "suitcase" },
      { pt: "viagem", he: "נסיעה", en: "trip" },
      { pt: "praia", he: "חוף", en: "beach" },
      { pt: "passagem", he: "כרטיס נסיעה", en: "ticket" },
      { pt: "ônibus", he: "אוטובוס", en: "bus" },
      { pt: "trem", he: "רכבת", en: "train" },
      { pt: "carro", he: "מכונית", en: "car" }
    ]
  },
  {
    id: 21,
    level: 5,
    title: { he: "עבר - פעלים נפוצים", en: "Past Tense - Common Verbs" },
    cards: [
      { pt: "eu fui", he: "הלכתי / הייתי", en: "I went / I was" },
      { pt: "eu fiz", he: "עשיתי", en: "I did / made" },
      { pt: "eu comi", he: "אכלתי", en: "I ate" },
      { pt: "eu bebi", he: "שתיתי", en: "I drank" },
      { pt: "eu falei", he: "דיברתי", en: "I spoke" },
      { pt: "eu vi", he: "ראיתי", en: "I saw" },
      { pt: "eu cheguei", he: "הגעתי", en: "I arrived" },
      { pt: "eu dormi", he: "ישנתי", en: "I slept" },
      { pt: "eu trabalhei", he: "עבדתי", en: "I worked" },
      { pt: "eu estudei", he: "למדתי", en: "I studied" }
    ]
  },
  {
    id: 22,
    level: 5,
    title: { he: "מקצועות", en: "Professions" },
    cards: [
      { pt: "médico", he: "רופא", en: "doctor" },
      { pt: "professor", he: "מורה", en: "teacher" },
      { pt: "advogado", he: "עורך דין", en: "lawyer" },
      { pt: "engenheiro", he: "מהנדס", en: "engineer" },
      { pt: "enfermeiro", he: "אח (סיעוד)", en: "nurse" },
      { pt: "cozinheiro", he: "טבח", en: "cook" },
      { pt: "motorista", he: "נהג", en: "driver" },
      { pt: "policial", he: "שוטר", en: "police officer" },
      { pt: "estudante", he: "סטודנט", en: "student" },
      { pt: "artista", he: "אמן", en: "artist" }
    ]
  },
  {
    id: 23,
    level: 13,
    title: { he: "מספרים גדולים", en: "Bigger Numbers" },
    cards: [
      { pt: "vinte", he: "עשרים", en: "twenty" },
      { pt: "trinta", he: "שלושים", en: "thirty" },
      { pt: "quarenta", he: "ארבעים", en: "forty" },
      { pt: "cinquenta", he: "חמישים", en: "fifty" },
      { pt: "sessenta", he: "שישים", en: "sixty" },
      { pt: "setenta", he: "שבעים", en: "seventy" },
      { pt: "oitenta", he: "שמונים", en: "eighty" },
      { pt: "noventa", he: "תשעים", en: "ninety" },
      { pt: "cem", he: "מאה", en: "one hundred" },
      { pt: "mil", he: "אלף", en: "one thousand" }
    ]
  },
  {
    id: 24,
    level: 5,
    title: { he: "ביטויים נפוצים", en: "Common Expressions" },
    cards: [
      { pt: "Tudo bem?", he: "הכל טוב?", en: "Everything okay?" },
      { pt: "Que saudade", he: "איזה געגוע", en: "I miss this/you so much" },
      { pt: "Nossa!", he: "וואו!", en: "Wow!" },
      { pt: "De boa", he: "בסדר גמור / רגוע", en: "It's cool / chill" },
      { pt: "Com certeza", he: "בהחלט", en: "For sure" },
      { pt: "Não tem problema", he: "אין בעיה", en: "No problem" },
      { pt: "Fica tranquilo", he: "תירגע", en: "Stay calm / relax" },
      { pt: "Vamos lá", he: "בואו נלך", en: "Let's go" },
      { pt: "É isso", he: "זהו", en: "That's it" },
      { pt: "Beleza", he: "מגניב / בסדר", en: "Cool / alright" }
    ]
  },
  {
    id: 25,
    level: 5,
    title: { he: "מילות קישור", en: "Connector Words" },
    cards: [
      { pt: "e", he: "ו-", en: "and" },
      { pt: "mas", he: "אבל", en: "but" },
      { pt: "porque", he: "כי", en: "because" },
      { pt: "também", he: "גם", en: "also" },
      { pt: "ou", he: "או", en: "or" },
      { pt: "se", he: "אם", en: "if" },
      { pt: "então", he: "אז", en: "so / then" },
      { pt: "quando", he: "כש- / כאשר", en: "when (conjunction)" },
      { pt: "muito", he: "מאוד", en: "very" },
      { pt: "pouco", he: "קצת / מעט", en: "a little" }
    ]
  },

  // ---------------- Level 6: Present tense conjugations ----------------
  {
    id: 26,
    level: 6,
    title: { he: "TER (יש ל-) בהווה", en: "TER (to have) - present" },
    short: "TER - הווה",
    cards: [
      { pt: "eu tenho", he: "יש לי", en: "I have" },
      { pt: "você tem", he: "יש לך", en: "you have" },
      { pt: "ele/ela tem", he: "יש לו / יש לה", en: "he/she has" },
      { pt: "nós temos", he: "יש לנו", en: "we have" },
      { pt: "vocês têm", he: "יש לכם / לכן", en: "you (pl.) have" },
      { pt: "eles/elas têm", he: "יש להם / להן", en: "they have" },
      { pt: "Eu tenho um carro", he: "יש לי מכונית", en: "I have a car" },
      { pt: "Ela tem dois filhos", he: "יש לה שני ילדים", en: "She has two children" },
      { pt: "Nós temos tempo", he: "יש לנו זמן", en: "We have time" },
      { pt: "Eles têm fome", he: "הם רעבים", en: "They are hungry" }
    ]
  },
  {
    id: 27,
    level: 6,
    title: { he: "IR (ללכת/לנסוע) בהווה", en: "IR (to go) - present" },
    short: "IR - הווה",
    cards: [
      { pt: "eu vou", he: "אני הולך / הולכת", en: "I go" },
      { pt: "você vai", he: "את/ה הולך / הולכת", en: "you go" },
      { pt: "ele/ela vai", he: "הוא הולך / היא הולכת", en: "he/she goes" },
      { pt: "nós vamos", he: "אנחנו הולכים", en: "we go" },
      { pt: "vocês vão", he: "אתם/אתן הולכים", en: "you (pl.) go" },
      { pt: "eles/elas vão", he: "הם/הן הולכים", en: "they go" },
      { pt: "Eu vou para casa", he: "אני הולך/ת הביתה", en: "I'm going home" },
      { pt: "Ela vai ao mercado", he: "היא הולכת לשוק", en: "She's going to the market" },
      { pt: "Nós vamos à praia", he: "אנחנו הולכים לחוף", en: "We're going to the beach" },
      { pt: "Eles vão de ônibus", he: "הם נוסעים באוטובוס", en: "They go by bus" }
    ]
  },
  {
    id: 28,
    level: 6,
    title: { he: "FAZER (לעשות) בהווה", en: "FAZER (to do/make) - present" },
    short: "FAZER - הווה",
    cards: [
      { pt: "eu faço", he: "אני עושה", en: "I do / make" },
      { pt: "você faz", he: "את/ה עושה", en: "you do / make" },
      { pt: "ele/ela faz", he: "הוא/היא עושה", en: "he/she does / makes" },
      { pt: "nós fazemos", he: "אנחנו עושים", en: "we do / make" },
      { pt: "vocês fazem", he: "אתם/אתן עושים", en: "you (pl.) do / make" },
      { pt: "eles/elas fazem", he: "הם/הן עושים", en: "they do / make" },
      { pt: "Eu faço o almoço", he: "אני מכין/ה את הצהריים", en: "I make lunch" },
      { pt: "Ele faz exercício", he: "הוא מתאמן", en: "He exercises" },
      { pt: "Nós fazemos um bolo", he: "אנחנו מכינים עוגה", en: "We make a cake" },
      { pt: "Elas fazem compras", he: "הן עושות קניות", en: "They go shopping" }
    ]
  },
  {
    id: 29,
    level: 6,
    title: { he: "QUERER (לרצות) בהווה", en: "QUERER (to want) - present" },
    short: "QUERER - הווה",
    cards: [
      { pt: "eu quero", he: "אני רוצה", en: "I want" },
      { pt: "você quer", he: "את/ה רוצה", en: "you want" },
      { pt: "ele/ela quer", he: "הוא/היא רוצה", en: "he/she wants" },
      { pt: "nós queremos", he: "אנחנו רוצים", en: "we want" },
      { pt: "vocês querem", he: "אתם/אתן רוצים", en: "you (pl.) want" },
      { pt: "eles/elas querem", he: "הם/הן רוצים", en: "they want" },
      { pt: "Eu quero água", he: "אני רוצה מים", en: "I want water" },
      { pt: "Você quer café?", he: "את/ה רוצה קפה?", en: "Do you want coffee?" },
      { pt: "Nós queremos viajar", he: "אנחנו רוצים לטייל", en: "We want to travel" },
      { pt: "Eles querem ajuda", he: "הם רוצים עזרה", en: "They want help" }
    ]
  },
  {
    id: 30,
    level: 6,
    title: { he: "PODER (יכולת) בהווה", en: "PODER (to be able) - present" },
    short: "PODER - הווה",
    cards: [
      { pt: "eu posso", he: "אני יכול/ה", en: "I can" },
      { pt: "você pode", he: "את/ה יכול/ה", en: "you can" },
      { pt: "ele/ela pode", he: "הוא/היא יכול/ה", en: "he/she can" },
      { pt: "nós podemos", he: "אנחנו יכולים", en: "we can" },
      { pt: "vocês podem", he: "אתם/אתן יכולים", en: "you (pl.) can" },
      { pt: "eles/elas podem", he: "הם/הן יכולים", en: "they can" },
      { pt: "Eu posso ajudar", he: "אני יכול/ה לעזור", en: "I can help" },
      { pt: "Você pode entrar", he: "את/ה יכול/ה להיכנס", en: "You can come in" },
      { pt: "Nós podemos esperar", he: "אנחנו יכולים לחכות", en: "We can wait" },
      { pt: "Eles podem ficar", he: "הם יכולים להישאר", en: "They can stay" }
    ]
  },

  // ---------------- Level 7: Present tense conjugations 2 ----------------
  {
    id: 31,
    level: 7,
    title: { he: "FALAR (לדבר) בהווה", en: "FALAR (to speak) - present" },
    short: "FALAR - הווה",
    cards: [
      { pt: "eu falo", he: "אני מדבר/ת", en: "I speak" },
      { pt: "você fala", he: "את/ה מדבר/ת", en: "you speak" },
      { pt: "ele/ela fala", he: "הוא/היא מדבר/ת", en: "he/she speaks" },
      { pt: "nós falamos", he: "אנחנו מדברים", en: "we speak" },
      { pt: "vocês falam", he: "אתם/אתן מדברים", en: "you (pl.) speak" },
      { pt: "eles/elas falam", he: "הם/הן מדברים", en: "they speak" },
      { pt: "Eu falo português", he: "אני מדבר/ת פורטוגזית", en: "I speak Portuguese" },
      { pt: "Ela fala muito rápido", he: "היא מדברת מהר מאוד", en: "She speaks very fast" },
      { pt: "Nós falamos ao telefone", he: "אנחנו מדברים בטלפון", en: "We talk on the phone" },
      { pt: "Eles falam inglês", he: "הם מדברים אנגלית", en: "They speak English" }
    ]
  },
  {
    id: 32,
    level: 7,
    title: { he: "COMER (לאכול) בהווה", en: "COMER (to eat) - present" },
    short: "COMER - הווה",
    cards: [
      { pt: "eu como", he: "אני אוכל/ת", en: "I eat" },
      { pt: "você come", he: "את/ה אוכל/ת", en: "you eat" },
      { pt: "ele/ela come", he: "הוא/היא אוכל/ת", en: "he/she eats" },
      { pt: "nós comemos", he: "אנחנו אוכלים", en: "we eat" },
      { pt: "vocês comem", he: "אתם/אתן אוכלים", en: "you (pl.) eat" },
      { pt: "eles/elas comem", he: "הם/הן אוכלים", en: "they eat" },
      { pt: "Eu como fruta", he: "אני אוכל/ת פרי", en: "I eat fruit" },
      { pt: "Ele come muito rápido", he: "הוא אוכל מהר מאוד", en: "He eats very fast" },
      { pt: "Nós comemos juntos", he: "אנחנו אוכלים יחד", en: "We eat together" },
      { pt: "Elas comem pizza", he: "הן אוכלות פיצה", en: "They eat pizza" }
    ]
  },
  {
    id: 33,
    level: 7,
    title: { he: "ABRIR (לפתוח) בהווה", en: "ABRIR (to open) - present" },
    short: "ABRIR - הווה",
    cards: [
      { pt: "eu abro", he: "אני פותח/ת", en: "I open" },
      { pt: "você abre", he: "את/ה פותח/ת", en: "you open" },
      { pt: "ele/ela abre", he: "הוא/היא פותח/ת", en: "he/she opens" },
      { pt: "nós abrimos", he: "אנחנו פותחים", en: "we open" },
      { pt: "vocês abrem", he: "אתם/אתן פותחים", en: "you (pl.) open" },
      { pt: "eles/elas abrem", he: "הם/הן פותחים", en: "they open" },
      { pt: "Eu abro a porta", he: "אני פותח/ת את הדלת", en: "I open the door" },
      { pt: "Ela abre a janela", he: "היא פותחת את החלון", en: "She opens the window" },
      { pt: "Nós abrimos a loja", he: "אנחנו פותחים את החנות", en: "We open the store" },
      { pt: "Eles abrem os livros", he: "הם פותחים את הספרים", en: "They open the books" }
    ]
  },
  {
    id: 34,
    level: 7,
    title: { he: "SABER (לדעת) בהווה", en: "SABER (to know) - present" },
    short: "SABER - הווה",
    cards: [
      { pt: "eu sei", he: "אני יודע/ת", en: "I know" },
      { pt: "você sabe", he: "את/ה יודע/ת", en: "you know" },
      { pt: "ele/ela sabe", he: "הוא/היא יודע/ת", en: "he/she knows" },
      { pt: "nós sabemos", he: "אנחנו יודעים", en: "we know" },
      { pt: "vocês sabem", he: "אתם/אתן יודעים", en: "you (pl.) know" },
      { pt: "eles/elas sabem", he: "הם/הן יודעים", en: "they know" },
      { pt: "Eu sei a resposta", he: "אני יודע/ת את התשובה", en: "I know the answer" },
      { pt: "Você sabe nadar?", he: "את/ה יודע/ת לשחות?", en: "Do you know how to swim?" },
      { pt: "Nós sabemos a verdade", he: "אנחנו יודעים את האמת", en: "We know the truth" },
      { pt: "Eles sabem tudo", he: "הם יודעים הכול", en: "They know everything" }
    ]
  },
  {
    id: 35,
    level: 7,
    title: { he: "VER (לראות) בהווה", en: "VER (to see) - present" },
    short: "VER - הווה",
    cards: [
      { pt: "eu vejo", he: "אני רואה", en: "I see" },
      { pt: "você vê", he: "את/ה רואה", en: "you see" },
      { pt: "ele/ela vê", he: "הוא/היא רואה", en: "he/she sees" },
      { pt: "nós vemos", he: "אנחנו רואים", en: "we see" },
      { pt: "vocês veem", he: "אתם/אתן רואים", en: "you (pl.) see" },
      { pt: "eles/elas veem", he: "הם/הן רואים", en: "they see" },
      { pt: "Eu vejo o mar", he: "אני רואה את הים", en: "I see the sea" },
      { pt: "Ela vê um filme", he: "היא רואה סרט", en: "She watches a movie" },
      { pt: "Nós vemos as estrelas", he: "אנחנו רואים את הכוכבים", en: "We see the stars" },
      { pt: "Eles veem tudo", he: "הם רואים הכול", en: "They see everything" }
    ]
  },

  // ---------------- Level 8: Past tense conjugations ----------------
  {
    id: 36,
    level: 8,
    title: { he: "SER (להיות) בעבר", en: "SER (to be) - past" },
    short: "SER - עבר",
    cards: [
      { pt: "eu fui", he: "הייתי", en: "I was" },
      { pt: "você foi", he: "היית", en: "you were" },
      { pt: "ele/ela foi", he: "הוא היה / היא הייתה", en: "he/she was" },
      { pt: "nós fomos", he: "היינו", en: "we were" },
      { pt: "vocês foram", he: "הייתם / הייתן", en: "you (pl.) were" },
      { pt: "eles/elas foram", he: "הם/הן היו", en: "they were" },
      { pt: "Eu fui professor", he: "הייתי מורה", en: "I was a teacher" },
      { pt: "Ela foi feliz", he: "היא הייתה שמחה", en: "She was happy" },
      { pt: "Nós fomos amigos", he: "היינו חברים", en: "We were friends" },
      { pt: "Eles foram os primeiros", he: "הם היו הראשונים", en: "They were the first" }
    ]
  },
  {
    id: 37,
    level: 8,
    title: { he: "ESTAR (להיות-מצב) בעבר", en: "ESTAR (to be-state) - past" },
    short: "ESTAR - עבר",
    cards: [
      { pt: "eu estive", he: "הייתי (מצב)", en: "I was (state)" },
      { pt: "você esteve", he: "היית (מצב)", en: "you were (state)" },
      { pt: "ele/ela esteve", he: "הוא/היא היה/הייתה (מצב)", en: "he/she was (state)" },
      { pt: "nós estivemos", he: "היינו (מצב)", en: "we were (state)" },
      { pt: "vocês estiveram", he: "הייתם/הייתן (מצב)", en: "you (pl.) were (state)" },
      { pt: "eles/elas estiveram", he: "הם/הן היו (מצב)", en: "they were (state)" },
      { pt: "Eu estive doente", he: "הייתי חולה", en: "I was sick" },
      { pt: "Ela esteve em casa", he: "היא הייתה בבית", en: "She was at home" },
      { pt: "Nós estivemos na praia", he: "היינו בחוף", en: "We were at the beach" },
      { pt: "Eles estiveram ocupados", he: "הם היו עסוקים", en: "They were busy" }
    ]
  },
  {
    id: 38,
    level: 8,
    title: { he: "TER (יש ל-) בעבר", en: "TER (to have) - past" },
    short: "TER - עבר",
    cards: [
      { pt: "eu tive", he: "היה לי", en: "I had" },
      { pt: "você teve", he: "היה לך", en: "you had" },
      { pt: "ele/ela teve", he: "היה לו / היה לה", en: "he/she had" },
      { pt: "nós tivemos", he: "היה לנו", en: "we had" },
      { pt: "vocês tiveram", he: "היה לכם/לכן", en: "you (pl.) had" },
      { pt: "eles/elas tiveram", he: "היה להם/להן", en: "they had" },
      { pt: "Eu tive uma ideia", he: "הייתה לי אידאה", en: "I had an idea" },
      { pt: "Ela teve um filho", he: "היה לה בן", en: "She had a son" },
      { pt: "Nós tivemos sorte", he: "היה לנו מזל", en: "We had luck" },
      { pt: "Eles tiveram problemas", he: "היו להם בעיות", en: "They had problems" }
    ]
  },
  {
    id: 39,
    level: 8,
    title: { he: "IR (ללכת/לנסוע) בעבר", en: "IR (to go) - past" },
    short: "IR - עבר",
    cards: [
      { pt: "eu fui", he: "הלכתי", en: "I went" },
      { pt: "você foi", he: "הלכת", en: "you went" },
      { pt: "ele/ela foi", he: "הוא הלך / היא הלכה", en: "he/she went" },
      { pt: "nós fomos", he: "הלכנו", en: "we went" },
      { pt: "vocês foram", he: "הלכתם/הלכתן", en: "you (pl.) went" },
      { pt: "eles/elas foram", he: "הם/הן הלכו", en: "they went" },
      { pt: "Eu fui ao cinema", he: "הלכתי לקולנוע", en: "I went to the cinema" },
      { pt: "Ela foi para o trabalho", he: "היא הלכה לעבודה", en: "She went to work" },
      { pt: "Nós fomos à festa", he: "הלכנו למסיבה", en: "We went to the party" },
      { pt: "Eles foram embora", he: "הם הלכו משם", en: "They left" }
    ]
  },
  {
    id: 40,
    level: 8,
    title: { he: "FAZER (לעשות) בעבר", en: "FAZER (to do/make) - past" },
    short: "FAZER - עבר",
    cards: [
      { pt: "eu fiz", he: "עשיתי", en: "I did / made" },
      { pt: "você fez", he: "עשית", en: "you did / made" },
      { pt: "ele/ela fez", he: "הוא עשה / היא עשתה", en: "he/she did / made" },
      { pt: "nós fizemos", he: "עשינו", en: "we did / made" },
      { pt: "vocês fizeram", he: "עשיתם/עשיתן", en: "you (pl.) did / made" },
      { pt: "eles/elas fizeram", he: "הם/הן עשו", en: "they did / made" },
      { pt: "Eu fiz o jantar", he: "הכנתי את ארוחת הערב", en: "I made dinner" },
      { pt: "Ela fez uma pergunta", he: "היא שאלה שאלה", en: "She asked a question" },
      { pt: "Nós fizemos a viagem", he: "עשינו את הנסיעה", en: "We took the trip" },
      { pt: "Eles fizeram barulho", he: "הם עשו רעש", en: "They made noise" }
    ]
  },

  // ---------------- Level 9: Past tense conjugations 2 ----------------
  {
    id: 41,
    level: 9,
    title: { he: "FALAR (לדבר) בעבר", en: "FALAR (to speak) - past" },
    short: "FALAR - עבר",
    cards: [
      { pt: "eu falei", he: "דיברתי", en: "I spoke" },
      { pt: "você falou", he: "דיברת", en: "you spoke" },
      { pt: "ele/ela falou", he: "הוא/היא דיבר/ה", en: "he/she spoke" },
      { pt: "nós falamos", he: "דיברנו", en: "we spoke" },
      { pt: "vocês falaram", he: "דיברתם/דיברתן", en: "you (pl.) spoke" },
      { pt: "eles/elas falaram", he: "הם/הן דיברו", en: "they spoke" },
      { pt: "Eu falei com ela", he: "דיברתי איתה", en: "I talked to her" },
      { pt: "Ele falou a verdade", he: "הוא דיבר את האמת", en: "He told the truth" },
      { pt: "Nós falamos sobre o filme", he: "דיברנו על הסרט", en: "We talked about the movie" },
      { pt: "Eles falaram alto", he: "הם דיברו בקול רם", en: "They spoke loudly" }
    ]
  },
  {
    id: 42,
    level: 9,
    title: { he: "COMER (לאכול) בעבר", en: "COMER (to eat) - past" },
    short: "COMER - עבר",
    cards: [
      { pt: "eu comi", he: "אכלתי", en: "I ate" },
      { pt: "você comeu", he: "אכלת", en: "you ate" },
      { pt: "ele/ela comeu", he: "הוא/היא אכל/ה", en: "he/she ate" },
      { pt: "nós comemos", he: "אכלנו", en: "we ate" },
      { pt: "vocês comeram", he: "אכלתם/אכלתן", en: "you (pl.) ate" },
      { pt: "eles/elas comeram", he: "הם/הן אכלו", en: "they ate" },
      { pt: "Eu comi demais", he: "אכלתי יותר מדי", en: "I ate too much" },
      { pt: "Ela comeu a sobremesa", he: "היא אכלה את הקינוח", en: "She ate the dessert" },
      { pt: "Nós comemos no restaurante", he: "אכלנו במסעדה", en: "We ate at the restaurant" },
      { pt: "Eles comeram tudo", he: "הם אכלו הכול", en: "They ate everything" }
    ]
  },
  {
    id: 43,
    level: 9,
    title: { he: "ABRIR (לפתוח) בעבר", en: "ABRIR (to open) - past" },
    short: "ABRIR - עבר",
    cards: [
      { pt: "eu abri", he: "פתחתי", en: "I opened" },
      { pt: "você abriu", he: "פתחת", en: "you opened" },
      { pt: "ele/ela abriu", he: "הוא/היא פתח/ה", en: "he/she opened" },
      { pt: "nós abrimos", he: "פתחנו", en: "we opened" },
      { pt: "vocês abriram", he: "פתחתם/פתחתן", en: "you (pl.) opened" },
      { pt: "eles/elas abriram", he: "הם/הן פתחו", en: "they opened" },
      { pt: "Eu abri o presente", he: "פתחתי את המתנה", en: "I opened the present" },
      { pt: "Ela abriu a porta", he: "היא פתחה את הדלת", en: "She opened the door" },
      { pt: "Nós abrimos o restaurante", he: "פתחנו את המסעדה", en: "We opened the restaurant" },
      { pt: "Eles abriram a loja", he: "הם פתחו את החנות", en: "They opened the store" }
    ]
  },
  {
    id: 44,
    level: 9,
    title: { he: "QUERER (לרצות) בעבר", en: "QUERER (to want) - past" },
    short: "QUERER - עבר",
    cards: [
      { pt: "eu quis", he: "רציתי", en: "I wanted" },
      { pt: "você quis", he: "רצית", en: "you wanted" },
      { pt: "ele/ela quis", he: "הוא/היא רצה", en: "he/she wanted" },
      { pt: "nós quisemos", he: "רצינו", en: "we wanted" },
      { pt: "vocês quiseram", he: "רציתם/רציתן", en: "you (pl.) wanted" },
      { pt: "eles/elas quiseram", he: "הם/הן רצו", en: "they wanted" },
      { pt: "Eu quis ajudar", he: "רציתי לעזור", en: "I wanted to help" },
      { pt: "Ela quis sair", he: "היא רצתה לצאת", en: "She wanted to leave" },
      { pt: "Nós quisemos ficar", he: "רצינו להישאר", en: "We wanted to stay" },
      { pt: "Eles quiseram saber", he: "הם רצו לדעת", en: "They wanted to know" }
    ]
  },
  {
    id: 45,
    level: 9,
    title: { he: "PODER (יכולת) בעבר", en: "PODER (to be able) - past" },
    short: "PODER - עבר",
    cards: [
      { pt: "eu pude", he: "יכולתי", en: "I was able to / could" },
      { pt: "você pôde", he: "יכולת", en: "you were able to / could" },
      { pt: "ele/ela pôde", he: "הוא/היא יכול/ה היה/הייתה", en: "he/she was able to / could" },
      { pt: "nós pudemos", he: "יכולנו", en: "we were able to / could" },
      { pt: "vocês puderam", he: "יכולתם/יכולתן", en: "you (pl.) were able to / could" },
      { pt: "eles/elas puderam", he: "הם/הן יכלו", en: "they were able to / could" },
      { pt: "Eu pude ajudar", he: "יכולתי לעזור", en: "I was able to help" },
      { pt: "Ela pôde vir", he: "היא יכלה לבוא", en: "She was able to come" },
      { pt: "Nós pudemos descansar", he: "יכולנו לנוח", en: "We were able to rest" },
      { pt: "Eles puderam ver", he: "הם יכלו לראות", en: "They were able to see" }
    ]
  },

  // ---------------- Level 10: Future tense & more vocabulary ----------------
  {
    id: 46,
    level: 10,
    title: { he: "עתיד (IR + פועל)", en: "Future (IR + verb)" },
    short: "עתיד",
    cards: [
      { pt: "Eu vou falar", he: "אני אדבר", en: "I will speak" },
      { pt: "Você vai comer", he: "את/ה תאכל/י", en: "You will eat" },
      { pt: "Ele vai viajar", he: "הוא ייסע / יטייל", en: "He will travel" },
      { pt: "Nós vamos trabalhar", he: "אנחנו נעבוד", en: "We will work" },
      { pt: "Vocês vão estudar", he: "אתם תלמדו", en: "You (pl.) will study" },
      { pt: "Eles vão dormir", he: "הם ישנו (בעתיד)", en: "They will sleep" },
      { pt: "Eu vou viajar amanhã", he: "אני אטייל מחר", en: "I will travel tomorrow" },
      { pt: "Ela vai chegar tarde", he: "היא תגיע מאוחר", en: "She will arrive late" },
      { pt: "Nós vamos comprar uma casa", he: "אנחנו נקנה בית", en: "We will buy a house" },
      { pt: "Eles vão ajudar", he: "הם יעזרו", en: "They will help" }
    ]
  },
  {
    id: 47,
    level: 10,
    title: { he: "טבע ומזג אוויר", en: "Nature & Weather" },
    cards: [
      { pt: "sol", he: "שמש", en: "sun" },
      { pt: "lua", he: "ירח", en: "moon" },
      { pt: "estrela", he: "כוכב", en: "star" },
      { pt: "céu", he: "שמיים", en: "sky" },
      { pt: "chuva", he: "גשם", en: "rain" },
      { pt: "vento", he: "רוח", en: "wind" },
      { pt: "nuvem", he: "עננה", en: "cloud" },
      { pt: "calor", he: "חום (אקלים)", en: "heat" },
      { pt: "frio", he: "קור", en: "cold" },
      { pt: "montanha", he: "הר", en: "mountain" }
    ]
  },
  {
    id: 48,
    level: 10,
    title: { he: "טכנולוגיה וחפצים", en: "Technology & Objects" },
    cards: [
      { pt: "celular", he: "טלפון סלולרי", en: "cell phone" },
      { pt: "computador", he: "מחשב", en: "computer" },
      { pt: "internet", he: "אינטרנט", en: "internet" },
      { pt: "televisão", he: "טלוויזיה", en: "television" },
      { pt: "câmera", he: "מצלמה", en: "camera" },
      { pt: "chave", he: "מפתח", en: "key" },
      { pt: "relógio", he: "שעון", en: "clock / watch" },
      { pt: "livro", he: "ספר", en: "book" },
      { pt: "caneta", he: "עט", en: "pen" },
      { pt: "papel", he: "נייר", en: "paper" }
    ]
  },
  {
    id: 49,
    level: 10,
    title: { he: "ביטויי זמן", en: "Time Expressions" },
    cards: [
      { pt: "hoje", he: "היום", en: "today" },
      { pt: "ontem", he: "אתמול", en: "yesterday" },
      { pt: "amanhã", he: "מחר", en: "tomorrow" },
      { pt: "semana", he: "שבוע", en: "week" },
      { pt: "mês", he: "חודש", en: "month" },
      { pt: "ano", he: "שנה", en: "year" },
      { pt: "manhã", he: "בוקר", en: "morning" },
      { pt: "tarde", he: "אחר הצהריים", en: "afternoon" },
      { pt: "noite", he: "לילה / ערב", en: "night / evening" },
      { pt: "agora", he: "עכשיו", en: "now" }
    ]
  },
  {
    id: 50,
    level: 10,
    title: { he: "ספורט, תחביבים ועבודה", en: "Sports, Hobbies & Work" },
    cards: [
      { pt: "futebol", he: "כדורגל", en: "soccer" },
      { pt: "natação", he: "שחייה", en: "swimming" },
      { pt: "música", he: "מוזיקה", en: "music" },
      { pt: "dança", he: "ריקוד", en: "dance" },
      { pt: "leitura", he: "קריאה", en: "reading" },
      { pt: "escola", he: "בית ספר", en: "school" },
      { pt: "trabalho", he: "עבודה", en: "work" },
      { pt: "reunião", he: "פגישה", en: "meeting" },
      { pt: "exame", he: "מבחן", en: "exam" },
      { pt: "férias", he: "חופשה", en: "vacation" }
    ]
  },

  // ---------------- Level 11: Numbers up to 1000 ----------------
  {
    id: 51,
    level: 11,
    title: { he: "עשרות ויחידות (21-99)", en: "Tens & Units (21-99)" },
    short: "עשרות ויחידות",
    cards: [
      { pt: "vinte e um", he: "עשרים ואחת", en: "twenty-one" },
      { pt: "vinte e cinco", he: "עשרים וחמש", en: "twenty-five" },
      { pt: "trinta e dois", he: "שלושים ושתיים", en: "thirty-two" },
      { pt: "quarenta e sete", he: "ארבעים ושבע", en: "forty-seven" },
      { pt: "cinquenta e três", he: "חמישים ושלוש", en: "fifty-three" },
      { pt: "sessenta e quatro", he: "שישים וארבע", en: "sixty-four" },
      { pt: "setenta e oito", he: "שבעים ושמונה", en: "seventy-eight" },
      { pt: "oitenta e seis", he: "שמונים ושש", en: "eighty-six" },
      { pt: "noventa e nove", he: "תשעים ותשע", en: "ninety-nine" },
      { pt: "noventa e um", he: "תשעים ואחת", en: "ninety-one" }
    ]
  },
  {
    id: 52,
    level: 11,
    title: { he: "מאות (100-900)", en: "Hundreds (100-900)" },
    short: "מאות",
    cards: [
      { pt: "cem", he: "מאה", en: "one hundred" },
      { pt: "cento e um", he: "מאה ואחת", en: "one hundred and one" },
      { pt: "duzentos", he: "מאתיים", en: "two hundred" },
      { pt: "trezentos", he: "שלוש מאות", en: "three hundred" },
      { pt: "quatrocentos", he: "ארבע מאות", en: "four hundred" },
      { pt: "quinhentos", he: "חמש מאות", en: "five hundred" },
      { pt: "seiscentos", he: "שש מאות", en: "six hundred" },
      { pt: "setecentos", he: "שבע מאות", en: "seven hundred" },
      { pt: "oitocentos", he: "שמונה מאות", en: "eight hundred" },
      { pt: "novecentos", he: "תשע מאות", en: "nine hundred" }
    ]
  },
  {
    id: 53,
    level: 11,
    title: { he: "מספרים מלאים", en: "Full Numbers" },
    cards: [
      { pt: "cento e quinze", he: "מאה חמש עשרה", en: "one hundred fifteen" },
      { pt: "duzentos e vinte e um", he: "מאתיים עשרים ואחת", en: "two hundred twenty-one" },
      { pt: "trezentos e quarenta e cinco", he: "שלוש מאות ארבעים וחמש", en: "three hundred forty-five" },
      { pt: "quatrocentos e três", he: "ארבע מאות ושלוש", en: "four hundred three" },
      { pt: "quinhentos", he: "חמש מאות", en: "five hundred" },
      { pt: "seiscentos e dez", he: "שש מאות ועשר", en: "six hundred ten" },
      { pt: "setecentos e doze", he: "שבע מאות שתים עשרה", en: "seven hundred twelve" },
      { pt: "oitocentos e noventa e nove", he: "שמונה מאות תשעים ותשע", en: "eight hundred ninety-nine" },
      { pt: "novecentos e sessenta", he: "תשע מאות ושישים", en: "nine hundred sixty" },
      { pt: "mil", he: "אלף", en: "one thousand" }
    ]
  },
  {
    id: 54,
    level: 11,
    title: { he: "תרגול מספרים מורכבים", en: "More Number Practice" },
    short: "תרגול מספרים",
    cards: [
      { pt: "cem", he: "מאה", en: "one hundred" },
      { pt: "cento e cinquenta", he: "מאה וחמישים", en: "one hundred fifty" },
      { pt: "duzentos e setenta e cinco", he: "מאתיים שבעים וחמש", en: "two hundred seventy-five" },
      { pt: "trezentos e trinta e três", he: "שלוש מאות שלושים ושלוש", en: "three hundred thirty-three" },
      { pt: "quatrocentos e oito", he: "ארבע מאות ושמונה", en: "four hundred eight" },
      { pt: "quinhentos e dezenove", he: "חמש מאות ותשע עשרה", en: "five hundred nineteen" },
      { pt: "seiscentos e quarenta e dois", he: "שש מאות ארבעים ושתיים", en: "six hundred forty-two" },
      { pt: "setecentos e setenta e sete", he: "שבע מאות שבעים ושבע", en: "seven hundred seventy-seven" },
      { pt: "oitocentos e cinquenta", he: "שמונה מאות וחמישים", en: "eight hundred fifty" },
      { pt: "novecentos e noventa e nove", he: "תשע מאות תשעים ותשע", en: "nine hundred ninety-nine" }
    ]
  },
  {
    id: 55,
    level: 11,
    title: { he: "מספרים במשפטים", en: "Numbers in Sentences" },
    cards: [
      { pt: "Eu tenho vinte e cinco anos", he: "אני בן/בת עשרים וחמש", en: "I am twenty-five years old" },
      { pt: "Isso custa cem reais", he: "זה עולה מאה ריאל", en: "That costs one hundred reais" },
      { pt: "Ela mora no número setecentos", he: "היא גרה במספר שבע מאות", en: "She lives at number seven hundred" },
      { pt: "O livro tem trezentas páginas", he: "לספר יש שלוש מאות עמודים", en: "The book has three hundred pages" },
      { pt: "Nasci em mil novecentos e noventa", he: "נולדתי באלף תשע מאות ותשעים", en: "I was born in nineteen ninety" },
      { pt: "Temos quinhentos dólares", he: "יש לנו חמש מאות דולר", en: "We have five hundred dollars" },
      { pt: "A cidade tem mil habitantes", he: "לעיר יש אלף תושבים", en: "The city has a thousand residents" },
      { pt: "Faltam duzentos metros", he: "נשארו מאתיים מטרים", en: "Two hundred meters left" },
      { pt: "Ela correu quinhentos metros", he: "היא רצה חמש מאות מטר", en: "She ran five hundred meters" },
      { pt: "Ganhei trezentos reais de bônus", he: "קיבלתי שלוש מאות ריאל בונוס", en: "I got a three-hundred-real bonus" }
    ]
  },

  // ---------------- Extra "words" lessons (backfilling Level 1 & 5) ----------------
  {
    id: 56,
    level: 1,
    title: { he: "ימים בשבוע", en: "Days of the Week" },
    cards: [
      { pt: "domingo", he: "יום ראשון", en: "Sunday" },
      { pt: "segunda-feira", he: "יום שני", en: "Monday" },
      { pt: "terça-feira", he: "יום שלישי", en: "Tuesday" },
      { pt: "quarta-feira", he: "יום רביעי", en: "Wednesday" },
      { pt: "quinta-feira", he: "יום חמישי", en: "Thursday" },
      { pt: "sexta-feira", he: "יום שישי", en: "Friday" },
      { pt: "sábado", he: "יום שבת", en: "Saturday" },
      { pt: "dia", he: "יום", en: "day" },
      { pt: "fim de semana", he: "סוף שבוע", en: "weekend" },
      { pt: "feriado", he: "חג / יום חופש", en: "holiday" }
    ]
  },
  {
    id: 57,
    level: 1,
    title: { he: "חודשי השנה", en: "Months of the Year" },
    cards: [
      { pt: "janeiro", he: "ינואר", en: "January" },
      { pt: "fevereiro", he: "פברואר", en: "February" },
      { pt: "março", he: "מרץ", en: "March" },
      { pt: "abril", he: "אפריל", en: "April" },
      { pt: "maio", he: "מאי", en: "May" },
      { pt: "junho", he: "יוני", en: "June" },
      { pt: "julho", he: "יולי", en: "July" },
      { pt: "agosto", he: "אוגוסט", en: "August" },
      { pt: "setembro", he: "ספטמבר", en: "September" },
      { pt: "outubro", he: "אוקטובר", en: "October" },
      { pt: "novembro", he: "נובמבר", en: "November" },
      { pt: "dezembro", he: "דצמבר", en: "December" }
    ]
  },
  {
    id: 58,
    level: 5,
    title: { he: "מקומות בעיר", en: "Places in the City" },
    cards: [
      { pt: "igreja", he: "כנסייה", en: "church" },
      { pt: "banco", he: "בנק", en: "bank" },
      { pt: "farmácia", he: "בית מרקחת", en: "pharmacy" },
      { pt: "mercado", he: "שוק / סופרמרקט", en: "market" },
      { pt: "parque", he: "פארק", en: "park" },
      { pt: "hospital", he: "בית חולים", en: "hospital" },
      { pt: "biblioteca", he: "ספרייה", en: "library" },
      { pt: "museu", he: "מוזיאון", en: "museum" },
      { pt: "praça", he: "כיכר", en: "square / plaza" },
      { pt: "correio", he: "דואר", en: "post office" }
    ]
  },

  // ---------------- Level 14: Random Number Drill ----------------
  {
    id: 59,
    level: 14,
    title: { he: "אקראי 1-100", en: "Random 1-100" },
    cards: [
      { pt: "oitenta e dois", he: "שמונים ושתיים", en: "eighty-two" },
      { pt: "quinze", he: "חמש עשרה", en: "fifteen" },
      { pt: "quatro", he: "ארבע", en: "four" },
      { pt: "noventa e cinco", he: "תשעים וחמש", en: "ninety-five" },
      { pt: "trinta e seis", he: "שלושים ושש", en: "thirty-six" },
      { pt: "trinta e dois", he: "שלושים ושתיים", en: "thirty-two" },
      { pt: "vinte e nove", he: "עשרים ותשע", en: "twenty-nine" },
      { pt: "dezoito", he: "שמונה עשרה", en: "eighteen" },
      { pt: "quatorze", he: "ארבע עשרה", en: "fourteen" },
      { pt: "oitenta e sete", he: "שמונים ושבע", en: "eighty-seven" },
    ]
  },
  {
    id: 60,
    level: 14,
    title: { he: "אקראי 100-500", en: "Random 100-500" },
    cards: [
      { pt: "quatrocentos e oitenta", he: "ארבע מאות שמונים", en: "four hundred eighty" },
      { pt: "trezentos e oitenta", he: "שלוש מאות שמונים", en: "three hundred eighty" },
      { pt: "cento e quarenta e cinco", he: "מאה ארבעים וחמש", en: "one hundred forty-five" },
      { pt: "quatrocentos e três", he: "ארבע מאות ושלוש", en: "four hundred three" },
      { pt: "trezentos e dezessete", he: "שלוש מאות ושבע עשרה", en: "three hundred seventeen" },
      { pt: "cento e dezessete", he: "מאה ושבע עשרה", en: "one hundred seventeen" },
      { pt: "cento e dezesseis", he: "מאה ושש עשרה", en: "one hundred sixteen" },
      { pt: "cento e quarenta e oito", he: "מאה ארבעים ושמונה", en: "one hundred forty-eight" },
      { pt: "duzentos e doze", he: "מאתיים ושתים עשרה", en: "two hundred twelve" },
      { pt: "duzentos e vinte", he: "מאתיים עשרים", en: "two hundred twenty" },
    ]
  },
  {
    id: 61,
    level: 14,
    title: { he: "אקראי 500-1000", en: "Random 500-1000" },
    cards: [
      { pt: "setecentos e cinquenta e nove", he: "שבע מאות חמישים ותשע", en: "seven hundred fifty-nine" },
      { pt: "oitocentos e nove", he: "שמונה מאות ותשע", en: "eight hundred nine" },
      { pt: "quinhentos e quatorze", he: "חמש מאות וארבע עשרה", en: "five hundred fourteen" },
      { pt: "setecentos e oitenta e oito", he: "שבע מאות שמונים ושמונה", en: "seven hundred eighty-eight" },
      { pt: "seiscentos e dois", he: "שש מאות ושתיים", en: "six hundred two" },
      { pt: "oitocentos e sessenta e sete", he: "שמונה מאות שישים ושבע", en: "eight hundred sixty-seven" },
      { pt: "oitocentos e trinta e três", he: "שמונה מאות שלושים ושלוש", en: "eight hundred thirty-three" },
      { pt: "oitocentos e sessenta", he: "שמונה מאות שישים", en: "eight hundred sixty" },
      { pt: "setecentos e oitenta", he: "שבע מאות שמונים", en: "seven hundred eighty" },
      { pt: "setecentos e quinze", he: "שבע מאות וחמש עשרה", en: "seven hundred fifteen" },
    ]
  },
  {
    id: 62,
    level: 14,
    title: { he: "אקראי מעורב א'", en: "Mixed Random A" },
    cards: [
      { pt: "duzentos e quarenta e dois", he: "מאתיים ארבעים ושתיים", en: "two hundred forty-two" },
      { pt: "quatrocentos e setenta e nove", he: "ארבע מאות שבעים ותשע", en: "four hundred seventy-nine" },
      { pt: "seiscentos e vinte e seis", he: "שש מאות עשרים ושש", en: "six hundred twenty-six" },
      { pt: "trezentos e um", he: "שלוש מאות ואחת", en: "three hundred one" },
      { pt: "oitocentos e cinquenta e sete", he: "שמונה מאות חמישים ושבע", en: "eight hundred fifty-seven" },
      { pt: "novecentos e vinte e um", he: "תשע מאות עשרים ואחת", en: "nine hundred twenty-one" },
      { pt: "oito", he: "שמונה", en: "eight" },
      { pt: "oitocentos e quatro", he: "שמונה מאות וארבע", en: "eight hundred four" },
      { pt: "oitocentos e cinquenta e quatro", he: "שמונה מאות חמישים וארבע", en: "eight hundred fifty-four" },
      { pt: "cento e setenta e oito", he: "מאה שבעים ושמונה", en: "one hundred seventy-eight" },
    ]
  },
  {
    id: 63,
    level: 14,
    title: { he: "אקראי מעורב ב'", en: "Mixed Random B" },
    cards: [
      { pt: "setecentos e quarenta e quatro", he: "שבע מאות ארבעים וארבע", en: "seven hundred forty-four" },
      { pt: "quatrocentos e cinquenta e seis", he: "ארבע מאות חמישים ושש", en: "four hundred fifty-six" },
      { pt: "trezentos e setenta", he: "שלוש מאות שבעים", en: "three hundred seventy" },
      { pt: "trezentos e cinco", he: "שלוש מאות וחמש", en: "three hundred five" },
      { pt: "cento e setenta e cinco", he: "מאה שבעים וחמש", en: "one hundred seventy-five" },
      { pt: "duzentos e trinta e nove", he: "מאתיים שלושים ותשע", en: "two hundred thirty-nine" },
      { pt: "oitocentos e dezesseis", he: "שמונה מאות ושש עשרה", en: "eight hundred sixteen" },
      { pt: "trezentos e sessenta e seis", he: "שלוש מאות שישים ושש", en: "three hundred sixty-six" },
      { pt: "cento e dezoito", he: "מאה ושמונה עשרה", en: "one hundred eighteen" },
      { pt: "cento e seis", he: "מאה ושש", en: "one hundred six" },
    ]
  },

  // ---------------- Level 15-16: Fill-in-the-blank verb drills ----------------
  {
    id: 64,
    level: 15,
    title: { he: "AJUDAR - השלמת משפטים", en: "AJUDAR - Fill in the Blank" },
    short: "AJUDAR",
    cards: [
      { pt: "Eu ___ (ajudar) o amigo.", full: "Eu ajudo o amigo.", he: "אני עוזר לחבר.", en: "I help the friend." },
      { pt: "Você ___ (ajudar) o amigo.", full: "Você ajuda o amigo.", he: "את/ה עוזר/ת לחבר.", en: "You help the friend." },
      { pt: "Ele ___ (ajudar) o amigo.", full: "Ele ajuda o amigo.", he: "הוא עוזר לחבר.", en: "He helps the friend." },
      { pt: "Nós ___ (ajudar) o amigo.", full: "Nós ajudamos o amigo.", he: "אנחנו עוזרים לחבר.", en: "We help the friend." },
      { pt: "Eles ___ (ajudar) o amigo.", full: "Eles ajudam o amigo.", he: "הם עוזרים לחבר.", en: "They help the friend." },
      { pt: "Ontem eu ___ (ajudar) o amigo.", full: "Ontem eu ajudei o amigo.", he: "אתמול אני עזרתי לחבר.", en: "Yesterday I helped the friend." },
      { pt: "Ontem você ___ (ajudar) o amigo.", full: "Ontem você ajudou o amigo.", he: "אתמול את/ה עזרת לחבר.", en: "Yesterday you helped the friend." },
      { pt: "Ontem ele ___ (ajudar) o amigo.", full: "Ontem ele ajudou o amigo.", he: "אתמול הוא עזר לחבר.", en: "Yesterday he helped the friend." },
      { pt: "Ontem nós ___ (ajudar) o amigo.", full: "Ontem nós ajudamos o amigo.", he: "אתמול אנחנו עזרנו לחבר.", en: "Yesterday we helped the friend." },
      { pt: "Ontem eles ___ (ajudar) o amigo.", full: "Ontem eles ajudaram o amigo.", he: "אתמול הם עזרו לחבר.", en: "Yesterday they helped the friend." },
    ]
  },
  {
    id: 65,
    level: 15,
    title: { he: "TRABALHAR - השלמת משפטים", en: "TRABALHAR - Fill in the Blank" },
    short: "TRABALHAR",
    cards: [
      { pt: "Eu ___ (trabalhar) muito.", full: "Eu trabalho muito.", he: "אני עובד הרבה.", en: "I work a lot." },
      { pt: "Você ___ (trabalhar) muito.", full: "Você trabalha muito.", he: "את/ה עובד/ת הרבה.", en: "You work a lot." },
      { pt: "Ele ___ (trabalhar) muito.", full: "Ele trabalha muito.", he: "הוא עובד הרבה.", en: "He works a lot." },
      { pt: "Nós ___ (trabalhar) muito.", full: "Nós trabalhamos muito.", he: "אנחנו עובדים הרבה.", en: "We work a lot." },
      { pt: "Eles ___ (trabalhar) muito.", full: "Eles trabalham muito.", he: "הם עובדים הרבה.", en: "They work a lot." },
      { pt: "Ontem eu ___ (trabalhar) muito.", full: "Ontem eu trabalhei muito.", he: "אתמול אני עבדתי הרבה.", en: "Yesterday I worked a lot." },
      { pt: "Ontem você ___ (trabalhar) muito.", full: "Ontem você trabalhou muito.", he: "אתמול את/ה עבדת הרבה.", en: "Yesterday you worked a lot." },
      { pt: "Ontem ele ___ (trabalhar) muito.", full: "Ontem ele trabalhou muito.", he: "אתמול הוא עבד הרבה.", en: "Yesterday he worked a lot." },
      { pt: "Ontem nós ___ (trabalhar) muito.", full: "Ontem nós trabalhamos muito.", he: "אתמול אנחנו עבדנו הרבה.", en: "Yesterday we worked a lot." },
      { pt: "Ontem eles ___ (trabalhar) muito.", full: "Ontem eles trabalharam muito.", he: "אתמול הם עבדו הרבה.", en: "Yesterday they worked a lot." },
    ]
  },
  {
    id: 66,
    level: 15,
    title: { he: "ESTUDAR - השלמת משפטים", en: "ESTUDAR - Fill in the Blank" },
    short: "ESTUDAR",
    cards: [
      { pt: "Eu ___ (estudar) português.", full: "Eu estudo português.", he: "אני לומד פורטוגזית.", en: "I study Portuguese." },
      { pt: "Você ___ (estudar) português.", full: "Você estuda português.", he: "את/ה לומד/ת פורטוגזית.", en: "You study Portuguese." },
      { pt: "Ele ___ (estudar) português.", full: "Ele estuda português.", he: "הוא לומד פורטוגזית.", en: "He studies Portuguese." },
      { pt: "Nós ___ (estudar) português.", full: "Nós estudamos português.", he: "אנחנו לומדים פורטוגזית.", en: "We study Portuguese." },
      { pt: "Eles ___ (estudar) português.", full: "Eles estudam português.", he: "הם לומדים פורטוגזית.", en: "They study Portuguese." },
      { pt: "Ontem eu ___ (estudar) português.", full: "Ontem eu estudei português.", he: "אתמול אני למדתי פורטוגזית.", en: "Yesterday I studied Portuguese." },
      { pt: "Ontem você ___ (estudar) português.", full: "Ontem você estudou português.", he: "אתמול את/ה למדת פורטוגזית.", en: "Yesterday you studied Portuguese." },
      { pt: "Ontem ele ___ (estudar) português.", full: "Ontem ele estudou português.", he: "אתמול הוא למד פורטוגזית.", en: "Yesterday he studied Portuguese." },
      { pt: "Ontem nós ___ (estudar) português.", full: "Ontem nós estudamos português.", he: "אתמול אנחנו למדנו פורטוגזית.", en: "Yesterday we studied Portuguese." },
      { pt: "Ontem eles ___ (estudar) português.", full: "Ontem eles estudaram português.", he: "אתמול הם למדו פורטוגזית.", en: "Yesterday they studied Portuguese." },
    ]
  },
  {
    id: 67,
    level: 15,
    title: { he: "MORAR - השלמת משפטים", en: "MORAR - Fill in the Blank" },
    short: "MORAR",
    cards: [
      { pt: "Eu ___ (morar) no Brasil.", full: "Eu moro no Brasil.", he: "אני גר בברזיל.", en: "I live in Brazil." },
      { pt: "Você ___ (morar) no Brasil.", full: "Você mora no Brasil.", he: "את/ה גר/ה בברזיל.", en: "You live in Brazil." },
      { pt: "Ele ___ (morar) no Brasil.", full: "Ele mora no Brasil.", he: "הוא גר בברזיל.", en: "He lives in Brazil." },
      { pt: "Nós ___ (morar) no Brasil.", full: "Nós moramos no Brasil.", he: "אנחנו גרים בברזיל.", en: "We live in Brazil." },
      { pt: "Eles ___ (morar) no Brasil.", full: "Eles moram no Brasil.", he: "הם גרים בברזיל.", en: "They live in Brazil." },
      { pt: "Ontem eu ___ (morar) no Brasil.", full: "Ontem eu morei no Brasil.", he: "אתמול אני גרתי בברזיל.", en: "Yesterday I lived in Brazil." },
      { pt: "Ontem você ___ (morar) no Brasil.", full: "Ontem você morou no Brasil.", he: "אתמול את/ה גרת בברזיל.", en: "Yesterday you lived in Brazil." },
      { pt: "Ontem ele ___ (morar) no Brasil.", full: "Ontem ele morou no Brasil.", he: "אתמול הוא גר בברזיל.", en: "Yesterday he lived in Brazil." },
      { pt: "Ontem nós ___ (morar) no Brasil.", full: "Ontem nós moramos no Brasil.", he: "אתמול אנחנו גרנו בברזיל.", en: "Yesterday we lived in Brazil." },
      { pt: "Ontem eles ___ (morar) no Brasil.", full: "Ontem eles moraram no Brasil.", he: "אתמול הם גרו בברזיל.", en: "Yesterday they lived in Brazil." },
    ]
  },
  {
    id: 68,
    level: 15,
    title: { he: "GOSTAR - השלמת משפטים", en: "GOSTAR - Fill in the Blank" },
    short: "GOSTAR",
    cards: [
      { pt: "Eu ___ (gostar) de música.", full: "Eu gosto de música.", he: "אני אוהב מוזיקה.", en: "I like music." },
      { pt: "Você ___ (gostar) de música.", full: "Você gosta de música.", he: "את/ה אוהב/ת מוזיקה.", en: "You like music." },
      { pt: "Ele ___ (gostar) de música.", full: "Ele gosta de música.", he: "הוא אוהב מוזיקה.", en: "He likes music." },
      { pt: "Nós ___ (gostar) de música.", full: "Nós gostamos de música.", he: "אנחנו אוהבים מוזיקה.", en: "We like music." },
      { pt: "Eles ___ (gostar) de música.", full: "Eles gostam de música.", he: "הם אוהבים מוזיקה.", en: "They like music." },
      { pt: "Ontem eu ___ (gostar) de música.", full: "Ontem eu gostei de música.", he: "אתמול אני אהבתי מוזיקה.", en: "Yesterday I liked music." },
      { pt: "Ontem você ___ (gostar) de música.", full: "Ontem você gostou de música.", he: "אתמול את/ה אהבת מוזיקה.", en: "Yesterday you liked music." },
      { pt: "Ontem ele ___ (gostar) de música.", full: "Ontem ele gostou de música.", he: "אתמול הוא אהב מוזיקה.", en: "Yesterday he liked music." },
      { pt: "Ontem nós ___ (gostar) de música.", full: "Ontem nós gostamos de música.", he: "אתמול אנחנו אהבנו מוזיקה.", en: "Yesterday we liked music." },
      { pt: "Ontem eles ___ (gostar) de música.", full: "Ontem eles gostaram de música.", he: "אתמול הם אהבו מוזיקה.", en: "Yesterday they liked music." },
    ]
  },
  {
    id: 69,
    level: 15,
    title: { he: "CHEGAR - השלמת משפטים", en: "CHEGAR - Fill in the Blank" },
    short: "CHEGAR",
    cards: [
      { pt: "Eu ___ (chegar) tarde.", full: "Eu chego tarde.", he: "אני מגיע מאוחר.", en: "I arrive late." },
      { pt: "Você ___ (chegar) tarde.", full: "Você chega tarde.", he: "את/ה מגיע/ה מאוחר.", en: "You arrive late." },
      { pt: "Ele ___ (chegar) tarde.", full: "Ele chega tarde.", he: "הוא מגיע מאוחר.", en: "He arrives late." },
      { pt: "Nós ___ (chegar) tarde.", full: "Nós chegamos tarde.", he: "אנחנו מגיעים מאוחר.", en: "We arrive late." },
      { pt: "Eles ___ (chegar) tarde.", full: "Eles chegam tarde.", he: "הם מגיעים מאוחר.", en: "They arrive late." },
      { pt: "Ontem eu ___ (chegar) tarde.", full: "Ontem eu cheguei tarde.", he: "אתמול אני הגעתי מאוחר.", en: "Yesterday I arrived late." },
      { pt: "Ontem você ___ (chegar) tarde.", full: "Ontem você chegou tarde.", he: "אתמול את/ה הגעת מאוחר.", en: "Yesterday you arrived late." },
      { pt: "Ontem ele ___ (chegar) tarde.", full: "Ontem ele chegou tarde.", he: "אתמול הוא הגיע מאוחר.", en: "Yesterday he arrived late." },
      { pt: "Ontem nós ___ (chegar) tarde.", full: "Ontem nós chegamos tarde.", he: "אתמול אנחנו הגענו מאוחר.", en: "Yesterday we arrived late." },
      { pt: "Ontem eles ___ (chegar) tarde.", full: "Ontem eles chegaram tarde.", he: "אתמול הם הגיעו מאוחר.", en: "Yesterday they arrived late." },
    ]
  },
  {
    id: 70,
    level: 15,
    title: { he: "JOGAR - השלמת משפטים", en: "JOGAR - Fill in the Blank" },
    short: "JOGAR",
    cards: [
      { pt: "Eu ___ (jogar) futebol.", full: "Eu jogo futebol.", he: "אני משחק כדורגל.", en: "I play soccer." },
      { pt: "Você ___ (jogar) futebol.", full: "Você joga futebol.", he: "את/ה משחק/ת כדורגל.", en: "You play soccer." },
      { pt: "Ele ___ (jogar) futebol.", full: "Ele joga futebol.", he: "הוא משחק כדורגל.", en: "He plays soccer." },
      { pt: "Nós ___ (jogar) futebol.", full: "Nós jogamos futebol.", he: "אנחנו משחקים כדורגל.", en: "We play soccer." },
      { pt: "Eles ___ (jogar) futebol.", full: "Eles jogam futebol.", he: "הם משחקים כדורגל.", en: "They play soccer." },
      { pt: "Ontem eu ___ (jogar) futebol.", full: "Ontem eu joguei futebol.", he: "אתמול אני שיחקתי כדורגל.", en: "Yesterday I played soccer." },
      { pt: "Ontem você ___ (jogar) futebol.", full: "Ontem você jogou futebol.", he: "אתמול את/ה שיחקת כדורגל.", en: "Yesterday you played soccer." },
      { pt: "Ontem ele ___ (jogar) futebol.", full: "Ontem ele jogou futebol.", he: "אתמול הוא שיחק כדורגל.", en: "Yesterday he played soccer." },
      { pt: "Ontem nós ___ (jogar) futebol.", full: "Ontem nós jogamos futebol.", he: "אתמול אנחנו שיחקנו כדורגל.", en: "Yesterday we played soccer." },
      { pt: "Ontem eles ___ (jogar) futebol.", full: "Ontem eles jogaram futebol.", he: "אתמול הם שיחקו כדורגל.", en: "Yesterday they played soccer." },
    ]
  },
  {
    id: 71,
    level: 16,
    title: { he: "ANDAR - השלמת משפטים", en: "ANDAR - Fill in the Blank" },
    short: "ANDAR",
    cards: [
      { pt: "Eu ___ (andar) no parque.", full: "Eu ando no parque.", he: "אני צועד בפארק.", en: "I walk in the park." },
      { pt: "Você ___ (andar) no parque.", full: "Você anda no parque.", he: "את/ה צועד/ת בפארק.", en: "You walk in the park." },
      { pt: "Ele ___ (andar) no parque.", full: "Ele anda no parque.", he: "הוא צועד בפארק.", en: "He walks in the park." },
      { pt: "Nós ___ (andar) no parque.", full: "Nós andamos no parque.", he: "אנחנו צועדים בפארק.", en: "We walk in the park." },
      { pt: "Eles ___ (andar) no parque.", full: "Eles andam no parque.", he: "הם צועדים בפארק.", en: "They walk in the park." },
      { pt: "Ontem eu ___ (andar) no parque.", full: "Ontem eu andei no parque.", he: "אתמול אני צעדתי בפארק.", en: "Yesterday I walked in the park." },
      { pt: "Ontem você ___ (andar) no parque.", full: "Ontem você andou no parque.", he: "אתמול את/ה צעדת בפארק.", en: "Yesterday you walked in the park." },
      { pt: "Ontem ele ___ (andar) no parque.", full: "Ontem ele andou no parque.", he: "אתמול הוא צעד בפארק.", en: "Yesterday he walked in the park." },
      { pt: "Ontem nós ___ (andar) no parque.", full: "Ontem nós andamos no parque.", he: "אתמול אנחנו צעדנו בפארק.", en: "Yesterday we walked in the park." },
      { pt: "Ontem eles ___ (andar) no parque.", full: "Ontem eles andaram no parque.", he: "אתמול הם צעדו בפארק.", en: "Yesterday they walked in the park." },
    ]
  },
  {
    id: 72,
    level: 16,
    title: { he: "COMPRAR - השלמת משפטים", en: "COMPRAR - Fill in the Blank" },
    short: "COMPRAR",
    cards: [
      { pt: "Eu ___ (comprar) um livro.", full: "Eu compro um livro.", he: "אני קונה ספר.", en: "I buy a book." },
      { pt: "Você ___ (comprar) um livro.", full: "Você compra um livro.", he: "את/ה קונה ספר.", en: "You buy a book." },
      { pt: "Ele ___ (comprar) um livro.", full: "Ele compra um livro.", he: "הוא קונה ספר.", en: "He buys a book." },
      { pt: "Nós ___ (comprar) um livro.", full: "Nós compramos um livro.", he: "אנחנו קונים ספר.", en: "We buy a book." },
      { pt: "Eles ___ (comprar) um livro.", full: "Eles compram um livro.", he: "הם קונים ספר.", en: "They buy a book." },
      { pt: "Ontem eu ___ (comprar) um livro.", full: "Ontem eu comprei um livro.", he: "אתמול אני קניתי ספר.", en: "Yesterday I bought a book." },
      { pt: "Ontem você ___ (comprar) um livro.", full: "Ontem você comprou um livro.", he: "אתמול את/ה קנית ספר.", en: "Yesterday you bought a book." },
      { pt: "Ontem ele ___ (comprar) um livro.", full: "Ontem ele comprou um livro.", he: "אתמול הוא קנה ספר.", en: "Yesterday he bought a book." },
      { pt: "Ontem nós ___ (comprar) um livro.", full: "Ontem nós compramos um livro.", he: "אתמול אנחנו קנינו ספר.", en: "Yesterday we bought a book." },
      { pt: "Ontem eles ___ (comprar) um livro.", full: "Ontem eles compraram um livro.", he: "אתמול הם קנו ספר.", en: "Yesterday they bought a book." },
    ]
  },
  {
    id: 73,
    level: 16,
    title: { he: "VIAJAR - השלמת משפטים", en: "VIAJAR - Fill in the Blank" },
    short: "VIAJAR",
    cards: [
      { pt: "Eu ___ (viajar) muito.", full: "Eu viajo muito.", he: "אני מטייל הרבה.", en: "I travel a lot." },
      { pt: "Você ___ (viajar) muito.", full: "Você viaja muito.", he: "את/ה מטייל/ת הרבה.", en: "You travel a lot." },
      { pt: "Ele ___ (viajar) muito.", full: "Ele viaja muito.", he: "הוא מטייל הרבה.", en: "He travels a lot." },
      { pt: "Nós ___ (viajar) muito.", full: "Nós viajamos muito.", he: "אנחנו מטיילים הרבה.", en: "We travel a lot." },
      { pt: "Eles ___ (viajar) muito.", full: "Eles viajam muito.", he: "הם מטיילים הרבה.", en: "They travel a lot." },
      { pt: "Ontem eu ___ (viajar) muito.", full: "Ontem eu viajei muito.", he: "אתמול אני טיילתי הרבה.", en: "Yesterday I traveled a lot." },
      { pt: "Ontem você ___ (viajar) muito.", full: "Ontem você viajou muito.", he: "אתמול את/ה טיילת הרבה.", en: "Yesterday you traveled a lot." },
      { pt: "Ontem ele ___ (viajar) muito.", full: "Ontem ele viajou muito.", he: "אתמול הוא טייל הרבה.", en: "Yesterday he traveled a lot." },
      { pt: "Ontem nós ___ (viajar) muito.", full: "Ontem nós viajamos muito.", he: "אתמול אנחנו טיילנו הרבה.", en: "Yesterday we traveled a lot." },
      { pt: "Ontem eles ___ (viajar) muito.", full: "Ontem eles viajaram muito.", he: "אתמול הם טיילו הרבה.", en: "Yesterday they traveled a lot." },
    ]
  },
  {
    id: 74,
    level: 16,
    title: { he: "PERGUNTAR - השלמת משפטים", en: "PERGUNTAR - Fill in the Blank" },
    short: "PERGUNTAR",
    cards: [
      { pt: "Eu ___ (perguntar) muito.", full: "Eu pergunto muito.", he: "אני שואל הרבה.", en: "I ask a lot." },
      { pt: "Você ___ (perguntar) muito.", full: "Você pergunta muito.", he: "את/ה שואל/ת הרבה.", en: "You ask a lot." },
      { pt: "Ele ___ (perguntar) muito.", full: "Ele pergunta muito.", he: "הוא שואל הרבה.", en: "He asks a lot." },
      { pt: "Nós ___ (perguntar) muito.", full: "Nós perguntamos muito.", he: "אנחנו שואלים הרבה.", en: "We ask a lot." },
      { pt: "Eles ___ (perguntar) muito.", full: "Eles perguntam muito.", he: "הם שואלים הרבה.", en: "They ask a lot." },
      { pt: "Ontem eu ___ (perguntar) muito.", full: "Ontem eu perguntei muito.", he: "אתמול אני שאלתי הרבה.", en: "Yesterday I asked a lot." },
      { pt: "Ontem você ___ (perguntar) muito.", full: "Ontem você perguntou muito.", he: "אתמול את/ה שאלת הרבה.", en: "Yesterday you asked a lot." },
      { pt: "Ontem ele ___ (perguntar) muito.", full: "Ontem ele perguntou muito.", he: "אתמול הוא שאל הרבה.", en: "Yesterday he asked a lot." },
      { pt: "Ontem nós ___ (perguntar) muito.", full: "Ontem nós perguntamos muito.", he: "אתמול אנחנו שאלנו הרבה.", en: "Yesterday we asked a lot." },
      { pt: "Ontem eles ___ (perguntar) muito.", full: "Ontem eles perguntaram muito.", he: "אתמול הם שאלו הרבה.", en: "Yesterday they asked a lot." },
    ]
  },
  {
    id: 75,
    level: 16,
    title: { he: "VISITAR - השלמת משפטים", en: "VISITAR - Fill in the Blank" },
    short: "VISITAR",
    cards: [
      { pt: "Eu ___ (visitar) a família.", full: "Eu visito a família.", he: "אני מבקר את המשפחה.", en: "I visit the family." },
      { pt: "Você ___ (visitar) a família.", full: "Você visita a família.", he: "את/ה מבקר/ת את המשפחה.", en: "You visit the family." },
      { pt: "Ele ___ (visitar) a família.", full: "Ele visita a família.", he: "הוא מבקר את המשפחה.", en: "He visits the family." },
      { pt: "Nós ___ (visitar) a família.", full: "Nós visitamos a família.", he: "אנחנו מבקרים את המשפחה.", en: "We visit the family." },
      { pt: "Eles ___ (visitar) a família.", full: "Eles visitam a família.", he: "הם מבקרים את המשפחה.", en: "They visit the family." },
      { pt: "Ontem eu ___ (visitar) a família.", full: "Ontem eu visitei a família.", he: "אתמול אני ביקרתי את המשפחה.", en: "Yesterday I visited the family." },
      { pt: "Ontem você ___ (visitar) a família.", full: "Ontem você visitou a família.", he: "אתמול את/ה ביקרת את המשפחה.", en: "Yesterday you visited the family." },
      { pt: "Ontem ele ___ (visitar) a família.", full: "Ontem ele visitou a família.", he: "אתמול הוא ביקר את המשפחה.", en: "Yesterday he visited the family." },
      { pt: "Ontem nós ___ (visitar) a família.", full: "Ontem nós visitamos a família.", he: "אתמול אנחנו ביקרנו את המשפחה.", en: "Yesterday we visited the family." },
      { pt: "Ontem eles ___ (visitar) a família.", full: "Ontem eles visitaram a família.", he: "אתמול הם ביקרו את המשפחה.", en: "Yesterday they visited the family." },
    ]
  },
  {
    id: 76,
    level: 16,
    title: { he: "ESCUTAR - השלמת משפטים", en: "ESCUTAR - Fill in the Blank" },
    short: "ESCUTAR",
    cards: [
      { pt: "Eu ___ (escutar) música.", full: "Eu escuto música.", he: "אני מקשיב למוזיקה.", en: "I listen to music." },
      { pt: "Você ___ (escutar) música.", full: "Você escuta música.", he: "את/ה מקשיב/ה למוזיקה.", en: "You listen to music." },
      { pt: "Ele ___ (escutar) música.", full: "Ele escuta música.", he: "הוא מקשיב למוזיקה.", en: "He listens to music." },
      { pt: "Nós ___ (escutar) música.", full: "Nós escutamos música.", he: "אנחנו מקשיבים למוזיקה.", en: "We listen to music." },
      { pt: "Eles ___ (escutar) música.", full: "Eles escutam música.", he: "הם מקשיבים למוזיקה.", en: "They listen to music." },
      { pt: "Ontem eu ___ (escutar) música.", full: "Ontem eu escutei música.", he: "אתמול אני הקשבתי למוזיקה.", en: "Yesterday I listened to music." },
      { pt: "Ontem você ___ (escutar) música.", full: "Ontem você escutou música.", he: "אתמול את/ה הקשבת למוזיקה.", en: "Yesterday you listened to music." },
      { pt: "Ontem ele ___ (escutar) música.", full: "Ontem ele escutou música.", he: "אתמול הוא הקשיב למוזיקה.", en: "Yesterday he listened to music." },
      { pt: "Ontem nós ___ (escutar) música.", full: "Ontem nós escutamos música.", he: "אתמול אנחנו הקשבנו למוזיקה.", en: "Yesterday we listened to music." },
      { pt: "Ontem eles ___ (escutar) música.", full: "Ontem eles escutaram música.", he: "אתמול הם הקשיבו למוזיקה.", en: "Yesterday they listened to music." },
    ]
  },
  {
    id: 77,
    level: 16,
    title: { he: "ESPERAR - השלמת משפטים", en: "ESPERAR - Fill in the Blank" },
    short: "ESPERAR",
    cards: [
      { pt: "Eu ___ (esperar) o ônibus.", full: "Eu espero o ônibus.", he: "אני מחכה לאוטובוס.", en: "I wait for the bus." },
      { pt: "Você ___ (esperar) o ônibus.", full: "Você espera o ônibus.", he: "את/ה מחכה לאוטובוס.", en: "You wait for the bus." },
      { pt: "Ele ___ (esperar) o ônibus.", full: "Ele espera o ônibus.", he: "הוא מחכה לאוטובוס.", en: "He waits for the bus." },
      { pt: "Nós ___ (esperar) o ônibus.", full: "Nós esperamos o ônibus.", he: "אנחנו מחכים לאוטובוס.", en: "We wait for the bus." },
      { pt: "Eles ___ (esperar) o ônibus.", full: "Eles esperam o ônibus.", he: "הם מחכים לאוטובוס.", en: "They wait for the bus." },
      { pt: "Ontem eu ___ (esperar) o ônibus.", full: "Ontem eu esperei o ônibus.", he: "אתמול אני חיכיתי לאוטובוס.", en: "Yesterday I waited for the bus." },
      { pt: "Ontem você ___ (esperar) o ônibus.", full: "Ontem você esperou o ônibus.", he: "אתמול את/ה חיכית לאוטובוס.", en: "Yesterday you waited for the bus." },
      { pt: "Ontem ele ___ (esperar) o ônibus.", full: "Ontem ele esperou o ônibus.", he: "אתמול הוא חיכה לאוטובוס.", en: "Yesterday he waited for the bus." },
      { pt: "Ontem nós ___ (esperar) o ônibus.", full: "Ontem nós esperamos o ônibus.", he: "אתמול אנחנו חיכינו לאוטובוס.", en: "Yesterday we waited for the bus." },
      { pt: "Ontem eles ___ (esperar) o ônibus.", full: "Ontem eles esperaram o ônibus.", he: "אתמול הם חיכו לאוטובוס.", en: "Yesterday they waited for the bus." },
    ]
  },
  {
    id: 78,
    level: 16,
    title: { he: "PAGAR - השלמת משפטים", en: "PAGAR - Fill in the Blank" },
    short: "PAGAR",
    cards: [
      { pt: "Eu ___ (pagar) a conta.", full: "Eu pago a conta.", he: "אני משלם את החשבון.", en: "I pay the bill." },
      { pt: "Você ___ (pagar) a conta.", full: "Você paga a conta.", he: "את/ה משלם/ת את החשבון.", en: "You pay the bill." },
      { pt: "Ele ___ (pagar) a conta.", full: "Ele paga a conta.", he: "הוא משלם את החשבון.", en: "He pays the bill." },
      { pt: "Nós ___ (pagar) a conta.", full: "Nós pagamos a conta.", he: "אנחנו משלמים את החשבון.", en: "We pay the bill." },
      { pt: "Eles ___ (pagar) a conta.", full: "Eles pagam a conta.", he: "הם משלמים את החשבון.", en: "They pay the bill." },
      { pt: "Ontem eu ___ (pagar) a conta.", full: "Ontem eu paguei a conta.", he: "אתמול אני שילמתי את החשבון.", en: "Yesterday I paid the bill." },
      { pt: "Ontem você ___ (pagar) a conta.", full: "Ontem você pagou a conta.", he: "אתמול את/ה שילמת את החשבון.", en: "Yesterday you paid the bill." },
      { pt: "Ontem ele ___ (pagar) a conta.", full: "Ontem ele pagou a conta.", he: "אתמול הוא שילם את החשבון.", en: "Yesterday he paid the bill." },
      { pt: "Ontem nós ___ (pagar) a conta.", full: "Ontem nós pagamos a conta.", he: "אתמול אנחנו שילמנו את החשבון.", en: "Yesterday we paid the bill." },
      { pt: "Ontem eles ___ (pagar) a conta.", full: "Ontem eles pagaram a conta.", he: "אתמול הם שילמו את החשבון.", en: "Yesterday they paid the bill." },
    ]
  },

  // ---------------- Level 17: Sentence practice (reused from earlier lessons) ----------------
  {
    id: 79,
    level: 17,
    title: { he: "תרגול משפטים 1", en: "Sentence Practice 1" },
    cards: [
      { pt: "Eu ___ (ser) de Israel", full: "Eu sou de Israel", he: "אני מישראל", en: "I am from Israel" },
      { pt: "Ela ___ (ser) professora", full: "Ela é professora", he: "היא מורה", en: "She is a teacher" },
      { pt: "___ (estar) bem", full: "Estou bem", he: "אני בסדר / טוב", en: "I'm fine" },
      { pt: "___ (estar) cansado", full: "Estou cansado", he: "אני עייף", en: "I'm tired" },
      { pt: "Como você ___ (estar)?", full: "Como você está?", he: "מה שלומך?", en: "How are you?" },
      { pt: "___ (estar) com fome", full: "Estou com fome", he: "אני רעב", en: "I'm hungry" },
      { pt: "Eu ___ (ter) um carro", full: "Eu tenho um carro", he: "יש לי מכונית", en: "I have a car" },
      { pt: "Ela ___ (ter) dois filhos", full: "Ela tem dois filhos", he: "יש לה שני ילדים", en: "She has two children" },
      { pt: "Nós ___ (ter) tempo", full: "Nós temos tempo", he: "יש לנו זמן", en: "We have time" },
      { pt: "Eles ___ (ter) fome", full: "Eles têm fome", he: "הם רעבים", en: "They are hungry" },
    ]
  },
  {
    id: 80,
    level: 17,
    title: { he: "תרגול משפטים 2", en: "Sentence Practice 2" },
    cards: [
      { pt: "Eu ___ (ir) para casa", full: "Eu vou para casa", he: "אני הולך/ת הביתה", en: "I'm going home" },
      { pt: "Ela ___ (ir) ao mercado", full: "Ela vai ao mercado", he: "היא הולכת לשוק", en: "She's going to the market" },
      { pt: "Nós ___ (ir) à praia", full: "Nós vamos à praia", he: "אנחנו הולכים לחוף", en: "We're going to the beach" },
      { pt: "Eles ___ (ir) de ônibus", full: "Eles vão de ônibus", he: "הם נוסעים באוטובוס", en: "They go by bus" },
      { pt: "Eu ___ (fazer) o almoço", full: "Eu faço o almoço", he: "אני מכין/ה את הצהריים", en: "I make lunch" },
      { pt: "Ele ___ (fazer) exercício", full: "Ele faz exercício", he: "הוא מתאמן", en: "He exercises" },
      { pt: "Nós ___ (fazer) um bolo", full: "Nós fazemos um bolo", he: "אנחנו מכינים עוגה", en: "We make a cake" },
      { pt: "Elas ___ (fazer) compras", full: "Elas fazem compras", he: "הן עושות קניות", en: "They go shopping" },
      { pt: "Eu ___ (querer) água", full: "Eu quero água", he: "אני רוצה מים", en: "I want water" },
      { pt: "Você ___ (querer) café?", full: "Você quer café?", he: "את/ה רוצה קפה?", en: "Do you want coffee?" },
    ]
  },
  {
    id: 81,
    level: 17,
    title: { he: "תרגול משפטים 3", en: "Sentence Practice 3" },
    cards: [
      { pt: "Nós ___ (querer) viajar", full: "Nós queremos viajar", he: "אנחנו רוצים לטייל", en: "We want to travel" },
      { pt: "Eles ___ (querer) ajuda", full: "Eles querem ajuda", he: "הם רוצים עזרה", en: "They want help" },
      { pt: "Eu ___ (poder) ajudar", full: "Eu posso ajudar", he: "אני יכול/ה לעזור", en: "I can help" },
      { pt: "Você ___ (poder) entrar", full: "Você pode entrar", he: "את/ה יכול/ה להיכנס", en: "You can come in" },
      { pt: "Nós ___ (poder) esperar", full: "Nós podemos esperar", he: "אנחנו יכולים לחכות", en: "We can wait" },
      { pt: "Eles ___ (poder) ficar", full: "Eles podem ficar", he: "הם יכולים להישאר", en: "They can stay" },
      { pt: "Eu ___ (falar) português", full: "Eu falo português", he: "אני מדבר/ת פורטוגזית", en: "I speak Portuguese" },
      { pt: "Ela ___ (falar) muito rápido", full: "Ela fala muito rápido", he: "היא מדברת מהר מאוד", en: "She speaks very fast" },
      { pt: "Nós ___ (falar) ao telefone", full: "Nós falamos ao telefone", he: "אנחנו מדברים בטלפון", en: "We talk on the phone" },
      { pt: "Eles ___ (falar) inglês", full: "Eles falam inglês", he: "הם מדברים אנגלית", en: "They speak English" },
    ]
  },
  {
    id: 82,
    level: 17,
    title: { he: "תרגול משפטים 4", en: "Sentence Practice 4" },
    cards: [
      { pt: "Eu ___ (comer) fruta", full: "Eu como fruta", he: "אני אוכל/ת פרי", en: "I eat fruit" },
      { pt: "Ele ___ (comer) muito rápido", full: "Ele come muito rápido", he: "הוא אוכל מהר מאוד", en: "He eats very fast" },
      { pt: "Nós ___ (comer) juntos", full: "Nós comemos juntos", he: "אנחנו אוכלים יחד", en: "We eat together" },
      { pt: "Elas ___ (comer) pizza", full: "Elas comem pizza", he: "הן אוכלות פיצה", en: "They eat pizza" },
      { pt: "Eu ___ (abrir) a porta", full: "Eu abro a porta", he: "אני פותח/ת את הדלת", en: "I open the door" },
      { pt: "Ela ___ (abrir) a janela", full: "Ela abre a janela", he: "היא פותחת את החלון", en: "She opens the window" },
      { pt: "Nós ___ (abrir) a loja", full: "Nós abrimos a loja", he: "אנחנו פותחים את החנות", en: "We open the store" },
      { pt: "Eles ___ (abrir) os livros", full: "Eles abrem os livros", he: "הם פותחים את הספרים", en: "They open the books" },
      { pt: "Eu ___ (saber) a resposta", full: "Eu sei a resposta", he: "אני יודע/ת את התשובה", en: "I know the answer" },
      { pt: "Você ___ (saber) nadar?", full: "Você sabe nadar?", he: "את/ה יודע/ת לשחות?", en: "Do you know how to swim?" },
    ]
  },
  {
    id: 83,
    level: 17,
    title: { he: "תרגול משפטים 5", en: "Sentence Practice 5" },
    cards: [
      { pt: "Nós ___ (saber) a verdade", full: "Nós sabemos a verdade", he: "אנחנו יודעים את האמת", en: "We know the truth" },
      { pt: "Eles ___ (saber) tudo", full: "Eles sabem tudo", he: "הם יודעים הכול", en: "They know everything" },
      { pt: "Eu ___ (ver) o mar", full: "Eu vejo o mar", he: "אני רואה את הים", en: "I see the sea" },
      { pt: "Ela ___ (ver) um filme", full: "Ela vê um filme", he: "היא רואה סרט", en: "She watches a movie" },
      { pt: "Nós ___ (ver) as estrelas", full: "Nós vemos as estrelas", he: "אנחנו רואים את הכוכבים", en: "We see the stars" },
      { pt: "Eles ___ (ver) tudo", full: "Eles veem tudo", he: "הם רואים הכול", en: "They see everything" },
      { pt: "Eu ___ (ser) professor", full: "Eu fui professor", he: "הייתי מורה", en: "I was a teacher" },
      { pt: "Ela ___ (ser) feliz", full: "Ela foi feliz", he: "היא הייתה שמחה", en: "She was happy" },
      { pt: "Nós ___ (ser) amigos", full: "Nós fomos amigos", he: "היינו חברים", en: "We were friends" },
      { pt: "Eles ___ (ser) os primeiros", full: "Eles foram os primeiros", he: "הם היו הראשונים", en: "They were the first" },
    ]
  },
  {
    id: 84,
    level: 17,
    title: { he: "תרגול משפטים 6", en: "Sentence Practice 6" },
    cards: [
      { pt: "Eu ___ (estar) doente", full: "Eu estive doente", he: "הייתי חולה", en: "I was sick" },
      { pt: "Ela ___ (estar) em casa", full: "Ela esteve em casa", he: "היא הייתה בבית", en: "She was at home" },
      { pt: "Nós ___ (estar) na praia", full: "Nós estivemos na praia", he: "היינו בחוף", en: "We were at the beach" },
      { pt: "Eles ___ (estar) ocupados", full: "Eles estiveram ocupados", he: "הם היו עסוקים", en: "They were busy" },
      { pt: "Eu ___ (ter) uma ideia", full: "Eu tive uma ideia", he: "הייתה לי אידאה", en: "I had an idea" },
      { pt: "Ela ___ (ter) um filho", full: "Ela teve um filho", he: "היה לה בן", en: "She had a son" },
      { pt: "Nós ___ (ter) sorte", full: "Nós tivemos sorte", he: "היה לנו מזל", en: "We had luck" },
      { pt: "Eles ___ (ter) problemas", full: "Eles tiveram problemas", he: "היו להם בעיות", en: "They had problems" },
      { pt: "Eu ___ (ir) ao cinema", full: "Eu fui ao cinema", he: "הלכתי לקולנוע", en: "I went to the cinema" },
      { pt: "Ela ___ (ir) para o trabalho", full: "Ela foi para o trabalho", he: "היא הלכה לעבודה", en: "She went to work" },
    ]
  },
  {
    id: 85,
    level: 17,
    title: { he: "תרגול משפטים 7", en: "Sentence Practice 7" },
    cards: [
      { pt: "Nós ___ (ir) à festa", full: "Nós fomos à festa", he: "הלכנו למסיבה", en: "We went to the party" },
      { pt: "Eles ___ (ir) embora", full: "Eles foram embora", he: "הם הלכו משם", en: "They left" },
      { pt: "Eu ___ (fazer) o jantar", full: "Eu fiz o jantar", he: "הכנתי את ארוחת הערב", en: "I made dinner" },
      { pt: "Ela ___ (fazer) uma pergunta", full: "Ela fez uma pergunta", he: "היא שאלה שאלה", en: "She asked a question" },
      { pt: "Nós ___ (fazer) a viagem", full: "Nós fizemos a viagem", he: "עשינו את הנסיעה", en: "We took the trip" },
      { pt: "Eles ___ (fazer) barulho", full: "Eles fizeram barulho", he: "הם עשו רעש", en: "They made noise" },
      { pt: "Eu ___ (falar) com ela", full: "Eu falei com ela", he: "דיברתי איתה", en: "I talked to her" },
      { pt: "Ele ___ (falar) a verdade", full: "Ele falou a verdade", he: "הוא דיבר את האמת", en: "He told the truth" },
      { pt: "Nós ___ (falar) sobre o filme", full: "Nós falamos sobre o filme", he: "דיברנו על הסרט", en: "We talked about the movie" },
      { pt: "Eles ___ (falar) alto", full: "Eles falaram alto", he: "הם דיברו בקול רם", en: "They spoke loudly" },
    ]
  },
  {
    id: 86,
    level: 17,
    title: { he: "תרגול משפטים 8", en: "Sentence Practice 8" },
    cards: [
      { pt: "Eu ___ (comer) demais", full: "Eu comi demais", he: "אכלתי יותר מדי", en: "I ate too much" },
      { pt: "Ela ___ (comer) a sobremesa", full: "Ela comeu a sobremesa", he: "היא אכלה את הקינוח", en: "She ate the dessert" },
      { pt: "Nós ___ (comer) no restaurante", full: "Nós comemos no restaurante", he: "אכלנו במסעדה", en: "We ate at the restaurant" },
      { pt: "Eles ___ (comer) tudo", full: "Eles comeram tudo", he: "הם אכלו הכול", en: "They ate everything" },
      { pt: "Eu ___ (abrir) o presente", full: "Eu abri o presente", he: "פתחתי את המתנה", en: "I opened the present" },
      { pt: "Ela ___ (abrir) a porta", full: "Ela abriu a porta", he: "היא פתחה את הדלת", en: "She opened the door" },
      { pt: "Nós ___ (abrir) o restaurante", full: "Nós abrimos o restaurante", he: "פתחנו את המסעדה", en: "We opened the restaurant" },
      { pt: "Eles ___ (abrir) a loja", full: "Eles abriram a loja", he: "הם פתחו את החנות", en: "They opened the store" },
      { pt: "Eu ___ (querer) ajudar", full: "Eu quis ajudar", he: "רציתי לעזור", en: "I wanted to help" },
      { pt: "Ela ___ (querer) sair", full: "Ela quis sair", he: "היא רצתה לצאת", en: "She wanted to leave" },
    ]
  },
  {
    id: 87,
    level: 17,
    title: { he: "תרגול משפטים 9", en: "Sentence Practice 9" },
    cards: [
      { pt: "Nós ___ (querer) ficar", full: "Nós quisemos ficar", he: "רצינו להישאר", en: "We wanted to stay" },
      { pt: "Eles ___ (querer) saber", full: "Eles quiseram saber", he: "הם רצו לדעת", en: "They wanted to know" },
      { pt: "Eu ___ (poder) ajudar", full: "Eu pude ajudar", he: "יכולתי לעזור", en: "I was able to help" },
      { pt: "Ela ___ (poder) vir", full: "Ela pôde vir", he: "היא יכלה לבוא", en: "She was able to come" },
      { pt: "Nós ___ (poder) descansar", full: "Nós pudemos descansar", he: "יכולנו לנוח", en: "We were able to rest" },
      { pt: "Eles ___ (poder) ver", full: "Eles puderam ver", he: "הם יכלו לראות", en: "They were able to see" },
    ]
  },

  // ---------------- Levels 18-23: Vocabulary expansion ----------------
  {
    id: 88,
    level: 18,
    title: { he: "בריאות", en: "Health" },
    cards: [
      { pt: "dor de cabeça", he: "כאב ראש", en: "headache" },
      { pt: "febre", he: "חום (מחלה)", en: "fever" },
      { pt: "gripe", he: "שפעת", en: "flu" },
      { pt: "remédio", he: "תרופה", en: "medicine" },
      { pt: "tosse", he: "שיעול", en: "cough" },
      { pt: "alergia", he: "אלרגיה", en: "allergy" },
      { pt: "vacina", he: "חיסון", en: "vaccine" },
      { pt: "termômetro", he: "מדחום", en: "thermometer" },
      { pt: "saudável", he: "בריא", en: "healthy" },
      { pt: "resfriado", he: "הצטננות", en: "common cold" },
    ]
  },
  {
    id: 89,
    level: 18,
    title: { he: "כלי מטבח", en: "Kitchen Items" },
    cards: [
      { pt: "panela", he: "סיר", en: "pot" },
      { pt: "frigideira", he: "מחבת", en: "frying pan" },
      { pt: "forno", he: "תנור", en: "oven" },
      { pt: "geladeira", he: "מקרר", en: "fridge" },
      { pt: "fogão", he: "כיריים", en: "stove" },
      { pt: "pia", he: "כיור", en: "sink" },
      { pt: "micro-ondas", he: "מיקרוגל", en: "microwave" },
      { pt: "liquidificador", he: "בלנדר", en: "blender" },
      { pt: "tigela", he: "קערה", en: "bowl" },
      { pt: "toalha", he: "מגבת", en: "towel" },
    ]
  },
  {
    id: 90,
    level: 18,
    title: { he: "טבע מורחב", en: "Nature Extended" },
    cards: [
      { pt: "floresta", he: "יער", en: "forest" },
      { pt: "rio", he: "נהר", en: "river" },
      { pt: "lago", he: "אגם", en: "lake" },
      { pt: "oceano", he: "אוקיינוס", en: "ocean" },
      { pt: "deserto", he: "מדבר", en: "desert" },
      { pt: "ilha", he: "אי", en: "island" },
      { pt: "pedra", he: "אבן", en: "rock / stone" },
      { pt: "areia", he: "חול", en: "sand" },
      { pt: "folha", he: "עלה", en: "leaf" },
      { pt: "flor", he: "פרח", en: "flower" },
    ]
  },
  {
    id: 91,
    level: 18,
    title: { he: "חיות מורחב", en: "Animals Extended" },
    cards: [
      { pt: "tubarão", he: "כריש", en: "shark" },
      { pt: "baleia", he: "לוויתן", en: "whale" },
      { pt: "tartaruga", he: "צב", en: "turtle" },
      { pt: "cobra", he: "נחש", en: "snake" },
      { pt: "aranha", he: "עכביש", en: "spider" },
      { pt: "borboleta", he: "פרפר", en: "butterfly" },
      { pt: "abelha", he: "דבורה", en: "bee" },
      { pt: "formiga", he: "נמלה", en: "ant" },
      { pt: "coelho", he: "ארנב", en: "rabbit" },
      { pt: "urso", he: "דוב", en: "bear" },
    ]
  },
  {
    id: 92,
    level: 18,
    title: { he: "מוזיקה וכלי נגינה", en: "Music & Instruments" },
    cards: [
      { pt: "violão", he: "גיטרה", en: "guitar" },
      { pt: "piano", he: "פסנתר", en: "piano" },
      { pt: "bateria", he: "תזמורת כלי הקשה / תוף", en: "drums" },
      { pt: "violino", he: "כינור", en: "violin" },
      { pt: "flauta", he: "חלילית", en: "flute" },
      { pt: "cantor", he: "זמר", en: "singer" },
      { pt: "banda", he: "הרכב מוזיקלי", en: "band" },
      { pt: "show", he: "הופעה", en: "concert / show" },
      { pt: "microfone", he: "מיקרופון", en: "microphone" },
      { pt: "canção", he: "שיר", en: "song" },
    ]
  },
  {
    id: 93,
    level: 19,
    title: { he: "ביגוד ואביזרים", en: "Clothing & Accessories" },
    cards: [
      { pt: "bolsa", he: "תיק", en: "bag / purse" },
      { pt: "mochila", he: "תיק גב", en: "backpack" },
      { pt: "anel", he: "טבעת", en: "ring" },
      { pt: "colar", he: "שרשרת", en: "necklace" },
      { pt: "pulseira", he: "צמיד", en: "bracelet" },
      { pt: "luva", he: "כפפה", en: "glove" },
      { pt: "pijama", he: "פיג'מה", en: "pajamas" },
      { pt: "roupa de banho", he: "בגד ים", en: "swimsuit" },
      { pt: "gravata", he: "עניבה", en: "tie" },
      { pt: "bota", he: "מגף", en: "boot" },
    ]
  },
  {
    id: 94,
    level: 19,
    title: { he: "תחבורה מורחב", en: "Transport Extended" },
    cards: [
      { pt: "avião", he: "מטוס", en: "airplane" },
      { pt: "barco", he: "סירה", en: "boat" },
      { pt: "metrô", he: "רכבת תחתית", en: "subway" },
      { pt: "táxi", he: "מונית", en: "taxi" },
      { pt: "caminhão", he: "משאית", en: "truck" },
      { pt: "bicicleta", he: "אופניים", en: "bicycle" },
      { pt: "moto", he: "אופנוע", en: "motorcycle" },
      { pt: "navio", he: "אונייה", en: "ship" },
      { pt: "helicóptero", he: "מסוק", en: "helicopter" },
      { pt: "patinete", he: "קורקינט", en: "scooter" },
    ]
  },
  {
    id: 95,
    level: 19,
    title: { he: "מקצועות מורחב", en: "Professions Extended" },
    cards: [
      { pt: "dentista", he: "רופא שיניים", en: "dentist" },
      { pt: "veterinário", he: "רופא בהמות", en: "vet" },
      { pt: "ator", he: "שחקן", en: "actor" },
      { pt: "piloto", he: "טייס", en: "pilot" },
      { pt: "bombeiro", he: "כבאי", en: "firefighter" },
      { pt: "padeiro", he: "אופה", en: "baker" },
      { pt: "eletricista", he: "חשמלאי", en: "electrician" },
      { pt: "encanador", he: "אינסטלטור", en: "plumber" },
      { pt: "jornalista", he: "עיתונאי", en: "journalist" },
      { pt: "programador", he: "מתכנת", en: "programmer" },
    ]
  },
  {
    id: 96,
    level: 19,
    title: { he: "רגשות מורחב", en: "Emotions Extended" },
    cards: [
      { pt: "orgulhoso", he: "גאה", en: "proud" },
      { pt: "envergonhado", he: "נבוך", en: "embarrassed" },
      { pt: "confuso", he: "מבולבל", en: "confused" },
      { pt: "aliviado", he: "מוקל", en: "relieved" },
      { pt: "entediado", he: "משועמם", en: "bored" },
      { pt: "curioso", he: "סקרן", en: "curious" },
      { pt: "calmo", he: "רגוע", en: "calm" },
      { pt: "preocupado", he: "מודאג", en: "worried" },
      { pt: "grato", he: "אסיר תודה", en: "grateful" },
      { pt: "decepcionado", he: "מאוכזב", en: "disappointed" },
    ]
  },
  {
    id: 97,
    level: 19,
    title: { he: "תיאורי אופי", en: "Personality Adjectives" },
    cards: [
      { pt: "simpático", he: "נחמד / חביב", en: "nice / friendly" },
      { pt: "engraçado", he: "מצחיק", en: "funny" },
      { pt: "inteligente", he: "חכם", en: "smart" },
      { pt: "gentil", he: "אדיב", en: "kind" },
      { pt: "tímido", he: "ביישן", en: "shy" },
      { pt: "corajoso", he: "אמיץ", en: "brave" },
      { pt: "honesto", he: "כן / הגון", en: "honest" },
      { pt: "paciente", he: "סבלני", en: "patient" },
      { pt: "generoso", he: "נדיב", en: "generous" },
      { pt: "teimoso", he: "עקשן", en: "stubborn" },
    ]
  },
  {
    id: 98,
    level: 20,
    title: { he: "בבית הספר", en: "At School" },
    cards: [
      { pt: "caderno", he: "מחברת", en: "notebook" },
      { pt: "lápis", he: "עיפרון", en: "pencil" },
      { pt: "borracha", he: "מחק", en: "eraser" },
      { pt: "quadro", he: "לוח", en: "board" },
      { pt: "régua", he: "סרגל", en: "ruler" },
      { pt: "prova", he: "מבחן", en: "test" },
      { pt: "nota", he: "ציון", en: "grade" },
      { pt: "recreio", he: "הפסקה", en: "recess" },
      { pt: "diretor", he: "מנהל (בית ספר)", en: "principal" },
      { pt: "aluno", he: "תלמיד", en: "pupil / student" },
    ]
  },
  {
    id: 99,
    level: 20,
    title: { he: "ירקות", en: "Vegetables" },
    cards: [
      { pt: "batata", he: "תפוח אדמה", en: "potato" },
      { pt: "cenoura", he: "גזר", en: "carrot" },
      { pt: "tomate", he: "עגבנייה", en: "tomato" },
      { pt: "cebola", he: "בצל", en: "onion" },
      { pt: "alface", he: "חסה", en: "lettuce" },
      { pt: "pimentão", he: "פפריקה", en: "bell pepper" },
      { pt: "milho", he: "תירס", en: "corn" },
      { pt: "brócolis", he: "ברוקולי", en: "broccoli" },
      { pt: "pepino", he: "מלפפון", en: "cucumber" },
      { pt: "abobrinha", he: "קישוא", en: "zucchini" },
    ]
  },
  {
    id: 100,
    level: 20,
    title: { he: "פירות", en: "Fruits" },
    cards: [
      { pt: "maçã", he: "תפוח", en: "apple" },
      { pt: "banana", he: "בננה", en: "banana" },
      { pt: "laranja", he: "תפוז", en: "orange" },
      { pt: "uva", he: "ענב", en: "grape" },
      { pt: "morango", he: "תות", en: "strawberry" },
      { pt: "melancia", he: "אבטיח", en: "watermelon" },
      { pt: "abacaxi", he: "אננס", en: "pineapple" },
      { pt: "manga", he: "מנגו", en: "mango" },
      { pt: "limão", he: "לימון", en: "lemon" },
      { pt: "pêra", he: "אגס", en: "pear" },
    ]
  },
  {
    id: 101,
    level: 20,
    title: { he: "משקאות מורחב", en: "Drinks Extended" },
    cards: [
      { pt: "suco", he: "מיץ", en: "juice" },
      { pt: "cerveja", he: "בירה", en: "beer" },
      { pt: "vinho", he: "יין", en: "wine" },
      { pt: "refrigerante", he: "משקה קל / קולה", en: "soda" },
      { pt: "chá", he: "תה", en: "tea" },
      { pt: "achocolatado", he: "שוקו", en: "chocolate milk" },
      { pt: "vitamina", he: "שייק פירות", en: "fruit smoothie" },
      { pt: "limonada", he: "לימונדה", en: "lemonade" },
      { pt: "água de coco", he: "מי קוקוס", en: "coconut water" },
      { pt: "refresco", he: "משקה פירות קר", en: "cold fruit drink" },
    ]
  },
  {
    id: 102,
    level: 20,
    title: { he: "צורות וגדלים", en: "Shapes & Sizes" },
    cards: [
      { pt: "círculo", he: "עיגול", en: "circle" },
      { pt: "quadrado", he: "ריבוע", en: "square" },
      { pt: "triângulo", he: "משולש", en: "triangle" },
      { pt: "retângulo", he: "מלבן", en: "rectangle" },
      { pt: "linha", he: "קו", en: "line" },
      { pt: "ponto", he: "נקודה", en: "point / dot" },
      { pt: "alto", he: "גבוה", en: "tall" },
      { pt: "baixo", he: "נמוך / קצר", en: "short / low" },
      { pt: "largo", he: "רחב", en: "wide" },
      { pt: "estreito", he: "צר", en: "narrow" },
    ]
  },
  {
    id: 103,
    level: 21,
    title: { he: "חומרים", en: "Materials" },
    cards: [
      { pt: "madeira", he: "עץ (חומר)", en: "wood" },
      { pt: "plástico", he: "פלסטיק", en: "plastic" },
      { pt: "metal", he: "מתכת", en: "metal" },
      { pt: "vidro", he: "זכוכית", en: "glass (material)" },
      { pt: "couro", he: "עור", en: "leather" },
      { pt: "algodão", he: "כותנה", en: "cotton" },
      { pt: "ouro", he: "זהב", en: "gold" },
      { pt: "prata", he: "כסף (מתכת)", en: "silver" },
      { pt: "ferro", he: "ברזל", en: "iron" },
      { pt: "tecido", he: "בד", en: "fabric" },
    ]
  },
  {
    id: 104,
    level: 21,
    title: { he: "פעלים יומיומיים", en: "Daily Verbs" },
    cards: [
      { pt: "acordar", he: "להתעורר", en: "to wake up" },
      { pt: "levantar", he: "לקום", en: "to get up" },
      { pt: "vestir", he: "להתלבש", en: "to dress" },
      { pt: "pentear", he: "לסרוק (שיער)", en: "to comb" },
      { pt: "escovar", he: "לצחצח / להברשיך", en: "to brush" },
      { pt: "dirigir", he: "לנהוג", en: "to drive" },
      { pt: "correr", he: "לרוץ", en: "to run" },
      { pt: "nadar", he: "לשחות", en: "to swim" },
      { pt: "voar", he: "לעוף", en: "to fly" },
      { pt: "cair", he: "ליפול", en: "to fall" },
    ]
  },
  {
    id: 105,
    level: 21,
    title: { he: "תארים נוספים", en: "More Adjectives" },
    cards: [
      { pt: "forte", he: "חזק", en: "strong" },
      { pt: "fraco", he: "חלש", en: "weak" },
      { pt: "pesado", he: "כבד", en: "heavy" },
      { pt: "leve", he: "קל (משקל)", en: "light (weight)" },
      { pt: "limpo", he: "נקי", en: "clean" },
      { pt: "sujo", he: "מלוכלך", en: "dirty" },
      { pt: "cheio", he: "מלא", en: "full" },
      { pt: "vazio", he: "ריק", en: "empty" },
      { pt: "molhado", he: "רטוב", en: "wet" },
      { pt: "seco", he: "יבש", en: "dry" },
    ]
  },
  {
    id: 106,
    level: 21,
    title: { he: "מיקום וכיוונים", en: "Location & Direction Words" },
    cards: [
      { pt: "dentro", he: "בפנים", en: "inside" },
      { pt: "fora", he: "בחוץ", en: "outside" },
      { pt: "embaixo", he: "מתחת", en: "under / below" },
      { pt: "acima", he: "מעל", en: "above" },
      { pt: "entre", he: "בין", en: "between" },
      { pt: "atrás", he: "מאחורי", en: "behind" },
      { pt: "sul", he: "דרום", en: "south" },
      { pt: "leste", he: "מזרח", en: "east" },
      { pt: "oeste", he: "מערב", en: "west" },
      { pt: "ao lado", he: "בצד / לצד", en: "next to" },
    ]
  },
  {
    id: 107,
    level: 21,
    title: { he: "חגים ותרבות ברזילאית", en: "Holidays & Brazilian Culture" },
    cards: [
      { pt: "Carnaval", he: "קרנבל", en: "Carnival" },
      { pt: "Natal", he: "חג המולד", en: "Christmas" },
      { pt: "Ano Novo", he: "ראש השנה האזרחי", en: "New Year" },
      { pt: "Páscoa", he: "פסחא", en: "Easter" },
      { pt: "samba", he: "סמבה", en: "samba" },
      { pt: "capoeira", he: "קפוארה", en: "capoeira" },
      { pt: "feijoada", he: "פייז'ואדה (תבשיל שעועית)", en: "feijoada (bean stew)" },
      { pt: "churrasco", he: "על האש / צ'וראסקו", en: "barbecue" },
      { pt: "festa junina", he: "חגיגת יוני ברזילאית", en: "June festival" },
      { pt: "bandeira", he: "דגל", en: "flag" },
    ]
  },
  {
    id: 108,
    level: 22,
    title: { he: "טכנולוגיה מורחב", en: "Technology Extended" },
    cards: [
      { pt: "aplicativo", he: "אפליקציה", en: "app" },
      { pt: "senha", he: "סיסמה", en: "password" },
      { pt: "tela", he: "מסך", en: "screen" },
      { pt: "carregador", he: "מטען", en: "charger" },
      { pt: "fone de ouvido", he: "אוזניות", en: "headphones" },
      { pt: "impressora", he: "מדפסת", en: "printer" },
      { pt: "teclado", he: "מקלדת", en: "keyboard" },
      { pt: "mouse", he: "עכבר (מחשב)", en: "mouse" },
      { pt: "wi-fi", he: "וויפיי", en: "wifi" },
      { pt: "arquivo", he: "קובץ", en: "file" },
    ]
  },
  {
    id: 109,
    level: 22,
    title: { he: "כלי עבודה", en: "Tools" },
    cards: [
      { pt: "martelo", he: "פטיש", en: "hammer" },
      { pt: "chave de fenda", he: "מברג", en: "screwdriver" },
      { pt: "serra", he: "מסור", en: "saw" },
      { pt: "prego", he: "מסמר", en: "nail" },
      { pt: "parafuso", he: "בורג", en: "screw" },
      { pt: "alicate", he: "פלייר", en: "pliers" },
      { pt: "fita adesiva", he: "נייר דבק", en: "tape" },
      { pt: "escada", he: "סולם", en: "ladder" },
      { pt: "pá", he: "את / מגרפה", en: "shovel" },
      { pt: "furadeira", he: "מקדחה", en: "drill" },
    ]
  },
  {
    id: 110,
    level: 22,
    title: { he: "ים וחוף", en: "Beach & Sea" },
    cards: [
      { pt: "onda", he: "גל", en: "wave" },
      { pt: "concha", he: "צדפה", en: "seashell" },
      { pt: "guarda-sol", he: "שמשיה", en: "beach umbrella" },
      { pt: "protetor solar", he: "קרם הגנה", en: "sunscreen" },
      { pt: "boia", he: "מצוף / גלגל ים", en: "float / buoy" },
      { pt: "surfe", he: "גלישה", en: "surfing" },
      { pt: "mergulho", he: "צלילה", en: "diving" },
      { pt: "maré", he: "גאות ושפל", en: "tide" },
      { pt: "biquíni", he: "ביקיני", en: "bikini" },
      { pt: "areia molhada", he: "חול רטוב", en: "wet sand" },
    ]
  },
  {
    id: 111,
    level: 22,
    title: { he: "פעלים חברתיים", en: "Social Verbs" },
    cards: [
      { pt: "sorrir", he: "לחייך", en: "to smile" },
      { pt: "chorar", he: "לבכות", en: "to cry" },
      { pt: "rir", he: "לצחוק", en: "to laugh" },
      { pt: "abraçar", he: "לחבק", en: "to hug" },
      { pt: "beijar", he: "לנשק", en: "to kiss" },
      { pt: "cumprimentar", he: "לברך / לקבל בברכה", en: "to greet" },
      { pt: "convidar", he: "להזמין", en: "to invite" },
      { pt: "agradecer", he: "להודות", en: "to thank" },
      { pt: "desculpar", he: "לסלוח", en: "to forgive / apologize" },
      { pt: "prometer", he: "להבטיח", en: "to promise" },
    ]
  },
  {
    id: 112,
    level: 22,
    title: { he: "השעון והזמן", en: "Clock & Time" },
    cards: [
      { pt: "hora", he: "שעה", en: "hour / time" },
      { pt: "minuto", he: "דקה", en: "minute" },
      { pt: "segundo", he: "שנייה", en: "second" },
      { pt: "meio-dia", he: "צהריים (שעה 12)", en: "noon" },
      { pt: "meia-noite", he: "חצות", en: "midnight" },
      { pt: "cedo", he: "מוקדם", en: "early" },
      { pt: "atrasado", he: "מאוחר / מתעכב", en: "late / delayed" },
      { pt: "pontual", he: "דייקן", en: "punctual" },
      { pt: "amanhecer", he: "עלות השחר", en: "dawn" },
      { pt: "anoitecer", he: "רדת החשיכה", en: "dusk / nightfall" },
    ]
  },
  {
    id: 113,
    level: 23,
    title: { he: "משפחה מורחבת", en: "Extended Family" },
    cards: [
      { pt: "primo", he: "בן דוד", en: "cousin" },
      { pt: "sobrinho", he: "אחיין", en: "nephew" },
      { pt: "cunhado", he: "גיס", en: "brother-in-law" },
      { pt: "genro", he: "חתן (בן חותן)", en: "son-in-law" },
      { pt: "nora", he: "כלה (בת חותנת)", en: "daughter-in-law" },
      { pt: "sogro", he: "חותן", en: "father-in-law" },
      { pt: "neto", he: "נכד", en: "grandchild" },
      { pt: "namorado", he: "חבר (זוגי)", en: "boyfriend" },
      { pt: "noivo", he: "ארוס", en: "fiancé" },
      { pt: "casal", he: "זוג", en: "couple" },
    ]
  },
  {
    id: 114,
    level: 23,
    title: { he: "מילות קישור נוספות", en: "More Connector Words" },
    cards: [
      { pt: "além disso", he: "מעבר לכך", en: "besides" },
      { pt: "por isso", he: "לכן", en: "therefore" },
      { pt: "no entanto", he: "אולם / עם זאת", en: "however" },
      { pt: "apesar de", he: "למרות", en: "despite" },
      { pt: "enquanto", he: "בזמן ש-", en: "while" },
      { pt: "desde", he: "מאז", en: "since" },
      { pt: "até", he: "עד", en: "until" },
      { pt: "contra", he: "נגד", en: "against" },
      { pt: "sobre", he: "על / בנושא", en: "about / on" },
      { pt: "sem", he: "בלי", en: "without" },
    ]
  },
  {
    id: 115,
    level: 23,
    title: { he: "שגרת היום", en: "Daily Routine" },
    cards: [
      { pt: "café da manhã", he: "ארוחת בוקר", en: "breakfast" },
      { pt: "almoço", he: "ארוחת צהריים", en: "lunch" },
      { pt: "jantar", he: "ארוחת ערב", en: "dinner" },
      { pt: "lanche", he: "חטיף / ארוחה קלה", en: "snack" },
      { pt: "rotina", he: "שגרה", en: "routine" },
      { pt: "despertador", he: "שעון מעורר", en: "alarm clock" },
      { pt: "travesseiro", he: "כרית", en: "pillow" },
      { pt: "cobertor", he: "שמיכה", en: "blanket" },
      { pt: "pijama", he: "פיג'מה", en: "pajamas" },
      { pt: "chinelo", he: "כפכף", en: "slipper" },
    ]
  },
  {
    id: 116,
    level: 23,
    title: { he: "תיאור חזותי", en: "Visual Description" },
    cards: [
      { pt: "claro", he: "בהיר (צבע)", en: "light (color)" },
      { pt: "escuro", he: "כהה (צבע)", en: "dark (color)" },
      { pt: "listrado", he: "מפוספס", en: "striped" },
      { pt: "xadrez", he: "משובץ", en: "checkered / plaid" },
      { pt: "estampado", he: "עם הדפס", en: "patterned" },
      { pt: "liso", he: "חלק / פשוט", en: "plain / smooth" },
      { pt: "brilhante", he: "זוהר", en: "shiny" },
      { pt: "transparente", he: "שקוף", en: "transparent" },
      { pt: "colorido", he: "צבעוני", en: "colorful" },
      { pt: "dourado", he: "זהוב", en: "golden" },
    ]
  },
  {
    id: 117,
    level: 23,
    title: { he: "ביטויי נימוס נוספים", en: "More Polite Expressions" },
    cards: [
      { pt: "Prazer em conhecê-lo", he: "נעים להכיר", en: "Nice to meet you" },
      { pt: "Até logo", he: "להתראות בקרוב", en: "See you soon" },
      { pt: "Até mais", he: "נתראה", en: "See you later" },
      { pt: "Boa viagem", he: "נסיעה טובה", en: "Have a good trip" },
      { pt: "Boa sorte", he: "בהצלחה", en: "Good luck" },
      { pt: "Feliz aniversário", he: "יום הולדת שמח", en: "Happy birthday" },
      { pt: "Parabéns", he: "מזל טוב / ברכות", en: "Congratulations" },
      { pt: "Saúde", he: "לחיים", en: "Cheers" },
      { pt: "Bem-vindo", he: "ברוך הבא", en: "Welcome" },
      { pt: "Com todo gosto", he: "בכל הכבוד / בשמחה", en: "With pleasure" },
    ]
  },

  // ---------------- Levels 24-29: Vocabulary expansion batch 2 ----------------
  {
    id: 118,
    level: 24,
    title: { he: "גיאוגרפיה", en: "Geography" },
    cards: [
      { pt: "país", he: "מדינה", en: "country" },
      { pt: "cidade", he: "עיר", en: "city" },
      { pt: "capital", he: "עיר בירה", en: "capital" },
      { pt: "continente", he: "יבשת", en: "continent" },
      { pt: "mapa", he: "מפה", en: "map" },
      { pt: "fronteira", he: "גבול", en: "border" },
      { pt: "população", he: "אוכלוסייה", en: "population" },
      { pt: "idioma", he: "שפה", en: "language" },
      { pt: "vila", he: "כפר", en: "village" },
      { pt: "costa", he: "חוף / אזור חופי", en: "coast" },
    ]
  },
  {
    id: 119,
    level: 24,
    title: { he: "ספורט מורחב", en: "Sports Extended" },
    cards: [
      { pt: "vôlei", he: "כדורעף", en: "volleyball" },
      { pt: "basquete", he: "כדורסל", en: "basketball" },
      { pt: "tênis", he: "טניס", en: "tennis" },
      { pt: "corrida", he: "ריצה / מירוץ", en: "running / race" },
      { pt: "ciclismo", he: "רכיבת אופניים", en: "cycling" },
      { pt: "luta", he: "קרב / היאבקות", en: "fight / wrestling" },
      { pt: "campeão", he: "אלוף", en: "champion" },
      { pt: "time", he: "קבוצה (ספורט)", en: "team" },
      { pt: "torneio", he: "טורניר", en: "tournament" },
      { pt: "medalha", he: "מדליה", en: "medal" },
    ]
  },
  {
    id: 120,
    level: 24,
    title: { he: "מדע בסיסי", en: "Basic Science" },
    cards: [
      { pt: "planeta", he: "כוכב לכת", en: "planet" },
      { pt: "átomo", he: "אטום", en: "atom" },
      { pt: "energia", he: "אנרגיה", en: "energy" },
      { pt: "gravidade", he: "כוח המשיכה", en: "gravity" },
      { pt: "experiência", he: "ניסוי", en: "experiment" },
      { pt: "cientista", he: "מדען", en: "scientist" },
      { pt: "laboratório", he: "מעבדה", en: "laboratory" },
      { pt: "microscópio", he: "מיקרוסקופ", en: "microscope" },
      { pt: "célula", he: "תא (ביולוגיה)", en: "cell" },
      { pt: "universo", he: "יקום", en: "universe" },
    ]
  },
  {
    id: 121,
    level: 24,
    title: { he: "סלנג ברזילאי", en: "Brazilian Slang" },
    cards: [
      { pt: "cara", he: "בחור / אחי", en: "dude / guy" },
      { pt: "legal", he: "מגניב", en: "cool" },
      { pt: "maneiro", he: "אחלה (סלנג)", en: "cool (slang)" },
      { pt: "rolê", he: "בילוי / סיבוב", en: "hangout / outing" },
      { pt: "mano", he: "אחי (סלנג)", en: "bro" },
      { pt: "valeu", he: "תודה (סלנג)", en: "thanks (informal)" },
      { pt: "galera", he: "חברים / קהל", en: "folks / crowd" },
      { pt: "sei não", he: "לא יודע (סלנג)", en: "dunno" },
      { pt: "oxente", he: "וואו / מה פתאום (ביטוי מצפון מזרח ברזיל)", en: "expression of surprise (NE Brazil)" },
      { pt: "treta", he: "בלגן / דרמה", en: "drama / trouble (slang)" },
    ]
  },
  {
    id: 122,
    level: 24,
    title: { he: "ביטויים נוספים", en: "More Idioms" },
    cards: [
      { pt: "dar um jeito", he: "למצוא פתרון", en: "to find a way / solution" },
      { pt: "cair bem", he: "להתאים טוב", en: "to suit / fit well" },
      { pt: "bater um papo", he: "לפטפט", en: "to have a chat" },
      { pt: "fazer sentido", he: "להיות הגיוני", en: "to make sense" },
      { pt: "estar por fora", he: "לא להיות מעודכן", en: "to be out of the loop" },
      { pt: "perder a cabeça", he: "לאבד את זה / להתפרע", en: "to lose one's mind" },
      { pt: "ficar de olho", he: "לשים עין על", en: "to keep an eye on" },
      { pt: "dar uma força", he: "לעזור / לתת יד", en: "to give a hand" },
      { pt: "ficar por dentro", he: "להיות מעודכן", en: "to stay informed" },
      { pt: "não vale a pena", he: "לא שווה את זה", en: "not worth it" },
    ]
  },
  {
    id: 123,
    level: 25,
    title: { he: "מילות בישול", en: "Cooking Terms" },
    cards: [
      { pt: "cozinhar", he: "לבשל", en: "to cook" },
      { pt: "fritar", he: "לטגן", en: "to fry" },
      { pt: "assar", he: "לאפות / לצלות", en: "to bake / roast" },
      { pt: "misturar", he: "לערבב", en: "to mix" },
      { pt: "cortar", he: "לחתוך", en: "to cut" },
      { pt: "ferver", he: "להרתיח", en: "to boil" },
      { pt: "temperar", he: "לתבל", en: "to season" },
      { pt: "receita", he: "מתכון", en: "recipe" },
      { pt: "ingrediente", he: "מצרך", en: "ingredient" },
      { pt: "sabor", he: "טעם", en: "flavor / taste" },
    ]
  },
  {
    id: 124,
    level: 25,
    title: { he: "אינטרנט ודוא׳׳ל", en: "Internet & Email" },
    cards: [
      { pt: "e-mail", he: "אימייל", en: "email" },
      { pt: "mensagem", he: "הודעה", en: "message" },
      { pt: "rede social", he: "רשת חברתית", en: "social network" },
      { pt: "postar", he: "לפרסם (פוסט)", en: "to post" },
      { pt: "curtir", he: "לעשות לייק", en: "to like (social media)" },
      { pt: "compartilhar", he: "לשתף", en: "to share" },
      { pt: "comentário", he: "תגובה", en: "comment" },
      { pt: "seguir", he: "לעקוב", en: "to follow" },
      { pt: "perfil", he: "פרופיל", en: "profile" },
      { pt: "conexão", he: "חיבור", en: "connection" },
    ]
  },
  {
    id: 125,
    level: 25,
    title: { he: "טיפוח אישי", en: "Personal Care" },
    cards: [
      { pt: "perfume", he: "בושם", en: "perfume" },
      { pt: "maquiagem", he: "איפור", en: "makeup" },
      { pt: "escova de dentes", he: "מברשת שיניים", en: "toothbrush" },
      { pt: "pasta de dente", he: "משחת שיניים", en: "toothpaste" },
      { pt: "sabonete", he: "סבון", en: "soap" },
      { pt: "shampoo", he: "שמפו", en: "shampoo" },
      { pt: "creme", he: "קרם", en: "cream / lotion" },
      { pt: "espelho", he: "מראה", en: "mirror" },
      { pt: "pente", he: "מסרק", en: "comb" },
      { pt: "secador de cabelo", he: "מייבש שיער", en: "hair dryer" },
    ]
  },
  {
    id: 126,
    level: 25,
    title: { he: "תחושות גוף", en: "Physical Sensations" },
    cards: [
      { pt: "tontura", he: "סחרחורת", en: "dizziness" },
      { pt: "coceira", he: "גירוד", en: "itch" },
      { pt: "cãibra", he: "התכווצות שריר", en: "cramp" },
      { pt: "enjoo", he: "בחילה", en: "nausea" },
      { pt: "sono", he: "עייפות / שינה", en: "sleepiness" },
      { pt: "cansaço", he: "תשישות", en: "tiredness" },
      { pt: "fraqueza", he: "חולשה", en: "weakness" },
      { pt: "alívio", he: "הקלה", en: "relief" },
      { pt: "coragem", he: "אומץ", en: "courage" },
      { pt: "vergonha", he: "בושה / מבוכה", en: "shame / embarrassment" },
    ]
  },
  {
    id: 127,
    level: 25,
    title: { he: "מכונית ונהיגה", en: "Car & Driving" },
    cards: [
      { pt: "volante", he: "הגה", en: "steering wheel" },
      { pt: "freio", he: "בלם", en: "brake" },
      { pt: "motor", he: "מנוע", en: "engine" },
      { pt: "pneu", he: "צמיג", en: "tire" },
      { pt: "combustível", he: "דלק", en: "fuel" },
      { pt: "posto de gasolina", he: "תחנת דלק", en: "gas station" },
      { pt: "carteira de motorista", he: "רישיון נהיגה", en: "driver's license" },
      { pt: "trânsito", he: "תנועה (כבישים)", en: "traffic" },
      { pt: "semáforo", he: "רמזור", en: "traffic light" },
      { pt: "estacionamento", he: "חניה", en: "parking" },
    ]
  },
  {
    id: 128,
    level: 26,
    title: { he: "מזג אוויר מורחב", en: "Weather Extended" },
    cards: [
      { pt: "tempestade", he: "סופה", en: "storm" },
      { pt: "trovão", he: "רעם", en: "thunder" },
      { pt: "relâmpago", he: "ברק", en: "lightning" },
      { pt: "neve", he: "שלג", en: "snow" },
      { pt: "gelo", he: "קרח", en: "ice" },
      { pt: "nevoeiro", he: "ערפל", en: "fog" },
      { pt: "umidade", he: "לחות", en: "humidity" },
      { pt: "temperatura", he: "טמפרטורה", en: "temperature" },
      { pt: "previsão do tempo", he: "תחזית מזג אוויר", en: "weather forecast" },
      { pt: "arco-íris", he: "קשת בענן", en: "rainbow" },
    ]
  },
  {
    id: 129,
    level: 26,
    title: { he: "הבית מורחב", en: "House Extended" },
    cards: [
      { pt: "varanda", he: "מרפסת", en: "balcony" },
      { pt: "garagem", he: "מוסך / חניה סגורה", en: "garage" },
      { pt: "jardim", he: "גן", en: "garden" },
      { pt: "telhado", he: "גג", en: "roof" },
      { pt: "parede", he: "קיר", en: "wall" },
      { pt: "escada", he: "מדרגות", en: "stairs" },
      { pt: "piso", he: "רצפה", en: "floor" },
      { pt: "armário", he: "ארון", en: "closet / cabinet" },
      { pt: "sofá", he: "ספה", en: "sofa" },
      { pt: "tapete", he: "שטיח", en: "rug" },
    ]
  },
  {
    id: 130,
    level: 26,
    title: { he: "ציוד משרדי", en: "Office Supplies" },
    cards: [
      { pt: "grampeador", he: "מכבש סיכות", en: "stapler" },
      { pt: "clipe", he: "מהדק נייר", en: "paperclip" },
      { pt: "pasta", he: "תיקיית מסמכים", en: "folder" },
      { pt: "envelope", he: "מעטפה", en: "envelope" },
      { pt: "carimbo", he: "חותמת", en: "stamp / seal" },
      { pt: "calculadora", he: "מחשבון", en: "calculator" },
      { pt: "agenda", he: "יומן / אג׳נדה", en: "planner / agenda" },
      { pt: "etiqueta", he: "תווית", en: "label" },
      { pt: "elástico", he: "גומייה", en: "rubber band" },
      { pt: "marca-texto", he: "טוש הדגשה", en: "highlighter" },
    ]
  },
  {
    id: 131,
    level: 26,
    title: { he: "חגיגות ואירועים", en: "Events & Celebrations" },
    cards: [
      { pt: "aniversário", he: "יום הולדת", en: "birthday" },
      { pt: "casamento", he: "חתונה", en: "wedding" },
      { pt: "festa", he: "מסיבה", en: "party" },
      { pt: "convite", he: "הזמנה", en: "invitation" },
      { pt: "presente", he: "מתנה", en: "gift" },
      { pt: "decoração", he: "קישוט", en: "decoration" },
      { pt: "bolo", he: "עוגה", en: "cake" },
      { pt: "vela", he: "נר", en: "candle" },
      { pt: "balão", he: "בלון", en: "balloon" },
      { pt: "comemoração", he: "חגיגה", en: "celebration" },
    ]
  },
  {
    id: 132,
    level: 26,
    title: { he: "מילות שלילה והדגשה", en: "Negation & Emphasis" },
    cards: [
      { pt: "nunca", he: "לעולם לא", en: "never" },
      { pt: "jamais", he: "בשום פנים ואופן לא", en: "never (emphatic)" },
      { pt: "nada", he: "כלום", en: "nothing" },
      { pt: "ninguém", he: "אף אחד", en: "nobody" },
      { pt: "nenhum", he: "אף אחד / אף לא אחד", en: "none / not any" },
      { pt: "também não", he: "גם לא", en: "neither" },
      { pt: "tampouco", he: "גם לא (רשמי)", en: "neither (formal)" },
      { pt: "realmente", he: "באמת", en: "really" },
      { pt: "mesmo", he: "אפילו / באמת", en: "even / really" },
      { pt: "apenas", he: "רק", en: "only / just" },
    ]
  },
  {
    id: 133,
    level: 27,
    title: { he: "כמויות ומידות", en: "Quantities & Measures" },
    cards: [
      { pt: "quilo", he: "קילוגרם", en: "kilogram" },
      { pt: "grama", he: "גרם", en: "gram" },
      { pt: "litro", he: "ליטר", en: "liter" },
      { pt: "metro", he: "מטר", en: "meter" },
      { pt: "centímetro", he: "סנטימטר", en: "centimeter" },
      { pt: "quilômetro", he: "קילומטר", en: "kilometer" },
      { pt: "metade", he: "מחצית", en: "half" },
      { pt: "dobro", he: "כפול", en: "double" },
      { pt: "par", he: "זוג", en: "pair" },
      { pt: "dúzia", he: "תריסר", en: "dozen" },
    ]
  },
  {
    id: 134,
    level: 27,
    title: { he: "חירום ובטיחות", en: "Emergency & Safety" },
    cards: [
      { pt: "emergência", he: "מקרה חירום", en: "emergency" },
      { pt: "ajuda", he: "עזרה", en: "help" },
      { pt: "polícia", he: "משטרה", en: "police" },
      { pt: "ambulância", he: "אמבולנס", en: "ambulance" },
      { pt: "incêndio", he: "שריפה", en: "fire" },
      { pt: "perigo", he: "סכנה", en: "danger" },
      { pt: "segurança", he: "בטיחות / אבטחה", en: "safety / security" },
      { pt: "saída de emergência", he: "יציאת חירום", en: "emergency exit" },
      { pt: "extintor", he: "מטף כיבוי", en: "fire extinguisher" },
      { pt: "alarme", he: "אזעקה", en: "alarm" },
    ]
  },
  {
    id: 135,
    level: 27,
    title: { he: "עולם העבודה", en: "Business & Work" },
    cards: [
      { pt: "empresa", he: "חברה (עסקית)", en: "company" },
      { pt: "chefe", he: "בוס", en: "boss" },
      { pt: "funcionário", he: "עובד", en: "employee" },
      { pt: "salário", he: "משכורת", en: "salary" },
      { pt: "contrato", he: "חוזה", en: "contract" },
      { pt: "projeto", he: "פרויקט", en: "project" },
      { pt: "cliente", he: "לקוח", en: "client" },
      { pt: "entrevista", he: "ראיון", en: "interview" },
      { pt: "currículo", he: "קורות חיים", en: "resume" },
      { pt: "horário", he: "לוח זמנים", en: "schedule" },
    ]
  },
  {
    id: 136,
    level: 27,
    title: { he: "רגשות חברתיים", en: "Social Emotions" },
    cards: [
      { pt: "ciúme", he: "קנאה", en: "jealousy" },
      { pt: "solidão", he: "בדידות", en: "loneliness" },
      { pt: "confiança", he: "ביטחון / אמון", en: "trust / confidence" },
      { pt: "amizade", he: "חברות", en: "friendship" },
      { pt: "respeito", he: "כבוד", en: "respect" },
      { pt: "raiva", he: "כעס", en: "anger" },
      { pt: "alegria", he: "שמחה", en: "joy" },
      { pt: "tristeza", he: "עצב", en: "sadness" },
      { pt: "medo", he: "פחד", en: "fear" },
      { pt: "paixão", he: "תשוקה / אהבה גדולה", en: "passion" },
    ]
  },
  {
    id: 137,
    level: 27,
    title: { he: "הרפתקאות בטבע", en: "Outdoor Adventure" },
    cards: [
      { pt: "acampamento", he: "קמפינג", en: "camping" },
      { pt: "tenda", he: "אוהל", en: "tent" },
      { pt: "mochila", he: "תיק גב", en: "backpack" },
      { pt: "trilha", he: "שביל הליכה", en: "trail" },
      { pt: "caminhada", he: "הליכה / טיול רגלי", en: "hike" },
      { pt: "bússola", he: "מצפן", en: "compass" },
      { pt: "lanterna", he: "פנס", en: "flashlight" },
      { pt: "fogueira", he: "מדורה", en: "campfire" },
      { pt: "aventura", he: "הרפתקה", en: "adventure" },
      { pt: "natureza", he: "טבע", en: "nature" },
    ]
  },
  {
    id: 138,
    level: 28,
    title: { he: "מקצועות שירות", en: "Service Professions" },
    cards: [
      { pt: "garçom", he: "מלצר", en: "waiter" },
      { pt: "cabeleireiro", he: "ספר", en: "hairdresser" },
      { pt: "manicure", he: "מניקוריסטית", en: "manicurist" },
      { pt: "segurança", he: "מאבטח", en: "security guard" },
      { pt: "recepcionista", he: "פקיד קבלה", en: "receptionist" },
      { pt: "vendedor", he: "מוכר", en: "salesperson" },
      { pt: "gerente", he: "מנהל", en: "manager" },
      { pt: "faxineiro", he: "עובד ניקיון", en: "cleaner" },
      { pt: "entregador", he: "שליח", en: "delivery person" },
      { pt: "motoboy", he: "שליח אופנוע", en: "motorcycle courier" },
    ]
  },
  {
    id: 139,
    level: 28,
    title: { he: "גוף האדם מורחב", en: "Body Parts Extended" },
    cards: [
      { pt: "pescoço", he: "צוואר", en: "neck" },
      { pt: "ombro", he: "כתף", en: "shoulder" },
      { pt: "cotovelo", he: "מרפק", en: "elbow" },
      { pt: "pulso", he: "פרק כף היד", en: "wrist" },
      { pt: "joelho", he: "ברך", en: "knee" },
      { pt: "tornozelo", he: "קרסול", en: "ankle" },
      { pt: "dedo", he: "אצבע", en: "finger / toe" },
      { pt: "unha", he: "ציפורן", en: "nail" },
      { pt: "cabelo", he: "שיער", en: "hair" },
      { pt: "pele", he: "עור (גוף)", en: "skin" },
    ]
  },
  {
    id: 140,
    level: 28,
    title: { he: "תחביבים נוספים", en: "More Hobbies" },
    cards: [
      { pt: "pintura", he: "ציור", en: "painting" },
      { pt: "fotografia", he: "צילום", en: "photography" },
      { pt: "jardinagem", he: "גינון", en: "gardening" },
      { pt: "coleção", he: "אוסף", en: "collection" },
      { pt: "xadrez", he: "שחמט", en: "chess" },
      { pt: "quebra-cabeça", he: "פאזל", en: "puzzle" },
      { pt: "artesanato", he: "מלאכת יד", en: "crafts" },
      { pt: "costura", he: "תפירה", en: "sewing" },
      { pt: "pesca", he: "דיג", en: "fishing" },
      { pt: "caça", he: "צידה", en: "hunting" },
    ]
  },
  {
    id: 141,
    level: 28,
    title: { he: "כלכלה וכספים", en: "Economy & Finance" },
    cards: [
      { pt: "banco", he: "בנק", en: "bank" },
      { pt: "conta bancária", he: "חשבון בנק", en: "bank account" },
      { pt: "cartão de crédito", he: "כרטיס אשראי", en: "credit card" },
      { pt: "investimento", he: "השקעה", en: "investment" },
      { pt: "economia", he: "חיסכון / כלכלה", en: "economy / savings" },
      { pt: "imposto", he: "מס", en: "tax" },
      { pt: "orçamento", he: "תקציב", en: "budget" },
      { pt: "dívida", he: "חוב", en: "debt" },
      { pt: "poupança", he: "חיסכון (חשבון)", en: "savings" },
      { pt: "empréstimo", he: "הלוואה", en: "loan" },
    ]
  },
  {
    id: 142,
    level: 28,
    title: { he: "חלל", en: "Space" },
    cards: [
      { pt: "foguete", he: "רקטה", en: "rocket" },
      { pt: "astronauta", he: "אסטרונאוט", en: "astronaut" },
      { pt: "satélite", he: "לוויין", en: "satellite" },
      { pt: "via láctea", he: "שביל החלב", en: "milky way" },
      { pt: "cometa", he: "שביט", en: "comet" },
      { pt: "nave espacial", he: "חללית", en: "spaceship" },
      { pt: "telescópio", he: "טלסקופ", en: "telescope" },
      { pt: "eclipse", he: "ליקוי", en: "eclipse" },
      { pt: "meteoro", he: "מטאור", en: "meteor" },
      { pt: "constelação", he: "קבוצת כוכבים", en: "constellation" },
    ]
  },
  {
    id: 143,
    level: 29,
    title: { he: "תאריכים ועונות", en: "Dates & Seasons" },
    cards: [
      { pt: "data", he: "תאריך", en: "date" },
      { pt: "século", he: "מאה (זמן)", en: "century" },
      { pt: "década", he: "עשור", en: "decade" },
      { pt: "estação", he: "עונה (שנה)", en: "season" },
      { pt: "verão", he: "קיץ", en: "summer" },
      { pt: "inverno", he: "חורף", en: "winter" },
      { pt: "outono", he: "סתיו", en: "autumn / fall" },
      { pt: "primavera", he: "אביב", en: "spring" },
      { pt: "calendário", he: "לוח שנה", en: "calendar" },
      { pt: "aniversário", he: "יום הולדת / יום נישואין", en: "anniversary" },
    ]
  },
  {
    id: 144,
    level: 29,
    title: { he: "נסיעות ציבוריות מורחב", en: "Public Transport Extra" },
    cards: [
      { pt: "plataforma", he: "רציף", en: "platform" },
      { pt: "bilhete", he: "כרטיס (נסיעה)", en: "ticket" },
      { pt: "fila", he: "תור", en: "line / queue" },
      { pt: "atraso", he: "איחור", en: "delay" },
      { pt: "janela", he: "חלון (במטוס/רכבת)", en: "window seat" },
      { pt: "corredor", he: "מעבר / מושב מעבר", en: "aisle" },
      { pt: "cinto de segurança", he: "רתמת בטיחות", en: "seatbelt" },
      { pt: "embarque", he: "עלייה לטיסה/רכב", en: "boarding" },
      { pt: "desembarque", he: "ירידה מהטיסה/רכב", en: "disembarking" },
      { pt: "conexão", he: "טיסת/נסיעת המשך", en: "connection" },
    ]
  },
  {
    id: 145,
    level: 29,
    title: { he: "מילות שיח נוספות", en: "More Discourse Words" },
    cards: [
      { pt: "claro", he: "בטח / כמובן", en: "of course" },
      { pt: "talvez", he: "אולי", en: "maybe" },
      { pt: "provavelmente", he: "כנראה", en: "probably" },
      { pt: "certamente", he: "בוודאות", en: "certainly" },
      { pt: "geralmente", he: "בדרך כלל", en: "usually" },
      { pt: "normalmente", he: "בדרך כלל (רגיל)", en: "normally" },
      { pt: "especialmente", he: "בייחוד", en: "especially" },
      { pt: "principalmente", he: "בעיקר", en: "mainly" },
      { pt: "finalmente", he: "לבסוף", en: "finally" },
      { pt: "afinal", he: "בסופו של דבר", en: "after all" },
    ]
  },
  {
    id: 146,
    level: 29,
    title: { he: "מאכלים ברזילאיים", en: "Brazilian Dishes" },
    cards: [
      { pt: "pão de queijo", he: "לחם גבינה ברזילאי", en: "cheese bread" },
      { pt: "brigadeiro", he: "ממתק שוקולד ברזילאי", en: "chocolate truffle (Brazilian)" },
      { pt: "coxinha", he: "קרוקט עוף ברזילאי", en: "chicken croquette" },
      { pt: "açaí", he: "אסאי", en: "açaí" },
      { pt: "tapioca", he: "טפיוקה", en: "tapioca" },
      { pt: "farofa", he: "פארופה (תבלין מניוקה קלויה)", en: "toasted cassava-flour dish" },
      { pt: "moqueca", he: "תבשיל דגים ברזילאי", en: "Brazilian fish stew" },
      { pt: "guaraná", he: "גוארנה (משקה ברזילאי)", en: "Brazilian soda" },
      { pt: "cachaça", he: "קשסה (ברנדי קני סוכר)", en: "sugarcane spirit" },
      { pt: "paçoca", he: "ממתק בוטנים ברזילאי", en: "peanut candy" },
    ]
  },
  {
    id: 147,
    level: 29,
    title: { he: "גינה וצמחים", en: "Garden & Plants" },
    cards: [
      { pt: "planta", he: "צמח", en: "plant" },
      { pt: "árvore", he: "עץ", en: "tree" },
      { pt: "grama", he: "דשא", en: "grass / lawn" },
      { pt: "semente", he: "זרע", en: "seed" },
      { pt: "raiz", he: "שורש", en: "root" },
      { pt: "caule", he: "גבעול", en: "stem" },
      { pt: "galho", he: "ענף", en: "branch" },
      { pt: "fruto", he: "פרי (בוטני)", en: "fruit (botanical)" },
      { pt: "jardim", he: "גן", en: "garden" },
      { pt: "vaso", he: "עציץ", en: "flower pot" },
    ]
  },

  // ---------------- Level 30: -ER verb sentence drills ----------------
  {
    id: 148,
    level: 30,
    title: { he: "RESPONDER - השלמת משפטים", en: "RESPONDER - Fill in the Blank" },
    short: "RESPONDER",
    cards: [
      { pt: "Eu ___ (responder) a pergunta.", full: "Eu respondo a pergunta.", he: "אני עונה לשאלה.", en: "I answer the question." },
      { pt: "Você ___ (responder) a pergunta.", full: "Você responde a pergunta.", he: "את/ה עונה לשאלה.", en: "You answer the question." },
      { pt: "Ele ___ (responder) a pergunta.", full: "Ele responde a pergunta.", he: "הוא עונה לשאלה.", en: "He answers the question." },
      { pt: "Nós ___ (responder) a pergunta.", full: "Nós respondemos a pergunta.", he: "אנחנו עונים לשאלה.", en: "We answer the question." },
      { pt: "Eles ___ (responder) a pergunta.", full: "Eles respondem a pergunta.", he: "הם עונים לשאלה.", en: "They answer the question." },
      { pt: "Ontem eu ___ (responder) a pergunta.", full: "Ontem eu respondi a pergunta.", he: "אתמול אני עניתי לשאלה.", en: "Yesterday I answered the question." },
      { pt: "Ontem você ___ (responder) a pergunta.", full: "Ontem você respondeu a pergunta.", he: "אתמול את/ה ענית לשאלה.", en: "Yesterday you answered the question." },
      { pt: "Ontem ele ___ (responder) a pergunta.", full: "Ontem ele respondeu a pergunta.", he: "אתמול הוא ענה לשאלה.", en: "Yesterday he answered the question." },
      { pt: "Ontem nós ___ (responder) a pergunta.", full: "Ontem nós respondemos a pergunta.", he: "אתמול אנחנו ענינו לשאלה.", en: "Yesterday we answered the question." },
      { pt: "Ontem eles ___ (responder) a pergunta.", full: "Ontem eles responderam a pergunta.", he: "אתמול הם ענו לשאלה.", en: "Yesterday they answered the question." },
    ]
  },
  {
    id: 149,
    level: 30,
    title: { he: "APRENDER - השלמת משפטים", en: "APRENDER - Fill in the Blank" },
    short: "APRENDER",
    cards: [
      { pt: "Eu ___ (aprender) português.", full: "Eu aprendo português.", he: "אני לומד פורטוגזית.", en: "I learn Portuguese." },
      { pt: "Você ___ (aprender) português.", full: "Você aprende português.", he: "את/ה לומד/ת פורטוגזית.", en: "You learn Portuguese." },
      { pt: "Ele ___ (aprender) português.", full: "Ele aprende português.", he: "הוא לומד פורטוגזית.", en: "He learns Portuguese." },
      { pt: "Nós ___ (aprender) português.", full: "Nós aprendemos português.", he: "אנחנו לומדים פורטוגזית.", en: "We learn Portuguese." },
      { pt: "Eles ___ (aprender) português.", full: "Eles aprendem português.", he: "הם לומדים פורטוגזית.", en: "They learn Portuguese." },
      { pt: "Ontem eu ___ (aprender) português.", full: "Ontem eu aprendi português.", he: "אתמול אני למדתי פורטוגזית.", en: "Yesterday I learned Portuguese." },
      { pt: "Ontem você ___ (aprender) português.", full: "Ontem você aprendeu português.", he: "אתמול את/ה למדת פורטוגזית.", en: "Yesterday you learned Portuguese." },
      { pt: "Ontem ele ___ (aprender) português.", full: "Ontem ele aprendeu português.", he: "אתמול הוא למד פורטוגזית.", en: "Yesterday he learned Portuguese." },
      { pt: "Ontem nós ___ (aprender) português.", full: "Ontem nós aprendemos português.", he: "אתמול אנחנו למדנו פורטוגזית.", en: "Yesterday we learned Portuguese." },
      { pt: "Ontem eles ___ (aprender) português.", full: "Ontem eles aprenderam português.", he: "אתמול הם למדו פורטוגזית.", en: "Yesterday they learned Portuguese." },
    ]
  },
  {
    id: 150,
    level: 30,
    title: { he: "BEBER - השלמת משפטים", en: "BEBER - Fill in the Blank" },
    short: "BEBER",
    cards: [
      { pt: "Eu ___ (beber) água.", full: "Eu bebo água.", he: "אני שותה מים.", en: "I drink water." },
      { pt: "Você ___ (beber) água.", full: "Você bebe água.", he: "את/ה שותה מים.", en: "You drink water." },
      { pt: "Ele ___ (beber) água.", full: "Ele bebe água.", he: "הוא שותה מים.", en: "He drinks water." },
      { pt: "Nós ___ (beber) água.", full: "Nós bebemos água.", he: "אנחנו שותים מים.", en: "We drink water." },
      { pt: "Eles ___ (beber) água.", full: "Eles bebem água.", he: "הם שותים מים.", en: "They drink water." },
      { pt: "Ontem eu ___ (beber) água.", full: "Ontem eu bebi água.", he: "אתמול אני שתיתי מים.", en: "Yesterday I drank water." },
      { pt: "Ontem você ___ (beber) água.", full: "Ontem você bebeu água.", he: "אתמול את/ה שתית מים.", en: "Yesterday you drank water." },
      { pt: "Ontem ele ___ (beber) água.", full: "Ontem ele bebeu água.", he: "אתמול הוא שתה מים.", en: "Yesterday he drank water." },
      { pt: "Ontem nós ___ (beber) água.", full: "Ontem nós bebemos água.", he: "אתמול אנחנו שתינו מים.", en: "Yesterday we drank water." },
      { pt: "Ontem eles ___ (beber) água.", full: "Ontem eles beberam água.", he: "אתמול הם שתו מים.", en: "Yesterday they drank water." },
    ]
  },
  {
    id: 151,
    level: 30,
    title: { he: "ESCREVER - השלמת משפטים", en: "ESCREVER - Fill in the Blank" },
    short: "ESCREVER",
    cards: [
      { pt: "Eu ___ (escrever) uma carta.", full: "Eu escrevo uma carta.", he: "אני כותב מכתב.", en: "I write a letter." },
      { pt: "Você ___ (escrever) uma carta.", full: "Você escreve uma carta.", he: "את/ה כותב/ת מכתב.", en: "You write a letter." },
      { pt: "Ele ___ (escrever) uma carta.", full: "Ele escreve uma carta.", he: "הוא כותב מכתב.", en: "He writes a letter." },
      { pt: "Nós ___ (escrever) uma carta.", full: "Nós escrevemos uma carta.", he: "אנחנו כותבים מכתב.", en: "We write a letter." },
      { pt: "Eles ___ (escrever) uma carta.", full: "Eles escrevem uma carta.", he: "הם כותבים מכתב.", en: "They write a letter." },
      { pt: "Ontem eu ___ (escrever) uma carta.", full: "Ontem eu escrevi uma carta.", he: "אתמול אני כתבתי מכתב.", en: "Yesterday I wrote a letter." },
      { pt: "Ontem você ___ (escrever) uma carta.", full: "Ontem você escreveu uma carta.", he: "אתמול את/ה כתבת מכתב.", en: "Yesterday you wrote a letter." },
      { pt: "Ontem ele ___ (escrever) uma carta.", full: "Ontem ele escreveu uma carta.", he: "אתמול הוא כתב מכתב.", en: "Yesterday he wrote a letter." },
      { pt: "Ontem nós ___ (escrever) uma carta.", full: "Ontem nós escrevemos uma carta.", he: "אתמול אנחנו כתבנו מכתב.", en: "Yesterday we wrote a letter." },
      { pt: "Ontem eles ___ (escrever) uma carta.", full: "Ontem eles escreveram uma carta.", he: "אתמול הם כתבו מכתב.", en: "Yesterday they wrote a letter." },
    ]
  },
  {
    id: 152,
    level: 30,
    title: { he: "CORRER - השלמת משפטים", en: "CORRER - Fill in the Blank" },
    short: "CORRER",
    cards: [
      { pt: "Eu ___ (correr) no parque.", full: "Eu corro no parque.", he: "אני רץ בפארק.", en: "I run in the park." },
      { pt: "Você ___ (correr) no parque.", full: "Você corre no parque.", he: "את/ה רץ/ה בפארק.", en: "You run in the park." },
      { pt: "Ele ___ (correr) no parque.", full: "Ele corre no parque.", he: "הוא רץ בפארק.", en: "He runs in the park." },
      { pt: "Nós ___ (correr) no parque.", full: "Nós corremos no parque.", he: "אנחנו רצים בפארק.", en: "We run in the park." },
      { pt: "Eles ___ (correr) no parque.", full: "Eles correm no parque.", he: "הם רצים בפארק.", en: "They run in the park." },
      { pt: "Ontem eu ___ (correr) no parque.", full: "Ontem eu corri no parque.", he: "אתמול אני רצתי בפארק.", en: "Yesterday I ran in the park." },
      { pt: "Ontem você ___ (correr) no parque.", full: "Ontem você correu no parque.", he: "אתמול את/ה רצת בפארק.", en: "Yesterday you ran in the park." },
      { pt: "Ontem ele ___ (correr) no parque.", full: "Ontem ele correu no parque.", he: "אתמול הוא רץ בפארק.", en: "Yesterday he ran in the park." },
      { pt: "Ontem nós ___ (correr) no parque.", full: "Ontem nós corremos no parque.", he: "אתמול אנחנו רצנו בפארק.", en: "Yesterday we ran in the park." },
      { pt: "Ontem eles ___ (correr) no parque.", full: "Ontem eles correram no parque.", he: "אתמול הם רצו בפארק.", en: "Yesterday they ran in the park." },
    ]
  },
  {
    id: 153,
    level: 30,
    title: { he: "RECEBER - השלמת משפטים", en: "RECEBER - Fill in the Blank" },
    short: "RECEBER",
    cards: [
      { pt: "Eu ___ (receber) um presente.", full: "Eu recebo um presente.", he: "אני מקבל מתנה.", en: "I receive a gift." },
      { pt: "Você ___ (receber) um presente.", full: "Você recebe um presente.", he: "את/ה מקבל/ת מתנה.", en: "You receive a gift." },
      { pt: "Ele ___ (receber) um presente.", full: "Ele recebe um presente.", he: "הוא מקבל מתנה.", en: "He receives a gift." },
      { pt: "Nós ___ (receber) um presente.", full: "Nós recebemos um presente.", he: "אנחנו מקבלים מתנה.", en: "We receive a gift." },
      { pt: "Eles ___ (receber) um presente.", full: "Eles recebem um presente.", he: "הם מקבלים מתנה.", en: "They receive a gift." },
      { pt: "Ontem eu ___ (receber) um presente.", full: "Ontem eu recebi um presente.", he: "אתמול אני קיבלתי מתנה.", en: "Yesterday I received a gift." },
      { pt: "Ontem você ___ (receber) um presente.", full: "Ontem você recebeu um presente.", he: "אתמול את/ה קיבלת מתנה.", en: "Yesterday you received a gift." },
      { pt: "Ontem ele ___ (receber) um presente.", full: "Ontem ele recebeu um presente.", he: "אתמול הוא קיבל מתנה.", en: "Yesterday he received a gift." },
      { pt: "Ontem nós ___ (receber) um presente.", full: "Ontem nós recebemos um presente.", he: "אתמול אנחנו קיבלנו מתנה.", en: "Yesterday we received a gift." },
      { pt: "Ontem eles ___ (receber) um presente.", full: "Ontem eles receberam um presente.", he: "אתמול הם קיבלו מתנה.", en: "Yesterday they received a gift." },
    ]
  },
  {
    id: 154,
    level: 30,
    title: { he: "BATER - השלמת משפטים", en: "BATER - Fill in the Blank" },
    short: "BATER",
    cards: [
      { pt: "Eu ___ (bater) na porta.", full: "Eu bato na porta.", he: "אני דופק בדלת.", en: "I knock on the door." },
      { pt: "Você ___ (bater) na porta.", full: "Você bate na porta.", he: "את/ה דופק/ת בדלת.", en: "You knock on the door." },
      { pt: "Ele ___ (bater) na porta.", full: "Ele bate na porta.", he: "הוא דופק בדלת.", en: "He knocks on the door." },
      { pt: "Nós ___ (bater) na porta.", full: "Nós batemos na porta.", he: "אנחנו דופקים בדלת.", en: "We knock on the door." },
      { pt: "Eles ___ (bater) na porta.", full: "Eles batem na porta.", he: "הם דופקים בדלת.", en: "They knock on the door." },
      { pt: "Ontem eu ___ (bater) na porta.", full: "Ontem eu bati na porta.", he: "אתמול אני דפקתי בדלת.", en: "Yesterday I knocked on the door." },
      { pt: "Ontem você ___ (bater) na porta.", full: "Ontem você bateu na porta.", he: "אתמול את/ה דפקת בדלת.", en: "Yesterday you knocked on the door." },
      { pt: "Ontem ele ___ (bater) na porta.", full: "Ontem ele bateu na porta.", he: "אתמול הוא דפק בדלת.", en: "Yesterday he knocked on the door." },
      { pt: "Ontem nós ___ (bater) na porta.", full: "Ontem nós batemos na porta.", he: "אתמול אנחנו דפקנו בדלת.", en: "Yesterday we knocked on the door." },
      { pt: "Ontem eles ___ (bater) na porta.", full: "Ontem eles bateram na porta.", he: "אתמול הם דפקו בדלת.", en: "Yesterday they knocked on the door." },
    ]
  },
  {
    id: 155,
    level: 30,
    title: { he: "VENDER - השלמת משפטים", en: "VENDER - Fill in the Blank" },
    short: "VENDER",
    cards: [
      { pt: "Eu ___ (vender) a casa.", full: "Eu vendo a casa.", he: "אני מוכר את הבית.", en: "I sell the house." },
      { pt: "Você ___ (vender) a casa.", full: "Você vende a casa.", he: "את/ה מוכר/ת את הבית.", en: "You sell the house." },
      { pt: "Ele ___ (vender) a casa.", full: "Ele vende a casa.", he: "הוא מוכר את הבית.", en: "He sells the house." },
      { pt: "Nós ___ (vender) a casa.", full: "Nós vendemos a casa.", he: "אנחנו מוכרים את הבית.", en: "We sell the house." },
      { pt: "Eles ___ (vender) a casa.", full: "Eles vendem a casa.", he: "הם מוכרים את הבית.", en: "They sell the house." },
      { pt: "Ontem eu ___ (vender) a casa.", full: "Ontem eu vendi a casa.", he: "אתמול אני מכרתי את הבית.", en: "Yesterday I sold the house." },
      { pt: "Ontem você ___ (vender) a casa.", full: "Ontem você vendeu a casa.", he: "אתמול את/ה מכרת את הבית.", en: "Yesterday you sold the house." },
      { pt: "Ontem ele ___ (vender) a casa.", full: "Ontem ele vendeu a casa.", he: "אתמול הוא מכר את הבית.", en: "Yesterday he sold the house." },
      { pt: "Ontem nós ___ (vender) a casa.", full: "Ontem nós vendemos a casa.", he: "אתמול אנחנו מכרנו את הבית.", en: "Yesterday we sold the house." },
      { pt: "Ontem eles ___ (vender) a casa.", full: "Ontem eles venderam a casa.", he: "אתמול הם מכרו את הבית.", en: "Yesterday they sold the house." },
    ]
  },
  {
    id: 156,
    level: 30,
    title: { he: "ENTENDER - השלמת משפטים", en: "ENTENDER - Fill in the Blank" },
    short: "ENTENDER",
    cards: [
      { pt: "Eu ___ (entender) a lição.", full: "Eu entendo a lição.", he: "אני מבין את השיעור.", en: "I understand the lesson." },
      { pt: "Você ___ (entender) a lição.", full: "Você entende a lição.", he: "את/ה מבין/ה את השיעור.", en: "You understand the lesson." },
      { pt: "Ele ___ (entender) a lição.", full: "Ele entende a lição.", he: "הוא מבין את השיעור.", en: "He understands the lesson." },
      { pt: "Nós ___ (entender) a lição.", full: "Nós entendemos a lição.", he: "אנחנו מבינים את השיעור.", en: "We understand the lesson." },
      { pt: "Eles ___ (entender) a lição.", full: "Eles entendem a lição.", he: "הם מבינים את השיעור.", en: "They understand the lesson." },
      { pt: "Ontem eu ___ (entender) a lição.", full: "Ontem eu entendi a lição.", he: "אתמול אני הבנתי את השיעור.", en: "Yesterday I understood the lesson." },
      { pt: "Ontem você ___ (entender) a lição.", full: "Ontem você entendeu a lição.", he: "אתמול את/ה הבנת את השיעור.", en: "Yesterday you understood the lesson." },
      { pt: "Ontem ele ___ (entender) a lição.", full: "Ontem ele entendeu a lição.", he: "אתמול הוא הבין את השיעור.", en: "Yesterday he understood the lesson." },
      { pt: "Ontem nós ___ (entender) a lição.", full: "Ontem nós entendemos a lição.", he: "אתמול אנחנו הבנו את השיעור.", en: "Yesterday we understood the lesson." },
      { pt: "Ontem eles ___ (entender) a lição.", full: "Ontem eles entenderam a lição.", he: "אתמול הם הבינו את השיעור.", en: "Yesterday they understood the lesson." },
    ]
  },
  {
    id: 157,
    level: 30,
    title: { he: "PROMETER - השלמת משפטים", en: "PROMETER - Fill in the Blank" },
    short: "PROMETER",
    cards: [
      { pt: "Eu ___ (prometer) ajudar.", full: "Eu prometo ajudar.", he: "אני מבטיח לעזור.", en: "I promise to help." },
      { pt: "Você ___ (prometer) ajudar.", full: "Você promete ajudar.", he: "את/ה מבטיח/ה לעזור.", en: "You promise to help." },
      { pt: "Ele ___ (prometer) ajudar.", full: "Ele promete ajudar.", he: "הוא מבטיח לעזור.", en: "He promises to help." },
      { pt: "Nós ___ (prometer) ajudar.", full: "Nós prometemos ajudar.", he: "אנחנו מבטיחים לעזור.", en: "We promise to help." },
      { pt: "Eles ___ (prometer) ajudar.", full: "Eles prometem ajudar.", he: "הם מבטיחים לעזור.", en: "They promise to help." },
      { pt: "Ontem eu ___ (prometer) ajudar.", full: "Ontem eu prometi ajudar.", he: "אתמול אני הבטחתי לעזור.", en: "Yesterday I promised to help." },
      { pt: "Ontem você ___ (prometer) ajudar.", full: "Ontem você prometeu ajudar.", he: "אתמול את/ה הבטחת לעזור.", en: "Yesterday you promised to help." },
      { pt: "Ontem ele ___ (prometer) ajudar.", full: "Ontem ele prometeu ajudar.", he: "אתמול הוא הבטיח לעזור.", en: "Yesterday he promised to help." },
      { pt: "Ontem nós ___ (prometer) ajudar.", full: "Ontem nós prometemos ajudar.", he: "אתמול אנחנו הבטחנו לעזור.", en: "Yesterday we promised to help." },
      { pt: "Ontem eles ___ (prometer) ajudar.", full: "Ontem eles prometeram ajudar.", he: "אתמול הם הבטיחו לעזור.", en: "Yesterday they promised to help." },
    ]
  },

  // ---------------- Level 31: -IR verb sentence drills ----------------
  {
    id: 158,
    level: 31,
    title: { he: "DECIDIR - השלמת משפטים", en: "DECIDIR - Fill in the Blank" },
    short: "DECIDIR",
    cards: [
      { pt: "Eu ___ (decidir) o futuro.", full: "Eu decido o futuro.", he: "אני מחליט את העתיד.", en: "I decide the future." },
      { pt: "Você ___ (decidir) o futuro.", full: "Você decide o futuro.", he: "את/ה מחליט/ה את העתיד.", en: "You decide the future." },
      { pt: "Ele ___ (decidir) o futuro.", full: "Ele decide o futuro.", he: "הוא מחליט את העתיד.", en: "He decides the future." },
      { pt: "Nós ___ (decidir) o futuro.", full: "Nós decidimos o futuro.", he: "אנחנו מחליטים את העתיד.", en: "We decide the future." },
      { pt: "Eles ___ (decidir) o futuro.", full: "Eles decidem o futuro.", he: "הם מחליטים את העתיד.", en: "They decide the future." },
      { pt: "Ontem eu ___ (decidir) o futuro.", full: "Ontem eu decidi o futuro.", he: "אתמול אני החלטתי את העתיד.", en: "Yesterday I decided the future." },
      { pt: "Ontem você ___ (decidir) o futuro.", full: "Ontem você decidiu o futuro.", he: "אתמול את/ה החלטת את העתיד.", en: "Yesterday you decided the future." },
      { pt: "Ontem ele ___ (decidir) o futuro.", full: "Ontem ele decidiu o futuro.", he: "אתמול הוא החליט את העתיד.", en: "Yesterday he decided the future." },
      { pt: "Ontem nós ___ (decidir) o futuro.", full: "Ontem nós decidimos o futuro.", he: "אתמול אנחנו החלטנו את העתיד.", en: "Yesterday we decided the future." },
      { pt: "Ontem eles ___ (decidir) o futuro.", full: "Ontem eles decidiram o futuro.", he: "אתמול הם החליטו את העתיד.", en: "Yesterday they decided the future." },
    ]
  },
  {
    id: 159,
    level: 31,
    title: { he: "DIVIDIR - השלמת משפטים", en: "DIVIDIR - Fill in the Blank" },
    short: "DIVIDIR",
    cards: [
      { pt: "Eu ___ (dividir) a pizza.", full: "Eu divido a pizza.", he: "אני מחלק את הפיצה.", en: "I share the pizza." },
      { pt: "Você ___ (dividir) a pizza.", full: "Você divide a pizza.", he: "את/ה מחלק/ת את הפיצה.", en: "You share the pizza." },
      { pt: "Ele ___ (dividir) a pizza.", full: "Ele divide a pizza.", he: "הוא מחלק את הפיצה.", en: "He shares the pizza." },
      { pt: "Nós ___ (dividir) a pizza.", full: "Nós dividimos a pizza.", he: "אנחנו מחלקים את הפיצה.", en: "We share the pizza." },
      { pt: "Eles ___ (dividir) a pizza.", full: "Eles dividem a pizza.", he: "הם מחלקים את הפיצה.", en: "They share the pizza." },
      { pt: "Ontem eu ___ (dividir) a pizza.", full: "Ontem eu dividi a pizza.", he: "אתמול אני חילקתי את הפיצה.", en: "Yesterday I shared the pizza." },
      { pt: "Ontem você ___ (dividir) a pizza.", full: "Ontem você dividiu a pizza.", he: "אתמול את/ה חילקת את הפיצה.", en: "Yesterday you shared the pizza." },
      { pt: "Ontem ele ___ (dividir) a pizza.", full: "Ontem ele dividiu a pizza.", he: "אתמול הוא חילק את הפיצה.", en: "Yesterday he shared the pizza." },
      { pt: "Ontem nós ___ (dividir) a pizza.", full: "Ontem nós dividimos a pizza.", he: "אתמול אנחנו חילקנו את הפיצה.", en: "Yesterday we shared the pizza." },
      { pt: "Ontem eles ___ (dividir) a pizza.", full: "Ontem eles dividiram a pizza.", he: "אתמול הם חילקו את הפיצה.", en: "Yesterday they shared the pizza." },
    ]
  },
  {
    id: 160,
    level: 31,
    title: { he: "PERMITIR - השלמת משפטים", en: "PERMITIR - Fill in the Blank" },
    short: "PERMITIR",
    cards: [
      { pt: "Eu ___ (permitir) isso.", full: "Eu permito isso.", he: "אני מתיר את זה.", en: "I allow that." },
      { pt: "Você ___ (permitir) isso.", full: "Você permite isso.", he: "את/ה מתיר/ה את זה.", en: "You allow that." },
      { pt: "Ele ___ (permitir) isso.", full: "Ele permite isso.", he: "הוא מתיר את זה.", en: "He allows that." },
      { pt: "Nós ___ (permitir) isso.", full: "Nós permitimos isso.", he: "אנחנו מתירים את זה.", en: "We allow that." },
      { pt: "Eles ___ (permitir) isso.", full: "Eles permitem isso.", he: "הם מתירים את זה.", en: "They allow that." },
      { pt: "Ontem eu ___ (permitir) isso.", full: "Ontem eu permiti isso.", he: "אתמול אני התרתי את זה.", en: "Yesterday I allowed that." },
      { pt: "Ontem você ___ (permitir) isso.", full: "Ontem você permitiu isso.", he: "אתמול את/ה התרת את זה.", en: "Yesterday you allowed that." },
      { pt: "Ontem ele ___ (permitir) isso.", full: "Ontem ele permitiu isso.", he: "אתמול הוא התיר את זה.", en: "Yesterday he allowed that." },
      { pt: "Ontem nós ___ (permitir) isso.", full: "Ontem nós permitimos isso.", he: "אתמול אנחנו התרנו את זה.", en: "Yesterday we allowed that." },
      { pt: "Ontem eles ___ (permitir) isso.", full: "Ontem eles permitiram isso.", he: "אתמול הם התירו את זה.", en: "Yesterday they allowed that." },
    ]
  },
  {
    id: 161,
    level: 31,
    title: { he: "RESISTIR - השלמת משפטים", en: "RESISTIR - Fill in the Blank" },
    short: "RESISTIR",
    cards: [
      { pt: "Eu ___ (resistir) à tentação.", full: "Eu resisto à tentação.", he: "אני מתנגד לפיתוי.", en: "I resist temptation." },
      { pt: "Você ___ (resistir) à tentação.", full: "Você resiste à tentação.", he: "את/ה מתנגד/ת לפיתוי.", en: "You resist temptation." },
      { pt: "Ele ___ (resistir) à tentação.", full: "Ele resiste à tentação.", he: "הוא מתנגד לפיתוי.", en: "He resists temptation." },
      { pt: "Nós ___ (resistir) à tentação.", full: "Nós resistimos à tentação.", he: "אנחנו מתנגדים לפיתוי.", en: "We resist temptation." },
      { pt: "Eles ___ (resistir) à tentação.", full: "Eles resistem à tentação.", he: "הם מתנגדים לפיתוי.", en: "They resist temptation." },
      { pt: "Ontem eu ___ (resistir) à tentação.", full: "Ontem eu resisti à tentação.", he: "אתמול אני התנגדתי לפיתוי.", en: "Yesterday I resisted temptation." },
      { pt: "Ontem você ___ (resistir) à tentação.", full: "Ontem você resistiu à tentação.", he: "אתמול את/ה התנגדת לפיתוי.", en: "Yesterday you resisted temptation." },
      { pt: "Ontem ele ___ (resistir) à tentação.", full: "Ontem ele resistiu à tentação.", he: "אתמול הוא התנגד לפיתוי.", en: "Yesterday he resisted temptation." },
      { pt: "Ontem nós ___ (resistir) à tentação.", full: "Ontem nós resistimos à tentação.", he: "אתמול אנחנו התנגדנו לפיתוי.", en: "Yesterday we resisted temptation." },
      { pt: "Ontem eles ___ (resistir) à tentação.", full: "Ontem eles resistiram à tentação.", he: "אתמול הם התנגדו לפיתוי.", en: "Yesterday they resisted temptation." },
    ]
  },
  {
    id: 162,
    level: 31,
    title: { he: "UNIR - השלמת משפטים", en: "UNIR - Fill in the Blank" },
    short: "UNIR",
    cards: [
      { pt: "Eu ___ (unir) a família.", full: "Eu uno a família.", he: "אני מאחד את המשפחה.", en: "I unite the family." },
      { pt: "Você ___ (unir) a família.", full: "Você une a família.", he: "את/ה מאחד/ת את המשפחה.", en: "You unite the family." },
      { pt: "Ele ___ (unir) a família.", full: "Ele une a família.", he: "הוא מאחד את המשפחה.", en: "He unites the family." },
      { pt: "Nós ___ (unir) a família.", full: "Nós unimos a família.", he: "אנחנו מאחדים את המשפחה.", en: "We unite the family." },
      { pt: "Eles ___ (unir) a família.", full: "Eles unem a família.", he: "הם מאחדים את המשפחה.", en: "They unite the family." },
      { pt: "Ontem eu ___ (unir) a família.", full: "Ontem eu uni a família.", he: "אתמול אני איחדתי את המשפחה.", en: "Yesterday I united the family." },
      { pt: "Ontem você ___ (unir) a família.", full: "Ontem você uniu a família.", he: "אתמול את/ה איחדת את המשפחה.", en: "Yesterday you united the family." },
      { pt: "Ontem ele ___ (unir) a família.", full: "Ontem ele uniu a família.", he: "אתמול הוא איחד את המשפחה.", en: "Yesterday he united the family." },
      { pt: "Ontem nós ___ (unir) a família.", full: "Ontem nós unimos a família.", he: "אתמול אנחנו איחדנו את המשפחה.", en: "Yesterday we united the family." },
      { pt: "Ontem eles ___ (unir) a família.", full: "Ontem eles uniram a família.", he: "אתמול הם איחדו את המשפחה.", en: "Yesterday they united the family." },
    ]
  },
  {
    id: 163,
    level: 31,
    title: { he: "ASSISTIR - השלמת משפטים", en: "ASSISTIR - Fill in the Blank" },
    short: "ASSISTIR",
    cards: [
      { pt: "Eu ___ (assistir) um filme.", full: "Eu assisto um filme.", he: "אני צופה סרט.", en: "I watch a movie." },
      { pt: "Você ___ (assistir) um filme.", full: "Você assiste um filme.", he: "את/ה צופה סרט.", en: "You watch a movie." },
      { pt: "Ele ___ (assistir) um filme.", full: "Ele assiste um filme.", he: "הוא צופה סרט.", en: "He watches a movie." },
      { pt: "Nós ___ (assistir) um filme.", full: "Nós assistimos um filme.", he: "אנחנו צופים סרט.", en: "We watch a movie." },
      { pt: "Eles ___ (assistir) um filme.", full: "Eles assistem um filme.", he: "הם צופים סרט.", en: "They watch a movie." },
      { pt: "Ontem eu ___ (assistir) um filme.", full: "Ontem eu assisti um filme.", he: "אתמול אני צפיתי סרט.", en: "Yesterday I watched a movie." },
      { pt: "Ontem você ___ (assistir) um filme.", full: "Ontem você assistiu um filme.", he: "אתמול את/ה צפית סרט.", en: "Yesterday you watched a movie." },
      { pt: "Ontem ele ___ (assistir) um filme.", full: "Ontem ele assistiu um filme.", he: "אתמול הוא צפה סרט.", en: "Yesterday he watched a movie." },
      { pt: "Ontem nós ___ (assistir) um filme.", full: "Ontem nós assistimos um filme.", he: "אתמול אנחנו צפינו סרט.", en: "Yesterday we watched a movie." },
      { pt: "Ontem eles ___ (assistir) um filme.", full: "Ontem eles assistiram um filme.", he: "אתמול הם צפו סרט.", en: "Yesterday they watched a movie." },
    ]
  },
  {
    id: 164,
    level: 31,
    title: { he: "DISCUTIR - השלמת משפטים", en: "DISCUTIR - Fill in the Blank" },
    short: "DISCUTIR",
    cards: [
      { pt: "Eu ___ (discutir) o problema.", full: "Eu discuto o problema.", he: "אני דן על הבעיה.", en: "I discuss the problem." },
      { pt: "Você ___ (discutir) o problema.", full: "Você discute o problema.", he: "את/ה דן/ה על הבעיה.", en: "You discuss the problem." },
      { pt: "Ele ___ (discutir) o problema.", full: "Ele discute o problema.", he: "הוא דן על הבעיה.", en: "He discusses the problem." },
      { pt: "Nós ___ (discutir) o problema.", full: "Nós discutimos o problema.", he: "אנחנו דנים על הבעיה.", en: "We discuss the problem." },
      { pt: "Eles ___ (discutir) o problema.", full: "Eles discutem o problema.", he: "הם דנים על הבעיה.", en: "They discuss the problem." },
      { pt: "Ontem eu ___ (discutir) o problema.", full: "Ontem eu discuti o problema.", he: "אתמול אני דנתי על הבעיה.", en: "Yesterday I discussed the problem." },
      { pt: "Ontem você ___ (discutir) o problema.", full: "Ontem você discutiu o problema.", he: "אתמול את/ה דנת על הבעיה.", en: "Yesterday you discussed the problem." },
      { pt: "Ontem ele ___ (discutir) o problema.", full: "Ontem ele discutiu o problema.", he: "אתמול הוא דן על הבעיה.", en: "Yesterday he discussed the problem." },
      { pt: "Ontem nós ___ (discutir) o problema.", full: "Ontem nós discutimos o problema.", he: "אתמול אנחנו דנו על הבעיה.", en: "Yesterday we discussed the problem." },
      { pt: "Ontem eles ___ (discutir) o problema.", full: "Ontem eles discutiram o problema.", he: "אתמול הם דנו על הבעיה.", en: "Yesterday they discussed the problem." },
    ]
  },
  {
    id: 165,
    level: 31,
    title: { he: "INSISTIR - השלמת משפטים", en: "INSISTIR - Fill in the Blank" },
    short: "INSISTIR",
    cards: [
      { pt: "Eu ___ (insistir) muito.", full: "Eu insisto muito.", he: "אני מתעקש הרבה.", en: "I insist a lot." },
      { pt: "Você ___ (insistir) muito.", full: "Você insiste muito.", he: "את/ה מתעקש/ת הרבה.", en: "You insist a lot." },
      { pt: "Ele ___ (insistir) muito.", full: "Ele insiste muito.", he: "הוא מתעקש הרבה.", en: "He insists a lot." },
      { pt: "Nós ___ (insistir) muito.", full: "Nós insistimos muito.", he: "אנחנו מתעקשים הרבה.", en: "We insist a lot." },
      { pt: "Eles ___ (insistir) muito.", full: "Eles insistem muito.", he: "הם מתעקשים הרבה.", en: "They insist a lot." },
      { pt: "Ontem eu ___ (insistir) muito.", full: "Ontem eu insisti muito.", he: "אתמול אני התעקשתי הרבה.", en: "Yesterday I insisted a lot." },
      { pt: "Ontem você ___ (insistir) muito.", full: "Ontem você insistiu muito.", he: "אתמול את/ה התעקשת הרבה.", en: "Yesterday you insisted a lot." },
      { pt: "Ontem ele ___ (insistir) muito.", full: "Ontem ele insistiu muito.", he: "אתמול הוא התעקש הרבה.", en: "Yesterday he insisted a lot." },
      { pt: "Ontem nós ___ (insistir) muito.", full: "Ontem nós insistimos muito.", he: "אתמול אנחנו התעקשנו הרבה.", en: "Yesterday we insisted a lot." },
      { pt: "Ontem eles ___ (insistir) muito.", full: "Ontem eles insistiram muito.", he: "אתמול הם התעקשו הרבה.", en: "Yesterday they insisted a lot." },
    ]
  },
  {
    id: 166,
    level: 31,
    title: { he: "IMPRIMIR - השלמת משפטים", en: "IMPRIMIR - Fill in the Blank" },
    short: "IMPRIMIR",
    cards: [
      { pt: "Eu ___ (imprimir) o documento.", full: "Eu imprimo o documento.", he: "אני מדפיס את המסמך.", en: "I print the document." },
      { pt: "Você ___ (imprimir) o documento.", full: "Você imprime o documento.", he: "את/ה מדפיס/ה את המסמך.", en: "You print the document." },
      { pt: "Ele ___ (imprimir) o documento.", full: "Ele imprime o documento.", he: "הוא מדפיס את המסמך.", en: "He prints the document." },
      { pt: "Nós ___ (imprimir) o documento.", full: "Nós imprimimos o documento.", he: "אנחנו מדפיסים את המסמך.", en: "We print the document." },
      { pt: "Eles ___ (imprimir) o documento.", full: "Eles imprimem o documento.", he: "הם מדפיסים את המסמך.", en: "They print the document." },
      { pt: "Ontem eu ___ (imprimir) o documento.", full: "Ontem eu imprimi o documento.", he: "אתמול אני הדפסתי את המסמך.", en: "Yesterday I printed the document." },
      { pt: "Ontem você ___ (imprimir) o documento.", full: "Ontem você imprimiu o documento.", he: "אתמול את/ה הדפסת את המסמך.", en: "Yesterday you printed the document." },
      { pt: "Ontem ele ___ (imprimir) o documento.", full: "Ontem ele imprimiu o documento.", he: "אתמול הוא הדפיס את המסמך.", en: "Yesterday he printed the document." },
      { pt: "Ontem nós ___ (imprimir) o documento.", full: "Ontem nós imprimimos o documento.", he: "אתמול אנחנו הדפסנו את המסמך.", en: "Yesterday we printed the document." },
      { pt: "Ontem eles ___ (imprimir) o documento.", full: "Ontem eles imprimiram o documento.", he: "אתמול הם הדפיסו את המסמך.", en: "Yesterday they printed the document." },
    ]
  },
  {
    id: 167,
    level: 31,
    title: { he: "GARANTIR - השלמת משפטים", en: "GARANTIR - Fill in the Blank" },
    short: "GARANTIR",
    cards: [
      { pt: "Eu ___ (garantir) a qualidade.", full: "Eu garanto a qualidade.", he: "אני מבטיח את האיכות.", en: "I guarantee the quality." },
      { pt: "Você ___ (garantir) a qualidade.", full: "Você garante a qualidade.", he: "את/ה מבטיח/ה את האיכות.", en: "You guarantee the quality." },
      { pt: "Ele ___ (garantir) a qualidade.", full: "Ele garante a qualidade.", he: "הוא מבטיח את האיכות.", en: "He guarantees the quality." },
      { pt: "Nós ___ (garantir) a qualidade.", full: "Nós garantimos a qualidade.", he: "אנחנו מבטיחים את האיכות.", en: "We guarantee the quality." },
      { pt: "Eles ___ (garantir) a qualidade.", full: "Eles garantem a qualidade.", he: "הם מבטיחים את האיכות.", en: "They guarantee the quality." },
      { pt: "Ontem eu ___ (garantir) a qualidade.", full: "Ontem eu garanti a qualidade.", he: "אתמול אני הבטחתי את האיכות.", en: "Yesterday I guaranteed the quality." },
      { pt: "Ontem você ___ (garantir) a qualidade.", full: "Ontem você garantiu a qualidade.", he: "אתמול את/ה הבטחת את האיכות.", en: "Yesterday you guaranteed the quality." },
      { pt: "Ontem ele ___ (garantir) a qualidade.", full: "Ontem ele garantiu a qualidade.", he: "אתמול הוא הבטיח את האיכות.", en: "Yesterday he guaranteed the quality." },
      { pt: "Ontem nós ___ (garantir) a qualidade.", full: "Ontem nós garantimos a qualidade.", he: "אתמול אנחנו הבטחנו את האיכות.", en: "Yesterday we guaranteed the quality." },
      { pt: "Ontem eles ___ (garantir) a qualidade.", full: "Ontem eles garantiram a qualidade.", he: "אתמול הם הבטיחו את האיכות.", en: "Yesterday they guaranteed the quality." },
    ]
  },

  // ---------------- Level 32: More irregular verb sentence drills ----------------
  {
    id: 168,
    level: 32,
    title: { he: "DAR - השלמת משפטים", en: "DAR - Fill in the Blank" },
    short: "DAR",
    cards: [
      { pt: "Eu ___ (dar) um presente.", full: "Eu dou um presente.", he: "אני נותן מתנה.", en: "I give a gift." },
      { pt: "Você ___ (dar) um presente.", full: "Você dá um presente.", he: "את/ה נותן/ת מתנה.", en: "You give a gift." },
      { pt: "Ele ___ (dar) um presente.", full: "Ele dá um presente.", he: "הוא נותן מתנה.", en: "He gives a gift." },
      { pt: "Nós ___ (dar) um presente.", full: "Nós damos um presente.", he: "אנחנו נותנים מתנה.", en: "We give a gift." },
      { pt: "Eles ___ (dar) um presente.", full: "Eles dão um presente.", he: "הם נותנים מתנה.", en: "They give a gift." },
      { pt: "Ontem eu ___ (dar) um presente.", full: "Ontem eu dei um presente.", he: "אתמול אני נתתי מתנה.", en: "Yesterday I gave a gift." },
      { pt: "Ontem você ___ (dar) um presente.", full: "Ontem você deu um presente.", he: "אתמול את/ה נתת מתנה.", en: "Yesterday you gave a gift." },
      { pt: "Ontem ele ___ (dar) um presente.", full: "Ontem ele deu um presente.", he: "אתמול הוא נתן מתנה.", en: "Yesterday he gave a gift." },
      { pt: "Ontem nós ___ (dar) um presente.", full: "Ontem nós demos um presente.", he: "אתמול אנחנו נתנו מתנה.", en: "Yesterday we gave a gift." },
      { pt: "Ontem eles ___ (dar) um presente.", full: "Ontem eles deram um presente.", he: "אתמול הם נתנו מתנה.", en: "Yesterday they gave a gift." },
    ]
  },
  {
    id: 169,
    level: 32,
    title: { he: "DIZER - השלמת משפטים", en: "DIZER - Fill in the Blank" },
    short: "DIZER",
    cards: [
      { pt: "Eu ___ (dizer) a verdade.", full: "Eu digo a verdade.", he: "אני אומר את האמת.", en: "I say the truth." },
      { pt: "Você ___ (dizer) a verdade.", full: "Você diz a verdade.", he: "את/ה אומר/ת את האמת.", en: "You say the truth." },
      { pt: "Ele ___ (dizer) a verdade.", full: "Ele diz a verdade.", he: "הוא אומר את האמת.", en: "He says the truth." },
      { pt: "Nós ___ (dizer) a verdade.", full: "Nós dizemos a verdade.", he: "אנחנו אומרים את האמת.", en: "We say the truth." },
      { pt: "Eles ___ (dizer) a verdade.", full: "Eles dizem a verdade.", he: "הם אומרים את האמת.", en: "They say the truth." },
      { pt: "Ontem eu ___ (dizer) a verdade.", full: "Ontem eu disse a verdade.", he: "אתמול אני אמרתי את האמת.", en: "Yesterday I said the truth." },
      { pt: "Ontem você ___ (dizer) a verdade.", full: "Ontem você disse a verdade.", he: "אתמול את/ה אמרת את האמת.", en: "Yesterday you said the truth." },
      { pt: "Ontem ele ___ (dizer) a verdade.", full: "Ontem ele disse a verdade.", he: "אתמול הוא אמר את האמת.", en: "Yesterday he said the truth." },
      { pt: "Ontem nós ___ (dizer) a verdade.", full: "Ontem nós dissemos a verdade.", he: "אתמול אנחנו אמרנו את האמת.", en: "Yesterday we said the truth." },
      { pt: "Ontem eles ___ (dizer) a verdade.", full: "Ontem eles disseram a verdade.", he: "אתמול הם אמרו את האמת.", en: "Yesterday they said the truth." },
    ]
  },
  {
    id: 170,
    level: 32,
    title: { he: "TRAZER - השלמת משפטים", en: "TRAZER - Fill in the Blank" },
    short: "TRAZER",
    cards: [
      { pt: "Eu ___ (trazer) comida.", full: "Eu trago comida.", he: "אני מביא אוכל.", en: "I bring food." },
      { pt: "Você ___ (trazer) comida.", full: "Você traz comida.", he: "את/ה מביא/ה אוכל.", en: "You bring food." },
      { pt: "Ele ___ (trazer) comida.", full: "Ele traz comida.", he: "הוא מביא אוכל.", en: "He brings food." },
      { pt: "Nós ___ (trazer) comida.", full: "Nós trazemos comida.", he: "אנחנו מביאים אוכל.", en: "We bring food." },
      { pt: "Eles ___ (trazer) comida.", full: "Eles trazem comida.", he: "הם מביאים אוכל.", en: "They bring food." },
      { pt: "Ontem eu ___ (trazer) comida.", full: "Ontem eu trouxe comida.", he: "אתמול אני הבאתי אוכל.", en: "Yesterday I brought food." },
      { pt: "Ontem você ___ (trazer) comida.", full: "Ontem você trouxe comida.", he: "אתמול את/ה הבאת אוכל.", en: "Yesterday you brought food." },
      { pt: "Ontem ele ___ (trazer) comida.", full: "Ontem ele trouxe comida.", he: "אתמול הוא הביא אוכל.", en: "Yesterday he brought food." },
      { pt: "Ontem nós ___ (trazer) comida.", full: "Ontem nós trouxemos comida.", he: "אתמול אנחנו הבאנו אוכל.", en: "Yesterday we brought food." },
      { pt: "Ontem eles ___ (trazer) comida.", full: "Ontem eles trouxeram comida.", he: "אתמול הם הביאו אוכל.", en: "Yesterday they brought food." },
    ]
  },
  {
    id: 171,
    level: 32,
    title: { he: "VIR - השלמת משפטים", en: "VIR - Fill in the Blank" },
    short: "VIR",
    cards: [
      { pt: "Eu ___ (vir) à festa.", full: "Eu venho à festa.", he: "אני בא למסיבה.", en: "I come to the party." },
      { pt: "Você ___ (vir) à festa.", full: "Você vem à festa.", he: "את/ה בא/ה למסיבה.", en: "You come to the party." },
      { pt: "Ele ___ (vir) à festa.", full: "Ele vem à festa.", he: "הוא בא למסיבה.", en: "He comes to the party." },
      { pt: "Nós ___ (vir) à festa.", full: "Nós vimos à festa.", he: "אנחנו באים למסיבה.", en: "We come to the party." },
      { pt: "Eles ___ (vir) à festa.", full: "Eles vêm à festa.", he: "הם באים למסיבה.", en: "They come to the party." },
      { pt: "Ontem eu ___ (vir) à festa.", full: "Ontem eu vim à festa.", he: "אתמול אני באתי למסיבה.", en: "Yesterday I came to the party." },
      { pt: "Ontem você ___ (vir) à festa.", full: "Ontem você veio à festa.", he: "אתמול את/ה באת למסיבה.", en: "Yesterday you came to the party." },
      { pt: "Ontem ele ___ (vir) à festa.", full: "Ontem ele veio à festa.", he: "אתמול הוא בא למסיבה.", en: "Yesterday he came to the party." },
      { pt: "Ontem nós ___ (vir) à festa.", full: "Ontem nós viemos à festa.", he: "אתמול אנחנו באנו למסיבה.", en: "Yesterday we came to the party." },
      { pt: "Ontem eles ___ (vir) à festa.", full: "Ontem eles vieram à festa.", he: "אתמול הם באו למסיבה.", en: "Yesterday they came to the party." },
    ]
  },
  {
    id: 172,
    level: 32,
    title: { he: "PÔR - השלמת משפטים", en: "PÔR - Fill in the Blank" },
    short: "PÔR",
    cards: [
      { pt: "Eu ___ (pôr) a mesa.", full: "Eu ponho a mesa.", he: "אני מסדר את השולחן.", en: "I set the table." },
      { pt: "Você ___ (pôr) a mesa.", full: "Você põe a mesa.", he: "את/ה מסדר/ת את השולחן.", en: "You set the table." },
      { pt: "Ele ___ (pôr) a mesa.", full: "Ele põe a mesa.", he: "הוא מסדר את השולחן.", en: "He sets the table." },
      { pt: "Nós ___ (pôr) a mesa.", full: "Nós pomos a mesa.", he: "אנחנו מסדרים את השולחן.", en: "We set the table." },
      { pt: "Eles ___ (pôr) a mesa.", full: "Eles põem a mesa.", he: "הם מסדרים את השולחן.", en: "They set the table." },
      { pt: "Ontem eu ___ (pôr) a mesa.", full: "Ontem eu pus a mesa.", he: "אתמול אני סידרתי את השולחן.", en: "Yesterday I set the table." },
      { pt: "Ontem você ___ (pôr) a mesa.", full: "Ontem você pôs a mesa.", he: "אתמול את/ה סידרת את השולחן.", en: "Yesterday you set the table." },
      { pt: "Ontem ele ___ (pôr) a mesa.", full: "Ontem ele pôs a mesa.", he: "אתמול הוא סידר את השולחן.", en: "Yesterday he set the table." },
      { pt: "Ontem nós ___ (pôr) a mesa.", full: "Ontem nós pusemos a mesa.", he: "אתמול אנחנו סידרנו את השולחן.", en: "Yesterday we set the table." },
      { pt: "Ontem eles ___ (pôr) a mesa.", full: "Ontem eles puseram a mesa.", he: "אתמול הם סידרו את השולחן.", en: "Yesterday they set the table." },
    ]
  },

  // ---------------- Level 33: More random number drills ----------------
  {
    id: 173,
    level: 33,
    title: { he: "אקראי ג׳", en: "Random Mix C" },
    cards: [
      { pt: "duzentos e trinta e cinco", he: "מאתיים שלושים וחמש", en: "two hundred thirty-five" },
      { pt: "quatrocentos e cinquenta e sete", he: "ארבע מאות חמישים ושבע", en: "four hundred fifty-seven" },
      { pt: "trezentos e setenta e oito", he: "שלוש מאות שבעים ושמונה", en: "three hundred seventy-eight" },
      { pt: "quinhentos e noventa", he: "חמש מאות תשעים", en: "five hundred ninety" },
      { pt: "duzentos e setenta e sete", he: "מאתיים שבעים ושבע", en: "two hundred seventy-seven" },
      { pt: "oitocentos e cinquenta e dois", he: "שמונה מאות חמישים ושתיים", en: "eight hundred fifty-two" },
      { pt: "trezentos e quarenta e cinco", he: "שלוש מאות ארבעים וחמש", en: "three hundred forty-five" },
      { pt: "quinhentos e cinquenta e um", he: "חמש מאות חמישים ואחת", en: "five hundred fifty-one" },
      { pt: "setecentos e setenta e um", he: "שבע מאות שבעים ואחת", en: "seven hundred seventy-one" },
      { pt: "quarenta e um", he: "ארבעים ואחת", en: "forty-one" },
    ]
  },
  {
    id: 174,
    level: 33,
    title: { he: "אקראי ד׳", en: "Random Mix D" },
    cards: [
      { pt: "novecentos e cinquenta e cinco", he: "תשע מאות חמישים וחמש", en: "nine hundred fifty-five" },
      { pt: "quatrocentos e sessenta e três", he: "ארבע מאות שישים ושלוש", en: "four hundred sixty-three" },
      { pt: "novecentos e quarenta e cinco", he: "תשע מאות ארבעים וחמש", en: "nine hundred forty-five" },
      { pt: "seiscentos e noventa e três", he: "שש מאות תשעים ושלוש", en: "six hundred ninety-three" },
      { pt: "seiscentos e quarenta e seis", he: "שש מאות ארבעים ושש", en: "six hundred forty-six" },
      { pt: "quinhentos e sessenta e oito", he: "חמש מאות שישים ושמונה", en: "five hundred sixty-eight" },
      { pt: "quatrocentos e quatro", he: "ארבע מאות וארבע", en: "four hundred four" },
      { pt: "seiscentos e vinte e quatro", he: "שש מאות עשרים וארבע", en: "six hundred twenty-four" },
      { pt: "duzentos e noventa e nove", he: "מאתיים תשעים ותשע", en: "two hundred ninety-nine" },
      { pt: "novecentos e oito", he: "תשע מאות ושמונה", en: "nine hundred eight" },
    ]
  },
  {
    id: 175,
    level: 33,
    title: { he: "אקראי ה׳", en: "Random Mix E" },
    cards: [
      { pt: "cento e vinte e cinco", he: "מאה עשרים וחמש", en: "one hundred twenty-five" },
      { pt: "novecentos e setenta e dois", he: "תשע מאות שבעים ושתיים", en: "nine hundred seventy-two" },
      { pt: "cento e dezoito", he: "מאה ושמונה עשרה", en: "one hundred eighteen" },
      { pt: "setecentos e vinte e quatro", he: "שבע מאות עשרים וארבע", en: "seven hundred twenty-four" },
      { pt: "oitenta e um", he: "שמונים ואחת", en: "eighty-one" },
      { pt: "novecentos e vinte e oito", he: "תשע מאות עשרים ושמונה", en: "nine hundred twenty-eight" },
      { pt: "trezentos e quarenta e sete", he: "שלוש מאות ארבעים ושבע", en: "three hundred forty-seven" },
      { pt: "cento e oito", he: "מאה ושמונה", en: "one hundred eight" },
      { pt: "oitocentos e noventa e cinco", he: "שמונה מאות תשעים וחמש", en: "eight hundred ninety-five" },
      { pt: "setecentos e setenta e quatro", he: "שבע מאות שבעים וארבע", en: "seven hundred seventy-four" },
    ]
  },
  {
    id: 176,
    level: 33,
    title: { he: "אקראי 1-50", en: "Random 1-50" },
    cards: [
      { pt: "um", he: "אחת", en: "one" },
      { pt: "quarenta e três", he: "ארבעים ושלוש", en: "forty-three" },
      { pt: "trinta e sete", he: "שלושים ושבע", en: "thirty-seven" },
      { pt: "vinte e dois", he: "עשרים ושתיים", en: "twenty-two" },
      { pt: "dezenove", he: "תשע עשרה", en: "nineteen" },
      { pt: "trinta e oito", he: "שלושים ושמונה", en: "thirty-eight" },
      { pt: "dezoito", he: "שמונה עשרה", en: "eighteen" },
      { pt: "sete", he: "שבע", en: "seven" },
      { pt: "quarenta e dois", he: "ארבעים ושתיים", en: "forty-two" },
      { pt: "quatorze", he: "ארבע עשרה", en: "fourteen" },
    ]
  },
  {
    id: 177,
    level: 33,
    title: { he: "אקראי 50-200", en: "Random 50-200" },
    cards: [
      { pt: "cento e trinta e três", he: "מאה שלושים ושלוש", en: "one hundred thirty-three" },
      { pt: "cento e oitenta e dois", he: "מאה שמונים ושתיים", en: "one hundred eighty-two" },
      { pt: "oitenta e três", he: "שמונים ושלוש", en: "eighty-three" },
      { pt: "cento e sessenta", he: "מאה שישים", en: "one hundred sixty" },
      { pt: "cinquenta e oito", he: "חמישים ושמונה", en: "fifty-eight" },
      { pt: "cento e quarenta e três", he: "מאה ארבעים ושלוש", en: "one hundred forty-three" },
      { pt: "oitenta e oito", he: "שמונים ושמונה", en: "eighty-eight" },
      { pt: "cento e oitenta e oito", he: "מאה שמונים ושמונה", en: "one hundred eighty-eight" },
      { pt: "sessenta e nove", he: "שישים ותשע", en: "sixty-nine" },
      { pt: "cento e noventa e três", he: "מאה תשעים ושלוש", en: "one hundred ninety-three" },
    ]
  },
  {
    id: 178,
    level: 33,
    title: { he: "אקראי 200-600", en: "Random 200-600" },
    cards: [
      { pt: "quatrocentos e oitenta e oito", he: "ארבע מאות שמונים ושמונה", en: "four hundred eighty-eight" },
      { pt: "quinhentos e quarenta e sete", he: "חמש מאות ארבעים ושבע", en: "five hundred forty-seven" },
      { pt: "trezentos e quarenta e três", he: "שלוש מאות ארבעים ושלוש", en: "three hundred forty-three" },
      { pt: "quinhentos e sessenta e três", he: "חמש מאות שישים ושלוש", en: "five hundred sixty-three" },
      { pt: "quatrocentos e sessenta e dois", he: "ארבע מאות שישים ושתיים", en: "four hundred sixty-two" },
      { pt: "duzentos e quarenta e nove", he: "מאתיים ארבעים ותשע", en: "two hundred forty-nine" },
      { pt: "quatrocentos e oitenta e nove", he: "ארבע מאות שמונים ותשע", en: "four hundred eighty-nine" },
      { pt: "quatrocentos e trinta e sete", he: "ארבע מאות שלושים ושבע", en: "four hundred thirty-seven" },
      { pt: "duzentos e oitenta e oito", he: "מאתיים שמונים ושמונה", en: "two hundred eighty-eight" },
      { pt: "duzentos e cinco", he: "מאתיים וחמש", en: "two hundred five" },
    ]
  },
  {
    id: 179,
    level: 33,
    title: { he: "אקראי 600-1000", en: "Random 600-1000" },
    cards: [
      { pt: "oitocentos e trinta", he: "שמונה מאות שלושים", en: "eight hundred thirty" },
      { pt: "setecentos e trinta e cinco", he: "שבע מאות שלושים וחמש", en: "seven hundred thirty-five" },
      { pt: "setecentos e quatorze", he: "שבע מאות וארבע עשרה", en: "seven hundred fourteen" },
      { pt: "novecentos e quarenta e oito", he: "תשע מאות ארבעים ושמונה", en: "nine hundred forty-eight" },
      { pt: "oitocentos e noventa e seis", he: "שמונה מאות תשעים ושש", en: "eight hundred ninety-six" },
      { pt: "oitocentos e dois", he: "שמונה מאות ושתיים", en: "eight hundred two" },
      { pt: "seiscentos e quarenta e sete", he: "שש מאות ארבעים ושבע", en: "six hundred forty-seven" },
      { pt: "setecentos e noventa e oito", he: "שבע מאות תשעים ושמונה", en: "seven hundred ninety-eight" },
      { pt: "seiscentos e noventa e quatro", he: "שש מאות תשעים וארבע", en: "six hundred ninety-four" },
      { pt: "oitocentos e cinquenta e um", he: "שמונה מאות חמישים ואחת", en: "eight hundred fifty-one" },
    ]
  },
  {
    id: 180,
    level: 33,
    title: { he: "אקראי ו׳", en: "Random Mix F" },
    cards: [
      { pt: "oitocentos e vinte e três", he: "שמונה מאות עשרים ושלוש", en: "eight hundred twenty-three" },
      { pt: "setenta e nove", he: "שבעים ותשע", en: "seventy-nine" },
      { pt: "quinhentos e noventa e sete", he: "חמש מאות תשעים ושבע", en: "five hundred ninety-seven" },
      { pt: "quatrocentos e quarenta e um", he: "ארבע מאות ארבעים ואחת", en: "four hundred forty-one" },
      { pt: "novecentos e setenta e oito", he: "תשע מאות שבעים ושמונה", en: "nine hundred seventy-eight" },
      { pt: "seiscentos e vinte e dois", he: "שש מאות עשרים ושתיים", en: "six hundred twenty-two" },
      { pt: "trezentos e sessenta e dois", he: "שלוש מאות שישים ושתיים", en: "three hundred sixty-two" },
      { pt: "trezentos e quarenta e oito", he: "שלוש מאות ארבעים ושמונה", en: "three hundred forty-eight" },
      { pt: "duzentos e dezenove", he: "מאתיים ותשע עשרה", en: "two hundred nineteen" },
      { pt: "cento e quatorze", he: "מאה וארבע עשרה", en: "one hundred fourteen" },
    ]
  },
  {
    id: 181,
    level: 33,
    title: { he: "אקראי ז׳", en: "Random Mix G" },
    cards: [
      { pt: "duzentos e quatro", he: "מאתיים וארבע", en: "two hundred four" },
      { pt: "cento e cinquenta", he: "מאה חמישים", en: "one hundred fifty" },
      { pt: "seiscentos e vinte e três", he: "שש מאות עשרים ושלוש", en: "six hundred twenty-three" },
      { pt: "novecentos e vinte e nove", he: "תשע מאות עשרים ותשע", en: "nine hundred twenty-nine" },
      { pt: "seiscentos e cinquenta e cinco", he: "שש מאות חמישים וחמש", en: "six hundred fifty-five" },
      { pt: "quarenta e seis", he: "ארבעים ושש", en: "forty-six" },
      { pt: "nove", he: "תשע", en: "nine" },
      { pt: "quinhentos e trinta e um", he: "חמש מאות שלושים ואחת", en: "five hundred thirty-one" },
      { pt: "seiscentos e cinquenta e nove", he: "שש מאות חמישים ותשע", en: "six hundred fifty-nine" },
      { pt: "novecentos e oitenta e quatro", he: "תשע מאות שמונים וארבע", en: "nine hundred eighty-four" },
    ]
  },
  {
    id: 182,
    level: 33,
    title: { he: "אקראי ח׳", en: "Random Mix H" },
    cards: [
      { pt: "trezentos e dez", he: "שלוש מאות ועשר", en: "three hundred ten" },
      { pt: "setecentos e trinta e três", he: "שבע מאות שלושים ושלוש", en: "seven hundred thirty-three" },
      { pt: "trezentos e doze", he: "שלוש מאות ושתים עשרה", en: "three hundred twelve" },
      { pt: "novecentos e trinta e um", he: "תשע מאות שלושים ואחת", en: "nine hundred thirty-one" },
      { pt: "quinze", he: "חמש עשרה", en: "fifteen" },
      { pt: "duzentos e três", he: "מאתיים ושלוש", en: "two hundred three" },
      { pt: "setecentos e oitenta e nove", he: "שבע מאות שמונים ותשע", en: "seven hundred eighty-nine" },
      { pt: "cento e quarenta e oito", he: "מאה ארבעים ושמונה", en: "one hundred forty-eight" },
      { pt: "novecentos e quatro", he: "תשע מאות וארבע", en: "nine hundred four" },
      { pt: "setecentos e vinte e oito", he: "שבע מאות עשרים ושמונה", en: "seven hundred twenty-eight" },
    ]
  }
];

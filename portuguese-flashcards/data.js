// ===================================================================
// Portuguese (Brazilian) Learning Content
// Structure: LEVELS (groups of lessons, increasing difficulty)
//            LESSONS (each has 10 cards: pt / he / en)
// To add more content later: add new card objects to a lesson's
// `cards` array (keep ~10 per lesson), or add a whole new lesson
// object and reference its id inside a level's `lessons` array.
// ===================================================================

const LEVELS = [
  {
    id: 1,
    title: { he: "יסודות", en: "Basics" },
    lessons: [1, 2, 3, 4, 5]
  },
  {
    id: 2,
    title: { he: "חיי היומיום", en: "Daily Life" },
    lessons: [6, 7, 8, 9, 10]
  },
  {
    id: 3,
    title: { he: "פעלים ותיאורים", en: "Verbs & Descriptions" },
    lessons: [11, 12, 13, 14, 15]
  },
  {
    id: 4,
    title: { he: "שיחה", en: "Conversation" },
    lessons: [16, 17, 18, 19, 20]
  },
  {
    id: 5,
    title: { he: "מתקדם", en: "Advanced" },
    lessons: [21, 22, 23, 24, 25]
  },
  {
    id: 6,
    title: { he: "הטיית פעלים בהווה", en: "Present Tense Conjugations" },
    lessons: [26, 27, 28, 29, 30]
  },
  {
    id: 7,
    title: { he: "הטיית פעלים בהווה 2", en: "Present Tense Conjugations 2" },
    lessons: [31, 32, 33, 34, 35]
  },
  {
    id: 8,
    title: { he: "הטיית פעלים בעבר", en: "Past Tense Conjugations" },
    lessons: [36, 37, 38, 39, 40]
  },
  {
    id: 9,
    title: { he: "הטיית פעלים בעבר 2", en: "Past Tense Conjugations 2" },
    lessons: [41, 42, 43, 44, 45]
  },
  {
    id: 10,
    title: { he: "עתיד ואוצר מילים נוסף", en: "Future Tense & More Vocabulary" },
    lessons: [46, 47, 48, 49, 50]
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
    level: 1,
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
    level: 1,
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
    level: 5,
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
  }
];

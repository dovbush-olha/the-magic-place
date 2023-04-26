type Character = {
  name: string;
  portrait: string;
  description: string;
  interestingFact: string;
};

const OTHER_EN: Array<Character> = [
  {
    name: 'Dudley Dursley',
    portrait: '',
    description:
      'Was the Muggle son of Vernon and Petunia Dursley and cousin of Harry Potter. He was obese and insolent as a result of his parents spoiling him throughout his childhood, although he became muscular in his teens.',
    interestingFact:
      'After the Second Wizarding War, he married a woman and had two children. He also remained in contact with Harry, as did his wife and children.',
  },
  {
    name: 'Petunia Dursley',
    portrait: '',
    description:
      'Was an English Muggle woman, the elder daughter of Mr and Mrs Evans and the older sister of the Muggle-born witch Lily Potter.',
    interestingFact:
      'During her childhood, she became resentful of her sister for being a witch, broke off contact with her sister and refused to have any contact with the wizarding world.',
  },
  {
    name: 'Vernon Dursley',
    portrait: '',
    description:
      'Was an English Muggle, husband of Petunia Evans, father of Dudley Dursley and uncle by marriage of Harry Potter.',
    interestingFact:
      'Dursley is a town in Gloucestershire, England. J. K. Rowling has commented that she visited the place as a child and hated it, which likely affected her choice of surname for the awful family. Rowling chose the name because it sounded "dull and forbidding".',
  },
  {
    name: 'Argus Filch',
    portrait: '',
    description: 'Squib and the caretaker of Hogwarts School of Witchcraft and Wizardry since around 1973.',
    interestingFact:
      'Filch usually wandered around the school corridors with his cat Mrs Norris, trying to catch students breaking the school rules and complaining about Peeves the Poltergeist.',
  },
  {
    name: 'Madam Poppy Pomfrey',
    portrait: '',
    description: 'A British or Irish witch and the matron at Hogwarts School of Witchcraft and Wizardry.',
    interestingFact:
      'Being the Hogwarts Matron, Madam Pomfrey was a talented Healer who was very well-versed in medical magic. She had a very high understanding of medical charms and could mend broken bones in seconds.',
  },
  {
    name: 'Olympe Maxime',
    portrait: '',
    description: 'A French witch, The headmistress of Beauxbatons Academy of Magic.',
    interestingFact:
      'Maxime\'s huge size was due to her half-giant background. Initially, she fiercely denied this, claiming that she merely had "big bones".',
  },
  {
    name: 'Madam Irma Pince',
    portrait: '',
    description: 'A witch and librarian at the library of Hogwarts School of Witchcraft and Wizardry.',
    interestingFact:
      "She was highly possessive and protective of the school's books and was deemed highly unpleasant by most of the student body.",
  },
  {
    name: 'Grawp',
    portrait: '',
    description:
      'He was the son of Fridwulfa and an unnamed giant and, therefore, the maternal half-brother of Rubeus Hagrid',
    interestingFact:
      'Was known for his small stature and short height; although he stood at sixteen feet tall, this was considered short by giant standards.',
  },
  {
    name: 'Griphook',
    portrait: '',
    description: 'A goblin who worked at Gringotts Wizarding Bank in Diagon Alley.',
    interestingFact: "He assisted Harry Potter in his break-in of Gringotts in order to obtain Helga Hufflepuff's Cup.",
  },
  {
    name: 'Mundungus Fletcher',
    portrait: '',
    description:
      'A half-blood wizard who was involved in many illegal activities, having a notoriously disreputable reputation as a petty criminal.',
    interestingFact:
      'However, despite his illicit dealings, he was one of the original members of the Order of the Phoenix.',
  },
  {
    name: 'Nymphadora Tonks',
    portrait: '',
    description: 'More commonly known as Tonks, was a British half-blood witch and a Metamorphmagus.',
    interestingFact:
      'In the story, Tonks first appeared in the fifth book. She arrives as part of a group of wizards to transport Harry Potter from Little Whinging to the London headquarters of the Order of the Phoenix.',
  },
  {
    name: 'Xenophilius Lovegood',
    portrait: '',
    description:
      'A wizard who worked as the editor of The Quibbler magazine, the husband of Pandora, and the father of Luna Lovegood.',
    interestingFact:
      'His wife died when their only child was nine years old, and he raised his daughter by himself. He believed in the existence of the Deathly Hallows and supported Harry in The Quibbler when few others would.',
  },
  {
    name: 'Bellatrix Lestrange',
    portrait: '',
    description:
      'A British Pure-blood witch, the eldest daughter of Cygnus and Druella Black, cousin of Regulus and Sirius Black, and the elder sister of Andromeda Tonks and Narcissa Malfoy.',
    interestingFact:
      'Before her death, Bellatrix secretly gave birth to an illegitimate daughter named Delphini, whom she conceived with her beloved master, Lord Voldemort.',
  },
  {
    name: 'Sirius Black',
    portrait: '',
    description:
      'An English pure-blood wizard, the older son of Orion and Walburga Black, the older brother of Regulus Black, and godfather of Harry Potter.',
    interestingFact:
      'Sirius was sent to Azkaban and, after twelve years, became the only known person to escape the prison unassisted. He did it by transforming into his Animagus form of a massive black dog often confused with a "Grim."',
  },
  {
    name: 'Arthur Weasley',
    portrait: '',
    description:
      'An English pure-blood wizard in the employ of the Ministry of Magic, as well as a member of the second Order of the Phoenix.',
    interestingFact:
      'After the war, he saw his family expand even further with the addition of twelve grandchildren, through the marriage of many of his surviving children and eventually named Head of Department.',
  },
  {
    name: 'Lucius Malfoy',
    portrait: '',
    description:
      'A British pure-blood wizard, the son of Abraxas Malfoy, husband of Narcissa Black, father of Draco Malfoy.',
    interestingFact:
      "Because he and his family defected from the Death Eaters they were pardoned for their crimes after Voldemort's final defeat and did not serve a stint in Azkaban.",
  },
  {
    name: 'Viktor Krum',
    portrait: '',
    description:
      'Was a Bulgarian wizard. He attended the Durmstrang Institute, and was also the Seeker for the Bulgarian National Quidditch team at the age of eighteen.',
    interestingFact:
      'He retired from Quidditch after the Bulgarian defeat in the final of the 2002 World Cup, but came out of retirement to compete in the 2014 World Cup, out of a desire "to win the World Cup before I die".',
  },
  {
    name: 'Peter Pettigrew',
    portrait: '',
    description:
      "The fourth creator of the Marauder's Map, one of the old school friends of James Potter, Sirius Black and Remus Lupin, a servant of Voldemort.",
    interestingFact:
      'The silver hand Lord Voldemort had given Pettigrew interpreted his hesitation strangle Harry Potter as weakness and/or disloyalty, and strangled him to death, saving Harry and finally finding redemption for his treason.',
  },
];

const OTHER_UA: Array<Character> = [
  {
    name: 'Дадлі Дурслі',
    portrait: '',
    description: 'Син Петунії і Вернона Дурслі, двоюрідний брат Гаррі Поттера, старший за нього на місяць.',
    interestingFact:
      'Після Другої чарівної війни він одружився і мав двох дітей. Він також підтримував зв’язок із Гаррі, як і його дружина та діти.',
  },
  {
    name: 'Петунія Дурслі',
    portrait: '',
    description: 'Дружина Вернона Дурслі і мати Дадлі, а також - старша сестра Лілі Поттер, матері Гаррі.',
    interestingFact:
      'У дитинстві вона образилася на свою сестру за те, що вона відьма, розірвала з сестрою контакт і відмовилася від будь-яких контактів зі світом чарівників.',
  },
  {
    name: 'Вернон Дурслі',
    portrait: '',
    description: 'Був маглом, чоловіком Петунії Еванс, батьком Дадлі Дурслі та дядьком Гаррі Поттера.',
    interestingFact:
      'Дурслі — місто в графстві Глостершир, Англія. Дж. К. Роулінг прокоментувала, що відвідувала це місце в дитинстві і ненавиділа його, що, ймовірно, вплинуло на її вибір прізвища для цієї жахливої родини. Роулінг вибрала таку назву, тому що вона звучала «нудно й непристойно».',
  },
  {
    name: 'Арґуч Філч',
    portrait: '',
    description: 'Сквиб та доглядач Хогвартсу, школи магії і чаклунства, з приблизно 1973 року.',
    interestingFact:
      'Філч зазвичай блукав по коридорах школи зі своєю кішкою місіс Норріс, намагаючись впіймати учнів за порушення шкільних правил та скаржився на Півза - полтергейста.',
  },
  {
    name: 'Мадам Поппі Пофрі',
    portrait: '',
    description: 'Британська або ірландська відьма та медсестра у Хогвартській школі магії і чаклунства.',
    interestingFact:
      'Мадам Помфрей була талановитою Відновлювачкою, яка добре володіла медичною магією. Вона мала високе розуміння медичних чарів і могла зцілювати переломи кісток за кілька секунд.',
  },
  {
    name: 'Олімпія Максім',
    portrait: '',
    description: 'Французька чарівниця, директор Академії магії Бобатон.',
    interestingFact:
      'Мадам Максім приховує факт, що серед її предків були велетні, стверджуючи, що «просто широка в кістки». І, загалом-то, вона чинить правильно. У магічній спільноті велетні користуються поганою славою.',
  },
  {
    name: 'Ірма Пінс',
    portrait: '',
    description: 'Завідувачка бібліотекою в школі чаклунства Гоґвортс.',
    interestingFact:
      'Сувора жінка «бальзаківського віку», «схожа на голодного стервятника». Дуже трепетно ставиться до книг, як тільки може, оберігає їх від студентів.',
  },
  {
    name: 'Ґроп',
    portrait: '',
    description: 'Велетень, єдиноутробний брат Гегрід а (велетень Фрідвульфа народила їх від різних батьків). Сирота.',
    interestingFact:
      'Був відомий своїм маленьким зростом; хоча він мав шістнадцять футів у висоту, це вважалося низьким за вимірами велетнів.',
  },
  {
    name: 'Ґрипхук',
    portrait: '',
    description: 'Ґоблін, який працював в банку Ґрінґотс.',
    interestingFact:
      'Він допомагав Гаррі Поттеру під час його вторгнення в Грінготтс з метою отримання кубка Гелги Гаффлпафф.',
  },
  {
    name: 'Манданґус Флетчер',
    portrait: '',
    description: 'Член Ордену Фенікса. Знає всіх шахраїв, оскільки «сам з їх числа».',
    interestingFact:
      'Найбільш безвідповідальний член Ордена, хоча служить вірно. Можливо, причина в тому, що свого часу Албус Дамблдор — глава Ордена — «врятував його від великої неприємності». Так, в усякому разі, каже Сіріус Блек.',
  },
  {
    name: 'Німфадора Тонкс',
    portrait: '',
    description: 'Метаморфомаг, аврор, член Ордену Фенікса. Дружина Ремуса Люпина, мати Тедді.',
    interestingFact:
      "В оповіданні Тонкс вперше з'явилася в п'ятій книзі. Вона прибуває в складі групи чарівників, щоб переправити Гаррі Поттера з Літтл Вінґіну в Лондонську штаб-квартиру Ордену Фенікса на пл. Гримо, 12.",
  },
  {
    name: 'Ксенофілій Лавґуд',
    portrait: '',
    description: 'Батько Луни Лавгуд. Вдівець. Видавець журналу «Базікало».',
    interestingFact:
      'Його дружина померла, коли їхній дитині було дев\'яти років, і він самотужки виховував дочку. Він вірив в існування Смертельних Реліквій і підтримував Гаррі в газеті "Базікалло", коли мало хто інший це робив.',
  },
  {
    name: 'Белатриса Лестранж',
    portrait: '',
    description:
      'Белатриса походить від роду чистокровних чаклунів — Блеків. Народилась у 1951 році першою дитиною Друелли та Сігнуса Блеків. Має двох молодших сестер — Андромеду (1953 р.н.) та Нарцису (1955 р.н.); кузена Сіріуса та Реґулуса Блеків.',
    interestingFact:
      "Згідно зі своїми поглядами та потребами стародавнього роду, Белатриса одружилася з чистокровним чаклуном Родольфусом Лестранжем, хоча насправді все життя любила лише Волдеморта. У п'єсі «Прокляте дитя» Белатриса має дочку Делфі від Волдеморта.",
  },
  {
    name: 'Сіріус Блек',
    portrait: '',
    description: 'Найкращий друг Джеймса Поттера, хрещений батько Гаррі Поттера, член Ордену Фенікса.',
    interestingFact:
      "Сіріус був відправлений в Азкабан і через дванадцять років став єдиною відомою людиною, яка втекла з в'язниці без сторонньої допомоги. Він зробив це, перетворившись у свою форму Анімага — масивного чорного пса, якого часто плутають із «Грімом».",
  },
  {
    name: 'Артур Візлі',
    portrait: '',
    description:
      'Глава родини Візлі. Працює в Міністерстві Магії, у відділі з обмеження застосування чарів до винаходів маґлів. Обожнює маґлів.',
    interestingFact:
      'Після війни його сім’я ще більше розширилася завдяки народженню дванадцяти онуків, і врешті-решт призначений начальником відділу.',
  },
  {
    name: 'Луціус Мелфой',
    portrait: '',
    description: 'Смертжер, чоловік Нарциси Мелфой і батько Драко Мелфоя.',
    interestingFact:
      'Оскільки він і його родина втекли від смертежерів, вони були помилувані за свої злочини після остаточної поразки Волдеморта і не були в Азкабані.',
  },
  {
    name: 'Віктор Крум',
    portrait: '',
    description:
      'Народився у квітні-серпні 1976 року у Болгарії. Студент школи магії та чар Дурмстренґ, на чотири роки старший за Гаррі Поттера, «Чемпіон Дурмстренґу», обраний Келихом вогню для участі в Тричаклунському Турнірі, ловець болгарської збірної з квідичу.',
    interestingFact:
      'У 2014 році (коли йому було 38 років) Віктор вирішує повернутись у спорт. Він бере участь у чемпіонаті світу у Патагонській пустелі. Крум пояснює своє повернення тим, що дуже хоче, хоча б раз у житті, отримати Кубок світу.',
  },
  {
    name: 'Пітер Петіґру',
    portrait: '',
    description:
      'Четвертий творець Карти Мародерів, один з колишніх шкільних друзів Джеймса Поттера, Сіріуса Блека і Римуса Люпина, слуга Волдеморта.',
    interestingFact:
      'Срібна рука, яку Лорд Волдеморт дав Петіґру, витлумачила його вагання задушити Гаррі Поттера, як слабкість та невірність і задушила його до смерті, врятувавши Гаррі та нарешті знайшовши спокуту за його зраду.',
  },
];

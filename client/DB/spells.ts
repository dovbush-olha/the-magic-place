type Spell = {
  name: string;
  book: string;
  description: string;
  interestingFact: string;
};

const SPELLS_EN: Array<Spell> = [
  {
    name: 'Wingardium Leviosa',
    book: "Harry Potter and Philosopher's Stone",
    description: 'A charm that causes objects to levitate and fly through the air.',
    interestingFact:
      "In the first book and film, Harry Potter and the Philosopher's Stone, Hermione Granger corrects Ron Weasley's pronunciation of the incantation, demonstrating her expertise in spell-casting and setting up her character as a skilled witch.",
  },
  {
    name: 'Alohomora',
    book: "Harry Potter and Philosopher's Stone",
    description: 'This charm is used to unlock and open locked doors, windows, and objects.',
    interestingFact:
      "The incantation is derived from the Greek words 'alo' meaning 'to remove' and 'homoron' meaning 'barrier.'",
  },
  {
    name: 'Locomotor Mortis',
    book: "Harry Potter and Philosopher's Stone",
    description: "A spell that binds the victim's legs and thereby prevents her from walking.",
    interestingFact:
      'Little did Harry know that Ron and Hermione had been secretly practicing the Leg-Locker curse..."Now, don\'t forget, it\'s Locomotor Mortis", Hermione muttered.',
  },
  {
    name: 'Petrificus Totalus',
    book: "Harry Potter and Philosopher's Stone",
    description: 'Also known as the full-body-bind spell, Petrificus Totalus renders its victim totally paralysed.',
    interestingFact:
      '"Petrificus Totalus!" she cried, pointing wand at Neville. Neville\'s arms snapped to his sides. His legs sprang together. His whole body rigid, he swayed where he stood and then fell flat on his face, stiff as a board.',
  },
  {
    name: 'Incendio',
    book: "Harry Potter and Philosopher's Stone",
    description: 'It is a charm that can be used to conjure a jet of flame, thereby setting things alight',
    interestingFact: "Arthur Weasley uses this spell at the Dursleys' house in 1994.",
  },
  {
    name: 'Expelliarmus',
    book: 'Harry Potter and the Chamber of Secrets',
    description:
      "It is the Disarming spell; it knocks the victim's weapon (usually a wand) out of his/her hands. It can also be used to knock other items out of the target's hands, but we seldom see this use. When it is performed with more power, one can blast the opponent off their feet.",
    interestingFact:
      'We see this spell first used by Professor Snape in the Dueling Club; Snape casts it on Professor Lockhart, disarming him and throwing him to the end of the platform on which they are demonstrating.',
  },
  {
    name: 'Rictusempra',
    book: 'Harry Potter and the Chamber of Secrets',
    description: 'A spell used to cause the target to feel as though they are being tickled.',
    interestingFact:
      'Rictusempra is a spell that causes the target to feel as though they are being tickled. In the book, Harry uses the spell on Draco Malfoy during a duel in the second-floor corridor of Hogwarts, causing Malfoy to collapse in laughter.',
  },
  {
    name: 'Tarantallegra',
    book: 'Harry Potter and the Chamber of Secrets',
    description:
      "It is a charm that made a target's legs spasm wildly out of control, making it appear as though they were dancing. It worked on both living and inanimate targets, so long as it had legs.",
    interestingFact: 'Draco Malfoy using this spell on Harry Potter at the Duelling Club.',
  },
  {
    name: 'Serpensortia',
    book: 'Harry Potter and the Chamber of Secrets',
    description: 'It is a transfiguration spell that conjured a live snake from the end of the wand.',
    interestingFact:
      'This spell was utilised by Draco Malfoy during the first Duelling Club meeting in 1992 at the advice of Snape, summoning forth a black serpent in an attempt to attack Harry Potter.',
  },
  {
    name: 'Aparecium',
    book: 'Harry Potter and the Chamber of Secrets',
    description:
      'A charm that revealed secret messages written in invisible ink, or any other hidden markings written using other means such as Concealing charms.',
    interestingFact: '"Hermione tapped the diary three times and said, "Aparecium!" Nothing happened."',
  },
  {
    name: 'Obliviate',
    book: 'Harry Potter and the Chamber of Secrets',
    description: "A spell used to erase memories from an individual's mind.",
    interestingFact:
      'This spell was used by Gilderoy Lockhart against Ron, but as a result, he erased his own memories because the wand he stole from Ron was malfunctioning and Spellotaped.',
  },
  {
    name: 'Lumos',
    book: 'Harry Potter and the Chamber of Secrets',
    description:
      "This charm illuminates the tip of the caster's wand, providing light in dark or dimly-lit environments.",
    interestingFact:
      'In the films, the Lumos spell was achieved by having the actor tap the tip of their wand on a special light-sensitive pad, which would then trigger a light to turn on inside the wand prop.',
  },
  {
    name: 'Nox',
    book: 'Harry Potter and the Prisoner of Azkaban',
    description: 'A charm that extinguishes light, and is the opposite of the Lumos charm.',
    interestingFact:
      'In the movies, the spell is used more frequently and is often accompanied by a dramatic gesture, where the caster flicks their wand to put out the light. This gesture was actually created by actor Daniel Radcliffe, who played Harry Potter in the films, and was inspired by his experience working with lighting technicians on set.',
  },
  {
    name: 'Riddikulus',
    book: 'Harry Potter and the Prisoner of Azkaban',
    description:
      'A spell that is used to repel a Boggart by making it take on a humorous appearance, thereby robbing it of its power.',
    interestingFact:
      'Riddikulus is the only known spell that is effective against Boggarts, and is used by many witches and wizards as a way to deal with their fear of the creatures.',
  },
  {
    name: 'Expecto Patronum',
    book: 'Harry Potter and the Prisoner of Azkaban',
    description:
      'This charm is used to conjure a Patronus, a powerful positive energy force that can protect against Dementors and other dark creatures.',
    interestingFact:
      "The form of a person's Patronus can reveal a lot about their personality, as it is said to be a physical manifestation of their innermost positive feelings and emotions.",
  },
  {
    name: 'Confundus',
    book: 'Harry Potter and the Prisoner of Azkaban',
    description: 'Causes the target to become confused and disoriented.',
    interestingFact:
      "This spell was used by Harry Potter to avoid telling all secrets by Marietta Edgecombe in 'Harry Potter and the Order of Phoenix'.",
  },
  {
    name: 'Mobilicorpus',
    book: 'Harry Potter and the Prisoner of Azkaban',
    description:
      'It is the incantation of a charm which was used to move bodies by suspending them a few inches above the air.This spell was able to move people who find themselves unable to walk, regardless of whether or not they are conscious.',
    interestingFact:
      'Remus Lupin\'s use on fellow Professor Severus Snape."As though invisible strings were tied to Snape\'s wrists, neck and knees he was pulled into a standing position, head lolling unpleasantly, like a grotesque puppet."',
  },
  {
    name: 'Impervius',
    book: 'Harry Potter and the Prisoner of Azkaban',
    description:
      'It is a charm that made an object repel water and mist.This could be used to allow someone better sight in bad weather conditions by preventing the rain from hitting their faces.',
    interestingFact:
      "Hermione used this spell to make Harry Potter's glasses repel water during a rainy Quidditch match.",
  },
  {
    name: 'Accio',
    book: 'Harry Potter and the Goblet of Fire',
    description: 'This charm summons an object to the caster, potentially over a significant distance.',
    interestingFact:
      'In the films, the sound effect for the Accio spell was created by recording a high-pitched wine glass being rubbed by a wet finger.',
  },
  {
    name: 'Sonorous',
    book: 'Harry Potter and the Goblet of Fire',
    description: 'It is a charm that emitted a magnified roar from the tip of the wand.',
    interestingFact: 'This noise disrupted all in its path, and could even be used to harm opponents.',
  },
  {
    name: 'Morsmordre',
    book: 'Harry Potter and the Goblet of Fire',
    description:
      'It is the incantation of a dark charm used to conjure the image of the Dark Mark, the skull-and-serpent sign used by Lord Voldemort and his Death Eaters, in the sky.',
    interestingFact:
      'The Death Eaters cast their mark over the homes of anyone they killed as their calling card. It was said to have been created by Lord Voldemort himself.',
  },
  {
    name: 'Prior Incantato',
    book: 'Harry Potter and the Goblet of Fire',
    description: 'It is a charm that forced a wand to show an "echo" of the last spell it had performed.',
    interestingFact:
      'The Reverse Spell effect, otherwise known as Priori Incantatem, was an especially rare manifestation of this spell that occurred when two wands with the same core (that was, taken from the same animal) attempted to duel each other.',
  },
  {
    name: 'Reparo',
    book: 'Harry Potter and the Goblet of Fire',
    description: 'It is a charm that could be used to seamlessly repair a broken object and worked on most materials.',
    interestingFact:
      'The Mending Charm was effective at repairing most materials. However, damage caused by certain rare, powerful curses such as Fiendfyre were impossible to undo.',
  },
  {
    name: 'Densaugeo',
    book: 'Harry Potter and the Goblet of Fire',
    description: 'It is the incantation of a hex which caused the front teeth to elongate at an alarming rate.',
    interestingFact:
      "Hermione Granger was hit by this hex from Draco Malfoy's wand. Draco and Harry Potter had begun fighting in the corridor, which eventually led to a duel, but the spells they cast at each other missed and hit Hermione and Gregory Goyle instead.",
  },
  {
    name: 'Avada Kedavra',
    book: 'Harry Potter and the Goblet of Fire',
    description:
      'This unforgivable curse instantly kills the target, and is one of the three forbidden curses in the wizarding world.',
    interestingFact:
      "The spell's name is derived from the Aramaic phrase 'abracadabra', which roughly translates to 'let the thing be destroyed'.",
  },
  {
    name: 'Crucio',
    book: 'Harry Potter and the Goblet of Fire',
    description:
      'One of the Unforgivable Curses, this spell causes intense pain to the victim. It is often used by dark wizards to torture their enemies.',
    interestingFact:
      'The Cruciatus Curse is said to be one of the hardest curses to cast properly, as it requires the caster to truly enjoy causing pain and suffering.',
  },
  {
    name: 'Imperio',
    book: 'Harry Potter and the Goblet of Fire',
    description:
      'One of the Unforgivable Curses, this spell allows the caster to control the actions of the victim. It is often used by dark wizards to manipulate others to do their bidding.',
    interestingFact:
      'The effects of the Imperius Curse can be resisted with a strong will and mental resistance. However, it is very difficult to cast off the curse once it has taken hold.',
  },
  {
    name: 'Engorgio',
    book: 'Harry Potter and the Goblet of Fire',
    description: 'Also known as Growing Charm, is a charm that caused the target to swell immensely.',
    interestingFact:
      'If the caster attempted to engorge the target beyond a certain point, it would violently explode. Although this spell was safe to use on animals, its use was not recommended until the counter-charm had been perfected.',
  },
  {
    name: 'Reducto',
    book: 'Harry Potter and the Goblet of Fire',
    description: 'Is a curse that blasted solid objects to pieces.',
    interestingFact:
      "This was one of the spells that Harry Potter taught Dumbledore's Army,having previously used the spell during the Triwizard Tournament.",
  },
  {
    name: 'Locomotor',
    book: 'Harry Potter and the Order of the Phoenix',
    description:
      'Enabled a witch or wizard to levitate a target a few inches off of the ground and then move said object in any given direction.',
    interestingFact:
      'Proficient casters could also move more than one object at a time, and use it for such trivial tasks as setting the table for a meal in one fell swoop.',
  },
  {
    name: 'Evanesco',
    book: 'Harry Potter and the Order of the Phoenix',
    description:
      'It is a Transfiguration spell used to vanish both animate and inanimate objects "into non-being, which is to say, everything".',
    interestingFact:
      'It became more difficult with the complexity of the animal to be vanished; for instance, a snail, as an invertebrate, was rather simple, whereas the mouse, as a mammal, presented a great challenge.',
  },
  {
    name: 'Legilimens',
    book: 'Harry Potter and the Order of the Phoenix',
    description:
      'It is a charm that allowed the caster to perform Legilimency; in other words, to delve into the mind of the victim, permitting the caster to see memories, emotions and thoughts.',
    interestingFact:
      'Skilled Legilimens (such as Tom Riddle) was able to perform Legilimency without using the incantation or a wand. Highly skilled Legilimens were able to control their victims and create realistic visions.',
  },
  {
    name: 'Protego',
    book: 'Harry Potter and the Order of the Phoenix',
    description: 'A spell used to create a magical shield that protects the caster from spells and physical attacks.',
    interestingFact:
      'This spell was used by Hermione to protect herself and Harry from Death Eater attacks during their search for Horcruxes.',
  },
  {
    name: 'Colloportus',
    book: 'Harry Potter and the Order of the Phoenix',
    description: 'Magically locks a door.',
    interestingFact: 'This spell is the reverse of Alohomora.',
  },
  {
    name: 'Episkey',
    book: 'Harry Potter and the Half-Blood Prince',
    description: 'Heals minor injuries.',
    interestingFact:
      "This spell was used by Tonks to fix Harry Potter's broken nose in 'Harry Potter and the Half-Blood Prince'.",
  },
  {
    name: 'Levicorpus',
    book: 'Harry Potter and the Half-Blood Prince',
    description:
      'It is a jinx, which was intended to be cast nonverbally but the incantation could also be spoken aloud, caused the victim to be hoisted into the air by their ankle;',
    interestingFact:
      'Harry uses the spell for the first time on Ronald Weasley. This jinx was invented by Severus Snape and recorded under his pseudonym the "Half-Blood Prince" during his time as a student ',
  },
  {
    name: 'Sectumsempra',
    book: 'Harry Potter and the Half-Blood Prince',
    description: "A dark and powerful curse that causes deep, bloody gashes to appear on the target's body.",
    interestingFact:
      'Sectumsempra was created by Severus Snape while he was a student at Hogwarts, and was used by Harry Potter against Draco Malfoy during a duel in their sixth year.',
  },
  {
    name: 'Aguamenti',
    book: 'Harry Potter and the Half-Blood Prince',
    description: "It is a charm that conjured a jet of clean, drinkable water from the tip of the caster's wand.",
    interestingFact:
      "Depending on the caster's concentration and intentions, this charm can be anything from a simple jet of water to a wave. Hagrid and Harry Potter using the spell to extinguish's Hagrid's burning hut.",
  },
  {
    name: 'Expulso',
    book: 'Harry Potter and the Deathly Hallows',
    description:
      'It is a curse used to produce immense explosions, blasting the target apart with a burst of blue light; it had enough force to throw people into walls.',
    interestingFact: 'Latin expulso, meaning "expel".',
  },
  {
    name: 'Stupefy',
    book: 'Harry Potter and the Deathly Hallows',
    description: 'A spell used to render the target unconscious.',
    interestingFact:
      "This spell was used by Harry Potter to defeat Voldemort's snake Nagini during the Battle of Hogwarts.",
  },
  {
    name: 'Homenum Revelio',
    book: 'Harry Potter and the Deathly Hallows',
    description: 'It is a charm which revealed the presence of other humans in the surrounding environment.',
    interestingFact:
      'This spell created no flash of light when cast. When this spell was cast on a person it created an odd sensation. According to Harry Potter, it felt like "something was swooping low over him, immersing his body in its shadow".',
  },
  {
    name: 'Obscuro',
    book: 'Harry Potter and the Deathly Hallows',
    description:
      'It is the incantation of a charm used to conjure a blindfold over the eyes of the victim, therefore obstructing their view of their surroundings.',
    interestingFact:
      'In October of 1997, Hermione Granger used this spell to prevent the Portrait of Phineas Nigellus Black from viewing the location of her, Ron Weasley and Harry Potter in the Forest of Dean.',
  },
  {
    name: 'Geminio',
    book: 'Harry Potter and the Deathly Hallows',
    description: 'It is a charm used to duplicate an object, creating an exact replica of that object.',
    interestingFact:
      'This spell was used by Hermione, creating an exact duplicate of the locket they had stolen from Dolores Umbridge, and giving the replica to the Inquisitor, so that she would not suspect that the locket was missing from her person.',
  },
];

const SPELLS_UKR: Array<Spell> = [
  {
    name: 'Вінґардіум Левіоза',
    book: 'Гаррі Поттер і Філософський камінь',
    description: "Ці чари дозволяють об'єктам підніматися в повітря та летіти.",
    interestingFact:
      'У першій книзі та фільмі "Гаррі Поттер і Філософський Камінь" Герміона Грейнджер виправляє вимову Рона Візлі у заклинанні, демонструючи свої знання в чаклунстві.',
  },
  {
    name: 'Алогомора',
    book: 'Гаррі Поттер і Філософський Камінь',
    description:
      "Це чаклунське заклинання використовується для розблокування та відчинення дверей, вікон та інших закритих об'єктів. Разом з тим воно не діє на зачаровані замки.",
    interestingFact:
      '"Назва заклинання сформувалось, імовірно, від латинської alo hoc mora — «я долаю перешкоду». Другий варіант походження — комбінація гавайського aloha («привіт/па-па») з латинським mora («перешкода»)."',
  },
  {
    name: 'Локомотор Мортіс',
    book: 'Гаррі Поттер і Філософський Камінь',
    description: 'Закляття, що змикає ноги жертви і тим самим заважає їй ходити.',
    interestingFact:
      '“Гаррі й не здогадувався, що Рон і Герміона таємно вчилися насилати закляття “ноги під замком” … й вони були готові заклясти Снейпа, тільки но він почне шкодити Гаррі. — Дивись, не забувай: Локомотор Мортіс! — пошепки казала Герміона Ронові”',
  },
  {
    name: 'Петрифікус Тоталус',
    book: 'Гаррі Поттер і Філософський Камінь',
    description: "Закляття-тілов'яз – повністю знерухомлює тіло зачарованого.",
    interestingFact:
      '“Вона спрямувала чарівну паличку на Невіла і вигукнула: — Петрифікус Тоталус! Невілові руки прикипіли йому до боків. Ноги стулилися докупи. Він захитався усім своїм закляклим тілом, а тоді впав, мов дошка, просто на обличчя.”',
  },
  {
    name: 'Інсендіо',
    book: 'Гаррі Поттер і Філософський Камінь',
    description: 'Закляття, що викликає вогонь, який вилітає з палички.',
    interestingFact:
      '“Герміона, вихопивши чарівну паличку, махнула нею, щось пробурмотівши, і спрямувала на рослину струмінь яскраво блакитного полум’я”.',
  },

  {
    name: 'Експеліармус',
    book: 'Гаррі Поттер і Таємна Кімната',
    description: 'Призначається для роззброєння суперника.',
    interestingFact:
      'Експеліармус вибиває паличку з рук суперника, а інколи й відкидає його самого. Перевага цього закляття в тому, що воно відноситься до заклять атакуючого плану й зустрічаючись з такими ж може їх відбивати.',
  },
  {
    name: 'Ріктусемпра',
    book: 'Гаррі Поттер і Таємна Кімната',
    description: 'Закляття, що насилає нестерпний лоскіт на зачаклованого.',
    interestingFact:
      'Ріктусемпра — це заклинання, яке викликає відчуття лоскотання. У книзі Гаррі використовує заклинання Драко Мелфоя під час дуелі в коридорі на другому поверсі Гоґвортсу, змусивши Мелфоя впасти від сміху.',
  },
  {
    name: 'Тарантелеґра',
    book: 'Гаррі Поттер і Таємна Кімната',
    description:
      'Закляття, що змушує ноги зачарованого неконтрольовано смикатись, а це в свою чергу заважає контролювати решту рухів.',
    interestingFact:
      '“Мелфой скерував свою паличку на його коліна і прошипів: “Таранталеґра!”. Наступної миті Гарріні ноги почали безконтрольно смикатися, мовби він танцював чарльстон”.',
  },
  {
    name: 'Серпенсортія',
    book: 'Гаррі Поттер і Таємна Кімната',
    description:
      'Це закляття випускає змію з кінчика чарівної палички. При цьому слід враховувати, що чаклун, який не знає парселмови не зможе її цілком контролювати.',
    interestingFact: 'Використано Мелфоєм у другій книзі під час дуелі проти Гаррі Поттера.',
  },
  {
    name: 'Апареціум',
    book: 'Гаррі Поттер і Таємна Кімната',
    description: 'Це закляття, що виявляє невидиме чорнило й робить його видимим.',
    interestingFact: '“Герміона тричі вдарила щоденник паличкою і вимовила: — Апареціум!”',
  },
  {
    name: 'Забуттятус',
    book: 'Гаррі Поттер і Таємна Кімната',
    description: "Заклинання, яке використовують для видалення певних спогадів з пам'яті особи.",
    interestingFact:
      'Це заклинання використовував Гілдерой Локгарт проти Рона, але в результаті видалив свої власні спогади, оскільки паличка, яку він поцупив в Рона, була несправна, та обмотана чароскочем.',
  },
  {
    name: 'Люмос',
    book: 'Гаррі Поттер і Таємна Кімната',
    description:
      'Створює вузький промінь світла на кінчику палички. Його окрасою є те, що його можна поєднувати разом з іншими закляттями. Тобто люмос робить паличку своєрідним ліхтариком.',
    interestingFact:
      'У фільмах ефект Люмоса був досягнутий тим, що актор натискав кінчиком своєї палички на спеціальну подушку, яка активувала світло всередині реквізиту палички.',
  },

  {
    name: 'Нокс',
    book: "Гаррі Поттер і В'язень Азкабану",
    description: 'Ці чари гасять світло з палички, і є протилежним до закляття Люмос.',
    interestingFact:
      'у фільмах заклинання використовується частіше і часто супроводжується драматичним жестом, коли чаклун махає своєю палицею, щоб згасити світло. Цей жест насправді був створений актором Деніелом Редкліффом, який грав Гаррі Поттера у фільмах.',
  },
  {
    name: 'Ріддікулюс',
    book: "Гаррі Поттер і В'язень Азкабану",
    description:
      'Заклинання, яке використовується проти ховчиків. Воно змушує перетворюватися їх на смішну форму того, про що думає чарівник і тим самим відбирає в ховчика головну зброю – страх.',
    interestingFact:
      'Ріддікулюс є єдиним відомим заклинанням, що ефективне проти ховчиків. “Якусь мить усі ошелешено роззиралися, а тоді побачили срібно білу кулю, що висіла в повітрі перед Люпином. — Рідікулюс! — ліниво вимовив Люпин”',
  },
  {
    name: 'Експекто Патронум',
    book: "Гаррі Поттер і В'язень Азкабану",
    description:
      'Це заклинання використовується для виклику Патронуса - потужної позитивної енергетичної сили, яка може захистити від Дементорів та інших темних істот.',
    interestingFact:
      'Форма Патронуса людини може розкрити багато про їх особистість, оскільки вважається, що вона є фізичним проявом їх внутрішніх позитивних почуттів та емоцій.',
  },
  {
    name: 'Конфундус',
    book: "Гаррі Поттер і В'язень Азкабану",
    description: 'Закляття затуманює свідомість зачаклованого, спантеличує його.',
    interestingFact:
      '“Блек їх зачаклував, я зрозумів це відразу. Закляття “Конфундус”, судячи з їхньої поведінки. Він навіть навіяв їм, що невинний. Вони не тямили, що роблять.',
  },
  {
    name: 'Мобілікорпус',
    book: "Гаррі Поттер і В'язень Азкабану",
    description: 'Заклинання піднімає тіло над землею й дозволяє переміщувати його в повітрі.',
    interestingFact:
      '“Ремус Люпин прошепотів: “Мобілікорпус”. Здалося, мовби хтось потягнув за невидимі мотузки, прив’язані до Снейпових рук, шиї та колін. Його тіло опинилося у вертикальній позиції. Снейп завис над землею, а його ноги гойдалися в повітрі”.',
  },
  {
    name: 'Імпервіус',
    book: "Гаррі Поттер і В'язень Азкабану",
    description:
      'Це закляття, завдяки якому об’єкт відштовхує воду та туман. Його можна використовувати, щоб мати кращий огляд за поганих погодних умов.',
    interestingFact:
      'Герміона Ґрейнджер наклала Імпервіус на окуляри Гаррі Поттера під час матчу з квідичу з Гафелпафом на третьому курсі.',
  },

  {
    name: 'Акціо',
    book: 'Гаррі Поттер і Келих Вогню',
    description:
      'Це чаклунське заклинання викликає предмет до чаклуна, навіть якщо він знаходиться на значній відстані.',
    interestingFact:
      'У фільмах звуковий ефект для заклинання Акціо був створений за допомогою запису високочастотного звуку келиха, коли його натирають вологим пальцем.',
  },
  {
    name: 'Сонорус',
    book: 'Гаррі Поттер і Келих Вогню',
    description: 'Збільшує гучність голосу чаклуна.',
    interestingFact: 'Це закляття можна використовувати для спілкування на великій відстані або в шумному середовищі.',
  },
  {
    name: 'Морсмордре',
    book: 'Гаррі Поттер і Келих Вогню',
    description: 'Викликає знак Волдеморта.',
    interestingFact:
      'Смертежери наносили свій знак на будинки всіх, кого вони вбили, як свою візитну картку. Кажуть, що його створив сам Лорд Волдеморт.',
  },
  {
    name: 'Пріорі Інкантатем',
    book: 'Гаррі Поттер і Келих Вогню',
    description: 'Викликає відлуння останнього виконаного паличкою закляття.',
    interestingFact:
      'Ефект зворотного заклинання, також відомий як Пріорі Інкантатем, був особливо рідкісним проявом цього заклинання, яке відбувалося, коли дві палички з однаковим стрижнем намагалися битися одна з одною.',
  },
  {
    name: 'Репаро',
    book: 'Гаррі Поттер і Келих Вогню',
    description: "Відновлює розбиті об'єкти.",
    interestingFact:
      "Закляття може відновити лише ті об'єкти, які фізично пошкоджені або зламані. Воно не може створювати нові або відновлювати об'єкти, що втратили деякі частини. Крім того, ефективність заклинання залежить від майстерності і здібностей заклинача.",
  },
  {
    name: 'Денсоґіо',
    book: 'Гаррі Поттер і Келих Вогню',
    description: 'Закляття, що спричиняє надзвичайно швидкий ріст зубів.',
    interestingFact:
      'Герміона Ґрейнджер була вражена цим закляттям чарівною паличкою Драко Мелфоя. Драко та Гаррі Поттер почали битися в коридорі, що зрештою призвело до дуелі, але заклинання, які вони наклали один на одного, не влучили й натомість вразили Герміону та Грегорі Ґойла.',
  },
  {
    name: 'Авада Кедавра',
    book: 'Гаррі Поттер і Келих Вогню',
    description:
      'Це найстрашніше зі всіх чаклунських заклинань, яке миттєво вбиває ціль, і є одним з трьох заборонених заклять у світі чаклунів.',
    interestingFact:
      'Назва закляття походить від арамейської фрази "abracadabra", що перекладається як "хай це знищиться". Деякі фанати серії пов\'язують цю назву з фразою "авада кедавра" у сенсі "я руйную".',
  },
  {
    name: 'Круціо',
    book: 'Гаррі Поттер і Келих Вогню',
    description:
      'Одне з Непрощених проклять, це заклинання спричинює жертві інтенсивний біль. Часто використовується темними чаклунами, щоб катувати своїх ворогів.',
    interestingFact:
      'Прокляття Круціо вважається одним з найскладніших заклять, які потрібно виконувати належним чином, оскільки вимагає від чаклуна дійсно насолоджуватись спричиненням болю та страждань.',
  },
  {
    name: 'Імперіо',
    book: 'Гаррі Поттер і Келих Вогню',
    description:
      'Одне з Непрощених проклять, це закляття дозволяє чаклунові контролювати дії жертви. Часто використовується темними чаклунами, щоб маніпулювати іншими та змушувати їх виконувати свої накази.',
    interestingFact:
      'Ефектам прокляття Імперіо можна протистояти сильною волею та ментальним опором. Однак, дуже важко зняти прокляття, коли воно вже заволоділо людиною.',
  },
  {
    name: 'Енґорджіо',
    book: 'Гаррі Поттер і Келих Вогню',
    description: 'Збільшуюче закляття.',
    interestingFact:
      'Якщо заклинатель намагався пронизати ціль за певну точку, вона різко вибухала. Незважаючи на те, що це заклинання було безпечним для використання на тваринах, його не рекомендувалося використовувати, доки контр-заклинання не буде вдосконалено.',
  },
  {
    name: 'Редукто',
    book: 'Гаррі Поттер і Келих Вогню',
    description: 'Вибухове закляття.',
    interestingFact: 'Це було одне із заклинань, що Гаррі Поттер навчив членів Армії Дамблдора.',
  },

  {
    name: 'Локомотор',
    book: 'Гаррі Поттер і Орден Фенікса',
    description:
      'Використовуєтсья разом з назвою предмета, на який спрямоване. Піднімає предмет в повітря і пересуває його згідно бажання виконавця.',
    interestingFact:
      'Досвідчені заклинальники також могли переміщати більше ніж один предмет за раз і використовувати його для таких тривіальних завдань, як сервірування столу для їжі.',
  },
  {
    name: 'Еванеско',
    book: 'Гаррі Поттер і Орден Фенікса',
    description: 'Закляття-щезник – змушує зачакловані предмети щезнути.',
    interestingFact:
      'Зі складністю тварини збільшується складність заклинання; наприклад, равлик, як безхребетна тварина, був досить простий, тоді як миша, представляла великий виклик.',
  },
  {
    name: 'Леґіліменс',
    book: 'Гаррі Поттер і Орден Фенікса',
    description:
      'Це чари, які дозволяли заклинателю виконати Легіліменцію; іншими словами, заглибитися в розум жертви, дозволяючи побачити спогади, емоції та думки.',
    interestingFact:
      'Вправні Легіліменси (такі як Том Реддл) могли виконувати Легіліменцію без використання заклинань чи чарівної палички. Висококваліфіковані Легілімени могли контролювати своїх жертв і створювати реалістичні бачення.',
  },
  {
    name: 'Протеґо',
    book: 'Гаррі Поттер і Орден Фенікса',
    description:
      'Заклинання, яке використовують для створення магічного щита, що захищає від заклять та фізичних атак.',
    interestingFact:
      'Це заклинання використовувала Герміона, щоб захистити себе та Гаррі від атак Смертжерів під час їхнього пошуку Горокраксів.',
  },
  {
    name: 'Колопортус',
    book: 'Гаррі Поттер і Орден Фенікса',
    description: 'Магічно закриває двері, є протилежним до Алогомори.',
    interestingFact: 'Запечатані Колопортусом двері не можна відкрити Алогоморою — їх можна тільки зруйнувати.',
  },

  {
    name: 'Епіскеї',
    book: 'Гаррі Поттер і Напівкровний Принц',
    description: 'Лікує незначні травми.',
    interestingFact: 'Це заклинання було використано Тонкс, щоб вправити зламаний ніс Гаррі Поттера.',
  },
  {
    name: 'Левікорпус',
    book: 'Гаррі Поттер і Напівкровний Принц',
    description: 'Перевертає жертву ввверх ногами.',
    interestingFact:
      'Закляття винайшов Северус Снейп у Гоґвортсі і застосувував його на своїх противниках, проте воно швидко стало популярним і згодом було використано проти самого Снейпа.',
  },
  {
    name: 'Сектумсемпра',
    book: 'Гаррі Поттер і Напівкровний Принц',
    description: 'Це темне та потужне прокляття, яке призводить до появи глибоких кровоточивих порізів на тілі жертви.',
    interestingFact:
      'Сектумсемпра була створена Северусом Снейпом, коли він був учнем у Хогвартсі, та була використана Гаррі Поттером під час дуелі з Драко Малфоєм.',
  },
  {
    name: 'Аґваменті',
    book: 'Гаррі Поттер і Напівкровний Принц',
    description: 'Закляття, що випускає струмінь води з чарівної палички.',
    interestingFact:
      'Залежно від зосередженості та намірів заклинателя, цей закляття може бути чим завгодно: від простого струменя води до хвилі. Гегрід і Гаррі Поттер використовують заклинання, щоб загасити палаючу хатину Гегріда.',
  },

  {
    name: 'Експульсо',
    book: 'Гаррі Поттер і Смертельні Реклівії',
    description: 'Заклинання, що спричиняє вибух предмета.',
    interestingFact:
      '“– Експульсо! – заревів смертежер, і стіл, за яким стояв Гаррі, розлетівся на друзки. Вибуховою хвилею його жбурнуло об стіну”',
  },
  {
    name: 'Заклятус',
    book: 'Гаррі Поттер і Смертельні Реклівії',
    description: 'Приголомшуюче заклинання, яке на деякий час позбавляє свідомості зачаклованого.',
    interestingFact:
      'Відрізняється від Петрифікус Тоталус тим, що супротивник не витягується по стійці «струнко», а завмирає в тій позі, в якій його застало заклинання.',
  },
  {
    name: 'Гоменум ревеліо',
    book: 'Гаррі Поттер і Смертельні Реклівії',
    description: 'Виявляє присутніх поблизу людей.',
    interestingFact:
      'Це заклинання не створювало спалаху світла під час застосування. Коли це заклинання було накладено на людину, воно викликало дивне відчуття. За словами Гаррі Поттера, було відчуття, ніби «щось низько нависло над ним, занурюючи його тіло в свою тінь».',
  },
  {
    name: 'Обскуро',
    book: 'Гаррі Поттер і Смертельні Реклівії',
    description: "Створює пов'язку або пелену на очах, що не дозволяє заклятому бачити.",
    interestingFact:
      'У жовтні 1997 року Герміона Ґрейнджер використала це заклинання, щоб не дати портрету Фінеаса Нігеллуса Блека побачити місцезнаходження її, Рона Візлі та Гаррі Поттера в лісі Діна.',
  },
  {
    name: 'Джемініо',
    book: 'Гаррі Поттер і Смертельні Реклівії',
    description: 'Заклинання, що створює копію предмета.',
    interestingFact:
      'Це заклинання використала Герміона, створивши точну копію медальйона, який вони вкрали у Долорес Амбридж, щоб вона не запідозрила його зникнення.',
  },
];

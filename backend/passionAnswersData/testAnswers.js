// Sisältää sports and outdoor ja games kategoriat
export const testAnswers = [
    {
     key: "korttipelit",
     label: "Korttipelit",
     category: "games",
     question1: ['a', 'b', 'c'],
     question2: ['b'],
     question3: ['a', 'b', 'c'],
     question4: ['a'],
     question5: ['b', 'c'],
     question6: ['a'],
     question7: ['a', 'b', 'c', 'd'],
     subPassions: [
         { key: 'black-jack', label: 'Black-Jack' },
         { key: 'pokeri', label: 'Pokeri' },
         { key: 'ristiseiska', label: 'Ristiseiska' },
     ]
    },
    {
     key: "lautapelit",
     label: "Lautapelit",
     category: "games",
     question1: ['a', 'b', 'c'],
     question2: ['b'],
     question3: ['a', 'b', 'c'],
     question4: ['a'],
     question5: ['b', 'c'],
     question6: ['a'],
     question7: ['a', 'b', 'c', 'd'],
     subPassions: [
         { key: 'monopoli', label: 'Monopoli' },
         { key: 'alias', label: 'Alias' },
         { key: 'shakki', label: 'Shakki' },
     ]
    },

    {
     key: "kamppailulajit",
     label: "Kamppailulajit",
     category: "sports-and-outdoor",
     question1: ['a'],
     question2: ['a'],
     question3: ['b'],
     question4: ['c'],
     question5: ['a', 'b'],
     question6: ['a'],
     question7: ['b', 'c'],
     subPassions: [
         { key: 'potkunyrkkeily', label: 'Poutkunyrkkeily' },
         { key: 'vapaapaini', label: 'Vapaapaini' },
         { key: 'karate', label: 'Karate' },
         { key: 'judo', label: 'Judo' },
         { key: 'nyrkkeily', label: 'Nyrkkeily' },
         { key: 'miekkailu', label: 'Miekkailu' },
         { key: 'vapaaottelu', label: 'Vapaaottelu' },
         { key: 'taekwondo', label: 'Taekwondo' },
     ]
    },

    {
     key: "luonnossa-liikkuminen",
     label: "Luonnossa liikkuminen",
     category: "sports-and-outdoor",
     question1: ['b'],
     question2: ['a'],
     question3: ['c'],
     question4: ['b'],
     question5: ['c'],
     question6: ['a', 'b', 'c'],
     question7: ['c'],
     subPassions: [
         { key: 'retkeily', label: 'Retkeily' },
         { key: 'kavelu', label: 'Kävely' },
         { key: 'geokatkeilu', label: 'Geokätkeily' },
         { key: 'lintubongaus', label: 'Lintubongaus' },
         { key: 'marjastu', label: 'Marjastus' },
         { key: 'sienestys', label: 'Sienestys' },
         { key: 'vaeltaminen', label: 'Vaeltaminen' },
         { key: 'kalastus', label: 'Kalastus' },
         { key: 'telttailu', label: 'Telttailu' },
         { key: 'metsastys', label: 'Metsästys' },
         { key: 'tahtien-katselu', label: 'Tähtien katselu' },
         { key: 'piknik', label: 'Piknik' },
     ]
    },

    {
     key: "mailapelit",
     label: "Mailapelit",
     category: "sports-and-outdoor",
     question1: ['a'],
     question2: ['b'],
     question3: ['b'],
     question4: ['c'],
     question5: ['a'],
     question6: ['a'],
     question7: ['b', 'd'],
     subPassions: [
         { key: 'tennis', label: 'Tennis' },
         { key: 'golf ', label: 'Golf' },
         { key: 'jaapallo', label: 'Jääpallo' },
         { key: 'sulkapallo', label: 'Sulkapallo' },
         { key: 'sahly', label: 'Sähly' },
         { key: 'squash', label: 'Squash' },
         { key: 'padel', label: 'Padel' },
         { key: 'jaakiekko', label: 'Jääkiekko' },
         { key: 'pesapallo', label: 'Pesäpallo' },
         { key: 'haavipallo', label: 'Haavipallo' },
     ]
    },

    {
     key: "vesilajit",
     label: "Vesilajit",
     category: "sports-and-outdoor",
     question1: ['b', 'c'],
     question2: ['c'],
     question3: ['b', 'c', 'd'],
     question4: ['b', 'c'],
     question5: ['a', 'c'],
     question6: ['a', 'b'],
     question7: ['a', 'b', 'c', 'd'],
     subPassions: [
         { key: 'uinti', label: 'Uinti' },
         { key: 'kuviokellunta ', label: 'Kuviokellunta' },
         { key: 'sukeltaminen', label: 'Sukeltaminen' },
         { key: 'vesipallo', label: 'Vesipallo' },
         { key: 'melonta', label: 'Melonta' },
         { key: 'vesijuoksu', label: 'Vesijuoksu' },
         { key: 'snorklaus', label: 'Snorklaus' },
         { key: 'vesihiihto', label: 'Vesihiihto' },
         { key: 'soutaminen', label: 'Soutaminen' },
         { key: 'veneily', label: 'Veneily' },
         { key: 'koskenlasku', label: 'Koskenlasku' },
         { key: 'vesilautailu', label: 'Vesilautailu' },
         { key: 'purjehdus', label: 'Purjehdus' },
         { key: 'purjelautailu', label: 'Purjelautailu' },
         { key: 'surffaus', label: 'Surffaus' },
         { key: 'uimahyppääminen', label: 'Uimahyppääminen' },
         { key: 'suppailu', label: 'Suppailu' },
     ]
    },

    {
     key: "ulkoliikunta",
     label: "Ulkoliikunta",
     category: "sports-and-outdoor",
     question1: ['a', 'b', 'c'],
     question2: ['a'],
     question3: ['b', 'c' ,'d'],
     question4: ['b'],
     question5: ['a'],
     question6: ['a', 'b'],
     question7: ['a', 'b', 'c', 'd'],
     subPassions: [
         { key: 'hiihto', label: 'Hiihto' },
         { key: 'suunnistus ', label: 'Suunnistus' },
         { key: 'kiipeily ', label: 'Kiipeily' },
         { key: 'ratsastus', label: 'Ratsastus' },
         { key: 'laskettelu', label: 'Laskettelu' },
         { key: 'jalkapallo', label: 'Jalkapallo' },
         { key: 'skeittaus', label: 'Skeittaus' },
         { key: 'skuuttaus', label: 'Skuuttaus' },
         { key: 'rullaluistelu', label: 'Rullaluistelu' },
         { key: 'lenkkeily', label: 'Lenkkeily' },
         { key: 'porrasjuoksu', label: 'Porrasjuoksu' },
         { key: 'polkujuoksu', label: 'Polkujuoksu' },
         { key: 'pyorailu', label: 'Pyöräily' },
         { key: 'ampumahiihto', label: 'Ampumahiihto' },
         { key: 'parkour', label: 'Parkour' },
         { key: 'slacklining', label: 'Slacklining' },
         { key: 'maastopyorailu', label: 'Maastopyöräily' },
         { key: 'street-workout', label: 'Street workout' },
         { key: 'luistelu', label: 'Luistelu' },
       { key: 'bumerangin-frisbeen-heittely', label: 'Bumerangin / Frisbeen heittely' },
     ]
    },

    {
     key: "tanssi",
     label: "Tanssi",
     category: "sports-and-outdoor",
     question1: ['a', 'b', 'c'],
     question2: ['c'],
     question3: ['b', 'c', 'd'],
     question4: ['c', 'd'],
     question5: ['a', 'b', 'c'],
     question6: ['a', 'b'],
     question7: ['a', 'b', 'c', 'd'],
     subPassions: [
         { key: 'tango', label: 'Tango' },
         { key: 'valssi ', label: 'Valssi' },
         { key: 'salsa', label: 'Salsa' },
         { key: 'tankotanssi', label: 'Tankotanssi' },
         { key: 'breikkaus', label: 'Breikkaus' },
         { key: 'hiphop', label: 'Hiphop' },
         { key: 'street', label: 'Street' },
         { key: 'baletti', label: 'Baletti' },
         { key: 'samba', label: 'Samba' },
     ]
    },
    
    {
     key: "voimailu",
     label: "Voimailu",
     category: "sports-and-outdoor",
     question1: ['a'],
     question2: ['c'],
     question3: ['b'],
     question4: ['c'],
     question5: ['a'],
     question6: ['a', 'b'],
     question7: ['b', 'd'],
     subPassions: [
         { key: 'painonnosto', label: 'Painonnosto' },
         { key: 'telinevoimistelu ', label: 'Telinevoimistelu' },
         { key: 'voimistelu', label: 'Voimistelu' },
         { key: 'fitness', label: 'Fitness' },
         { key: 'kehonrakennus', label: 'Kehonrakennus' },
         { key: 'crossfit', label: 'Crossfit' },
     ]
    },

    {
     key: "korttipelit",
     label: "Korttipelit",
     category: "games",
     question1: ['a', 'b'],
     question2: ['a'],
     question3: ['a', 'b'],
     question4: ['a'],
     question5: ['b'],
     question6: ['a'],
     question7: ['a', 'b', 'c', 'd'],
     subPassions: [
         { key: 'black-jack', label: 'Black-Jack' },
         { key: 'pokeri ', label: 'Pokeri' },
         { key: 'ristiseiska', label: 'Ristiseiska' },
     ]
    },

    {
     key: "lautapelit",
     label: "Lautapelit",
     category: "games",
     question1: ['a', 'b', 'c'],
     question2: ['c'],
     question3: ['a', 'b', 'c'],
     question4: ['a'],
     question5: ['b', 'c'],
     question6: ['a'],
     question7: ['a', 'b', 'c', 'd'],
     subPassions: [
         { key: 'monopoli', label: 'Monopoli' },
         { key: 'alias ', label: 'Alias' },
         { key: 'shakki', label: 'Shakki' },
     ]
    },

    {
     key: "poytapelit",
     label: "Pöytäpelit",
     category: "games",
     question1: ['a'],
     question2: ['b'],
     question3: ['a', 'b'],
     question4: ['a', 'c'],
     question5: ['b'],
     question6: ['a'],
     question7: ['a', 'b', 'c', 'd'],
     subPassions: [
         { key: 'biljardi', label: 'Biljardi' },
         { key: 'poytajalkapallo ', label: 'Pöytäjalkapallo'},
         { key: 'pingis', label: 'Pingis' },
     ]
    },

    {
     key: "maalitaulupelit",
     label: "Maalitaulupelit",
     category: "games",
     question1: ['a'],
     question2: ['b'],
     question3: ['a', 'd'],
     question4: ['a', 'c'],
     question5: ['b'],
     question6: ['a', 'b'],
     question7: ['a', 'b', 'c', 'd'],
     subPassions: [
         { key: 'darts', label: 'Darts' },
         { key: 'tikka ', label: 'Tikka' },
     ]
    },

    {
     key: "aivopahkinat",
     label: "Aivopähkinät",
     category: "games",
     question1: ['a', 'b', 'c'],
     question2: ['c'],
     question3: ['a'],
     question4: ['a'],
     question5: ['b'],
     question6: ['b'],
     question7: ['a', 'b', 'c', 'd'],
     subPassions: [
         { key: 'palapelit', label: 'Palapelit' },
         { key: 'sudokut ', label: 'Sudokut' },
         { key: 'ristikot', label: 'Ristikot' },
         { key: 'rubiikin-kuutiot ', label: 'Rubiikin kuutiot' },
     ]
    },
  
  {
     key: "pelikoneet",
     label: "Pelikoneet",
     category: "games",
     question1: ['b'],
     question2: ['a'],
     question3: ['c', 'd'],
     question4: ['a'],
     question5: ['c'],
     question6: ['a'],
     question7: ['a', 'b', 'c', 'd'],
     subPassions: [
         { key: 'flipperit', label: 'Flipperit' },
         { key: 'arcadepelit ', label: 'Arcadepelit' },
     ]
  },

  {
     key: "videopelit",
     label: "Videopelit",
     category: "games",
     question1: ['b'],
     question2: ['a'],
     question3: ['c', 'd'],
     question4: ['a'],
     question5: ['c'],
     question6: ['a'],
     question7: ['a', 'b', 'c', 'd'],
     subPassions: []
 
    }
]

export const newAnswers = [
    {
     key: "aivopahkinat",
     label: "Aivopähkinät",
     category: "games",
     question1: ['a', 'b', 'c'],
     question2: ['c'],
     question3: ['a'],
     question4: ['a'],
     question5: ['b'],
     question6: ['b'],
     question7: ['a', 'b', 'c', 'd'],
     subPassions: [
         { key: 'palapelit', label: 'Palapelit' },
         { key: 'sudokut ', label: 'Sudokut' },
         { key: 'ristikot', label: 'Ristikot' },
         { key: 'rubiikin-kuutiot ', label: 'Rubiikin kuutiot' },
     ]
    },
  
  {
     key: "pelikoneet",
     label: "Pelikoneet",
     category: "games",
     question1: ['b'],
     question2: ['a'],
     question3: ['c', 'd'],
     question4: ['a'],
     question5: ['c'],
     question6: ['a'],
     question7: ['a', 'b', 'c', 'd'],
     subPassions: [
         { key: 'flipperit', label: 'Flipperit' },
         { key: 'arcadepelit ', label: 'Arcadepelit' },
     ]
  },
]
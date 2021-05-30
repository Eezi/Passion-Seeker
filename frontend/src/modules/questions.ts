export const questions: { key: string, label: string, answers: object } [] = [
    {
        label: 'Onko sinulle tärkeää, että pystyt huomaamaan kehittymisen siinä mitä teet?',
        key: 'question1',
        answers: {
            a: 'Haluan huomata kehitykseni',
            b: 'Minulle kehittyminen harrastuksessa ei ole niin väliä',
            c: 'En osaa sanoa'
        }
    },
    {
        label: 'Kaipaatko monipuolista intensiivistä tekemistä vai yksinkertaista vaivatonta tekemistä?',
        key: 'question2',
        answers: {
            a: 'Monipuolinen',
            b: 'Yksinkertainen',
            c: 'Molemmat kuulostaa hyvältä'
        }
    },
    {
        label: 'Mikä näistä kuvastaa luonnettasi parhaiten?',
        key: 'question3',
        answers: {
            a: 'Luova älykkö, joka nauttii yksityiskohtien suunnittelusta ja havainnoimisesta',
            b: 'Suorittamishenkinen intoilija, joka harjoittelee mielellään lajinsa parissa jatkuvalla syötöllä',
            c: 'Pohdiskeleva nautiskelija, joka iloitsee elämän pienistäkin asioista'
        }
    },
    {
        label: 'Missä näistä tunnet olosi mukavimmaksi?',
        key: 'question4',
        answers: {
            a: 'Kotona',
            b: 'Luonnossa',
            c: 'Urheiluhallilla',
            d: 'Lavalla'
        }
    },
    {
        label: 'Mitä kaipaat harrastukselta?',
        key: 'question5',
        answers: {
            a: 'Vauhtia',
            b: 'Uuden oppimista ja keskittymistä',
            c: 'Rentoutumista tai hyvinvointia',
        }
    },
    {
        label: 'Tykkäätkö tehdä asioita muiden kanssa?',
        key: 'question6',
        answers: {
            a: 'Kyllä',
            b: 'Ei (Teen mielummin itenäisesti)',
            c: 'Tykkään, jos ne muut ovat eläimiä',
        }
    },
    {
        label: 'Miten usein tykkäisit harrastaa harrastusta?',
        key: 'question7',
        answers: {
            a: 'Satunnaisesti',
            b: '1-2 kertaa viikossa',
            c: 'Oman aikataulun mukaan mutta paljon kerralla',
            d: 'Useita kertoja viikossa'
        }
    },
];

 // Esimerkkiharrastus 

const harrastus = {
    label: "Black Jack",
    key: "black-jack",
    category: "games",
    question1: "a",
    question2: "c",
    question3: "b",
    question4: "d",
    question5: "a",
    question6: "c",
    question7: "a",
}

/*
    Tykkäätkö tehdä asioita muiden kanssa?
    Niin esim jos tähän kysymykseen jos vastaa muiden kanssa eli "a" niin silloin karsitaan
    pois esim maalaus ja piirtöminen jos ne on valittu aikasemmin.

    Kun tehdään tietokanta hakuja niin pitää tarkistaa kysymysten vastaukset jotka 
    vaikuttaa aikasempien kysymysten vastauksiin.
    Esim jos ei ehdottaisi juuri lätkää tai fudista jos vaikka aikasemmin ne olisi tullut vastauksiksi 
    aikasemmissa kysymyksissä. Kun jos myöhemmin valitsee että nauttii tosi paljon tehdä asioita yksin
    niin ei kannata ehdottaa esim lätkää sille vaan silloin se pitää jättää pois.
*/
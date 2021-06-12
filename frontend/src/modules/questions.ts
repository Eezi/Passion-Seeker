export const questions: { key: string, label: string, answers: Array<object> } [] = [
    {
        label: 'Onko sinulle tärkeää, että pystyt huomaamaan kehittymisen siinä mitä teet?',
        key: 'question1',
        answers: [ 
            { label: 'Haluan huomata kehitykseni', option: 'a' },
            { label: 'Minulle kehittyminen harrastuksessa ei ole niin väliä', option: 'b' },
            { label: 'En osaa sanoa', option: 'c' }
        ]   
    },
    {
        label: 'Kaipaatko monipuolista intensiivistä tekemistä vai yksinkertaista vaivatonta tekemistä?',
        key: 'question2',
        answers: [
           { label: 'Monipuolinen', option: 'a' },
           { label: 'Yksinkertainen', option: 'b' },
           { label: 'Molemmat kuulostaa hyvältä', option: 'c' }
        ]
    },
    {
        label: 'Mikä näistä kuvastaa luonnettasi parhaiten?',
        key: 'question3',
        answers: [
           { label: 'Luova älykkö, joka nauttii yksityiskohtien suunnittelusta ja havainnoimisesta', option: 'a' },
           { label: 'Suorittamishenkinen intoilija, joka harjoittelee mielellään lajinsa parissa jatkuvalla syötöllä', option: 'b' },
           { label: 'Pohdiskeleva nautiskelija, joka iloitsee elämän pienistäkin asioista', option: 'c' },
           { label: 'Kokeilunhaluinen seikkailija, joka ei ota elämää niin vakavasti', option: 'd' },
        ]
    },
    {
        label: 'Missä näistä tunnet olosi mukavimmaksi?',
        key: 'question4',
        answers: [
           { label: 'Kotona', option: 'a' },
           { label: 'Luonnossa', option: 'b' },
           { label: 'Urheiluhallilla', option: 'c' },
           { label: 'Lavalla', option: 'd' }
        ]
    },
    {
        label: 'Mitä kaipaat harrastukselta?',
        key: 'question5',
        answers: [
           { label: 'Vauhtia', option: 'a' },
           { label: 'Uuden oppimista ja keskittymistä', option: 'b' },
           { label: 'Rentoutumista tai hyvinvointia', option: 'c' },
        ]
    },
    {
        label: 'Tykkäätkö tehdä asioita muiden kanssa?',
        key: 'question6',
        answers: [
           { label: 'Kyllä', option: 'a' },
           { label: 'Ei (Teen mielummin itenäisesti)', option: 'b' },
           { label: 'Tykkään, jos ne muut ovat eläimiä', option: 'c' },
        ]
    },
    {
        label: 'Miten usein tykkäisit harrastaa harrastusta?',
        key: 'question7',
        answers: [
           { label: 'Satunnaisesti', option: 'a' },
           { label: '1-2 kertaa viikossa', option: 'b' },
           { label: 'Oman aikataulun mukaan mutta paljon kerralla', option: 'c' },
           { label: 'Useita kertoja viikossa', option: 'd' }
        ]
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

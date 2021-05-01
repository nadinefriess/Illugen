import { AppState } from '../app/state/state'

export const appState: AppState = {
    categories: [
        {
            category:"Körper",
            terms:["Kegel","Würfel","Kugel","Quader","Prisma","Pyramide","Zylinder"]
        },{
            category:"Formen",
            terms:["Quadrat","Rechteck","Trapez","Dreieck","Raute","Kreis","Parrallelogramm","Ellipse","Mehreck"]
        },{
            category:"Farben",
            terms:["Rot","Gelb","Blau","Grün","Orange","Lila","Weiß","Schwarz"]
        },{
            category:"Maltechnik",
            terms:["Lasur","Mit geschlossenen Augen","linkshändig","beidhändig","Nass-in-Nass","Collagieren","Spachteln"]
        },{
            category:"Material",
            terms:["Aquarell","Acryl","Kreide","Wachskreide","Aqarellstifte","Tinte"]
        },{
            category:"Emotionen",
            terms:["Freude","Wut","Angst","Ekel","Trauer","Überraschung","Liebe","Müdigkeit"]
        },{
            category:"Muster",
            terms:["Streifen","Punkte","Flecken","Zacken","Rauten","Schuppen","Kringel","Wellen"]
        }
    ],
    topics: [
        {
            topic:"Haustiere", 
            terms:["Hund","Katze","Maus","Kuh", "Huhn", "Hahn", "Pferd", "Schwein", "Gans", "Hase", "Esel", "Ziege", "Schaf"],
        },{
            topic:"Meerestiere",
            terms:["Auster","Garnele","Hai","Clownfisch","Delfin","Krabbe","Rochen","Seepferdchen","Tintenfisch","Pinguin","Oktopus","Walross"],
        },{
            topic:"Fantasiewesen",
            terms:["Drachen","Feen","Zwerge","Hexe","Zauberer","Elfe","Einhorn","Engel"],
        },{
            topic:"Pflanzen",
            terms:["Baum","Blume","Beere","Obst","Gemüse","Pilze","Kaktus","Gras"],
        },{
            topic:"Kleidung",
            terms:["Jacke","Hose","Pullover","Schuhe","Mütze","Schal","T-Shirt","Hut"],
        },{
            topic:"Transportmittel",
            terms:["Trecker","Bagger","Krahn","Auto","Buss","Fahrrad","Flugzeug","Zug","Helikopter","Boot","Motorrad","Roller"],
        }
    ],
    settings: {
        termsPerCategory: 1,
        termsPerTopic: 1,
        numberOfTopics: 1,
        maxCategoryTerms: 7,
        maxTopicTerms: 8,
        maxTopics: 6
    },
    randomTerms: null
}
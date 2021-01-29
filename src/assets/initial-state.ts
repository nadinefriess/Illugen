import { AppState } from '../app/types/app.state'

export const initialState: AppState = {
    categoryList: [
        {
            category:"Körper",
            term:["Kegel","Würfel","Kugel","Quader","Prisma","Pyramide","Zylinder"],
            numberOfTermns:1
        },{
            category:"Formen",
            term:["Quadrat","Rechteck","Trapez","Dreieck","Raute","Kreis","Parrallelogramm","Ellipse","Mehreck"],
            numberOfTermns:1
        },{
            category:"Farben",
            term:["Rot","Gelb","Blau","Grün","Orange","Lila","Weiß","Schwarz"],
            numberOfTermns:1
        },{
            category:"Maltechnik",
            term:["Lasur","Mit geschlossenen Augen","mit links","beidhändig","Nass-in-Nass","Collagieren","Spachteln","Aquarell","Acryl","Kreide","Wachskreide","Aqarellstifte","Tinte"],
            numberOfTermns:1
        },{
            category:"Emotionen",
            term:["Freude","Wut","Angst","Ekel","Trauer","Überraschung","Liebe","Müde"],
            numberOfTermns:1
        },{
            category:"Muster",
            term:["Streifen","Punkte","Flecken","Zacken","Karo","Rauten","Schuppen","Kringel","Wellen","Leo","Zebra","Tetris","Sterne","Herzen"],
            numberOfTermns:1
        }
    ],
    topicList: [
        {
            topic:"Haustiere", 
            term:["Hund","Katze","Maus","Kuh", "Huhn", "Hahn", "Pferd", "Schwein", "Gans", "Hase", "Esel", "Ziege", "Schaf"],
            numberOfTermns:1,
            active: true
        },{
            topic:"Meerestiere",
            term:["Auster","Garnele","Hai","Clownfisch","Delfin","Krabbe","Rochen","Seepferdchen","Tintenfisch","Pinguin","Oktopus","Walross"],
            numberOfTermns:1,
            active: true
        },{
            topic:"Wesen",
            term:["Drachen","Feen","Zwerge","Hexe","Zauberer","Elfe","Einhorn","Engel"],
            numberOfTermns:1,
            active: true
        },{
            topic:"Pflanzen",
            term:["Baum","Blume","Beere","Obst","Gemüse","Pilze","Kaktus","Gras"],
            numberOfTermns:1,
            active: true
        },{
            topic:"Kleidung",
            term:["Jacke","Hose","Pullover","Schuhe","Mütze","Schal","T-Shirt","Hut"],
            numberOfTermns:1,
            active: true
        },{
            topic:"Transportmittel",
            term:["Trecker","Bagger","Krahn","Auto","Buss","Fahrrad","Flugzeug","Zug","Helikopter","Boot","Motorrad","Roller"],
            numberOfTermns:1,
            active: true
        }
    ]
}
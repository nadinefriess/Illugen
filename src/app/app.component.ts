import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Illugen';
  categoryList = [{
      category:'Körper',
      term:['Kegel','Würfel','Kugel','Quader','Prisma','Pyramide','Zylinder']
    },{
      category:'Formen',
      term:['Quadrat','Rechteck','Trapez','Dreieck','Raute','Kreis','Parrallelogramm','Ellipse','Mehreck']
    },{
      category:'Farben',
      term:['Rot','Gelb','Blau','Grün','Orange','Lila','Weiß','Schwarz']
    },{
      category:'Maltechnik',
      term:['Lasur','Mit geschlossenen Augen','mit links','beidhändig','Nass-in-Nass','Collagieren','Spachteln','Aquarell','Acryl','Kreide','Wachskreide','Aqarellstifte','Tinte']
    },{
      category:'Emotionen',
      term:['Freude','Wut','Angst','Ekel','Trauer','Überraschung','Liebe','Müde']
    },{
      category:'Muster',
      term:['Streifen','Punkte','Flecken','Zacken','Karo','Rauten','Schuppen','Kringel','Wellen','Leo','Zebra','Tetris','Sterne','Herzen']
    }];

  topicList= [{
    topic:"Tier", 
    term:['Hund','Katze','Maus','Kuh', 'Huhn', 'Hahn', 'Pferd', 'Schwein', 'Gans', 'Hase', 'Esel', 'Ziege', 'Schaf']
  },{
    topic:'Meerestiere',
    term:['Auster','Garnele','Hai','Clownfisch','Delfin','Krabbe','Rochen','Seepferdchen','Tintenfisch','Pinguin','Oktopus','Walross']
  },{
    topic:'Wesen',
    term:['Drachen','Feen','Zwerge','Hexe','Zauberer','Elfe','Einhorn','Engel']
  },{
    topic:'Pflanzen',
    term:['Baum','Blume','Beere','Obst','Gemüse','Pilze','Kaktus','Gras']
  },{
    topic:'Kleidung',
    term:['Jacke','Hose','Pullover','Schuhe','Mütze','Schal','T-Shirt','Hut']
  },{
    topic:'Transportmittel',
    term:['Trecker','Bagger','Krahn','Auto','Buss','Fahrrad','Flugzeug','Zug','Helikopter','Boot','Motorrad','Roller']
  }];

  result: string[];

  private returnRendomIndexFromTermList(listLength:number):number{
    const RANDOM = Math.floor(Math.random() * listLength);
    return RANDOM;
  }

  public onGenerateClick(){
    this.result = [];
    this.topicList.forEach((cat, ind) => {
      var randomIndex = this.returnRendomIndexFromTermList(this.topicList[ind].term.length);
      this.result.push(cat.term[randomIndex]);
    });
    this.categoryList.forEach((cat, ind) => {
      var randomIndex = this.returnRendomIndexFromTermList(this.categoryList[ind].term.length);
      this.result.push(cat.term[randomIndex]);
    });
  }
}

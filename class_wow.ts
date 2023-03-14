 // je crée ma class Personnage

export class Personnage {
    public nom: string;
    public pointDeVie: number;
    public arme: Arme;
    public endurance: number;

    constructor(nom: string, pointDeVie: number, arme: Arme , endurance: number) {
        this.nom = nom;
        this.pointDeVie = pointDeVie;
        this.arme = arme;
        this.endurance = endurance;
    }
// l'attaque
    attaquer(adversaire: Personnage) {
        const degats = this.arme.pointsDegatsParAttaque;
        const endurance = this.arme.pointEnduParAttaque;
        console.log(`${this.nom} attaque ${adversaire.nom} avec ${this.arme.nom} et lui inflige ${degats} pts de dégats.`);
        console.log(`${this.nom} perds également  ${endurance}  pts d'endurance `);
        adversaire.recevoirDegats(degats);

    }
// notion de dégats
    recevoirDegats(degats: number) {
    this.pointDeVie -= degats;
        console.log(`${this.nom} reçoit ${degats} pts de dégats.`);
        if (this.pointDeVie <= 0) {
        console.log(`${this.nom} est mort de chez mort.`);
    }
    }

}

 // je crée ma class Heros qui extends la class Personnage

export class Heros extends Personnage {
    constructor(nom: string, pointDeVie: number, arme: Arme , endurance: number) {
        super(nom, pointDeVie, arme,endurance);
    }
}

 // je crée ma class Monstre qui extends la class Personnage

export class Monstre extends Personnage {
    constructor(nom: string, pointDeVie: number, arme: Arme , endurance: number) {
        super(nom, pointDeVie, arme , endurance);
    }
}

    // je crée ma class Arme
export class Arme {
    public nom: string;
    public pointsDegatsParAttaque: number;
    public pointEnduParAttaque: number;
    public longueurEnCm: number;
    public poidsEnGr: number;

    constructor(nom: string , pointsDegatsParAttaque : number , longueurEnCm : number , poidsEnGr : number  ) {
        this.nom = nom,
        this.pointsDegatsParAttaque = pointsDegatsParAttaque,
        this.longueurEnCm = longueurEnCm,
        this.poidsEnGr = poidsEnGr;
        this.pointEnduParAttaque = (longueurEnCm * poidsEnGr)/10000 
        ;
    }
    }


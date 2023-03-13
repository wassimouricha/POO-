 // je crée ma class Personnage

export class Personnage {
    public nom: string;
    public pointDeVie: number;
    public arme: Arme;

    constructor(nom: string, pointDeVie: number, arme: Arme) {
        this.nom = nom;
        this.pointDeVie = pointDeVie;
        this.arme = arme;
    }

    attaquer(adversaire: Personnage) {
        const degats = this.arme.pointsDegatsParAttaque;
        console.log(`${this.nom} attaque ${adversaire.nom} avec ${this.arme.nom} et lui inflige ${degats} pts de dégats.`);
        adversaire.recevoirDegats(degats);

    }

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
    constructor(nom: string, pointDeVie: number, arme: Arme) {
        super(nom, pointDeVie, arme);
    }
}

 // je crée ma class Monstre qui extends la class Personnage

export class Monstre extends Personnage {
    constructor(nom: string, pointDeVie: number, arme: Arme) {
        super(nom, pointDeVie, arme);
    }
}

    // je crée ma class Arme
export class Arme {
    public nom: string;
    public pointsDegatsParAttaque: number;
    public longueurEnCm: number;
    public poidsEnGr: number;

    constructor(nom: string , pointsDegatsParAttaque : number , longueurEnCm : number , poidsEnGr : number   ) {
        this.nom = nom,
        this.pointsDegatsParAttaque = pointsDegatsParAttaque,
        this.longueurEnCm = longueurEnCm,
        this.poidsEnGr = poidsEnGr;
    }
    }


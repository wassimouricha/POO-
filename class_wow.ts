 // je crée ma class Personnage

export class Personnage {
    public nom: string;
    public pointDeVie: number;
    public arme: Arme;
    public endurance: number;
    public sacoche: Sacoche;

    constructor(nom: string, pointDeVie: number, arme: Arme , endurance: number , sacoche: Sacoche) {
        this.nom = nom;
        this.pointDeVie = pointDeVie;
        this.arme = arme;
        this.endurance = endurance;
        this.sacoche = sacoche;
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
    constructor(nom: string, pointDeVie: number, arme: Arme , endurance: number , sacoche: Sacoche) {
        super(nom, pointDeVie, arme,endurance, sacoche);
    }
}

 // je crée ma class Monstre qui extends la class Personnage

export class Monstre extends Personnage {
    constructor(nom: string, pointDeVie: number, arme: Arme , endurance: number , sacoche: Sacoche ) {
        super(nom, pointDeVie, arme , endurance, sacoche);
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

    //  je crée une classe Bouclier 
    export class Bouclier {
        public nom: string;
        public pointsEncaissementDégats: number;
        public poidsGr : number;

        constructor(nom: string , pointsEncaissementDégats: number , poidsGr : number){
            this.nom = nom;
            this.pointsEncaissementDégats = pointsEncaissementDégats;
            this.poidsGr = poidsGr;
        }
    }


    // je crée une classe sacoche 

    export class Sacoche {
        public arme1: Arme;
        public arme2: Arme;
        public arme3: Arme;
        public bouclier: Bouclier;
        public nourriture: string;
        constructor(arme1: Arme, arme2: Arme , arme3: Arme , bouclier : Bouclier ,nourriture : string){
            this.arme1 =  arme1; 
            this.arme2 = arme2;
            this.arme3 = arme3;
            this.bouclier = bouclier;
            this.nourriture = nourriture;
        }
    }
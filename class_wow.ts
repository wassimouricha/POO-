 // je crée ma class Personnage

export class Personnage {
    public nom: string;
    public pointDeVie: number;
    public endurance: number;
    public sacoche: Sacoche;


    constructor(nom: string, pointDeVie: number, endurance: number , sacoche: Sacoche ,) {
        this.nom = nom;
        this.pointDeVie = pointDeVie;
        this.endurance = endurance;
        this.sacoche = sacoche;

    }
// l'attaque
    attaquer(adversaire: Personnage) {
        const degats =  adversaire.sacoche.bouclier.pointsEncaissementDégats <= this.sacoche.arme1.pointsDegatsParAttaque ? 
        this.sacoche.arme1.pointsDegatsParAttaque - adversaire.sacoche.bouclier.pointsEncaissementDégats : 0;
        const ptsEncDeg = adversaire.sacoche.bouclier.pointsEncaissementDégats;
        if( ptsEncDeg < degats){
            this.pointDeVie -= (degats - ptsEncDeg)
            const endurance = this.sacoche.arme1.pointEnduParAttaque;
            console.log(`${this.nom} attaque ${adversaire.nom} avec ${this.sacoche.arme1.nom} et lui inflige ${degats - ptsEncDeg} pts de dégats.`);
            console.log(`${this.nom} perds également  ${endurance}  pts d'endurance `);
        } else if (ptsEncDeg > degats) {
            console.log(`${this.nom}  n'a fait aucun dégats car le bouclier de l'adversaire est trop puissant !  `);
        }
        adversaire.recevoirDegats(degats,adversaire);

    }
// notion de dégats
    recevoirDegats(degats: number , adversaire: Personnage) {
        const ptsEncDeg = adversaire.sacoche.bouclier.pointsEncaissementDégats;
        const nomBouclier = adversaire.sacoche.bouclier.nom;
        ptsEncDeg < degats ?   this.pointDeVie -= (degats - ptsEncDeg) : null;
        console.log(`${this.nom} reçoit ${degats} pts de dégats.`);
        ptsEncDeg < degats ?  
        console.log(`le moyen de protection de ${this.nom} est trop faible et n'a servie à rien ! `) 
        : console.log(`grace au ${nomBouclier} , ${this.nom} à pu  réduire les dégats ! `) 
        if (this.pointDeVie <= 0) {
        console.log(`${this.nom} est mort de chez mort.`);
    }
    }

}

 // je crée ma class Heros qui extends la class Personnage

export class Heros extends Personnage {
    constructor(nom: string, pointDeVie: number,  endurance: number , sacoche: Sacoche ) {
        super(nom, pointDeVie,endurance, sacoche);
    }
}

 // je crée ma class Monstre qui extends la class Personnage

export class Monstre extends Personnage {
    constructor(nom: string, pointDeVie: number,  endurance: number , sacoche: Sacoche ) {
        super(nom, pointDeVie , endurance, sacoche);
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

    
    // Je crée une classe nourriture 

    export class Nourriture {
        public nom: string;
        public recupEndu:  number;
        public poidsGr: number;
        constructor(nom: string, recupEndu: number , poidsGr: number ){
            this.nom = nom;
            this.recupEndu = recupEndu;
            this.poidsGr = poidsGr;
        }
    }


    // je crée une classe sacoche 

    export class Sacoche {
        public arme1: Arme;
        public arme2: Arme;
        public arme3: Arme;
        public bouclier: Bouclier;
        public nourriture: Nourriture;
        constructor(arme1: Arme, arme2: Arme , arme3: Arme , bouclier : Bouclier ,nourriture : Nourriture){
            this.arme1 =  arme1; 
            this.arme2 = arme2;
            this.arme3 = arme3;
            this.bouclier = bouclier;
            this.nourriture = nourriture;
        }
    }

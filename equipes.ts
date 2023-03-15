// je créer les équipes de héros et de monstres et je  leur donne des personnages avec des armes.

import { Arme, Bouclier, Heros, Monstre, Nourriture, Sacoche } from "./class_wow";

export  let equipeHeros: Heros[] = [
    // Heros 1
    new Heros("Arthas Menethil", 30,  10 ,
     new Sacoche(new Arme("Lames du chaos", 10, 100, 1000), new Arme("épée double tranchant", 8,80,1000) , new Arme("Mains nues", 2,10,100),
     new Bouclier("Bouclier Hylien", 22 , 2000), new Nourriture("Pomme", 10, 100),
     ),50,
     ),
    //  Heros 2 
    new Heros("Van Hellsing", 25,250,
    new Sacoche(new Arme("Canon scié", 8, 90, 800) , new Arme("Arbalete", 5,90,800) , new Arme("coup de pieds", 4,80,800),
    new Bouclier("Aucun", 0 , 0)
    ,  new Nourriture("Potion", 10, 100),),50
    )
    ];

export let equipeMonstres: Monstre[] = [
    // Monstre 1
    new Monstre("Dracula", 25,500,
    new Sacoche(new Arme("L'abattoir", 12, 120, 1500), new Arme("Hachette", 8, 120, 1500),new Arme("Coup de crocs", 5, 120, 1500),
    new Bouclier("aucun", 0, 0)
    ,new Nourriture("Patate", 10, 100),),50),
    // Monstre 2 
    new Monstre("Grom", 20,250,
    new Sacoche(new Arme("Massue en pierre", 6, 80, 2000) , new Arme("Massue en mousse" , 1,50,500) , new Arme("attaque mentale",15, 80,2000),
    new Bouclier("Aucun", 0, 0)
    ,new Nourriture("Croc monsieur", 10, 100),),50,),
    ];


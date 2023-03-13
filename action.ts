// je crée une fonction pour savoir quelle équipe vas attaquer en premier 
        // ma fonction prend  deux tableaux contenant les personnages de l'équipe de héros et de l'équipe de monstres 
        // Elle tire au sort un nombre entre 0 et 1 pour choisir au hasard qui va commencer à attaquer. 
        // Ensuite, elle tire un personnage au hasard dans l'équipe choisie et retourne ce personnage. 
        // La console affiche également quel personnage a été choisi pour attaquer en premier. 

import { Personnage } from "./class_wow";
import { equipeHeros, equipeMonstres } from "./equipes";

        // Vous pouvez ensuite utiliser cette fonction pour déterminer qui attaque en premier.
        function attaquePremier(equipeHeros: Personnage[], equipeMonstres: Personnage[]): Personnage {
          const equipeAuHasard = Math.floor(Math.random() * 2); 
          // tirez un nombre aléatoire entre 0 et 1 pour choisir au hasard  qui va commencer à attaquer
          let premierAttaquant: Personnage;
          if (equipeAuHasard === 0) { // Si l'équipe choisie est l'équipe de héros
              // Math.floor() renvoie le plus grand entier qui est inférieur ou égal à un nombre x ici x = Math.random() * equipeHeros.length
              // Math.random() qui génère un nombre aléatoire compris entre 0 et 1
            premierAttaquant = equipeHeros[Math.floor(Math.random() * equipeHeros.length)]; 
            // tirez un personnage au hasard dans l'équipe de héros
              console.log(`L'équipe de héros attaque en premier avec ${premierAttaquant.nom}`);
              premierAttaquant.attaquer(equipeMonstres[0]);
              
          } else { 
              // Sinon, l'équipe choisie est l'équipe de monstres
            premierAttaquant = equipeMonstres[Math.floor(Math.random() * equipeMonstres.length)]; 
            // tirez un personnage au hasard dans l'équipe de monstres
              console.log(`L'équipe de monstres attaque en premier avec ${premierAttaquant.nom}`);
              premierAttaquant.attaquer(equipeHeros[0]);
          }
          return premierAttaquant;
      }

// Boucle de jeu
while (equipeHeros[0].pointDeVie > 0 || equipeMonstres[0].pointDeVie > 0) {
  attaquePremier(equipeHeros,equipeMonstres);
}

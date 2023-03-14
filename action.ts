// je crée une fonction pour savoir quelle équipe vas attaquer en premier 
        // ma fonction prend  deux tableaux contenant les personnages de l'équipe de héros et de l'équipe de monstres 
        // Elle tire au sort un nombre entre 0 et 1 pour choisir au hasard qui va commencer à attaquer. 
        // Ensuite, elle tire un personnage au hasard dans l'équipe choisie et retourne ce personnage. 
        // La console affiche également quel personnage a été choisi pour attaquer en premier. 

import { Personnage } from "./class_wow";
import { equipeHeros, equipeMonstres } from "./equipes";

        // Vous pouvez ensuite utiliser cette fonction pour déterminer qui attaque en premier.
        function Jeu(equipeHeros: Personnage[], equipeMonstres: Personnage[]): Personnage {
          const equipeAuHasard = Math.floor(Math.random() * 2); 
          // tirez un nombre aléatoire entre 0 et 1 pour choisir au hasard  qui va commencer à attaquer
          let premierAttaquant: Personnage;

          if (equipeAuHasard === 0) { // Si l'équipe choisie est l'équipe de héros
              // Math.floor() renvoie le plus grand entier qui est inférieur ou égal à un nombre x ici x = Math.random() * equipeHeros.length
              // Math.random() qui génère un nombre aléatoire compris entre 0 et 1
            premierAttaquant = equipeHeros[Math.floor(Math.random() * equipeHeros.length)]; 
            if(premierAttaquant.pointDeVie > 0){
                     // tirez un personnage au hasard dans l'équipe de héros
                      console.log(`L'équipe de héros attaque  avec ${premierAttaquant.nom}`);
                      if(equipeMonstres[0].pointDeVie > 0 ){
                        premierAttaquant.attaquer(equipeMonstres[0]  );
                        if(equipeMonstres[0].pointDeVie > 0 ){
                          console.log(`OH MON DIEU L'ENNEMI ${equipeMonstres[0].nom} CONTRE ATTAQUE !! `);
                          equipeMonstres[0].attaquer(equipeHeros[0]);
                        }
                      } else {
                        console.log(`${premierAttaquant.nom} ne peut pas attaquer ${equipeMonstres[0].nom } puisqu'il est déjà MORT`);
                        premierAttaquant.attaquer(equipeMonstres[1]  );
                      }

            }else{
              console.log(`${premierAttaquant.nom} ne peut pas attaquer puisqu'il est MORT`);
            }
              
          } else { 
              // Sinon, l'équipe choisie est l'équipe de monstres
            premierAttaquant = equipeMonstres[Math.floor(Math.random() * equipeMonstres.length)]; 
            if(premierAttaquant.pointDeVie > 0){
                          // tirez un personnage au hasard dans l'équipe de monstres
                          console.log(`L'équipe de monstres attaque  avec ${premierAttaquant.nom}`);
                          if(equipeHeros[0].pointDeVie > 0 ){
                            premierAttaquant.attaquer(equipeHeros[0]);
                            if(equipeHeros[0].pointDeVie > 0 ){
                              console.log(`OH MON DIEU L'ENNEMI ${equipeHeros[0].nom} CONTRE ATTAQUE !! `);
                              equipeHeros[0].attaquer(equipeMonstres[0]);
                            }
                          } else {
                            console.log(`${premierAttaquant.nom} ne peut pas attaquer ${equipeHeros[0].nom } puisqu'il est déjà MORT`);
                            premierAttaquant.attaquer(equipeHeros[1]);
                          }
                        
            }else {
              console.log(`${premierAttaquant.nom} ne peut pas attaquer puisqu'il est MORT`);
            }



          }
          return premierAttaquant;
      }

// Boucle de jeu
while ((equipeHeros[0].pointDeVie > 0 || equipeHeros[1].pointDeVie > 0) && (equipeMonstres[0].pointDeVie > 0 || equipeMonstres[1].pointDeVie > 0)) {
  Jeu(equipeHeros,equipeMonstres);
            // qui a remporté la victoire ? 
            let mort : Boolean = false;
            if(equipeMonstres[0].pointDeVie <= 0  && equipeMonstres[1].pointDeVie <= 0){
              mort = true; 
              if(mort == true ) {
                console.log(`l'équipe de  ${equipeHeros[0].nom && equipeHeros[1].nom}  a remporté la victoire ! `);
              
              }
            } else  if(equipeHeros[0].pointDeVie <= 0 && equipeHeros[1].pointDeVie <= 0){
              console.log( `l'équipe de  ${equipeMonstres[0].nom && equipeMonstres[1].nom}  a remporté la victoire ! `);
            }
}

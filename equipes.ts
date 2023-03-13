// je créer les équipes de héros et de monstres et je  leur donne des personnages avec des armes.

import { Arme, Heros, Monstre } from "./class_wow";

export  let equipeHeros: Heros[] = [
    new Heros("Arthas Menethil", 30, new Arme("Lames du chaos", 10, 100, 1000)),
    new Heros("Van Hellsing", 25, new Arme("Canon scié", 8, 90, 800))
    ];

export let equipeMonstres: Monstre[] = [
    new Monstre("Dracula", 25, new Arme("L'abattoir", 12, 120, 1500)),
    new Monstre("Grom", 20, new Arme("Massue en pierre", 6, 80, 2000))
    ];
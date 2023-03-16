class MonSingleton {
    // 2 -  attribut sur lui meme ET static 
    private static instance: MonSingleton;

    // 1 -  le constructeur est private 
    private constructor() {}

    private uneInfo: string;

    // 3 il a une méthode pour récupérer l'attribut
    // (elle est obligatoirement static)
    public static getInstance(): MonSingleton {
        if (!MonSingleton.instance) {
            // je le fabrique
            MonSingleton.instance = new MonSingleton();
        }
        return MonSingleton.instance;
    }

    public getUneInfo(): string {
        return this.uneInfo;
    }

    public setUneInfo(uneInfo: string): void {
        this.uneInfo = uneInfo;
    }
}

MonSingleton.getInstance().getUneInfo();

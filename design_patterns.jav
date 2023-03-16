public   class MonSingleton {
    // 2 -  attribut sur lui meme ET static 
    private static MonSingleton instance;

    // 1 -  le constructeur est private 
    private MonSingleton(){

    }       

    private String uneInfo;
// 3 il a une méthode pour récupérer l'attribut
// (elle est obligatoirement static)
public static synchronized MonSingleton getInstance(){
    if(instance == null ){
        //   je le fabrique
        instance = new MonSingleton();
    }
    return instance;
    }

    public String getUneInfo(){
        return uneInfo;
    }

    public void setUneInfo(String uneInfo){
        this.uneInfo = uneInfo;
    }

}

MonSingleton.getInstance().getUneInfo();
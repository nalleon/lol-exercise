export default class Champion {
    constructor(data) {
        this.id = data.id;
        this.name = (data.name).toUpperCase();                       
        this.version = data.version;                             
        this.title = (data.title).toUpperCase();   
        this.description = (data.blurb).toUpperCase();   
        this.img = data.image.full;               
        this.tags = data.tags;
        this.partype = data.partype.toUpperCase();

        this.attack = data.info.attack; 
        this.defense = data.info.defense; 
        this.magic = data.info.magic;    
        this.difficulty = data.info.difficulty;
        
    }

    setImg(splashUrl) {
        this.img = splashUrl;
    }
    
}
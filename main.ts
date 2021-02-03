class BackgroundMusic {
    musicToPlay: any[];
    frequency: number;
    
    playingStatus = false;
    constructor(frequency: number, music: any[]){
        this.musicToPlay = music;
        this.frequency = frequency;
    }
    
    /**
     * Stop playing the music. Make sure to use applyChanges().
     */
    stop() {
        console.log('Stopped.')
        return this.playingStatus = false;
    }
    /**
     * Start playing the music. Make sure to use applyChanges().
     */
    start(){
        console.log('Started.')
        return this.playingStatus = true;
    }
    /**
     * Must be used after using stop() and start().
     */
    applyChanges(){
        while(this.playingStatus){
            for(let i = 0; i < this.musicToPlay.length; i++){
                console.log(`Playing ${this.musicToPlay[i]}`)
                music.playTone(this.musicToPlay[i], this.frequency)
            }
        }
    }

}
const d = new BackgroundMusic(800, ["900", "800"])
d.start()
d.applyChanges()
d.stop()
d.applyChanges()
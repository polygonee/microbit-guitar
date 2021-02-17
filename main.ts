input.onPinPressed(TouchPin.P0, function () {
    console.log('Pin 0 pressed.')
music.playTone(262, music.beat(BeatFraction.Whole))
})
input.onPinPressed(TouchPin.P2, function () {
    console.log('Pin 2 pressed.')
})
input.onPinPressed(TouchPin.P1, function () {
    console.log('Pin 1 pressed.')
})
let volume = 100
let frequency = 1000
class Base {
    log(thing: string){
        console.log(thing)
    }
}
class Music {
    musicToPlay: any[];
    frequency: number;
    playingStatus = 0;
    readonly weird: string[] = ["500", "400", "400", "300", "600", "600", "500", "600"];
    readonly weirder: string[] = ["494", "554", "587", "587", "659", "554", "494", "440"];

    constructor(freq: number, music: any[], vol: number){
        this.musicToPlay = music;
        frequency = freq;
        volume = vol;
    }
    setVolume(vol: number){
        return volume = vol;
    }
    setFrequency(f: number){
        return frequency = f;
    }
    /**
     * Stop playing the music. Make sure to use applyChanges().
     */
    stop() {
        console.log('Stopped.')
        return this.playingStatus = 0;
    }
    /**
     * Start playing the music. Make sure to use applyChanges().
     */
    start(){
        console.log('Started.')
        return this.playingStatus = 2;
    }
    /**
     * Must be used after using stop() and start().
     */
    applyChanges(){
        while(this.playingStatus >= 2){
            for(let i = 0; i < this.musicToPlay.length; i++){
                console.log(`Playing ${this.musicToPlay[i]}`)
                music.setVolume(input.lightLevel())
                music.playTone(this.musicToPlay[i], frequency)
                basic.pause(1000)
                console.log('Light level: ' + input.lightLevel())
            }
        }
    }

}
const init = new Music(800, ["0", "0"], 0)
const weird = new Music(800, init.weird, 200)
weird.start()
weird.applyChanges()
const weirder = new Music(800, init.weirder, 200)
weirder.start()
weirder.applyChanges()
input.onPinPressed(TouchPin.P0, function() {
    console.log('Pin 0 pressed.')
    music.playTone(Note.C, music.beat())
})

input.onPinPressed(TouchPin.P1, function() {
    console.log('Pin 1 pressed.')
    music.playTone(Note.D, music.beat())
})
input.onPinPressed(TouchPin.P2, function() {
    console.log('Pin 2 pressed.')
    music.playTone(Note.E, music.beat())
})
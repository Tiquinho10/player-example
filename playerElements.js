import { secondsToMinutes } from "./utils.js";

export default {
    get() {
        this.player = document.querySelector(".player");
        this.playPause = document.querySelectorAll(".play")
        this.closePlayer = document.querySelector(".close-player");
        this.currentDuration = document.querySelector("#current-duration");
        this.totalDuration = document.querySelector("#total-duration");
        this.seekbar = document.querySelector("#seekbar");
        this.volume = document.querySelector("#vol-control");
        this.previousTrack = document.querySelector("#previous-track");
        this.nextTrack = document.querySelector("#next-track");
        //this.playPause = document.querySelector("#play-pause");
        this.playPauses = document.querySelector("#play-pauses");
    },
    createAudioElement(audio) {
         this.audio = new Audio(audio);
    },
    actions(){
        this.playPause.forEach((e) => {
            e.onclick = () =>{
                this.togglePlayPause();
            
            } 
        });
        this.player = () => this.isPlay();
        this.closePlayer.onclick = () => this.close();
        this.audio.onended = () => this.next();
        this.audio.ontimeupdate = () => this.timeUpdate();
        // this.playPause.onclick = () => this.togglePlayPause();
        this.playPauses.onclick = () => this.togglePlayPause();
        this.nextTrack.onclick = () => this.next();
        this.previousTrack.onclick = () => this.previous();
        this.volume.oninput = () => this.setVolume(this.volume.value);
        this.volume.onchange = () => this.setVolume(this.volume.value);
        this.seekbar.oninput = () => this.setSeek(this.seekbar.value);
        this.seekbar.onchange = () => this.setSeek(this.seekbar.value);
        this.seekbar.max = this.audio.duration;
        this.totalDuration.innerText = secondsToMinutes(this.audio.duration);
     
    }

}


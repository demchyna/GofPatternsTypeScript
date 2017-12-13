"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AudioPlayer_1 = require("./AudioPlayer");
function main() {
    var audioPlayer = new AudioPlayer_1.AudioPlayer();
    audioPlayer.play("mp3", "beyond the horizon.mp3");
    audioPlayer.play("mp4", "alone.mp4");
    audioPlayer.play("vlc", "far far away.vlc");
    audioPlayer.play("avi", "mind me.avi");
}
main();
//# sourceMappingURL=AdapterPatternDemo.js.map
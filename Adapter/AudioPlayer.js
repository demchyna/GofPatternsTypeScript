"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MediaAdapter_1 = require("./MediaAdapter");
var AudioPlayer = /** @class */ (function () {
    function AudioPlayer() {
    }
    AudioPlayer.prototype.play = function (audioType, fileName) {
        if (audioType === "mp3") {
            console.log("Playing mp3 file. Name: " + fileName);
        }
        else if (audioType === "vlc" || audioType === "mp4") {
            this.mediaAdapter = new MediaAdapter_1.MediaAdapter(audioType);
            this.mediaAdapter.play(audioType, fileName);
        }
        else {
            console.log("Invalid media. " + audioType + " format not supported");
        }
    };
    return AudioPlayer;
}());
exports.AudioPlayer = AudioPlayer;
//# sourceMappingURL=AudioPlayer.js.map
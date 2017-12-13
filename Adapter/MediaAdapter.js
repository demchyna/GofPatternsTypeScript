"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VlcPlayer_1 = require("./VlcPlayer");
var Mp4Player_1 = require("./Mp4Player");
var MediaAdapter = /** @class */ (function () {
    function MediaAdapter(audioType) {
        if (audioType === "vlc") {
            this.advancedMusicPlayer = new VlcPlayer_1.VlcPlayer();
        }
        else if (audioType === "mp4") {
            this.advancedMusicPlayer = new Mp4Player_1.Mp4Player();
        }
    }
    MediaAdapter.prototype.play = function (audioType, fileName) {
        if (audioType === "vlc") {
            this.advancedMusicPlayer.playVlc(fileName);
        }
        else if (audioType === "mp4") {
            this.advancedMusicPlayer.playMp4(fileName);
        }
    };
    return MediaAdapter;
}());
exports.MediaAdapter = MediaAdapter;
//# sourceMappingURL=MediaAdapter.js.map
const musicPlayer = {
    currentTrackIndex: 0,
    tracks: [],
    audio: new Audio(),
    
    init: function() {
        this.loadTracks();
        this.bindEvents();
        this.updateTrackInfo();
    },

    loadTracks: function() {
        // Load music files from the assets/music directory
        this.tracks = [
            { title: "Track 1", src: "assets/music/track1.mp3" },
            { title: "Track 2", src: "assets/music/track2.mp3" },
            { title: "Track 3", src: "assets/music/track3.mp3" }
        ];
    },

    bindEvents: function() {
        document.getElementById('playBtn').addEventListener('click', () => this.play());
        document.getElementById('pauseBtn').addEventListener('click', () => this.pause());
        document.getElementById('nextBtn').addEventListener('click', () => this.next());
        document.getElementById('prevBtn').addEventListener('click', () => this.prev());
    },

    play: function() {
        this.audio.src = this.tracks[this.currentTrackIndex].src;
        this.audio.play();
        this.updateTrackInfo();
    },

    pause: function() {
        this.audio.pause();
    },

    next: function() {
        this.currentTrackIndex = (this.currentTrackIndex + 1) % this.tracks.length;
        this.play();
    },

    prev: function() {
        this.currentTrackIndex = (this.currentTrackIndex - 1 + this.tracks.length) % this.tracks.length;
        this.play();
    },

    updateTrackInfo: function() {
        const trackInfo = document.getElementById('trackInfo');
        trackInfo.textContent = `Playing: ${this.tracks[this.currentTrackIndex].title}`;
    }
};

document.addEventListener('DOMContentLoaded', () => musicPlayer.init());
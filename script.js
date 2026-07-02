const lyrics = [
    { time: 0.5, text: "Di daun yang ikut mengalir lembut" },
    { time: 5, text: "Terbawa sungai ke ujung mata" },
    { time: 12, text: "Dan aku mulai takut terbawa cinta" },
    { time: 17.5, text: "Menghirup rindu yang sesakkan dada"}, 
    { time: 25, text: "Jalan ku hampa"},
    { time: 27.5, text: "dan ku sentuh dia" },
    { time: 30.5, text: "Terasa hangat" },
    { time: 33.5, text: "Oh didalam hati" },
    { time: 36.5, text: "Ku pegang erat dan" },
    { time: 39, text: "Ku halangi waktu" },
    { time: 42, text: "tak urung jua ku lihatnya pergi" },
    { time: 49, text: "......" },
    { time: 61, text: "Tak pernah ku ragu" },
    { time: 63.5, text: "Dan slalu ku ingat" },
    { time: 67, text: "Kerlingan matamu dan sentuhan hangat" },
    { time: 72, text: "Ku saat itu takut, mencari makna"},
    { time: 78, text: "Tumbuhkan rasa yang, sesakkan dada"},
    { time: 85, text: "Kau datang dan pergi"},
    { time: 88, text: "Oh begitu saja" },
    { time: 91, text: "Semua ku terima apa adanya" },
    { time: 97, text: "Mata terpejam dan hati menggumam" },
    { time: 103, text: "Di ruang rindu" },
    { time: 106, text: "Kita bertemu.." },
    { time: 112, text: "uh uhuu.."},
    { time: 125, text: "......"},
    { time: 149.8, text: "Kau datang dan pergi"},
    { time: 153, text: "Oh begitu saja" },
    { time: 156.5, text: "Semua ku terima apa adanya" },
    { time: 162, text: "Mata terpejam dan hati menggumam" },
    { time: 168, text: "Di ruang rindu" },
    { time: 170.7, text: "Kita bertemu 💜" },
    { time: 175.5, text: "Bertemu.." }
];

const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");

let playing = false;

playBtn.addEventListener("click", () => {

    if (!playing) {
        audio.play();
        playBtn.innerHTML = "⏸ Pause";
        playing = true;
    } else {
        audio.pause();
        playBtn.innerHTML = "▶ Play";
        playing = false;
    }

});
audio.addEventListener("ended", () => {
    playBtn.innerHTML = "▶ Play";
    playing = false;
});
const lyric = document.getElementById("lyric");

audio.addEventListener("timeupdate", () => {
    const currentTime = audio.currentTime;

    for (let i = lyrics.length - 1; i >= 0; i--) {
        if (currentTime >= lyrics[i].time) {
            lyric.innerText = lyrics[i].text;
            break;
        }
    }
});
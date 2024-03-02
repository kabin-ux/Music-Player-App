var arr =[ 
    {songName: "B.Y.O.B", url: "./$ongss/B.Y.O.B..mp3", img: "./img/soad.jpg", time:"4:22" }, 
    {songName: "Rape Me", url: "./$ongss/Rape Me.mp3", img: "./img/inutero.jpeg", time: "2:50" }, 
    {songName: "For Whom The Bell Tolls", url: "./$ongss/For Whom The Bell Toll.mp3", img: "./img/ride.jpg", time: "5:10" },
    {songName: "Lithium", url: "./$ongss/07.Lithium.mp3", img: "./img/nvm.jpeg" , time: "4:17"},
    {songName: "Enter Sandman", url: "./$ongss/02 Enter Sandman.mp3", img: "./img/enter.jpeg", time: "5:31" },
    {songName: "Numb", url: "./$ongss/Numb.mp3", img: "./img/LP.jpeg" , time: "3:07"},
    {songName: "Smells Like Teen Spirit", url: "./$ongss/Smells Like Teen Spirit.mp3", img: "./img/nvm.jpeg" , time: "5:01"},
    {songName: "Killing In The Name Of", url: "./$ongss/Killing In The Name Of.mp3", img: "./img/ratm.jpg", time: "5:13" },
    {songName: "Smells Like Teen Spirit", url: "./$ongss/Smells Like Teen Spirit.mp3", img: "./img/nvm.jpeg" , time: "5:01"},
    {songName: "Smells Like Teen Spirit", url: "./$ongss/Smells Like Teen Spirit.mp3", img: "./img/nvm.jpeg" , time: "5:01"},
    {songName: "Smells Like Teen Spirit", url: "./$ongss/Smells Like Teen Spirit.mp3", img: "./img/nvm.jpeg" , time: "5:01"},
];


var allSongs = document.querySelector("#all-songs");
var cover = document.querySelector("#top");
var play = document.querySelector("#play");
var forward = document.querySelector("#forward");
var backward = document.querySelector("#backward");

var audio = new Audio();

var selectedSong = 0;

const mainFunction  = () => {
    var element = ""
    arr.forEach((item, index) => {
        element += `<div class="song-card" id=${index}>
        <div class="part1">
            <img src= ${item.img} alt="${item.songName}" />
            <h2>${item.songName}</h2>
        </div>
        <h6>${item.time}</h6>
    </div>` 
    });
    allSongs.innerHTML = element;

    audio.src= arr[selectedSong].url;

    cover.style.backgroundImage = `url(${arr[selectedSong].img})`
};

mainFunction(); 



allSongs.addEventListener('click', (details) => {
    // Remove the 'clicked' class from all song cards
    document.querySelectorAll('.song-card').forEach(card => {
        card.classList.remove('clicked');
    });
    
    // Add the 'clicked' class to the clicked song card
    details.target.classList.add('clicked');
    
    selectedSong = details.target.id;
    play.innerHTML = `<i class="ri-pause-line"></i>`;
    flag = 1;
    mainFunction();
    audio.play();
});


var flag = 0;
play.addEventListener('click',()=>{
    if(flag == 0){
        play.innerHTML = `<i class="ri-pause-line"></i>`;
        mainFunction();
        audio.play();
        flag = 1;   
    }else{
        play.innerHTML = `<i class="ri-play-line"></i>`;
        mainFunction();
        audio.pause();
        flag = 0; 
    }
});

forward.addEventListener("click", () => {
    if(selectedSong < arr.length-1){
        selectedSong++;
        mainFunction();
        audio.play();
    }else{
        forward.style.opacity = 0.2;
    }
});

backward.addEventListener("click", () => {
    if(selectedSong > 0){
        selectedSong--;
        mainFunction();
        audio.play();
    }else{
        backward.style.opacity = 0.2;
    }
});
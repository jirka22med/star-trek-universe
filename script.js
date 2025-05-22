// API klíč a URL endpoint pro Text-to-Speech
const API_KEY = 'AIzaSyAz_BFf_O8x4j9nFWzinB4deWSdpBLqdUA';
const API_URL = 'https://texttospeech.googleapis.com/v1/text:synthesize?key=' + API_KEY;

let currentAudio = null; // Uchování aktuálně přehrávaného audio objektu
let currentVoice = 'cs-CZ-Wavenet-A'; // Výchozí hlas

const voices = {
    female: 'cs-CZ-Wavenet-A',
    male: 'cs-CZ-Wavenet-B'
};

// Definice nových Star Trek přehrávačů
const starTrekPlayers = [
    { id: 'enterprise', title: 'Enterprise', src: 'https://www.dropbox.com/scl/fi/j14wk1i4gj15s5w2jn5l4/Star-Trek-Enterprise-Theme-Extended-Version-.mpg.mp3?rlkey=bfykx9urgc0m58lshd4u6y0g8&st=yrmyl99d&dl=1' },
    { id: 'nova-generace', title: 'Nová generace', src: 'https://www.dropbox.com/scl/fi/yi1w5b9mwuwwl4gsrg01l/Star-Trek_-The-Next-Generation-Theme-EPIC-VERSION.mp3?rlkey=7wsegbwm0f2zqrdv4lstx3hbg&st=7jpghj3a&dl=1' },
    { id: 'voyager', title: 'Voyager', src: 'https://www.dropbox.com/scl/fi/oazfxyf28omnabs6wsy09/Star-Trek-Voyager-4k-HD-Intro-NeonVisual.mp3?rlkey=cj5o6lhite277q9f8oeeixnlc&st=4n4nb4mg&dl=1' },
    { id: 'deep-space-nine', title: 'Deep Space Nine', src: 'https://www.dropbox.com/scl/fi/61uxo0jemsb84iyg6yxw3/Star-Trek_-Deep-Space-Nine-4K-HD-Intro-NeonVisual.mp3?rlkey=ltd4xwfosro3xcu08go2aeiza&st=jh5z8nc4&dl=1' },
    { id: 'puvodni-serie', title: 'Původní série', src: 'https://www.dropbox.com/scl/fi/nd8y62ir32ck3zk67wz26/Star-Trek_-The-Original-Series-1966-1969-Opening-and-Closing-Theme.mp3?rlkey=kr8yvvygvjaergl851f1z6frk&st=rcn8p89r&dl=1' },
    { id: 'discovery', title: 'Discovery', src: 'https://www.dropbox.com/scl/fi/beossqqw6rquqfzghfvbf/Star-Trek_-Discovery-Main-Theme.mp3?rlkey=oba8a483o61glsm3b62lasy2p&st=v8806b35&dl=1' }
];
document.querySelectorAll('.audioPlayer').forEach(player => {
    const progress = player.nextElementSibling.querySelector('.audio-progress');
    player.addEventListener('timeupdate', () => {
        const percent = (player.currentTime / player.duration) * 100;
        progress.style.width = `${percent}%`;
        });
});
// Funkce pro změnu hlasu
function changeVoice(newVoice) {
    if (voices[newVoice]) {
        currentVoice = voices[newVoice];
    } else {
        console.error('Neznámý hlas: ' + newVoice);
    }
}

// Funkce pro čtení textu nahlas s externím TTS API
function readText() {
    const textToRead = this.previousElementSibling.textContent;

    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            input: { text: textToRead },
            voice: { languageCode: 'cs-CZ', name: currentVoice },
            audioConfig: { audioEncoding: 'MP3' },
        }),
    })
    .then(response => response.json())
    .then(data => {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        currentAudio = new Audio(`data:audio/mp3;base64,${data.audioContent}`);
        currentAudio.play();
    })
    .catch(error => console.error('Error:', error));
}

// Univerzální funkce pro zastavení čtení nahlas
function stopAllReading() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }
}

// Definování SVG pro ikonu reproduktoru
const speakerIconSVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path class="speaker" d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
</svg>
`;

// Funkce pro inicializaci ikon reproduktoru
function initSpeakerIcons() {
    const speakerElements = document.querySelectorAll('.speaker');
    speakerElements.forEach(element => {
        const template = document.createElement('template');
        template.id = 'speaker-icon-template';
        template.innerHTML = speakerIconSVG;
        element.appendChild(template.content.cloneNode(true));
        element.addEventListener('click', readText);
    });
}

function setupStopAllButton() {
    const stopAllBtn = document.getElementById('stop-all-btn');
    if (stopAllBtn) {
        stopAllBtn.addEventListener('click', stopAllReading);
    }
}

// Funkce pro aktualizaci progress baru pro všechny přehrávače
function updateAllProgressBars() {
    document.querySelectorAll('.audio').forEach(audioContainer => {
        const player = audioContainer.querySelector('audio');
        const progress = audioContainer.querySelector('.progress');
        
        if (player && progress) {
            player.addEventListener('timeupdate', () => {
                if (player.duration > 0) {
                    const percent = (player.currentTime / player.duration) * 100;
                    progress.style.width = `${percent}%`;
                }
            });
        }
    });
}

// Funkce pro inicializaci Star Trek audio přehrávačů
function initStarTrekAudioPlayers() {
    starTrekPlayers.forEach(player => {
        const section = document.getElementById(player.id);
        if (!section) return;
        const audioContainer = section.querySelector('.audio');
        if (!audioContainer) return;
        const trackTitle = audioContainer.querySelector('.trackTitle');
        if (trackTitle) {
            trackTitle.textContent = player.title;
        }
        const audio = audioContainer.querySelector('audio');
        if (audio) {
            audio.src = player.src;
        }

        // Kontrola, zda už existují ovládací prvky
        if (!audioContainer.querySelector('.play-pause-btn')) {
            const playPauseBtn = document.createElement('button');
            playPauseBtn.textContent = 'Přehrát';
            playPauseBtn.classList.add('play-pause-btn');
            audioContainer.appendChild(playPauseBtn);

            playPauseBtn.addEventListener('click', () => {
                if (audio.paused) {
                    audio.play();
                    playPauseBtn.textContent = 'Pauza';
                } else {
                    audio.pause();
                    playPauseBtn.textContent = 'Přehrát';
                }
            });
        }

        if (!audioContainer.querySelector('.stop-btn')) {
            const stopBtn = document.createElement('button');
            stopBtn.textContent = 'Stop';
            stopBtn.classList.add('stop-btn');
            audioContainer.appendChild(stopBtn);

            stopBtn.addEventListener('click', () => {
                audio.pause();
                audio.currentTime = 0;
                audioContainer.querySelector('.play-pause-btn').textContent = 'Přehrát';
            });
        }

        if (!audioContainer.querySelector('.timeline')) {
            const timeline = document.createElement('div');
            timeline.classList.add('timeline');
            const progress = document.createElement('div');
            progress.classList.add('progress');
            timeline.appendChild(progress);
            audioContainer.appendChild(timeline);

            timeline.addEventListener('click', (event) => {
                const rect = timeline.getBoundingClientRect();
                const clickPosition = (event.clientX - rect.left) / rect.width;
                audio.currentTime = clickPosition * audio.duration;
            });
        }
    });
}

// Inicializace všech audio přehrávačů
document.addEventListener('DOMContentLoaded', () => {
    initStarTrekAudioPlayers();
    updateAllProgressBars();
});

// Funkce pro přidání efektu hover na sekce
function addHoverEffect() {
    const sections = document.querySelectorAll('.star-trek-section');
    sections.forEach(section => {
        section.addEventListener('mouseenter', () => {
            section.style.transform = 'scale(1.02)';
            section.style.boxShadow = '0 0 40px rgba(71, 169, 245, 0.5)';
        });
        section.addEventListener('mouseleave', () => {
            section.style.transform = 'scale(1)';
            section.style.boxShadow = '0 0 30px rgba(71, 169, 245, 0.3)';
        });
    });
}

// Volání funkce pro přidání efektu hover
addHoverEffect();

console.log('Star Trek audio přehrávače byly úspěšně inicializovány.');
  
document.addEventListener('DOMContentLoaded', function() {
    // Získání všech odkazů a sekcí
    const links = document.querySelectorAll('.nav a');
    const pages = document.querySelectorAll('.page');

    // Funkce pro zobrazení konkrétní sekce
    function showPage(targetId) {
        pages.forEach(page => {
            if (page.id === targetId) {
                page.classList.remove('hidden');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                page.classList.add('hidden');
            }
        });
    }

    // Přidání event listeneru pro každé tlačítko
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('data-page');
            showPage(targetId);
        });
    });

    // Volitelné: nastavení první sekce jako viditelné při načtení stránky
    if (pages.length > 0) {
        pages[0].classList.remove('hidden');
    }

    // Přidání event listeneru na tlačítka pro čtení nahlas
    document.querySelectorAll('.read-aloud-btn').forEach(button => {
        button.addEventListener('click', readText);
    });

    // Univerzální tlačítko pro zastavení čtení
    setupStopAllButton();

    // Inicializace ikon reproduktoru
    initSpeakerIcons();

    // Inicializace Star Trek audio přehrávačů
    initStarTrekAudioPlayers();

    var myCanvas = document.getElementById('myCanvas');
var ctx = myCanvas.getContext('2d');

myCanvas.width = innerWidth;
myCanvas.height = innerHeight;

window.onresize = function(){
  myCanvas.width = innerWidth;
  myCanvas.height = innerHeight;
};

var Star = function(){
  this.myX = Math.random() * innerWidth;
  this.myY = Math.random() * innerHeight;
  this.myColor = 0;
};

var xMod = 0;
var yMod = 0;
var warpSpeed = 0;

document.onkeydown = function(event) {
  if (!event)
    event = window.event;
  var code = event.keyCode;
  if (event.charCode && code == 0)
    code = event.charCode;
  switch(code) {
    case 32:
      warpSpeed = 1;
      break;
    case 37:
      xMod < 6 ? xMod += 0.3 : xMod = 6;
      break;
    case 38:
      yMod < 6 ? yMod += 0.3 : yMod = 6;
      break;
    case 39:
      xMod > -6 ? xMod -= 0.3 : xMod = -6;
      break;
    case 40:
      yMod > -6 ? yMod -= 0.3: yMod = -6;
      break;
  }
  event.preventDefault();
};
document.onkeyup = function(event) {
  if (!event)
    event = window.event;
  var code = event.keyCode;
  if (event.charCode && code == 0)
    code = event.charCode;
  switch(code) {
    case 32:
      warpSpeed = 0;
      break;
    case 37:
      xMod = 0;
      break;
    case 38:
      yMod = 0;
      break;
    case 39:
      xMod = 0;
      break;
    case 40:
      yMod = 0;
      break;
  }
  event.preventDefault();
};

document.addEventListener('touchstart', function(event){
  event.preventDefault();
  warpSpeed = 1;
},false);
document.addEventListener('touchend', function(){
  warpSpeed = 0;
},false);

Star.prototype.updatePos = function(){
  var speedMult = 0.02;
  if (warpSpeed) { speedMult = 0.090; }
  this.myX += xMod + (this.myX - (innerWidth/2)) * (speedMult);
  this.myY += yMod + (this.myY - (innerHeight/2)) * (speedMult);
  this.updateColor();
  
  if (this.myX > innerWidth || this.myX < 0) {
    this.myX = Math.random() * innerWidth;
    this.myColor = 0;
  }
  if (this.myY > innerHeight || this.myY < 0) {
    this.myY = Math.random() * innerHeight;
    this.myColor = 0;
  }
  
};

Star.prototype.updateColor = function(){
  if (this.myColor < 255) {
    this.myColor += 5;
  }
  else {
    this.myColor = 255;
  }
};

var starField = [];
var starCounter = 0;

while (starCounter < 20) {
  var newStar = new Star;
  starField.push(newStar);
  starCounter++;
}

function init() {
  myCanvas.focus();
  window.requestAnimationFrame(draw);
}

function draw(event) {
  if (warpSpeed == 0) {
    ctx.fillStyle = "rgba(0,0,0,0.2)";
    ctx.fillRect(0,0,innerWidth,innerHeight);
  }
  for (var i = 0; i < starField.length; i++) {
    ctx.fillStyle = "rgb(" + starField[i].myColor + "," + starField[i].myColor + "," + starField[i].myColor + ")";
    ctx.fillRect(starField[i].myX,starField[i].myY,starField[i].myColor / 128,starField[i].myColor / 128);
    starField[i].updatePos();
  }
  window.requestAnimationFrame(draw);
}

init();
});
        document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audioPlayer');
    const audioSource = document.getElementById('audioSource');
    const timeline = document.getElementById('audioTimeline');
    const progress = document.querySelector('#audioTimeline .progress');
    const trackTitle = document.getElementById('trackTitle'); // Element pro název písničky

    // Seznam skladeb s názvy a odkazy
    const tracks = [
        { src: 'https://www.dropbox.com/scl/fi/x0z9ddkz3zfqrvcnb6nr8/Odysea-Kapit-na-Ar-era-1.mp3?rlkey=mlav41qi6qe5ukss3q4qdd8f6&st=44y26ef2&dl=1', title: 'Odysea-Kapitána-Arčra' },
        { src: 'https://www.dropbox.com/scl/fi/hl4pp862wvlgd3kj2uixj/Hv-zdn-lo-sn.mp3?rlkey=uxfr6emv2h70v9blgmoily2ug&st=h40ynmje&dl=1', title: 'Hvězdná-Loď-snů' },
        { src: 'https://www.dropbox.com/scl/fi/7qsfzey00g0g05xe7k0gw/Kapit-n-Picard.mp3?rlkey=e08fflsut3k99tur8ew0xcvjj&st=naaxt96i&dl=1', title: 'Kapitán-Pikard' },
        { src: 'https://www.dropbox.com/scl/fi/w6jjzo8avh3rnd70gyva6/Stanice-Hlubok-Vesm-r-9.mp3?rlkey=sy23k7qogrbott7gmj5q7db2v&st=lcr4ygmh&dl=1', title: 'Stanice-Hluboký-Vesmír-9' },
        { src: 'https://www.dropbox.com/scl/fi/v6me6mzartct01ndzi722/jirka-a-ondra-jsou-nejlep-br-chov-Vysok-kvalita.mp3?rlkey=urg0junbwcdc6paqtutmttmpl&st=q1ppgp7y&dl=1', title:'Jirka-Ondra-jsou-nejlepší-bráchové' },
        
    ];

    let currentTrackIndex = 0;

    // Přidej tuto funkci k tlačítku pro přehrávání
function playTrack() {
    if (currentTrackIndex >= 0) {
        audioPlayer.play().catch(error => {
            console.error("Nelze přehrát:", error);
        });
    }
}

// Funkce pro načtení skladby
function loadTrack(index) { 
    if (index < 0 || index >= tracks.length) return;
    audioSource.src = tracks[index].src;
    audioPlayer.load();
    trackTitle.textContent = tracks[index].title; // Aktualizace názvu písničky
    currentTrackIndex = index;
}

document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.getElementById("play-button");
    playButton.addEventListener("click", function() {
        loadTrack(currentTrackIndex); // Načti aktuální skladbu
        playTrack(); // Přehrávej ji
    });
});

    

    function updateProgress() {
        const duration = audioPlayer.duration;
        const currentTime = audioPlayer.currentTime;
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = progressPercent + '%';
    }

    document.getElementById('prevButton').addEventListener('click', () => {
        if (currentTrackIndex > 0) {
            loadTrack(currentTrackIndex - 1);
        }
    });

    document.getElementById('nextButton').addEventListener('click', () => {
        if (currentTrackIndex < tracks.length - 1) {
            loadTrack(currentTrackIndex + 1);
        }
    });

    document.getElementById('playPauseButton').addEventListener('click', () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
            document.getElementById('playPauseButton').textContent = 'Pauza';
        } else {
            audioPlayer.pause();
            document.getElementById('playPauseButton').textContent = 'Přehrát';
        }
    });

    document.getElementById('stopButton').addEventListener('click', () => {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
        document.getElementById('playPauseButton').textContent = 'Přehrát';
    });

    // Automatické přehrání další písničky po skončení aktuální
    audioPlayer.addEventListener('ended', () => {
        if (currentTrackIndex < tracks.length - 1) {
            loadTrack(currentTrackIndex + 1); // Přehrát další písničku
        } else {
            loadTrack(0); // Když skončí poslední písnička, začít od první
        }
    });

    // Aktualizace časové osy během přehrávání
    audioPlayer.addEventListener('timeupdate', updateProgress);

    // Nastavení timeline na kliknutí
    timeline.addEventListener('click', (event) => {
        const rect = timeline.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const percent = (x / rect.width) * 100;
        progress.style.width = percent + '%';
        const seekTime = (percent / 100) * audioPlayer.duration;
        audioPlayer.currentTime = seekTime;
    });

    // Načtení první písničky při načtení stránky
    loadTrack(currentTrackIndex);
});
      
   // Aktualizovaná funkce pro přepínání na celou obrazovku
function toggleFullscreen() {
    console.log('Funkce toggleFullscreen byla zavolána');
    if (!document.fullscreenElement) {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen().catch(err => {
                console.error(`Chyba při přechodu do celé obrazovky: ${err.message}`);
            });
        } else if (document.documentElement.mozRequestFullScreen) { // Firefox
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari a Opera
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) { // Internet Explorer/Edge
            document.documentElement.msRequestFullscreen();
        } else {
            console.warn('Fullscreen API není podporováno v tomto prohlížeči');
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen().catch(err => {
                console.error(`Chyba při opuštění celé obrazovky: ${err.message}`);
            });
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { // Chrome, Safari a Opera
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // Internet Explorer/Edge
            document.msExitFullscreen();
        }
    }
}

// Aktualizovaná funkce pro aktualizaci ikony celé obrazovky
function updateFullscreenButtonIcon() {
    const fullscreenButton = document.getElementById('fullscreen-button');
    const fullscreenIcon = fullscreenButton.querySelector('.fullscreen-icon');
    if (document.fullscreenElement || 
        document.webkitFullscreenElement || 
        document.mozFullScreenElement ||
        document.msFullscreenElement) {
        fullscreenIcon.innerHTML = '&#x26F7;'; // Ikona pro ukončení režimu celé obrazovky
    } else {
        fullscreenIcon.innerHTML = '&#x26F6;'; // Ikona pro vstup do režimu celé obrazovky
    }
    console.log('Ikona celé obrazovky byla aktualizována');
}

// Přidání posluchačů událostí pro změny stavu celé obrazovky
document.addEventListener('fullscreenchange', updateFullscreenButtonIcon);
document.addEventListener('webkitfullscreenchange', updateFullscreenButtonIcon);
document.addEventListener('mozfullscreenchange', updateFullscreenButtonIcon);
document.addEventListener('MSFullscreenChange', updateFullscreenButtonIcon);

// Inicializace tlačítka pro celou obrazovku při načtení DOMu
document.addEventListener('DOMContentLoaded', function() {
    const fullscreenButton = document.getElementById('fullscreen-button');
    if (fullscreenButton) {
        fullscreenButton.addEventListener('click', toggleFullscreen);
        updateFullscreenButtonIcon();
    } else {
        console.error('Tlačítko pro celou obrazovku nebylo nalezeno');
    }
});
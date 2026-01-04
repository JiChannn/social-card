/* ═══════════════════════════════════════════════════════════
   NEEDY STREAMER OVERLOAD THEME - Social Card
   Interactive JavaScript
═══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all features
    initWindowControls();
    initPopupNotification();
    initVisitorCounter();
    initMusicPlayer();
    initGlitchEffect();
    initParallaxFloating();
    initEasterEggs();
});

/* ═══════════════════════════════════════════════════════════
   WINDOW CONTROLS (Title bar buttons)
═══════════════════════════════════════════════════════════ */

function initWindowControls() {
    const minimizeBtn = document.querySelector('.control-btn.minimize');
    const maximizeBtn = document.querySelector('.control-btn.maximize');
    const closeBtn = document.querySelector('.control-btn.close');
    const windowContainer = document.querySelector('.window-container');
    const windowContent = document.querySelector('.window-content');

    // Minimize effect
    minimizeBtn?.addEventListener('click', () => {
        windowContent.style.transition = 'all 0.3s ease';
        if (windowContent.style.maxHeight === '0px') {
            windowContent.style.maxHeight = 'none';
            windowContent.style.padding = '20px';
            windowContent.style.opacity = '1';
        } else {
            windowContent.style.maxHeight = '0px';
            windowContent.style.padding = '0 20px';
            windowContent.style.opacity = '0';
        }
    });

    // Maximize effect (toggle fullscreen-ish)
    maximizeBtn?.addEventListener('click', () => {
        windowContainer.classList.toggle('maximized');
        if (windowContainer.classList.contains('maximized')) {
            windowContainer.style.maxWidth = '100%';
            windowContainer.style.borderRadius = '0';
        } else {
            windowContainer.style.maxWidth = '500px';
            windowContainer.style.borderRadius = '12px';
        }
    });

    // Close effect (fun animation then redirect or hide)
    closeBtn?.addEventListener('click', () => {
        windowContainer.style.transition = 'all 0.5s ease';
        windowContainer.style.transform = 'scale(0.8) rotateX(20deg)';
        windowContainer.style.opacity = '0';
        
        setTimeout(() => {
            // Reset after animation (you can redirect here instead)
            windowContainer.style.transform = 'scale(1) rotateX(0)';
            windowContainer.style.opacity = '1';
            showPopup('You can\'t escape! ♡');
        }, 600);
    });
}

/* ═══════════════════════════════════════════════════════════
   POPUP NOTIFICATION SYSTEM
═══════════════════════════════════════════════════════════ */

function initPopupNotification() {
    // Show welcome popup after a delay
    setTimeout(() => {
        showPopup('Thanks for visiting! ♡');
    }, 2000);
}

function showPopup(message = 'Thanks for visiting!') {
    const popup = document.getElementById('popup');
    const popupText = popup?.querySelector('.popup-text');
    
    if (popup && popupText) {
        popupText.textContent = message;
        popup.classList.add('show');
        
        // Auto hide after 3 seconds
        setTimeout(() => {
            popup.classList.remove('show');
        }, 3000);
    }
}

/* ═══════════════════════════════════════════════════════════
   VISITOR COUNTER (VIRUS GLITCH EFFECT)
═══════════════════════════════════════════════════════════ */

function initVisitorCounter() {
    const counterDigits = document.querySelectorAll('.counter-digit');
    
    if (counterDigits.length === 0) return;
    
    // Glitch characters pool - corrupted data look
    const glitchChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 
                         '?', '!', '#', '%', '&', '@', '*', '█', '▓', '░', 
                         'X', 'E', 'R', '/', '\\', '|', '_', '¿', '×', '±'];
    
    const glitchColors = ['#ff6b9d', '#00d4ff', '#ff0000', '#39ff14', '#ff00ff', 
                          '#ffff00', '#ff4757', '#ffffff', '#00ff00'];
    
    // Set initial numbers
    const baseNumbers = ['E', 'R', 'R', '0', 'R', '!'];
    counterDigits.forEach((digit, index) => {
        digit.textContent = baseNumbers[index] || '0';
    });
    
    // AGGRESSIVE continuous glitch - very fast
    setInterval(() => {
        // Glitch 2-4 digits at once
        const numToGlitch = 2 + Math.floor(Math.random() * 3);
        
        for (let i = 0; i < numToGlitch; i++) {
            const randomIndex = Math.floor(Math.random() * counterDigits.length);
            const digit = counterDigits[randomIndex];
            
            // Random glitch character
            digit.textContent = glitchChars[Math.floor(Math.random() * glitchChars.length)];
            
            // Crazy colors
            const color = glitchColors[Math.floor(Math.random() * glitchColors.length)];
            digit.style.color = color;
            digit.style.textShadow = `0 0 10px ${color}, 0 0 20px ${color}`;
            
            // Quick restore
            setTimeout(() => {
                if (Math.random() > 0.3) {
                    digit.textContent = baseNumbers[randomIndex];
                    digit.style.color = '';
                    digit.style.textShadow = '';
                }
            }, 30 + Math.random() * 70);
        }
    }, 50); // Super fast - every 50ms
    
    // Full corruption burst
    setInterval(() => {
        if (Math.random() > 0.5) {
            // Full scramble
            counterDigits.forEach((digit, idx) => {
                digit.textContent = glitchChars[Math.floor(Math.random() * glitchChars.length)];
                const color = glitchColors[Math.floor(Math.random() * glitchColors.length)];
                digit.style.color = color;
                digit.style.textShadow = `0 0 20px ${color}`;
            });
            
            // Restore after chaos
            setTimeout(() => {
                counterDigits.forEach((digit, idx) => {
                    digit.textContent = baseNumbers[idx];
                    digit.style.color = '';
                    digit.style.textShadow = '';
                });
            }, 150);
        }
    }, 500);
    
    // Random "VIRUS DETECTED" flash
    setInterval(() => {
        if (Math.random() > 0.8) {
            counterDigits.forEach(digit => {
                digit.style.background = '#ff0000';
                digit.style.color = '#000';
            });
            setTimeout(() => {
                counterDigits.forEach(digit => {
                    digit.style.background = '';
                    digit.style.color = '';
                });
            }, 100);
        }
    }, 1000);
}

/* ═══════════════════════════════════════════════════════════
   SPOTIFY MUSIC PLAYER
   Add your favorite songs below!
═══════════════════════════════════════════════════════════ */

function initMusicPlayer() {
    // ═══════════════════════════════════════════════════════
    // 🎵 ADD YOUR FAVORITE SONGS HERE! 🎵
    // Format: { name, artist, src (audio URL), cover (image URL), duration }
    // You can use Spotify preview URLs or your own audio files
    // ═══════════════════════════════════════════════════════
    const playlist = [
        {
            name: "Cubism",
            artist: "OMGkawiiAngel, NEEDY GIRL OVERDOSE, Haraguchi Sasuke",
            // your own MP3 files
            src: "Music&CovArt/Cubism-WSSPlayground.mp3",
            cover: "Music&CovArt/CubismWSSPlayground.png",
            duration: "2:27"
        },
        {
            name: "Non-Reflection",
            artist: "Aiobahn, Yui Makino",
            src: "Music&CovArt/NonReflctionAiobahn.mp3",
            cover: "Music&CovArt/NonReflection_Aiobahn.png",
            duration: "3:44"
        },
        {
            name: "INTERNET YAMERO",
            artist: "Aiobahn +81 feat. KOTOKO",
            src: "Music&CovArt/Aiobahn+81feat.KOTOKO-INTERNET YAMEROAiobahn.mp3",
            cover: "Music&CovArt/INTERNETYAMERO.png",
            duration: "4:04"
        }
        // Add more songs here!
    ];
    
    // Player state
    let currentTrackIndex = 0;
    let isPlaying = false;
    let audio = new Audio();
    
    // DOM elements
    const playBtn = document.getElementById('play-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const progressBar = document.getElementById('progress-bar');
    const progressFill = document.getElementById('progress-fill');
    const timeCurrent = document.getElementById('time-current');
    const timeTotal = document.getElementById('time-total');
    const trackName = document.getElementById('track-name');
    const trackArtist = document.getElementById('track-artist');
    const albumCover = document.getElementById('album-cover');
    const volumeSlider = document.getElementById('volume-slider');
    const volumeIcon = document.querySelector('.volume-icon');
    const playlistContainer = document.getElementById('playlist');
    
    if (!playBtn) return;
    
    // Set initial volume (quiet start)
    audio.volume = 0.3;
    
    // Build playlist UI
    function buildPlaylist() {
        playlistContainer.innerHTML = '';
        playlist.forEach((track, index) => {
            const item = document.createElement('div');
            item.className = `playlist-item ${index === currentTrackIndex ? 'active' : ''}`;
            item.innerHTML = `
                <img src="${track.cover}" alt="${track.name}" class="playlist-item-img" 
                     onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect fill=%22%23ff6b9d%22 width=%22100%22 height=%22100%22/><text x=%2250%22 y=%2260%22 text-anchor=%22middle%22 fill=%22white%22 font-size=%2230%22>♪</text></svg>'">
                <div class="playlist-item-info">
                    <div class="playlist-item-name">${track.name}</div>
                    <div class="playlist-item-artist">${track.artist}</div>
                </div>
                <span class="playlist-item-duration">${track.duration}</span>
            `;
            item.addEventListener('click', () => {
                currentTrackIndex = index;
                loadTrack(index);
                playTrack();
            });
            playlistContainer.appendChild(item);
        });
    }
    
    // Load track
    function loadTrack(index) {
        const track = playlist[index];
        if (!track) return;
        
        audio.src = track.src;
        trackName.textContent = track.name;
        trackArtist.textContent = track.artist;
        albumCover.src = track.cover;
        
        // Update playlist active state
        document.querySelectorAll('.playlist-item').forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
        
        // Reset progress
        progressFill.style.width = '0%';
        timeCurrent.textContent = '0:00';
    }
    
    // Play
    function playTrack() {
        audio.play().then(() => {
            isPlaying = true;
            playBtn.textContent = '⏸';
        }).catch(err => {
            console.log('Playback failed:', err);
            // Autoplay blocked - user needs to interact first
        });
    }
    
    // Pause
    function pauseTrack() {
        audio.pause();
        isPlaying = false;
        playBtn.textContent = '▶';
    }
    
    // Play/Pause toggle
    playBtn.addEventListener('click', () => {
        if (isPlaying) {
            pauseTrack();
        } else {
            playTrack();
        }
    });
    
    // Previous track
    prevBtn.addEventListener('click', () => {
        currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
        loadTrack(currentTrackIndex);
        if (isPlaying) playTrack();
    });
    
    // Next track
    nextBtn.addEventListener('click', () => {
        currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
        loadTrack(currentTrackIndex);
        if (isPlaying) playTrack();
    });
    
    // Update progress bar
    audio.addEventListener('timeupdate', () => {
        if (audio.duration) {
            const percent = (audio.currentTime / audio.duration) * 100;
            progressFill.style.width = percent + '%';
            timeCurrent.textContent = formatTime(audio.currentTime);
            timeTotal.textContent = formatTime(audio.duration);
        }
    });
    
    // Click on progress bar to seek
    progressBar.addEventListener('click', (e) => {
        const rect = progressBar.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        audio.currentTime = percent * audio.duration;
    });
    
    // Auto play next track when current ends
    audio.addEventListener('ended', () => {
        currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
        loadTrack(currentTrackIndex);
        playTrack();
    });
    
    // Volume control
    volumeSlider.addEventListener('input', (e) => {
        const volume = e.target.value / 100;
        audio.volume = volume;
        updateVolumeIcon(volume);
    });
    
    // Click volume icon to mute/unmute
    volumeIcon.addEventListener('click', () => {
        if (audio.volume > 0) {
            audio.dataset.prevVolume = audio.volume;
            audio.volume = 0;
            volumeSlider.value = 0;
            volumeIcon.textContent = '🔇';
        } else {
            audio.volume = audio.dataset.prevVolume || 0.3;
            volumeSlider.value = audio.volume * 100;
            updateVolumeIcon(audio.volume);
        }
    });
    
    function updateVolumeIcon(volume) {
        if (volume === 0) {
            volumeIcon.textContent = '🔇';
        } else if (volume < 0.5) {
            volumeIcon.textContent = '🔉';
        } else {
            volumeIcon.textContent = '🔊';
        }
    }
    
    // Format time helper
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }
    
    // Initialize
    buildPlaylist();
    loadTrack(0);
    updateVolumeIcon(audio.volume);
}

/* ═══════════════════════════════════════════════════════════
   ENHANCED GLITCH EFFECT
═══════════════════════════════════════════════════════════ */

function initGlitchEffect() {
    const glitchText = document.querySelector('.glitch-text');
    
    if (!glitchText) return;
    
    // Random intense glitch effect
    setInterval(() => {
        if (Math.random() > 0.95) {
            glitchText.style.transform = `translate(${(Math.random() - 0.5) * 4}px, ${(Math.random() - 0.5) * 4}px)`;
            
            setTimeout(() => {
                glitchText.style.transform = 'translate(0, 0)';
            }, 50);
        }
    }, 100);
}

/* ═══════════════════════════════════════════════════════════
   PARALLAX FLOATING EFFECT
═══════════════════════════════════════════════════════════ */

function initParallaxFloating() {
    const floatItems = document.querySelectorAll('.float-item');
    
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        floatItems.forEach((item, index) => {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * speed * 20;
            const y = (mouseY - 0.5) * speed * 20;
            
            item.style.transform = `translate(${x}px, ${y}px)`;
        });
    });
}

/* ═══════════════════════════════════════════════════════════
   SOCIAL LINK CLICK TRACKING (Optional Analytics)
═══════════════════════════════════════════════════════════ */

document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('click', function(e) {
        const platform = this.classList[1]; // Gets the platform class
        console.log(`Clicked: ${platform}`);
        // Add your analytics tracking here
    });
});

/* ═══════════════════════════════════════════════════════════
   PROJECT CARD HOVER SOUND (Optional - needs audio file)
═══════════════════════════════════════════════════════════ */

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        // Uncomment and add your sound file path
        // const hoverSound = new Audio('sounds/hover.mp3');
        // hoverSound.volume = 0.3;
        // hoverSound.play();
    });
});

/* ═══════════════════════════════════════════════════════════
   STRESS METER INTERACTION
═══════════════════════════════════════════════════════════ */

const stressFill = document.querySelector('.stress-fill');
const stressValue = document.querySelector('.stress-value');

if (stressFill && stressValue) {
    // Random stress fluctuation
    setInterval(() => {
        const stress = 75 + Math.random() * 25;
        stressFill.style.width = `${stress}%`;
        
        if (stress > 90) {
            stressValue.textContent = 'MAX!!';
            stressValue.style.animation = 'blink 0.2s infinite';
        } else if (stress > 80) {
            stressValue.textContent = 'HIGH';
            stressValue.style.animation = 'none';
        } else {
            stressValue.textContent = 'OK';
            stressValue.style.animation = 'none';
        }
    }, 3000);
}

/* ═══════════════════════════════════════════════════════════
   EASTER EGG - Konami Code
═══════════════════════════════════════════════════════════ */

const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateSecretMode();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateSecretMode() {
    document.body.style.animation = 'rainbow 2s infinite';
    showPopup('SECRET MODE ACTIVATED! ★');
    
    // Add rainbow animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    // Reset after 10 seconds
    setTimeout(() => {
        document.body.style.animation = 'none';
    }, 10000);
}

/* ═══════════════════════════════════════════════════════════
   UTILITY: Add addon dynamically
   Usage: addAddon('Title', '<your html content>')
═══════════════════════════════════════════════════════════ */

function addAddon(title, content) {
    const addonsContainer = document.querySelector('.addons-container');
    
    if (!addonsContainer) return;
    
    const addon = document.createElement('div');
    addon.className = 'addon-box';
    addon.innerHTML = `
        <div class="addon-header">${title}</div>
        <div class="addon-content">${content}</div>
    `;
    
    addonsContainer.appendChild(addon);
}

/* ═══════════════════════════════════════════════════════════
   UTILITY: Add project dynamically
   Usage: addProject('icon', 'Title', 'Description', 'https://link.com')
═══════════════════════════════════════════════════════════ */

function addProject(icon, title, description, link = '#') {
    const projectsGrid = document.querySelector('.projects-grid');
    
    if (!projectsGrid) return;
    
    const project = document.createElement('a');
    project.href = link;
    project.className = 'project-card';
    project.innerHTML = `
        <div class="project-icon">${icon}</div>
        <div class="project-info">
            <h3>${title}</h3>
            <p>${description}</p>
        </div>
        <div class="project-arrow">→</div>
    `;
    
    projectsGrid.appendChild(project);
}

/* ═══════════════════════════════════════════════════════════
   UTILITY: Add social link dynamically
   Usage: addSocialLink('platform', 'Icon', 'Label', 'https://link.com')
═══════════════════════════════════════════════════════════ */

function addSocialLink(platform, icon, label, link = '#') {
    const socialLinks = document.querySelector('.social-links');
    
    if (!socialLinks) return;
    
    const socialLink = document.createElement('a');
    socialLink.href = link;
    socialLink.className = `social-link ${platform}`;
    socialLink.innerHTML = `
        <span class="link-icon">${icon}</span>
        <span class="link-text">${label}</span>
    `;
    
    socialLinks.appendChild(socialLink);
}

// Export utilities for external use
window.SocialCard = {
    showPopup,
    addAddon,
    addProject,
    addSocialLink
};

/* ═══════════════════════════════════════════════════════════
   EASTER EGGS 🥚
   Shh... secrets!
═══════════════════════════════════════════════════════════ */

function initEasterEggs() {
    // ═══════════════════════════════════════════════════════
    // 🎮 KONAMI CODE - ↑↑↓↓←→←→BA
    // ═══════════════════════════════════════════════════════
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 
                        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 
                        'b', 'a'];
    let konamiIndex = 0;
    let partyMode = false;

    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                konamiIndex = 0;
                activatePartyMode();
            }
        } else {
            konamiIndex = 0;
        }
    });

    function activatePartyMode() {
        if (partyMode) return;
        partyMode = true;
        
        showPopup('✧ PARTY MODE ACTIVATED ✧');
        
        // Add rainbow animation to body
        document.body.classList.add('party-mode');
        
        // Make floating items go crazy
        const floatItems = document.querySelectorAll('.float-item');
        floatItems.forEach(item => {
            item.style.animation = 'partyFloat 0.5s ease-in-out infinite';
            item.style.fontSize = '40px';
        });
        
        // Rainbow border on window
        const windowContainer = document.querySelector('.window-container');
        windowContainer.style.animation = 'rainbowBorder 1s linear infinite';
        
        // Disco avatar
        const avatar = document.querySelector('.avatar-frame');
        avatar.style.animation = 'discoAvatar 0.3s ease-in-out infinite';
        
        // Stop after 10 seconds
        setTimeout(() => {
            partyMode = false;
            document.body.classList.remove('party-mode');
            floatItems.forEach(item => {
                item.style.animation = '';
                item.style.fontSize = '';
            });
            windowContainer.style.animation = '';
            avatar.style.animation = 'avatarPulse 3s ease-in-out infinite';
            showPopup('Party\'s over... for now 😏');
        }, 10000);
    }

    // ═══════════════════════════════════════════════════════
    // 👆 CLICK AVATAR 7 TIMES - Secret message
    // ═══════════════════════════════════════════════════════
    let avatarClicks = 0;
    let avatarClickTimer = null;
    const avatar = document.querySelector('.avatar-frame');
    const secretMessages = [
        'Stop poking me! >_<',
        'I\'m not a button!',
        'Okay okay you found me~',
        '♡ You\'re persistent! ♡',
        'Here\'s a secret: I like you!',
        'ᕦ(ò_óˇ)ᕤ STAHP',
        '(づ￣ ³￣)づ Fine, have a hug'
    ];

    avatar?.addEventListener('click', () => {
        avatarClicks++;
        clearTimeout(avatarClickTimer);
        
        // Add bounce effect
        avatar.style.transform = 'scale(0.9)';
        setTimeout(() => avatar.style.transform = '', 100);
        
        if (avatarClicks >= 7) {
            const randomMsg = secretMessages[Math.floor(Math.random() * secretMessages.length)];
            showPopup(randomMsg);
            avatarClicks = 0;
            
            // Special spin animation
            avatar.style.animation = 'secretSpin 0.5s ease-out';
            setTimeout(() => {
                avatar.style.animation = 'avatarPulse 3s ease-in-out infinite';
            }, 500);
        }
        
        avatarClickTimer = setTimeout(() => {
            avatarClicks = 0;
        }, 2000);
    });

    // ═══════════════════════════════════════════════════════
    // 😰 CLICK STRESS METER - Goes crazy!
    // ═══════════════════════════════════════════════════════
    const stressMeter = document.querySelector('.stress-meter');
    const stressFill = document.querySelector('.stress-fill');
    const stressValue = document.querySelector('.stress-value');
    const stressStates = ['MAX', 'OVERLOAD!!', '∞', 'HELP', '💀', 'AAAAAA', 'IM FINE', '999%'];
    let stressClickCount = 0;

    stressMeter?.addEventListener('click', () => {
        stressClickCount++;
        
        // Random stress state
        stressValue.textContent = stressStates[Math.floor(Math.random() * stressStates.length)];
        
        // Shake the meter
        stressMeter.style.animation = 'stressShake 0.1s ease-in-out';
        setTimeout(() => stressMeter.style.animation = '', 100);
        
        // Fill goes crazy
        const randomWidth = 80 + Math.random() * 20;
        stressFill.style.width = randomWidth + '%';
        
        // Change colors randomly
        const colors = ['#ff4757', '#ff6b9d', '#ffd93d', '#ff00ff', '#00ff00'];
        stressFill.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        if (stressClickCount >= 5) {
            showPopup('STRESS LEVEL: YES');
            stressClickCount = 0;
            
            // Full explosion
            stressFill.style.width = '150%';
            stressFill.style.background = 'linear-gradient(90deg, #ff0000, #ff00ff, #00ffff, #ffff00)';
            
            setTimeout(() => {
                stressFill.style.width = '85%';
                stressFill.style.background = '';
                stressValue.textContent = 'MAX';
            }, 2000);
        }
    });

    // ═══════════════════════════════════════════════════════
    // 💻 CLICK SYSTEM STATUS - Cycles through funny states
    // ═══════════════════════════════════════════════════════
    const systemStatus = document.querySelector('.system-text');
    const statusOk = document.querySelector('.status-ok');
    const statuses = [
        { text: 'OK', color: '#39ff14' },
        { text: 'MAYBE', color: '#ffd93d' },
        { text: 'VIBING', color: '#ff6b9d' },
        { text: 'GAMING', color: '#9146ff' },
        { text: 'SLEEPY', color: '#00d4ff' },
        { text: 'HUNGRY', color: '#ff4757' },
        { text: 'CHAOS', color: '#ff00ff' },
        { text: '404', color: '#ff0000' },
        { text: 'BASED', color: '#39ff14' },
        { text: 'BUSSIN', color: '#ffd93d' }
    ];
    let statusIndex = 0;

    systemStatus?.addEventListener('click', () => {
        statusIndex = (statusIndex + 1) % statuses.length;
        const newStatus = statuses[statusIndex];
        
        statusOk.textContent = newStatus.text;
        statusOk.style.color = newStatus.color;
        statusOk.style.textShadow = `0 0 5px ${newStatus.color}, 0 0 10px ${newStatus.color}`;
        
        // Little bounce
        systemStatus.style.transform = 'scale(1.1)';
        setTimeout(() => systemStatus.style.transform = '', 150);
    });

    // ═══════════════════════════════════════════════════════
    // 🎹 SECRET WORD - Type "ame" for a surprise
    // ═══════════════════════════════════════════════════════
    let secretWord = '';
    document.addEventListener('keydown', (e) => {
        secretWord += e.key.toLowerCase();
        
        // Keep only last 10 characters
        if (secretWord.length > 10) {
            secretWord = secretWord.slice(-10);
        }
        
        if (secretWord.includes('ame')) {
            secretWord = '';
            showPopup('✧ You know the secret! ✧');
            
            // Sparkle effect on avatar
            const avatar = document.querySelector('.avatar-frame');
            avatar.style.boxShadow = '0 0 30px #ff6b9d, 0 0 60px #ff6b9d, 0 0 90px #ff6b9d';
            setTimeout(() => {
                avatar.style.boxShadow = '';
            }, 2000);
        }
        
        if (secretWord.includes('love')) {
            secretWord = '';
            showPopup('♡♡♡ I love you too! ♡♡♡');
        }
    });
}

// Add party mode CSS dynamically
const partyStyles = document.createElement('style');
partyStyles.textContent = `
    @keyframes rainbowBorder {
        0% { border-color: #ff0000; box-shadow: 0 0 30px #ff0000; }
        17% { border-color: #ff8800; box-shadow: 0 0 30px #ff8800; }
        33% { border-color: #ffff00; box-shadow: 0 0 30px #ffff00; }
        50% { border-color: #00ff00; box-shadow: 0 0 30px #00ff00; }
        67% { border-color: #0088ff; box-shadow: 0 0 30px #0088ff; }
        83% { border-color: #ff00ff; box-shadow: 0 0 30px #ff00ff; }
        100% { border-color: #ff0000; box-shadow: 0 0 30px #ff0000; }
    }
    
    @keyframes partyFloat {
        0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
        25% { transform: translateY(-30px) rotate(90deg) scale(1.5); }
        50% { transform: translateY(0) rotate(180deg) scale(1); }
        75% { transform: translateY(30px) rotate(270deg) scale(1.5); }
    }
    
    @keyframes discoAvatar {
        0% { transform: rotate(-5deg) scale(1.05); filter: hue-rotate(0deg); }
        50% { transform: rotate(5deg) scale(0.95); filter: hue-rotate(180deg); }
        100% { transform: rotate(-5deg) scale(1.05); filter: hue-rotate(360deg); }
    }
    
    @keyframes secretSpin {
        0% { transform: rotate(0deg) scale(1); }
        50% { transform: rotate(180deg) scale(1.2); }
        100% { transform: rotate(360deg) scale(1); }
    }
    
    @keyframes stressShake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
    
    .party-mode {
        animation: partyBackground 2s linear infinite;
    }
    
    @keyframes partyBackground {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(partyStyles);

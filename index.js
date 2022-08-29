    function play() {
        if(video.paused) {
            video.play();
            document.getElementById('btn-play').innerHTML = '❚ ❚';
        } else {
            video.pause();
            document.getElementById('btn-play').innerHTML = '►';
        }
    }

    function skip() {
        video.currentTime += 10;
        console.log(video.currentTime);
    }

    function rewind() {
        video.currentTime -= 10;
    }

    function volumeUp() {
        video.volume += 0.1;
        document.getElementById('volumee').innerHTML = "Volume:" +" " + Math.floor(video.volume *100); 
    }

    function volumeDown() {
        video.volume -= 0.1;
        document.getElementById('volumee').innerHTML = "Volume:" +" " +Math.floor(video.volume *100); 
    }

    let a = video.volume;

    function mute() {
        if (video.volume != 0) {
            video.volume = 0;
            document.getElementById('volumee').innerHTML = "Volume:" +" " + "0";
        } else {
            video.volume = a ;
            document.getElementById('volumee').innerHTML = "Volume:" +" " + Math.floor(a *100);
        }
    }

    video.addEventListener('timeupdate', () => {
        let percent = (video.currentTime / video.duration) * 100;
        progress.style.width = `${percent}%`;
    })




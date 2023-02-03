const container=document.getElementById('container')
const audio=document.getElementById('audio')
const cover=document.getElementById('cover')
const title=document.getElementById('title')
const start=document.getElementById('start')
const end=document.getElementById('end')
const progressContainer=document.getElementById('progress-container')
const progress=document.getElementById('progress')

const prevBtn=document.getElementById('prev')
const playBtn=document.getElementById('play')
const nextBtn=document.getElementById('next')
const volume=document.getElementById('volume')
const bars=document.getElementById('bars')
const menu=document.querySelector('.menu')

const music1=document.getElementById('music1')
const music2=document.getElementById('music2')
const music3=document.getElementById('music3')
const music4=document.getElementById('music4')

const exit=document.getElementById('exit')


//music names

const songs=[
    'Heather - Conan Gray',
    'Orxan - Unutmak Istiyorum',
    'Billie Eilish - Lovely',
    'Rauf Faik - метро'
]

//songIndex

let songIndex = 0

loadSong(songs[songIndex])

function loadSong(song){
    title.textContent=song
    audio.src = `musics/${song}.mp3`
    cover.src = `img/${song}.jpg`
}

function playSong(){
    container.classList.add('play')
    playBtn.innerHTML = `<i class="fas fa-pause"></i>`
    audio.play()
}

function pouseSong(){
    container.classList.remove('play')
    playBtn.innerHTML = `<i class="fas fa-play"></i>`
    audio.pause()
}

function nextMusic(){
    songIndex++
    if(songIndex > songs.length-1){
        songIndex = 0
    }
    loadSong(songs[songIndex])
    audio.play()
    playBtn.innerHTML = `<i class="fas fa-pause"></i>`  
}

function prevMusic(){
    songIndex--
    if(songIndex < 0){
        songIndex = songs.length-1
    }
    loadSong(songs[songIndex])
    audio.play()
}

function progess(e) {
    const duration = e.srcElement.duration //qo'shiq davomiyligi
    const curTime = e.srcElement.currentTime //ayni vaqtdagi vaqti
    const presentageWidth = (curTime/duration)*100
    progress.style.width= `${presentageWidth}%`

    //end time
    let endMinutes = parseInt(duration / 60)
    let endSecondes = parseInt(duration % 60)

    end.textContent= `${endMinutes}:${(endSecondes = endSecondes <10 ? '0' + endSecondes:endSecondes)}`

    // console.log(endMinutes);
    // if(endMinutes='NaN'){
    //     end.textContent='00:00'
    // }
    // else{
    //     end.textContent= `${endMinutes}:${(endSecondes = endSecondes <10 ? '0' + endSecondes:endSecondes)}`
    // }

    //start time
    let startMinutes = parseInt(curTime / 60)
    let startSecondes = parseInt(curTime % 60)
    start.textContent = `${startMinutes = startMinutes < 10? '0'+ startMinutes : startMinutes}:${(startSecondes = startSecondes <10 ? '0' + startSecondes:startSecondes)}`

}

function setProgress(e) {
    const width=this.clientWidth
    const widthX = e.offsetX
    const duration = audio.duration
    audio.currentTime = (widthX/width)*duration
}

function changeVolume(e){
    const valueMusic= +volume.value / +volume.max
    audio.volume=valueMusic
}

function menuMusics(){
    menu.classList.toggle("musics")
}

music1.addEventListener('click', () =>{
    songIndex = 0  
    loadSong(songs[songIndex])
    audio.play()
    playBtn.innerHTML = `<i class="fas fa-pause"></i>`
    container.classList.add('play')
})
music2.addEventListener('click', () =>{
    songIndex = 1  
    loadSong(songs[songIndex])
    audio.play()
    playBtn.innerHTML = `<i class="fas fa-pause"></i>`
    container.classList.add('play')
})
music3.addEventListener('click', () =>{
    songIndex = 2  
    loadSong(songs[songIndex])
    audio.play()
    playBtn.innerHTML = `<i class="fas fa-pause"></i>`
    container.classList.add('play')
})
music4.addEventListener('click', () =>{
    songIndex = 3  
    loadSong(songs[songIndex])
    audio.play()
    playBtn.innerHTML = `<i class="fas fa-pause"></i>`
    container.classList.add('play')
})
exit.addEventListener('click', ()=>{
    menu.classList.remove("musics")
})

//addeventlistener/////////////////////

playBtn.addEventListener("click", function(){
    const isPlaying = container.classList.contains('play')

    if(isPlaying){
        pouseSong() 
    }
    else{
        playSong()
    }
})

nextBtn.addEventListener('click', nextMusic)
prevBtn.addEventListener('click', prevMusic)
audio.addEventListener('timeupdate', progess)
audio.addEventListener('ended', nextMusic)
progressContainer.addEventListener('click', setProgress)
volume.addEventListener('input', changeVolume)
bars.addEventListener('click', menuMusics)
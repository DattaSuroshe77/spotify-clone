

let songIndex =0;
let audioElement = new Audio('songs/6.m4a');
let masterPlay = document.getElementById('masterPlay');
let myprogressBar = document.getElementById('myprogressBar');
let gif =document.getElementById('gif');
let masterSongName =document.getElementById('masterSongName');
let songItem =Array.from(document.getElementsByClassName('songItem'));




let song=[
    {songName : "Ankho me Basa Lunga",filePath:"songs/2.m4a",coverPath:"covers/2.webp"},
    {songName :  "Bom Chiki bam",filePath:"songs/3.m4a",coverPath:"covers/3.jpg"}, 
    {songName :"Pal Pal Dil ke pass",filePath:"songs/4.m4a",coverPath:"covers/4.webp"},
    {songName : "Shayad kabhi na keh",filePath:"songs/5.m4a",coverPath:"covers/5.webp"},
    {songName : "Kakan Marathi song",filePath:"songs/6.m4a",coverPath:"covers/6.webp"},
    {songName : "SRK Love Song",filePath:"songs/1.m4a",coverPath:"covers/1.jpg"}, 
    {songName : "Dil",filePath:"songs/8.m4a",coverPath:"covers/8.webp"},
    {songName : "Har Kisi ko nhi milta",filePath:"songs/9.m4a",coverPath:"covers/9.webp"},
    {songName : "Kakan",filePath:"songs/7.m4a",coverPath:"covers/7.jpg"},
    {songName : "Apna Bana le",filePath:"songs/10.m4a",coverPath:"covers/10.jpg"}, 

]
songItem.forEach((Element,i)=>{
   
    Element.getElementsByTagName("img")[0].src = song[i].coverPath
    Element.getElementsByClassName("songName")[0].innerText =song[i].songName
})

// audioElement.play();

// handel play

masterPlay.addEventListener('click', ()=>{
if(audioElement.paused || audioElement.currentTime<= 0){
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    gif.style.opacity=1;
    
}
else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause');
    masterPlay.classList.add('fa-play');
    gif.style.opacity=0;
    makeallPlay();
    
    
}
}); 


audioElement.addEventListener('timeupdate', ()=>{
     progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
     myprogressBar.value= progress;
});

myprogressBar.addEventListener('change',()=>{
    audioElement.currentTime= myprogressBar.value * audioElement.duration/100;
});

const makeallPlay= ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');

    })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallPlay();
        songIndex =parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        masterSongName.innerText=song[songIndex-1].songName;
        audioElement.src = `songs/${songIndex+1}.m4a`;
        audioElement.currentTime=0
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        


    })

});

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0
    }
    else{
        songIndex +=1;
    }
        audioElement.src = `songs/${songIndex+1}.m4a`;
        masterSongName.innerText=song[songIndex-1].songName;
        audioElement.currentTime=0
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        
        
      
      
    
});
document.getElementById('back').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
       
    }
    else{
        songIndex -=1;
    }
        audioElement.src = `songs/${songIndex+1}.m4a`;
        audioElement.currentTime=0
        masterSongName.innerText=song[songIndex-1].songName;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        
       
        
    
});

let bar = document.getElementsByClassName('active');
let nav = document.querySelector('nav');


   
        bar.addEventListener('click', ()=>{
            nav.classList.add('active');
            
        })
    
   
    

document.getElementById('welcome').addEventListener('mouseover', ()=>{
    document.getElementById('welcome').style.backgroundColor = 'white';
})

document.getElementById('welcome').addEventListener('mouseout', ()=>{
    document.getElementById('welcome').style.backgroundColor = 'rgb(215, 215, 290)';
})

document.getElementById('workexperience').addEventListener('mouseover', ()=>{
    document.getElementById('workexperience').style.backgroundColor = 'white';
})

document.getElementById('workexperience').addEventListener('mouseout', ()=>{
    document.getElementById('workexperience').style.backgroundColor = 'rgb(215, 215, 290)';
})

document.getElementById('technicalskills').addEventListener('mouseover', ()=>{
    document.getElementById('technicalskills').style.backgroundColor = 'white';
})

document.getElementById('technicalskills').addEventListener('mouseout', ()=>{
    document.getElementById('technicalskills').style.backgroundColor = 'rgb(215, 215, 290)';
})

document.getElementById('softskills').addEventListener('mouseover', ()=>{
    document.getElementById('softskills').style.backgroundColor = 'white';
})

document.getElementById('softskills').addEventListener('mouseout', ()=>{
    document.getElementById('softskills').style.backgroundColor = 'rgb(215, 215, 290)';
})

document.getElementById('projects').addEventListener('mouseover', ()=>{
    document.getElementById('projects').style.backgroundColor = 'white';
})

document.getElementById('projects').addEventListener('mouseout', ()=>{
    document.getElementById('projects').style.backgroundColor = 'rgb(215, 215, 290)';
})

let interval = setInterval(function(){
    let countForVideo = document.getElementById('video').readyState;
    if(countForVideo == 4)
    {
        document.getElementById('video').play();
        clearInterval(interval);
    }
}, 2000);
let taskbarTimer;
let taskbarCount;
let timer;
let previousEvent;
let currentEvent;
let blurCheck = false;
const resumeLink = document.querySelector('#resumeLink');
const fishLink = document.querySelector('#fishLink');
const webLink = document.querySelector('#webLink');
const crtLink = document.querySelector('#crtLink ');
const retractAnimation = document.querySelector('.dropdown ');
const projectTabLink = document.querySelector('#projectTab');
const resumeTabLink = document.querySelector('#resumeTab');
const aboutMeTabLink = document.querySelector('#aboutMeTab');
const taskbarButtons = document.querySelector('.taskbarButtons');
const taskbarBlur = document.querySelector('#taskbarBlur');

function colorWhite(id,){
    id.style.color = 'rgb(255, 255, 255)';
}

function tabHighlight(string, id){

if (string === currentEvent){
id.style.color = 'rgb(153, 153, 153)';
}

if (string !== currentEvent){
    colorWhite(id);
};

if (retractAnimation.addEventListener('mouseleave', () => {
    colorWhite(id);
}));
if (taskbarButtons.addEventListener('mouseleave', () => {
    colorWhite(id);
}));
if (id === projectTabLink){
    colorWhite(resumeTabLink);
    colorWhite(aboutMeTabLink);
}

if (id === resumeTabLink){
    colorWhite(projectTabLink);
    colorWhite(aboutMeTabLink);
}

if (id === aboutMeTabLink){
    colorWhite(projectTabLink);
    colorWhite(resumeTabLink);
}
}

function opacityFade(id) {
   
    id.style.opacity = 0;
    id.style.animation = 'opacityFadeIn 0.3s ease .15s';
    id.style.display = 'block';
  
    timer = setTimeout(() => {
        id.style.opacity = 1;
   
    }, 445);
}

function blurExpand(id){
    
        taskbarBlur.style.animation = 'blurExpand 0.4s ease 0.2s normal forwards';
     
   

}
function blurRetract(id){
    id.style.animation = 'none';
    id.style.display = 'block';
    id.style.pointerEvents = 'none';
    if (lols === true){
   id.style.animation = 'blurRetract 0.2s ease .2s normal forwards'; 
   
 }
 clearTimeout(blurTimer);
 lols = false;
}
function animationEnter(id){
 
    id.style.opacity = 0;
    id.style.animation = 'scaleDownFromTop 0.4s ease 0.2s normal forwards';
    id.style.display = 'block';
    id.style.pointerEvents = 'auto';
    
}

function animationExit(id){
   
    id.style.animation = 'none';
    id.style.opacity = 0;
    id.style.pointerEvents = 'none';
    if (taskbarCount === true){
        id.style.animation = 'scaleTopFromDown .2s ease .2s normal forwards';
        id.style.opacity = 1;
    }
    clearTimeout(taskbarTimer); 
    taskbarCount = false; 
}

document.querySelector('.taskbarButtons').addEventListener('mouseenter', () => {
    blurExpand(taskbarBlur);
    blurTimer = setTimeout(() => {
        lols = true;
   
    }, 500);
   
});
document.querySelector('#taskbarBlur').addEventListener('animationend', (event) => {
    blurTimer = setTimeout(() => {
        if (event.animationName === 'blurExpand') {
            taskbarBlur.style.height = '200px';
          
          }
          else if (event.animationName !== 'blurExpand') {
              taskbarBlur.style.height = '50px';
              taskbarBlur.style.animation = 'none';
          }
   
    }, 10);
   
    
});

document.querySelector('.taskbarButtons').addEventListener('mouseleave', () => {
 
  
  
    blurRetract(taskbarBlur);
    taskbarBlur.style.pointerEvents = 'none';
    

});


document.querySelector('.taskbarButtons').addEventListener('mouseenter', () => {
   
   animationEnter(retractAnimation);

    taskbarTimer = setTimeout(() => {
        taskbarCount = true;
   
    }, 500);
});

document.querySelector('.taskbarButtons').addEventListener('mouseleave', () => {
    
    animationExit(retractAnimation);
    
    taskbarTimer = setTimeout(() => {
     
    }, 400);
});

document.querySelector('#projectTab').addEventListener('mouseenter', () => {
   currentEvent = 'projectTab';

   tabHighlight('projectTab', projectTab);
   if (previousEvent !== 'projectTab'){
   crtLink.style.display = 'none';
   opacityFade(webLink);
   opacityFade(fishLink);
   resumeLink.style.display = 'none';
   previousEvent = 'projectTab';
    }
    else if (previousEvent === 'projectTab'){
        return 0;
    }
});

document.querySelector('#resumeTab').addEventListener('mouseenter', () => {
   
    currentEvent = 'resumeTab';
    tabHighlight('resumeTab', resumeTab);
    if (previousEvent !== 'resumeTab'){
    crtLink.style.display = 'none';
    webLink.style.display = 'none';
    fishLink.style.display = 'none';
    opacityFade(resumeLink);
    previousEvent = 'resumeTab';
    }
    else if (previousEvent === 'resumeTab'){
        return 0;
    }
});

document.querySelector('#aboutMeTab').addEventListener('mouseenter', () => {
   
    currentEvent = 'aboutMeTab';
    tabHighlight('aboutMeTab', aboutMeTab)
    if (previousEvent !== 'aboutMeTab'){
    opacityFade(crtLink);
    webLink.style.display = 'none';
    fishLink.style.display = 'none';
    resumeLink.style.display = 'none';
    previousEvent = 'aboutMeTab';
    }
    else if (previousEvent === 'aboutMeTab'){
        return 0;
    }
});

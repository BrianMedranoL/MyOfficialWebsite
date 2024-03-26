let taskbarTimer;
let taskbarCount;
let timer;
let previousEvent;
let currentEvent;

const resumeLink = document.querySelector('#resumeLink');
const fishLink = document.querySelector('#fishLink');
const webLink = document.querySelector('#webLink');
const crtLink = document.querySelector('#crtLink ');
const retractAnimation = document.querySelector('.dropdown ');
const projectTabLink = document.querySelector('#projectTab');
const resumeTabLink = document.querySelector('#resumeTab');
const aboutMeTabLink = document.querySelector('#aboutMeTab');
const taskbarButtons = document.querySelector('.taskbarButtons')
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

function animationEnter(){
 
    retractAnimation.style.opacity = 0;
    retractAnimation.style.animation = 'scaleDownFromTop 0.4s ease 0.2s normal forwards';
    retractAnimation.style.display = 'block';
    retractAnimation.style.pointerEvents = 'auto';
    
}

function animationExit(){
   
    retractAnimation.style.animation = 'none';
    retractAnimation.style.opacity = 0;
    retractAnimation.style.pointerEvents = 'none';
    if (taskbarCount === true){
        retractAnimation.style.animation = 'scaleTopFromDown .2s ease .2s normal forwards';
        retractAnimation.style.opacity = 1;
    }
    clearTimeout(taskbarTimer); 
    taskbarCount = false; 
}

document.querySelector('.taskbarButtons').addEventListener('mouseenter', () => {
   
   animationEnter();

    taskbarTimer = setTimeout(() => {
        taskbarCount = true;
   
    }, 500);
});

document.querySelector('.taskbarButtons').addEventListener('mouseleave', () => {
    
    animationExit();
    
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

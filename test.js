const blur = document.querySelector('.moron');

document.querySelector('.moron').addEventListener('mouseenter', () => {
    blur.style.animation = 'grow 0.2s ease 0s';
    blur.style.height = '100px'
   
});

document.querySelector('.moron').addEventListener('mouseleave', () => {
blur.style.animation = 'shrink 0.2s ease 0s';
blur.style.height = '50px' 
       
          
});
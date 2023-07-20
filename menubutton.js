const magicButton = document.querySelector(".magic-button");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 1) {
    magicButton.style.display = "block";
    magicButton.style.animationName = "popUpAnimation";
  } else {
    magicButton.style.animationName = "popOffAnimation";
    setTimeout(() => {
      magicButton.style.display = "none";
    }, 200);
  }
});

const magicButton2 = document.querySelector('.magic-button');
const topBar = document.querySelector('.top-bar');
const bottomBar = document.querySelector('.bottom-bar');
const whymagic =document.querySelector('.why-magic');
let rotated = false;

magicButton2.addEventListener('click', () => {
  if (!rotated) {
    whymagic.style.gap=`0px`;
    bottomBar.style.backgroundColor=`white`;
    topBar.style.transform = 'rotate(-45deg)';
    bottomBar.style.transform = 'rotate(45deg)';
    magicButton2.style.backgroundColor=`#455ce9`;

  } else {
    whymagic.style.gap=`6.5px`;
    bottomBar.style.backgroundColor=`gray`;
    topBar.style.transform = 'none';
    bottomBar.style.transform = 'none';
    magicButton2.style.backgroundColor=`#1d1e20`;
  }

  rotated = !rotated;
});

const magicButton4 = document.getElementById('magicButton');
const whyb=document.getElementById('whymagicc');
    const zaBox = document.querySelector('.za-box');

    zaBox.addEventListener('mouseenter', () => {
        magicButton4.classList.add('quick-movement');
        whyb.classList.add('quick-movement');
    });

    magicButton4.addEventListener('mousemove', (event) => {
        const zaBoxRect = magicButton4.getBoundingClientRect();
        const zaBoxCenterX = zaBoxRect.left + zaBoxRect.width/2 ;
        const zaBoxCenterY = zaBoxRect.top + zaBoxRect.height/2 ;
        
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        
        const deltaX = mouseX - zaBoxCenterX;
        const deltaY = mouseY - zaBoxCenterY;
        
        magicButton4.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        whyb.style.transform=`translate(${deltaX/2}px,${deltaY/2}px)`;
    });

    magicButton4.addEventListener('mouseleave', () => {
        magicButton4.style.transform = 'translate(0, 0)';
        magicButton4.classList.remove('quick-movement');
        whyb.classList.remove(`quick-movement`);
        whyb.style.transform=`translate(0,0)`;
    });
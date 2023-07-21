const magicButton = document.querySelector(".magic-button");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 1) {
    magicButton.style.display = "block";
    magicButton.style.animationName = "popUpAnimation";
  } else {
    magicButton.style.animationName = "popOffAnimation";
    setTimeout(() => {
      magicButton.style.display = "none";
    }, 250);
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
    const whyMagic = document.getElementById('whymagicc');

    const range=2;
    const ranger=3;

    magicButton4.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const magicRect = magicButton4.getBoundingClientRect();
      const magicCenterX = magicRect.left + magicRect.width / 2;
      const magicCenterY = magicRect.top + magicRect.height / 2;

      const offsetX = (mouseX - magicCenterX) / range;
      const offsetY = (mouseY - magicCenterY) / range;

      const offseterX = (mouseX - magicCenterX) / ranger;
      const offseterY = (mouseY - magicCenterY) / ranger;


      magicButton4.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      whyMagic.style.transform = `translate(${offseterX}px, ${offseterY}px)`;
    });

    magicButton.addEventListener('mouseleave', () => {
      magicButton4.style.transform = 'translate(0, 0)';
      whyMagic.style.transform = 'translate(0, 0)';
    });

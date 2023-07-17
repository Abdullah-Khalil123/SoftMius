window.addEventListener('scroll',function() {
    var top = this.document.querySelector('.header');
    var scroll = this.window.scrollY;

    if(scroll > 0) {
        top.classList.add('small');
    }
    else{
        top.classList.remove('small');
    }
});
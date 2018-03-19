const nav = document.querySelector('#emain');
const topOfNav = nav.offsetTop;

function fixnav() {
    console.log(topOfNav, window.scrollY);
    if ( window.scrollY >= topOfNav ) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixnavs');
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixnavs');
    }
}

window.addEventListener('scroll', fixnav);

const mobileNav = () => {

    const headerBtn = document.querySelector('.header__bars');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link');
    
    let isMobileNavOpen = false;
    
    headerBtn.addEventListener('click', () => {
        if(isMobileNavOpen) {
            closeNav();
        } 
        else {

            mobileNav.style.display = "flex";    
            document.body.style.overflowY = 'hidden';
        }
        isMobileNavOpen = !isMobileNavOpen;
    })

    mobileLinks.forEach((link) => {
        link.addEventListener('click', () => 
        {
            closeNav();
        })
    })

    function closeNav() {
        mobileNav.style.display = 'none'
        document.body.style.overflowY = 'auto';
    }
}

export default mobileNav;
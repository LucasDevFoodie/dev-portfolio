export const mobileNav = () => {
    const headerBtn = document.querySelector('.header__bars');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav__link');
    
    let isMobileNavOpen = false;
    
    headerBtn.addEventListener('click', () => {
        isMobileNavOpen = !isMobileNavOpen;
        if(isMobileNavOpen) {
            mobileNav.style.display = "flex";    
            document.body.style.overflowY = 'hidden';
        } 
        else {
            closeNav();
        }
    })

    mobileLinks.forEach((link) => {
        link.addEventListener('click', () => 
        {
            isMobileNavOpen = false;
            closeNav();
        })
    })

    function closeNav() {
        mobileNav.style.display = 'none'
        document.body.style.overflowY = 'auto';
    }
}
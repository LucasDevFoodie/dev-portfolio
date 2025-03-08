export const modal = () => {
    const dialog = document.querySelector(".dialog");
    const closeButton = document.querySelector(".dialog__btn-close");
    if(window.matchMedia('(min-width: 768px)').matches) {

        window.onload = (() => dialog.showModal());
        document.body.style.overflowY = 'hidden';
        
        closeButton.addEventListener('click', () => {
            document.body.style.overflowY = 'auto';
            window.onload = null;
            dialog.close();
        })
    }
    else {
        dialog.close();        
    }
}
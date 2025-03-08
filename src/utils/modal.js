export const modal = () => {
    const dialog = document.querySelector(".dialog");
    const closeButton = document.querySelector(".dialog__btn");
    if(window.matchMedia('(min-width: 768px)').matches) {

        window.onload = (() => dialog.showModal());
        document.body.style.overflowY = 'hidden';
        
        closeButton.addEventListener('click', () => {
            document.body.style.overflowY = 'auto';
            dialog.close();
        })
    }
    else {
        dialog.close();
        
    }
}
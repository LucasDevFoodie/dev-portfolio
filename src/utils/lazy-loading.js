const lazyLoading = () => {

    const lazyImgs = document.querySelectorAll('.lazy');
    
    const observer = new IntersectionObserver((entries, observer) => { 
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                let img = entry.target;
                img.src = img.dataset.src; //We swap src value with data-src value 
                img.classList.remove('loading');
                img.classList.add('loaded');
                observer.unobserve(entry.target)
            }
        })}
    //  ,{
        //     root: null,
        //     rootMargin: '0px',
        //     threshold: 0
        // }
    )

    lazyImgs.forEach(img => {
        observer.observe(img);
    })
}

export default lazyLoading;
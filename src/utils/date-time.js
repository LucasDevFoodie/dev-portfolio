const dateTime = () => {
    document.querySelector('.footer__date').innerHTML = new Date().getFullYear();
}

export default dateTime;
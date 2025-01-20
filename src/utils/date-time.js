const dateTime = () => {
    document.querySelector('#footer-date').innerHTML = new Date().getFullYear();
}

export default dateTime;
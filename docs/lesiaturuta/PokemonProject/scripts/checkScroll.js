const checkScroll = () => {
    if (
        document.body.scrollHeight > window.innerHeight
        || document.documentElement.scrollHeight > window.innerHeight
    ) {
        document.body.style.height = '100%';
    } else {
        document.body.style.height = '100vh';
    }
};

window.addEventListener('resize', checkScroll);

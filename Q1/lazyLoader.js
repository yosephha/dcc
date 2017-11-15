let items = [];

window.addEventListener('load', setItem);
window.addEventListener('load', lazyLoad);
window.addEventListener('scroll', lazyLoad);
window.addEventListener('resize', lazyLoad);

function setItem() {
    items = document.getElementsByClassName('lazy');
}

function lazyLoad() {
    for (let i = 0; i < items.length; i++) {
        if (currentView(items[i])) {
            if (items[i].getAttribute('data-src')) {
                items[i].src = items[i].getAttribute('data-src');
            }
        }
    }
}

function currentView(el) {
    const frame = el.getBoundingClientRect();

    return (
        frame.bottom >= 0 &&
        frame.right >= 0 &&
        frame.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        frame.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

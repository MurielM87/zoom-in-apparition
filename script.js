const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.style.top = `${e.pageY - 30}px`;
    cursor.style.left = `${e.pageX - 30}px`;
})

const allLinks = document.querySelectorAll('nav ul li');
allLinks.forEach(link => {
    const location = link.getAttribute('data-loc');
    link.addEventListener('mouseenter', ()=> {
        cursor.classList.add('hovered');
        cursor.style.backgroundImage = `url(assets/${location}.jpg)`;
    });

    link.addEventListener('mouseout', ()=> {
        cursor.classList.remove('hovered');
        cursor.style.backgroundImage = `none`;
    })
})
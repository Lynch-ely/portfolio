const buttons = document.querySelectorAll('.nav-option');
const works = document.querySelectorAll('.craft');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.dataset.filter;

        works.forEach(work => {
            if (filter === 'all'){
                work.style.display = 'block';
            }else if (work.dataset.category === filter){
                work.style.display = 'block';
            }else {
                work.style.display = 'none';
            }
        });
    });
});

const logo = document.querySelector('.logo');

logo.addEventListener('click', (e) =>{
    e.preventDefault();
    window.location.href = window.location.pathname;
})

// MOBILE NAVBAR TOGGLE
const barBtn = document.querySelector('.bar');
const myLogo = document.querySelector('.logo');
const mobileNav = document.querySelector('.mobile-navnav');
const open = document.querySelector('.open-icon');
const close = document.querySelector('.close-icon');
const mobileLink = document.querySelectorAll('.mobile-link')

barBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('hide');
    open.classList.toggle('hide');
    close.classList.toggle('hide');
})

mobileLink.forEach(link =>{
    link.addEventListener('click',() =>{
        mobileNav.classList.add('hide');
        open.classList.remove('hide');
        close.classList.add('hide');
    })
})
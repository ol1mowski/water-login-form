const animate = (element, position) => {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > position) {
          //przewinął
          element.classList.add('active');
        }
      });
}

function scroll(e) {
    const href = $(this).attr('href');
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, 1000);

    location.hash = href;
};

$('a[href*="#"]').click(scroll);


const AnimateElement1 = document.querySelector('.img');
const ScrollElement1 = document.querySelector('.first_section');
const elementPosition1 = ScrollElement1.getBoundingClientRect().top + window.pageYOffset;

animate(AnimateElement1, elementPosition1)
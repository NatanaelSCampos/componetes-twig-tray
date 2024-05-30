const dialog = document.querySelector("dialog.modal-depomento");
const showButton = document.querySelectorAll(".looks-bybeach img.img-item");
const closeButton = document.querySelector("dialog button");

showButton.forEach((click) => {
    click.addEventListener("click", () => {
        dialog.showModal();
    });
});

closeButton.addEventListener("click", () => {
  dialog.close();
});
document.addEventListener('DOMContentLoaded', () =>{
    if(document.querySelector('.swiper-container-looks')){
        const swiper = new Swiper('.swiper-container-looks', {
            slidesPerView: 4,
            loop: false,
            spaceBetween: 15,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                390: {
                    slidesPerView: 1.5,
                    spaceBetween: 5
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                640: {
                    slidesPerView: 3,
                    spaceBetween: 10
                },
                1348: {
                    slidesPerView: 4,
                    spaceBetween: 15
                }
            }    
        });
    };
});    
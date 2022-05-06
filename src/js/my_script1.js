let type_site = $('#typ_site').click.tex;
let design = $('#design_site').click.val;
let adapt = $('#cross_site').click.val;

function fType(type_site){
    console.log(type_site);
}
setTimeout(fType, 3000, type_site);




//let count = 5000;
//let time = 5;
//if(type == 1 || type == 2){
//    count += 5000;
//    time += 5;
//}
//if (adapt == "Да") count += 2000;
//
//alert("Cтоимость вашего сайта равна " + count + " руб.");
//alert("Срок выполнения: " + time + " дн.");


$(document).ready(function(){

    $(window).scroll(() => {
                let scrollDistance = $(window).scrollTop();
    
                $(".section").each((i,el) => {
                    
                    if($(el).offset().top - $("nav").outerHeight()-100 <= scrollDistance){
                        $("nav a").each((i, el) => {
                            if ($(el).hasClass("active")){
                                $(el).removeClass("active");
                            }
                        });
                        $('nav li:eq('+ i +')').find('a').addClass('active');
                    }
                });
});
    
    let option = {threshold:[0.5]};
    let observer = new IntersectionObserver(onEntry, option);
        let elements = $('.animation-later');
        elements.each((i, el) => {
            observer.observe(el)});

    function onEntry(entry){
        entry.forEach(change =>{
            if(change.isIntersecting){
                change.target.src = change.target.dataset.src;
            }
        });
    } 
    
    let option1 = {threshold:[0.8]};
    let observer1 = new IntersectionObserver(onEntry1, option1);
        let elements1 = $('.animation-custom-ul');
        elements1.each((i, el) => {
            observer1.observe(el)});

    function onEntry1(entry){
        entry.forEach(change =>{
            if(change.isIntersecting){
                change.target.classList.add('show');
            }
        });
    }  
        });

                 
$('a[href^="#"]').click(function(){
    let valHref =  $(this).attr("href");
    $('html,body').animate({scrollTop:$(valHref).offset().top-20 + "px"});

})
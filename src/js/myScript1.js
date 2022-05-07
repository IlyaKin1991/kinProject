
$(document).ready(function(){
    
    
    
     $('.image-link').magnificPopup({type:'image'});
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

let type_site;
let design;  
let adapt
let days = 5;
let cost = 5000;
    
$('#typ_site')
    .change(function(){ 
type_site =$("#typ_site").val();
    if(type_site != 1){
        days += 5;
        cost += 5000;
    }
});
    
$('#design_site')
    .change(function(){ 
design = $('#design_site').val();
    if(design != 1){
        days += 3;
        cost += 3000;
    }
});
    
$('#cross_site')
    .change(function(){ 
adapt = $('#cross_site').val();
       if(adapt != 1){
        days += 5;
        cost += 5000;
    }
}); 

   $('#calc').click(function(){
      $('#days').text(days + " дней");
      $('#cost').text(cost + " рублей");       
    });
});
      

                 
$('a[href^="#"]').click(function(){
    let valHref =  $(this).attr("href");
    $('html,body').animate({scrollTop:$(valHref).offset().top-20 + "px"});

})
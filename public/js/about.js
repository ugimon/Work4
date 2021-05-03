$(function(){
    var loopLock = true;

    checkScroll();
    $(window).scroll(function(){
        checkScroll();
    });

    function checkScroll(){

        if($(window).scrollTop() > $(window).height()/2 && $(window).scrollTop() < $(window).height() && loopLock)
        {
            const num = $('#autoCard .col').length
            let i = 0;
            setInterval(autoCard,500)

            function autoCard(){
                $('#autoCard .container').eq(i).addClass('active')
                
                if(i > (num - 1) ){
                    $('#autoCard .container').removeClass('active')
                }
                else{
                    i++;
                }
            }
            loopLock = false;
        }
    }

});

$(function(){
    var loopLock = true;

    checkScroll();
    $(window).scroll(function(){
        checkScroll();
    });

    function checkScroll(){

        if($(window).scrollTop() > $(window).height()/2 && $(window).scrollTop() < $(window).height() && loopLock)
        {
            const num = $('#autoCard2 .col').length
            let i = 0;
            setInterval(autoCard,500)

            function autoCard(){
                $('#autoCard2 .container').eq(i).addClass('active')
                
                if(i > (num - 1) ){
                    $('#autoCard2 .container').removeClass('active')
                }
                else{
                    i++;
                }
            }
            loopLock = false;
        }
    }

});
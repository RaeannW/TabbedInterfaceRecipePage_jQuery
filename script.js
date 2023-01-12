(function(){

    'use strict';

    $('#tabs > ul > li > a').click(function(){
        //changes tab colors based on click
        $('#tabs > ul > li > a').css({background: '#a2a2a2', color: '#cecece'});
        $(this).css({background: '#eaeaea', color: '#333'});
        //changes tab content along with click
        const thisTab = $(this).attr('href');
        $('#tabs > div:visible').fadeOut(150, function(){
            $(thisTab).fadeIn(150); //callback function
        });

    });

})();
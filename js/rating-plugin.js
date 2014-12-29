(function ($) {

    $.fn.RatingStars = function( options ) {

        // set settings for rating stars
        var settings = $.extend({
            rate : 10,                          // How may stars needed
            onImg : './images/star-on.png',     // Replace image which will show on selected stars
            offImg : './images/star-off.png'    // Replace image which will show on unselected stars
        }, options );

        // create DIV for star images after input field with class of rating_stars
        // include image tag in the DIV number of image is specify in rate variable
        $(this).after('<div class="star_imgs"></div>');
        for( var i = 1; i <= settings.rate; i++)
        {
            $('div.star_imgs').append('<img src="'+settings.offImg+'" id="'+i+'" />');
        }

        //check if input field value and set on images according to that
        var input_val = $(this).val();
        for(var i = 1; i <= input_val; i++)
        {
            $('#'+i).attr("src", settings.onImg);
        }
        // Image with change on hover over and leave, and click
            $("div.star_imgs > img")
                .mouseover(function() {
                    var id = $(this).attr('id');        // get id of element on mouse over
                    var input_val = $(this).val();      // get value of input field

                    for(var i = 1; i <= id; i++)
                    {
                        $('#'+i).attr("src", settings.onImg);
                    }
                })
                .mouseleave(function() {
                    var id = parseInt($(this).attr('id'), 10);
                    var input_val = parseInt($('input#rating_stars').val(), 10);
                    if(input_val < id)
                    {
                        $(this).parent().children('img').attr("src", settings.offImg);
                        for(var i = 1; i <= input_val; i++)
                        {
                            $('#'+i).attr("src", settings.onImg);
                        }
                    }
                })
                .click(function(event){
                    event.preventDefault();
                    var id =  parseInt($(this).attr('id'), 10);
                    $('input#rating_stars').val(id);
                    $('#'+id).attr("src", settings.onImg);

                    // turn on stars in all lower id
                    for(var i = 1; i <= id; i++)
                    {
                        $('#'+i).attr("src", settings.onImg);
                    }
                    // turn off stars in all great id then clicked id
                    for(var i = settings.rate; i > id; i--)
                    {
                        $('#'+i).attr("src", settings.offImg);
                    }
            });
    };

}(jQuery));

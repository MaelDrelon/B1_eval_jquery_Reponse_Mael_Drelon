/* --------------------------------------------------------------------------

Votre code ici

-------------------------------------------------------------------------- */

$(function() {
    //Allumer redsquare et btn

    $('#toggleRedSquare').on("click", function() {

        $('.redsquare-app').addClass('is-active')
        $('.redsquare-controls .btn').prop('disabled', false)
        $('.redsquare-controls .btn').addClass('btn-primary').removeClass('btn-light')

    })



    //Options pour le carré
    deplacer();
    agrandir();
    retrecir();
    disque();
    carrer();

    //Exercice 2
    jumbotron();
})

function jumbotron() {
    $('.jumbotron a').removeAttr("href");

    $('.jumbotron ul').addClass('list-group');
    $('.jumbotron li').addClass('list-group-item');

    $('ul').siblings().append(' <i class="fa fa-plus-circle"></i>');

    $('.jumbotron p i').text('Alsacréation');

    $('.team').parentsUntil('.jumbotron').parent().eq(0).children().children().children().eq(1).children().children().eq(2).addClass('list-group-item-success')
}


function carrer() {

}

function disque() {

}

function retrecir() {
    if ('.redsquare-app.is-active') {
        $('#scaleDown').on('click', function() {
            $('.square').css('width', '-=20px');
            $('.square').css('height', '-=20px');
        })
    }
}

function agrandir() {
    if ('.redsquare-app.is-active') {
        $('#scaleUp').on('click', function() {
            $('.square').css('width', '+=20px');
            $('.square').css('height', '+=20px');
        })
    }
}

function deplacer() {
    if ('.redsquare-app.is-active') {
        addEventListener('keydown', function(event) {
            if (event.defaultPrevented) {
                return;
            }
            switch (event.key) {
                case "ArrowDown":
                    $(".square").finish().animate({
                        top: "+=10"
                    });
                    break;
                case "ArrowUp":
                    $(".square").finish().animate({
                        top: "-=10"
                    });
                    break;
                case "ArrowLeft":
                    $(".square").finish().animate({
                        left: "-=10"
                    });
                    break;
                case "ArrowRight":
                    $(".square").finish().animate({
                        left: "+=10"
                    });
                    break;
            }

        })
    }
}
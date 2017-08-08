$(document).ready(function(){
	$('h1').textillate({
    	in : {
            effect: 'tada'
        },
        out: {
            effect: 'tada'
        },
        loop: true,
    });
    $('h4').textillate({
    	in : {
            effect: 'bounceIn'
        },
        out: {
            effect: 'hinge'
        },
        loop: false,
    });
    $('p').textillate({
    	in : {
            effect: 'tada'
        },
        out: {
            effect: 'tada'
        },
        loop: true
    });

});

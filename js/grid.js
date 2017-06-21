var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.grid-item',
  columnWidth: 200
});

// element argument can be a selector string
//   for an individual element
var msnry = new Masonry( '.grid', {
  // options
});


//Initialize Masonry inside Bootstrap 3 Tab component 

(function( $ ) {

  var $container = $('.masonry-container');
  $container.imagesLoaded( function () {
    $container.masonry({
      columnWidth: '.item',
      itemSelector: '.item'
    });
  });

  //Reinitialize masonry inside each panel after the relative tab link is clicked - 
  $('a[data-toggle=tab]').each(function () {
    var $this = $(this);

    $this.on('shown.bs.tab', function () {

      $container.imagesLoaded( function () {
        $container.masonry({
          columnWidth: '.item',
          itemSelector: '.item'
        });
      });

    }); //end shown
  });  //end each

})(jQuery);
$( document ).ready(function() {

  $( "a.resource-link" ).click( function( e ) {
    resource = $( this ).attr( "data-link" );

    $( ".resource-content" ).addClass( "hidden" );
    $( ".resource-content" ).removeClass( "show" );
    $( "#" + resource ).removeClass( "hidden" );
    $( "#" + resource ).addClass( "show" );

    e.preventDefault();
  });
});

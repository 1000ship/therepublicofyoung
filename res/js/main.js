$('#carousel').carousel({
    interval: false,
    keyboard: false,
  });

function locationHashChanged() {
    if( location.hash.length == 0 )
        $('#carousel').carousel(0);
    else
        switch( location.hash )
        {
            case "#video":
                $('#carousel').carousel(1);
        }
}

  window.onhashchange = locationHashChanged;
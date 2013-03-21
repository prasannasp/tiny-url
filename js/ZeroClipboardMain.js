jQuery ( function($) {
                /** workaround for firefox versions 18 and 19.
                        https://bugzilla.mozilla.org/show_bug.cgi?id=829557
                        https://github.com/jonrohan/ZeroClipboard/issues/73
                        http://plugins.trac.wordpress.org/browser/wp-clone-by-wp-academy/trunk/lib/view.php?rev=677374#L6
                */
                var TUenableZC = true;
                var is_firefox18 = navigator.userAgent.toLowerCase().indexOf('firefox/18') > -1;
                var is_firefox19 = navigator.userAgent.toLowerCase().indexOf('firefox/19') > -1;
                if (is_firefox18 || is_firefox19) TUenableZC = false;
               
               
                $( ".tiny-url" ).each( function() {
                        var clip = new ZeroClipboard( $( "button#tiny-url-button",this ) );
                        clip.glue( '#tiny-url-button', '#tiny-url-button-div' );
                        /* FF 18/19 users won't see an alert box. */
                        if (TUenableZC) {
                                clip.on( 'complete', function (client, args) {
                                        alert( "Tiny URL copied to clipboard:" );
                                });
                        }
                });
        });

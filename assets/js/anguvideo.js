/ **
 * Creado por Mariandi el 11/03/2014.
 * /
/ * global angular * /
angular . módulo ( ' anguvideo ' , [])
    . directiva ( " anguvideo " , [ ' $ sce ' , función ( $ sce ) {
        return {
            restringir :  ' EA ' ,
            alcance : {
                fuente :  ' = ngModel ' ,
                ancho :  ' @ ' ,
                altura :  ' @ '
            },
            reemplazar :  verdadero ,
            plantilla :  ' <div class = "anguvideo"> '  +
            ' <Class = tipo iframe "videoClass" = "text / html" width = "{{ancho}}" height = "{{altura}}" ng-src = "{{url}}" allowfullscreen frameborder = "0" > </ iframe> '  +
            ' </ div> ' ,
            link :  function ( scope , element , attrs ) {
                var embedFriendlyUrl =  " " ,
                    urlSecciones,
                    índice;

                var youtubeParams = ( attrs . hideControls  ?  ' ? autoplay = 0 & showinfo = 0 & controls = 0 '  :  ' ' );

                ámbito . $ watch ( ' fuente ' , función ( newVal ) {
                    if (newVal) {
                        / *
                         * Necesidad de convertir las URL en una URL amigable que pueda integrarse y usarse en los reproductores disponibles en línea que los servicios han proporcionado
                         * para youtube: src = "// www.youtube.com/embed/{{video_id}}"
                         * para vimeo: src = "http://player.vimeo.com/video/{{video_id}}
                         * /

                        if ( newVal . indexOf ( " vimeo " ) > =  0 ) { // Mostrar un video vimeo
                            if ( newVal . indexOf ( " player.vimeo " ) > =  0 ) {
                                embedFriendlyUrl = newVal;
                            } else {
                                embedFriendlyUrl =  newVal . replace ( " http: " , " https: " );
                                urlSections =  embedFriendlyUrl . split ( " .com / " );
                                embedFriendlyUrl =  embedFriendlyUrl . replace ( " vimeo " , " player.vimeo " );
                                embedFriendlyUrl =  embedFriendlyUrl . replace ( " / "  + urlSections [ urlSections . length  -  1 ], " / video / "  + urlSections [ urlSections . length  -  1 ] +  " " );
                            }
                        } else  if ( newVal . indexOf ( " youtu.be " ) > =  0 ) {

                            index =  newVal . indexOf ( " .be / " );

                            embedFriendlyUrl =  newVal . rebanada (índice +  4 , nuevaVal . longitud );
                            embedFriendlyUrl =  " https://www.youtube.com/embed/ "  + embedFriendlyUrl + youtubeParams;
                        } else  if ( newVal . indexOf ( " youtube.com " ) > =  0 ) { // mostrando un video de youtube
                            if ( newVal . indexOf ( " embed " ) > =  0 ) {
                                embedFriendlyUrl = newVal + youtubeParams;
                            } else {
                                embedFriendlyUrl =  newVal . replace ( " / watch? v = " , " / embed / " ) + youtubeParams;
                                if ( embedFriendlyUrl . indexOf ( ' m.youtube.com ' ) ! =  - 1 ) {
                                    embedFriendlyUrl =  embedFriendlyUrl . replace ( " m.youtube.com " , " youtube.com " );
                                }
                            }
                        }

                        ámbito . url  =  $ sce . trustAsResourceUrl (embedFriendlyUrl);
                    }
                });
            }
        };
    }]);
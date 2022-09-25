const observer = new IntersectionObserver( ( entries ) => {
    entries.forEach( ( entry ) => {
        console.log( entry )
        if ( entry.isIntersecting ) {
            entry.target.classList.add( 'show' );
        } /*  Uncomment code to reveal animation multiple times on scroll
        else {
            entry.target.classList.remove( 'show' );
        }*/
    } );
} );




const hiddenElements = document.querySelectorAll( '.hidden' );
hiddenElements.forEach( ( el ) => observer.observe( el ) );
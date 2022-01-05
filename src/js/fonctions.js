function carrouselF() {
    
	var imagesF = document.querySelectorAll('.imageF');
    let d = 2000;
    let delta = 1000;

    imagesF.forEach(function(img,indice) {
        img.style.zIndex = imagesF.length - indice;
    });

    let animF = anime.timeline({
        loop: true,
        delay: 0
    });

    animF.add({
        targets: imagesF,
        translateX: [{value: '319', duration: d},
                     {value: '-319', duration: 0, delay: function(img,ind) {
                         if (ind == 0) return (3*delta)+(2*d);
                         if (ind == 1) return (2*delta)+d;
                         if (ind == 2) return delta;
                         return 0;
                     }},
                     {value: '0', duration: function(img,ind) {
                         if (ind == 3) return 0;
                         return d;
                     }}],
        easing: 'linear',
        delay: function(img,ind) {
            if (ind == 0) return delta;
            if (ind == 1) return (2*delta)+d;
            if (ind == 2) return (3*delta)+(2*d);
            return (4*delta)+(3*d);
        }
    });
}
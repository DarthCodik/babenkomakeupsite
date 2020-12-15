'use strict';

// Menu oppacity

let burger = document.getElementsByClassName('burger');
const nav = document.querySelector('.menu');
let wrapper = document.getElementsByClassName('wrapper')[0];
let goUp = document.getElementsByClassName('go-up');
let links = document.getElementsByClassName('link');
let togis = document.getElementsByClassName('togis');
let phone = document.getElementsByClassName('phone');


window.addEventListener('DOMContentLoaded', function() {
		const line = document.getElementsByClassName('line');
		const footer = document.getElementsByTagName('footer')
		const worktime = document.getElementsByClassName('worktime');
		const location = document.getElementsByClassName('location-link');
        let togis = document.getElementsByClassName('togis')[0];
        let phone = document.getElementsByClassName('phone');
        let headerHeigth = document.getElementsByTagName('header')[0].getBoundingClientRect().height;

        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;

            if (window.pageYOffset >= headerHeigth) {
                                nav.style.background = '#1A1A1A';
								// line[0].style.transition = 'ease 0.5s';
								line[0].style.oppacity = '1';
								line[0].style.borderBottom = '1px solid #fff';
								line[0].style.boxShadow =  '0 15px 10px -8px gold';
                                burger[0].style.background = '#1A1A1A';
								footer[0].style.background = '#1A1A1A';
                                for (var i = 0; i < goUp.length; i++) {
                                    goUp[i].style.color = 'gold';
                                    goUp[i].style.background = '#1A1A1A';
                                };

						}else {

                            if (document.documentElement.clientWidth > 1360) {
                                nav.style.background = '';
                            };
							
							line[0].style.oppacity = '0';
							line[0].style.boxShadow =  '';
							footer[0].style.background = '';
							line[0].style.borderBottom = '';
                            burger[0].style.background = '';
                            for (var i = 0; i < goUp.length; i++) {
                                goUp[i].style.color = '';
                                goUp[i].style.background = '';
                            };
                            for (var i = 0; i < phone.length; i++) {
                                phone[i].style.color = '';
                                phone[i].style.background = '';
                            };
						}

						if (window.pageYOffset >= 100){
							footer[0].style.background = '#1A1A1A';
							worktime[0].style.color = 'gold';
							location[0].style.display = 'block';
                            // togis.style.visibility = 'visible';

                            for (var i = 0; i < phone.length; i++) {
                                phone[i].style.background = '#1A1A1A';
                            }                            

                        } else {
								worktime[0].style.color = '';
                                // togis.style.visibility = '';
								location[0].style.display = '';

                                for (var i = 0; i < phone.length; i++) {
                                    phone[i].style.background = '';
                                }

            }
        });

});




// Menu show/hide (for Phone)

burger[0].addEventListener('click', function(){
    if(window.pageYOffset == 0 ){ 
        nav.style.background = '#1A1A1A';
    }
    nav.style.marginRight = '0%';
    togis[0].style.marginLeft = '0%';
    goUp[0].style.marginLeft = '0%';
    goUp[1].style.marginLeft = '0%';
    phone[0].style.marginRight = '0%';
    phone[1].style.marginRight = '0%';
});

wrapper.addEventListener('click', function(){
    nav.style.marginRight = '';
    togis[0].style.marginLeft = '';
    goUp[0].style.marginLeft = '';
    phone[0].style.marginRight = '';
    phone[1].style.marginRight = '';
    goUp[1].style.marginLeft = '';
});

goUp[0].addEventListener('click', function(){
    nav.style.marginRight = '';
    togis[0].style.marginLeft = '';
    phone[0].style.marginRight = '';
    phone[1].style.marginRight = '';
    goUp[0].style.marginLeft = '';
    goUp[1].style.marginLeft = '';
});

for (var i = 0; i < 6; i++) {
    links[i].addEventListener('click', function(){
        nav.style.marginRight = '';
        togis[0].style.marginLeft = '';
        phone[0].style.marginRight = '';
        phone[1].style.marginRight = '';
        goUp[0].style.marginLeft = '';
        goUp[1].style.marginLeft = '';
    });
}






// Показ описания


let about = document.getElementsByClassName('about');
let arctAbout = document.getElementsByClassName('arctAbout');
let maininfo = document.getElementsByClassName('maininfo');


let arrow = document.getElementsByClassName('arrow');
let block = document.getElementsByClassName('block');
let formBot = document.getElementsByClassName('formBot');

let arrImg = document.getElementsByClassName('arrImg');
let click = document.getElementsByClassName('click');

arrow[0].style.transition = '0.5s ease';

let blockPos = [];

for (var i = 0; i < block.length; i++) {
  blockPos.push(block[i].getBoundingClientRect());
}

// let screen = window.pageYOffset;
// console.log(screen);

for (var i = 0; i < blockPos.length; i++) {
  blockPos[i].height = 0;
}


// PRO Визажист

    function showAbout1() {
      if (blockPos[0].height == 0) {

        arrow[0].style.background = 'gold';

         arrImg[0].style.transform = 'rotate(0deg)';
         arrImg[0].style.backgroundImage = 'url(./photo/arrow-black.png)';



         block[0].style.height = maininfo[0].getBoundingClientRect().height + 'px';
         block[0].style.background = 'gold';
         block[0].style.marginTop = '-' + maininfo[0].getBoundingClientRect().height + 'px';
         block[0].style.paddingTop = '1%';

         click[0].style.display = 'none';

         about[0].style.visibility = 'visible';

        about[0].style.height = maininfo[0].getBoundingClientRect().height - arrow[0].getBoundingClientRect().height + 'px';

         if (arctAbout[0].getBoundingClientRect().height > (maininfo[0].getBoundingClientRect().height - arrow[0].getBoundingClientRect().height)) {
           about[0].style.overflowY = 'scroll';
         } 

         blockPos[0].height = 100;

       }else{
         arrow[0].style.background = '';

         arrImg[0].style.transform = '';
         arrImg[0].style.backgroundImage = '';

         block[0].style.height = '';
         block[0].style.background = '';
         block[0].style.marginTop = '';
         block[0].style.paddingTop = '';

         click[0].style.display = '';

         about[0].style.visibility = '';
         about[0].style.overflowY = '';


         blockPos[0].height = 0;
       }
    }

    arrow[0].addEventListener('click', showAbout1 );



// CREATIVE

    function showAbout2() {
      if (blockPos[1].height == 0) {

        arrow[1].style.background = 'gold';

         arrImg[1].style.transform = 'rotate(0deg)';
         arrImg[1].style.backgroundImage = 'url(./photo/arrow-black.png)';



         block[1].style.height = maininfo[1].getBoundingClientRect().height + 'px';
         block[1].style.background = 'gold';
         block[1].style.marginTop = '-' + maininfo[1].getBoundingClientRect().height + 'px';
         block[1].style.paddingTop = '1%';

         click[1].style.display = 'none';

         about[1].style.visibility = 'visible';


        about[1].style.height = maininfo[1].getBoundingClientRect().height - arrow[1].getBoundingClientRect().height + 'px'; 

         if (arctAbout[1].getBoundingClientRect().height > (maininfo[1].getBoundingClientRect().height - arrow[1].getBoundingClientRect().height)) {
           about[1].style.overflowY = 'scroll';
         }

         blockPos[1].height = 100;

       }else{
         arrow[1].style.background = '';

         arrImg[1].style.transform = '';
         arrImg[1].style.backgroundImage = '';

         block[1].style.height = '';
         block[1].style.background = '';
         block[1].style.marginTop = '';
         block[1].style.paddingTop = '';

         click[1].style.display = '';

         about[1].style.overflowY = '';
         about[1].style.visibility = '';

         blockPos[1].height = 0;
       }
    }

    arrow[1].addEventListener('click', showAbout2 );



// Browmaker

    function showAbout3() {
      if (blockPos[2].height == 0) {

        arrow[2].style.background = 'gold';

         arrImg[2].style.transform = 'rotate(0deg)';
         arrImg[2].style.backgroundImage = 'url(./photo/arrow-black.png)';



         block[2].style.height = maininfo[2].getBoundingClientRect().height + 'px';
         block[2].style.background = 'gold';
         block[2].style.marginTop = '-' + maininfo[2].getBoundingClientRect().height + 'px';
         block[2].style.paddingTop = '1%';

         click[2].style.display = 'none';

         about[2].style.visibility = 'visible';

        about[2].style.height = maininfo[2].getBoundingClientRect().height - arrow[2].getBoundingClientRect().height + 'px'; 
 
         if (arctAbout[2].getBoundingClientRect().height > (maininfo[2].getBoundingClientRect().height - arrow[2].getBoundingClientRect().height)) {
           about[2].style.overflowY = 'scroll';
         }


         blockPos[2].height = 100;

       }else{
         arrow[2].style.background = '';

         arrImg[2].style.transform = '';
         arrImg[2].style.backgroundImage = '';

         block[2].style.height = '';
         block[2].style.background = '';
         block[2].style.marginTop = '';
         block[2].style.paddingTop = '';

         click[2].style.display = '';

         about[2].style.overflowY = '';
         about[2].style.visibility = '';

         blockPos[2].height = 0;
       }
    }

    arrow[2].addEventListener('click', showAbout3 );




// Arrow animation


var angle = 0, lastTime = null;
function animate (time) {
	if(lastTime != null && arrImg[0].style.transform != 'rotate(0deg)'){
		angle += (time - lastTime) * 0.003;
	};
	lastTime = time;
  for (var i = 0; i < arrImg.length; i++) {
    if(lastTime != null && arrImg[i].style.transform != 'rotate(0deg)'){
      arrImg[i].style.top = -(Math.sin(angle) * 8) + 'px';
    }
  }
	// arrImg[0].style.top = -(Math.sin(angle) * 8) + 'px';
	requestAnimationFrame(animate);
}
requestAnimationFrame(animate);




// MC About

let aboutMc = document.getElementsByClassName('about-mc');
let wrap = document.getElementsByClassName('wrap');
let head1 = document.getElementsByClassName('head1');
let wrapHeigth = [];
let head1Heigth = [];

for (var i = 0; i < wrap.length-1; i++) {
    wrapHeigth.push(wrap[i].getBoundingClientRect().height);
    wrap[i].style.overflowY = 'hidden'; 

};

for (var i = 0; i < head1.length; i++) {
    head1Heigth.push(head1[i].getBoundingClientRect().height);
};

for (var i = 0; i < aboutMc.length; i++) {

    if (aboutMc[i].getBoundingClientRect().height > wrapHeigth[i] - head1Heigth[i]  && document.documentElement.clientWidth > 840) {
        aboutMc[i].style.height = wrapHeigth[i] - head1Heigth[i] + 'px';
        aboutMc[i].style.marginBottom = '0';
        aboutMc[i].style.overflowY = 'scroll'; 
    }
};






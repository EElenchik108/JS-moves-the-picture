"use strict";

	let zd1 = document.getElementById("zd1");
	let btnRight = document.querySelector('[value="Вправо"]');
	let btnLeft = document.querySelector('[value="Влево"]');
	let btnTop = document.querySelector('[value="Вверх"]');
	let btnBottom = document.querySelector('[value="Вниз"]');
	let btnClear = document.querySelector('[value="Возврат"]');
	let btnStop = document.querySelector('[value="Стоп"]');
	let x=0, y=0;
	let intR;

	btnRight.addEventListener('click', ()=> {
		moveStop();
		intR=setInterval(moveRight, 100);
	})

	btnStop.addEventListener('click', ()=> {
		moveStop();
	})

	function moveRight(){
		x+=5;
		zd1.style.marginLeft = x+'px';		
	}

	function moveStop(){
		clearInterval(intR)	
	}

	btnLeft.addEventListener('click', ()=> {
		moveStop();
		intR=setInterval(moveLeft, 100);
	})

	function moveLeft(){
		x-=5;
		zd1.style.marginLeft = x+'px';		
	}

	btnTop.addEventListener('click', ()=> {
		moveStop();
		intR=setInterval(moveTop, 100);
	})

	function moveTop(){
		y-=5;
		zd1.style.marginTop = y+'px';		
	}

	btnBottom.addEventListener('click', ()=> {
		moveStop();
		intR=setInterval(moveBottom, 100);
	})

	function moveBottom(){
		y+=5;
		zd1.style.marginTop = y+'px';		
	}

	btnClear.addEventListener('click', ()=> {
		moveStop();
		intR=setInterval(moveClear, 100);
	})

	function moveClear(){
		x=0;
		y=0;
		zd1.style.marginTop = 0+'px';
		zd1.style.marginLeft = 0+'px';		
	}

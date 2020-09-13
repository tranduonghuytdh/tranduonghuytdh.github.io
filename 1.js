//  $(function(){
 	
//  	$(".xuong,.kn").click(function(){
//  		$('body,html').animate({scrollTop:$('#khoiedu').offset().top},800);
//  		return false;
//  	})

//  	$(".xuongnua,.slide").click(function(){
//  		$('body,html').animate({scrollTop:$('#sl').offset().top},1000);
//  		return false;
//  	})
//  })
// document.addEventListener("DOMContentLoaded",function(){
// var nutTrai = document.querySelector('.nuts b.trai'),
// 	nutPhai = document.querySelector('.nuts b.phai'),
// 	slides = document.querySelectorAll('.slides ul li'),
// 	chisoHientai = 0,
// 	soluongSlide = slides.length,
// 	trangThai = 'dangDungYen';
// function NutPhaiVaNutTrai(nutnao){
// 	if (trangThai == 'dangChuyenDong') { return false; }
// 	trangThai = 'dangChuyenDong';
// 	var trangThaicua2CD = 0;
// 	var phantuHientai = slides[chisoHientai];
// 	if (nutnao == 'nutTrai') {
// 		if (chisoHientai > 0 ) { chisoHientai--;}
// 		else {chisoHientai = soluongSlide - 1; }
// 	}
// 	else if (nutnao == 'nutPhai'){
// 		if (chisoHientai < (soluongSlide - 1 )) { chisoHientai++; }
// 		else { chisoHientai = 0; }
// 	}

// 	var phantuTieptheo = slides[chisoHientai];

// 	xulyHienTaiKetThucCD = function(){
// 		this.classList.remove('dangxem');

// 		if (nutnao == 'nutTrai') {
// 			phantuHientai.classList.remove('bienmatAnPre');
// 		}
// 		else if (nutnao == 'nutPhai'){
// 			phantuHientai.classList.remove('bienmatnext');
// 		}
// 		trangThaicua2CD++;
// 		if (trangThaicua2CD == 2) {trangThai = 'dangDungYen';}
// 	}
// 	xulyTiepTheoKetThucCD = function(){
// 		this.classList.add('dangxem');
// 		if (nutnao == 'nutTrai') {
// 			phantuTieptheo.classList.remove('divaoAnPre');
// 		}
// 		else if (nutnao == 'nutPhai'){
// 			phantuTieptheo.classList.remove('divaonext');
// 		}
// 		trangThaicua2CD++;
// 		if (trangThaicua2CD == 2) {trangThai = 'dangDungYen';}
// 	}
// 	phantuHientai.addEventListener('webkitAnimationEnd',xulyHienTaiKetThucCD);
// 	phantuTieptheo.addEventListener('webkitAnimationEnd',xulyTiepTheoKetThucCD);

// 	if (nutnao == 'nutTrai') {
// 		phantuHientai.classList.add('bienmatAnPre');
// 		phantuTieptheo.classList.add('divaoAnPre');
// 	}
// 	else if (nutnao == 'nutPhai'){
// 		phantuHientai.classList.add('bienmatnext');
// 		phantuTieptheo.classList.add('divaonext');
// 	} // Xong if ngoài
// }

// chuyenSlidenutphai = function(){NutPhaiVaNutTrai('nutPhai');}
// nutPhai.addEventListener('click',chuyenSlidenutphai);

// chuyenSlidenuttrai = function(){NutPhaiVaNutTrai('nutTrai');}
// nutTrai.addEventListener('click',chuyenSlidenuttrai);

// },false)




document.addEventListener("DOMContentLoaded",function(){
	var  nut = document.querySelectorAll('.chuyenslide ul li');
	var slide = document.querySelectorAll('.cacslide ul li');
	var thoigian = setInterval(function(){ autoSlide()},3000);
	for (var i = 0; i < nut.length; i++) {
		nut[i].addEventListener('click',function(){
			clearInterval(thoigian);
			for (var i = 0; i < nut.length; i++) {
				nut[i].classList.remove('kichhoat');
			}
			this.classList.add('kichhoat');
			var vitri = 0;
			var nutkichhoat = this;
			for (vitri = 0;nutkichhoat = nutkichhoat.previousElementSibling; vitri++) {}
			// Sau khi biết được vị trí thì mún hiển thị slide nào thì dựa vào vị trí
			for (var i = 0; i < slide.length; i++) {
				slide[i].classList.remove('active');
				slide[vitri].classList.add('active');
			}
		})
	}
	// Tự động chuyển slide
	function autoSlide(){
			var slideHienthi = document.querySelector('.cacslide ul li.active');
			var vitrislide = 0;
			for (vitrislide = 0;slideHienthi = slideHienthi.previousElementSibling;vitrislide++) {}
			// Check tới điểm cuối chưa nếu rồi thì hiển thị sldie đầu tiên
			if (vitrislide < (slide.length-1)) {
			for (var i = 0; i < slide.length; i++) {
				slide[i].classList.remove('active');
				nut[i].classList.remove('kichhoat');
			}
			slide[vitrislide].nextElementSibling.classList.add('active');
			nut[vitrislide].nextElementSibling.classList.add('kichhoat');
			}
			else{
				for (var i = 0; i < slide.length; i++) {
				slide[i].classList.remove('active');
				nut[i].classList.remove('kichhoat');
			}
			slide[0].classList.add('active');
			nut[0].classList.add('kichhoat');
			}
	}
},false);	
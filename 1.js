 $(function(){
 	
 	$(".xuong,.kn").click(function(){
 		$('body,html').animate({scrollTop:$('#khoiedu').offset().top},800);
 		return false;
 	})

 	$(".xuongnua,.slide").click(function(){
 		$('body,html').animate({scrollTop:$('#sl').offset().top},1000);
 		return false;
 	})
 })
document.addEventListener("DOMContentLoaded",function(){
var nutTrai = document.querySelector('.nuts b.trai'),
	nutPhai = document.querySelector('.nuts b.phai'),
	slides = document.querySelectorAll('.slides ul li'),
	chisoHientai = 0,
	soluongSlide = slides.length,
	trangThai = 'dangDungYen';
function NutPhaiVaNutTrai(nutnao){
	if (trangThai == 'dangChuyenDong') { return false; }
	trangThai = 'dangChuyenDong';
	var trangThaicua2CD = 0;
	var phantuHientai = slides[chisoHientai];
	if (nutnao == 'nutTrai') {
		if (chisoHientai > 0 ) { chisoHientai--;}
		else {chisoHientai = soluongSlide - 1; }
	}
	else if (nutnao == 'nutPhai'){
		if (chisoHientai < (soluongSlide - 1 )) { chisoHientai++; }
		else { chisoHientai = 0; }
	}

	var phantuTieptheo = slides[chisoHientai];

	xulyHienTaiKetThucCD = function(){
		this.classList.remove('dangxem');

		if (nutnao == 'nutTrai') {
			phantuHientai.classList.remove('bienmatAnPre');
		}
		else if (nutnao == 'nutPhai'){
			phantuHientai.classList.remove('bienmatnext');
		}
		trangThaicua2CD++;
		if (trangThaicua2CD == 2) {trangThai = 'dangDungYen';}
	}
	xulyTiepTheoKetThucCD = function(){
		this.classList.add('dangxem');
		if (nutnao == 'nutTrai') {
			phantuTieptheo.classList.remove('divaoAnPre');
		}
		else if (nutnao == 'nutPhai'){
			phantuTieptheo.classList.remove('divaonext');
		}
		trangThaicua2CD++;
		if (trangThaicua2CD == 2) {trangThai = 'dangDungYen';}
	}
	phantuHientai.addEventListener('webkitAnimationEnd',xulyHienTaiKetThucCD);
	phantuTieptheo.addEventListener('webkitAnimationEnd',xulyTiepTheoKetThucCD);

	if (nutnao == 'nutTrai') {
		phantuHientai.classList.add('bienmatAnPre');
		phantuTieptheo.classList.add('divaoAnPre');
	}
	else if (nutnao == 'nutPhai'){
		phantuHientai.classList.add('bienmatnext');
		phantuTieptheo.classList.add('divaonext');
	} // Xong if ngoài
}

chuyenSlidenutphai = function(){NutPhaiVaNutTrai('nutPhai');}
nutPhai.addEventListener('click',chuyenSlidenutphai);

chuyenSlidenuttrai = function(){NutPhaiVaNutTrai('nutTrai');}
nutTrai.addEventListener('click',chuyenSlidenuttrai);

},false)
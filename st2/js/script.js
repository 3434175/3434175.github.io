 	
$(document).ready(function() {
	function ocr(n) {
	n += "";
	n = new Array(4 - n.length % 3).join("U") + n;
	return n.replace(/([0-9U]{3})/g, "$1 ").replace(/U/g, "");
}
$('.slproc_btn').click(
	function slproc() {
		var cap1 = parseFloat($('.cap1').val());
		var cap2 = parseFloat($('.cap1').val());
		var min_invest_cap = parseFloat($('.min_invest_cap').val());
		//var cap2 = cap1;
		//var summ = parseFloat($('.input1').val());

		var dohod = parseFloat($('.dohod').val());
		var procent = parseFloat($('.procent').val()) / 100;
		var summ = dohod * procent * 12;
		var invest_dohod = parseFloat($('.invest_dohod').val()) /100;
		var depozit_dohod = parseFloat($('.depozit_dohod').val()) /100;
		var inv = parseFloat($('.inv').val()) /100;
		var col_let1 = 0;
		var col_let2 = 0;
		for (var i = 1; i <= parseFloat($('.srok').val()); i++) {
			
			if (cap1 > min_invest_cap) {
				cap1 = (cap1 * (1 + invest_dohod)) + summ;
				cap2 = (cap2 * (1 + invest_dohod - inv)) + summ;
			} else {
				cap1 = (cap1 * (1 + depozit_dohod)) + summ;
				cap2 = (cap2 * (1 + depozit_dohod - inv)) + summ;
			}
			if( col_let1 == 0){
				if ((cap1 * invest_dohod / 12) > dohod) {
					col_let1 = i;
				}
			}	
			
			
			if( col_let2 == 0){ 
				if (((cap1 * (invest_dohod - inv) / 12) - summ) > dohod) {
					col_let2 = i;
				}
			}
			/*cap1 = (cap1 * (1 + invest_dohod)) + summ;
			cap2 = (cap2 * (1 + invest_dohod - inv)) + summ;*/
		}
		var otv_dohod1 = cap1 * invest_dohod / 12;
		var otv_dohod2 = cap1 * (invest_dohod - inv) / 12;
		$('.otv_srok').html($('.srok').val());
		$('.otv_cap1').html(ocr(cap1.toFixed(0)));
		$('.otv_cap2').html(ocr(cap2.toFixed(0)));
		$('.otv_dohod1').html(ocr(otv_dohod1.toFixed(0)));
		$('.otv_dohod2').html(ocr(otv_dohod2.toFixed(0)));
		$('.col_let1').html(ocr(col_let1.toFixed(0)));
		$('.col_let2').html(ocr(col_let2.toFixed(0)));
		$('.otv_min_invest_cap').html(ocr(min_invest_cap));
		$('.otv_proc').html($('.invest_dohod').val());
		$('.otv_inv').html($('.inv').val());
		$('.otv_summa').html(ocr((summ / 12).toFixed(0)));


	})
});
 
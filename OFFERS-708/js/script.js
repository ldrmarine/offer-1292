$(document).ready(function () {
	/* scroll */
	$('a[href^="#"]').click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top - 60;
		jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
		return false;
	});

	/* set price */
	$('[name="country"]').on('change', function () {
		var geoKey = $(this).find('option:selected').val();
		var data = $jsonData.prices[geoKey];
		var price = data.price;
		var oldPrice = data.old_price;
		var currency = data.currency;
		$("[value = " + geoKey + "]").attr("selected", true).siblings().attr('selected', false);

		$('.price_land_s1').text(price);
		$('.price_land_s2').text(oldPrice);
		$('.price_land_curr').text(currency);
	});

	initializeClock('timer', getDayEnd());
	initializeClock('timer2', getDayEnd());
	initializeClock('timer3', getDayEnd());
	initializeClock('timer4', getDayEnd());

	(function () {
		//показать советы
		var advices = $('.advices p');
		var nextAdvice = 0;
		var button = $('#getAdvice');

		button.on('click', function (e) {
			console.log(e);
			if (nextAdvice < advices.length) {
				$(advices[nextAdvice]).css('display', 'block');
				nextAdvice++;
				if (nextAdvice >= advices.length) {
					button.css('display', 'none');
				}
			}
		})
	})();
});
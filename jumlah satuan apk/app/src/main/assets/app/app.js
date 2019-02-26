$('.angka').keyup(function(){
	angka = $(this).val()
	pecah = angka.split('')
	jumlah = 0
	for (n in pecah){
		jumlah += Number(pecah[n])
	}
	$('.hasil').html(jumlah)
	if ($('.hasil').html() == ''){
		$('.hasil').html('0')
	}

	$('.angka').val($('.angka').val().replace(/(\d{5})/g, '$&-'))
})

$('.hapus').click(function(){
	$('.angka').val('').focus()
	$('.hasil').html('0')
})

$('.navbar-collapse a').click(function(){
	$('.navbar-toggle').click()
})

// new Cleave('.angka', {
//     // numeral: true,
//     delimiter: '-',
//     blocks: [5] // masih error di bagian ini
// })
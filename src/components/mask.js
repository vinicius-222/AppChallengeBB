export const MoneyMask = value => {
		let t = value.toString();
		t = t.replace(/\D/g,'');
		t = (t/100).toFixed(2) + '';
		t = t.replace(".", ",");
		t = t.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
		t = t.replace(/(\d)(\d{3}),/g, "$1.$2,");
	return t;
}

export const MoedaAmericana = value => {
    	let t = value.toString();
		t = t.replace(/\D/g,'');
		t = (t/100).toFixed(2) + '';
		t = t.replace(",", ".");
		t = t.replace(/(\d)(\d{3})(\d{3}),/g, "$1,$2,$3.");
		t = t.replace(/(\d)(\d{3}),/g, "$1,$2.");
    return t;
}
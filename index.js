let lp = ["Peça 1", "Peça 2", "Peça 3", "Peça 4", "Peça 5", "Peça 6", "Peça 7", "Peça 8", "Peça 9"];
let qp = lp.length;
if (qp < 10) {
	lp.push("Peça 10");
	console.log(lp);
} else {
	console.log("Quantidade máxima de peças atingida!");
}
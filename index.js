let lp = [ "Peça 1", "Peça 2", "Peça 3", "Peça 4", "Peça 5", "Peça 6", "Peça 7", "Peça 8", "Peça 9" ];
let qp = lp.length;
if ( qp < 10 ) {
	console.log( "Erro na contagem de peças!" );
}
for( let i = 0; i < qp; i++ ){
	let peca = lp[i];
	if( peca.length < 3 ){
		console.log( "Erro de caractéres encontrado!" );
	}
}
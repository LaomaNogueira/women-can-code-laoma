/*
Delete a propriedade patas do objeto meuCachorro e imprima-o em seguida. 
Você pode usar a notação de ponto ou colchete.
*/

const meuCachorro = {
    nome: "Merlin",
    patas: 4,
    caudas: 1,
    principalAmigo: "Crianças",
    brinquedoFavorito: "bolinha"
}

delete meuCachorro.patas;

console.log(meuCachorro);
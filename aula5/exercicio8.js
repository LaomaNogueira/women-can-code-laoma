/*
Faça uma função que execute um forEach em pedidos, que agora tem um status e 
imprima mensagens ao usuário de acordo com ele. Se:
1. Status for igual a "em preparo", imprima a mensagem "Seu pedido está sendo preparado"
2. Status for igual a "a caminho", imprima a mensagem "Entregador a caminho, fique atento!"
3. Status for igual a "entregue", imprima a mensagem "Pedido entregue"
4. Se não for nenhum desses status, imprima "Aguarde, processando pedido..."
*/
const pedidos = [
   { id: 1, prato: "x-bacon", status: "entregue" },
   { id: 2, prato: "sundae", status: "em preparo" },
   { id: 3, prato: "fritas média", status: "a caminho" },
   { id: 4, prato: "nuggets", status: "entregue" },
   { id: 5, prato: "x-tudo", status: "a caminho" },
   { id: 6, prato: "x_salada"},
 ];

function statusEntregas() {
   pedidos.forEach(function(pedido) {
      switch (pedido.status) {
         case "em preparo":
            console.log(`Pedido: ${pedido.prato} - Seu pedido está sendo preparado`)
            break;
         case "a caminho":
            console.log(`Pedido: ${pedido.prato} - Entregador a caminho, fique atento!`)
            break;
         case "entregue":
            console.log(`Pedido: ${pedido.prato} - Pedido entregue`)
            break;
         default:
            console.log(`Pedido: ${pedido.prato} - Aguarde, processando pedido...`)
      }
   })
}

statusEntregas();

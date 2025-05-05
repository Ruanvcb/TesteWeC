
export   function getProducts() {
     return new Promise((res) => {
          //Acabei mudando a rota sem querer ao mudar as pastas de ordem,
          //tive que mudar aqui para as imagens aparecerem;
          res([
               {
                    name: 'Scarpin Sligback Bebecê Salto Médio Taça Detalhe Metalizado',
                    image: '/images/static/produtos/produto-1.png',
                    price: { amount: 179.9, isDiscount: null },
                    id: 1,
               },
               {
                    name: 'Coturno Feminino Bebecê Tratorado Detalhe Tachas',
                    image: '/images/static/produtos/produto-2.png',
                    price: { amount: 349.9, isDiscount: 315 },
                    id: 2,
               },
               {
                    name: 'Scarpin Bebecê Salto Alto Taça Com Fivela',
                    image: '/images/static/produtos/produto-3.png',
                    price: { amount: 159.90, isDiscount: null },
                    id: 3,
               },
          ]);
     });
}
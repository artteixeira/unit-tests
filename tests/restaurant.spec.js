const createMenu = require('../src/restaurant');
 
/*
  A função createMenu(), retornará um novo objeto. Este novo objeto contém algumas chaves e ao acessar cada uma delas temos os seguintes retornos:

  - Uma chave `fetchMenu` retornando o menu, que nada mais é que o objeto passado como parâmetro para createMenu()

    Exemplo:
    const meuRestaurante = createMenu({
      food: {'coxinha': 3.90, 'sanduiche', 9.90},
      drinks: {'agua': 3.90, 'cerveja': 6.90}
    });

    meuRestaurante.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` armazenando um array de strings. Cada string é a chave de um pedido.
    Exemplo: ['coxinha', 'cerveja']

  - Uma chave `order` armazenando uma função. Essa função recebe uma string como parâmetro e essa string deve ser adicionada à lista armazenada em `consumption`.

  - Uma chave `pay` que, quando chamada, invoca uma função. Essa função faz a soma do preço de todos os pedidos, retornando essa soma de preços com acréscimo de 10%.

  Comportamento:
    const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} })

    meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

    meuRestaurante.order('coxinha') // Retorno: undefined

    meuRestaurante.consumption // Retorno: ['coxinha']

    meuRestaurante.pay() // Retorno: 4.29

  IMPORTANTE: FAÇA OS TESTES E IMPLEMENTAÇÕES DE ACORDO COM A SEQUÊNCIA INDICADA NO README DO PROJETO!
*/

describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {

  // 1: Verifique se função `createMenu()` retorna um objeto que possui a chave `fetchMenu`, a qual tem como valor uma função.

  it('Verifique se função `createMenu()` retorna um objeto que possui a chave `fetchMenu`, a qual tem como valor uma função.', () => {
    const menu = createMenu();
    expect(typeof menu.fetchMenu).toEqual('function');
  });

  // 2: Verifique se 'objetoRetornado.fetchMenu()' retorna um objeto cujas chaves são somente `food` e `drink`, 
  // considerando que a função createMenu() foi chamada com o objeto: `{ food: {}, drink: {} }`.

  it('Verifique se `objetoRetornado.fetchMenu()` retorna um objeto cujas chaves são somente `food` e `drink`, considerando que a função createMenu() foi chamada com o objeto: `{ food: {}, drink: {} }', () => {
    const menu = createMenu({ foods: {}, drinks: {} });
    expect(menu.fetchMenu()).toEqual({ foods: {}, drinks: {} });
  });

  // 3: Verifique se o menu passado pra função createMenu() é idêntico ao menu recuperado pela função 'objetoRetornado.fetchMenu()'.

  it('Verifique se o menu passado pra função createMenu() é idêntico ao menu recuperado pela função `objetoRetornado.fetchMenu()`.', () => {
    const menu = createMenu({ hamburgão: 'gostoso', farofa: 'suco'});
    expect(menu.fetchMenu()).toEqual({ hamburgão: 'gostoso', farofa: 'suco'});
  });

  // 4: Faça a implementação do item 4 do README no arquivo src/restaurant.js. //Feito.

  // 5: Verifique se 'objetoRetornado.consumption', após a criação do menu, retorna um array vazio.

  it('Verifique se `objetoRetornado.consumption`, após a criação do menu, retorna um array vazio.', () => {
    const menu = createMenu();
    expect(menu.consumption).toEqual([]);
  });

  // 6: Faça a implementação do item 6 do README no arquivo src/restaurant.js. //Feito.
    
  // 7: Verifique se, ao chamar uma função associada à chave `order` no objeto retornado, passando uma string como parâmetro

  // - se a string existir nas chaves 'food' ou 'drink', deve ser adicionada ao array consumption
  // - senão, deve exibir a mensagem "Item indisponível" e não adicionar nada ao array
  // Ex: obj.order('coxinha') --> ['coxinha']
  // Ex: obj.order('picanha') --> Exibe "Item indisponível"

  it('Verifique se, ao chamar uma função associada à chave `order` no objeto retornado, passando uma string como parâmetro', () => {
    const menu = createMenu( {drinks: {}, foods: {coxinha: 3.90}} );
    expect(menu.order('coxinha')).toEqual(['coxinha']);
    expect(menu.order('picanha')).toEqual('Item indisponível');
  });

  // 8: Faça a implementação do item 8 do README no arquivo src/restaurant.js. //Feito.

  // 9: Verifique se, ao adicionar três pedidos em sequência, dentre bebidas e comidas, o array `objetoRetornado.consumption` contém os itens pedidos.
  it('Verifique se, ao adicionar três pedidos em sequência, dentre bebidas e comidas, o array `objetoRetornado.consumption` contém os itens pedidos.', () => {
    const menu = createMenu({foods: {coxinha: 3.90, sanduiche: 9.90}, drinks: {agua: 3.90, cerveja: 6.90},});
    menu.order('coxinha');
    menu.order('sanduiche');
    menu.order('agua');
    expect(menu.consumption).toEqual(['coxinha', 'sanduiche', 'agua']);
  })
  // 10: Verifique se a função `order` aceita que pedidos repetidos sejam acrescidos a `consumption`.
  it('Verifique se a função `order` aceita que pedidos repetidos sejam acrescidos a `consumption`.', () => {
    const menu = createMenu({foods: {coxinha: 3.90, sanduiche: 9.90}, drinks: {agua: 3.90, cerveja: 6.90},});
    menu.order('coxinha');
    menu.order('coxinha');
    expect(menu.consumption).toEqual(['coxinha', 'coxinha']);
  })
  // 11: Verifique se, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, acrescido de 10%, conforme registrado em `objetoRetornado.consumption`.
  it('Verifique se, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, acrescido de 10%, conforme registrado em `objetoRetornado.consumption`.', () => {
    const menu = createMenu({foods: {coxinha: 3.90, sanduiche: 9.90}, drinks: {agua: 3.90, cerveja: 6.90},});
    menu.order('coxinha');
    menu.order('agua');
    expect(menu.pay()).toEqual(8.58);
  })
  // 12: Faça a implementação do item 12 do README no arquivo src/restaurant.js. //Feito
});

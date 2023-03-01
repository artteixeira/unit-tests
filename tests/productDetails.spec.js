const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  // ESCREVA SEUS TESTES ABAIXO:
  // Teste se productDetails é uma função.
  it('Verifica se `productDetails` é uma função', () => {
    expect(typeof productDetails).toEqual('function')
  });
  // Teste se o retorno da função é um array.
  it('Verifica se o retorno da função é um array', () => {
    const result = productDetails('Coca-Cola', 'Salgadinho');
    expect(true).toEqual(Array.isArray(result));
  });
  // Teste se o array retornado pela função contém dois itens dentro.
  it('Verifica se o array retornado pela função contém dois itens dentro.', () => {
    const result = productDetails('Coca-Cola', 'Salgadinho');
    expect(result.length).toEqual(2);
  });
  // Teste se os dois itens dentro do array retornado pela função são objetos.
  it('Teste se os dois itens dentro do array retornado pela função são objetos.', () => {
    const result = productDetails('Coca-Cola', 'Salgadinho');
    expect(typeof result[0]).toEqual('object');
    expect(typeof result[1]).toEqual('object');
  });
  // Teste se os dois productIds terminam com 123.
  it('Verifica se os dois productIds terminam com 123.', () => {
    const result = productDetails('Coca-Cola', 'Salgadinho');
    expect(result[0].details.productId.endsWith('123')).toBeTruthy;
    expect(result[1].details.productId.endsWith('123')).toBeTruthy;
  });
  // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
  it('Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
    const result = productDetails('Coca-Cola', 'Salgadinho');
    expect(result[0] !== result[1]).toBeTruthy;
  });
});

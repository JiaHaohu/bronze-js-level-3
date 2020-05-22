import ReceiptCalculator from './receipt-calculator';

describe('when calculating receipt', () => {
  const products = [
    { id: 'BX2188', name: 'Coca Cola', price: 3 },
    { id: 'BX2192', name: 'Dr. Pepper', price: 4 },
    { id: 'BX3333', name: 'Pepsi Cola', price: 2 }
  ];

  it('should calculate sum of product prices', () => {
    const calculator = new ReceiptCalculator(products);
    const totalPrice = calculator.getTotalPrice(['BX2188', 'BX2192', 'BX3333']);
    expect(totalPrice).toEqual(9);
  });

  it('should calculate sum of selected product prices', () => {
    const calculator = new ReceiptCalculator(products);
    const totalPrice = calculator.getTotalPrice(['BX3333', 'BX2188']);
    expect(totalPrice).toEqual(5);
  });

  it('should return 0 if no product is selected', () => {
    const calculator = new ReceiptCalculator(products);
    const totalPrice = calculator.getTotalPrice([]);
    expect(totalPrice).toEqual(0);
  });

  it('should throw if product is not found', () => {
    const calculator = new ReceiptCalculator(products);
    expect(() => calculator.getTotalPrice(['What the hell is this?'])).toThrow('Product not found.');
  });
});

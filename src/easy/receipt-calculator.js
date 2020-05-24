class RecepitCalculator {
  constructor (products) {
    this.products = [...products];
  }

  getTotalPrice (selectProductIds) {
    // TODO:
    //
    // We have a list of products. Each product contains `id`, `name` and `price`.
    // Please implement a method to calculate the total price for the selected
    // products.
    //
    // Note that you can only modify code within the specified area.
    // <-start-
    var totalPrice = 0;
    for (let i = 0; i < selectProductIds.length; i++) {
      // eslint-disable-next-line no-undef
      for (let j = 0; j < this.products.length; j++) {
        // eslint-disable-next-line no-undef
        if (this.products[j].id === selectProductIds[i]) {
          // eslint-disable-next-line no-undef
          totalPrice += this.products[j].price;
          console.log(selectProductIds[i]);
          console.log(totalPrice);
        }
      }
    }

    if (selectProductIds.length > 0 && totalPrice === 0) {
      // eslint-disable-next-line no-throw-literal
      throw 'Product not found.';
    }

    return totalPrice;
    // --end->
  }

  // TODO:
  //
  // You can add addtional helper functions if you want
  // <-start-

  // --end-->
}

export default RecepitCalculator;

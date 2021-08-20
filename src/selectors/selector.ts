import { State } from '../store/store';

export const selectNumItems = (state: State) => {
    let numItems: number = 0;
    state.productList.forEach(item => numItems += item.qty);
    return numItems;
};

export const selectOrderTotal = (state: State) => {
    let orderTotal: number = 0;
    state.productList.forEach(item => orderTotal += item.price * item.qty);
    return orderTotal;
};

export const selectDiscount = (state: State) => {
    let discount: number = 0;
    state.productList.forEach(item => discount += item.discount * item.qty);
    return discount;
};

export const selectTypeDiscount = (state: State) => {
    let typeDiscount: number = 0;
    state
        .productList
        .filter(item => item.type === 'fiction')
        .forEach(item => {
            //15% descount
            let discount = 15 / 100 * (item.price * item.qty);
            typeDiscount += discount;
        });
    return typeDiscount;
};

import React from 'react';
import {connect} from "react-redux";
import {Table} from "./styled";
import {Button} from "../Card/styles";
import {cardDelAC, incAC} from "../../../../../../redux/Action/cardAC";

const Basket = (props) => {
  let total = props.basket.reduce((t, pr) => {
    return t + (pr.count * pr.price);
  }, 0);
  if (!props.basket.length) {
    return (
      <div style={{paddingTop: 40, fontWeight: 'bold'}}>
        Товара нет в карзине!
      </div>
    )
  }
  else {
    let goodsRows = props.basket.map((goods, i) => {
      console.log("sakjdhaspd ", goods)
      return (
        <tr key={i}>
          <td>{goods.name}</td>
          <td>{goods.price}</td>
          <td>
            {goods.count}
          </td>
          <td>{goods.price * goods.count}</td>
          <td>
            <button onClick={()=>props.onIncrement(-1, i)} >
              -
            </button>
            <button onClick={()=>props.onDelGood(i)} style={{marginLeft: 10, marginRight: 10}}>
              X
            </button>
            <button onClick={()=>props.onIncrement(1, i)}>
              +
            </button>
          </td>
        </tr>
      );
    });

    return (
      <div>
        <h2>Cart</h2>
        <Table>
          <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Count</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          {goodsRows}
          </tbody>
        </Table>
        <h3>Total: {total}</h3>
        <hr />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log('BASKET ' ,state.goods.basket)
  return {

    goods: state.goods.cardGoods,
    basket: state.goods.basket
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDelGood: (index) => dispatch(cardDelAC(index)),
    onIncrement: (num, i) => dispatch(incAC(num, i))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket)

import React from 'react'
import {Button, CardContainer} from "./styles";
import {cardAC} from "../../../../../../redux/Action/cardAC";
import {connect} from "react-redux";

const Card = (props) => {
  return (
    props.goods.map(({id, name, image, price}, i) => {
      return (
        <CardContainer key={id}>
          <img src={image} alt="phone"/>
          <div>
            <h3>{name}</h3>
            <div>
              <h3>Цена</h3>
              <p>{price}</p>
            </div>
            <Button onClick={()=>props.onAddToBasket(props.goods[i], id)}>Добавить в карзину</Button>
          </div>
        </CardContainer>
      )
    })
  )
}
const mapStateToProps = (state) => {
  return {
    goods: state.goods.cardGoods
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddToBasket: (goods, id) => dispatch(cardAC(goods, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
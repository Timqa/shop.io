import React, { useState } from 'react'
import { Card as AntdCard } from 'antd';
import ReactCardFlip from 'react-card-flip'

const { Meta } = AntdCard;

export const Card = ({ item, ...rest }) => {

  const [isFlipped, changeFlipped] = useState(false)
  const [title, changeTitle] = useState('hello')

  const clickCard = () => {
    changeFlipped(!isFlipped)
  }

  const onChangeTitle = () => {
    changeTitle('new')
  }

  return (
    <>
      <AntdCard
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={item.image} />}
        onClick={onChangeTitle}
      >
        <Meta title={title} />
      </AntdCard>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <AntdCard
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src={item.image} />}
          onClick={clickCard}
        >
          <Meta title={item.name} />
        </AntdCard>

        <AntdCard
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src={item.image} />}
          onClick={clickCard}
        >
          <Meta title={item.price} />
        </AntdCard>
      </ReactCardFlip>
    </>
  )
}
import React from 'react'
import styled, {css} from 'styled-components'
import {SelectableTile} from "../Shared/Tile"
import {fontSize3, fontSizeBig} from "../Shared/Style"
import {CoinHeaderGridStyled} from "../Settings/CoinHeaderGrid"

const justifyRight = styled.div`
  justify-self: right;
`

const numberFormat = number => {
  return +(number + '').slice(0, 7);
}

const PriceTileStyled = styled(SelectableTile)`
  ${props => props.compact && css`
    ${fontSize3}
  `}
`
function PriceTile({sym, data}){
  return (
    <PriceTileStyled>
      <CoinHeaderGridStyled>
        <div> {sym} </div>
        <justifyRight> {numberFormat(data.CHANGEPCT24HOUR)}</justifyRight>
      </CoinHeaderGridStyled>
    </PriceTileStyled>
  )
}


export default function({price, index}){
  let sym = Object.keys(price)[0];
  let data = price[sym]['USD'];
  return (
    <PriceTile sym={sym} data={data}>
      {sym} {data.PRICE}
    </PriceTile>
  )
}

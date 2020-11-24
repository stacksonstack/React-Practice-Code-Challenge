import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = ({sushis, moreSushi, setBudget, isBudget}) => {

  const renderSushi=()=>{
    return sushis.map((el)=> <Sushi key={el.id} sushi={el} isBudgetAboveZero = {isBudget} setBudget={setBudget}/>)
  }

  
  return (
    <Fragment>
      <div className="belt">
        {
          renderSushi()
        }
        <MoreButton moreSushi={moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
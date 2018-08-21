import React, { Fragment } from 'react'
// import React from 'react'

const Sushi = (props) => {

  function clickHandler() {
    props.eatTheSushi(props.sushi.id)
  }

  return (
    <div className="sushi">
      <div className="plate"
           onClick={clickHandler}>
        {
          /* Tell me if this sushi has been eaten! */
          props.alreadyEaten ?
            null
          :
            <img src={props.sushi.img_url} width="100%" alt=""/>
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi;

//
// {
//   /* Tell me if this sushi has been eaten! */
//   true ?
//     null
//   :
//     <img src={props.sushi.img_url} width="100%" alt=""/>
// }

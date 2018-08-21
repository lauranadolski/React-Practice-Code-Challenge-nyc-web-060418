import React, { Fragment } from 'react';
import MoreButton from '../components/MoreButton';
import Sushi from '../components/Sushi';

const SushiContainer = (props) => {

  function renderSushi() {

    return props.sushiToDisplay.map((sushi) => {
      // console.log(props.eatenOrNot(sushi))
      // console.log(props.sushiToDisplay)
      return (<Sushi
        sushi={sushi}
        key={sushi.id}
        alreadyEaten={props.eatenOrNot(sushi)}
        eatTheSushi={props.eatTheSushi}
        />)
    })


  }

  return (
    <Fragment>
      <div className="belt">
        {
          /*
             Render Sushi components here!
          */
          renderSushi()
        }
        <MoreButton
        changeSushiToDisplay={props.changeSushiToDisplay}
        />
      </div>
    </Fragment>
  )
}

export default SushiContainer

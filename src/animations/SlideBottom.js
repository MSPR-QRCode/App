// Animations/FadeIn.js

import React from 'react'
import { Animated, Dimensions, Easing } from 'react-native'

/**
 * COMPONENT : slide from bottom to top
 * @category animation
 */
class SlideBottom extends React.Component {

  /**
   * 
   * @param {component} children children's component 
   */
  constructor(props) {
    super(props)
    this.state = {
      positionLeft: new Animated.Value(Dimensions.get('window').height)
    }
  }

  /**
   * start the animation
   */
  componentDidMount() {
    Animated.spring(
      this.state.positionLeft, 
      {
        duration: 500, 
        toValue: 0, 
        easing: Easing.ease,
        useNativeDriver: false
        
      }
    ).start()
  }

  render() {
    return (
      <Animated.View
        style={{ top:1, top: this.state.positionLeft }}>
             {this.props.children}
      </Animated.View>
    )
  }
}

export default SlideBottom
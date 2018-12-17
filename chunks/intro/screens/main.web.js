import React from 'react'
import { Screen } from 'react-dom-chunky'
import * as CustomComponents from "../components";
import Telegram from "../components/Telegram";

export default class MainIntroScreen extends Screen {

  constructor(props) {
    super(props)
    this.state = { ...this.state }
  }

  componentDidMount() {
    super.componentDidMount()
  }

  get features() {
    return ([])
  }

  loadCustomComponent(props) {
    return (props) => {
      const CustomComponent = CustomComponents[props.source];
      return (<CustomComponent {...props} />);
    }
  }

  components() {
    const features = super.components()
    return [
      ...features,
    ]
  }
}
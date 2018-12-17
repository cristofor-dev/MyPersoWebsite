import React from 'react';
import { Screen } from 'react-dom-chunky';

export default class TelegramComponent extends Screen {

  render () {
    const { telegram } = this.props
    return (
    telegram.map(
      (
        {
          telegramLink,
          telegramImg
        }
      ) => (<div style={styles.fab} onClick={()=>this.triggerRawRedirect(telegramLink)}>
      <img src={telegramImg} style={styles.icon} />
    </div>)
    )
    )
  }
}

const styles = {
  fab: {
    position: 'fixed',
    bottom: 20,
    right: 20
  },
  icon: {
    cursor: 'pointer',
    width: 60,
    height: 60
  }
}


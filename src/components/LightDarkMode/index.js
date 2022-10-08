// Write your code here
// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    mode: 'Light Mode',
    text: 'Dark Mode',
    contentClass: 'light-content',
    button: 'light-button',
  }

  buttonClick = () => {
    const {mode} = this.state
    if (mode === 'Light Mode') {
      this.setState(() => ({
        mode: 'Dark Mode',
        text: 'Light Mode',
        contentClass: 'dark-content',
        button: 'dark-button',
      }))
      console.log(mode)
    } else {
      this.setState(() => ({
        mode: 'Light Mode',
        text: 'Dark Mode',
        contentClass: 'light-content',
        button: 'light-button',
      }))
    }
  }

  render() {
    const {text, contentClass, button} = this.state
    return (
      <div className="main-container">
        <div className={`${contentClass} content-container`}>
          <h1 className="heading">Click To Change Mode</h1>
          <div>
            <button
              className={`${button} btn`}
              type="button"
              onClick={this.buttonClick}
            >
              {text}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default LightDarkMode

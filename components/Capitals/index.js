// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    randomData: 0,
    head: 0,
    tails: 0,
    htImg: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  tossCoinFun = () => {
    const randomValue = Math.floor(Math.random() * 2)

    if (randomValue === 0) {
      this.setState(prevArg => ({
        randomData: prevArg.randomData + 1,
        head: prevArg.head + 1,
        htImg: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prevArg => ({
        randomData: prevArg.randomData + 1,
        tails: prevArg.tails + 1,
        htImg: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {randomData, head, tails, htImg} = this.state

    return (
      <div className="mainDiv">
        <div className="childDiv">
          <h1 className="h1Cl">Coin Toss Game</h1>
          <p className="paraCl">Heads (or) Tails</p>
          <img className="imgCl" alt="toss result" src={htImg} />

          <button className="btn" type="button" onClick={this.tossCoinFun}>
            Toss Coin
          </button>
          <div className="paras">
            <p className="myPara">Total:{randomData}</p>
            <p className="myPara">Heads:{head}</p>
            <p className="myPara">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss


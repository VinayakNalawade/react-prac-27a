import './index.css'

import Header from '../Header'

const Home = () => (
  <div className="homeContainer">
    <Header />
    <div className="mainContainer">
      <div className="homeContent">
        <h1 className="homeContentheading">Clothes That Get YOU Noticed</h1>
        <img
          className="homeContentimg"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
        />
        <p className="homeContentpara">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <button className="shopNowButton" type="button">
          Shop Now
        </button>
      </div>
      <div className="homeImgContainer">
        <img
          className="homeimg"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that gets you noticed"
        />
      </div>
    </div>
  </div>
)

export default Home

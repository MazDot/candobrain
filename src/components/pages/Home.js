import React, { Component } from 'react';
import topPic from '../../assets/navy.png';
import logo from '../../assets/mind.png';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Hexagon from 'react-hexagon';
import { Link } from 'react-router-dom';
//importing images for reflex games
import arrowsImage from '../../assets/gamesImages/arrows.png';
import bigSmallImage from '../../assets/gamesImages/bigorsmall.png';
import colorsTextImage from '../../assets/gamesImages/colorsvstext.png';
import compareSidesImage from '../../assets/gamesImages/comparesides.png';
import connectDotsImage from '../../assets/gamesImages/connectdots.png';
//importing images for memory games
import rememberNewImage from '../../assets/gamesImages/remembernew.png';
import rememberOldImage from '../../assets/gamesImages/rememberold.png';
import rememberThreeImage from '../../assets/gamesImages/rememberthree.png';
//importing title images for home page
import reflexTitle from '../../assets/reflex.png';
import memoryTitle from '../../assets/memory.png';
import aboutTitle from '../../assets/about.png';

const CardStyle = styled.div `
  {
    .card {
      background: #FFFFD8;
      color: #000000;
    }
    .playButton {
      margin-left: 30%;
      margin-top: -18%;
    }
    .btn {
      color: #000000;
      background-color:#f8d347;
    }
    .btn:hover {
      scale: 120%;
    }
    .titleMemory {
      margin-left: 10%;
      font-size: 40px;
    }
    .titleImage {
      width: calc(22vw);
      margin-left: 28%;
      margin-bottom: 30px;
    }
  }
`;

const Styles = styled.div`
.jumbotron {
    background: #000 url(${topPic}) no-repeat center center;
    background-size: cover;
    width: calc(99.99vw);
    color: #efefef;
    height: calc(100vh);
    position: relative;
    margin-left: -2.1%;
  }
  .container{
    margin-top: 10vh;
    width: 50%;
    margin-left: 25%;
  }
  .btn {
    color: #FAFF07;
  }
  .btn:hover {
    color: #8E9102;
    scale: 110%;
  }
  .img {
    width: 300px;
    height: 300px;
    margin-left: 200px
  }
  .welcome {
    margin-left: 270px;

  }
  .secPart {
    margin-left: 100px;
  }
  .thirdPart {
    margin-left: 50px;
  }

`;
const DivStyles = styled.div`
.container-fluid {
  font-family: Baloo Paaji 2;
}
.row {
  margin-left: 8%;
  margin-right: 8%;
}
.titleButton{
  color: #000000;
}
.aboutButton{
  color: #000000;
}
.title {
  margin-left: 12%;
  font-size: 60px;
}
.aboutUs {
  margin-left: 12%;
  margin-top: 50px;

}
.aboutButton {
  margin-left: 35%;
  font-size: 48px;
}
.aboutPara {
  margin-left: 15%;
  margin-right: 25%;
  font-size: 20px;

}
.articleImages:hover {
  scale:110%;
}
.titleMemory {
  font-size: 40px;
}
.titleImage {
  width: calc(22vw);
  margin-left: 28%;
  margin-bottom: 10px;
}
`;

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <DivStyles>  
        <div className="container-fluid"> 
          <Jumbotron/>
          <br />
          <br />
          <ReflexGames />
          <br />
          <br />
          <MemoryGames />
          <br />
          <br />
          <div className="aboutUs">
          <a className="titleMemory" href="/about">
            <img src = {aboutTitle} className="titleImage"></img>
          </a>
              <br />
              <br />
              <p className="aboutPara">It's been a long time since healthcare has improved all around the world
                and because of that life expectancy has increased.
                Growing old has nothing to do with age, we need to strenghten our brain and body 
                in order to stay younger. <br /> Practices that are challenging for both brain and body
                will help us improve. If you are like us and want to improve your brain and body
                functions, we hope this would be helpful
              </p>
          </div>
          <br />
          <br />
          <br />
          <br />
        </div>
        </DivStyles>
      
    );
  }
}

export const Jumbotron = () => (
  <Styles>
    <div className="jumbotron">
      <div className= "container">
        <Image className="img" src={logo} roundedCircle/>
        <br />
        <br />
        <h1 className = "welcome">Welcome</h1>
        <br />
        <br />
        <Row>
          <Col className="secPart">
            <a href="/braingames" className="btn btn-link btn-lg" role="button">Games</a>
          </Col>
          <Col className="thirdPart">
            <a href="/about" className="btn btn-link btn-lg" role="button">About</a>
          </Col>
        </Row>
      </div>
      <div className="overlay"></div>
    </div>
    
  </Styles>
)

export const ReflexGames = () => (
    <div className="reflexGames">
      <CardStyle>
      <a className="titleMemory" href="/braingames">
        <img src = {reflexTitle} className="titleImage"></img>
      </a>
      <br />
      <br />
      <Row className="gameRow">
        <Col sm={3}>
          <Hexagon 
            style={{stroke: ''}}
            href='/brainreflexgames-arrows'
            backgroundImage={arrowsImage}
            flatTop
            backgroundScale ="1.05"
            >
          </Hexagon>
          <div className="card-body">
                <div className="playButton">
                <Link
                  to='/brainreflexgames-arrows'
                  className="btn"
                >
                  Play Now
                </Link>
                </div>
              </div>
        </Col>
        <Col sm={3}>
          <Hexagon 
            style={{stroke: ''}}
            href='/brainreflexgames-bigorsmall'
            backgroundImage={bigSmallImage}
            flatTop
            backgroundScale ="1.05"
            >
          </Hexagon>
          <div className="card-body">
                <div className="playButton">
                <Link
                  to='/brainreflexgames-bigorsmall'
                  className="btn"
                >
                  Play Now
                </Link>
                </div>
              </div>
        </Col>
        <Col xs={3}>
        <Hexagon 
            style={{stroke: ''}}
            href='/brainreflexgames-colorsvstext'
            backgroundImage={colorsTextImage}
            flatTop
            backgroundScale ="1.05"
            >
          </Hexagon>
          <div className="card-body">
                <div className="playButton">
                <Link
                  to='/brainreflexgames-colorsvstext'
                  className="btn"
                >
                  Play Now
                </Link>
                </div>
              </div>
        </Col>
        <Col xs={3}>
        <Hexagon 
            style={{stroke: ''}}
            href='/brainreflexgames-comparesides'
            backgroundImage={compareSidesImage}
            flatTop
            backgroundScale ="1.05"
            >
          </Hexagon>
          <div className="card-body">
                <div className="playButton">
                <Link
                  to='/brainreflexgames-comparesides'
                  className="btn"
                >
                  Play Now
                </Link>
                </div>
              </div>
        </Col>
      </Row>
      <br />
      <Row className="secRow">
        <Col sm={3}>
          <Hexagon 
            style={{stroke: ''}}
            href='/brainreflexgames-connectdots'
            backgroundImage={connectDotsImage}
            flatTop
            backgroundScale ="1.05"
            >
          </Hexagon>
          <div className="card-body">
                <div className="playButton">
                <Link
                  to='/brainreflexgames-connectdots'
                  className="btn"
                >
                  Play Now
                </Link>
                </div>
              </div>
        </Col>
        </ Row>
      </CardStyle>
    </div>
)

export const MemoryGames = () => (
  <div className="memoryGames">
    <CardStyle>
    <a className="titleMemory" href="/braingames">
      <img src = {memoryTitle} className="titleImage"></img>
    </a>
    <br />
    <br />
    <Row className="gameRow">
      <Col sm={3}>
        <Hexagon 
          style={{stroke: ''}}
          href='/brainmemorygame-remembernew'
          backgroundImage={rememberNewImage}
          flatTop
          backgroundScale ="1.05"
          >
        </Hexagon>
        <div className="card-body">
              <div className="playButton">
              <Link
                to='/brainmemorygame-remembernew'
                className="btn"
              >
                Play Now
              </Link>
              </div>
            </div>
      </Col>
      <Col sm={3}>
        <Hexagon 
          style={{stroke: ''}}
          href='/brainmemorygame-rememberold'
          backgroundImage={rememberOldImage}
          flatTop
          backgroundScale ="1.05"
          >
        </Hexagon>
        <div className="card-body">
              <div className="playButton">
              <Link
                to='/brainmemorygame-rememberold'
                className="btn"
              >
                Play Now
              </Link>
              </div>
            </div>
      </Col>
      <Col xs={3}>
      <Hexagon 
          style={{stroke: ''}}
          href='/brainmemorygame-rememberthree'
          backgroundImage={rememberThreeImage}
          flatTop
          backgroundScale ="1.05"
          >
        </Hexagon>
        <div className="card-body">
              <div className="playButton">
              <Link
                to='/brainmemorygame-rememberthree'
                className="btn"
              >
                Play Now
              </Link>
              </div>
            </div>
      </Col>
      </ Row>
    </CardStyle>
  </div>
)

export default Home;

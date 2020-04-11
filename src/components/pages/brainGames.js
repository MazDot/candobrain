import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from '../Navbar.js';
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
  margin-left: 12%

}
.aboutButton {
  margin-left: 35%;
  font-size: 48px;
}
.aboutPara {
  margin-left: 15%;
  margin-right: 25%;

}
.articleImages:hover {
  scale:110%;
}
`;

class Home extends Component {
  render() {
    return (
      <DivStyles>
          <Navbar />
        <div className="container-fluid">
          <br />
          <br />
          <br />
          <ReflexGames />
          <br />
          <br />
          <MemoryGames />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        </DivStyles>
      
    );
  }
}

export const ReflexGames = () => (
    <div className="reflexGames">
      <CardStyle>
      <h5 className="titleMemory">REFLEX GAMES</h5>
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
    <h5 className="titleMemory">MEMORY GAMES</h5>
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

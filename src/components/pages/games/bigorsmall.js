import React, { Component } from 'react'
import Unity, { UnityContent } from "react-unity-webgl";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Navbar from '../../Navbar';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image';
import Hexagon from 'react-hexagon';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import tutImage from '../../../assets/Instructions/bigorsmall.png';
import arrowsImage from '../../../assets/gamesImages/arrows.png';
import colorsTextImage from '../../../assets/gamesImages/colorsvstext.png';
import compareSidesImage from '../../../assets/gamesImages/comparesides.png';
import connectDotsImage from '../../../assets/gamesImages/connectdots.png';

const Style = styled.div`
.tutorial {
    display:table;
}
`;

class bigorsmall extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        const unityContent = new UnityContent(
            "./games/bigorsmall/Build/BigOrSmall.json",
            "./games/bigorsmall/Build/UnityLoader.js"
          );
        return (
            <Style>
            <div>
                <Navbar />
                <br />
                <br />
                <Container>
                    <Col></Col>
                        <Col xs={12}>
                        <div class="smooth-scroll">
                            <a class="btn btn-info" href="#instructions">Click for Tutorial</a>
                        </div>
                        </Col>
                    <Col></Col>
                    <br />
                    <div id="game">
                    <Col></Col>
                    <Col xs={12} className="mt-5 pb-3"><Unity unityContent={unityContent}/></Col>
                    <Col></Col>
                    </div>
                    <div id="instructions">
                    <Col></Col>
                    <Col xs={12}>
                            <h4 className="mt-5">
                                Tutorial
                            </h4>
                            <br />
                            <Image src = {tutImage} fluid className="tutorial" ></Image>
                            <br />
                            <div class="smooth-scroll">
                                <a class="btn btn-info" href="#game">Start Game</a>
                            </div>
                        </Col>
                    <Col></Col>
                    </div>
                </Container>
                <br />
                <br />
                <br />
                <OtherReflexGamesbi />
                <br />
                <br />
                </div>
            </Style>
        )
    }
}

export const OtherReflexGamesbi = () => (
    <CardStyle>
    <div className="container">
      
      <h2 className="titleMemory">OTHER REFLEX GAMES</h2>
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
      </Row>
      
    </div>
    </CardStyle>
)

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
      font-size: 28px;
    }
  }
`;

export default bigorsmall;

import React, { Component } from 'react'
import Unity, { UnityContent } from "react-unity-webgl";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Navbar from '../../Navbar';
import styled from 'styled-components';
import Image from 'react-bootstrap/Image';
import tutImage from '../../../assets/Instructions/remembernew.png';
import Hexagon from 'react-hexagon';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import rememberOldImage from '../../../assets/gamesImages/rememberold.png';
import rememberThreeImage from '../../../assets/gamesImages/rememberthree.png';

const Style = styled.div`
.tutorial {
    display:table;
}
`;

class remembernew extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        const unityContent = new UnityContent(
            "./games/remembernew/Build/RememberNew.json",
            "./games/remembernew/Build/UnityLoader.js"
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
            <OtherMemoryGamesNew />
            </div>
            <br />
            <br />
            </Style>
        )
    }
}

export const OtherMemoryGamesNew = () => (
    <CardStyle>
    <div className="container">
      
      <h2 className="titleMemory">OTHER MEMORY GAMES</h2>
      <br />
      <br />
      <Row className="gameRow">
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

export default remembernew;

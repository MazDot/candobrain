import React from 'react';
import styled from 'styled-components';
import instaIcon from '../assets/instaIcon.png';
import youtubeIcon from '../assets/youtubeIcon.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class Footer extends React.Component {
  render () {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/* Column 1 */}
            <div className="col-md-3 col-sm-6">
              <h4>Contact Us</h4>
              <ul className="list-unstyled">
                <li >
                <Container>
                  <Row>
                    <Col xs = {3}>
                      <a style={{display: "table-cell"}} target="_blank" href="https://www.instagram.com/candobrain/" >
                        <img src={instaIcon} className="instaIcon"></img>
                      </a>
                    </Col>
                    <Col xs = {1}></Col>
                    <Col xs = {3}>
                    <a style={{display: "table-cell"}} target="_blank" href="https://www.youtube.com/channel/UC0aGJ9zAS18v1qfP3Ec7pAg?view_as=subscriber">
                    <img src={youtubeIcon} className="youtubeIcon"></img>
                    </a>
                    </Col>
                  </Row>
                </Container>
                
                
                </li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="col-md-3 col-sm-6">
              <h4>Links</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/braingames">Brain Games</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                
              </ul>
            </div>
            <div className="col-md-6 col-sm-6">
            </div>
          </div>
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}
}
export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    background: #202020;
    padding-top: 3rem;
    color: var(--mainWhite);
    font-family: Baloo Paaji 2;
  }

  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }

  ul li a {
    color: var(--mainGrey);
  }

  ul li a:hover {
    color: var(--mainLightGrey);
  }
  .instaIcon {
    width: 40px;
    height:40px;
    margin-left: 10px;
  }
  .youtubeIcon {
    width: 40px;
    height:40px;
  }
`;

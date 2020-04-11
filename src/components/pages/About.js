import React, { Component } from 'react';
import Navbar from '../Navbar';
import hamedImage from '../../assets/hamed.png';
import hedieImage from '../../assets/hedich.png';
import styled from 'styled-components';

const Style = styled.div`
.row {
    margin-left:16%;
    margin-bottom:100px;
    margin-top:80px;
}
.portraits {
    margin-left: 20%;
    margin-bottom:20px;
    width: 50%;
    height: 65%;
}
`;

class About extends Component {
    render() {
        return (
            <Style>
            <div>
                <Navbar />
                <br />
                <br />
                <div className="row">
                    <div className="col-4">
                        <div className="thumbnail">
                        <a>
                            <img className = "portraits" src={hamedImage} alt="Lights" />
                            <div className="caption">
                            <p>Since I was a kid I was into games, I really enjoy playing them and since I didn't know english
                             it was really challenging for me, I had to realize the game rules on my own which turns out to be
                            useful later on. now I want to design games and develop them, hopefully it would be challenging 
                            enough for everyone playing them.</p>
                            </div>
                        </a>
                        </div>
                    </div>
                    <div className="col-2">

                    </div>
                    <div className="col-4">
                        <div className="thumbnail">
                        <a>
                            <img className = "portraits" src={hedieImage} alt="Lights" />
                            <div className="caption">
                            <p>I studied psychology and I believe that all humans need a common language to communicate to each other.
                             So, I chose art language to share my abilities and knowledge. 
                             I think every one have the right to know their brain and improve it. 
                             my art follows this purpose, I hope that you will find it useful.</p>
                            </div>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
            </Style>
        )
    }
}

export default About;

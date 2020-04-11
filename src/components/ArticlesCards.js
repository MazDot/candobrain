import React, { Component } from 'react';
import { InfoConsumer } from './context';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ArticleCardtyle = styled.div`
.card{
  background : #333333;
}
  

`;

class ArticlesCard extends Component {
  render() {
    const { id, newsTitle, newsText, linkURL } = this.props.item;
    return (
      <InfoConsumer>
        {value => (
          <ArticleCardtyle>
          <div className="card container mt-4 mb-4 p-5">
            
              <div className="card-body">
                <h5 key={id} className="card-title text-light">
                  {newsTitle}
                </h5>
                <p className="card-text text-light">{newsText}</p>
                <Link to={linkURL} className="card-link">
                  Read More >>
                </Link>
              </div>
            
          </div>
          </ArticleCardtyle>
        )}
      </InfoConsumer>
    );
  }
}

export default ArticlesCard;
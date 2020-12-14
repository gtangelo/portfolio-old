import React from 'react';
import { Container } from '@material-ui/core'
import Card from '../components/Card'
import './index.css'
import Title from '../components/Title';

export default function BlogPage() {
  return (
    <div>
      <Container>
        <Title title='blog' />
        <div>
          <Card
            imageUrl='https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'
            title='Test'
            description='Test description hhhhhhhhhhhhhhhhhhhhhhhhhhhh Test description card-descriptioncard-descriptioncard-descriptioncard-descriptioncard-descriptioncard-descriptioncard-description'
            labels={[
              {
                id: 1,
                title: 'Experience',
              },
            ]}
            link='http://localhost:3000/#/blog'
            isHorizontal={true}
          />
          <br />
          <Card
            imageUrl='https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'
            title='Test'
            description='Test description '
            labels={[
              {
                id: 1,
                title: 'Experience',
              },
            ]}
            link='http://localhost:3000/#/blog'
            isHorizontal={true}
          />
          <br />
        </div>
      </Container>
    </div>
  );
}

import { Container } from '@material-ui/core';
import React from 'react';
import Overview from './Overview';
import SliderShow from './SliderShow';

import { Container as Classic } from './styles';

const Home: React.FC = () => {
  return (
    <Classic>
      <SliderShow />
      <Container>
        <Overview />
      </Container>
    </Classic>
  );
};

export default Home;

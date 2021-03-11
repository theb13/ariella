import React from 'react';
import OurPartners from '../../common/OurPartners';
import OurServices from '../../common/OurServices';
import OurTeam from '../../common/OurTeam';
import Overview from '../../common/Overview';
import { Padding } from '../../styles';
import SliderShow from './SliderShow';

import { Container  } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <SliderShow />
      <Padding>
        <Overview />
      </Padding>
      <Padding background>
        <OurServices />
      </Padding>
      <OurTeam/>
      <OurPartners/>
    </Container>
  );
};

export default Home;

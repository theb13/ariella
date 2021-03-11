import React from 'react';
import OurTeam from '../../common/OurTeam';
import Overview from '../../common/Overview';
import { Padding } from '../../styles';
import OurMission from './OurMission';

import { Container } from './styles';

const AboutUs: React.FC = () => {
  return (
    <Container>
      <Padding>
        <Overview />
      </Padding >
      <Padding background>
        <OurMission />
      </Padding>
      <OurTeam />

    </Container>
  );
};

export default AboutUs;

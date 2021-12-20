import React, { useState, useEffect } from 'react';

// Libraries
import { Helmet } from 'react-helmet';

// Components
import { Layout, EventHero, SpeakerSection, Container } from '../../../components';

// Assets
import { events } from '../../../../config/content';

const Events = ({ params }) => {
  const { year, key } = params;
  const [eventData, setEventData] = useState();

  useEffect(() => {
    const ed = events?.EVENTS.filter((data) => data.year === year)[0].events.filter(
      (event) => event.key === key,
    )[0];

    setEventData(ed);
  }, [year, key]);

  return (
    <Layout isContainer={false}>
      <Helmet>
        <title>{`TEDxNITRourkela | ${eventData?.name}`}</title>
        <meta name='title' content={`TEDxNITRourkela | ${eventData?.name}`} />
        <link rel='canonical' href={`https://tedxnitrourkela.com/${year}/${key}`} />
      </Helmet>
      {eventData && (
        <>
          <EventHero year={year} name={eventData.name} about={eventData.about} />
          <Container style={{ marginBottom: '100px' }}>
            <SpeakerSection title='Speakers' data={eventData.speakers} />
          </Container>
        </>
      )}
    </Layout>
  );
};

export default Events;

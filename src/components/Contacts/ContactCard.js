import PropTypes from 'prop-types';
import SocialButtonBlock from './SocialButtonBlock';
import { Paragraph, Title } from 'UI/ui-kit';

import {
  Wrap,
  Card,
  Name,
  Position,
  Photo,
  Location,
  LocationIcon,
  DescriptionWrapper,
  DescrWrap,
} from './Contacts.style';

export const ContactCard = ({
  img,
  name,
  position,
  social,
  location,
  description,
}) => {
  return (
    <Wrap>
      <Card>
        <Photo src={img} alt={name} width="250" height="250" />
        <DescriptionWrapper>
          <Name>{name}</Name>
          <Position>{position}</Position>
          <Location>
            <LocationIcon />
            {location}
          </Location>
          <SocialButtonBlock social={social} />
        </DescriptionWrapper>
      </Card>

      <DescrWrap>
        <Paragraph marginBottom={'40px'}>{description}</Paragraph>

        <Title textAlign={'left'} marginBottom={'20px'}>
          {' '}
          Other projects:
        </Title>
        <Paragraph>
          1.{' '}
          <a
            href="https://protest-fsdev.netlify.app/auth"
            target="_blank"
            rel="noopener noreferrer"
          >
            WEB APP "PRO TEST" ON REACT, NODE.JS
          </a>{' '}
        </Paragraph>
        <Paragraph>
          2.{' '}
          <a
            href="https://lampaburger.web.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            INTERNET SHOP "LAMPA-BURGER" ON REACT
          </a>{' '}
        </Paragraph>
      </DescrWrap>
    </Wrap>
  );
};

ContactCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  social: PropTypes.shape({
    linkedin: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    telegram: PropTypes.string.isRequired,
  }),
};

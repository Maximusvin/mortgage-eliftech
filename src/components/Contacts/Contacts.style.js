import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import GitHubIcon from '@material-ui/icons/GitHub';

import { COLORS } from 'assets/colors';

export const Wrapper = styled.main``;

export const Wrap = styled.div`
  display: flex;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Card = styled.div`
  max-width: 20%;
  background-color: #fff;
  margin-right: 50px;
  list-style: none;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

export const DescriptionWrapper = styled.div`
  padding-top: 15px;
`;

export const DescrWrap = styled.div`
  padding: 30px;
  width: 70%;
`;

export const Name = styled.h3`
  font-size: 14px;
  line-height: 12px;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const Position = styled.p`
  font-size: 14px;
  line-height: 12px;
  letter-spacing: 0.02em;
  margin-bottom: 15px;
`;

export const Location = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 12px;
  letter-spacing: 0.02em;
  margin-bottom: 15px;
`;

const LocationIconStyles = {
  root: {
    fontSize: '18px',
  },
};

export const LocationIcon = withStyles(LocationIconStyles)(LocationOnIcon);

const GitHubIconStyles = {
  root: {
    fontSize: '20px',
  },
};

export const GitIcon = withStyles(GitHubIconStyles)(GitHubIcon);

export const Photo = styled.img`
  width: 100%;
  overflow: hidden;
`;

export const Social = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #02172a;
  padding: 7px 10px 5px 10px;
`;

export const SocialItem = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const SocialLink = styled.a`
  display: block;
  color: #fff;
  transition: color 0.2s linear;

  &:hover {
    color: ${COLORS.orange};
  }
`;

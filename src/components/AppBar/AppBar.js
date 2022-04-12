import { useState } from 'react';
import PropTypes from 'prop-types';

import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';

import { Modal } from '../../UI';
import { Paragraph, Box, Title, MainButton } from 'UI/ui-kit';
import {
  Header,
  LogoWrap,
  Logo,
  Navigation,
  NavLink,
  LinkName,
  ControlsWrap,
  ControlBtn,
} from './AppBar.style';
import logo from 'assets/images/logo.png';

export const AppBar = () => {
  const [visible, setVisible] = useState(false);

  const onOpenModal = () => {
    setVisible(true);
  };

  const onCloseModal = () => {
    setVisible(false);
  };

  return (
    <Header>
      <LogoWrap to="/">
        <Logo src={logo}></Logo>
        Mortgage - ElifTech
      </LogoWrap>

      <Navigation>
        <NavLink to="/calculator">
          <AccountBalanceWalletIcon />
          <LinkName>Calculator</LinkName>
        </NavLink>
        <NavLink to="/bank-settings">
          <AccountBalanceIcon />
          <LinkName>Bank settings</LinkName>
        </NavLink>
        <NavLink to="/contacts">
          <PermContactCalendarIcon />
          <LinkName>Contacts</LinkName>
        </NavLink>
      </Navigation>

      <ControlsWrap>
        <ControlBtn title="In developing" onClick={onOpenModal}>
          <MailOutlineIcon />
        </ControlBtn>
        <ControlBtn title="In developing" onClick={onOpenModal}>
          <NotificationsNoneIcon />
        </ControlBtn>
        <ControlBtn title="In developing" onClick={onOpenModal}>
          <SettingsIcon />
        </ControlBtn>
      </ControlsWrap>

      {visible && (
        <Modal onCloseModal={onCloseModal} padding={'40px'}>
          <Box>
            <Title marginBottom={'40px'}>Attention</Title>

            <Paragraph>
              We bring our apologies. This functionality will be available in
              future updates.
            </Paragraph>
            <Paragraph>
              Your wishes or suggestions can be sent to email:{' '}
              <a href="mailto:Maximusvin@gmail.com">Maximusvin@gmail.com</a>
            </Paragraph>

            <MainButton
              marginTop={'30px'}
              marginLeft={'auto'}
              marginRight={'auto'}
              onClick={() => onCloseModal()}
            >
              Close
            </MainButton>
          </Box>
        </Modal>
      )}
    </Header>
  );
};

AppBar.defaultProps = {
  children: '',
};

AppBar.propTypes = {
  children: PropTypes.string.isRequired,
};

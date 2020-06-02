import React from 'react';
import { Layout as AntdLayout } from 'antd';
import { Link } from 'react-router-dom';

import appleIcon from '../../assets/apple.jpg';
import googleIcon from '../../assets/google.jpg';
import microsoftIcon from '../../assets/microsoft.png';
import Button from '../button';
import {
  HeaderX,
  NavLinkContainer,
  Logo,
  NavLinks,
  Title,
  FooterX,
  LinkX,
  FooterLinksContainer,
  FooterLeft,
  FooterRight,
  SocialIconContainer,
  SocialButton,
  ContentX,
} from './style';

const Layout = ({ title, children }) => (
  <AntdLayout>
    <HeaderX>
      <NavLinkContainer>
        <Logo to="/">DEMO Streaming</Logo>
        <NavLinks>
          <Link to="#">Login</Link>
          <Button>Start your free trial</Button>
        </NavLinks>
      </NavLinkContainer>
    </HeaderX>
    <Title title={title}>{title}</Title>
    <ContentX>
      <div className="site-layout-background" style={{ padding: 24 }}>
        {children}
      </div>
    </ContentX>
    <FooterX>
      <div style={{ marginBottom: '10px' }}>
        <LinkX to="#">Home</LinkX>
        <LinkX to="#">Terms and Conditions</LinkX>
        <LinkX to="#">Privacy Policy</LinkX>
        <LinkX to="#">Collection Statement</LinkX>
        <LinkX to="#">Help</LinkX>
        <LinkX to="#">Manage Account</LinkX>
      </div>
      <p>Copyight @ 2020 DEMO Streaming All Right Reserved.</p>
      <FooterLinksContainer>
        <FooterLeft>
          <SocialIconContainer to="#">
            <span>
              <i className="fab fa-facebook-f"></i>
            </span>
          </SocialIconContainer>
          <SocialIconContainer to="#">
            <span>
              <i className="fab fa-twitter"></i>
            </span>
          </SocialIconContainer>
          <SocialIconContainer to="#">
            <span>
              <i className="fab fa-instagram"></i>
            </span>
          </SocialIconContainer>
        </FooterLeft>
        <FooterRight>
          <SocialButton to="#">
            <img src={appleIcon} alt="stores" />
          </SocialButton>
          <SocialButton to="#">
            <img src={googleIcon} alt="stores" />
          </SocialButton>
          <SocialButton to="#">
            <img src={microsoftIcon} alt="stores" />
          </SocialButton>
        </FooterRight>
      </FooterLinksContainer>
    </FooterX>
  </AntdLayout>
);

export default Layout;

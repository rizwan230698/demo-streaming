import styled from 'styled-components';
import { Layout as AntdLayout } from 'antd';
import { Link } from 'react-router-dom';
import media from '../media';

const { Header, Content, Footer } = AntdLayout;

export const HeaderX = styled(Header)`
  background-color: #017dfe;
  height: 50px;

  ${media.mobile`
  height: 80px;
  padding:  10px 15px 5px
  `}
`;

export const NavLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  ${media.mobile`
    flex-direction:column;
    align-items: flex-start;
    justify-content:flex-start;
    `}
`;

export const Logo = styled(Link)`
  color: white;
  margin: 0;
  font-size: 22px;
  font-weight: 600;

  ${media.mobile`
  line-height: 20px;
  align-self: center;
  `}
`;

export const NavLinks = styled.div`
  & > *:not(:last-child) {
    margin-right: 20px;
  }
  ${media.mobile`
  align-self: flex-end;
  display:flex;
  align-items:center;
  `}
`;

export const Title = styled.h3`
  color: white;
  background-color: #414141;
  padding: 10px 0 10px 50px;
  font-weight: 300;

  ${media.mobile`
    padding: 10px 24px
    `}
`;

export const ContentX = styled(Content)`
  background-color: white;
  padding: 0 50px;
  min-height: calc(100vh - 256px);

  ${media.mobile`
    padding:0
    `}
`;

export const FooterX = styled(Footer)`
  background-color: #1e1e1e;
  color: white;
  font-size: 11px;

  ${media.mobile`
  padding: 24px 20px
  `}
`;

export const LinkX = styled(Link)`
  color: white;
  padding-right: 10px;

  &:not(:first-child) {
    padding-left: 10px;
  }

  &:not(:last-child) {
    border-right: 1px solid white;
  }
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  color: white;
  padding: 10px 0;
`;

export const FooterLeft = styled.div`
  font-size: 20px;

  & > * {
    margin-right: 15px;
  }

  ${media.tablet`
  display:flex;
  flex-direction:column;
  `}
`;

export const SocialIconContainer = styled(Link)`
  transition: all 0.3s ease;

  & i {
    transition: all 0.3s ease;
    backface-visibility: hidden;
  }
  &:hover i {
    transform: scale(1.05) translateY(-2px);
  }
`;

export const SocialButton = styled(Link)`
  &:not(:last-child) {
    margin-right: 10px;
  }
  &:last-child img {
    height: 40px;
  }
  & img {
    border-radius: 4px;
  }

  ${media.mobile`
    margin-bottom:10px
  `}
`;

export const FooterRight = styled.div`
  & > * {
    margin-bottom: 10px;
  }
  ${media.mobile`
  display:flex;
  flex-direction:column;
  `}
`;

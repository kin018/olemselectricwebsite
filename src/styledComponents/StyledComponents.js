import styled from 'styled-components';

// Theme Definitions
export const darkTheme = {
  bg: '#1C1C27',
  bgLight: '#1C1E27',
  primary: 'Green',
  text_primary: '#F2F3F4',
  text_secondary: '#b1b2b3',
  card: '#171721',
  card_light: '#121212',
  button: '#854CE6',
  white: '#FFFFFF',
  black: '#000000',
  input: '#171721' + 99,
  border: '#644ed7',
  buttonHover: '#854CE6',
};

export const lightTheme = {
  bg: '#F8F8FF',
  bgLight: '#f0f0f0',
  primary: 'Green',
  text_primary: '#111111',
  text_secondary: 'black',
  card: '#FFFFFF',
  card_light: 'rgba(255, 255, 255, 1)',
  button: '#5c5b5b',
  white: '#FFFFFF',
  black: '#000000',
  input: '#e2e8f0',
  border: '#cad4e0',
  buttonHover: '#854CE6',
};

// App.js Main styling
export const MainAppContainer = styled.div.attrs({
  className: 'MainAppContainer',
})`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

// Nav
export const NavbarContainer = styled.ul.attrs({
  className: 'NavbarContainer',
})`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const StyledNavLink = styled.a.attrs({
  className: 'StyledNavLink',
})`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.primary};
    border-bottom: 1.5px solid ${({ theme }) => theme.primary};
  }
`;

//ThemeIcon
export const StyledThemeDarkLightLogo = styled.i.attrs({
  className: 'StyledThemeDarkLightLogo',
})`
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover {
    color: ${({ theme }) => theme.primary};
  }
`;

// Header
export const AppHeader = styled.div.attrs({
  className: 'AppHeader',
})`
  background-color: ${({ theme }) => theme.card_light};
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  top: 0;
  z-index: 10;
  position: sticky;

  @media (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const HeaderMainContainer = styled.div.attrs({
  className: 'HeaderMainContainer',
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

export const HeaderThemeMobileMenuWrapper = styled.div.attrs({
  className: 'HeaderThemeMobileMenuWrapper',
})`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

export const HeaderThemeMobileMenuBtns = styled.div.attrs({
  className: 'HeaderThemeMobileMenuBtns',
})`
  display: flex;
  align-items: center;
  margin-right: -16px;

  svg {
    vertical-align: middle;
  }
`;

export const StyledThemeDarkLightLogoInvisible = styled.i.attrs({
  className: 'StyledThemeDarkLightLogoInvisible',
})`
  visibility: hidden;
    }
  `;

export const StyledThemeDarkLightLogoRightMargin = styled.div.attrs({
  className: 'StyledThemeDarkLightLogoRightMargin',
})`
    margin-right: 1rem
    }
  `;

export const HeaderBurgerMenu = styled.div.attrs({
  className: 'HeaderBurgerMenu',
})`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 50px;
  gap: 16px;
  width: 100%;
  padding: 10px 40px;
  background: ${({ theme }) => theme.card_light};
  transition: all 0.6s ease-in-out;
  transform: ${({ isDropdownActive }) =>
    isDropdownActive ? 'translateY(0)' : 'translateY(-100%)'};
  border-radius: 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isDropdownActive }) => (isDropdownActive ? '100%' : '0')};
  z-index: ${({ isDropdownActive }) => (isDropdownActive ? '1000' : '-1000')};
  position: absolute;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 65%;
    transform: translateX(-50%);
    width: 30px;
    height: 20px;
    background: ${({ theme }) => theme.card_light};
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  }
`;

export const HeaderDropdownMenuContainer = styled.div.attrs({
  className: 'HeaderDropdownMenuContainer',
})`
    @media screen and (min-width: 769px) {
      position: fixed;
      bottom: -100%;
      left: 0;
      width: 100%;
      background-color: ${({ theme }) => theme.primary}; */
      padding: 2rem 1.5rem 4rem;
      box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
      border-radius: 1.5rem 1.5rem 0 0;
      transition: 0.3s;
    }
  `;

export const StyledHeaderDropdownMenuLink = styled.a.attrs({
  className: 'StyledHeaderDropdownMenuLink',
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.813rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.text_primary};

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const StyledHeaderDropdownMenuIcon = styled.i.attrs({
  className: 'StyledHeaderDropdownMenuIcon',
})`
  font-size: 1.2rem;
    }
  `;

//Footer
export const FooterMainContainer = styled.div.attrs({
  className: 'FooterMainContainer',
})`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
`;

export const FooterWrapper = styled.footer.attrs({
  className: 'FooterWrapper',
})`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;
export const Copyright = styled.p.attrs({
  className: 'Copyright',
})`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

export const SocialMediaIconDiv = styled.div.attrs({
  className: 'SocialMediaIconDiv',
})`
  display: flex;
  margin-top: 1rem;
`;

export const SocialMediaIconLink = styled.a.attrs({
  className: 'SocialMediaIconLink',
})`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) =>
    theme.text_primary}; //This changes the Icon Color but may need to change TextLoop Color because I do not like that they match

  transition: color 0.2s ease-in-out;
  &:hover {
    transform: translateY(-1px);
    color: ${({ theme }) => theme.primary};
  }
`;

export const FooterName = styled.h1.attrs({
  className: 'FooterName',
})`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;

export const FooterLink = styled.a.attrs({
  className: 'FooterLink',
})`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem; //Need to change font size this is too large currently
  transition: color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-1px);
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const FooterNav = styled.nav.attrs({
  className: 'FooterNav',
})`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

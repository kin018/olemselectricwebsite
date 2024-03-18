import styled from 'styled-components';

// Theme Definitions
export const darkTheme = {
  bg: 'Pink',
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
  bg: 'purple',
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

//Contact
export const ContactMainContainer = styled.div.attrs({
  className: 'ContactMainContainer',
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding-bottom: 150px;
`;

export const ContactWrapper = styled.div.attrs({
  className: 'ContactWrapper',
})`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const ContactMainTitle = styled.div.attrs({
  className: 'ContactMainTitle',
})`
  font-size: 34px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 30px;
  text-align: center;
  text-transform: uppercase;
`;

export const ContactHubContainer = styled.div.attrs({
  className: 'ContactHubContainer',
})`
  width: 100%;
  display: flex;
  margin-top: 30px;
  gap: 30px;
  background-color: ${({ theme }) => theme.card};
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  padding: 18px 36px;
  z-index: 1;
  }

  @media (max-width: 1099px) {
    max-width: 535px;
    padding: 20px 36px 0;
  }

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 20px 36px 0;
  }

  @media (max-width: 500px) {
    max-width: 330px;
    padding: 20px 36px 0;
  }
`;
export const ContactHubMediaContainer = styled.div.attrs({
  className: 'ContactHubMediaContainer',
})`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 30px;

  @media (max-width: 1099px) {
    display: none;
  }
`;
export const ContactHubMediaHeader = styled.h2.attrs({
  className: 'ContactHubMediaHeader',
})`
  color: ${({ theme }) => theme.text_primary};
  font-size: 90px;
  line-height: 1;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 150px 40px 0;
  justify-content: center;
`;
export const ContactHubMediaVerticalHeader = styled.h2.attrs({
  className: 'ContactHubMediaVerticalHeader',
})`
  display: none;

  @media (max-width: 1099px) {
    display: block;
    color: ${({ theme }) => theme.text_primary};
    font-size: 26px;
    line-height: 1;
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
    justify-content: center;
  }
`;
export const ContactHubMediaBlob = styled.div.attrs({
  className: 'ContactHubMediaBlob',
})`
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  overflow: hidden;
  border-radius: 16px;
`;

export const ContactHubFormContainer = styled.div.attrs({
  className: 'ContactHubFormContainer ',
})`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin: 30px 0px;
  max-width: 434px;
`;

export const ContactHubFormInput = styled.input.attrs({
  className: 'ContactHubFormInput',
})`
  width: 100%;
  height: 34px;
  background-color: ${({ theme }) => theme.input};
  color: ${({ theme }) => theme.text_primary};
  letter-spacing: 1px;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 6px;
  text-transform: uppercase;

  &:focus {
    border: 2px solid lightblue;
    outline: none;
  }
`;

export const ContactHubFormMessageInput = styled.textarea.attrs({
  className: 'ContactHubFormMessageInput',
})`
  width: 100%;
  background-color: ${({ theme }) => theme.input};
  color: ${({ theme }) => theme.text_primary};
  letter-spacing: 1px;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 6px;
  text-transform: uppercase;

  &:focus {
    border: 2px solid lightblue;
    outline: none;
  }
`;

export const ContactHubSendButton = styled.button.attrs({
  className: 'ContactHubSendButton',
})`
width: 100%;
height: 44px;
background-color: #644ed7;
color: white;
overflow: hidden;
cursor: pointer;
border: .01px solid ${({ theme }) => theme.border};
border-radius: 6px;
transition: all .2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.buttonHover};
  }}
`;

export const ContactHubAltSendButton = styled.div.attrs({
  className: 'ContactHubAltSendButton',
})`
width: 100%;
height: 44px;
transition: all .2s ease-in-out;

&:hover {
  transform: translate3d(0px, -33px, 0px);
}}
`;

export const ContactHubAltSendButtonText = styled.span.attrs({
  className: 'ContactHubAltSendButtonText',
})`
  display: block;
  padding-top: 6px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 16px;
`;

export const ContactHubAltSendButtonIcon = styled.div.attrs({
  className: 'ContactHubAltSendText',
})`
  display: block;
  padding-top: 12px;
  font-size: 16px;
`;

export const ContactBlobImgSVGWrapper = styled.div.attrs({
  className: 'ContactBlobImgSVGWrapper',
})`
  justify-self: center;
  position: absolute;
  top: 0;
  bottom: -6px;
  fill: #023f92;
  width: 92%;
  z-index: -1;
  animation: moveAnimation 10s ease-in-out infinite;
  transform-origin: 50% 50%;
  pointer-events: none;

  @keyframes moveAnimation {
    0% {
      transform: scale(1) translate(10px, -30px);
    }
    38% {
      transform: scale(0.8, 1) translate(40%, 30%) rotate(160deg);
    }
    40% {
      transform: scale(0.8, 1) translate(40%, 30%) rotate(160deg);
    }
    78% {
      transform: scale(1.3) translate(0%, 50%) rotate(-20deg);
    }
    80% {
      transform: scale(1.3) translate(0%, 50%) rotate(-20deg);
    }
    100% {
      transform: scale(1) translate(10px, -30px);
    }
  }
`;

//Home Component
export const HomeMainContainer = styled.div.attrs({
  className: 'HomeMainContainer',
})`
  display: flex;
  justify-content: center;
  position: relative;
  background-color: ${({ theme }) => theme.card_light};
  padding: 80px 30px;

  @media (min-width: 961px) {
    height: 100vh; //full screen height for landing page
    width: 100vw; //full screen width for landing page
  }

  @media (max-width: 960px) {
    padding: 66px 16px;
  }

  @media (max-width: 640px) {
    padding: 32px 16px;
  }

  @media (max-width: 363px) {
    padding: 32px 16px;
  }

  z-index: 1;
`;

export const HomeMainWrapper = styled.div.attrs({
  className: 'HomeMainWrapper',
})`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const HomeDescriptionContainer = styled.div.attrs({
  className: 'HomeDescriptionContainer',
})`
  width: 100%;
  order: 1; // Content order on larger screens

  @media (max-width: 960px) {
    order: 2; // Content order on smaller screens
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2; // Content order on smaller screens
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

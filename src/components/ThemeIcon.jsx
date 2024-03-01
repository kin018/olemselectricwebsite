import React, { useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { StyledThemeDarkLightLogo } from '../styledComponents/StyledComponents';

function ThemeIcon({ toggleTheme, isDarkTheme }) {
  const [isToggled, setIsToggled] = useState(isDarkTheme);

  const onToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };
  return (
    <StyledThemeDarkLightLogo onClick={onToggle}>
      {isToggled ? <FiSun /> : <FiMoon />}
    </StyledThemeDarkLightLogo>
  );
}

export default ThemeIcon;

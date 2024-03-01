import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-scroll';
import {
  StyledHeaderDropdownMenuIcon,
  StyledHeaderDropdownMenuLink,
} from '../styledComponents/StyledComponents';

function HeaderDropdownMenu() {
  return (
    <>
      <Link to="home" smooth duration={300} offset={-100}>
        <StyledHeaderDropdownMenuLink>
          <StyledHeaderDropdownMenuIcon>
            <Icon icon="uil:estate" />
          </StyledHeaderDropdownMenuIcon>
          Home
        </StyledHeaderDropdownMenuLink>
      </Link>
      <Link to="about" smooth duration={300} offset={-100}>
        <StyledHeaderDropdownMenuLink>
          <StyledHeaderDropdownMenuIcon>
            <Icon icon="uil:file-alt" />
          </StyledHeaderDropdownMenuIcon>
          About
        </StyledHeaderDropdownMenuLink>
      </Link>
      <Link to="services" smooth duration={300} offset={-100}>
        <StyledHeaderDropdownMenuLink>
          <StyledHeaderDropdownMenuIcon>
            <Icon icon="uil:briefcase-alt" />
          </StyledHeaderDropdownMenuIcon>
          Services
        </StyledHeaderDropdownMenuLink>
      </Link>
      <Link to="testimonials" smooth duration={300} offset={-100}>
        <StyledHeaderDropdownMenuLink>
          <StyledHeaderDropdownMenuIcon>
            <Icon icon="uil:scenery" />
          </StyledHeaderDropdownMenuIcon>
          Testimonials
        </StyledHeaderDropdownMenuLink>
      </Link>
      <Link to="contact" smooth duration={300} offset={-100}>
        <StyledHeaderDropdownMenuLink>
          <StyledHeaderDropdownMenuIcon>
            <Icon icon="uil:message" />
          </StyledHeaderDropdownMenuIcon>
          Contact
        </StyledHeaderDropdownMenuLink>
      </Link>
    </>
  );
}

export default HeaderDropdownMenu;

import React from 'react';
import { colors } from '../theme/theme';
import styled from 'styled-components';
import CategoryIcon from './CategoryIcon';
import iconAll from '../assets/img/icon-all.png';
import iconEtc from '../assets/img/icon-etc.png';
import iconJs from '../assets/img/icon-js.png';
import iconPython from '../assets/img/icon-python.png';
import iconC from '../assets/img/icon-c.png';
import iconJava from '../assets/img/icon-java.png';
import iconNode from '../assets/img/icon-node.png';
import iconSpring from '../assets/img/icon-spring.png';
import iconReact from '../assets/img/icon-react.png';

const icons = [
  iconAll,
  iconSpring,
  iconJava,
  iconPython,
  iconReact,
  iconJs,
  iconNode,
  iconC,
  iconEtc,
];

const Nav = ({ className }) => {
  return (
    <>
      <StNav className={className}>
        <StNavList>
          {icons.map((icon) => (
            <CategoryIcon key={icon} src={icon} />
          ))}
        </StNavList>
      </StNav>
    </>
  );
};

export default Nav;

const StNav = styled.nav`
  width: 100%;
  height: 90px;
  background: ${colors.boxColor};
  border-radius: 50px;
`;

const StNavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

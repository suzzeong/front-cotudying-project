import React, { useState } from 'react';
import { colors } from '../theme/theme';
import styled from 'styled-components';
import CategoryButton from './CategoryButton';
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
  { icon: iconAll, value: 'All' },
  { icon: iconSpring, value: 'Spring' },
  { icon: iconJava, value: 'Java' },
  { icon: iconReact, value: 'React' },
  { icon: iconJs, value: 'JavaScript' },
  { icon: iconNode, value: 'Node' },
  { icon: iconPython, value: 'Python' },
  { icon: iconC, value: 'C' },
  { icon: iconEtc, value: 'Etc' },
];

const Nav = ({ className, category, onClick, isSelect }) => {
  return (
    <>
      <StNav className={className}>
        <StNavList>
          {icons.map((icon) => (
            <CategoryButton
              key={icon.icon}
              src={icon}
              onClick={onClick}
              category={category}
              value={icon.value}
              isSelect={isSelect}
            />
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

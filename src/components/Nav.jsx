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
  { icon: iconAll, value: 'all' },
  { icon: iconSpring, value: 'spring' },
  { icon: iconJava, value: 'java' },
  { icon: iconReact, value: 'react' },
  { icon: iconJs, value: 'js' },
  { icon: iconNode, value: 'node' },
  { icon: iconPython, value: 'python' },
  { icon: iconC, value: 'c' },
  { icon: iconEtc, value: 'etc' },
];

const Nav = ({ className }) => {
  const [categoryName, setCategoryName] = useState('all');

  console.log('categoryName', categoryName);

  return (
    <>
      <StNav className={className}>
        <StNavList>
          {icons.map((icon) => (
            <CategoryButton
              key={icon.icon}
              src={icon}
              onClick={() => setCategoryName(icon.value)}
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

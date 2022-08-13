import React from 'react';
import styled from "styled-components";
import js from "../assets/img/icon-js.png";
import CommonButton from './elements/CommonButton';
import CommonText from './elements/CommonText';

const StudyInfo = () => {
  return (
    <div>
      <div>
        <StLanguage>
          <img src={js} alt='아이콘'/>
          <CommonText>모집 중 / 모집완료</CommonText>
          <CommonButton />
        </StLanguage>
      </div>
    </div>
  );
};

export default StudyInfo;

const StLanguage = styled.div`
  
`
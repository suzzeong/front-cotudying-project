import styled from 'styled-components';
import StudyCard from './StudyCard';
import { __getCotudy } from '../redux/modules/boardSlice';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const StudyList = ({ className, data }) => {
  const dispatch = useDispatch();
  const { isLoading, error, cotudy } = useSelector((state) => state.cotudy);

  console.log(cotudy);

  // if (isLoading) {
  //   return <div>로딩중 ...</div>;
  // }
  // if (error) {
  //   return <div>{error.message}</div>;
  // }

  useEffect(() => {
    dispatch(__getCotudy());
  }, [dispatch]);

  return data.length === 0 ? (
    <StEmpty>모집 중인 스터디가 없습니다.</StEmpty>
  ) : (
    <StListContainer className={className}>
      {data.length !== 0
        ? data.map((item) => <StudyCard key={item.id} data={item} />)
        : null}
    </StListContainer>
  );
};

export default StudyList;

const StListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
`;

const StEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  height: 300px;
`;

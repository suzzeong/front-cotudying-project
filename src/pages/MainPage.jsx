import Layout from '../layout/Layout';
import Header from '../components/Header';
import Nav from '../components/Nav';
import StudyList from '../components/StudyList';
import styled from 'styled-components';
import CommonButton from '../components/elements/CommonButton';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { __getCotudy, __getDetail } from '../redux/modules/boardSlice';
import { getCookie } from '../shared/Cookie';

const MainPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [category, setCategory] = useState('all');

  const data = useSelector((state) => state.cotudy.cotudy);

  const handleCategory = (e) => {
    setCategory(e.target.alt);
  };

  const filteredData = () => {
    return data.filter((item) => item.category === category);
  };

  const handleCreate = () => {
    if (getCookie('ACCESS_TOKEN') !== undefined) {
      navigate('/create');
    } else {
      alert('로그인이 필요한 서비스입니다.');
      navigate('/login');
    }
  };

  useEffect(() => {
    dispatch(__getCotudy());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Layout>
        <StNav category={category} onClick={handleCategory} />
        <StButton>
          <CommonButton text='모집하기' onClick={handleCreate} fz='20px' />
        </StButton>
        <StStudyList data={category === 'all' ? data : filteredData()} />
      </Layout>
    </>
  );
};

export default MainPage;

const StNav = styled(Nav)`
  margin-top: 60px;
`;

const StStudyList = styled(StudyList)`
  margin-top: 30px;
`;

const StButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
`;

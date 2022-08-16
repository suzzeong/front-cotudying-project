import Layout from '../layout/Layout';
import Header from '../components/Header';
import Nav from '../components/Nav';
import StudyList from '../components/StudyList';
import styled from 'styled-components';
import CommonButton from '../components/elements/CommonButton';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { _getCotudy } from '../redux/modules/boardSlice';
import { RESP } from '../response';

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

  useEffect(() => {
    dispatch(_getCotudy());
  }, [dispatch]);

  // console.log(data);
  // console.log(category);
  // console.log(filteredData());

  return (
    <>
      <Header />
      <Layout>
        <StNav category={category} onClick={handleCategory} />
        <StButton>
          <CommonButton
            text='모집하기'
            onClick={() => navigate('/create')}
            fz='20px'
          />
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

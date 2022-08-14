import Layout from '../layout/Layout';
import Header from '../components/Header';
import Nav from '../components/Nav';
import StudyList from '../components/StudyList';
import styled from 'styled-components';
import CommonButton from '../components/elements/CommonButton';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Layout>
        <StNav />
        <StButton>
          <CommonButton
            text='모집하기'
            onClick={() => navigate('/create')}
            fz='20px'
          />
        </StButton>
        <StStudyList />
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

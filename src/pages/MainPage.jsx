import Layout from '../layout/Layout';
import Header from '../components/Header';
import Nav from '../components/Nav';
import StudyList from '../components/StudyList';
import styled from 'styled-components';
import CommonTextarea from '../components/elements/CommonTextarea';

const MainPage = () => {
  return (
    <>
      <Header />
      <Layout>
        <StNav />
        <StStudyList />
      </Layout>
    </>
  );
};

const StNav = styled(Nav)`
  margin-top: 60px;
`;

const StStudyList = styled(StudyList)`
  margin-top: 80px;
`;

export default MainPage;

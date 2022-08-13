import Layout from "../layout/Layout";
import Header from "../components/Header";
import StudyInfo from '../components/StudyInfo';

const DetailPage = () => {
  return (
    <>
      <Header />
      <Layout>
        <StudyInfo/>
      </Layout>
    </>
  );
};

export default DetailPage;

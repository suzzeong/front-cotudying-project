import Layout from "../layout/Layout";
import Header from "../components/Header";
import StudyInfo from '../components/StudyInfo';

const DetailPage = () => {
  return <div>
    <>
      <Header />
      <Layout>
        <StudyInfo/>
      </Layout>
    </>
    </div>;
};

export default DetailPage;

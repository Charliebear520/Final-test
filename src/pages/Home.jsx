import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { theme } from "antd";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import products from "../json/products.json";
import IGList from "../components/IGList/index";
import photos from "../json/igphotos.json";
import CategoryList from "../components/CategoryList";
import categories from "../json/category.json";
import Intro from "../components/Intro";
import DetailList from "../components/DetailList";
import DetailList2 from "../components/DetailList2";
import _ from "lodash";
import { useProductsByCategory } from "../react-query";
import MotionDiv from "../components/MotionDiv";

function Home() {
  const {
    token: { colorBgBase, colorTextBase },
  } = theme.useToken();
  const { categoryName } = useParams();
  const { data, isLoading } = useProductsByCategory(categoryName);
  const categories = data || [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]; //有小bug不知如何解決
  // const title = _.startCase(categoryName);
  const title = "HEAD & SHOULDER";

  return (
    <MotionDiv className="mainLayout">
      <Helmet>
        <title>{title}</title>
        <style>{`
            body { 
              background-color: ${colorBgBase}; 
              color: ${colorTextBase}
            }
        `}</style>
      </Helmet>
      <Header className="layoutHeader" title={title} slogan="HIAR" />
      <div className="layoutContent ">
        <Intro />
        <CategoryList categories={categories} isLoading={isLoading} />
        <DetailList />
        <DetailList2 />

        <IGList photos={photos} />
      </div>
      <Footer className="layoutFooter" />
    </MotionDiv>
  );
}

export default Home;

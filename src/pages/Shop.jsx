import { Helmet } from "react-helmet-async";
import { theme } from "antd";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import products from "../json/products.json";
import IGList from "../components/IGList/index";
import photos from "../json/igphotos.json";
// import CategoryList from "../components/CategoryList";
import categories from "../json/category.json";
import Intro from "../components/Intro";
import DetailList from "../components/DetailList";
import DetailList2 from "../components/DetailList2";
import ShopAll from "../components/ShopAll";
import { useProducts } from "../react-query";

function Shop() {
  const {
    token: { colorBgBase, colorTextBase },
  } = theme.useToken();
  const title = "HEAD & SHOULDER";

  const { data, isLoading } = useProducts();
  const products = data || [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ];

  return (
    <div className="mainLayout">
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
        <ShopAll />
        <ProductList products={products} isLoading={isLoading} />
        <IGList photos={photos} />
      </div>
      <Footer className="layoutFooter" />
    </div>
  );
}

export default Shop;

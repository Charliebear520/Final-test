import { theme } from "antd";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OrderCard from "../components/OrderCard";

function Order() {
  const {
    token: { colorBgBase, colorTextBase },
  } = theme.useToken();

  return (
    <div className="mainLayout">
      <Helmet>
        <title>product</title>
        <style>{`
               body { 
                  background-color: ${colorBgBase}; 
                  color: ${colorTextBase}
               }
            `}</style>
      </Helmet>
      <Header
        title="Order Page"
        step1
        step2
        step3
        step4
        className="layoutHeader"
      />
      <div className="layoutContent container">
        <OrderCard />
      </div>
      <Footer className="layoutFooter" />
    </div>
  );
}

export default Order;

import React from "react";
import Layout from "./Layout/Layout";

const App: React.FC = () => {
  return (
    <Layout>
      <div>Content</div>
      {/* {path === "shop" && <Page1 />} */}
      {/* {path === "detail" && <Page2 />} */}
    </Layout>
  );
};

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "antd";

// pages & components
import Home from "./pages/Home";
import TodoAdd from "./pages/TodoAdd";
import Navbar from "./components/Navbar";

const { Header, Content, Sider, Footer } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <Navbar />
        </Sider>
        <Layout>
          <Content style={{ margin: "24px 16px 0" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/todo/add" element={<TodoAdd />} />
            </Routes>
          </Content>
          <Footer style={{ textAlign: "center" }}></Footer>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

import { Outlet } from "react-router-dom";
import { Layout as AntLayout, Breadcrumb } from "antd";
import Sidebar from "./sidebar";

const Layout = () => {
  const { Sider, Header, Content } = AntLayout;

  return (
    <AntLayout hasSider>
      <Sider
        width={250}
        className="p-6 border-r border-[rgba(0,0,0,0.1)] !overflow-auto !h-screen !fixed !left-0 !top-0 !bottom-0"
      >
        <Sidebar />
      </Sider>
      <Content className="ml-[250px]">
        <Header className="sticky pl-4 py-4 top-0 z-[1] border-b border-[rgba(0,0,0,0.1)] flex items-center">
          <Breadcrumb
            items={[
              {
                title: "Home",
              },
              {
                title: <a href="">Application Center</a>,
              },
              {
                title: <a href="">Application List</a>,
              },
              {
                title: "An Application",
              },
            ]}
          />
        </Header>
        <div className="p-4 flex flex-col min-h-screen">
          <Outlet />
        </div>
      </Content>
    </AntLayout>
  );
};

export default Layout;

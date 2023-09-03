/* eslint-disable react/prop-types */
import { RiAdminLine } from "react-icons/ri";
import { AiFillProfile, AiFillContacts } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { FaBlog } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { BiCategoryAlt } from "react-icons/bi";

import { Layout, Menu } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";
import { AdminContext } from "../../context/AdminContext";
import { useContext, useEffect, useState } from "react";

import comingsite from "../../assets/comingsite2.png";
import { Loader } from "../../utils/Loader";
const { Content, Sider } = Layout;

const AdminDashboard = () => {
  const { admin, logoutAdmin } = useContext(AdminContext);

  const { pathname } = useLocation();

  const [loading, setLoading] = useState(true);

  const menuItems = [
    {
      key: "1",
      icon: <RiAdminLine className="w-5 h-5" />,
      label: (
        <Link to="/admin" className="text-lg">
          Admins
        </Link>
      ),
    },
    {
      key: "2",
      icon: <BiCategoryAlt className="w-5 h-5" />,
      label: (
        <Link to="/admin/category" className="text-lg">
          Blogs Category
        </Link>
      ),
    },
    {
      key: "3",
      icon: <FaBlog className="w-5 h-5" />,
      label: (
        <Link to="/admin/blogs" className="text-lg">
          Blogs
        </Link>
      ),
    },
    {
      key: "4",
      icon: <AiFillProfile className="w-5 h-5" />,
      label: (
        <Link to="/admin/portfolio" className="text-lg">
          Portfolio
        </Link>
      ),
    },
    {
      key: "5",
      icon: <RiTeamFill className="w-5 h-5" />,
      label: (
        <Link to="/admin/team" className="text-lg">
          Team
        </Link>
      ),
    },
    {
      key: "6",
      icon: <AiFillContacts className="w-5 h-5" />,
      label: (
        <Link to="/admin/contacts" className="text-lg">
          Contacts
        </Link>
      ),
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          width={"220"}
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
          className="pt-5"
        >
          <Link to="/" className="demo-logo-vertical flex justify-center mb-4">
            <img src={comingsite} alt="" className="w-14" />
          </Link>
          <Menu
            theme="dark"
            mode="inline"
            items={menuItems.map((item) => ({
              key: item.key,
              icon: item.icon,
              label: item.label,
            }))}
            defaultSelectedKeys={[
              pathname === "/admin"
                ? "1"
                : pathname === "/admin/category"
                ? "2"
                : pathname === "/admin/blogs"
                ? "3"
                : pathname === "/admin/portfolio"
                ? "4"
                : pathname === "/admin/team"
                ? "5"
                : pathname === "/admin/contacts"
                ? "6"
                : "1",
            ]}
          />
          {admin && (
            <div className="flex justify-start ml-6 mt-4">
              <button
                onClick={logoutAdmin}
                className="flex justify-center items-center gap-2 rounded  bg-red-800 p-2 text-white"
              >
                <FiLogOut /> Logout
              </button>
            </div>
          )}
        </Sider>
        <Layout
          // className="overflow-y-scroll min-h-screen"
          className="h-[100vh] overflow-y-scroll overflow-x-hidden mb-0 bg-black"
        >
          <Content
            style={{
              margin: "24px 16px",
            }}
            // className="overflow-y-scroll min-h-screen"
          >
            <div
              style={{
                padding: 24,
                minHeight: "100vh",
              }}
              className="bg-[#080707] rounded"
            >
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
export default AdminDashboard;

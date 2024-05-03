import { useEffect, useState } from "react";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Loader from "../../common/Loader";
import { useLocation } from "react-router-dom";
import { UserProvider } from "../../context/profileContext";

function Layout({ element, ...props }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    //TODO find the best way to implement LOADER in ALL PAGES it's depends of api services
    setTimeout(() => {
      setLoading(false, 20000);
    });
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <UserProvider>
      <div className="bg-gray-200">
        {/* <!-- ===== Page Wrapper Start ===== --> */}
        <div className="flex h-screen overflow-hidden">
          {/* <!-- ===== Sidebar Start ===== --> */}
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* <!-- ===== Content Area Start ===== --> */}
          <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            {/* <!-- ===== Header Start ===== --> */}
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            {/* <!-- ===== Main Content Start ===== --> */}
            <main>
              <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                {element}
              </div>
            </main>
          </div>
        </div>
      </div>
    </UserProvider>
  );
}
export default Layout;

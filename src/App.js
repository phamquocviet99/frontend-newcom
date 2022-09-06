import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import "./App.css";
import Footer from "./Components/footer/footer";
import Navbar from "./Components/navbar/navbar";
import HomePage from "./Pages/Public/homePage/homePage";

function ClientLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
// const userData = JSON.parse(localStorage.getItem("user"));
// function AdminLayout() {
//   if (userData) {
//     return (
//       <div>
//         <LayoutNav />
//         <Outlet />
//       </div>
//     );
//   } else {
//     return <NotRegister />;
//   }
// }

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route path="/" element={<Navigate replace to="/trang-chu" />} />
          <Route path="/trang-chu" element={<HomePage />} />
        </Route>
        {/* <Route path="/dang-nhap" element={<Login />} /> */}
        {/* <Route path="/admin" element={<AdminLayout />}>
          <Route
            path="/admin"
            element={<Navigate replace to="/admin/danh-muc-du-an" />}
          />{" "}
          <Route
            path="/admin/danh-muc-san-pham"
            element={<CategoryProductPageAdmin />}
          />
          <Route path="/admin/thong-tin" element={<InformationPage />} />
          <Route path="/admin/danh-muc-du-an" element={<CategoryProject />} />
          <Route path="/admin/du-an" element={<ProjectPageAdmin />} />
          <Route path="/admin/du-an/tao" element={<ProjectCreatePageAdmin />} />
          <Route
            path="/admin/du-an/:id"
            element={<ProjectDetailsPageAdmin />}
          />
          <Route
            path="/admin/du-an/chinh-sua/:id"
            element={<ProjectUpdatePageAdmin />}
          />
          <Route path="/admin/tuyen-dung" element={<RecruitPageAdmin />} />
          <Route path="/admin/tuyen-dung/tao" element={<RecruitCreate />} />
          <Route
            path="/admin/tuyen-dung/cap-nhat/:id"
            element={<RecruitUpdate />}
          />
          <Route path="/admin/doi-mat-khau" element={<ChangePassword />} />
          <Route path="/admin/nguoi-dung" element={<UserAdmin />} />
          <Route path="/admin/nguoi-dung/tao" element={<SignIn />} />
          <Route path="/admin/cap-nhap-thong-tin" element={<UpdateInfor />} />
          <Route path="/admin/tin-tuc" element={<NewsPageAdmin />} />
          <Route path="/admin/tin-tuc/tao" element={<NewsCreatePage />} />
          <Route
            path="/admin/tin-tuc/cap-nhat/:id"
            element={<NewsUpdatePage />}
          />
          <Route
            path="/admin/danh-muc-san-pham"
            element={<CategoryProductPageAdmin />}
          />
          <Route path="/admin/san-pham" element={<ProductPageAdmin />} />
          <Route path="/admin/san-pham/tao" element={<ProductCreate />} />
          <Route path="/admin/san-pham/:id" element={<ProductDetailAdmin />} />
          <Route
            path="/admin/san-pham/cap-nhat/:id"
            element={<ProductUpdate />}
          />
          <Route path="/admin/doi-tac" element={<Partner />} />
          <Route path="/admin/thu-khach-hang" element={<MessameAdmin />} />
        </Route> */}
      </Routes>
    </Router>
  );
}
export default App;

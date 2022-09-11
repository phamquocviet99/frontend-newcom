import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import "./App.css";
import Footer from "./Components/footer/footer";
import LayoutNav from "./Components/LayoutAdmin/LayoutNav";
import Navbar from "./Components/navbar/navbar";
import Login from "./Pages/Admin/Login/Login";
import NotRegister from "./Pages/Admin/Login/NotRegister";
import SignIn from "./Pages/Admin/Login/SignIn";
import UpdateInfor from "./Pages/Admin/Login/UpdateInformation";
import ChangePassword from "./Pages/Admin/Login/ChangePassword";
import AboutPage from "./Pages/Public/aboutPage/aboutPage";
import ContactPage from "./Pages/Public/contactPage/contactPage";
import DetailRecruitPage from "./Pages/Public/detailRecruitPage/detailRecruitPage";
import DetailStylePage from "./Pages/Public/detailStylePage/detailStylePage";
import HomePage from "./Pages/Public/homePage/homePage";
import ProductPage from "./Pages/Public/productPage/productPage";
import RecruitPage from "./Pages/Public/recruitPage/recruitPage";
import StylePage from "./Pages/Public/stylePage/stylePage";
import CategoryProduct from "./Pages/Admin/CategoryProduct/CategoryProduct";
import InformationPage from "./Pages/Admin/Information/InformationPage";
import CreateCategoryProduct from "./Pages/Admin/CategoryProduct/CreateCategoryProduct";
import UpdateCategoryProduct from "./Pages/Admin/CategoryProduct/UpdateCategoryProduct";
import RecruitPageAdmin from "./Pages/Admin/Recruit/Recruit";
import RecruitCreate from "./Pages/Admin/Recruit/CreateRecruit";
import RecruitUpdate from "./Pages/Admin/Recruit/UpdateRecruit";
import Product from "./Pages/Admin/Product/Product"
import CreateProduct from "./Pages/Admin/Product/CreateProduct";
import UpdateProduct from "./Pages/Admin/Product/UpdateProduct";
import DetailProduct from "./Pages/Admin/Product/DetailProduct";

function ClientLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
const userData = JSON.parse(localStorage.getItem("user"));
function AdminLayout() {
  if (userData) {
    return (
      <div>
        <LayoutNav />
        <Outlet />
      </div>
    );
  } else {
    return <NotRegister />;
  }
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route path="/" element={<Navigate replace to="/trang-chu" />} />
          <Route path="/trang-chu" element={<HomePage />} />
          <Route path="/gioi-thieu" element={<AboutPage />} />
          <Route path="/san-pham" element={<ProductPage />} />
          <Route path="/phong-cach" element={<StylePage />} />
          <Route path="/tuyen-dung" element={<RecruitPage />} />
          <Route path="/lien-he" element={<ContactPage />} />
          <Route path="/chi-tiet-bai-viet" element={<DetailStylePage />} />
          <Route path="/chi-tiet-tuyen-dung" element={<DetailRecruitPage />} />
        </Route>
        <Route path="/dang-nhap" element={<Login />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route
            path="/admin"
            element={<Navigate replace to="/admin/danh-muc-san-pham" />}
          />
          <Route
            path="/admin/danh-muc-san-pham"
            element={<CategoryProduct />}
          />
          <Route
            path="/admin/danh-muc-san-pham/tao-moi"
            element={<CreateCategoryProduct />}
          />
          <Route
            path="/admin/danh-muc-san-pham/thay-doi/:id"
            element={<UpdateCategoryProduct />}
          />
          <Route path="/admin/thong-tin" element={<InformationPage />} />

          <Route path="/admin/tuyen-dung" element={<RecruitPageAdmin />} />
          <Route path="/admin/tuyen-dung/tao-moi" element={<RecruitCreate />} />
          <Route
            path="/admin/tuyen-dung/cap-nhat/:id"
            element={<RecruitUpdate />}
          />

          <Route path="/admin/doi-mat-khau" element={<ChangePassword />} />
          {/* <Route path="/admin/nguoi-dung" element={<UserAdmin />} /> */}
          <Route path="/admin/nguoi-dung/tao" element={<SignIn />} />
          <Route path="/admin/cap-nhap-thong-tin" element={<UpdateInfor />} />
          {/* <Route path="/admin/tin-tuc" element={<NewsPageAdmin />} />
          <Route path="/admin/tin-tuc/tao" element={<NewsCreatePage />} />
          <Route
            path="/admin/tin-tuc/cap-nhat/:id"
            element={<NewsUpdatePage />}
          />
         
          /> */}
          <Route path="/admin/san-pham" element={<Product />} />
          <Route path="/admin/san-pham/tao-moi" element={<CreateProduct />} />
          <Route path="/admin/san-pham/:id" element={<DetailProduct />} />
          <Route
            path="/admin/san-pham/cap-nhat/:id"
            element={<UpdateProduct />}
          />
          {/* <Route path="/admin/doi-tac" element={<Partner />} />
          <Route path="/admin/thu-khach-hang" element={<MessameAdmin />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}
export default App;

import { Route, Routes } from "react-router-dom";
import DashLayout from "../Dashboard/DashLayout/DashLayout";
import DashAddProduct from "../Dashboard/Pages/DashAddProduct/DashAddProduct";
import DashAllProducts from "../Dashboard/Pages/DashAllProducts/DashAllProducts";
import DashChangePass from "../Dashboard/Pages/DashChangePass/DashChangePass";
import DashHome from "../Dashboard/Pages/DashHome/DashHome";
import DashProducts from "../Dashboard/Pages/DashProducts/DashProducts";
import DashUpdateProduct from "../Dashboard/Pages/DashUpdateProduct/DashUpdateProduct";
import DashUsers from "../Dashboard/Pages/DashUsers/DashUsers";
import Layout from '../Layout/Layout';
import Blogs from "../Pages/Blog/Blogs";
import BookSingle from "../Pages/BookSingle/BookSingle";
import Checkout from "../Pages/Checkout/Checkout";
import SignIn from "../Pages/Forms/SignIn";
import SignUp from "../Pages/Forms/SignUp";
import NotFound from "../Pages/NotFound/NotFound";
import Wishlist from "../Pages/Wishlist/Wishlist";
import Profile from "../components/Profile/Profile";
import About from './../Pages/About/About';
import Books from './../Pages/Books/Books';
import Contract from './../Pages/Contract/Contract';
import Home from './../Pages/Home/Home';

const AppRouter = () => {

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route  element={<DashLayout />}>
          <Route path="/dashboard" element={<DashHome />} />
          <Route path="/books/add" element={<DashAddProduct />} />
          <Route path="/dashproducts" element={<DashProducts />} />
          <Route path="/dashusers" element={<DashUsers />} />
          <Route path="/books/add" element={<DashAddProduct />} />
          <Route path="/books/all" element={<DashAllProducts />} />  
          <Route path="/book/edit/:id" element={<DashUpdateProduct />} />
          <Route path="/profile/password" element={<DashChangePass />} />
        </Route> 
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<Books />} />
        <Route path="/book/:id" element={<BookSingle />} />
        <Route path="/contract" element={<Contract />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;

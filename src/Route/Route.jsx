import { Route, Routes } from "react-router-dom";
import DashLayout from "../Dashboard/DashLayout/DashLayout";
import DashAddProduct from "../Dashboard/Pages/DashAddProduct/DashAddProduct";
import DashHome from "../Dashboard/Pages/DashHome/DashHome";
import DashProducts from "../Dashboard/Pages/DashProducts/DashProducts";
import DashUsers from "../Dashboard/Pages/DashUsers/DashUsers";
import Layout from '../Layout/Layout';
import Blogs from "../Pages/Blog/Blogs";
import BookSingle from "../Pages/BookSingle/BookSingle";
import SignIn from "../Pages/Forms/SignIn";
import SignUp from "../Pages/Forms/SignUp";
import NotFound from "../Pages/NotFound/NotFound";
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
          <Route path="/dashproducts" element={<DashProducts />} />
          <Route path="/dashusers" element={<DashUsers />} />
          <Route path="/dashaddproduct" element={<DashAddProduct />} />
        </Route> 
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
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

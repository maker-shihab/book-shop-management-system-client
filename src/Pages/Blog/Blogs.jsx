import BlogCard from "../../components/BlogCard/BlogCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Blogs = () => {
    return (
        <div>
            <Header></Header>
            <div className="container mx-auto">
                <div className="py-20">
                    <h2 className="text-2xl text-center pb-16 font-bold">Our Blogs</h2>
                    <div className="grid grid-col md:grid-cols-3 gap-6">
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;
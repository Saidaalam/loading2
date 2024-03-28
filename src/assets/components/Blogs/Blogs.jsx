import { useLoaderData } from "react-router-dom";
import BlogCard from "../BlogCard/BlogCard";

const Blogs = () => {
    const blogs = useLoaderData();
    console.log(blogs);
    
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800" element-id="213">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12" bis_skin_checked="1" element-id="212">
                {blogs.length > 0 && (
                    <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50" element-id="211">
                        <img src={blogs[0].cover_image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" element-id="210" />
                        <div className="p-6 space-y-2 lg:col-span-5" bis_skin_checked="1" element-id="209">
                            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline" element-id="208">{blogs[0].title}</h3>
                            <span className="text-xs dark:text-gray-600" element-id="207">{new Date(blogs[0].published_at).toLocaleDateString()}</span>
                            <p element-id="206">{blogs[0].description}</p>
                        </div>
                    </a>
                )}
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {blogs.slice(1).map(blog => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blogs;

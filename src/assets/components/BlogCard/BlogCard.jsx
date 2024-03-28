import { Link } from 'react-router-dom';
import placeholderImage from './404-error.png'
const BlogCard = ({ blog }) => {
    const { id, cover_image, title, description, published_at } = blog;

    return (
        <Link to={`/blog/${id}`} className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50" element-id="204">
            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || placeholderImage} alt={title} />
            <div className="p-6 space-y-2" bis_skin_checked="1" element-id="202">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline" element-id="201">{title}</h3>
                <span className="text-xs dark:text-gray-600" element-id="200">{new Date(published_at).toLocaleDateString()}</span>
                <p element-id="199">{description}</p>
            </div>
        </Link>
    );
};

export default BlogCard;

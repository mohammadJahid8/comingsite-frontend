import axios from "axios";
import { useContext, useEffect, useState } from "react";
import swal from "sweetalert";
import { AdminContext } from "../../context/AdminContext";
import BlogImageUpload from "./BlogImageUpload";
import { useNavigate, useParams } from "react-router-dom";

import BlogBodyInput from "./BlogBodyInput";

const EditBlog = () => {
  const { setRefetch } = useContext(AdminContext);
  const [loading, setLoading] = useState(false);
  const [blogImage, setBlogImage] = useState("");
  const [categories, setCategories] = useState([]);
  const [base64, setBase64] = useState();
  const [pairs, setPairs] = useState([{ image: null, description: "" }]);

  const [currentPair, setCurrentPair] = useState({
    image: null,
    description: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getBlog = async () => {
      const res = await axios.get(`/api/v1/blog/single/${id}`, {
        headers: {
          Authorization: `${localStorage.getItem("comingsiteAdmin")}`,
        },
      });

      const blog = res?.data?.data;

      if (res?.data?.statusCode === 200 && blog.coverImage) {
        document.getElementById("coverTitle").value = blog.coverTitle;
        document.getElementById("coverSubtitle").value = blog.coverSubtitle;
        document.getElementById("category").value = blog.category.toUpperCase();
        document.getElementById("url").value = blog.url;
        document.getElementById("coverDescription").value =
          blog.coverDescription;
        document.getElementById("conclusion").value = blog.conclusion;
        setPairs(blog.blogBody);
        setBase64(blog.coverImage);
        setBlogImage(blog.coverImage);
        setCurrentPair({
          image: blog?.blogBody[blog?.blogBody.length - 1]?.image,
          description: blog?.blogBody[blog?.blogBody.length - 1]?.description,
        });
      }
    };
    getBlog();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    data.coverImage = blogImage;
    data.blogBody = pairs;

    data.category = data.category.toLowerCase();

    try {
      const res = await axios.patch(
        `/api/v1/blog/update/${id}`,
        {
          data,
        },
        {
          headers: {
            Authorization: `${localStorage.getItem("comingsiteAdmin")}`,
          },
        }
      );

      if (res?.data?.statusCode === 200) {
        setLoading(false);

        setRefetch((prev) => prev + 1);

        swal({
          title: "Success",
          text: "Blog updated Successfully!",
          icon: "success",
          button: "Ok",
        });
        navigate(-1);
      }
    } catch (err) {
      setLoading(false);
      swal({
        title: "Error",
        text: "Something went wrong! Please try again later.",
        icon: "error",
        button: "Ok",
      });
      console.log(err);
    }
  };

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get("/api/v1/category/", {
        headers: {
          Authorization: `${localStorage.getItem("comingsiteAdmin")}`,
        },
      });

      setCategories(res?.data?.data);
    };
    getCategories();
  }, []);

  const allCategories = categories?.map((category) =>
    category.categoryName.toUpperCase()
  );

  return (
    <div>
      <h1
        className="text-white text-xl mb-4 uppercase"
        style={{
          fontFamily: "Poppins",
        }}
      >
        Edit Blog
      </h1>

      <BlogImageUpload
        value={blogImage}
        disabled={loading}
        onChange={(image) => setBlogImage(image)}
        label="Upolad Cover Image"
        setBase64={setBase64}
        base64={base64}
      />

      <form className="mt-6" onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="mb-2 sm:mb-6 w-full">
            <label
              htmlFor="coverTitle"
              className="block mb-2 text-sm font-medium  text-white"
            >
              Cover Title <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="coverTitle"
              name="coverTitle"
              className="  text-sm rounded-lg border block w-full p-2.5 bg-gray-900 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder=""
              required
            />
          </div>
          <div className="mb-6 w-full">
            <label
              htmlFor="coverSubtitle"
              className="block mb-2 text-sm font-medium  text-white"
            >
              Cover Subtitle <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="coverSubtitle"
              name="coverSubtitle"
              required
              className="  text-sm rounded-lg border  block w-full p-2.5 bg-gray-900 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder=""
            />
          </div>
        </div>

        <div className="mb-6">
          <div>
            <label
              htmlFor="coverDescription"
              className="block mb-2 text-sm font-medium  text-white"
            >
              Cover Description <span className="text-red-600">*</span>
            </label>
            <textarea
              id="coverDescription"
              name="coverDescription"
              required
              rows={4}
              className="block p-2.5 w-full text-sm   rounded-lg border  bg-gray-900 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Cover description..."
              defaultValue={""}
            />
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium  text-white"
          >
            Select Category <span className="text-red-600">*</span>
          </label>
          <select
            name="category"
            id="category"
            required
            className="  text-sm rounded-lg border  block w-full p-2.5 bg-gray-900 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          >
            {allCategories?.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <BlogBodyInput
          pairs={pairs}
          currentPair={currentPair}
          setCurrentPair={setCurrentPair}
          setPairs={setPairs}
        />

        <div className="mb-6">
          <label
            htmlFor="url"
            className="block mb-2 text-sm font-medium  text-white"
          >
            Urls
          </label>
          <input
            type="text"
            id="url"
            name="url"
            className="  text-sm rounded-lg border block w-full p-2.5 bg-gray-900 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder=""
          />
        </div>

        <div className={"mb-6"}>
          <div>
            <label
              htmlFor="conclusion"
              className="block mb-2 text-sm font-medium  text-white"
            >
              Conclusion <span className="text-red-600">*</span>
            </label>
            <textarea
              id="conclusion"
              name="conclusion"
              required
              rows={4}
              className="block p-2.5 w-full text-sm   rounded-lg border  bg-gray-900 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Blog conclusion..."
              defaultValue={""}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {loading ? "Updating..." : "Update Blog"}
        </button>
      </form>
    </div>
  );
};

export default EditBlog;

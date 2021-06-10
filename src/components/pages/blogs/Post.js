import React from "react";
// import useFetch from "../cms/useFetch";
import BlogList from "./BlogList";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const Post = () => {
  // const { posts, isLoading, error } = useFetch("http://localhost:8000/posts");
  // const { categories } = useFetch("http://localhost:8000/categories");
  const { error ,loading, data } = useQuery(FETCH_POSTS_QUERY);

  if (data) {
    console.log(data);
  }

  return (
    <div className="container">
      <div className="row my-4">
        <div className="col">
          <h3 className="h1-responsive font-weight-bold text-center">
            Recent posts
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          {error && <div>{error}</div>}
          {loading ? (<div>Loading...</div>) :
           (data && <BlogList posts={data}/>)  }
        </div>
      </div>
    </div>
  );
};

const FETCH_POSTS_QUERY = gql`
  {
    getAllArticles {
      id
      title
      category
      details
      createdDate
    }
  }
`;

export default Post;

import React, { useState } from "react";
import "./css/style.css";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");
  const [submitted, setSubmitted] = useState("");
  const [error, setError] = useState("");
  const createdAt = Date();

  const handleEditor = (e, editor) => {
    setBody(editor.getData());
  };

  const [createLink] = useMutation(CREATE_LINK_MUTATION, {
    variables: {
      id: 1,
      category: category,
      // imageSrc: String
      title: title,
      userId: 1,
      createdDate: createdAt,
      details: body,
      status: "sent",
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    // const post = { title, body, category, createdAt };
    createLink();
    // if (!post.body && !post.category && !post.title) {
    //   setError("All inputs are required");
    // } else {
    //   fetch("http://localhost:8000/posts", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(post),
    //   })
    //     .then(() => {
    //       setSubmitted(post.title + " is added successfully");
    //       setError("");
    //     })
    //     .catch((err) => {
    //       setError(err.message);
    //       setSubmitted("");
    //     });
    // }
  };

  return (
    <div>
      <header id="header">
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <a href="/dashboard" className="text-white">
                <h1 className="mt-4">
                  <span className="fas fa-cog " aria-hidden="true"></span>
                  Dashboard
                </h1>
              </a>
            </div>
            <div className="col-md-2 create">
              <a href="/create" className="btn btn-outline-warning">
                Add Post
              </a>
            </div>
          </div>
        </div>
      </header>

      <section id="breadcrumb">
        <div className="container">
          {submitted && <div className="alert alert-success">{submitted}</div>}
          {error && <div className="alert alert-danger">{error}</div>}
        </div>
        <div className="container">
          <ol className="breadcrumb">
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
            <li className="active ml-3">
              <a href="/posts">Posts</a>
            </li>
            <li className="active ml-3">
              <a href="/create">Create Post</a>
            </li>
          </ol>
        </div>
      </section>

      <div className="container mb-5">
        <div className="row">
          <div className="col-md-3">
            <div className="list-group list-group-flush">
              <a
                href="/dashboard"
                className="list-group-item active main-color-bg"
              >
                <span className="fas fa-cog" aria-hidden="true"></span>{" "}
                Dashboard
              </a>
              <a href="/posts" className="list-group-item">
                <span className="fas fa-pen" aria-hidden="true"></span> Posts{" "}
                <span className="badge badge-pill badge-light">33</span>
              </a>
            </div>
          </div>
          <div className="col-md-9">
            <div className="card card-default">
              <div className="card-heading main-color-bg">
                <h5 className="card-title pl-3 pt-2">Create Post</h5>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Title"
                      name="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="form-group ">
                    <label>Categories</label>
                    <select
                      className="form-control"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option>Technology</option>
                      <option>Technology</option>
                      <option>Technology</option>
                      <option>Technology</option>
                      <option>Technology</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Body</label>
                    <CKEditor
                      editor={ClassicEditor}
                      name="content"
                      onChange={(e, editor) => handleEditor(e, editor)}
                    />
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" /> Published
                    </label>
                  </div>
                  <input
                    type="button"
                    className="btn btn-outline-warning btn-rounded"
                    value="Submit"
                    onClick={(event) => handleSubmit(event)}
                  />
                  {/* </Link> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CREATE_LINK_MUTATION = gql
`
  mutation postArticle($articleInput: ArticleInput){
    Article {
      id: ID
      category: Category
      imageSrc: String
      title: String
      userId: String
      createdDate: Date
      details: String
      status: String
      metaTags: String
      metaDescription: Int
    }
  }
`;

export default Create;

import React from "react";
// import {
//   MDBDropdownItem,
//   MDBDropdown,
//   MDBDropdownToggle,
//   MDBDropdownMenu,
// } from "mdbreact";
import "./css/style.css";

function pages() {
  return (
    <div className="pages">
      <header id="header">
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <h1>
                <span className="fas fa-cog pt-4" aria-hidden="true"></span>{" "}
                Dashboard
              </h1>
            </div>
            <div className="col-md-2 create">
              <a href="/create" className="button-outline">
                Add Post
              </a>
            </div>
          </div>
        </div>
      </header>

      <section id="breadcrumb">
        <div className="container">
          <ol className="breadcrumb w-100">
            <li>
              <a href="/">Dashboard</a>
            </li>
            <li className="active ml-3">Pages</li>
          </ol>
        </div>
      </section>

      <section id="main">
        <div className="container fluid">
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
                <a href="/pages" className="list-group-item">
                  <span className="fas fa-list-alt" aria-hidden="true"></span>{" "}
                  Pages <span className="badge badge-pill badge-light">12</span>
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
                  <h5 className="card-title pl-3 pt-2">Pages</h5>
                </div>
                <div className="card-body pb-1">
                  <div className="row">
                    <div className="col-md-12">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Filter Pages..."
                      />
                    </div>
                  </div>
                  <br />
                  <table className="table table-striped table-hover">
                    <tr>
                      <th>Title</th>
                      <th>Published</th>
                      <th>Created</th>
                      <th></th>
                    </tr>
                    <tr>
                      <td>Home</td>
                      <td>
                        <span className="fas fa-ok" aria-hidden="true"></span>
                      </td>
                      <td>Dec 12, 2016</td>
                      <td>
                        <a
                          className="btn btn-light"
                          href="/edit"
                          style={{ borderRadius: 20 }}
                        >
                          Edit
                        </a>{" "}
                        <a
                          className="btn btn-danger"
                          href="/"
                          style={{ borderRadius: 20 }}
                        >
                          Delete
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>About</td>
                      <td>
                        <span className="fas fa-ok" aria-hidden="true"></span>
                      </td>
                      <td>Dec 13, 2016</td>
                      <td>
                        <a
                          className="btn btn-light"
                          href="/edit"
                          style={{ borderRadius: 20 }}
                        >
                          Edit
                        </a>{" "}
                        <a
                          className="btn btn-danger"
                          href="/"
                          style={{ borderRadius: 20 }}
                        >
                          Delete
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Services</td>
                      <td>
                        <span
                          className="fas fa-remove"
                          aria-hidden="true"
                        ></span>
                      </td>
                      <td>Dec 13, 2016</td>
                      <td>
                        <a
                          className="btn btn-light "
                          href="/edit"
                          style={{ borderRadius: 20 }}
                        >
                          Edit
                        </a>{" "}
                        <a
                          className="btn btn-danger"
                          href="/"
                          style={{ borderRadius: 20 }}
                        >
                          Delete
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Contact</td>
                      <td>
                        <span className="fas fa-ok" aria-hidden="true"></span>
                      </td>
                      <td>Dec 14, 2016</td>
                      <td>
                        <a
                          className="btn btn-light"
                          href="/edit"
                          style={{ borderRadius: 20 }}
                        >
                          Edit
                        </a>{" "}
                        <a
                          className="btn btn-danger"
                          href="/"
                          style={{ borderRadius: 20 }}
                        >
                          Delete
                        </a>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default pages;

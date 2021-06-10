/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBModalFooter,
} from "mdbreact";
import { Link } from "react-router-dom";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";

const SignUp = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState(); 

  const [addUser, {loading}] = useMutation(REGISTER_USER, {
    update(proxy, result){
      console.log(result);
    },
    variables: {
      name: name,
      email: email,
      password: password
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser()
  }


  return (
    <MDBContainer fluid className="d-flex flex-column justify-content-center">
      <MDBRow>
        <MDBCol md="12" className="my-3 d-flex justify-content-center">
          <MDBCard className="" style={{ width: 500 }}>
            <MDBCardBody className="mx-4">
              <form onSubmit={handleSubmit}>
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Sign Up</strong>
                </h3>
              </div>
              <MDBInput
                label="Your username"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                value={name}
                onChange={(e) =>setName(e.target.value) }
              />
              <MDBInput
                label="Your email"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <MDBInput
                label="Your Password"
                group
                type="password"
                validate
                containerClass="mb-0"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* <MDBInput
                label="Comfirm Password"
                group
                type="password"
                validate
                containerClass="mb-0"
                onChange={(e) => e.target.value}
              /> */}

              <div className="text-center mb-3">
                  <MDBBtn
                  onClick={handleSubmit}
                    type="submit"
                    gradient="sunny-morning"
                    rounded
                    className="btn-block z-depth-1a"
                    style={{ borderRadius: 30, color: "#fff" }}
                  >
                    Sign Up
                  </MDBBtn>
              </div>
              </form>
            </MDBCardBody>
            <MDBModalFooter className="mx-5 pt-3 mb-1"></MDBModalFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

const REGISTER_USER = gql`
  mutation registerUser(
    $name: String!
    $email: String!
    $password: String!
  ){
    registerUser(
      UserInput: {
        name:  $name
        email: $email
        password: $password 
      }
    ){
      id 
      email
      name
      joinedDate
      token
    }
  }
`;

export default SignUp;

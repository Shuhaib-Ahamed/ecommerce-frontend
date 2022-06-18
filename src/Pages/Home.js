import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getCurrentUser, getUserSession } from "../api/api";
import ProductView from "../components/ProductView";
import { ADD_USER_DETAILS } from "../redux/constants/ActionTypes";
import store from "../redux/reducers";
import Header from "../shared/Header";

const Home = () => {
  const [user, setUser] = useState(null);

  //get userDetails
  const getUser = async () => {
    if (localStorage?.token) {
      let decodedToken = getUserSession();

      if (decodedToken != null) {
        const response = await getCurrentUser({
          id: decodedToken?.id,
          token: `Bearer ${localStorage.token}`,
        });
        if (response?.status === 200) {
          setUser(response.data);
          store.dispatch({
            type: ADD_USER_DETAILS,
            payload: response.data,
          });
        }
      }
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Container>
      <Header username={user?.username} />
      <ProductView />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 1400px) {
    padding: 2rem 2rem;
  }
  @media (max-width: 800px) {
    padding: 2rem 1rem;
  }
`;

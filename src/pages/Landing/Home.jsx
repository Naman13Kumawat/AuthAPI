import React from "react";
import "./Home.scss";
import useFetch from "../../hooks/useFetch";
import Card from "../../components/Card/Card";
import Navbar from "../../components/Navbar/Navbar";

export default function Home() {
  const url = "https://reqres.in/api/users?page=2";
  const { data } = useFetch(url);
  return (
    <>
      <Navbar />
      <div className="intro">
        <h2>Users fetched from a public API.</h2>
        <p>
          API Link:{" "}
          <a href="https://reqres.in/api/users?page=2">
            https://reqres.in/api/users?page=2
          </a>
        </p>
      </div>
      <div className="card_container">
        {data &&
          data.map((user) => {
            return <Card key={user.id} user={user} />;
          })}
      </div>
    </>
  );
}

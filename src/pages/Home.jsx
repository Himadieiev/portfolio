import React from "react";

import Header from "../components/Header/Header";

const Home = () => {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend Skills</h2>
              <p>
                HTML, CSS, SCSS, JavaScript, React, Redux, REST API, GIT,
                Tailwind
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend Skills</h2>
              <p>Node.js, Express, REST API, MongoDB, Mongoose</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;

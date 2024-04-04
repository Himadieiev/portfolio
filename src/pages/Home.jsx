import React from 'react';

import Header from '../components/Header/Header';

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
                HTML, CSS, SASS, Tailwind, JavaScript, React, Redux, TypeScript, REST API, NPM, GIT,
                GitHub, GitLab
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend Skills</h2>
              <p>Node.js, Express, REST API, MongoDB, Mongoose</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Hobbies</h2>
              <p>Table Tennis, Chess, Football</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;

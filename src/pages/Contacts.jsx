import React from "react";

const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <a
              href="https://goo.gl/maps/9RpCMCLYv27eHQam9"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kyiv, Ukraine
            </a>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Phone</h2>
            <p>
              <a href="tel:+380633711454">+38 (063) 371-14-54</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram</h2>
            <p>
              <a
                href="https://t.me/ruslan_him"
                target="_blank"
                rel="noopener noreferrer"
              >
                @ruslan_him
              </a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:gimadejev86@gmail.com">gimadejev86@gmail.com</a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;

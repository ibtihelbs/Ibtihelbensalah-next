import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <form action="">
        <input type="email" name="email" />
        <input type="text" placeholder="subject" name="subject" />
        <a
          href="https://drive.google.com/file/d/1G2EjIJqfP8tQ65XCgvCYu1m3Y6F3WtsX/view?usp=sharing"
          download
        >
          download
        </a>
      </form>
    </div>
  );
};

export default Contact;

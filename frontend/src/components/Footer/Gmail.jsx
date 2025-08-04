import { useState } from "react";
import "./Gmail.css";

function Gmail() {
  const [data, setData] = useState({
    name: "",
    mno: "",
    mail: "",
    msg: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setData({
          name: "",
          mno: "",
          mail: "",
          msg: ""
        });
      } else {
        alert("Failed to submit the form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }

  };

  return (
    <div className="gmail">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name </label>
        <input
          type="text"
          placeholder="Enter your name"
          id="name"
          name="name"
          value={data.name}
          onChange={handleChange}
        />
        <br />
        <br />

        <label htmlFor="mno">Mobile No </label>
        <input
          type="tel"
          placeholder="Enter your mobile no"
          id="mno"
          name="mno"
          value={data.mno}
          onChange={handleChange}
        />
        <br />
        <br />

        <label htmlFor="gm">Gmail </label>
        <input
          type="email"
          placeholder="Enter your email"
          id="gm"
          name="mail"
          value={data.mail}
          onChange={handleChange}
        />
        <br />
        <br />

        <label htmlFor="send">Send your message </label>
        <textarea
          rows={5}
          cols={45}
          name="msg"
          value={data.msg}
          onChange={handleChange}
        ></textarea>
        <br />
        <br />

        <button id="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Gmail;

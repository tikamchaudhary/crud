import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function createUser() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    category: "",
    avatar: "",
  });

  const handleInputs = (e) => {
    if (e.target.name !== "avatar") {
      setUser({ ...user, [e.target.name]: e.target.value });
    } else {
      setUser({ ...user, [e.target.name]: e.target.files[0] });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", user.username);
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("avatar", user.avatar);
    formData.append("category", user.category);

    fetch("http://localhost:9000/api/v1/users/create", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        alert("Saved Successfully ..");
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Name:</label>
          <input
            type="text"
            name="username"
            id="username"
            required
            value={user.username}
            onChange={handleInputs}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={user.email}
            onChange={handleInputs}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            name="password"
            id="password"
            value={user.password}
            required
            onChange={handleInputs}
          />
        </div>
        <div>
          <label htmlFor="avatar">Avatar:</label>
          <input
            type="file"
            name="avatar"
            id="avatar"
            value={user.avatar}
            required
            onChange={handleInputs}
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            name="category"
            id="category"
            value={user.category}
            required
            onChange={handleInputs}
          />
        </div>
        <div>
          <button type="submit">Save</button>
          <Link to="/">Back</Link>
        </div>
      </form>
    </>
  );
}

export default createUser;

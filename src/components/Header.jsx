import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { IoLogoYoutube } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

export default function Header() {
  const { keyword } = useParams();
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  useEffect(() => {
    setText(keyword || "");
  }, [keyword]);

  return (
    <header>
      <Link to="/">
        <div>
          <IoLogoYoutube /> <h1>Youtube</h1>
        </div>
      </Link>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Search ..."
            value={text}
            onChange={handleChange}
          />
          <button>
            <CiSearch />
          </button>
        </div>
      </form>
    </header>
  );
}

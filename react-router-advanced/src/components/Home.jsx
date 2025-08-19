import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link to="/about">About</Link> | <Link to="/profile">Profile</Link> | <Link to="/blog/1">Blog 1</Link>
      </nav>
    </div>
  );
}

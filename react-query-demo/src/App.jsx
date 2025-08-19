import { useState } from "react";
import PostsComponent from "./components/PostsComponent";

export default function App() {
  const [showPosts, setShowPosts] = useState(true);

  return (
    <div style={{ padding: 16, maxWidth: 900, margin: "0 auto" }}>
      <h1>React Query Demo — JSONPlaceholder Posts</h1>

      <p>
        Use the toggle to unmount/mount the posts list and observe how data is
        served from cache if it’s still fresh (staleTime = 30s).
      </p>

      <button onClick={() => setShowPosts((s) => !s)}>
        {showPosts ? "Hide" : "Show"} Posts
      </button>

      <hr style={{ margin: "16px 0" }} />

      {showPosts ? <PostsComponent /> : <p>Posts hidden. Toggle to show again.</p>}
    </div>
  );
}

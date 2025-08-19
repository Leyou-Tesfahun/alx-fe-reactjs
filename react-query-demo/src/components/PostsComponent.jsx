import { useQuery } from "@tanstack/react-query";

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

async function fetchPosts() {
  const res = await fetch(POSTS_URL);
  if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
  return res.json();
}

export default function PostsComponent() {
  const { data, isLoading, isError, error, isFetching, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 30 * 1000,
    cacheTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    keepPreviousData: true, // ✅ preserves previous data during refetch
  });

  if (isLoading) return <p>Loading posts…</p>;
  if (isError) return <p style={{ color: "red" }}>{error.message}</p>;

  return (
    <div>
      <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
        <button onClick={() => refetch()}>
          Refetch Posts {isFetching && "…"}
        </button>
      </div>

      <ul>
        {data.slice(0, 20).map((post) => (
          <li key={post.id}>
            <strong>#{post.id}</strong> {post.title}
          </li>
        ))}
      </ul>
      <p style={{ opacity: 0.7 }}>Showing first 20 posts for brevity.</p>
    </div>
  );
}

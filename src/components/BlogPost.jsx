import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();
  return <h1>Blog Post ID: {id}</h1>;
}

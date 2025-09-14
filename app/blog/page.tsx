import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "List of blog posts",
};

export default function BlogPage() {
  const posts = [
    { id: 1, title: "First Blog Post" },
    { id: 2, title: "Second Blog Post" },
    { id: 3, title: "Third Blog Post" },
  ];

  return (
    <main className="min-h-screen p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="space-y-3">
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              href={`/blog/${post.id}`}
              className="block p-3 bg-blue-100 rounded hover:bg-blue-200 transition-colors"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

"use client"
import { useState, useEffect } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_Backend_URL}/posts`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }
    };
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
      <main className="container mx-auto px-4 py-6">
        <h2 className="text-4xl font-bold mb-4">Welcome to Our Blog</h2>
        <p>Let's explore the new articles here</p>
      </main>

      <div className="flex justify-end mb-4 mr-7">
      <input
    type="text"
    onChange={(e) => setSearchQuery(e.target.value)}
    className="px-4 py-2 border border-gray-300 rounded"
    placeholder="Search..."
  />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <div key={index} className="border border-gray-200 p-4 mb-10">
              <img className="w-full h-60 object-cover mb-4" src={post.ImageURL} alt="Post Image" />
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600">{post.desc}</p>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No posts to display
          </div>
        )}
      </div>
    </>
  );
}

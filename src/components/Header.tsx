import Link from "next/link";

const subdomain = "headless-cms"; // Replace with your subdomain

export default async function Header() {
  // Fetch blog data from Hyvor API
  const res = await fetch(
    `https://blogs.hyvor.com/api/data/v0/${subdomain}/blog`
  );
  const data = await res.json();
  const blog = data; // The entire blog object is returned

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Blog Logo */}
        <img
          src={blog.logo_url}
          alt="Blog Logo"
          className="h-10 w-auto" // You can adjust the logo size here
        />

        {/* Blog Name */}
        <h1 className="text-xl font-semibold">
          <Link href="/">{blog.name}</Link>
        </h1>
      </div>
    </header>
  );
}

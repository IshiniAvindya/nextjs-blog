export async function fetchHyvorBlogData() {
  // const res = await fetch(
  //   "https://blogs.hyvor.com/api/data/v0/headless-cms/posts"
  // );
  // const data = await res.json();
  // return data;

  const subdomain = "headless-cms"; // Replace with your blog's subdomain
  const res = await fetch(
    `https://blogs.hyvor.com/api/data/v0/${subdomain}/posts`
  );
  if (!res.ok) throw new Error(`API Error: ${res.statusText}`);
  const response = await res.json();
  const posts = response.data;
  return posts;
}

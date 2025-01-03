export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // const { slug } = params;
  const subdomain = "headless-cms"; // Replace with your subdomain

  // Fetch the post data using the slug
  const res = await fetch(
    `https://blogs.hyvor.com/api/data/v0/${subdomain}/post?slug=${slug}`
  );

  if (!res.ok) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-red-500">Post Not Found</h1>
        <p>Please check the URL or try again later.</p>
      </div>
    );
  }

  const post = await res.json();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-lg mb-4">{post.description}</p>
      {/* <p className="mt-4">
        Published on: {new Date(post.published_at).toLocaleDateString()}
      </p> */}
      <p>
        {/* Display authors list */}
        {/* {post.authors.map((author: object) => (
          <span key={author.id} className="mr-4">
            {author.name}
          </span>
        ))} */}
      </p>
      <hr className="my-8" />
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}

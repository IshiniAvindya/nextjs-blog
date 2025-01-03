import Pagination from "../../../components/Pagination";

export default async function PaginatedPage({
  params,
}: {
  params: Promise<{ pageNumber: string }>;
}) {
  const subdomain = "headless-cms"; // Replace with your subdomain
  const postsPerPage = 3;

  // Await the params to access `pageNumber`
  const { pageNumber } = await params;
  const currentPage = parseInt(pageNumber, 10);

  let posts = [];
  let pagination = { page_prev: null, page_next: null };

  try {
    const res = await fetch(
      `https://blogs.hyvor.com/api/data/v0/${subdomain}/posts?page=${currentPage}&limit=${postsPerPage}`
    );

    if (!res.ok) throw new Error(`API Error: ${res.statusText}`);
    const response = await res.json();
    posts = response.data;
    pagination = response.pagination;
  } catch (error) {
    console.error("Failed to fetch posts:", error);
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <ul>
            {posts.map((post: any) => (
              <li key={post.id} className="border rounded my-5 p-5">
                <a
                  href={`/${post.slug}`}
                  className="text-blue-600 hover:underline"
                >
                  {post.title}
                </a>
                <p className="text-gray-500">{post.description}</p>
                {/* <p className="text-gray-500">
                  Published on:{" "}
                  {new Date(post.published_at).toLocaleDateString()}
                </p> */}
              </li>
            ))}
          </ul>
        </div>
        <Pagination
          pagePrev={pagination.page_prev}
          pageNext={pagination.page_next}
        />
      </main>
    </div>
  );
}

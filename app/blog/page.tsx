import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { allBlogs } from "../lib/blogs";

export const metadata: Metadata = {
  title: "Car Selling Tips & Cash for Cars Guides",
  description:
    "Read simple, practical articles that explain how to sell used, damaged and scrap vehicles for cash in the GTA and Northern Ontario.",
  openGraph: {
    title: "Car Selling Tips & Cash for Cars Guides",
    description:
      "Guides for Ontario drivers on selling used, damaged and non-running vehicles quickly and safely for cash.",
    type: "website",
  },
  alternates: {
    canonical: "/blog",
  },
};

const BLOGS_PER_PAGE = 6;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const resolvedSearchParams = await searchParams;

  const sortedBlogs = [...allBlogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const totalPages = Math.max(
    1,
    Math.ceil(sortedBlogs.length / BLOGS_PER_PAGE)
  );

  const currentPageRaw = Number(resolvedSearchParams?.page || "1");
  const currentPage =
    Number.isFinite(currentPageRaw) && currentPageRaw >= 1
      ? Math.min(currentPageRaw, totalPages)
      : 1;

  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
  const paginatedBlogs = sortedBlogs.slice(
    startIndex,
    startIndex + BLOGS_PER_PAGE
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />

      <main className="pt-28 md:pt-40 pb-16">
        <section className="max-w-[1100px] mx-auto px-4 md:px-0 mb-10 text-center">
          <h1
            className="text-4xl md:text-5xl font-bold text-[#222221] mb-3"
            style={{ fontFamily: "Corbel, sans-serif" }}
          >
            Blog: Cash for Cars Tips & Guides
          </h1>
          <p
            className="text-sm md:text-base text-[#6F6F6E] max-w-2xl mx-auto"
            style={{ fontFamily: "Corbel, sans-serif" }}
          >
            Read simple, practical articles that help Ontario drivers understand how to sell used,
            damaged and scrap vehicles quickly and safely.
          </p>
        </section>

        <section className="max-w-[1100px] mx-auto px-4 md:px-0 mb-12">
          <div className="grid gap-6 grid-cols-2 md:grid-cols-3">
            {paginatedBlogs.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <p
                    className="text-xs text-[#6F6F6E] mb-2"
                    style={{ fontFamily: "Corbel, sans-serif" }}
                  >
                    {new Date(post.date).toLocaleDateString("en-CA", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    })}
                    {post.readTimeMinutes
                      ? ` • ${post.readTimeMinutes} min read`
                      : null}
                  </p>
                  <h2
                    className="text-xl md:text-2xl font-bold text-[#222221] mb-2"
                    style={{ fontFamily: "Corbel, sans-serif" }}
                  >
                    {post.title}
                  </h2>
                  <p
                    className="text-sm md:text-base text-[#6F6F6E] mb-4 flex-1"
                    style={{ fontFamily: "Corbel, sans-serif" }}
                  >
                    {post.excerpt}
                  </p>
                  <div className="mt-auto">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-sm font-semibold text-[#047857] hover:text-[#065F46]"
                      style={{ fontFamily: "Corbel, sans-serif" }}
                    >
                      Read article
                      <span className="ml-1">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-10 flex items-center justify-center gap-2 md:gap-3">
              {/* Prev */}
              <Link
                href={
                  currentPage > 1
                    ? `/blog?page=${currentPage - 1}`
                    : "/blog?page=1"
                }
                aria-disabled={currentPage === 1}
                className={`px-3 py-1.5 rounded-full border text-xs md:text-sm font-semibold ${
                  currentPage === 1
                    ? "border-gray-200 text-gray-300 cursor-not-allowed"
                    : "border-emerald-100 text-emerald-700 hover:bg-emerald-50"
                }`}
                style={{ fontFamily: "Corbel, sans-serif" }}
              >
                Prev
              </Link>

              {/* Page numbers */}
              {Array.from({ length: totalPages }).map((_, index) => {
                const page = index + 1;
                const isActive = page === currentPage;
                return (
                  <Link
                    key={page}
                    href={`/blog?page=${page}`}
                    className={`h-9 w-9 md:h-10 md:w-10 flex items-center justify-center rounded-full text-xs md:text-sm font-semibold transition ${
                      isActive
                        ? "bg-emerald-600 text-white shadow-[0_10px_25px_rgba(4,120,87,0.35)]"
                        : "bg-white text-[#6F6F6E] border border-gray-200 hover:border-emerald-300 hover:text-emerald-700"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                    style={{ fontFamily: "Corbel, sans-serif" }}
                  >
                    {page}
                  </Link>
                );
              })}

              {/* Next */}
              <Link
                href={
                  currentPage < totalPages
                    ? `/blog?page=${currentPage + 1}`
                    : `/blog?page=${totalPages}`
                }
                aria-disabled={currentPage === totalPages}
                className={`px-3 py-1.5 rounded-full border text-xs md:text-sm font-semibold ${
                  currentPage === totalPages
                    ? "border-gray-200 text-gray-300 cursor-not-allowed"
                    : "border-emerald-100 text-emerald-700 hover:bg-emerald-50"
                }`}
                style={{ fontFamily: "Corbel, sans-serif" }}
              >
                Next
              </Link>
            </div>
          )}
        </section>

        {/* Reuse contact CTA to drive leads from blog */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}


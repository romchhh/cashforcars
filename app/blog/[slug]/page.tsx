import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GetQuoteForm from "../../components/GetQuoteForm";
import Contact from "../../components/Contact";
import { allBlogs, getBlogBySlug } from "../../lib/blogs";

export function generateStaticParams() {
  return allBlogs.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return {
      title: "Blog article not found",
    };
  }

  return {
    title: post.seoTitle || post.title,
    description:
      post.seoDescription ||
      post.excerpt ||
      "Cash4Cars GTA blog article about selling cars for cash in Ontario.",
    openGraph: {
      title: post.seoTitle || post.title,
      description:
        post.seoDescription ||
        post.excerpt ||
        "Cash4Cars GTA blog article about selling cars for cash in Ontario.",
      type: "article",
      url: `/blog/${post.slug}`,
      images: [
        {
          url: post.image,
        },
      ],
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <Header />
        <main className="pt-28 md:pt-40 pb-16">
          <section className="max-w-[900px] mx-auto px-4 md:px-0 text-center">
            <h1
              className="text-3xl md:text-4xl font-bold text-[#222221] mb-4"
              style={{ fontFamily: "Corbel, sans-serif" }}
            >
              Article not found
            </h1>
            <p
              className="text-sm md:text-base text-[#6F6F6E] mb-6"
              style={{ fontFamily: "Corbel, sans-serif" }}
            >
              The article you&apos;re looking for doesn&apos;t exist or may have been moved.
            </p>
            <Link
              href="/blog"
              className="text-sm font-semibold text-[#047857] hover:text-[#065F46]"
              style={{ fontFamily: "Corbel, sans-serif" }}
            >
              ← Back to blog
            </Link>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  const paragraphs = post.content.split("\n\n");
  const relatedPosts = allBlogs.filter((p) => p.slug !== slug).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.seoTitle || post.title,
    description:
      post.seoDescription ||
      post.excerpt ||
      "Cash4Cars GTA blog article about selling cars for cash in Ontario.",
    image: [post.image],
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Cash4Cars GTA",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://cash4cars-gta.example.com/blog/${post.slug}`,
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <main className="pt-28 md:pt-40 pb-16">
        <article className="max-w-[900px] mx-auto px-4 md:px-0 mb-16">
          <div className="mb-6">
            <Link
              href="/blog"
              className="inline-flex items-center text-xs md:text-sm font-semibold text-[#047857] hover:text-[#065F46]"
              style={{ fontFamily: "Corbel, sans-serif" }}
            >
              ← Back to blog
            </Link>
          </div>

          {/* Hero image */}
          <div className="relative w-full h-56 md:h-80 rounded-3xl overflow-hidden mb-8">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
              unoptimized
            />
          </div>

          <header className="mb-6">
            <p
              className="text-xs md:text-sm text-[#6F6F6E] mb-1"
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
            <h1
              className="text-3xl md:text-4xl font-bold text-[#222221] leading-tight mb-3"
              style={{ fontFamily: "Corbel, sans-serif" }}
            >
              {post.title}
            </h1>
          </header>

          <div className="space-y-4 md:space-y-5 text-[#222221] text-base md:text-lg leading-relaxed">
            {paragraphs.map((para, idx) => (
              <div key={idx} className="space-y-3 md:space-y-4">
                <p
                  className="text-justify md:text-left"
                  style={{ fontFamily: "Corbel, sans-serif" }}
                >
                  {para}
                </p>

                {idx === 1 && (
                  <div
                    className="rounded-3xl border border-emerald-100 bg-emerald-50/70 px-4 py-4 md:px-6 md:py-5 text-sm md:text-base text-[#065F46]"
                    style={{ fontFamily: "Corbel, sans-serif" }}
                  >
                    <p className="font-semibold mb-1">
                      Ready to turn your vehicle into cash?
                    </p>
                    <p className="mb-2">
                      If you&apos;re thinking about selling a used, damaged or
                      non-running car in the GTA or Northern Ontario, our team
                      at Cash4Cars GTA can send you a fast, no-obligation cash
                      offer and free pickup.
                    </p>
                    <p>
                      Share a few details about your vehicle on our{" "}
                      <Link
                        href="/get-offer"
                        className="font-semibold underline decoration-emerald-500/60 underline-offset-4 hover:text-emerald-700"
                      >
                        Get an offer
                      </Link>{" "}
                      page and we&apos;ll show you how much you could get —
                      often within the same day.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </article>

        {relatedPosts.length > 0 && (
          <section className="max-w-[1100px] mx-auto px-4 md:px-0 mb-16">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#222221] mb-4"
              style={{ fontFamily: "Corbel, sans-serif" }}
            >
              More articles you might find helpful
            </h2>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {relatedPosts.map((related) => (
                <article
                  key={related.slug}
                  className="bg-white rounded-2xl border border-gray-100 shadow-md overflow-hidden flex flex-col"
                >
                  <div className="relative h-32 w-full">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <h3
                      className="text-sm md:text-base font-bold text-[#222221] mb-2 line-clamp-2"
                      style={{ fontFamily: "Corbel, sans-serif" }}
                    >
                      {related.title}
                    </h3>
                    <p
                      className="text-xs md:text-sm text-[#6F6F6E] mb-3 line-clamp-3 flex-1"
                      style={{ fontFamily: "Corbel, sans-serif" }}
                    >
                      {related.excerpt}
                    </p>
                    <Link
                      href={`/blog/${related.slug}`}
                      className="mt-auto inline-flex items-center text-xs md:text-sm font-semibold text-[#047857] hover:text-[#065F46]"
                      style={{ fontFamily: "Corbel, sans-serif" }}
                    >
                      Read article
                      <span className="ml-1">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* CTA / main section reused on every blog page */}
        <section className="max-w-[1100px] mx-auto px-4 md:px-0 mb-12">
          <GetQuoteForm showHeading={false} />
        </section>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}


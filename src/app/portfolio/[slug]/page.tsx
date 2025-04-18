import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx";
import { getPosts } from "@/app/utils/utils";
import { Button, Carousel, Column, Flex, Heading } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";
import ScrollToHash from "@/components/ScrollToHash";

interface portfolioParams {
  params: {
    slug: string;
  };
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "portfolio", "projects"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params: { slug } }: portfolioParams) {
  let post = getPosts(["src", "app", "portfolio", "projects"]).find((post) => post.slug === slug);
  if (!post) {
    return;
  }
  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    images,
    image,
    team,
  } = post.metadata;
  let ogImage = image ? `https://${baseURL}${image}` : `https://${baseURL}/og?title=${title}`;
  return {
    title,
    description,
    images,
    team,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://${baseURL}/portfolio/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Project({ params }: portfolioParams) {
  let post = getPosts(["src", "app", "portfolio", "projects"]).find((post) => post.slug === params.slug);
  if (!post) {
    notFound();
  }
  const avatars =
    post.metadata.team?.map((person) => ({
      src: person.avatar,
    })) || [];

  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="l">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `https://${baseURL}${post.metadata.image}`
              : `https://${baseURL}/og?title=${post.metadata.title}`,
            url: `https://${baseURL}/portfolio/${post.slug}`,
            author: {
              "@type": "Person",
              name: person.name,
            },
          }),
        }}
      />
      <Column maxWidth="xs" gap="16">
        <Button href="/portfolio" variant="tertiary" weight="default" size="s" prefixIcon="chevronLeft">
          Projects
        </Button>
        <Heading variant="display-strong-s">{post.metadata.title}</Heading>
      </Column>
      
      {/* Replace SmartImage with Carousel */}
      {post.metadata.images && post.metadata.images.length > 0 && (
        <Carousel
          sizes="(max-width: 960px) 100vw, 960px"
          images={post.metadata.images.map((image) => ({
            src: image,
            alt: post.metadata.title || "Project image",
          }))}
        />
      )}
      
      <Column style={{ margin: "auto" }} as="article" maxWidth="xs">
        <Flex gap="12" marginBottom="24" vertical="center">
          {/* {post.metadata.team && <AvatarGroup reverse avatars={avatars} size="m" />} */}
          {/* <Text variant="body-default-s" onBackground="neutral-weak">
            {post.metadata.publishedAt && formatDate(post.metadata.publishedAt)}
          </Text> */}
        </Flex>
        <CustomMDX source={post.content} />
      </Column>
      <ScrollToHash />
    </Column>
  );
}
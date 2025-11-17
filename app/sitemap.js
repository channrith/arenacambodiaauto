export default async function sitemap() {
  const baseUrl = `${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_HOST}`;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/api/list-for-sitemap`,
    {
      headers: { token: process.env.NEXT_PUBLIC_API_ACCESS_TOKEN },
    }
  );

  const data = await res.json();

  const newsLinks = data.map((item) => ({
    url: `${baseUrl}/news/${item.slug}-${item.id}`,
    lastModified: item.updated_at || item.published_at,
  }));

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/logo`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/reviews`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/compare`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    ...newsLinks,
  ];
}

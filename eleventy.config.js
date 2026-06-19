import "dotenv/config";

export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");

  const cdnBase = process.env.CDN_BASE_URL || "";

  // Rewrite a CDN image URL to serve via Cloudflare Image Resizing with format=auto
  eleventyConfig.addFilter("cdnSrc", function(url) {
    if (!cdnBase || !url || !url.startsWith(cdnBase)) return url || "";
    return `${cdnBase}/cdn-cgi/image/format=auto${url.slice(cdnBase.length)}`;
  });

  // Generate a srcset string at 400/800/1200/1920w via Cloudflare Image Resizing
  eleventyConfig.addFilter("cdnSrcset", function(url) {
    if (!cdnBase || !url || !url.startsWith(cdnBase)) return "";
    const imgPath = url.slice(cdnBase.length);
    return [400, 800, 1200, 1920]
      .map(w => `${cdnBase}/cdn-cgi/image/width=${w},format=auto${imgPath} ${w}w`)
      .join(", ");
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};

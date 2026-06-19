import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const manifest = JSON.parse(readFileSync(path.join(__dirname, "./images-manifest.json"), "utf-8"));

const CDN = process.env.CDN_BASE_URL || "";

function getImages(folder) {
  return (manifest[folder] || []).map(f => `${CDN}/images/${folder}/${f}`);
}

const byName = {
  acadia: {
    title: "Acadia National Park",
    headerImage: `${CDN}/images/acadia/IMG_2479.jpg`,
    headerBg: "bg-light",
    bg: "bg-light",
    navbarClass: "navbar-dark",
    thumbnail: `${CDN}/images/acadia/IMG_2479.jpg`,
    thumbnailTitle: "Acadia National Park",
    images: getImages("acadia"),
  },
  australia: {
    title: "Melbourne, Australia",
    headerImage: `${CDN}/images/australia/IMG_0136.jpg`,
    headerBg: "bg-light",
    bg: "bg-light",
    navbarClass: "navbar-dark",
    thumbnail: `${CDN}/images/australia/IMG_0109.jpg`,
    thumbnailTitle: "Melbourne, Australia",
    images: getImages("australia"),
  },
  classwork: {
    title: "College of the Holy Cross Photography Classwork",
    headerImage: `${CDN}/images/project/IMG_7060.JPG`,
    headerBg: "bg-light",
    bg: "bg-dark",
    navbarClass: "navbar-dark",
    thumbnail: `${CDN}/images/project/IMG_7068.JPG`,
    thumbnailTitle: "Classwork",
    images: [
      ...getImages("project"),
      ...getImages("photo2_final"),
      ...getImages("50col"),
    ],
  },
  darkroom: {
    title: "Darkroom Photography",
    headerImage: `${CDN}/images/darkroom/img20250409_18163172.jpg`,
    headerBg: "bg-dark",
    bg: "bg-dark",
    navbarClass: "navbar-dark",
    thumbnail: `${CDN}/images/darkroom/img20250423_18223888.jpg`,
    thumbnailTitle: "Darkroom Photography",
    images: getImages("darkroom"),
  },
  hc_track2024: {
    title: "College of the Holy Cross Track & Field (2024)",
    headerImage: `${CDN}/images/hc_track2024/IMG_7033.JPG`,
    headerBg: "bg-dark",
    bg: "bg-light",
    navbarClass: "navbar-dark",
    thumbnail: `${CDN}/images/hc_track2024/IMG_7034.JPG`,
    thumbnailTitle: "Track & Field",
    images: getImages("hc_track2024"),
  },
  kenya: {
    title: "Nairobi, Kenya",
    headerImage: `${CDN}/images/kenya/IMG_0896.jpg`,
    headerBg: "bg-light",
    bg: "bg-light",
    navbarClass: "navbar-dark",
    thumbnail: `${CDN}/images/kenya/IMG_0639.jpg`,
    thumbnailTitle: "Nairobi, Kenya",
    images: getImages("kenya"),
  },
  lowlight: {
    title: "Lowlight Photography",
    headerImage: `${CDN}/images/lowlight/IMG_2271.jpg`,
    headerBg: "bg-dark",
    bg: "bg-dark",
    navbarClass: "navbar-dark",
    thumbnail: `${CDN}/images/lowlight/IMG_2238.jpg`,
    thumbnailTitle: "Lowlight",
    images: getImages("lowlight"),
  },
};

export default {
  order: [
    "darkroom",
    "acadia",
    "hc_track2024",
    "australia",
    "lowlight",
    "kenya",
    "classwork",
  ],
  byName,
};

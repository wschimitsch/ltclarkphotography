import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imageBase = path.join(__dirname, "../../assets/images");

function getImages(folder) {
  return fs
    .readdirSync(path.join(imageBase, folder))
    .filter((f) => /\.(jpg|jpeg|JPG|JPEG)$/.test(f))
    .sort()
    .map((f) => `/assets/images/${folder}/${f}`);
}

const byName = {
  acadia: {
    title: "Acadia National Park",
    headerImage: "/assets/images/acadia/IMG_2479.jpg",
    headerBg: "bg-light",
    bg: "bg-light",
    navbarClass: "navbar-light",
    thumbnail: "/assets/images/acadia/IMG_2479.jpg",
    thumbnailTitle: "Acadia National Park",
    images: getImages("acadia"),
  },
  australia: {
    title: "Melbourne, Australia",
    headerImage: "/assets/images/australia/IMG_0136.jpg",
    headerBg: "bg-light",
    bg: "bg-light",
    navbarClass: "navbar-light",
    thumbnail: "/assets/images/australia/IMG_0109.jpg",
    thumbnailTitle: "Melbourne, Australia",
    images: getImages("australia"),
  },
  classwork: {
    title: "College of the Holy Cross Photography Classwork",
    headerImage: "/assets/images/project/IMG_7060.JPG",
    headerBg: "bg-light",
    bg: "bg-dark",
    navbarClass: "navbar-light",
    thumbnail: "/assets/images/project/IMG_7068.JPG",
    thumbnailTitle: "Classwork",
    images: [
      ...getImages("project"),
      ...getImages("photo2_final"),
      ...getImages("50col"),
    ],
  },
  darkroom: {
    title: "Darkroom Photography",
    headerImage: "/assets/images/darkroom/img20250409_18163172.jpg",
    headerBg: "bg-dark",
    bg: "bg-dark",
    navbarClass: "navbar-dark",
    thumbnail: "/assets/images/darkroom/img20250423_18223888.jpg",
    thumbnailTitle: "Darkroom Photography",
    images: getImages("darkroom"),
  },
  hc_track2024: {
    title: "College of the Holy Cross Track & Field (2024)",
    headerImage: "/assets/images/hc_track2024/IMG_7033.JPG",
    headerBg: "bg-dark",
    bg: "bg-light",
    navbarClass: "navbar-dark",
    thumbnail: "/assets/images/hc_track2024/IMG_7034.JPG",
    thumbnailTitle: "Track & Field",
    images: getImages("hc_track2024"),
  },
  kenya: {
    title: "Nairobi, Kenya",
    headerImage: "/assets/images/kenya/IMG_0896.jpg",
    headerBg: "bg-light",
    bg: "bg-light",
    navbarClass: "navbar-light",
    thumbnail: "/assets/images/kenya/IMG_0639.jpg",
    thumbnailTitle: "Nairobi, Kenya",
    images: getImages("kenya"),
  },
  lowlight: {
    title: "Lowlight Photography",
    headerImage: "/assets/images/lowlight/IMG_2271.jpg",
    headerBg: "bg-dark",
    bg: "bg-dark",
    navbarClass: "navbar-dark",
    thumbnail: "/assets/images/lowlight/IMG_2238.jpg",
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

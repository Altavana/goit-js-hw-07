const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];
const createGalleryCard = (imageInfo) => {
  const galleryItemEl = document.createElement("li");
  galleryItemEl.classList.add("gallery-item");
  const galleryImgEl = document.createElement("img");
  galleryImgEl.src = imageInfo.url;
  galleryImgEl.alt = imageInfo.alt;
  galleryImgEl.width = 360;
  galleryImgEl.height = 300;
  galleryItemEl.append(galleryImgEl);
  return galleryItemEl;
};

const galleryCardTemplate = images.map((imageInfo) =>
  createGalleryCard(imageInfo)
);
const galleryListEl = document.querySelector(".gallery");
galleryListEl.append(...galleryCardTemplate);
// ===============2 variant========
// const createGalleryCard = (imageInfo) => {
//   return `<li class="gallery-item">
//     <img src="${imageInfo.url}" alt="${imageInfo.alt}" width="360" height="300" /img>
//   </li>`;
// };
// const galleryCardTemplate = images
//   .map((imageInfo) => createGalleryCard(imageInfo))
//   .join("");
// const galleryListEl = document.querySelector(".gallery");
// galleryListEl.insertAdjacentHTML("beforeend", galleryCardTemplate);

import axios from "axios";
const accessKey = "Y_DgX2Deb85S77HgPbwRXVSibL_iRp6ahvRU-ECVrdg";

export default async function searchPhotos(topic, page) {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: `Client-ID ${accessKey}`,
    },
    params: {
      query: topic,
      page,
      per_page: 12,
    },
  });
  return {
    images: response.data.results,
    totalPages: response.data.total_pages,
  };
}

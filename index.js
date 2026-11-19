const axios = require("axios");

const API_KEY = process.env.COGNIFY_API_KEY;
const API_URL = "https://api.cognifyapi.com/google-images";
const QUERY = "tesla";

if (!API_KEY) {
  throw new Error("Set the COGNIFY_API_KEY environment variable before running this example.");
}

async function getImages(includeMetadata) {
  const params = {
    query: QUERY,
    count: 5,
  };

  if (includeMetadata) {
    params.imageInfo = true;
  }

  const response = await axios.get(API_URL, {
    params,
    headers: {
      "x-cognifyapi-key": API_KEY,
    },
  });

  const images = response.data.images;
  if (!Array.isArray(images)) {
    throw new Error("The API response did not contain an images array.");
  }

  if (images.length === 0) {
    console.log("No images found.");
    return;
  }

  const firstImage = images[0];
  const firstImageUrl =
    typeof firstImage === "string" ? firstImage : firstImage?.url;
  if (typeof firstImageUrl !== "string") {
    throw new Error("The first image result did not contain a URL.");
  }

  console.log(
    `Success! First image${includeMetadata ? " with metadata" : ""}:`,
    firstImageUrl
  );
}

async function main() {
  await getImages(true);
  await getImages(false);
}

main().catch((error) => {
  console.error(
    "Google Images request failed:",
    error.response?.data || error.message
  );
  process.exitCode = 1;
});

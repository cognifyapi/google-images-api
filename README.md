# Google Images Search API by CognifyAPI - Implementation Guide 🚀

This guide provides a quick start for implementing the **Google Images Search API** via [CognifyAPI](https://cognifyapi.com). Search Google Images programmatically and receive structured image results as JSON.

A high-performance Google Images API.  
#### Free trial. No credit card required.

[![Start Now](https://img.shields.io/badge/Start%20Now-🚀-blue?style=for-the-badge&logo=google-cloud)](https://cognifyapi.com/google-images?utm_source=github&utm_medium=repo&utm_campaign=google_images_api&utm_content=cta)

---

## Scraping Google Images to JSON

## 🔗 Official Resources
- **API Documentation:** [Google Images API Docs](https://cognifyapi.com/docs/google-images-docs)
- **More Info:** [Google Images API](https://cognifyapi.com/google-images)
- **Official Website:** [CognifyAPI.com](https://cognifyapi.com/)
- **CognifyAPI Studio:** [Get an API key](https://studio.cognifyapi.com/)
- **Source Repository:** [Google Images API on GitHub](https://github.com/cognifyapi/google-images-api)

---

## 🛠 Features
- **Google Images Search:** Search for images using a query.
- **Image Metadata:** Optionally include image dimensions, file type, and MIME type.
- **Structured JSON:** Integrate image results into applications and data workflows.
- **Scalable API:** Use the same endpoint for development and production workloads.

## 🚀 Getting Started

### Base URL

`https://api.cognifyapi.com`

### Authentication

Include your CognifyAPI key in the `x-cognifyapi-key` request header:

```text
x-cognifyapi-key: YOUR_COGNIFY_API_KEY
```

### Parameters

| Parameter | Required | Description |
| :--- | :--- | :--- |
| `query` | Yes | Search keyword (for example, `electric cars`). |
| `count` | No | Number of image results to return. |
| `imageInfo` | No | Set to `true` to include width, height, file type, and MIME type. |

### Search for Images with Metadata

The `imageInfo=true` parameter includes image dimensions and format metadata.

**Example Request (Node.js/Axios):**

```javascript
const axios = require("axios");

async function searchImages() {
  try {
    const response = await axios.get(
      "https://api.cognifyapi.com/google-images",
      {
        params: {
          query: "electric cars",
          count: 10,
          imageInfo: true,
        },
        headers: {
          "x-cognifyapi-key": "YOUR_COGNIFY_API_KEY",
        },
      }
    );

    console.log(response.data);
  } catch (error) {
    console.error(error.response?.data || error.message);
  }
}

searchImages();
```

**Example Response:**

```json
{
  "status": "success",
  "query": "electric cars",
  "results": 1,
  "images": [
    {
      "url": "https://images.squarespace-cdn.com/content/v1/6151d38ea56f9d31cf76ec07/5c36bef0-361b-43f4-8bb0-c0cdb49d98e4/688005_20250225_Polestar_4_Long_range_Single_motor_in_Electron.jpg",
      "width": 2500,
      "height": 1667,
      "type": "jpg",
      "mime": "image/jpeg"
    }
  ]
}
```

### Search for Images without Metadata

Omit `imageInfo` when image dimensions and format metadata are not needed.

**Example Request (cURL):**

```bash
curl --get 'https://api.cognifyapi.com/google-images' \
  --data-urlencode 'query=electric cars' \
  --data-urlencode 'count=10' \
  --header 'x-cognifyapi-key: YOUR_COGNIFY_API_KEY'
```

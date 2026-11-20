# Google Images Search API by CognifyApi - Implementation Guide 🚀

This repository provides a quick-start guide and documentation for implementing the **Google Images Search API** via [Cognify API](https://cognifyapi.com). This API allows developers to programmatically fetch high-quality image results from Google's index.
A high-performance Google Images API.
#### Free trial No credit card required.
[![Start Now](https://img.shields.io/badge/Start%20Now%20-🚀-blue?style=for-the-badge&logo=google-cloud)](https://cognifyapi.com/google-images?utm_source=github&utm_medium=repo&utm_campaign=google_images_api&utm_content=cta)

---

## Scraping Google Images to JSON

## 🔗 Official Resources
- **API Documentation:** [Google Images API Docs](https://cognifyapi.com/docs/google-images-docs)
- **More Info:** [Google Images API](https://cognifyapi.com/google-images)
- **Official Website:** [CognifyAPI.com](https://cognifyapi.com/)
- **Provider Platform (studio.cognifyapi.com):** [Google Images Api](https://studio.cognifyapi.com)

---

## 🛠 Features
- **Massive Database:** Access Google's vast image repository.
- **Advanced Metadata:** Get image dimensions (width/height) and MIME types.
- **Auto-Complete:** Access Google search suggestions alongside image results.
- **Scalable:** Built on high-performance infrastructure for production apps.

## 🚀 Getting Started

### Base URL
`https://api.cognifyapi.com`

**Parameters:**
| Parameter | Required | Description |
| :--- | :--- | :--- |
| `query` | Yes | Search keyword (e.g., "SpaceX") |
| `count` | No | Number of results (Default: 100) |
| `imageInfo`| No | Set to `true` to return width, height, and mime type. |

### 1. Fetch Images with all parameters (`/google-images`)
Retrieve images based on a search keyword with all parameters included.

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
    console.error(error);
  }
}

searchImages();
```
**Example Response (Node.js/Axios):**
```json
{
    "status": "success",
    "query": "SpaceX",
    "results": 2,
    "images": [
        {
            "url": "https://example.com/image.jpg",
            "width": 1920,
            "height": 1080,
            "type": "jpg",
            "mime": "image/jpg"
        },
        {
            "url": "https://example.com/image.jpg",
            "width": 1920,
            "height": 1080,
            "type": "jpg",
            "mime": "image/jpg"
        }
    ]
}
```

### 2. Fetch Images without imageInfo parameter (`/google-images`)
Retrieve images based on a search keyword.

**Example Request (Node.js/Axios):**
```javascript
const axios = require("axios");

async function searchImages() {
  try {
    const response = await axios.get(
      "https://api.cognifyapi.com/google-images",
      {
        params: {
          query: "SpaceX",
          count: 5,
        },
        headers: {
          "x-cognifyapi-key": "YOUR_COGNIFY_API_KEY",
        },
      }
    );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

searchImages();
```

**Example Response (Node.js/Axios):**
```json
{
    "status": "success",
    "query": "SpaceX",
    "results": 2,
    "images": [
        {
            "url": "https://example.com/image.jpg",
        },
        {
            "url": "https://example.com/image.jpg",
        }
    ]
}
```

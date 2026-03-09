# Google Images API by CognifyApi - Implementation Guide 🚀

This repository provides a quick-start guide and documentation for implementing the **Google Images Search API** via [Cognify API](https://cognifyapi.com). This API allows developers to programmatically fetch high-quality image results from Google's index.

---

## 🔗 Official Resources
- **API Documentation:** [Google Images API Docs](https://cognifyapi.com/docs/google-images-docs)
- **More Info:** [Google Images API](https://cognifyapi.com/google-images)
- **Official Website:** [CognifyAPI.com](https://cognifyapi.com/)
- **Provider Platform:** [Google Images Api from RapidAPI Link](https://rapidapi.com/johnjames28/api/google-images4)

---

## 🛠 Features
- **Massive Database:** Access Google's vast image repository.
- **Advanced Metadata:** Get image dimensions (width/height) and MIME types.
- **Auto-Complete:** Access Google search suggestions alongside image results.
- **Scalable:** Built on high-performance infrastructure for production apps.

## 🚀 Getting Started

### Base URL
`https://google-images4.p.rapidapi.com`

**Parameters:**
| Parameter | Required | Description |
| :--- | :--- | :--- |
| `query` | Yes | Search keyword (e.g., "SpaceX") |
| `count` | No | Number of results (Default: 100) |
| `imageInfo`| No | Set to `true` to return width, height, and mime type. |

### 1. Fetch Images with all parameters (`/getGoogleImages`)
Retrieve images based on a search keyword with all parameters included.

**Example Request (Node.js/Axios):**
```javascript
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://google-images4.p.rapidapi.com/getGoogleImages',
  params: {query: 'SpaceX', count: '5', imageInfo: 'true'},
  headers: {
    'X-RapidAPI-Key': 'YOUR_API_KEY',
    'X-RapidAPI-Host': 'google-images4.p.rapidapi.com'
  }
};

axios.request(options).then(response => {
    console.log(response.data);
}).catch(error => {
    console.error(error);
});
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

### 2. Fetch Images without imageInfo parameter (`/getGoogleImages`)
Retrieve images based on a search keyword.

**Example Request (Node.js/Axios):**
```javascript
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://google-images4.p.rapidapi.com/getGoogleImages',
  params: {query: 'SpaceX', count: '5'},
  headers: {
    'X-RapidAPI-Key': 'YOUR_API_KEY',
    'X-RapidAPI-Host': 'google-images4.p.rapidapi.com'
  }
};

axios.request(options).then(response => {
    console.log(response.data);
}).catch(error => {
    console.error(error);
});
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



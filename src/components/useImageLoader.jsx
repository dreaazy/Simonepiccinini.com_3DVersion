import { useState, useEffect } from "react";

const useImageLoader = (imageUrls) => {
  const [loaded, setLoaded] = useState(false);
  const [loadCount, setLoadCount] = useState(0);

  useEffect(() => {
    const promises = imageUrls.map((url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
          setLoadCount((prev) => prev + 1);
          resolve(url);
        };
        img.onerror = () => {
          setLoadCount((prev) => prev + 1);
          reject(url);
        };
      });
    });

    Promise.all(promises)
      .then(() => setLoaded(true))
      .catch(() => setLoaded(true));
  }, [imageUrls]);

  return { loaded, loadCount };
};

export default useImageLoader;

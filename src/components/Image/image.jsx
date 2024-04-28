import React, { useEffect, useRef, useState } from "react";
import placeholder from "../../assets/place-holder.jpg";

const ImageWithLoading = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const complete = imageRef.current && imageRef.current.complete;

    if (complete) {
      setLoaded(true);
    }
  }, [imageRef]);

  return (
    <div>
      {!loaded && !error ? (
        <img
          className="h-full w-full object-cover animate-pulse"
          src={placeholder}
          alt="Placeholder"
        />
      ) : null}
      {!error ? (
        <img
          className="h-full w-full object-cover"
          src={src}
          style={!loaded ? { visibility: "hidden" } : {}}
          ref={imageRef}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          alt={alt}
        />
      ) : (
        <div
          style={{
            backgroundColor: "lightgray",
            display: "flex",
            alignItems: "center",
            color: "gray",
            textAlign: "left",
            minWidth: "140px",
            minHeight: "250px",
            padding: "10px",
          }}
          className="h-full w-full"
        >
          No image available
        </div>
      )}
    </div>
  );
};

export default ImageWithLoading;

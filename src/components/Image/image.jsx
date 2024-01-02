import React, { useState, useRef, useEffect } from 'react';

const ImageWithLoading = ({ src, alt }) => {
    const [loaded, setLoaded] = useState(false);
    const imageRef = useRef(null);

    useEffect(() => {
        const complete = imageRef.current && imageRef.current.complete;

        if (complete) {
            setLoaded(true);
        }
    }, [imageRef]);

    return (
        <div>
            {!loaded ? (
                <div>
                    loading...
                </div>
            ) : null}
            <img
                className='h-full w-full object-cover'
                src={src}
                style={!loaded ? { visibility: 'hidden' } : {}}
                ref={imageRef}
                onLoad={() => setLoaded(true)}
                alt={alt}
            />
        </div>
    );
};

export default ImageWithLoading;

import React, {useEffect, useRef, useState} from 'react';
import placeholder from '../../assets/place-holder.jpg';

const ImageWithLoading = ({src, alt}) => {
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
                <img
                    className='h-full w-full object-cover animate-pulse'
                    src={placeholder}
                    alt='Placeholder'
                />
            ) : null}
            <img
                className='h-full w-full object-cover'
                src={src}
                style={!loaded ? {visibility: 'hidden'} : {}}
                ref={imageRef}
                onLoad={() => setLoaded(true)}
                alt={alt}
            />
        </div>
    );
};

export default ImageWithLoading;

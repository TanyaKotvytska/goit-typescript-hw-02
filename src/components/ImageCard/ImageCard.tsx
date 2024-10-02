import css from './ImageCard.module.css';

interface Image {
    id: string;
    urls: {
        small: string;
    };
    alt_description: string;
}

interface ImageCardProps {
    image: Image;
    onClick: (image: Image) => void;
}

export default function ImageCard({ image, onClick }: ImageCardProps) {
    return (
        <div className={css.card}>
            <img src={image.urls.small} alt={image.alt_description} className={css.img} onClick={() => onClick(image)} />
        </div>
    );
}
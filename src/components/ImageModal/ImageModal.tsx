import Modal from 'react-modal';
import css from './ImageModal.module.css';

interface Image {
    urls: {
        regular: string;
    };
    alt_description: string;
    description: string | null;
    user: {
        name: string;
    };
    likes: number;
}

interface ImageModalProps {
    isOpen: boolean;
    onClose: () => void;
    image: Image | null;
}

Modal.setAppElement('#root');

export default function ImageModal({ isOpen, onClose, image }: ImageModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            className={css.modal}
            overlayClassName={css.overlay}
        >
            {image && (
                <div className={css.modalContent}>
                    <img src={image.urls.regular} alt={image.alt_description} className={css.img} />
                    <p>{image.description || 'No description available'}</p>
                    <p>Author: {image.user.name}</p>
                    <p>Likes: {image.likes}</p>
                    <button type="button" onClick={onClose} className={css.closeBtn}>Close</button>
                </div>
            )}
        </Modal>
    );
}
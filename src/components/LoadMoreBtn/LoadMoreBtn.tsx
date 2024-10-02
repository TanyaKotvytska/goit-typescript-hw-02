import css from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
    onLoadMore: () => void;
}

export default function LoadMoreBtn({ onLoadMore }: LoadMoreBtnProps) {
    return (
        <button className={css.btnloadmore} onClick={onLoadMore}>Load more</button>
    );
}
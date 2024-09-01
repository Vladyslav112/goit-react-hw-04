import style from './LoadMoreBtn.module.css'

export default function LoadMoreBtn({ onClick, loadMoreRef }) {
  return (
    <button className={style.loadBtn} onClick={onClick} ref={loadMoreRef}>Load more</button>
  );
}

import "./Pagination.css";

export default function Pagination({ currentPage, pageCount, totalCount, isSearching, onPrevious, onNext }) {
  const safePageCount = Math.max(pageCount, 1);

  return (
    <div className="pagination">
      <button className="btn-nav" onClick={onPrevious} disabled={currentPage <= 1}>
        Previous
      </button>
      <span>
        {isSearching
          ? `Page ${currentPage} of ${safePageCount} (${totalCount} results)`
          : `Page ${currentPage} of ${safePageCount}`}
      </span>
      <button className="btn-nav" onClick={onNext} disabled={currentPage >= safePageCount}>
        Next
      </button>
    </div>
  );
}

"use client";
import Link from "next/link";

export default function Pagination({ currentPage, totalItems, perPage, basePath }) {
    const totalPages = Math.ceil(totalItems / perPage);
    if (totalPages <= 1) return null;

    const getPageNumbers = () => {
        const delta = 1; // how many pages before and after current
        const range = [];
        const rangeWithDots = [];

        let l;

        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
                range.push(i);
            }
        }

        for (let i of range) {
            if (l) {
                if (i - l === 2) {
                    rangeWithDots.push(l + 1);
                } else if (i - l > 2) {
                    rangeWithDots.push("...");
                }
            }
            rangeWithDots.push(i);
            l = i;
        }

        return rangeWithDots;
    };

    const pageNumbers = getPageNumbers();

    const prevPage = currentPage > 1 ? currentPage - 1 : null;
    const nextPage = currentPage < totalPages ? currentPage + 1 : null;

    return (
        <div className="pagination">
            {prevPage && (
                <Link href={`${basePath}?page=${prevPage}`} className="pagination__link">
                    ← Prev
                </Link>
            )}

            {pageNumbers.map((page, idx) =>
                page === "..." ? (
                    <span key={idx} className="pagination__dots">…</span>
                ) : (
                    <Link
                        key={idx}
                        href={`${basePath}?page=${page}`}
                        className={`pagination__link ${page === currentPage ? "active" : ""}`}
                    >
                        {page}
                    </Link>
                )
            )}

            {nextPage && (
                <Link href={`${basePath}?page=${nextPage}`} className="pagination__link">
                    Next →
                </Link>
            )}
        </div>
    );
}

let numReviewsCompleted;

if (localStorage.getItem('numReviewsCompleted')) {
    numReviewsCompleted = parseInt(localStorage.getItem('numReviewsCompleted'));
} else {
    numReviewsCompleted = 0;
}


localStorage.setItem('numReviewsCompleted', numReviewsCompleted);

const numReviewsCompletedPrint = localStorage.getItem('numReviewsCompleted');

document.getElementById('numReviewsCompleted').textContent = numReviewsCompletedPrint;

const checkbox = document.getElementById("checkbox");
const ball = document.getElementById("ball24");

const getPreferredBall = () => {
    return localStorage.getItem('theme')
}

const setThemeBall = function (theme) {
    console.log('theme:', theme);
    if (theme == 'dark') {
        ball.style.transform = 'translateX(24px)';
    }
    else ball.style.transform = 'translateX(0px)';
}
if (checkbox != null) {
    window.addEventListener('DOMContentLoaded', () => {
        setThemeBall(getPreferredBall());
    })

    checkbox.addEventListener("change", () => {
        console.log('checkbox changed');
        setThemeBall(getPreferredBall());
    })
}
//----Time-----------------------
function timeAgo(date) {
    const now = new Date();
    const timeDiff = now - new Date(date);
    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);

    if (weeks >= 1) {
        return new Date(date).toLocaleString();
    } else if (days > 0) {
        return `${days} ngày trước`;
    } else if (hours > 0) {
        return `${hours} giờ trước`;
    } else if (minutes > 0) {
        return `${minutes} phút trước`;
    } else {
        return `${seconds} giây trước`;
    }
}
document.addEventListener('DOMContentLoaded', function () {

    const timestamps = document.querySelectorAll(".timestamp");

    timestamps.forEach(timestamp => {
        const originalText = timestamp.textContent;
        timestamp.textContent = timeAgo(originalText);
    });


    const starContainers = document.querySelectorAll('.stars');

    starContainers.forEach(container => {
        const voteValue = container.getAttribute('data-vote-value');
        if (voteValue) {
            const starInput = container.querySelector(`input.star.star-${voteValue}`);
            if (starInput) {
                starInput.checked = true;
            }
        }
    });


    const contentElements = document.querySelectorAll(".content-container");

    contentElements.forEach(container => {
        const contentElement = container.querySelector(".content");
        const originalText = contentElement.textContent;

        if (originalText.length > 500) {
            const truncatedText = originalText.substring(0, 500);
            contentElement.textContent = truncatedText + '...';

            const readMoreButton = document.createElement("a");
            readMoreButton.classList.add("read-more-button");
            readMoreButton.href = "javascript:void(0)"
            readMoreButton.textContent = "Đọc thêm";
            container.appendChild(readMoreButton);

            readMoreButton.addEventListener('click', function () {
                if (contentElement.textContent === truncatedText + '...') {
                    contentElement.textContent = originalText;
                    readMoreButton.textContent = "Ẩn bớt";
                } else {
                    contentElement.textContent = truncatedText + '...';
                    readMoreButton.textContent = "Đọc thêm";
                }
            });
        }
    });

    const commentElements = document.querySelectorAll(".content-comment-alt");

    commentElements.forEach(container => {
        const contentElement = container.querySelector(".content-comment");
        const originalText = contentElement.textContent;

        if (originalText.length > 200) {
            const truncatedText = originalText.substring(0, 200);
            contentElement.textContent = truncatedText + '...';

            const readMoreButton = document.createElement("a");
            readMoreButton.classList.add("read-more-button");
            readMoreButton.href = "javascript:void(0)"
            readMoreButton.textContent = "Đọc thêm";
            container.appendChild(readMoreButton);

            readMoreButton.addEventListener('click', function () {
                if (contentElement.textContent === truncatedText + '...') {
                    contentElement.textContent = originalText;
                    readMoreButton.textContent = "Ẩn bớt";
                } else {
                    contentElement.textContent = truncatedText + '...';
                    readMoreButton.textContent = "Đọc thêm";
                }
            });
        }
    });




});
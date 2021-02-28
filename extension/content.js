const interval = setInterval(() => {
    let skip = document.querySelector('.skip-credits span');

    if (skip != null) {
        skip.click();
    }
}, 1000);
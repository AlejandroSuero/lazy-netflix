const interval = setInterval(() => {
    let skipIntro = document.querySelector('.skip-credits span');
    let continueWatching = document.querySelector('.interrupter-actions');

    if (skipIntro != null) skipIntro.click();
    // if (continueWatching != null) continueWatching.children[0].click();
}, 1000);
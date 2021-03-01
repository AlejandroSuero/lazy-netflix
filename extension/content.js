const interval = setInterval(() => {
    let skipIntro = document.querySelector('.skip-credits span');
    let continueWatching = document.querySelector('.interrupter-actions')
        .children[0];
    if (skipIntro != null) skipIntro.click();

    if (continueWatching != null) continueWatching.click();
}, 1000);
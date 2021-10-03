const interval = setInterval(() => {
    //let skipIntro = document.querySelector('.skip-credits span');
    let continueWatching = document.querySelector('button[data-uia]');

    if (skipIntro != null) skipIntro.click();
    if (continueWatching != null) continueWatching.click();
}, 1000);

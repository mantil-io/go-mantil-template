function ping() {
    fetch('/ping', {
        method: 'POST'
    }).then(rsp => {
        rsp.text().then(rspText => {
            document.getElementById('response').innerHTML = rspText;
        });
    });
}

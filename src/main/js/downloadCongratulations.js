function downloadCongratulations(){
    return  fetch('/congratulation/all', {
        method: 'GET'
    });
}

export default downloadCongratulations
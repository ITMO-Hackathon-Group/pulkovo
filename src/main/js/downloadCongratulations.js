function downloadCongratulations(){
    return  fetch('/api/congratulations', {
        method: 'GET'
    });
}

export default downloadCongratulations
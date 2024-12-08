document.getElementById('donate-btn')
    .addEventListener('click', function(){
        showSectionById('donate-section');

    })

document.getElementById('history-btn')
    .addEventListener('click', function(){
        showSectionById('history-section');
    })



// blog button click to another html file 
document.getElementById('blog-btn')
    .addEventListener('click', function(){
        window.location.href = 'home.html';
    })



 
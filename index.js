
const slider = $('.slider');

slider.click(function (e) { 
    
    const body = $('body')
    body.toggleClass('dark-theme');
    $('.grid-item:nth-child(2) >div').toggleClass('dark-theme');
    $('.grid-item:nth-child(4) >div').toggleClass('dark-theme');
    
});

function showPictures(option) {
    // Clear previous pictures
    var pictureContainer1 = document.getElementById('picture-container1');
    var pictureContainer2 = document.getElementById('picture-container2');
    pictureContainer1.innerHTML = '';
    pictureContainer2.innerHTML='';
  
    // Check the selected option and add pictures accordingly
    if (option === 'a') {
      var picture1 = createPictureElement('https://a0.muscache.com/im/pictures/miso/Hosting-831649665316637609/original/28d10eb8-b02e-49c6-a250-623358f6ac4c.jpeg?im_w=720', 'Caption 1\nCaption2\nCaption3\nCaption4');
      var picture2 = createPictureElement('https://example.com/pic2.jpg', 'Caption 2');
  
      pictureContainer1.appendChild(picture1);
      pictureContainer1.appendChild(picture2);
    } else if (option === 'b') {
      var picture1 = createPictureElement('https://example.com/pic3.jpg', 'Caption 3');
      var picture1 = createPictureElement('https://example.com/pic4.jpg', 'Caption 4');
  
      pictureContainer1.appendChild(picture1);
      pictureContainer1.appendChild(picture2);
    } else if (option === 'c') {
      var picture5 = createPictureElement('https://example.com/pic5.jpg', 'Caption 5');
      var picture6 = createPictureElement('https://example.com/pic6.jpg', 'Caption 6');
  
      pictureContainer1.appendChild(picture5);
      pictureContainer1.appendChild(picture6);
    }
}
  


function createPictureElement(url, caption) {
    var picture = document.createElement('img');
    picture.src = url;
    
    var captionElement = document.createElement('div');
    captionElement.innerHTML = formatCaption(caption); // Call the formatCaption function
  
    var container = document.createElement('div');
    container.appendChild(picture);
    container.appendChild(captionElement);
  
    return container;
}
  
function formatCaption(caption) {
    var lines = caption.split('\n');
    var formattedCaption = '';
  
    for (var i = 0; i < lines.length; i++) {
        if (i === 0 || i === 3) {
            formattedCaption += '<span class="caption-bold">' + lines[i] + '</span><br>';
        } else {
            formattedCaption += lines[i] + '<br>';
        }
    }
  
    return formattedCaption;
}
  
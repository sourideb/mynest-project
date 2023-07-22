function showPictures(option) {
    // Clear previous pictures
    var pictureContainer1 = document.getElementById('picture-container1');
    var pictureContainer2 = document.getElementById('picture-container2');
    pictureContainer1.innerHTML = '';
    pictureContainer2.innerHTML='';
  
    // Check the selected option and add pictures accordingly
    if (option === 'a') {
      var picture1 = createPictureElement('https://a0.muscache.com/im/pictures/69987904/015a422e_original.jpg?im_w=720', 'Habarana, Sri Lanka\nGalkadawala Lake\n1-6 Aug\n&#8377;10,581 night');
      var picture2 = createPictureElement('https://a0.muscache.com/im/pictures/423ad020-631c-409d-ab2b-8c6dc4c48777.jpg?im_w=720', 'Lonavla, India\nPavana Lake\n30 Jul - 4 Aug\n&#8377;22,025 night');
      var picture3 = createPictureElement('https://a0.muscache.com/im/pictures/miso/Hosting-884585049007824241/original/c9c0f155-938b-4524-8932-babcd2c56ada.jpeg?im_w=720', 'Ambegaon, India\nPavana Lake\n23-28 Jul\n&#8377;10,450 night');
      var picture4 = createPictureElement('https://a0.muscache.com/im/pictures/miso/Hosting-917065402471719060/original/d5d7a8d2-d018-4ca4-9d36-292a122ba8ee.jpeg?im_w=720', 'Tây Hồ, Vietnam\nWest Lake\n22-29 Jul\n&#8377;11,353 night');
      var picture5 = createPictureElement('https://a0.muscache.com/im/pictures/5093d028-dba5-4ec2-933f-85a87488b518.jpg?im_w=720', 'Muhamma, India\nVembanad Lake\n22-28 Jul\n&#8377;8,024 night');
      var picture6 = createPictureElement('https://a0.muscache.com/im/pictures/a569ec98-7a60-4448-9489-a5dd8b500b3b.jpg?im_w=720', 'Alappuzha, India\nVembanad Lake\n3-8 Sep\n&#8377;12,667 night');
      var picture7 = createPictureElement('https://a0.muscache.com/im/pictures/d0883138-8f88-4c58-a98e-b4b2432fd14d.jpg?im_w=720', 'Pokhara, Nepal\nPhewa Lake\n22-27 Jul\n&#8377;1,348 night');
      var picture8 = createPictureElement('https://a0.muscache.com/im/pictures/752924e9-8660-4940-af50-babf5e74b5bd.jpg?im_w=720', 'Udaipur, India\nLake Pichola\n27 Jul - 3 Aug\n&#8377;8,477 night');

      pictureContainer1.appendChild(picture1);
      pictureContainer1.appendChild(picture2);
      pictureContainer1.appendChild(picture3);
      pictureContainer1.appendChild(picture4);
      pictureContainer2.appendChild(picture5);
      pictureContainer2.appendChild(picture6);
      pictureContainer2.appendChild(picture7);
      pictureContainer2.appendChild(picture8);

      // picture1.setAttribute('id','pic1');
      // picture2.setAttribute('id','pic2');
      // picture3.setAttribute('id','pic3');
      // picture4.setAttribute('id','pic4');
      // picture5.setAttribute('id','pic5');
      // picture6.setAttribute('id','pic6');
      // picture7.setAttribute('id','pic7');
      // picture8.setAttribute('id','pic8');
      
      picture1.addEventListener('click', function() {redirectLink('pic1');} );
      picture2.addEventListener('click', function() {redirectLink('pic2');} );
      picture3.addEventListener('click', function() {redirectLink('pic3');} );
      picture4.addEventListener('click', function() {redirectLink('pic4');} );
      picture5.addEventListener('click', function() {redirectLink('pic5');} );
      picture6.addEventListener('click', function() {redirectLink('pic6');} );
      picture7.addEventListener('click', function() {redirectLink('pic7');} );
      picture8.addEventListener('click', function() {redirectLink('pic8');} );
    }
    else if (option === 'b') {
      var picture1 = createPictureElement('https://a0.muscache.com/im/pictures/miso/Hosting-26300485/original/ee94e6c1-6ebc-496e-af84-1502edd1b759.jpeg?im_w=720', 'London, UK\nStay with Amelia,Hosting for 5 years\n1-6 Aug\n&#8377;6,086 night');
      var picture2 = createPictureElement('https://a0.muscache.com/im/pictures/miso/Hosting-668146487515150072/original/8ff2a532-e0cd-41a2-9164-554c4d9eb28a.jpeg?im_w=720', 'Nantes, France\nStay with Golwen\n2-8 Sep\n&#8377;7,536 night');
      var picture3 = createPictureElement('https://a0.muscache.com/im/pictures/miso/Hosting-742424658135898180/original/ef5464ea-5eb8-426a-a097-a4ed7a395610.jpeg?im_w=720', 'Lyon, France\nStay with Edouard,Coach trainer\n15-21 Sep\n&#8377;8,443 night');
      var picture4 = createPictureElement('https://a0.muscache.com/im/pictures/miso/Hosting-51809333/original/0da70267-d9da-4efb-9123-2714b651c9fd.jpeg?im_w=720', 'Milan, Italy\nStay with Valentina,Interior designer\n28 Jul - 4 Aug\n&#8377;8,410 night');
      var picture5 = createPictureElement('https://a0.muscache.com/im/pictures/miso/Hosting-23206143/original/e7da1f36-922f-4631-a287-91ceda05970f.jpeg?im_w=720', 'Lindfield, UK\nStay with Michelle & Michael,Food artist\n6-12 Aug\n&#8377;13,421 night');
      var picture6 = createPictureElement('https://a0.muscache.com/im/pictures/airflow/Hosting-1112254/original/e6bed0e6-6190-4119-bd80-d12d369cea19.jpg?im_w=720', 'Palermo, Italy\nStay with Gandolfo Gabriele,Artist\n22-27 Jul\n&#8377;8,425 night');
      var picture7 = createPictureElement('https://a0.muscache.com/im/pictures/miso/Hosting-13016398/original/6c59e24d-89f3-4475-aaca-80363792fb51.jpeg?im_w=720', 'Malakoff, France\nStay with Jacques-Olivier,Ssii manager\n4-9 Aug\n&#8377;6,280 night');
      var picture8 = createPictureElement('https://a0.muscache.com/im/pictures/airflow/Hosting-1197834/original/2c2cf7d3-cfa7-46f6-b9d7-cfd88fef90eb.jpg?im_w=720', 'Edinburgh, UK\nStay with Felicitas,Parent & tour guide\n3-8 Oct\n&#8377;18,112 night');

      pictureContainer1.appendChild(picture1);
      pictureContainer1.appendChild(picture2);
      pictureContainer1.appendChild(picture3);
      pictureContainer1.appendChild(picture4);
      pictureContainer2.appendChild(picture5);
      pictureContainer2.appendChild(picture6);
      pictureContainer2.appendChild(picture7);
      pictureContainer2.appendChild(picture8);

      picture1.addEventListener('click', function() {redirectLink('pic9');} );
      picture2.addEventListener('click', function() {redirectLink('pic10');} );
      picture3.addEventListener('click', function() {redirectLink('pic11');} );
      picture4.addEventListener('click', function() {redirectLink('pic12');} );
      picture5.addEventListener('click', function() {redirectLink('pic13');} );
      picture6.addEventListener('click', function() {redirectLink('pic14');} );
      picture7.addEventListener('click', function() {redirectLink('pic15');} );
      picture8.addEventListener('click', function() {redirectLink('pic16');} );
    } 
    else if (option === 'c') {
      var picture1 = createPictureElement('https://a0.muscache.com/im/pictures/982ef679-2ce5-45f5-96c9-f66b34244be7.jpg?im_w=720', 'Ko Samui, Thailand\nLaem Yai\n10-15 Aug\n&#8377;5,220 night');
      var picture2 = createPictureElement('https://a0.muscache.com/im/pictures/ec593870-4efa-4a82-866b-fd988f783baa.jpg?im_w=720', 'ตำบล เกาะพะงัน, Thailand\nHaad Yao\n1-6 Aug\n&#8377;12,097 night');
      var picture3 = createPictureElement('https://a0.muscache.com/im/pictures/miso/Hosting-884166519919743945/original/d5e35761-7b95-4411-8ed0-e459ec27a957.png?im_w=720', 'Tambon Bang Lamung, Thailand\nHat Si Chomphu\n1-6 Sep\n&#8377;77,340 night');
      var picture4 = createPictureElement('https://a0.muscache.com/im/pictures/5bf5fbbe-ab49-42db-bf43-6634315c3167.jpg?im_w=720', 'koh phangan, Thailand\nHaad Baan Tai Beach\n2-9 Dec\n&#8377;9,346 night');
      var picture5 = createPictureElement('https://a0.muscache.com/im/pictures/miso/Hosting-687380363366100490/original/fafaf623-52c8-4825-9fd6-e1940063a698.jpeg?im_w=720', 'Tambon Bo Put, Thailand\nBo Phut\n3-8 Oct\n&#8377;41,312 night');
      var picture6 = createPictureElement('https://a0.muscache.com/im/pictures/miso/Hosting-542277451403777075/original/85af7bcb-a3e5-49b2-afb8-8bc024426271.jpeg?im_w=720', 'ตำบล บางเก่า, Thailand\n1,638 kilometres away\n22-29 Jul\n&#8377;93,644 night');
      var picture7 = createPictureElement('https://a0.muscache.com/im/pictures/2ab1e5df-7709-47b6-8b70-c28c33e31b6d.jpg?im_w=720', 'Ko Samui, Thailand\nHat Bang Po\n18-23 Aug\n&#8377;83,797 night');
      var picture8 = createPictureElement('https://a0.muscache.com/im/pictures/b23f619e-f79e-4fdc-a92b-f40d537f6c8b.jpg?im_w=720', 'Koh Samui, Thailand\nChoeng Mon Beach\n21-28 Aug\n&#8377;1,64,253 night');
  
      pictureContainer1.appendChild(picture1);
      pictureContainer1.appendChild(picture2);
      pictureContainer1.appendChild(picture3);
      pictureContainer1.appendChild(picture4);
      pictureContainer2.appendChild(picture5);
      pictureContainer2.appendChild(picture6);
      pictureContainer2.appendChild(picture7);
      pictureContainer2.appendChild(picture8);

      picture1.addEventListener('click', function() {redirectLink('pic17');} );
      picture2.addEventListener('click', function() {redirectLink('pic18');} );
      picture3.addEventListener('click', function() {redirectLink('pic19');} );
      picture4.addEventListener('click', function() {redirectLink('pic20');} );
      picture5.addEventListener('click', function() {redirectLink('pic21');} );
      picture6.addEventListener('click', function() {redirectLink('pic22');} );
      picture7.addEventListener('click', function() {redirectLink('pic23');} );
      picture8.addEventListener('click', function() {redirectLink('pic24');} );
    } 
    else if (option === 'd') {
      var picture1 = createPictureElement('https://a0.muscache.com/im/pictures/48097969/cb846919_original.jpg?im_w=720', 'Imerovigli, Greece\n6,175 kilometres away\n20-25 Aug\n&#8377;69,080 night');
      var picture2 = createPictureElement('https://a0.muscache.com/im/pictures/7a6a7d8b-4712-4efe-a3d9-10ea636a3cdc.jpg?im_w=720', 'GR, Greece\n6,138 kilometres away\n1-6 Sep\n&#8377;9,420 night');
      var picture3 = createPictureElement('https://a0.muscache.com/im/pictures/f90d29e7-780e-446a-9116-be99947b6ff3.jpg?im_w=720', 'Kos, Greece\n6,007 kilometres away\n1-6 Aug\n&#8377;18,865 night');
      var picture4 = createPictureElement('https://a0.muscache.com/im/pictures/d6ff8247-5ef5-4f91-9ff5-120d41a6b549.jpg?im_w=720', 'Lalysos, Greece\n5,931 kilometres away\n21-26 Sep\n&#8377;27,515 night');
      var picture5 = createPictureElement('https://a0.muscache.com/im/pictures/48098715/6b51c331_original.jpg?im_w=720', 'Imerovigli, Greece\n6,175 kilometres away\n21-27 Aug\n&#8377;54,427 night');
      var picture6 = createPictureElement('https://a0.muscache.com/im/pictures/b0edd889-4156-4ebd-9f58-0261d2a78106.jpg?im_w=720', 'Ano Syros, Greece\n6,211 kilometres away\n17-23 Sep\n&#8377;20,270 night');
      var picture7 = createPictureElement('https://a0.muscache.com/im/pictures/e6dd8466-72ac-46c8-a3d8-8d7c7d403ccf.jpg?im_w=720', 'Míkonos, Greece\n6,177 kilometres away\n21-27 Jul\n&#8377;62,886 night');
      var picture8 = createPictureElement('https://a0.muscache.com/im/pictures/8c394e3b-9c87-4c76-b635-3f93eb14e3cb.jpg?im_w=720', 'Akrotiri, Greece\n6,168 kilometres away\n22-27 Jul\n&#8377;16,747 night');
  
      pictureContainer1.appendChild(picture1);
      pictureContainer1.appendChild(picture2);
      pictureContainer1.appendChild(picture3);
      pictureContainer1.appendChild(picture4);
      pictureContainer2.appendChild(picture5);
      pictureContainer2.appendChild(picture6);
      pictureContainer2.appendChild(picture7);
      pictureContainer2.appendChild(picture8);

      picture1.addEventListener('click', function() {redirectLink('pic25');} );
      picture2.addEventListener('click', function() {redirectLink('pic26');} );
      picture3.addEventListener('click', function() {redirectLink('pic27');} );
      picture4.addEventListener('click', function() {redirectLink('pic28');} );
      picture5.addEventListener('click', function() {redirectLink('pic29');} );
      picture6.addEventListener('click', function() {redirectLink('pic30');} );
      picture7.addEventListener('click', function() {redirectLink('pic31');} );
      picture8.addEventListener('click', function() {redirectLink('pic32');} );
    }
    else if(option === 'e') {
      var picture1 = createPictureElement('https://a0.muscache.com/im/pictures/miso/Hosting-31181249/original/a91922ea-f52e-40fc-b1b0-7d8140ac4c4b.jpeg?im_w=720', 'Plouhinec, France\nAdded 4 weeks ago\n19-26 Aug\n&#8377;8,373 night');
      var picture2 = createPictureElement('https://a0.muscache.com/im/pictures/miso/Hosting-828309889664977825/original/b152cefb-ac65-4abb-ad0b-409b5ebb11f8.png?im_w=720', 'Montague, California, US\nAdded 8 weeks ago\n23-28 Jul\n&#8377;11,993 night');
      var picture3 = createPictureElement('https://a0.muscache.com/im/pictures/miso/Hosting-925988799867410263/original/5498cd63-4f44-4f9d-a83e-849e7e45943e.jpeg?im_w=720', 'Suresnes, France\nAdded 3 weeks ago\n27 Aug - 1 Sep\n&#8377;9,943 night');
      var picture4 = createPictureElement('https://a0.muscache.com/im/pictures/prohost-api/Hosting-899153706475840198/original/29a6d4ff-a4ff-445f-8f08-c0a43de5e7cb.jpeg?im_w=720', 'Kecamatan Tampaksiring, Indonesia\nAdded 9 weeks ago\n24-29 Aug\n&#8377;24,443 night');
      var picture5 = createPictureElement('https://a0.muscache.com/im/pictures/miso/Hosting-929453146735076728/original/cd11c2a6-bcae-4ca1-9afb-340263c25fd6.jpeg?im_w=720', 'Cénac-et-Saint-Julien, France\nAdded 2 weeks ago\n22-28 Jul\n&#8377;16,811 night');
      var picture6 = createPictureElement('https://a0.muscache.com/im/pictures/miso/Hosting-894193491693493819/original/ff82579f-ccd1-4a0e-a22e-0b1448de2882.jpeg?im_w=720', 'Frederiksted, U.S. Virgin Islands\nAdded 9 weeks ago\n6-12 Aug\n&#8377;24,358 night');
      var picture7 = createPictureElement('https://a0.muscache.com/im/pictures/prohost-api/Hosting-907185737580698841/original/ff401831-f024-482e-b1f3-a15a6265e813.jpeg?im_w=720', 'Nugara, Australia\nAdded 7 weeks ago\n22-29 Jul\n&#8377;22,500 night');
      var picture8 = createPictureElement('https://a0.muscache.com/im/pictures/miso/Hosting-24859256/original/e35f9771-5624-42a2-9492-dcdd3fda3742.jpeg?im_w=720', 'Prattsville, New York, US\nAdded 8 weeks ago\n10-15 Aug\n&#8377;30,987 night');
  
      pictureContainer1.appendChild(picture1);
      pictureContainer1.appendChild(picture2);
      pictureContainer1.appendChild(picture3);
      pictureContainer1.appendChild(picture4);
      pictureContainer2.appendChild(picture5);
      pictureContainer2.appendChild(picture6);
      pictureContainer2.appendChild(picture7);
      pictureContainer2.appendChild(picture8);

      picture1.addEventListener('click', function() {redirectLink('pic33');} );
      picture2.addEventListener('click', function() {redirectLink('pic34');} );
      picture3.addEventListener('click', function() {redirectLink('pic35');} );
      picture4.addEventListener('click', function() {redirectLink('pic36');} );
      picture5.addEventListener('click', function() {redirectLink('pic37');} );
      picture6.addEventListener('click', function() {redirectLink('pic38');} );
      picture7.addEventListener('click', function() {redirectLink('pic39');} );
      picture8.addEventListener('click', function() {redirectLink('pic40');} );
    }
    else if(option === 'f') {
      var picture1 = createPictureElement('https://a0.muscache.com/im/pictures/miso/Hosting-605371928419351152/original/c8f48e8b-091d-47ea-85ac-b31bc2604bbb.jpeg?im_w=720', 'Pimplad Nasik, India\n1,432 kilometres away\n23-28 Jul\n&#8377;25,197 night');
      var picture2 = createPictureElement('https://a0.muscache.com/im/pictures/miso/Hosting-907692862221015063/original/6e6ec6c0-9d8f-41d1-b6ab-96b4e3028e7c.jpeg?im_w=720', 'Nashik, India\n1,420 kilometres away\n23-28 Jul\n&#8377;25,000 night');
      var picture3 = createPictureElement('https://a0.muscache.com/im/pictures/miso/Hosting-865617897476742315/original/c24a4c1e-33ce-4060-b8c8-ed10bde0b99c.jpeg?im_w=720', 'Gurugram, India\n532 kilometres away\n6-11 Aug\n&#8377;32,545 night');
      var picture4 = createPictureElement('https://a0.muscache.com/im/pictures/ead1fbe7-19a1-425a-9441-2164acf579c1.jpg?im_w=720', 'Reru, India\n163 kilometres away\n26-31 Jul\n&#8377;22,824 night');
      var picture5 = createPictureElement('https://a0.muscache.com/im/pictures/miso/Hosting-876463172459170480/original/60963c66-9a75-4424-bcd7-d5a02080a45d.jpeg?im_w=720', 'Jaipur, India\n634 kilometres away\n23-28 Apr\n&#8377;32,000 night');
      var picture6 = createPictureElement('https://a0.muscache.com/im/pictures/miso/Hosting-853544858977279780/original/3badf0e0-ddb0-4632-8a16-3fecf0b27c69.jpeg?im_w=720', 'Gothda Mohbtabad, India\n534 kilometres away\n22-28 Jul\n&#8377;19,467 night');
      var picture7 = createPictureElement('https://a0.muscache.com/im/pictures/9793eda6-ca12-4628-9eb8-ff14aa95e64a.jpg?im_w=720', 'Peepla Bharatsingh, India\n661 kilometres away\n22-27 Jul\n&#8377;38,000 night');
      var picture8 = createPictureElement('https://a0.muscache.com/im/pictures/6e455b26-2063-4c8b-896f-9dbd413cfc19.jpg?im_w=720', 'Udaipur, India\n923 kilometres away\n22-28 Jul\n&#8377;34,234 night');
  
      pictureContainer1.appendChild(picture1);
      pictureContainer1.appendChild(picture2);
      pictureContainer1.appendChild(picture3);
      pictureContainer1.appendChild(picture4);
      pictureContainer2.appendChild(picture5);
      pictureContainer2.appendChild(picture6);
      pictureContainer2.appendChild(picture7);
      pictureContainer2.appendChild(picture8);

      picture1.addEventListener('click', function() {redirectLink('pic41');} );
      picture2.addEventListener('click', function() {redirectLink('pic42');} );
      picture3.addEventListener('click', function() {redirectLink('pic43');} );
      picture4.addEventListener('click', function() {redirectLink('pic44');} );
      picture5.addEventListener('click', function() {redirectLink('pic45');} );
      picture6.addEventListener('click', function() {redirectLink('pic46');} );
      picture7.addEventListener('click', function() {redirectLink('pic47');} );
      picture8.addEventListener('click', function() {redirectLink('pic48');} );
    }
    else if(option === 'g') {
      var picture1 = createPictureElement('https://a0.muscache.com/im/pictures/miso/Hosting-26117817/original/9da40e3c-5846-4359-bb41-05c27b09a8f5.jpeg?im_w=720', 'Jibhi, India\n265 kilometers away\n1-6 Feb\n&#8377;5,797 night');
      var picture2 = createPictureElement('https://a0.muscache.com/im/pictures/9533b6e3-a37e-4346-98d8-baeb58fc7718.jpg?im_w=720', 'Jibhi, India\n265 kilometers away\n22-27 Sep\n&#8377;6,846 night');
      var picture3 = createPictureElement('https://a0.muscache.com/im/pictures/miso/Hosting-654001690497595692/original/94605df9-10d9-4082-ad2d-3b11ec519386.jpeg?im_w=720', 'Badowala, India\n414 kilometers away\n22-27 Jul\n&#8377;11,438 night');
      var picture4 = createPictureElement('https://a0.muscache.com/im/pictures/miso/Hosting-53408947/original/fa04d4b3-76b7-4b46-97fe-e1e2721f5e44.jpeg?im_w=720', 'Bir, India\n192 kilometers away\n1-6 Mar\n&#8377;10,841 night');
      var picture5 = createPictureElement('https://a0.muscache.com/im/pictures/miso/Hosting-51092268/original/69fc59c3-e018-4473-8f40-6b8bed9931d7.jpeg?im_w=720', 'Tandi, India\n265 kilometers away\n22-27 Jul\n&#8377;1,706 night');
      var picture6 = createPictureElement('https://a0.muscache.com/im/pictures/miso/Hosting-15791197/original/b4d02674-cf7a-4f7e-bb99-31027d8c13ae.jpeg?im_w=720', 'Shimla, India\n294 kilometers away\n30 Jul - 4 Aug\n&#8377;43,890 night');
      var picture7 = createPictureElement('https://a0.muscache.com/im/pictures/miso/Hosting-689564906939057902/original/186fc2ea-575f-40a5-bc26-1954c9b62ca0.jpeg?im_w=720', 'Gurugram, India\n532 kilometers away\n23-28 Jul\n&#8377;22,824 night');
      var picture8 = createPictureElement('https://a0.muscache.com/im/pictures/15facfdd-6e78-4767-b519-fa9999f5d3f8.jpg?im_w=720', 'Dharamshala, India\n153 kilometers away\n22-28 Jul\n&#8377;17,096 night');
  
      pictureContainer1.appendChild(picture1);
      pictureContainer1.appendChild(picture2);
      pictureContainer1.appendChild(picture3);
      pictureContainer1.appendChild(picture4);
      pictureContainer2.appendChild(picture5);
      pictureContainer2.appendChild(picture6);
      pictureContainer2.appendChild(picture7);
      pictureContainer2.appendChild(picture8);

      picture1.addEventListener('click', function() {redirectLink('pic49');} );
      picture2.addEventListener('click', function() {redirectLink('pic50');} );
      picture3.addEventListener('click', function() {redirectLink('pic51');} );
      picture4.addEventListener('click', function() {redirectLink('pic52');} );
      picture5.addEventListener('click', function() {redirectLink('pic53');} );
      picture6.addEventListener('click', function() {redirectLink('pic54');} );
      picture7.addEventListener('click', function() {redirectLink('pic55');} );
      picture8.addEventListener('click', function() {redirectLink('pic56');} );
    }
    else if(option === 'h') {
      var picture1 = createPictureElement('https://a0.muscache.com/im/pictures/miso/Hosting-662160574664383899/original/11028264-9f29-428c-b27e-3a909ed69c90.jpeg?im_w=720', 'Kullu, India\nMountain and garden views\n22-27 Jul\n&#8377;37,340 night');
      var picture2 = createPictureElement('https://a0.muscache.com/im/pictures/2edbcf7f-22cf-47de-99a5-7b69dfe35760.jpg?im_w=720', 'Manali, India\nMountain views\n22-29 Jul\n&#8377;12,325 night');
      var picture3 = createPictureElement('https://a0.muscache.com/im/pictures/miso/Hosting-559743307483621030/original/cc797423-cc69-4a2c-8ceb-b29251ac620f.jpeg?im_w=720', 'Dharamshala, India\nMountain views\n21-26 Jul\n&#8377;1,255 night');
      var picture4 = createPictureElement('https://a0.muscache.com/im/pictures/miso/Hosting-48623413/original/4576e207-e7f6-4127-9e87-f60291212d33.jpeg?im_w=720', 'Rakkar, India\nMountain and valley views\n25-30 Jul\n&#8377;9,129 night');
      var picture5 = createPictureElement('https://a0.muscache.com/im/pictures/9f8d7b54-3200-41cc-8db7-e7766bdc5c7c.jpg?im_w=720', 'Manali, India\nMountain and river views\n21-26 Jul\n&#8377;4,565 night');
      var picture6 = createPictureElement('https://a0.muscache.com/im/pictures/a3753024-471f-4388-bda1-fb737d50ce6f.jpg?im_w=720', 'Jobrang, India\nValley views\n21-26 Jul\n&#8377;2,379 night');
      var picture7 = createPictureElement('https://a0.muscache.com/im/pictures/miso/Hosting-590900968246371040/original/6ad936cd-6b1d-4f1a-80f1-b4b536a13440.jpeg?im_w=720', 'Kangra, India\nMountain and river views\n22-29 Jul\n&#8377;2,259 night');
      var picture8 = createPictureElement('https://a0.muscache.com/im/pictures/59b5b820-959f-44d4-aae4-396631d727f4.jpg?im_w=720', 'McLeod Ganj, India\nMountain views\n22-27 Jul\n&#8377;1,750 night');
  
      pictureContainer1.appendChild(picture1);
      pictureContainer1.appendChild(picture2);
      pictureContainer1.appendChild(picture3);
      pictureContainer1.appendChild(picture4);
      pictureContainer2.appendChild(picture5);
      pictureContainer2.appendChild(picture6);
      pictureContainer2.appendChild(picture7);
      pictureContainer2.appendChild(picture8);

      picture1.addEventListener('click', function() {redirectLink('pic57');} );
      picture2.addEventListener('click', function() {redirectLink('pic58');} );
      picture3.addEventListener('click', function() {redirectLink('pic59');} );
      picture4.addEventListener('click', function() {redirectLink('pic60');} );
      picture5.addEventListener('click', function() {redirectLink('pic61');} );
      picture6.addEventListener('click', function() {redirectLink('pic62');} );
      picture7.addEventListener('click', function() {redirectLink('pic63');} );
      picture8.addEventListener('click', function() {redirectLink('pic64');} );
    }
    else if(option === 'i') {
      var picture1 = createPictureElement('https://a0.muscache.com/im/pictures/miso/Hosting-695266101459546026/original/242615ba-990f-4578-9a20-4faa7a0eaad3.jpeg?im_w=720', 'Harabhag, India\n201 kilometers away\n21-26 Jul\n&#8377;2,119 night');
      var picture2 = createPictureElement('https://a0.muscache.com/im/pictures/miso/Hosting-837315422629442025/original/dd6e35a7-eeaa-4144-8c66-b05936ba1c77.jpeg?im_w=720', 'Nagla Megha, India\n402 kilometers away\n23-28 Jul\n&#8377;15,909 night');
      var picture3 = createPictureElement('https://a0.muscache.com/im/pictures/e8df8abc-52f8-4877-8b1e-2a7658f28c54.jpg?im_w=720', 'Kasauli, India\n283 kilometers away\n1-6 Sep\n&#8377;6,276 night');
      var picture4 = createPictureElement('https://a0.muscache.com/im/pictures/miso/Hosting-49464278/original/3494e74d-0ca6-476f-a626-0ef6aef39f23.jpeg?im_w=720', 'Khalai, India\n192 kilometers away\n22-27 Jul\n&#8377;1,940 night');
      var picture5 = createPictureElement('https://a0.muscache.com/im/pictures/miso/Hosting-828699651659326416/original/b1725655-7a40-4c9c-9505-28c70d300dcc.jpeg?im_w=720', 'Dodhamb, India\n142 kilometers away\n23-28 Jul\n&#8377;15,411 night');
      var picture6 = createPictureElement('https://a0.muscache.com/im/pictures/miso/Hosting-883697523223642736/original/a7a7fdb9-cffb-4862-a05e-a4fc06537661.jpeg?im_w=720', 'Mandi, India\n237 kilometers away\n22-27 Jul\n&#8377;49,940 night');
      var picture7 = createPictureElement('https://a0.muscache.com/im/pictures/f6ef0200-9b01-4777-933a-7fc334583d75.jpg?im_w=720', 'Srinagar, India\n159 kilometers away\n22-28 Jul\n&#8377;3,412 night');
      var picture8 = createPictureElement('https://a0.muscache.com/im/pictures/df4b3285-8949-4432-bb73-15e832bd9939.jpg?im_w=720', 'Raison, Kullu Manali, India\n225 k');
  
      pictureContainer1.appendChild(picture1);
      pictureContainer1.appendChild(picture2);
      pictureContainer1.appendChild(picture3);
      pictureContainer1.appendChild(picture4);
      pictureContainer2.appendChild(picture5);
      pictureContainer2.appendChild(picture6);
      pictureContainer2.appendChild(picture7);
      pictureContainer2.appendChild(picture8);

      picture1.addEventListener('click', function() {redirectLink('pic65');} );
      picture2.addEventListener('click', function() {redirectLink('pic66');} );
      picture3.addEventListener('click', function() {redirectLink('pic67');} );
      picture4.addEventListener('click', function() {redirectLink('pic68');} );
      picture5.addEventListener('click', function() {redirectLink('pic69');} );
      picture6.addEventListener('click', function() {redirectLink('pic70');} );
      picture7.addEventListener('click', function() {redirectLink('pic71');} );
      picture8.addEventListener('click', function() {redirectLink('pic72');} );
    }
    else if(option === 'j') {
      var picture1 = createPictureElement('https://a0.muscache.com/im/pictures/60d4058e-98a8-4f30-ba8a-93b101a31c47.jpg?im_w=720', 'Pelkosenniemi, Finland\n4,897 kilometers away\n16-21 Dec\n&#8377;15,700 night');
      var picture2 = createPictureElement('https://a0.muscache.com/im/pictures/7a83743c-b733-482a-aa4a-aa28e3fa9469.jpg?im_w=720', 'Thung Samo, Thailand\n3,174 kilometers away\n22-27 Jul\n&#8377;45,606 night');
      var picture3 = createPictureElement('https://a0.muscache.com/im/pictures/b7c9264d-73c9-45c3-882e-6e9577d63d68.jpg?im_w=720', 'Drimnin, UK\n6,485 kilometers away\n15-20 Jan\n&#8377;20,527 night');
      var picture4 = createPictureElement('https://a0.muscache.com/im/pictures/miso/Hosting-601894455303485239/original/8081f63d-b342-4e82-8c29-5c173490422c.jpeg?im_w=720', 'Gumniska Mate, Poland\n4,889 kilometers away\n25-31 Aug\n&#8377;29,391 night');
      var picture5 = createPictureElement('https://a0.muscache.com/im/pictures/miso/Hosting-676044415326884478/original/e32429f8-56bd-4ba1-a98a-46efc64e3e69.jpeg?im_w=720', 'Rasnov Romacril, Romania\n4,418 kilometers away\n5-10 Sep\n&#8377;10,404 night');
      var picture6 = createPictureElement('https://a0.muscache.com/im/pictures/1587524e-f8f5-4c20-8507-c809dffda998.jpg?im_w=720', 'Mueang Chiang Mai District, Thailand\n2,854 kilometers away\n26-31 Jul\n&#8377;2,072 night');
      var picture7 = createPictureElement('https://a0.muscache.com/im/pictures/miso/Hosting-661201204231662812/original/6bb13f64-bf25-43fa-b042-16c8ccf1c6bd.jpeg?im_w=720', 'Murbad, India\n1,505 kilometers away\n30 Jul - 4 Aug\n&#8377;39,007 night');
      var picture8 = createPictureElement('https://a0.muscache.com/im/pictures/337660c5-939a-439b-976f-19219dbc80c7.jpg?im_w=720', 'Korithi, Greece\n4,880 kilometers away\n29 Aug - 4 Sep\n&#8377;36,110 night');
  
      pictureContainer1.appendChild(picture1);
      pictureContainer1.appendChild(picture2);
      pictureContainer1.appendChild(picture3);
      pictureContainer1.appendChild(picture4);
      pictureContainer2.appendChild(picture5);
      pictureContainer2.appendChild(picture6);
      pictureContainer2.appendChild(picture7);
      pictureContainer2.appendChild(picture8);

      picture1.addEventListener('click', function() {redirectLink('pic73');} );
      picture2.addEventListener('click', function() {redirectLink('pic74');} );
      picture3.addEventListener('click', function() {redirectLink('pic75');} );
      picture4.addEventListener('click', function() {redirectLink('pic76');} );
      picture5.addEventListener('click', function() {redirectLink('pic77');} );
      picture6.addEventListener('click', function() {redirectLink('pic78');} );
      picture7.addEventListener('click', function() {redirectLink('pic79');} );
      picture8.addEventListener('click', function() {redirectLink('pic80');} );
    }
    else if(option === 'k') {
      var picture1 = createPictureElement('https://a0.muscache.com/im/pictures/52e03dbc-c135-4c0d-975c-4781823a3b0d.jpg?im_w=720', 'Dehradun,India\n400 kilometers away\n22-29 Jul\n&#8377;18,259 night');
      var picture2 = createPictureElement('https://a0.muscache.com/im/pictures/5813338/7c1c4f7c_original.jpg?im_w=720', 'Mae Taeng, Thailand\n2,829 kilometers away\n1-6 May\n&#8377;5,790 night');
      var picture3 = createPictureElement('https://a0.muscache.com/im/pictures/miso/Hosting-31049657/original/37d0a827-358b-4551-859b-e6a64c8e7f1d.jpeg?im_w=720', 'Igatpuri, India\n1,455 kilometers away\n10-15 Sep\n&#8377;35,833 night');
      var picture4 = createPictureElement('https://a0.muscache.com/im/pictures/miso/Hosting-845512270964876393/original/368586c0-b6e9-43b4-aa8c-b5d49923094e.jpeg?im_w=720', 'Bhimtal,India\n582 kilometers away\n22-29 Jul\n&#8377;4,622 night');
      var picture5 = createPictureElement('https://a0.muscache.com/im/pictures/miso/Hosting-52329661/original/800aa635-16b7-4ceb-adbc-3d2445edd9dd.jpeg?im_w=720', 'Siolim, India\n1,905 kilometers away\n21-27 Aug\n&#8377;14,065 night');
      var picture6 = createPictureElement('https://a0.muscache.com/im/pictures/miso/Hosting-888269360780625633/original/d5e319dc-272e-4bb1-b855-50dabf280379.jpeg?im_w=720', 'Jibhi, India\n264 kilometers away\n21-27 Jul\n&#8377;2,910 night');
      var picture7 = createPictureElement('https://a0.muscache.com/im/pictures/a2f93fb8-9857-46e4-8c55-2b61d78e1a78.jpg?im_w=720', 'Chiang Mai, Thailand\n2,857 kilometers away\n18-23 Aug\n&#8377;5,216 night');
      var picture8 = createPictureElement('https://a0.muscache.com/im/pictures/miso/Hosting-587439221666468647/original/c12474fc-e7bf-4875-b4d3-84068b64dd84.jpeg?im_w=720', 'Mahagaon, India\n1,566 kilometers away\n20-25 Sep\n&#8377;25,600 night');
  
      pictureContainer1.appendChild(picture1);
      pictureContainer1.appendChild(picture2);
      pictureContainer1.appendChild(picture3);
      pictureContainer1.appendChild(picture4);
      pictureContainer2.appendChild(picture5);
      pictureContainer2.appendChild(picture6);
      pictureContainer2.appendChild(picture7);
      pictureContainer2.appendChild(picture8);

      picture1.addEventListener('click', function() {redirectLink('pic81');} );
      picture2.addEventListener('click', function() {redirectLink('pic82');} );
      picture3.addEventListener('click', function() {redirectLink('pic83');} );
      picture4.addEventListener('click', function() {redirectLink('pic84');} );
      picture5.addEventListener('click', function() {redirectLink('pic85');} );
      picture6.addEventListener('click', function() {redirectLink('pic86');} );
      picture7.addEventListener('click', function() {redirectLink('pic87');} );
      picture8.addEventListener('click', function() {redirectLink('pic88');} );
    }
}
  
function createPictureElement(url, caption) {
    var picture = document.createElement('img');
    picture.src = url;
    
    var captionElement = document.createElement('div');
    captionElement.innerHTML = formatCaption(caption); // Call the formatCaption function
  
    var container = document.createElement('div');
    container.setAttribute('class', 'picture-container-div-elements');
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
  
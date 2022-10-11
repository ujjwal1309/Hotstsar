// function carousel(){
//     let image = ['https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6451/1376451-h-66d561b15e4e', 'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4248/1364248-h-04994afb88d4', 'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3268/1173268-h-4407e8891a7e']

//     let div=document.getElementById('carousel');
//     let img=document.createElement('img');
//     let i=1;
//     img.src=image[0];
//     div.append(img);

//     setInterval(function(){
//         img.src=image[i];
//         div.append(img);
//         i++;
//         if(i==image.length)
//         {
//             i=0;
//         }
//     },3000)
// }

// carousel()

const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 3000,
    dispalyOnInteraction: false,
  },
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function create(i, r) {
  this.image = i;
  this.rating = r;
}

function append() {
  let data = [];
  let d1 = new create(
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8315/1358315-v-460de76e954a",
    8.2
  );

  let d2 = new create(
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/8561/1338561-v-e70f004341c2",
    8.0
  );

  let d3= new create('https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8938/1318938-v-c6774b84e0ce',7.4)

  let d4= new create('https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5858/1345858-v-629a422bee2a',7.2)

  let d5= new create('https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7151/1317151-v-3325efe236e4',8.1)

  let d6=new create('https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5917/1215917-v-ecd0190fad0d', 7.6)

  data.push(d1,d2,d3,d4,d5,d6);

  data.forEach(function (el) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.image;
    let p = document.createElement("h3");
    p.innerText = `IMDB: ${el.rating}`;

    div.append(img, p);
    document.getElementById("container").append(div);
  });
}

append();

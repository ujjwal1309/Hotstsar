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

  let data = [];
  let d1 = new create(
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8315/1358315-v-460de76e954a",
    8.2
  );

  let d2 = new create(
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/8561/1338561-v-e70f004341c2",
    8.0
  );

  let d3 = new create(
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8938/1318938-v-c6774b84e0ce",
    7.4
  );

  let d4 = new create(
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5858/1345858-v-629a422bee2a",
    7.2
  );

  let d5 = new create(
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7151/1317151-v-3325efe236e4",
    8.1
  );

  let d6 = new create(
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5917/1215917-v-ecd0190fad0d",
    7.6
  );

  let d7 = new create(
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5433/1085433-v-47d02b0c676b",
    7.8
  );

  let d8 = new create(
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9948/1279948-v-cc9471178e40",
    7.0
  );

  let d9 = new create(
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2249/1282249-v-901a544faba4",
    6.5
  );

  let d10 = new create(
    "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/69/1240069-v-8f3eaedecbc6",
    8.2
  );

  data.push(d1, d2, d3, d4, d5, d6, d7, d8, d9, d10);

  let select=document.getElementById('select');
  select.addEventListener('change',rankByPopularity);

  function rankByPopularity(){

    console.log(select.value)

  if(select.value=='asc')
  {
    data.sort((a,b) => a.rating-b.rating);
    displayTable(data);
  }
  else if(select.value=='dsc')
  {
    data.sort((a,b)=>b.rating-a.rating);
    displayTable(data);
  }
  else if(select.value=='')
  {
    window.location.reload();
  }

}


function displayTable(res) {

  document.querySelector('#container').innerHTML="";

  let loader=document.getElementById('loader');
  loader.style.display='none';

  res.forEach(function (el) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.image;
    let p = document.createElement("h3");
    p.innerText = `IMDB: ${el.rating}`;

    div.append(img, p);
    document.getElementById("container").append(div);
  });
}


let getData=new Promise(function(resolve,reject){
  setTimeout(function(){
    let DS=data;

    if(DS!=null)
    {
      resolve(data)
    }
    else{
      reject('ERR: Server Could Not Get Movies Data');
    }
  },1000)
})

getData.then(function(res){
  displayTable(res)
})
.catch(function(res){
  console.log(res)
})

// function searchMovies() {
//   let movie_name = document.getElementById("search_movies").value;

//   let response = fetch(
//     `http://www.omdbapi.com/?apikey=e21bdea5&s=${movie_name}`
//   );

//   response
//     .then(function (res) {
//       let data=res.json();
//       data.then(function(res){
//         console.log(res)
//       })
//       .catch(function(err){
//         console.log(err)
//       })
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }
function searchMovies() {
  let movieName = document.getElementById("search_movies").value;
  localStorage.setItem('movie_name',movieName);
}


Search()

async function Search(){
  let movie_name=localStorage.getItem('movie_name');
  document.getElementById('loader').style.display='flex';

  try {
    let response = await fetch(
      `http://www.omdbapi.com/?apikey=e21bdea5&s=${movie_name}`
    );

    let data = await response.json();

    let actual_data = data.Search;
    console.log(actual_data)
    appendImage(actual_data);
    appendMovies(actual_data);
  } catch (err) {
    console.log(err);
  }

}

function appendMovies(data){

  document.getElementById('loader').style.display='none';

  data.forEach(function(el){
    let div=document.createElement('div')

    let img=document.createElement('img');
    img.src=el.Poster

    let h3=document.createElement('h3');
    h3.innerText=el.Title;

    div.append(img,h3)
    
    document.getElementById('container-2').append(div);
  })
}

function appendImage(data){

  for(let i=0; i<3; i++)
  {
    let d1=document.createElement('div');
    d1.setAttribute('class','swiper-slide1');

    let d2=document.createElement('div');
    let d3=document.createElement('div');
    let img=document.createElement('img');
    img.src=data[i].Poster;
    let h2=document.createElement('h2');
    h2.innerText=data[i].Title;
    let p=document.createElement('p');
    p.innerText=`${data[i].Year} . ${data[i].Type}`

    d2.append(h2,p);
    d3.append(img);
    d1.append(d2,d3);
    let arr=document.getElementsByClassName('swiper-slide');
    arr[i].append(d1);
  }

}

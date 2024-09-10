import data from "./news-rsm-20240910-data.js";

window.onload=(event)=>{
    
    document.title=data.header;
    var date=document.getElementById('date');
    date.innerHTML= data.date;
    
    
    var h1=document.getElementById('h1');
    h1.innerHTML= data.header;
    
    
    var img=document.getElementById('img');
    img.src= data.img;
    
    var cap=document.getElementById('caption');
    cap.innerHTML= data.caption;
    
    
       var article=document.getElementById('article');
    article.innerHTML= data.article;
    
}
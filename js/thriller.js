

document.getElementById('showmore').addEventListener('click' ,loadUsers);

function loadUsers(){
    var xhr = new XMLHttpRequest();
    
    xhr.open('GET','https://www.googleapis.com/books/v1/volumes?q=thriller',true);
    
    
    xhr.onload=function(){
        if(this.status==200){
       var users=JSON.parse(this.responseText);
       console.log(users);
       
       var output='<div class="user00"> ' +'<div class="user"> ' +'  <p>' + '<b>'+users.items[0].volumeInfo.title+ '</b>' +  '</p>  ' + '<img src=" ' +  users.items[0].volumeInfo.imageLinks.smallThumbnail +'"height="400px" width="200px" >'+'</div>'+'<div class="para">'+'<p>'+'AUTHOR :' + users.items[0].volumeInfo.authors +  '</p>  ' + 'DESCRIPTION :' +'<p >' + users.items[0].volumeInfo.description +  '</p>  '+'</div>'+'</div>'
       document.getElementById('users0').innerHTML=output;
       
       var output='<div class="user00"> ' +'<div class="user"> ' +'  <p>' + '<b>'+ users.items[1].volumeInfo.title + '</b>' +  '</p>  ' + '<img src=" ' +  users.items[1].volumeInfo.imageLinks.smallThumbnail +'" height="400px" width="200px" >'+'</div>'+'<div class="para">'+'<p>'+'AUTHOR :' + users.items[1].volumeInfo.authors +  '</p>  ' +  'DESCRIPTION :' +'<p>' + users.items[1].volumeInfo.description +  '</p>  '+'</div>'+'</div>'
       document.getElementById('users1').innerHTML=output;
       
       var output='<div class="user00"> ' +'<div class="user"> ' +'  <p>' + '<b>'+ users.items[2].volumeInfo.title +   '</b>' +'</p>  ' + '<img src=" ' +  users.items[2].volumeInfo.imageLinks.smallThumbnail +'" height="400px" width="200px" >'+'</div>'+'<div class="para">'+'<p>'+'AUTHOR :' + users.items[2].volumeInfo.authors +  '</p>  ' +  'DESCRIPTION :' +'<p>' + users.items[2].volumeInfo.description +  '</p>  '+'</div>'+'</div>'
       document.getElementById('users2').innerHTML=output;
       
       var output='<div class="user00"> ' +'<div class="user"> ' +'  <p>' + '<b>'+ users.items[7].volumeInfo.title + '</b>' +  '</p>  ' + '<img src=" ' +  users.items[3].volumeInfo.imageLinks.smallThumbnail +'" height="400px" width="200px" >'+'</div>'+'<div class="para">'+'<p>'+'AUTHOR :' + users.items[3].volumeInfo.authors +  '</p>  ' + 'DESCRIPTION :' + '<p>' + users.items[3].volumeInfo.description +  '</p>  '+'</div>'+'</div>'
       document.getElementById('users3').innerHTML=output;
       
       var output='<div class="user00"> ' +'<div class="user"> ' +'  <p>' + '<b>'+ users.items[3].volumeInfo.title +  '</b>' + '</p>  ' + '<img src=" ' +  users.items[4].volumeInfo.imageLinks.smallThumbnail +'" height="400px" width="200px" >'+'</div>'+'<div class="para">'+'<p>'+'AUTHOR :' + users.items[4].volumeInfo.authors +  '</p>  ' + 'DESCRIPTION :' + '<p>' + users.items[4].volumeInfo.description +  '</p>  '+'</div>'+'</div>'
       document.getElementById('users4').innerHTML=output;
       
       var output='<div class="user00"> ' +'<div class="user"> ' +'  <p>' + '<b>'+ users.items[5].volumeInfo.title +   '</b>' +'</p>  ' + '<img src=" ' +  users.items[5].volumeInfo.imageLinks.smallThumbnail +'" height="400px" width="200px" >'+'</div>'+'<div class="para">'+'<p>' +'AUTHOR :'+ users.items[5].volumeInfo.authors +  '</p>  ' +  'DESCRIPTION :' +'<p>' + users.items[5].volumeInfo.description +  '</p>  '+'</div>'+'</div>'
       document.getElementById('users5').innerHTML=output;
         
/*
var output='';

for(var i in users){
 
    output += '<div class="user"> ' + '<img src=" ' +  users.items[i].volumeInfo.imageLinks.smallThumbnail +'" height="100px" width="100px" >'
'</div>';
}

document.getElementById('users').innerHTML = output;
*/
}}
    xhr.send();
}
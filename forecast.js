navigator.geolocation.getCurrentPosition(show);
document.title = "Meteor";


function changeFavicon(src) {
 var link = document.createElement('link'),
     oldLink = document.getElementById('dynamic-favicon');
 link.id = 'dynamic-favicon';
 link.rel = 'shortcut icon';
 link.href = 'https://meteor.today/fav/favicon-32x32.png';
 if (oldLink) {
  document.head.removeChild(oldLink);
 }
 document.head.appendChild(link);
}

changeFavicon();

function show(position) {
  console.log(position)
  

}

$('.ForumListPage_ad_2AWkO:nth-child(2)').html('<div class="fb-page" data-href="https://www.facebook.com/meteorapp/" data-tabs="timeline" data-height="558" data-width="500" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><div class="fb-xfbml-parse-ignore"><blockquote cite="https://www.facebook.com/meteorapp/"></blockquote></div></div>')




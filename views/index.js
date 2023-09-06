window.addEventListener("load",() =>{
  let main = document.getElementsByTagName('section')[0]

  const initialPageComponentHtml = `
    <div class="grid-box" >
      <div class="grid-body">
        <p class="title">Ondeck is your remote <span>conference calling tool</span></p>
        <p class="description">Ondeck is a service that allows you to create beautiful, online,
          and encrypted video calls for you and your remote team.
        </p>
        <button class="btn btn-body">Try for free</button>
        <div class="icon-description">
          <p class="description">5.0 Rating on reviews from: </p>
          <img src="./Assets/img/Capterra_Logo.svg" class="icon" alt="">
          <img src="./Assets/img/AlternativeTo_Logo.svg" class="icon" alt="">
        </div>
      </div>
      <div class="grid-video">
        <img src="./Assets/img/Hero Image.png" class="img-video" alt="">
      </div> 
            
      </div>
      <div class="grid-footer">
        <p>Trusted by 3+ million people at companies like</p>
        <div class="grid-bland">
          <img src="./Assets/img/Netflix_Logo.svg" alt="">
          <img src="./Assets/img/Shopify_Logo.svg" alt="">
          <img src="./Assets/img/Spotify_Icon.svg" alt="">
          <img src="./Assets/img/Walmart_Logo.svg" alt="">
        </div>
      </div>
    </div>
  `
  main.innerHTML += initialPageComponentHtml;
})

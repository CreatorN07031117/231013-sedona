  <script type="text/javascript">
    var link = document.querySelector(".search-hotel-btn");
    var hotelform = document.querySelector(".search-hotel-form");
    var searchbtn = document.querySelector(".search-btn");
    
    link.addEventListener("click", function(event) {event.preventDefault();
    hotelform.classList.toggle("search-hotel-form-hidden")});
    link.addEventListener("click", function(event) {
    hotelform.classList.toggle("hotelform-animation");
    searchbtn.classList.toggle("search-btn-animation")})
  </script>
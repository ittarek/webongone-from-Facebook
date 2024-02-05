
 function injectHTML(url, targetElement) {
   $.ajax({
     url: url,
     dataType: "html",
     success: function (data) {
       $(targetElement).html(data);
     },
     error: function (xhr, status, error) {
       console.error("Error loading HTML: " + error);
     },
   });
 }

 // Inject HTML into respective elements
 injectHTML("/header/header.html", $(".header"));
 injectHTML("/header/nav.html", $(".nav"));
 injectHTML("/slider/mainSlider.html", $(".mainSlider"));
 injectHTML("/slider/sideSlider1.html", $(".sideSlider1"));
 injectHTML("/slider/sideSlider2.html", $(".sideSlider2"));







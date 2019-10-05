$(document).ready(function () {
    var numOfWindows = 10;

    var arrayDiv = new Array();

    var content = ["Blog / Article", "Newsletter / E-mailer", "Whitepaper", "e-Book", "Report / Guide", "Product Description", "Website Content", "VideoScript", "Company Profile / Brochure", "Press Release"];

    var imgpath = ["assets/tile-logo.jpg", "assets/peacock-logo.jpg", "assets/tile-logo.jpg", "assets/peacock-logo.jpg", "assets/tile-logo.jpg", "assets/peacock-logo.jpg", "assets/tile-logo.jpg", "assets/peacock-logo.jpg", "assets/tile-logo.jpg", "assets/peacock-logo.jpg"];

    var price = new Array(500, 1000, 2000, 1000, 1000, 500, 1000, 1000, 2000, 2000);

    for (var i = 0; i < numOfWindows; i++) {
        arrayDiv[i] = document.createElement('div');
        arrayDiv[i].id = 'block' + i;
        arrayDiv[i].className = 'block' + i;
                
        var elem = document.createElement("img");
        elem.setAttribute("src", imgpath[i]);
        elem.setAttribute("alt", "Logo tile");
        $(arrayDiv[i]).append(elem);
        
        $(".tile-section").append(arrayDiv[i]);

        var title = document.createElement('p');
        title.className="tile-title"
        title.innerHTML = content[i];
        $(arrayDiv[i]).append(title);

        var pricepath = document.createElement("span");
        pricepath.innerHTML = "from &#8377;" + price[i];
        $(arrayDiv[i]).append(pricepath);


        var para = document.createElement("p");
        para.innerHTML = "Typically 450-400 words,an e-book is perfect for your target audience ranging from prospective customers to users"
        $(arrayDiv[i]).append(para);

        var butt = document.createElement("button");
        butt.innerHTML = "Order";
        $(arrayDiv[i]).append(butt);

    }
    
    $('.tile-section div button').click(function () {
        window.location = 'http://www.whitepanda.in/products_and_pricing/';
    });
    
});
window.addEventListener('load',cargarHtml);

function cargarHtml(){
    let body = document.body;

    let div1 = crearDiv();
    div1.classList.add("grid__column_space1of4-3Auw")
    div1.classList.add("grid__column-2zuc")
    
    let div2 = crearDiv();
    div2.classList.add("grid__card-1AMl")
    div2.classList.add("grid__is_not_ad-3CXE")

    let article1 = crearArticle();
    article1.classList.add("cards__postcard-37d3")
    article1.classList.add("cards__postcardLandscape-3RIF")
    article1.classList.add("cards__font_landscape_single_text_below_4_col-7iX7")
    article1.classList.add("cards__columns-4-YOiO")
    article1.classList.add("background_color_zeta")
    article1.classList.add("cards__no_has_section-3wNM")

    let div3 = crearDiv();
    let img1 = crearImg();
    setAttributes(img1,{"title":"" , "class":"cards__snap_image-aOud" , "loading":"lazy", "src":"https://baul.mediaset.es/dist/assets/guides/img_guide.png?w=1024", 
    "srcset":"https://baul.mediaset.es/dist/assets/guides/img_guide.png?w=1024 1024w, https://baul.mediaset.es/dist/assets/guides/img_guide.png?w=800   800w,https://baul.mediaset.es/dist/assets/guides/img_guide.png?w=768   768w,https://baul.mediaset.es/dist/assets/guides/img_guide.png?w=640   640w,https://baul.mediaset.es/dist/assets/guides/img_guide.png?w=600   600w,https://baul.mediaset.es/dist/assets/guides/img_guide.png?w=480   480w,https://baul.mediaset.es/dist/assets/guides/img_guide.png?w=360   360w,https://baul.mediaset.es/dist/assets/guides/img_guide.png?w=320   320w", "sizes":"(min-width: 960px) 502px, (min-width: 768px) 50vw, 100vw", "alt":"", "pinger-seen":"true"})
    
    
    let div4 = crearDiv();
    div4.classList.add("cards__postcard__content-1w21")

    let figure1 = crearFigure();
    figure1.classList.add("cards__postcard__cnt_media-1R9F")

    let div5 = crearDiv();
    div5.classList.add("cards__cnt_coin-2H_i")


    let div6 = crearDiv();
    let span1 = crearSpan();
    span1.classList.add("cards__postcard__channel-1-fM")
    span1.classList.add("coin_undefined")
    let div7Vacio = crearDiv();

    let enlace1 = crearEnlace();
    setAttributes(enlace1,{"href":"https://www.telecinco.es/la-isla-de-las-tentaciones/galla-desvela-punto-relacion-miguel-hoyos_18_3268924939.html", "class":"cards__link-1oHn", "target":"_self"})

    let img2 = crearImg();
    setAttributes(img2,{"title":"", "class":"cards__image-24d0", "loading":"lazy", "src":"https://album.mediaset.es/eimg/10000/2022/01/18/clipping_a8lSPY_2e98.jpg?w=1024", "srcset":"https://album.mediaset.es/eimg/10000/2022/01/18/clipping_a8lSPY_2e98.jpg?w=1024 1024w,https://album.mediaset.es/eimg/10000/2022/01/18/clipping_a8lSPY_2e98.jpg?w=800   800w,https://album.mediaset.es/eimg/10000/2022/01/18/clipping_a8lSPY_2e98.jpg?w=768   768w,https://album.mediaset.es/eimg/10000/2022/01/18/clipping_a8lSPY_2e98.jpg?w=640   640w,https://album.mediaset.es/eimg/10000/2022/01/18/clipping_a8lSPY_2e98.jpg?w=600   600w,https://album.mediaset.es/eimg/10000/2022/01/18/clipping_a8lSPY_2e98.jpg?w=480   480w,https://album.mediaset.es/eimg/10000/2022/01/18/clipping_a8lSPY_2e98.jpg?w=360   360w,https://album.mediaset.es/eimg/10000/2022/01/18/clipping_a8lSPY_2e98.jpg?w=320   320w", "sizes":"(min-width: 960px) 245px, (min-width: 768px) 50vw, 100vw", "alt":"Gal·la desvela en qué punto se encuentra con Miguel de Hoyos", "pinger-seen":"true"})

    let div8 = crearDiv();
    div8.classList.add("cards__postcard__cnt_info-21bV")
    
    let div9 = crearDiv();
    div9.classList.add("sponsor__content-3-Ul")
    div9.classList.add("sponsor__typeH-3Hjq")
    div9.classList.add("sponsor__imgBand-2XTv")

    let div10 = crearDiv();
    div10.setAttribute("data-agth","cardTitle")
    let enlace2 = crearEnlace();
    setAttributes(enlace2,{"class":"color_eta", "href":"https://www.telecinco.es/la-isla-de-las-tentaciones/galla-desvela-punto-relacion-miguel-hoyos_18_3268924939.html", "target":"_self"})
    let h3 = document.createElement("h3"); 
    h3.classList.add("site_font")
    h3.classList.add("cards__postcard__paragraph-2EVg")
    h3.classList.add("color_eta")
    h3.classList.add("color_eta") 
    let comentario = document.createComment("")
   
    h3.innerHTML = "<!---->Gal·la desvela en qué punto se encuentra su relación con Miguel tras su rechazo en 'La isla de las tentaciones' <!-- -->"
    
    body.appendChild(div1);
    div1.appendChild(div2);
    div2.appendChild(article1);
    article1.appendChild(div3);
    div3.appendChild(img1);
    article1.appendChild(div4);
    div4.appendChild(figure1);
    figure1.appendChild(div5);
    div5.appendChild(div6);
    div6.appendChild(span1);
    figure1.appendChild(div7Vacio);
    figure1.appendChild(enlace1);
    enlace1.appendChild(img2);
    div4.appendChild(div8);
    div8.appendChild(div9);
    div8.appendChild(div10);
    div10.appendChild(enlace2);
   
    enlace2.appendChild(h3);
    
}

function crearDiv(){
    return document.createElement('div');
}

function crearArticle(){
    return document.createElement('article');
}

function crearImg(){
    return document.createElement('img');
}

function crearFigure(){
    return document.createElement('figure');
}

function crearSpan(){
    return document.createElement('span');
}
function crearEnlace(){
    return document.createElement('a');
}

function setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }
  
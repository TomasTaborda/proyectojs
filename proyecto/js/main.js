$(document).ready(function(){
  // slider  
  if(window.location.href.indexOf('index') > -1){
    $('.bxslider').bxSlider({
        auto: true,
        autoControls: false,
        stopAutoOnClick: true,
        pager: true,
        slideWidth: 1250
      });
    }

  //post
  if(window.location.href.indexOf('index') > -1){
    var posts=[
      {
      title:"Prueba de titulo 1",
      date: "Publicado el día: " + moment().date()+ " de " + moment().format("MMMM") + " del " +moment().format("YYYY") ,
      content: "In consectetur id nulla ac blandit. Aliquam commodo ex at est sollicitudin, et faucibus elit commodo. Cras egestas sapien at lacus pharetra, vitae commodo ex pulvinar. Donec aliquam faucibus arcu, ac viverra nulla tristique quis. Pellentesque vel purus eget orci sodales facilisis. Fusce ullamcorper pretium ligula a sagittis. Curabitur risus purus, ullamcorper a feugiat a, rutrum in orci. In vitae diam nunc.",

      },
      {
      title:"Prueba de titulo 2",
      date: "Publicado el día: " + moment().date()+ " de " + moment().format("MMMM") + " del " +moment().format("YYYY") ,
      content: "In consectetur id nulla ac blandit. Aliquam commodo ex at est sollicitudin, et faucibus elit commodo. Cras egestas sapien at lacus pharetra, vitae commodo ex pulvinar. Donec aliquam faucibus arcu, ac viverra nulla tristique quis. Pellentesque vel purus eget orci sodales facilisis. Fusce ullamcorper pretium ligula a sagittis. Curabitur risus purus, ullamcorper a feugiat a, rutrum in orci. In vitae diam nunc.",
      
      },
      {
        title:"Prueba de titulo 3",
        date: "Publicado el día: " + moment().date()+ " de " + moment().format("MMMM") + " del " +moment().format("YYYY") ,
        content: "In consectetur id nulla ac blandit. Aliquam commodo ex at est sollicitudin, et faucibus elit commodo. Cras egestas sapien at lacus pharetra, vitae commodo ex pulvinar. Donec aliquam faucibus arcu, ac viverra nulla tristique quis. Pellentesque vel purus eget orci sodales facilisis. Fusce ullamcorper pretium ligula a sagittis. Curabitur risus purus, ullamcorper a feugiat a, rutrum in orci. In vitae diam nunc.",
      
      },
      {
        title:"Prueba de titulo 4",
        date: "Publicado el día: " + moment().date()+ " de " + moment().format("MMMM") + " del " +moment().format("YYYY") ,
        content: "In consectetur id nulla ac blandit. Aliquam commodo ex at est sollicitudin, et faucibus elit commodo. Cras egestas sapien at lacus pharetra, vitae commodo ex pulvinar. Donec aliquam faucibus arcu, ac viverra nulla tristique quis. Pellentesque vel purus eget orci sodales facilisis. Fusce ullamcorper pretium ligula a sagittis. Curabitur risus purus, ullamcorper a feugiat a, rutrum in orci. In vitae diam nunc.",
      
      },
      {
      title:"Prueba de titulo 5",
      date: "Publicado el día: " + moment().date()+ " de " + moment().format("MMMM") + " del " +moment().format("YYYY") ,
      content: "In consectetur id nulla ac blandit. Aliquam commodo ex at est sollicitudin, et faucibus elit commodo. Cras egestas sapien at lacus pharetra, vitae commodo ex pulvinar. Donec aliquam faucibus arcu, ac viverra nulla tristique quis. Pellentesque vel purus eget orci sodales facilisis. Fusce ullamcorper pretium ligula a sagittis. Curabitur risus purus, ullamcorper a feugiat a, rutrum in orci. In vitae diam nunc.",
      
      },
  
      ]
  

    posts.forEach((item, index)=>{
      var post = `
        <article class="post">
            <h2>${item.title}</h2>
            <span class="date">${item.date}</span>
            <p>
              ${item.content}
            </p>
            <a href="#" class="boton">Leer mas</a>
        </article>
      `

      $("#posts").append(post)
    })
  }
  // selector de temas
  var theme = $("#theme")
  $("#to-green").click(function(){
    theme.attr("href","css/green.css")
  })
  $("#to-red").click(function(){
    theme.attr("href","css/red.css")
  })
  $("#to-blue").click(function(){
    theme.attr("href","css/blue.css")
  })

  // scroll inicio

  $(".subir").click(function(){
    e.preventDefault()

    $("html","body").animate({
      scrollTop:0
    },500);
    return false;
  })

  //login

  $("#login form").submit(function(){
    var form_name=$("#form_name").val()
    localStorage.setItem("form_name", form_name)
    
  })

  var form_name=localStorage.getItem("form_name")
  
  var about_p=$("#cerrar")
  
  
  

  if (form_name==null) {
    $("#cerrar").html("Inicie Sesion!")

  } else {
    $("#cerrar").html("Bienvenido, "+ form_name)
    about_p.append("<a href='#' id='logout'> Cerrar sesion</a>")
  }
  $("#logout").click(function(){
    localStorage.clear()
    location.reload()
    $("#cerrar").html("Bienvenido, "+ form_name)
  })
  
 // acordeon
  if(window.location.href.indexOf('about') > -1){
    $("#acordeon").accordion()
  }

  //reloj
  if(window.location.href.indexOf('reloj') > -1){
    setInterval(function(){
      var reloj = moment().format("hh:mm:ss")
      $("#reloj").html(reloj);
    },1000)
  }

  // validacion
  if(window.location.href.indexOf('contact') > -1){
    $("form input[name='nacimiento']").datepicker({
      dateFormat:"dd-mm-yy",
    })

    $.validate({
      lang: 'es',
      errorMessagePosition:'top',
      scrollToTopOnError: true,
  });
  }
})
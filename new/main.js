  const part1 =document.querySelector(".part-1");
  const part2 =document.querySelector(".part-2");
  const p1 = document.querySelectorAll(".part-1 li");
  const main = document.querySelector(".main");
  const footerTop = document.querySelector(".footer");
  var defaultDuration =300 // ms
  var edgeOffset = 142 // px
    zenscroll.setup(defaultDuration, edgeOffset)

  const col =  document.querySelectorAll(".col");
  const wave1 =  document.querySelectorAll(".wave-1");
  const wave2 =  document.querySelectorAll(".wave-2");
  const wave3 =  document.querySelectorAll(".wave-3");
  const star ='<img width="30" src="./star.svg" alt="">'
  const starColor ='<img width="30" src="./star-color.svg" alt="">'
  app.to(col[0],{marginLeft:'13vw',marginTop:'21vh',duration:0})
  app.to(col[1],{marginLeft:'3vw',marginTop:'22.6vh',duration:0})
  app.to(col[2],{marginLeft:'-6vw',marginTop:'22.6vh',duration:0})
  app.to(col[3],{marginLeft:'6.3vw',marginTop:'29.6vh',duration:0})
  app.to(col[4],{marginLeft:'-3.3vw',marginTop:'30.6vh',duration:0})
  app.to(col[5],{marginLeft:'9.3vw',marginTop:'39.6vh',duration:0})

 for (let i = 0; i < wave1.length; i++) {
    
    app.fromTo(wave1[i],{opacity:1},{width:"19px",height:"19px", duration:1, repeat:-1,opacity:0})
    app.fromTo(wave2[i],{opacity:1},{width:"29px",height:"29px", duration:1, repeat:-1,opacity:0})
    app.fromTo(wave3[i],{opacity:1},{width:"39px",height:"39px", duration:1, repeat:-1,opacity:0}) 
 }

  part2.style.left =p1[0].offsetLeft;

  function move(e) {
      part2.style.left = e.offsetLeft+"px";
      part2.style.width = e.offsetWidth+"px";
  }
  p1.forEach(element => {
      element.addEventListener("mouseenter", (e)=>{
          move(e.target);

      })
  });
  p1.forEach(element => {
      element.addEventListener("mouseleave", (e)=>{

               part2.style.width = "0px";

      })
  });

  p1.forEach(element => {
      element.addEventListener("click", (e)=>{
          move(e.target);
      })
  });

  data =async ()=>{
      // gallery
        const response_gallery = await fetch(`http://localhost/panel/json_gallery.php`,Option);
        const data_gallery = await response_gallery.json();
        // gallery_image
         const response_gallery_images = await fetch(`http://localhost/panel/json_gallery_images.php`,Option);
         const data_gallery_images = await response_gallery_images.json();
        // info
        const response_info = await fetch(`http://localhost/panel/json_info.php`,Option);
        const data_info = await response_info.json();
         //const gallery = data_gallery_images.map(gid => gid.gallery_id);
         const ids = data_gallery.map(id => id.id);
         const title = data_gallery.map(tit => tit.title);
         const status = data_gallery.map(sts => sts.status);

  for (let i = 0; i < data_gallery.length; i++) {

       const categories = data_gallery_images.filter(gallery => gallery.gallery_id==ids[i]);
              // console.log(categories);
               main.innerHTML+=
            `<a class="data-index" data-status="${status[i]}" href="#${data_gallery[i].title}"><div class="img-box">
            <img src="../uploads/images/${categories[0].file_name}">
            <span class="c-name">${data_gallery[i].title}</span>
            <span class="c-total">${categories.length} تعداد کالا</span>
            </div></a>`
  }
    const imgBox = document.querySelectorAll(".img-box");
    const dataIndex = document.querySelectorAll(".data-index");
    for (let i = 0; i < dataIndex.length; i++) {
        const element = dataIndex[i];

           if (element.getAttribute("data-status")==0) {
               element.style.display="none";
           }

    }
          for (let i = 0; i < imgBox.length; i++) {
              const element = imgBox[i];
             const categories = data_gallery_images.filter(gallery => gallery.gallery_id==ids[i]);
          element.onclick=(e)=>{
              window.scroll({
                  top: 0,
                  behavior: 'auto'
                });
           main.innerHTML="";
           main.style.justifyContent="center";
           main.style.alignItems="flex-start";
           main.style.gridTemplateColumns="auto auto auto auto auto auto";
          for (let j = 0; j < categories.length; j++) {
              const element = categories[j];
               main.innerHTML+=
               `<div data-index="${title[i]}${j}" class="new-page">
                  <img src="../uploads/images/${element.file_name}">
                  <span class="d-name">${element.name}</span>
               </div>`;
               const new_page = document.querySelectorAll(".new-page") 
               new_page.forEach(element => {
                   element.onclick=()=>{
                       const att = element.getAttribute("data-index");
                    const categories = data_gallery_images.filter(gallery => gallery.ext==att);
                    categories.forEach(element => {
                        document.querySelector(".n-page-cat").style.display="flex";
                        document.body.style.overflow = 'hidden';
                        document.querySelector(".img-close").onclick=()=>{
                         document.querySelector(".n-page-cat").style.display="none";
                         document.querySelector(".img-footer").innerHTML="";
                         document.body.style.overflowY = 'scroll';
                        }
                         document.querySelector(".img-start").innerHTML=`
                         <img data-index="${categories[0].file_name}" src="../uploads/images/${categories[0].file_name}">
                         `;
                         document.querySelector(".img-footer").innerHTML+=`
                          <img
                          data-fileName="${element.file_name}"
                          data-name="${element.name}"
                          data-price="${element.price}"
                          data-description ="${element.description}"
                          class="final-product" src="../uploads/images/${element.file_name}">
                         `
                
                     });
                     const finalProduct = document.querySelectorAll(".final-product");
                        finalProduct.forEach(element => {
                            element.onclick=()=>{
                                document.querySelector(".img-start").innerHTML=`
                         <img src="../uploads/images/${element.getAttribute("data-fileName")}">
                         `;
                                document.querySelector(".p-name").innerHTML=`${element.getAttribute("data-name")}`;
                                document.querySelector(".p-price").innerHTML=`${element.getAttribute("data-price")}`;
                                document.querySelector(".p-description").innerHTML=`${element.getAttribute("data-description")}`;
                                document.querySelector(".star").innerHTML=`${(1>2 ? star: starColor)}`;
                            }
                        });
                   }
               });
        
          }
         
          }
      }

      document.getElementById('information').onclick=()=>{
       zenscroll.to(footerTop)
      }
  // info sections
  document.querySelector(".email").innerHTML=`${data_info[0].email}`;
  document.querySelector(".tel").innerHTML=`${data_info[0].phone}`;
  document.querySelector(".phone").innerHTML=`${data_info[0].mobile}`;
  document.querySelector(".whatsapp").innerHTML=`${data_info[0].whatsapp}`;
  document.querySelector(".short").innerHTML=`${data_info[0].infotext}`;
      }

      data();

      document.getElementById("home").onclick=()=>{
          main.innerHTML="";
          main.style.gridTemplateColumns="auto auto auto auto";
          main.style.justifyContent="center";
          main.style.alignItems="center";
          data();
         zenscroll.toY(0,0)
      }
     
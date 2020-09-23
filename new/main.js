  const part1 =document.querySelector(".part-1");
  const part2 =document.querySelector(".part-2");
  const p1 = document.querySelectorAll(".part-1 li");
  const main = document.querySelector(".main");
  const footerTop = document.querySelector(".footer");
  const defaultDuration =300 // ms
  const edgeOffset = 93 // px
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
let dbx="";
  data =async ()=>{
      // gallery
        const response_gallery = await fetch(`http://localhost/panel/json_gallery.php`,Option);
        const data_gallery = await response_gallery.json();
        // gallery_image
         const response_gallery_images = await fetch(`http://localhost/panel/json_gallery_images.php`,Option);
         const data_gallery_images = await response_gallery_images.json();
         dbx = data_gallery_images;
        // info
        const response_info = await fetch(`http://localhost/panel/json_info.php`,Option);
        const data_info = await response_info.json();
         //const gallery = data_gallery_images.map(gid => gid.gallery_id);
         const ids = data_gallery.map(id => id.id);
         const title = data_gallery.map(tit => tit.title);
         const status = data_gallery.map(sts => sts.status);
//search
document.getElementById('inp').addEventListener("input", () => { 
    const value= document.getElementById('inp').value;
   
    var mySet = new Set();
    for (let i = 0; i < data_gallery_images.length; i++) {
      const element = data_gallery_images[i];
      const name = data_gallery_images[i].name;
      
      
      if (name.indexOf(value) > -1 && value!=null && value!=0 ) {
        mySet.add(element);
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        document.querySelector(".clear-search").style.display="block"
      } 
      else {
        document.querySelector(".search-result").innerHTML="";
        //document.querySelector(".clear-search").style.display="none"
      }
      if (value==0 || value==null) {
           document.querySelector(".clear-search").style.display="none"
      }
    }
    mySet.forEach(element=>{
       
        document.querySelector(".search-result").innerHTML+=`
        <div
        class="img-search-box"
        data-index="${element.file_name}" 
        data-price="${element.price}"
        data-name="${element.name}"
        data-description="${element.description}">   
        <img loading="lazy" src="../uploads/images/${element.file_name}">
        <div>${element.name}<p style=" font-weight: 900; margin-top:9px;">نام کالا</p></div>
        <div><p>تومان</p>${element.price}<p style=" font-weight: 900;">قیمت</p></div>
        </div>
        `;
        const search_end_result= document.querySelectorAll(".img-search-box");
                search_end_result.forEach(elementx => {
                    elementx.onclick=()=>{
                        
                        
                        document.querySelector(".end-result").style.display="flex";
             document.querySelector(".end-result-div").style.display="flex";
            document.querySelector(".end-rsult-img").src=`../uploads/images/${elementx.getAttribute("data-index")}`
            document.querySelector(".end-name").innerHTML=`${elementx.getAttribute("data-name")}`
             document.querySelector(".end-price").innerHTML=`${elementx.getAttribute("data-price")}`
              document.querySelector(".end-description").innerHTML=`${elementx.getAttribute("data-description")}`
            
            document.querySelector(".end-result").onclick=()=>{
             document.querySelector(".end-result").style.display="none"
             document.querySelector(".end-result-div").style.display="none";
         }
                    }
                });
    })
}, false);

// clear input
document.querySelector(".clear-search").onclick=()=>{
    document.querySelector(".clear-search").style.display="none"
    document.getElementById('inp').value="";
    document.querySelector(".search-result").innerHTML="";
}

  for (let i = 0; i < data_gallery.length; i++) {

       const categories = data_gallery_images.filter(gallery => gallery.gallery_id==ids[i]);
              // console.log(categories);
               main.innerHTML+=
            `<a class="data-index" data-status="${status[i]}" href="#${data_gallery[i].title}"><div class="img-box">
            <img loading="lazy" src="../uploads/images/${categories[0].file_name}">
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
           if (window.innerWidth<768) {
            main.style.gridTemplateColumns="auto";
        }
          for (let j = 0; j < categories.length; j++) {
              const element = categories[j];
               main.innerHTML+=
               `<div data-index="${title[i]}${j}" class="new-page">
                  <img loading="lazy" src="../uploads/images/${element.file_name}">
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
                         <img loading="lazy"  
                         data-index="${categories[0].file_name}" 
                         data-price="${categories[0].price}"
                         data-name="${categories[0].name}"
                         data-description="${categories[0].description}"   
                         src="../uploads/images/${categories[0].file_name}">
                         `;
                         document.querySelector(".p-name").innerHTML=`${categories[0].name}`;
                         document.querySelector(".p-price").innerHTML=`${categories[0].price}`;
                         document.querySelector(".p-description").innerHTML=`${categories[0].description}`;
                        //  fav
                        document.querySelector(".star").onclick=()=>{
                           
                             localStorage.setItem(categories[0].file_name, 'yes');
                             document.querySelector(".star").innerHTML=starColor;
                         }
                        if (localStorage.getItem(categories[0].file_name)=="yes") {
                             document.querySelector(".star").innerHTML=starColor;
                             document.querySelector(".star").style.pointerEvents="none"
                        } else {
                             document.querySelector(".star").innerHTML=star;
                             document.querySelector(".star").style.pointerEvents="all"
                        }
                         document.querySelector(".img-footer").innerHTML+=`
                          <img loading="lazy"
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
                                if (localStorage.getItem(element.getAttribute("data-fileName"))=='yes') {
                                    document.querySelector(".star").innerHTML=starColor;
                                    document.querySelector(".star").style.pointerEvents="none"
                                   
                                   } else {
                                    document.querySelector(".star").innerHTML=star;
                                    document.querySelector(".star").style.pointerEvents="all"
                                    
                                   }
                                document.querySelector(".img-start").innerHTML=`
                         <img loading="lazy" data-index="${element.getAttribute("data-fileName")}" 
                         data-name="${element.getAttribute("data-name")}"
                         data-price="${element.getAttribute("data-price")}"
                         data-description="${element.getAttribute("data-description")}"
                         src="../uploads/images/${element.getAttribute("data-fileName")}
                         ">
                         `;
                                document.querySelector(".p-name").innerHTML=`${element.getAttribute("data-name")}`;
                                document.querySelector(".p-price").innerHTML=`${element.getAttribute("data-price")}`;
                                document.querySelector(".p-description").innerHTML=`${element.getAttribute("data-description")}`;
                                document.querySelector(".star").onclick=()=>{
                                   // console.log(element.getAttribute("data-fileName"));
                                    localStorage.setItem(element.getAttribute("data-fileName"), 'yes');
                                    document.querySelector(".star").innerHTML=starColor;
                                }
                               if (localStorage.getItem(element.getAttribute("data-fileName"))=='yes') {
                                document.querySelector(".star").innerHTML=starColor;
                               } else {
                                document.querySelector(".star").innerHTML=star;
                               }
                              
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
      document.getElementById('information2').onclick=()=>{
        document.querySelector(".menu-close-x").style.display="none";
        document.querySelector(".menu").style.display="block";
        zenscroll.to(footerTop)
        document.querySelector(".menu-tabs").style.display="none";
       }
  // info sections
  document.querySelector(".email").innerHTML=`${data_info[0].email}`;
  document.querySelector(".tel").innerHTML=`${data_info[0].phone}`;
  document.querySelector(".phone").innerHTML=`${data_info[0].mobile}`;
  document.querySelector(".whatsapp").innerHTML=`${data_info[0].whatsapp}`;
  document.querySelector(".short").innerHTML=`${data_info[0].infotext}`;
      }

      document.getElementById("fav").onclick=()=>{
        document.querySelector(".fav").innerHTML="";
          document.querySelector(".fav-close").style.display="block"
         const favW =document.querySelector(".fav").offsetWidth;
         app.fromTo(".fav",{opacity:0,x:favW},{opacity:1,x:0,duration:.3})
         for (let [key, value] of Object.entries(localStorage)) {
            // console.log(`${key}: ${value}`);
            
            //console.log( info[0].description);
            if (value == "yes") {
                // console.log(key);
                document.querySelector(".fav").innerHTML+=`
                <img  data-index="${key}"  class="fav-img" loading="lazy" src="../uploads/images/${key}">
             
                <svg data-index="${key}" class="close-fav-x" fill="#ccc" width="30" height="30" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M 500 0C 224 0 0 224 0 500C 0 776 224 1000 500 1000C 776 1000 1000 776 1000 500C 1000 224 776 0 500 0C 500 0 500 0 500 0M 300 262C 310 262 319 266 327 273C 327 273 500 447 500 447C 500 447 673 273 673 273C 680 266 690 262 699 262C 715 262 729 271 735 285C 741 299 738 316 727 327C 727 327 553 500 553 500C 553 500 727 673 727 673C 736 683 740 697 737 710C 733 723 723 733 710 737C 697 740 683 736 673 727C 673 727 500 553 500 553C 500 553 327 727 327 727C 317 736 303 740 290 737C 277 733 267 723 263 710C 260 697 264 683 273 673C 273 673 447 500 447 500C 447 500 273 327 273 327C 263 316 259 300 265 286C 271 271 284 262 300 262C 300 262 300 262 300 262"/></svg>
            
                `
            }
            const fav_close_x= document.querySelectorAll(".close-fav-x");
            const fav_img = document.querySelectorAll(".fav-img");
         for (let z = 0; z < fav_img.length; z++) {
             const element = fav_img[z];
             element.onclick=()=>{
                document.querySelector(".end-result").style.display="flex";
                 document.querySelector(".end-result-div").style.display="flex";
                const info = dbx.filter(x => x.file_name == element.getAttribute("data-index") );
                document.querySelector(".end-rsult-img").src=`../uploads/images/${info[0].file_name}`
                document.querySelector(".end-name").innerHTML=`${info[0].name}`
                 document.querySelector(".end-price").innerHTML=`${info[0].price}`
                  document.querySelector(".end-description").innerHTML=`${info[0].description}`
             }
         }
            document.querySelector(".end-result").onclick=()=>{
                document.querySelector(".end-result").style.display="none"
                document.querySelector(".end-result-div").style.display="none";
            }
          for (let i = 0; i < fav_close_x.length; i++) {
             
              const element = fav_close_x[i];
              const data =element.getAttribute("data-index"); 
             
              element.onclick=()=>{
                localStorage.removeItem(data);
                fav_img[i].style.display="none";
                element.style.display="none";
              }
          }
          }
      }

      document.getElementById("fav2").onclick=()=>{
        document.querySelector(".menu-tabs").style.display="none";
        document.querySelector(".menu-close-x").style.display="none";
        document.querySelector(".menu").style.display="block";
        document.querySelector(".fav").innerHTML="";
          document.querySelector(".fav-close").style.display="block"
         const favW =document.querySelector(".fav").offsetWidth;
         app.fromTo(".fav",{opacity:0,x:favW},{opacity:1,x:0,duration:.3})
         for (let [key, value] of Object.entries(localStorage)) {
            // console.log(`${key}: ${value}`);
            
            //console.log( info[0].description);
            if (value == "yes") {
                // console.log(key);
                document.querySelector(".fav").innerHTML+=`
                <img  data-index="${key}"  class="fav-img" loading="lazy" src="../uploads/images/${key}">
             
                <svg data-index="${key}" class="close-fav-x" fill="#ccc" width="30" height="30" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M 500 0C 224 0 0 224 0 500C 0 776 224 1000 500 1000C 776 1000 1000 776 1000 500C 1000 224 776 0 500 0C 500 0 500 0 500 0M 300 262C 310 262 319 266 327 273C 327 273 500 447 500 447C 500 447 673 273 673 273C 680 266 690 262 699 262C 715 262 729 271 735 285C 741 299 738 316 727 327C 727 327 553 500 553 500C 553 500 727 673 727 673C 736 683 740 697 737 710C 733 723 723 733 710 737C 697 740 683 736 673 727C 673 727 500 553 500 553C 500 553 327 727 327 727C 317 736 303 740 290 737C 277 733 267 723 263 710C 260 697 264 683 273 673C 273 673 447 500 447 500C 447 500 273 327 273 327C 263 316 259 300 265 286C 271 271 284 262 300 262C 300 262 300 262 300 262"/></svg>
            
                `
            }
            const fav_close_x= document.querySelectorAll(".close-fav-x");
            const fav_img = document.querySelectorAll(".fav-img");
         for (let z = 0; z < fav_img.length; z++) {
             const element = fav_img[z];
             element.onclick=()=>{
                document.querySelector(".end-result").style.display="flex";
                 document.querySelector(".end-result-div").style.display="flex";
                const info = dbx.filter(x => x.file_name == element.getAttribute("data-index") );
                document.querySelector(".end-rsult-img").src=`../uploads/images/${info[0].file_name}`
                document.querySelector(".end-name").innerHTML=`${info[0].name}`
                 document.querySelector(".end-price").innerHTML=`${info[0].price}`
                  document.querySelector(".end-description").innerHTML=`${info[0].description}`
             }
         }
            document.querySelector(".end-result").onclick=()=>{
                document.querySelector(".end-result").style.display="none"
                document.querySelector(".end-result-div").style.display="none";
            }
          for (let i = 0; i < fav_close_x.length; i++) {
             
              const element = fav_close_x[i];
              const data =element.getAttribute("data-index"); 
             
              element.onclick=()=>{
                localStorage.removeItem(data);
                fav_img[i].style.display="none";
                element.style.display="none";
              }
          }
          }
      }
      document.querySelector(".fav-close").onclick=()=>{
         const favW =document.querySelector(".fav").offsetWidth;
          document.querySelector(".fav-close").style.display="none"
          app.fromTo(".fav",{opacity:1,x:0},{opacity:0,x:favW,duration:.3})
      }
      if (localStorage.length==0) {
          document.querySelector(".fav").innerHTML="شما آیتمی به لیست اضافه نکردید";
      }
      const compare= document.querySelector(".compare")
     
      compare.onclick=()=>{
        document.querySelector(".contact").style.borderTop= "3px solid #ccc";
          const compare_img= document.querySelector(".img-start img").getAttribute("data-index")
          const compare_name= document.querySelector(".img-start img").getAttribute("data-name")
          const compare_price= document.querySelector(".img-start img").getAttribute("data-price")
          const compare_description= document.querySelector(".img-start img").getAttribute("data-description")
          document.querySelector(".n-page-cat").style.display="none";
          document.querySelector(".compair-h3").style.display="flex";
          document.querySelector(".img-footer").innerHTML="";
          const compairH = document.querySelector(".compair-product");
        //   console.log(compairH);
          zenscroll.to(compairH);
          document.body.style.overflowY = 'scroll';
          document.querySelector(".compair-product").innerHTML+=`
          <div class="clone-compare-col">
          <svg class="compare-close-x-svg" width="30" height="30" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M 500 0C 224 0 0 224 0 500C 0 776 224 1000 500 1000C 776 1000 1000 776 1000 500C 1000 224 776 0 500 0C 500 0 500 0 500 0M 300 262C 310 262 319 266 327 273C 327 273 500 447 500 447C 500 447 673 273 673 273C 680 266 690 262 699 262C 715 262 729 271 735 285C 741 299 738 316 727 327C 727 327 553 500 553 500C 553 500 727 673 727 673C 736 683 740 697 737 710C 733 723 723 733 710 737C 697 740 683 736 673 727C 673 727 500 553 500 553C 500 553 327 727 327 727C 317 736 303 740 290 737C 277 733 267 723 263 710C 260 697 264 683 273 673C 273 673 447 500 447 500C 447 500 273 327 273 327C 263 316 259 300 265 286C 271 271 284 262 300 262C 300 262 300 262 300 262"/></svg>
          <div class="compare-col"
          data-index="${compare_img}" 
          data-name ="${compare_name}" 
          data-price ="${compare_price}"
          data-description = "${compare_description}"
          >
          
          <img class="add-new-p" loading="lazy" src="../uploads/images/${compare_img}">
          <l class="add-new-p-p">${compare_name}<p style="font-weight: bold;">نام کالا</p></l>
          <l class="add-new-p-p"><c>تومان</c>${compare_price} <p style="font-weight: bold;">قیمت</p></l>
          </div>
          </div>
           `;
          
           
           const choose= document.querySelector(".choose")
        choose.onclick= async()=>{
           
          const response_gallery_images = await fetch(`http://localhost/panel/json_gallery_images.php`,Option);
          const data_gallery_images = await response_gallery_images.json();
          document.querySelector(".allproduct").style.display="flex";
          document.querySelector(".pickproduct").style.display="grid";
          for (let i = 0; i < data_gallery_images.length; i++) {
              const element = data_gallery_images[i];
             // console.log(element);
                    document.querySelector(".pickproduct").innerHTML+=`
          <div 
          data-index="${element.file_name}" 
          data-name ="${element.name}" 
          data-price ="${element.price}"
          data-description = "${element.description}"
          class="img-gallery-product">
          <img class="img-gallery-product-p" loading="lazy" src="../uploads/images/${element.file_name}">
          </div>
                                `
                                // 22222
        const img_gallery_product =  document.querySelectorAll(".img-gallery-product");
        img_gallery_product.forEach(element => {
            element.onclick=()=>{ 
               document.querySelector(".compair-product").innerHTML+=`
               <div class="clone-compare-col">
               <svg class="compare-close-x-svg" width="30" height="30" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M 500 0C 224 0 0 224 0 500C 0 776 224 1000 500 1000C 776 1000 1000 776 1000 500C 1000 224 776 0 500 0C 500 0 500 0 500 0M 300 262C 310 262 319 266 327 273C 327 273 500 447 500 447C 500 447 673 273 673 273C 680 266 690 262 699 262C 715 262 729 271 735 285C 741 299 738 316 727 327C 727 327 553 500 553 500C 553 500 727 673 727 673C 736 683 740 697 737 710C 733 723 723 733 710 737C 697 740 683 736 673 727C 673 727 500 553 500 553C 500 553 327 727 327 727C 317 736 303 740 290 737C 277 733 267 723 263 710C 260 697 264 683 273 673C 273 673 447 500 447 500C 447 500 273 327 273 327C 263 316 259 300 265 286C 271 271 284 262 300 262C 300 262 300 262 300 262"/></svg>
               <div class="compare-col"
                data-index="${element.getAttribute("data-index")}" 
                data-name ="${element.getAttribute("data-name")}" 
                data-price ="${element.getAttribute("data-price")}"
                data-description = "${element.getAttribute("data-description")}"
               >
               
               <img class="add-new-p" loading="lazy" src="../uploads/images/${element.getAttribute("data-index")}">
               <l class="add-new-p-p">${element.getAttribute("data-name")}<p style="font-weight: bold;">نام کالا</p></l>
               <l class="add-new-p-p"><c>تومان</c>${element.getAttribute("data-price")} <p style="font-weight: bold;">قیمت</p></l>
               </div>
               </div>
                `
               
               document.querySelector(".allproduct").style.display="none";
               document.querySelector(".pickproduct").style.display="none";
               document.querySelector(".pickproduct").innerHTML="";
               const closeX= document.querySelectorAll(".compare-close-x-svg");
               const closeParnt= document.querySelectorAll(".compare-col");
               closeParnt.forEach(element => {
                   element.onclick=()=>{
                    document.querySelector(".end-result").style.display="flex";
                    document.querySelector(".end-result-div").style.display="flex";
                   document.querySelector(".end-rsult-img").src=`../uploads/images/${element.getAttribute("data-index")}`
                   document.querySelector(".end-name").innerHTML=`${element.getAttribute("data-name")}`
                    document.querySelector(".end-price").innerHTML=`${element.getAttribute("data-price")}`
                     document.querySelector(".end-description").innerHTML=`${element.getAttribute("data-description")}`
                   }
                   document.querySelector(".end-result").onclick=()=>{
                    document.querySelector(".end-result").style.display="none"
                    document.querySelector(".end-result-div").style.display="none";
                }
               });
               for (let i = 0; i < closeX.length; i++) {
                   const element = closeX[i];
                   element.onclick=(e)=>{
                       element.style.display="none"
                       closeParnt[i].style.display="none"

                   }
               }
            }
            
            
        });
          } 
        }
        const closeX= document.querySelectorAll(".compare-close-x-svg");
        const closeParnt= document.querySelectorAll(".compare-col");
        closeParnt.forEach(element => {
            element.onclick=()=>{
             document.querySelector(".end-result").style.display="flex";
             document.querySelector(".end-result-div").style.display="flex";
            document.querySelector(".end-rsult-img").src=`../uploads/images/${element.getAttribute("data-index")}`
            document.querySelector(".end-name").innerHTML=`${element.getAttribute("data-name")}`
             document.querySelector(".end-price").innerHTML=`${element.getAttribute("data-price")}`
              document.querySelector(".end-description").innerHTML=`${element.getAttribute("data-description")}`
            }
            document.querySelector(".end-result").onclick=()=>{
             document.querySelector(".end-result").style.display="none"
             document.querySelector(".end-result-div").style.display="none";
         }
        });
        for (let i = 0; i < closeX.length; i++) {
            const element = closeX[i];
            element.onclick=()=>{
                element.style.display="none"
                closeParnt[i].style.display="none"
            }
        }
        }
        
        document.querySelector(".compare-close").onclick=()=>{
            document.querySelector(".compair-product").innerHTML="";
            document.querySelector(".compair-h3").style.display="none";
            const maintop= document.querySelector(".main");
            zenscroll.to(maintop)
            document.querySelector(".contact").style.borderTop= "none";
       }
        document.querySelector(".allproduct").onclick=()=>{
            document.querySelector(".allproduct").style.display="none";
            document.querySelector(".pickproduct").style.display="none";
            document.querySelector(".pickproduct").innerHTML="";
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
      document.getElementById("home2").onclick=()=>{
        document.querySelector(".menu-close-x").style.display="none";
        document.querySelector(".menu").style.display="block";
        main.innerHTML="";
        main.style.gridTemplateColumns="auto";
        main.style.justifyContent="center";
        main.style.alignItems="center";
        data();
       zenscroll.toY(0,0)
       document.querySelector(".menu-tabs").style.display="none";
    //    document.querySelector(".main").style.gridTemplateColumns="auto auto auto"
    }
     if (window.innerWidth<768) {
        const col =  document.querySelectorAll(".col");
        app.to(col[0],{marginLeft:'49vw',marginTop:'21vh',duration:0})
        app.to(col[1],{marginLeft:'6vw',marginTop:'21.6vh',duration:0})
        app.to(col[2],{marginLeft:'-23.3vw',marginTop:'21.6vh',duration:0})//teh
        app.to(col[3],{marginLeft:'23.3vw',marginTop:'31.6vh',duration:0})
        app.to(col[4],{marginLeft:'-16.3vw',marginTop:'29.6vh',duration:0})
        app.to(col[5],{marginLeft:'28.9vw',marginTop:'39.6vh',duration:0})
        
     }
document.querySelector(".menu").onclick=()=>{
    document.querySelector(".menu-tabs").style.display="flex";
    document.querySelector(".menu-close-x").style.display="block";
    document.querySelector(".menu").style.display="none";
}
document.querySelector(".menu-close-x").onclick=()=>{
    document.querySelector(".menu-tabs").style.display="none";
    document.querySelector(".menu-close-x").style.display="none";
    document.querySelector(".menu").style.display="block";
}
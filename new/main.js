  const part1 =document.querySelector(".part-1");
  const part2 =document.querySelector(".part-2");
  const p1 = document.querySelectorAll(".part-1 li");
  const main = document.querySelector(".main");
  footerTop = document.querySelector(".footer").offsetTop;
  const dotes =  document.querySelectorAll(".dotes");
  app.to(dotes[0],{marginRight:'17vw',marginTop:'17vh'})
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

  data =async (from,to)=>{
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
           main.style.justifyContent="flex-start";
           main.style.alignItems="flex-start";
           main.style.gridTemplateColumns="auto auto auto auto auto auto";
          for (let j = 0; j < categories.length; j++) {
              const element = categories[j];
               main.innerHTML+=
               `<div data-index="${title[i]}${j}" class="new-page">
                  <img src="../uploads/images/${element.file_name}">
                  <span class="d-name">${element.name}</span>
               </div>`;
          }
          }
      }
      document.getElementById('information').onclick=()=>{
     window.scrollTo({
          top: footerTop,
          behavior: 'smooth'
        });
      }
      document.querySelector('.home').onclick=()=>{
          window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
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
      }

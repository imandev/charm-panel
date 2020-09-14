const Option = {
    method: "GET", // POST, PUT, DELETE, etc.
    headers: {
      // the content type header value is usually auto-set
      // depending on the request body
      "Content-Type": "text/plain;charset=UTF-8"
    },
    body: undefined, // string, FormData, Blob, BufferSource, or URLSearchParams
    referrer: "about:client", // or "" to send no Referer header,
    // or an url from the current origin
    referrerPolicy: "no-referrer-when-downgrade", // no-referrer, origin, same-origin...
    mode: "cors", // same-origin, no-cors
    credentials: "same-origin", // omit, include
    cache: "default", // no-store, reload, no-cache, force-cache, or only-if-cached
    redirect: "follow", // manual, error
    integrity: "", // a hash, like "sha256-abcdef1234567890"
    keepalive: false, // true
    signal: undefined, // AbortController to abort request
    window: window // null
  };
data =async ()=>{
  // gallery
    const response_gallery = await fetch(`http://localhost/panel/json_gallery.php`,Option);
    const data_gallery = await response_gallery.json();
    // gallery_image
     const response_gallery_images = await fetch(`http://localhost/panel/json_gallery_images.php`,Option);
    const data_gallery_images = await response_gallery_images.json();
    //console.log(data_gallery, data_gallery_images);
    // container
    const container = document.querySelector(".container");
    // images
    // 
   const cat = data_gallery_images.map(elm=>elm.gallery_id)
   
    
    for (let i = 0; i < data_gallery_images.length; i++) {
      const element = data_gallery_images[i];
      const category = data_gallery.filter(g=>g.id==cat[i]);
      container.innerHTML+=`
      <div class="box-img">
      <span>${category[0].title}</span>
      <img src="./uploads/images/${element.file_name}">
      <label for="">توضیحات</label>
      <textarea name="description[]">
       ${element.description}
       </textarea>
      <input hidden value="${element.id}" type="number"  name="id[]">
      <label for="">نام کالا</label>
      <input value="${element.name}" type="text"  name="name[]">
      <label for="">قیمت</label>
      <input value="${element.price}" type="number"  name="price[]">
      <label for="">دسته بندی</label>
      <input value="${element.ext}" type="text"  name="ext[]">
      </div>
      `;
    }
  
  
}
data();
data =async ()=>{
  // gallery
    const response_gallery = await fetch(`http://localhost/panel/json_page.php`,Option);
    const data_page = await response_gallery.json();
    for (let i = 0; i < data_page.length; i++) {
        const element = data_page[i];
        document.querySelector(".page-number").innerHTML+=`
        <div class="collection">
        <form class="" action="" method="post">
        <input hidden value="${element.id}" type="number"  name="id">
        <input  value="${element.az}" type="number"  name="az">
        <input  value="${element.be}" type="number"  name="be">
        <input class="upx" type="submit" name="submitx" value="Upadte">
        </form>

        <form action="" method="post"> 
            <input hidden value="${element.id}" type="number"  name="id">
            <input class="delx" type="submit" name="delete" value="Delete">
        </form>
        </div>
        `
        
    }
}
data();
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
infox =async ()=>{
    const response_info = await fetch(`/panel/json_info.php`,Option);
    const data_info = await response_info.json();
    for (let i = 0; i < data_info.length; i++) {
        const element = data_info[i];
        document.querySelector(".info-containerx").innerHTML=`
        <form class="infox" action="" method="post">
        <label for="">تلفن</label>
    <input style="width: 90%;" type="text" name="phone" id="" value="${element.phone}">
    <label for="">همراه</label>
    <input style="width: 90%;"type="text" name="mobile" id="" value="${element.mobile}">
    <label for="">ایمیل</label> 
    <input style="width: 90%;"type="text" name="email" id="" value="${element.email}">
    <label for="">واتساپ</label>
    <input style="width: 90%;"type="text" name="whatsapp" id="" value="${element.whatsapp}">
    <label for="">درباره ما</label>
    <textarea style="width: 90%;"type="text" name="infotext" id="">${element.infotext}</textarea>
    <input style="height: 26px;"type="submit" name="submitInfo" value="update">
  </form>
        `
    }
}
infox();
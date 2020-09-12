 <?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "record";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
if(isset($_POST['submit'])){
  $arr = array('a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5);
    $name =json_encode($arr);
   


$sql = "INSERT INTO items (json)
VALUES ('$name')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}
}

$sql = "SELECT json FROM items";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo json_encode($row["json"]);
  }
} else {
  echo "0 results";
}
$conn->close();
?> 
<!-- <form action="" method="post"> 
    <div class="container"></div>
    <input type="text" name="name">
   <input class="update" type="submit" name="submit" value="Upadte">
  </form> -->
  <script>
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
    const response_gallery = await fetch(`http://localhost/panel/record.php`,Option);
    const data_gallery = await response_gallery.json();
    console.log(data_gallery);
}
data();
  </script>
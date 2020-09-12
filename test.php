<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "codexworld";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM gallery_images";
$result = $conn->query($sql);
$count=mysqli_num_rows($result);
echo $count;
if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
   echo $row['name'];

  }
  
} else {
  echo "0 results";
}
// update\

if(isset($_POST['submit'])){
    for($i=0;$i<$count;$i++){
      $name = $_POST['name'];
      $id =   $_POST['id'];
        $sql = "UPDATE gallery_images SET name='$name[$i]' WHERE id='$id[$i]'";

        if ($conn->query($sql) === TRUE) {
          echo "Record updated successfully";
        } else {
          echo "Error updating record: " . $conn->error;
        }
    }
    }
    
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="" method="post">
    <label for="">name</label>
    <input type="text" id="id" name="id[]">
    <input type="text" id="name" name="name[]">
    <input type="text" id="id" name="id[]">
    <input type="text" id="name" name="name[]">
    <input type="submit" name="submit" value="submit">
</form>
</body>
</html>


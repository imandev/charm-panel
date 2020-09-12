<?php
// Start the session
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
      *{
        padding: 0;
        margin: 0;
      }
        body{
            background-color: #262626;
            color: white;
            width: 100%;
            min-height: 100vh;
        }
        .admin{
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 100%;
          min-height: 100vh;
        }
        form{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: rgba(0, 0, 0, .3);
          padding: 19px;
          border-radius: 9px;
        }
        input{
          margin-top: 1vh;
          border-radius: 9px;
          height: 33px;
          text-align: center;
          outline: none;
        }
        input :focus{
          outline: none;
        }
        .submit{
          width: 90px;
          cursor: pointer;
          color: white;
          background-color: springgreen;
          font-weight: bolder;
        }
        .error{
          color: red;
        }
    </style>
</head>
<body>
<!-- <script type="text/javascript">
var jvalue = 'this is javascript value';
<!-- <?php $abc = "<script>document.write(jvalue)</script>";
$x= 123;?> -->

</script>
<!-- <?php echo $abc.",".$x?> -->
</body>
</html>
<?php
/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
$link = mysqli_connect("localhost", "root", "", "information");
 
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
 
// Attempt select query execution
$sql = "SELECT * FROM info";
if($result = mysqli_query($link, $sql)){
    if(mysqli_num_rows($result) > 0){
        
        while($row = mysqli_fetch_array($result)){
           //$admin = $row['name'];
           //$remember = $row['remember'];
           $password = $row['password'];
        }
        // Free result set
        mysqli_free_result($result);
    } else{
        echo "No records matching your query were found.";
    }
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}
//  echo($admin);
//  echo($remember);
// Close connection
mysqli_close($link);
?>
 <!-- part2 -->
 <?php
// define variables and set to empty values
$nameErr = $emailErr = $genderErr = $websiteErr = "";
$name = $email = $gender = $comment = $website = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["name"])) {
    $nameErr = "password is required";
  } else {
    $name = ($_POST["name"]);
    // check if name only contains letters and whitespace
    if ($name==$password) {
      // require_once 'image/index.php';
    
// Set session variables
      $_SESSION["remember"] = $password;
      // $_SESSION["favanimal"] = "cat";
      // echo "Favorite animal is " . $_SESSION["remember"] . ".";
      echo '<script type="text/javascript">window.open("./cpanel.php", "_self")</script>';

    }
    else {
        # code...
        $nameErr = "sorry not an Admin";
    }
  }
  
}
?>
<div class="admin">

<!-- <p><span class="error">* required field</span></p> -->
<form method="post" >  
<h2>Admin Panel</h2>
  Password <input type="password" name="name" value="<?php echo $name;?>">
  <span class="error"><?php echo $nameErr;?></span>
  <input class="submit" type="submit" name="submit" value="Submit">  
</form>
</div>


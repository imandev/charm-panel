<?php 
// Start session 
session_start(); 

// Include and initialize DB class 
require_once 'DB.class.php'; 
$db = new DB(); 
 
// Fetch the gallery data 
$images = $db->getRows(); 
 
// Get session data 
// $sessData = !empty($_SESSION['sessData'])?$_SESSION['sessData']:''; 
 
// Get status message from session 
// if(!empty($sessData['status']['msg'])){ 
//     $statusMsg = $sessData['status']['msg']; 
//     $statusMsgType = $sessData['status']['type']; 
//     unset($_SESSION['sessData']['status']); 
// } 
?>
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "information";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$sql = "SELECT * FROM info";
if($result = mysqli_query($conn, $sql)){
    if(mysqli_num_rows($result) > 0){
        
        while($row = mysqli_fetch_array($result)){
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
// update
if(isset($_POST['submitInfo'])){
   
      $phone = $_POST['phone'];
      $mobile = $_POST['mobile'];
      $email = $_POST['email'];
      $whatsapp = $_POST['whatsapp'];
      $infotext = $_POST['infotext'];
        $sql = "UPDATE info SET phone='$phone',mobile='$mobile' 
        ,email='$email',whatsapp='$whatsapp',infotext='$infotext' WHERE id=1";

        if ($conn->query($sql) === TRUE) {
          echo "";
        } else {
          echo "Error updating record: " . $conn->error;
        }
    
    }
$conn->close();
?>
<?php

if ($_SESSION["remember"]!=$password) {
	# code...
	header('Location: ./404.html');
}?>
<!--  -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta  charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<link rel="stylesheet" href="style.css">
<style>
        input{
            width: 90px;
            text-align: center;
            margin: 3px;
            height: 23px;
        }
       
        .collection{
            display: flex;
            justify-content: center;
            /* border: 1px solid black; */
            text-align: center;

        }
        
        .upx{
            background-color: springgreen;
            height: 33px;
             border: none;
             border-radius: 9px;
             cursor: pointer;
             font-weight: bold;
        }
        .delx{
            background-color: red;
            height: 33px;
            border: none;
            border-radius: 9px;
            cursor: pointer;
            font-weight: bold;
        }
        .insx{
            background-color: violet;
            height: 33px;
            border: none;
            border-radius: 9px;
            cursor: pointer;
            font-weight: bold;
        }
        .infox{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
        }
    </style>
    <script defer src="page.js"></script>
    <script src="info.js"></script>
</head>
<body>
<!-- Display status message -->
<?php if(!empty($statusMsg)){ ?>
<div class="col-xs-12">
    <div class="alert alert-<?php echo $statusMsgType; ?>"><?php echo $statusMsg; ?></div>
</div>
<?php } ?>
<!-- pages -->
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "pages";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
// select
$sql = "SELECT * FROM page";
$result = $conn->query($sql);
$countx=mysqli_num_rows($result);
//echo $count;
if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
  // echo $row['name'];

  }
  
} else {
  echo "0 results";
}
// insert
if(isset($_POST['insert'])){
    $az = $_POST['az'];
    $be = $_POST['be'];
$sql = "INSERT INTO page (az, be)
VALUES ('$az', '$be')";

if ($conn->query($sql) === TRUE) {
  echo "";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}
}
// update
if(isset($_POST['submitx'])){
   
      $az = $_POST['az'];
      $id = $_POST['id'];
      $be = $_POST['be'];
        $sql = "UPDATE page SET az='$az',be='$be' WHERE id='$id'";

        if ($conn->query($sql) === TRUE) {
          echo "";
        } else {
          echo "Error updating record: " . $conn->error;
        }
    
    }
    // delet
    if(isset($_POST['delete'])){
        $id = $_POST['id'];
        $sql = "DELETE FROM page WHERE id=$id";

if ($conn->query($sql) === TRUE) {
  echo "";
} else {
  echo "Error deleting record: " . $conn->error;
}
        }
$conn->close();
?>
<!-- end pages -->
<div class="row">
   
        <!-- Add link -->
        <div style="display: flex; align-items:center; background:#262626;">
            <a style="width: 130px;" href="addEdit.php" class="btn-success"><svg  width="24" height="24" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M 200 450C 200 435 210 425 225 425C 225 425 425 425 425 425C 425 425 425 225 425 225C 425 210 435 200 450 200C 450 200 550 200 550 200C 565 200 575 210 575 225C 575 225 575 425 575 425C 575 425 775 425 775 425C 790 425 800 435 800 450C 800 450 800 550 800 550C 800 565 790 575 775 575C 775 575 575 575 575 575C 575 575 575 775 575 775C 575 790 565 800 550 800C 550 800 450 800 450 800C 435 800 425 790 425 775C 425 775 425 575 425 575C 425 575 225 575 225 575C 210 575 200 565 200 550C 200 550 200 450 200 450"/></svg> New Gallery</a>
            <a style="width: 130px; margin:9px;" href="collections.php" class="btn-primary">view Collections</a>
        </div>
	
    <!-- List the images -->
	<table class="table table-striped table-bordered">
        <thead class="thead-dark">
            <tr>
               
                <th >Collections</th>
                <th >Action</th>
            </tr>
        </thead>
        <tbody>
            <?php 
            if(!empty($images)){ $i=0; 
                foreach($images as $row){ $i++; 
                    $defaultImage = !empty($row['default_image'])?'<img src="uploads/images/'.$row['default_image'].'" alt="" />':''; 
                    $statusLink = ($row['status'] == 1)?'postAction.php?action_type=block&id='.$row['id']:'postAction.php?action_type=unblock&id='.$row['id']; 
                    $statusTooltip = ($row['status'] == 1)?'Click to Inactive':'Click to Active'; 
            ?>
            <tr>
                <td><?php echo $i; ?></td>
                <td><?php echo $defaultImage; ?></td>
                <td><?php echo $row['title']; ?></td>
                <td><?php echo $row['created']; ?></td>
                <td><a href="<?php echo $statusLink; ?>" title="<?php echo $statusTooltip; ?>"><span class="badge <?php echo ($row['status'] == 1)?'badge-success':'badge-danger'; ?>"><?php echo ($row['status'] == 1)?'Active':'دسته بندی'; ?></span></a></td>
                <td>
                    <!-- <a href="view.php?id=<?php echo $row['id']; ?>" class="btn btn-primary">view</a> -->
                    <a href="addEdit.php?id=<?php echo $row['id']; ?>" class="btn btn-warning"><svg width="24" height="24" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M 229 615C 229 615 382 766 382 766C 382 766 356 792 356 792C 351 798 344 800 338 802C 338 802 210 828 210 828C 186 832 163 810 169 785C 169 785 195 659 195 659C 195 652 199 646 203 641C 203 641 229 615 229 615M 713 137C 713 137 865 288 865 288C 865 288 432 716 432 716C 432 716 279 565 279 565C 279 565 713 137 713 137M 839 25C 848 25 858 29 865 36C 865 36 967 137 967 137C 980 150 980 173 967 187C 967 187 915 237 915 237C 915 237 763 86 763 86C 763 86 815 36 815 36C 821 29 830 25 839 25C 839 25 839 25 839 25M 150 13C 150 13 650 13 650 13C 664 12 676 19 683 31C 690 43 690 57 683 69C 676 81 664 88 650 88C 650 88 150 88 150 88C 138 88 121 95 108 108C 95 121 88 138 88 150C 88 150 88 850 88 850C 88 862 95 879 108 892C 121 905 138 912 150 912C 150 912 850 912 850 912C 862 912 879 905 892 892C 905 879 912 862 912 850C 912 850 912 350 912 350C 912 336 919 324 931 317C 943 310 957 310 969 317C 981 324 988 336 987 350C 987 350 987 850 987 850C 987 887 970 920 945 945C 921 970 888 987 850 987C 850 987 150 987 150 987C 113 987 79 970 55 945C 30 921 13 887 13 850C 13 850 13 150 13 150C 13 113 30 79 55 55C 79 30 113 13 150 13C 150 13 150 13 150 13"/></svg>edit</a>
                    <a href="postAction.php?action_type=delete&id=<?php echo $row['id']; ?>" class="btn btn-danger" onclick="return confirm('Are you sure to delete data?')?true:false;"><svg width="24" height="24" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M 357 378C 344 378 332 390 333 403C 333 403 329 848 329 848C 329 857 333 866 341 870C 349 875 359 875 366 870C 374 866 379 858 379 849C 379 849 383 404 383 404C 383 397 380 391 375 386C 371 381 364 378 357 378C 357 378 357 378 357 378M 650 375C 636 375 625 386 625 400C 625 400 625 850 625 850C 625 859 630 867 637 872C 645 876 655 876 663 872C 670 867 675 859 675 850C 675 850 675 400 675 400C 675 393 672 387 668 382C 663 377 656 375 650 375C 650 375 650 375 650 375M 500 375C 486 375 475 386 475 400C 475 400 475 850 475 850C 475 859 480 867 487 872C 495 876 505 876 513 872C 520 867 525 859 525 850C 525 850 525 400 525 400C 525 393 522 387 518 382C 513 377 506 375 500 375C 500 375 500 375 500 375M 198 299C 198 299 800 299 800 299C 800 299 800 850 800 850C 800 913 759 950 700 950C 700 950 300 950 300 950C 238 950 200 911 201 855C 201 855 198 299 198 299M 438 138C 438 138 438 187 438 187C 438 187 563 187 563 187C 563 187 563 138 563 138C 563 138 438 138 438 138M 425 63C 425 63 575 63 575 63C 609 63 638 91 638 125C 638 125 638 187 638 187C 638 187 849 187 849 187C 870 187 887 204 887 225C 887 245 870 262 849 262C 849 262 151 263 151 263C 130 263 113 246 113 225C 113 205 130 188 151 188C 151 188 363 188 363 188C 363 188 363 125 363 125C 363 125 362 125 362 125C 362 91 391 63 425 63C 425 63 425 63 425 63"/></svg>delete</a>
                </td>
            </tr>
            <?php } }else{ ?>
            <tr><td colspan="6">No gallery found...</td></tr>
            <?php } ?>
        </tbody>
    </table>
    <div class="info">
    <form action="" method="post"> 
        <div style="display: flex;">
                    <div class="colx">
                        <label for="">شروع</label>
                        <input name="az" type="number">
                    </div>
                    <div  class="colx">
                        <label for="">پایان</label>
                    <input name="be" type="number">
                </div>
                <div class="colx">
                    <label for="">Actions</label>
                        <input class="insx" type="submit" name="insert" value="Insert Page">
                    </div>
       </div>
  </form>
   
    <div class="page-number"></div>
     <div class="info-containerx"></div>
    </div>
</div>


<script>
function deleteImage(id){
    var result = confirm("Are you sure to delete?");
    if(result){
        $.post( "postAction.php", {action_type:"img_delete",id:id}, function(resp) {
            if(resp == 'ok'){
                $('#imgb_'+id).remove();
                alert('The image has been removed from the gallery');
            }else{
                alert('Some problem occurred, please try again.');
            }
        });
    }
}
</script>
</body>
</html>

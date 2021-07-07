<?php
    include "dbConn.php";

    $name = $_POST['name'];
    $email = $_POST['email'];
    $msg = $_POST['message'];
    $date = date('m/d/Y h:i:s a', time());

    $sql = "INSERT INTO Message (Name, Email, Message, Datetime)
    VALUES ('$name', '$email', '$msg', '$date')";

    
    /*
    DEBUG
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }*/
  
    $conn->close();
?>
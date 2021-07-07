<?php


$cred = parse_ini_file('../../../cred.ini');
$conn = mysqli_connect($cred['db_name'], $cred['db_user'], $cred['db_password'], "site");


if(!$conn)
{
    die("Connection failed: " . mysqli_connect_error());
}
?>
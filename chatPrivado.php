<?php
    session_start();
    if (!isset($_SESSION['token']) || !isset($_COOKIE['token']) || $_SESSION['token'] != $_COOKIE['token']) {
        //header("Location: index.html");
    }
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cuore</title>
    <link rel="icon" type="image/x-icon" href="front/img/imgLogo/logo.png">
    <link rel="stylesheet" href="front/css/all.css">
    <link rel="stylesheet" href="front/css/chatPrivado.css">
    <script src="front/js/jquery-3.6.0.min.js"></script>
    <script src="front/js/chatPrivado.js" type="module"></script>
    <script src="front/sweet/sweetalert2.min.js"></script>
    <link rel="stylesheet" href="front/sweet/sweetalert2.css">
</head>

<body>
    <header></header>
    <main></main>
    <footer></footer>
</body>

</html>
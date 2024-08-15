<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
session_start();
if (isset($_POST['login'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Vérification simple des identifiants
    if ($username === 'admin' && $password === 'root') {
        $_SESSION['user'] = $username;
        header('Location: admin.php'); // Rediriger vers admin.php si les identifiants sont corrects
        exit();
    } else {
        echo "<p>Identifiants incorrects</p>";
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Connexion Admin</title>
    <!-- Liens CSS -->
    <link rel="stylesheet" href="src/css/styles.css">
</head>
<body>
    <div class="login-container">
        <form action="login.php" method="post">
            <h2>Connexion Admin</h2>
            <input type="text" name="username" placeholder="Nom d'utilisateur" required>
            <input type="password" name="password" placeholder="Mot de passe" required>
            <button type="submit" name="login">Connexion</button>
        </form>
    </div>
</body>
</html>

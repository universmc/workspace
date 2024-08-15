<?php
session_start();
function isAdmin() {
    // Votre logique pour vérifier si l'utilisateur est un administrateur
    // Par exemple, vérifier une variable de session
    return isset($_SESSION['user_role']) && $_SESSION['user_role'] == 'admin';
}
?>
<!DOCTYPE html>
<?php if(!isset($_SESSION)) 
{ 
  
    session_start(); 
} ?>
<?php $_SESSION["MailDestinataires"]=""; ?>
<?php $_SESSION["tabMail"]=""; ?>
<?php $_SESSION["maj"]=false ?>
<?php $_SESSION["majConf"]=false; ?>
<?php $_SESSION['cc_id']=''; ?>
<?php include 'historique.php'; ?>
<?php include 'processus.php'; ?>

<html>
<head>
    <meta charset="utf-8"/>
        <title>Application CECIAA</title>
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <script src="js/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="js/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</head>
<body>
  <div class="container-fluide">
    <div class="row">
      <div class="col-3" >
      </div>
      <div class="col-6" >
        <form method="POST" id="test">
          <div class="form-group">
            <label for="IdPoste">Authentification</label>
            <input type="text" class="form-control" name="IdPoste" id="IdPoste" value="<?php if(isset($_COOKIE['check'])) echo $_COOKIE['check']; ?>" aria-describedby="Subtitle" tabindex="1" placeholder="Authentification avec Numéro interne">
            <small id="Subtitle" class="form-text text-muted">Authentification avec Numéro interne.</small>
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" name="check" id="check">
            <label class="form-check-label" for="check">Se souvenir de moi</label>
          </div>
          <button type="submit" class="btn btn-primary" name="btSubmit">Enter</button>
        </form>
      </div>
      <div class="col-3" >
      </div>
    </div>
  </div>
</body>
</html>
<?php

if (isset($_POST["btSubmit"])) {
      //On récupère le numéro de poste du chargé client
      $IdPoste=$_POST['IdPoste'];
      //On appelle la base de données avec test de la coonexion
      $mysqli = new mysqli('localhost','root','','bddscceciaa');
      if ($mysqli->connect_errno) {
          printf("Echec de la connexion : %s\n", $mysqli->connect_error);
          exit();
      }
      //On cherche dans la table chargé client si ce qu'il a saisi est dans la base.
      $result = $mysqli->query("SELECT * FROM chargeclient WHERE cc_idposte ='$IdPoste'");
        //Si il n'est pas reconnu, on affiche un PopUp indiquant : Identifiant non reconnu.
        if (($result->num_rows==0)) : ?>
          <?php $_SESSION['cc_id']=''; ?>
          <?php $_SESSION['cc_nom_auth']=''; ?>
          <?php $_SESSION['cc_prenom_auth']=''; ?>
            <!-- Le PopUp se déclenche à la soumission du formulaire. -->
            <script type="text/javascript"> $( document ).ready(function() { $('#myModal').modal('toggle') }); </script> 
              <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"> 
                <div class="modal-dialog" role="document"> 
                  <div class="modal-content"> 
                    <div class="modal-header"> 
                      <div class="modal-title" id="myModalLabel">Identifiant non reconnu 
                      </div> 
                    </div>
                    <div class="modal-footer"> 
                      <button type="button" class="btn btn-info" data-dismiss="modal">OK
                      </button> 
                    </div>  
                  </div>   
                </div> 
              </div> <?php 
        endif; 
        //Si il est reconnu, on extrait son numéro de poste, son nom et son prénom pour le message d"arrivée dans le formulaire principale.
        if ($result->num_rows>0) {
            while($Attributs = $result->fetch_assoc()) {
                $_SESSION['cc_id']=$Attributs['cc_idposte'];
                $_SESSION["cc_nom_auth"]= $Attributs["cc_nom"];
                $_SESSION["cc_prenom_auth"]= $Attributs["cc_prenom"];
                //Si la case à coccher (se souvenir de moi) est cochée, on enregistre dans un cookie son numéro de poste qu'on ré-affichera dans le champ d'authentification.
                if(isset($_POST['check'])) {
                    $_COOKIE['check']=$_SESSION['cc_id'];
                    $IdPoste=$_COOKIE['check'];
                    setcookie("check", $IdPoste, time()+3600*24*365);
                }
                //Sinon on ne récupère que son numéro de poste.
                else {
                    $IdPoste=$_SESSION['cc_id'];
                }
            }
            header('Location:accueil.php');
        }
  } 
  echo $IdPoste;
  //var_dump($_POST);
  //var_dump($_COOKIE["check"]);
?>       
       
       


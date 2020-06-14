<?php
    if(!isset($_SESSION)) 
    { 
        session_start(); 
    } 
?>
<!DOCTYPE html>
<?php include 'processus.php'; ?>
<?php include 'historique.php'; ?>
<?php 
	//Les 2 use sont nécessaires pour l'envoi des emails;fonction dans fonction.php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;
	
	//Si le formulaire n'est pas correctement rempli.
	if (isset($_SESSION['MessageDebug'])) : 
		$Nom=$_SESSION["Nom"];
		$Prenom=$_SESSION["Prenom"];
		$Tel=$_SESSION["Tel"];
		$Mail=$_SESSION["Mail"];
		$TeamViewerID=$_SESSION["TeamViewerID"];
		$TeamViewerPW=$_SESSION["TeamViewerPW"];
		$RDV=$_SESSION["RDV"];
		$Objet=$_SESSION["Objet"];
		$Destinataires=$_SESSION["Destinataires"];
		$mesDiv = explode(" , ", $_SESSION["MessageDebug"]);
		$NombreErreurs=count($mesDiv);
		$NombreErreurs=$NombreErreurs - 1;
		$Success='Le formulaire est correcte, Ok pour confirmer !';
		$SuccessMiseajour='Le formulaire est correcte, Ok pour mettre à jour !';
		$ErrorsListe='';
		$saut = "<br>";
		//On liste les erreurs
		for($i=1; $i<count($mesDiv); $i++) { 
			$ErrorsListe=$ErrorsListe.$mesDiv[$i].$saut;
		} 
		//Si il n'y a pas d'erreurs lors de la soumission du formulaire
		//On prépare le contenu du mail si il ya lieu de l'envoyer.
	 	if ($NombreErreurs == 0) :
	 		$cc_nom=$_SESSION['cc_nom'];
	 		$cc_prenom=$_SESSION['cc_prenom'];
	 		$sujet=$_SESSION["RDV"];
	 		$obj=$_SESSION["Objet"];
	 		$nom=$_SESSION["Nom"];
	 		$prenom=$_SESSION["Prenom"];
	 		$tel=$_SESSION['Tel'];
	 		$mail=$_SESSION['Mail'];
	 		$teamviewerID=$_SESSION['TeamViewerID'];
	 		$teamviewerPW=$_SESSION['TeamViewerPW'];
	 		$MailDestinataires=$_SESSION["MailDestinataires"];
	 		$cc_email=$_SESSION["cc_email"];
			$Contact=$tel." ".$mail;
			//test de vacuité del éléments du mail
			/*
			$tabObjet=array();
			$tabObjet[]="Nouvel enregistrement : ".$cc_nom.' '.$cc_prenom.'<br/>';
			if(!empty($obj))
				$tabObjet[]="Objet : ".$obj.'<br/>';
			$objet=$tabObjet;
			*/
	 		//Contenu du mail.
	 		$objet="Nouvel enregistrement : ".$cc_nom.' '.$cc_prenom.'<br/>'.'<p>Objet : '.$obj.'</p><br/>Info client : <br/> Nom : '.$nom.'<br/> Prénom : '.$prenom.'<br/> Contact : '.$Contact.'<br> TeamViewerID : '.$teamviewerID.'<br/> TeamViewerPW : '.$teamviewerPW;
	 		//On récupère depuis processus.php dans la vérification du mail
	 		$MailDestinataires=$_SESSION["tabMail"];
	 		//var_dump($MailDestinataires);
	 		envoiMail($sujet,$objet,$cc_email,$MailDestinataires);
	 		if ($_SESSION['Messagedemiseajour']==True) {
			 	$messageSuccess = $SuccessMiseajour;
			 	$_SESSION['Messagedemiseajour']=False;
			 	$Miseajour=False;
			 	$_SESSION["maj"]=false;
	 		}else {
		 		$messageSuccess = $Success;
	 		} ?>
	 		<!-- Message PopUp pour l'enregistrement OK du formulaire. -->
		 	<script type="text/javascript"> $( document ).ready(function() { $('#myModal').modal('toggle') }); </script> 
 			<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"> 
 				<div class="modal-dialog" role="document"> 
 					<div class="modal-content"> 
 						<div class="modal-header"> 						
 							<div class="modal-title" id="myModalLabel"><?php echo $messageSuccess; ?>	
		 					</div> 
 						</div>
 						<div class="modal-footer"> 
			 				<button type="button" class="btn btn-info" data-dismiss="modal">OK
			 				</button> 
 						</div>  
 					</div> 	
 				</div> 
 			</div>
 			<?php
 			//Remise à vide des champs du formulaire après validation et enregistrement
				$Nom='';
				$Prenom='';
				$Tel='';
				$Mail='';
				$Contact='';
				$TeamViewerID='';
				$TeamViewerPW='';
				$RDV='';
				$Objet='';
				$Destinataires='';
			?>
			<?php endif ;?>
			<?php 
		//Si il y a des erreurs dans la compilation du formulaire, on afficha un PopUp avec le nombre et la listes des erreurs. 
		if($NombreErreurs > 0) : ?>
			<?php if($_SESSION["majConf"]==true)
						$Miseajour=true;
					else
						$Miseajour=false ?>
		 	<script type="text/javascript"> $( document ).ready(function() { $('#myModal').modal('toggle') }); </script> 
 			<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"> 
 				<div class="modal-dialog" role="document"> 
 					<div class="modal-content"> 
 						<div class="modal-header"> 
 							<h4 >vous avez <?php echo $NombreErreurs ?> erreurs</h4> 
 						</div> 
		 					<div class="modal-body "> 
		 						<div><?php echo $ErrorsListe; ?>	
		 					</div> 
 						</div> 
 						<div class="modal-footer"> 
			 				<button type="button" class="btn btn-info" data-dismiss="modal">Fermer
			 				</button> 
 						</div> 
 					</div> 
 				</div> 
 			</div>
 		<?php endif;
 			//remise à zéro du message d'erreur.
			unset($_SESSION['MessageDebug']);
    	 ?>
    <?php endif;?>		
<script>
	// fonction recherchant un client dans la base de données par occurence
	function recherche()
	{
	let x=document.getElementById('entree');
	
		if ( (x.value.length > 0))
		{
			document.getElementById("cherche").disabled = false;
		}
		else
		{
			document.getElementById('cherche').disabled = true;
		}
	} 

	//fonction occultant le champ "Notification personnalisé" si l'on ne souhaite pas envoyer d'E-mails aux collaborateurs (décoche de la checkbox)
	function clic()
	{
		 let checkbox = document.getElementById('check');
		 if(checkbox.checked!=true) {
		 	let x = document.getElementById("notif");
		 	x.type="hidden";
		 }
		 else {
		 	let x = document.getElementById("notif");
		 	x.type="text";
		 }
	}
</script>
<html>
    <head>
        <meta charset="utf-8"/>
         <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=4,user-scalable=yes">
        <title>Application pour CECIAA</title>
       	<link rel="stylesheet" href="css/bootstrap.min.css">
       	<script src="js/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
		<script src="js/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
		<script src="js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    </head>
    <body>
    	<div class="container-fluid">
    		<div class="row">
    				<div class="container-fluid">
		    			<nav class="navbar navbar-expand-lg bg-dark">
							<div class="collapse navbar-collapse" id="navbarSupportedContent">
							    <ul class="navbar-nav mx-auto">
							      		<li class="nav-item mr-4">
							        		<form action="historique.php" method="POST" >
		    									<button type="submit" class="nav-link btn btn-warning btn-lg btn-block"name="Historique">Historique</button> 
		    								</form>
							      		</li>
								     	<li class="nav-item mr-4">
								        	<a class="nav-link btn btn-light btn-lg form-control " href="index.php">Retour à l'authentification<a>
								      	</li>
								      	<li class="nav-item mr-4">
							      			<a class="nav-link btn btn-info btn-lg" href="aide.html"> Aide ?</a>
							      		</li>
							    </ul>
							    <form action="historique.php" method="POST" class="form-inline text-center">
								    <div class="input-group">
								        <input id="entree" type="text" name="search" class="form-control" placeholder="Rechercher dans l'historique" oninput="recherche()">
							            <div class="input-group-btn ">
								                <button id="cherche" disabled="true" type="submit" class="btn btn-info"><span class="fa fa-search"></span>
								                  Rechercher
								                </button>
							            </div>
								    </div>
								</form>
							</div>
						</nav>
						<nav class="navbar navbar-expand-lg bg-light">
							  <a class="navbar-brand" href="accueil.php">
							    <img src="images/logo.jpg" width="30" height="30" class="d-inline-block align-top" alt="">
							    Session ouverte par : <?php echo utf8_encode($_SESSION["cc_prenom"]." ".$_SESSION["cc_nom"]); ?>
							  </a>
						</nav>
					</div>
    		</div>
    		<div class="row">
    				<div class="container">
						<form action="processus.php" method="POST">
							<div class="form-group ">
								<span class="input-group-text">Objet *</span>
								<textarea class="form-control form-control-lg" name="Objet" value="" aria-label="Le champ Objet est obligatoire pour l'enregistrement du fichier" placeholder="Le champ Objet est obligatoire pour l'enregistrement du fichier"><?php echo htmlspecialchars($Objet) ;?></textarea>
							</div>
							<div class="form-group ">
								<div class="form-group f ">
									<!--<span class="input-group-text">Nom du client *</span>-->  
									<input type="text" name="Nom" class="form-control form-control-lg" value="<?php echo $Nom ; ?>" placeholder="Nom du client" >
								</div>
								<div class="form-group "> 
									<!--<span class="input-group-text">Prénom du client *</span>-->  
									<input type="text" name="Prenom" class="form-control form-control-lg" value="<?php echo $Prenom ; ?>" placeholder="Prénom du client" >
								</div>
							</div>
							<div class="form-group">
								<!--<span class="input-group-text">Echéance et rendez-vous</span>-->
								<input type=" text" name="Contact" class="form-control form-control-lg" value="<?php echo $Tel.$Mail ; ?>" placeholder="Téléphone ou E-Mail du client">
							</div>
							<div class="form-group">
								<div class="form-group">
									<!--<span class="input-group-text">TeamViewer ID </span>-->
									<input type=" text" name="TeamViewerID" class="form-control form-control-lg" value="<?php echo $TeamViewerID ; ?>" placeholder="Identifiant TeamViewer du client">
								</div>
								<div class="form-group ">
									<!--<span class="input-group-text">TeamViewer MDP </span>
									col-sm-6 col-md-6 col-lg-6 col-xl-6-->
									<input type=" text" name="TeamViewerPW" class="form-control form-control-lg" value="<?php echo $TeamViewerPW ; ?>" placeholder="Mot de passe TeamViewer du client">
								</div>
							</div>
							<div class="form-group">
								<!--<span class="input-group-text">Echéance et rendez-vous</span>-->
								<input type=" text" name="RDV" class="form-control form-control-lg" value="<?php echo $RDV ; ?>" placeholder="Echéances et rendez-vous du client">
							</div>
							<!--span class="input-group-text">Notification personalisée</span>-->
							<div class="form-group ">
								<span class="input-group-text">Envoyer une notification</span>	
							  <input name="Destinataires" id='notif' value="<?php echo $Destinataires ; ?>" type="text" class="form-control form-control-lg" aria-label="Entrez les destinataires séparés par des virgules" placeholder="Entrez le nom ou le prénom des destinataires séparés par des virgules ou ecrivez tous pour envoyer à tout le monde">
							  </div>
							<div class="form-group">    
							<?php if ($Miseajour == True) : ?>
								<button type="submit" class="btn btn-info btn-lg btn-block"name="Mise_a_jour">Mise à jour</button>
								<button type="submit" class="btn btn-info btn-lg btn-block"name="Annuler"data-dismiss="modal">Annuler</button>
								<?php else : ?>
									<button type="submit" class="btn btn-primary btn-lg btn-block"  name="Enregistrer">Enregistrer</button>
							<?php endif; ?>
							</div>	
						</form>
    				</div>
    		</div>
    		<div class="row">
    				<footer>
			     	</footer>
    		</div>		
	    </div>
    </body>
</html>
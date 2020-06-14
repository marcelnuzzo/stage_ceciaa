<?php include 'fonction.php' ?>

<!DOCTYPE html>
<?php
    if(!isset($_SESSION)) 
    { 
        session_start(); 
    } 
?>
 <html>
	<head>
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

<?php

		$mysqli = new mysqli('localhost','root','','bddscceciaa') ;
		if ($mysqli->connect_errno) {
		    printf("Echec de la connexion : %s\n", $mysqli->connect_error);
		    exit();
		}
		// init des variables pour la mise à jour
		if($_SESSION["maj"]==false) {
			$Miseajour=False;
		}
		else {
			$Miseajour=true;
			$_SESSION["majConf"]=true;
		}
		//On récupère par $_SESSION['cc_id'] le IdPoste de celui qui s'est authentifié auparavant 
	    $IdPoste=$_SESSION['cc_id'];
		$result = $mysqli->query("SELECT * FROM chargeclient WHERE cc_idposte ='$IdPoste'");
	  	$attributs = $result->fetch_assoc();
		$cc_nom =$attributs['cc_nom'];
		$cc_prenom =$attributs['cc_prenom'];
		$cc_telint =$attributs['cc_telint'];
		$cc_portable =$attributs['cc_portable'];
		$cc_email=$attributs['cc_email'];
		$_SESSION['Suppression']='';
		$_SESSION['cc_id']=$IdPoste;
		$_SESSION['cc_nom']=$cc_nom;
		$_SESSION['cc_prenom']=$cc_prenom;
		$_SESSION['cc_telint']=$cc_telint;
		$_SESSION['cc_portable']=$cc_portable;
		$_SESSION['cc_email']=$cc_email;
?>
<body>
<?php
//Suite au clic sur historique dans accuiel
if ((isset($_POST['Historique']))) {
	//fonction située dans fonction.php
	hist();
}
//O récupère dans l'URL l'identifiant du client pour la suppression de l'enregistrement
if (isset($_GET['delete'])):?>
	<?php $IDS = $_GET['delete'];?>
		<script type="text/javascript"> $( document ).ready(function() { $('#myModal').modal('toggle') }); </script> 
	 		<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"> 
	 			<div class="modal-dialog" role="document"> 
	 				<div class="modal-content"> 
	 					<!--
	 					<div class="modal-header"> 	
		 					<div class="modal-title" id="myModalLabel"><?php //echo'Voulez-vous vraiment supprimer ?';?>	
				 			</div> 
	 					</div>
	 				-->
	 					<div class="modal-footer"><?php echo'Voulez-vous vraiment supprimer ?';?>&nbsp 
			 				<a href="historique.php?ConfSup=<?php echo $IDS; ?>" name="Supprimer" autofocus class="btn btn-danger">Oui</a>
			 				<button type="button" class="btn btn-primary" data-dismiss="modal">Annuler</button> 
	 					</div>  
	 				</div> 		
	 			</div> 
	 		</div>
	 		<!--situé dans foncàtion.php-->
	 		<?php hist(); 	
 endif ;?>
 	<!-- modal pour la confirmation de la suppression -->
	<?php if (isset($_GET['ConfSup'])):?>
	<?php $ID = $_GET['ConfSup'];?>	
	<?php$mysqli = new mysqli('localhost','root','','bddscceciaa') ;?>	
	<?php $mysqli->query("DELETE FROM client WHERE ID=$ID") or die($mysqli->error());?>	
	<?php $_SESSION["Suppression"]='Suppression réussie !';?>	
		<script type="text/javascript"> $( document ).ready(function() { $('#myModal').modal('toggle') }); </script> 
	 		<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"> 
	 			<div class="modal-dialog" role="document"> 
	 				<div class="modal-content"> 
	 					<!--
	 					<div class="modal-header"> 
	 						<div class="modal-title" id="myModalLabel"><?php echo $_SESSION["Suppression"];?>	
			 				</div> 
	 					</div>
	 				-->
	 					<div class="modal-footer"><?php echo $_SESSION["Suppression"];?>&nbsp  
				 			<button type="button" name="OkS" class="btn btn-info" data-dismiss="modal">OK
				 			</button> 
	 					</div>  
	 				</div>  						
	 			</div> 
	 		</div>
	<!---situé dans fonction.php-->
	<?php hist(); 
	endif ;?>
<?php
//On récupère dans l'URL l'identifiant client pour effectuer la mise à jour de l'enregistrement
if (isset($_GET['edit'])) {
	$_SESSION["maj"]=true;
	$_SESSION["majConf"]=true;
	$_SESSION['Messagedemiseajour']=True;
	$Miseajour=True;
	$IDEDIT= $_GET['edit'];
	$_SESSION['ID'] = $_GET['edit'];
	$request = "SELECT * FROM client WHERE ID='$IDEDIT'";
	$result = $mysqli->query($request);
	$ligne = $result->fetch_assoc();
	$ID=$ligne['ID'];
	$Nom=$ligne['Nom'];
	$Prenom=$ligne['Prenom'];
	$Tel=$ligne['Tel'];
	$Mail=$ligne['Mail'];
	$Contact=$ligne['Tel'];
	$Contact=$ligne['Mail'];
	$TeamViewerID=$ligne['TeamViewerID'];
	$TeamViewerPW=$ligne['TeamViewerPW'];
	$RDV=$ligne['RDV'];
	$Objet=$ligne['Objet'];
	$Date=$ligne['Date'];		
}
//On effectue une recherche client dans les enregistrements
if(isset($_POST['search'])): ?>
	<div class="container-fluide">
		<div class="row">
			<div class="col-4 text-right">
				<a class="btn btn-secondary" href="accueil.php" role="button">accueil</a>
			</div>
		</div>
	<?php $mysqli = new mysqli('localhost','root','','bddscceciaa') ;?>
	<?php $recherche = $_POST["search"];
	$recherche=preg_replace('/^\s+/', '', $recherche);
	$recherche=preg_replace('/\s+$/', '', $recherche);
	$result = $mysqli->query("SELECT * FROM client WHERE CONCAT(Nom, Prenom,Tel,Mail,TeamViewerID,TeamViewerPW, RDV, Objet, Date) LIKE '%$recherche%'");
	while($Attributs = $result->fetch_assoc()) : ?> 
			<div class="container-fluide">
			<div class="row">
			<div class="container">
				<H1> Client :
				<?php if(!empty($Attributs['Nom'])): ?><?php echo "Nom : ".$Attributs['Nom'] ?><?php endif ?>
				<?php if(!empty($Attributs['Prenom'])): ?> <?php echo "Prenom : ".$Attributs['Prenom'] ?><?php endif ?>
				</H1>
			</div>
			</div>
			<div class="row">
			<div class="container">	
				<ul class="list-group">
					<?php if(!empty($Attributs['Tel'])): ?> <li  class="list-group-item"> <?php echo "Tel : ".$Attributs['Tel'] ?></li><?php endif ?>
					<?php if(!empty($Attributs['Mail'])): ?> <li class="list-group-item"> <?php echo "Mail : ".$Attributs['Mail'] ?></li><?php endif ?>
					<?php if(!empty($Attributs['TeamViewerID'])): ?><li class="list-group-item"> <?php echo "TeamViewerID : ".$Attributs['TeamViewerID'] ?>></li><?php endif ?>
					<?php if(!empty($Attributs['TeamViewerPW'])): ?> <li class="list-group-item"> <?php echo "TeamViewerPW : ".$Attributs['TeamViewerPW'] ?>></li><?php endif ?>
					<?php if(!empty($Attributs['RDV'])): ?> <li class="list-group-item"> <?php echo "RDV : ".$Attributs['RDV'] ?></li> <?php endif ?>
					<?php if(!empty($Attributs['Objet'])): ?> <li class="list-group-item"> <?php echo "Objet : ".$Attributs['Objet'] ?></li> <?php endif ?>
					<?php if(!empty($Attributs['Date'])): ?> <li class="list-group-item"> <?php echo "Date : ".$Attributs['Date'] ?></li> <?php endif ?>
					<li class="list-group-item"> <?php echo "Enregistré par : ".$Attributs['cc_nom'].' '.$Attributs['cc_prenom'] ?></li>
					<li class="list-group-item"> <?php echo "Tel interne : ".$Attributs['cc_telint'] ?></li>
					<li class="list-group-item"> <?php echo "Portable : ".$Attributs['cc_portable'] ?></li>
					<li class="list-group-item"> <?php echo "Email : ".$Attributs['cc_email'] ?></li>	

					<li class="list-group-item"><a href="accueil.php?edit=<?php echo $Attributs['ID']; ?>" name="Modifier" class="btn-lg btn-info">Modifier</a></li>
					<li class="list-group-item"><a href="historique.php?delete=<?php echo $Attributs['ID']; ?>" name="Supprimer" class="btn-lg btn-danger">Supprimer</a></li>
				</ul>
			</div>
			</div>
		</div>
	</div>
		<?php endwhile;	?> 
	<?php endif ?>
	</body>
</html>
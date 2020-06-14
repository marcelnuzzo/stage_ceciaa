<?php
function hist() {
	    $ID='';
		$Nom='';
		$tailleNom = strlen($Nom);
		$Prenom='';
		$taillePrenom = strlen($Prenom);
		$Tel='';
		$Mail='';
		$Contact='';
		$TeamViewerID='';
		$TeamViewerPW='';
		$RDV='';
		$Objet='';
		$Check= '';
		$Destinataires='';
		$Date='';
		$Erreur='';
		$mysqli = new mysqli('localhost','root','','bddscceciaa') ;
		if ($mysqli->connect_errno) {
		    printf("Echec de la connexion : %s\n", $mysqli->connect_error);
		    exit();
		}
		?>
	<!DOCTYPE html>
	<html>
	<body>
		<div class="row">
    				<div class="container-fluid">
		    			<nav class="navbar navbar-expand-lg bg-dark">
							<div class="collapse navbar-collapse" id="navbarSupportedContent">
							    <ul class="navbar-nav mx-auto">
							      		<li class="nav-item mr-4">
							        		<form action="accueil.php" method="POST" >
		    									<button type="submit" class="nav-link btn btn-info btn-lg btn-block"name="accueil">Accueil</button> 
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
							    Session ouverte par : <?php echo $_SESSION["cc_prenom"]." ".$_SESSION["cc_nom"]; ?>
							  </a>
						</nav>
					</div>
    	</div>	
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
	</script>
	<?php $result = $mysqli-> query("SELECT * FROM client ORDER BY ID DESC");?>
	<?php if (($result->num_rows==0)):?> 
				<script type="text/javascript"> $( document ).ready(function() { $('#myModal').modal('toggle') }); </script> 

	 				<div class="modal-dialog" role="document"> 
	 					<div class="modal-content"> 
	 						<div class="modal-header">	
	 							<div class="modal-title" id="myModalLabel"><?php echo 'Historique vide !';?>	
			 					</div> 
	 						</div>
	 					</div> 
	 				</div> 
	<?php endif; ?>
	<?php while($Attributs = $result->fetch_assoc()): ?>	
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
					<?php if(!empty($Attributs['TeamViewerID'])): ?><li class="list-group-item"> <?php echo "TeamViewerID : ".$Attributs['TeamViewerID'] ?></li><?php endif ?>
					<?php if(!empty($Attributs['TeamViewerPW'])): ?> <li class="list-group-item"> <?php echo "TeamViewerPW : ".$Attributs['TeamViewerPW'] ?></li><?php endif ?>
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
	</body>
	</html>
	<?php endwhile;	?>
	<?php
}
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
function envoiMail($sujet,$objet,$cc_email,$MailDestinataires) {
	/* Exception class. */
	require 'C:\wamp64\www\PHPMailer\src\Exception.php';
	/* The main PHPMailer class. */
	require 'C:\wamp64\www\PHPMailer\src\PHPMailer.php';
	/* SMTP class, needed if you want to use SMTP. */
	require 'C:\wamp64\www\PHPMailer\src\SMTP.php';

	$mail = new PHPMailer(TRUE);
	try {

	    //Server settings
	    $mail->SMTPDebug = 0;                                     // Enable verbose debug output
	    $mail->isSMTP(); 
	    //$mail->Host       = 'zimbra.ceciaa.com';                                  // Set mailer to use SMTP
	    $mail->Host       = 'smtp.gmail.com';                     // Specify main and backup SMTP servers
	    $mail->SMTPAuth   = true;                                 // Enable SMTP authentication
	    $mail->Username   = 'nuzzo.marcel@gmail.com';             // SMTP username
	    $mail->Password   = 'marcel316497';                       // SMTP password
	    $mail->SMTPSecure = 'ssl';                                // Enable TLS encryption, `ssl` also accepted
	    $mail->Port       = 465;                                  // TCP port to connect to

	    //Recipients
	    $mail->CharSet = 'UTF-8'; 
	    $mail->setFrom($cc_email);
	    /*
	    foreach ($MailDestinataires as $tab) {
	    	$mail->addAddress($tab); 
	    }
	    */
	    //$mail->addAddress($MailDestinataires);           // Add a recipient
$mail->addAddress('nuzzo.marcel@aliceadsl.fr');                   //adresse de test Marcel Nuzzo    
	    //$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC($MailDestinataires);
	    //$mail->addBCC('bcc@example.com');

	    // Attachments  (pièces jointes)
	    //$mail->addAttachment('/var/tmp/file.tar.gz');           // Add attachments
	    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');      // Optional name

	    // Content
	    $mail->isHTML(true);                                      // Set email format to HTML
	    $mail->Subject = $sujet;
	    $mail->Body    = $objet;
	    $mail->AltBody = $objet;

	    $mail->send();
	    
	} catch (Exception $e) {
	    echo "Le message n'a pas pu être envoyé. Mailer Error: {$mail->ErrorInfo}";
	}
}
?>
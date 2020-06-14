<?php
if(!isset($_SESSION)) 
{ 
    session_start(); 
} 

setlocale(LC_TIME, 'fr-FR.UTF8','fra'); 
date_default_timezone_set('Europe/Paris');

	    $mysqli = new mysqli('localhost','root','','bddscceciaa') ;

	  	if ($mysqli->connect_errno) {
		    printf("Echec de la connexion : %s\n", $mysqli->connect_error);
		    exit();
		}
		
$Nom='';
$ID='';
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
$Erreur='';
$bouton='';
$Check='';
$Date='';
$cc_dest_mail='';
$Destinataires='';
$_SESSION["maj"]=false;		
$_SESSION['Messagedemiseajour']=False;
//$_SESSION["Objet"]="";		
//Fonction pour supprimer les accents dans le champ destinataires
function str_to_noaccent($DestInfo)
{
    $DestInfo = preg_replace('#Ç#', 'C', $DestInfo);
    $DestInfo = preg_replace('#ç#', 'c', $DestInfo);
    $DestInfo = preg_replace('#è|é|ê|ë#', 'e', $DestInfo);
    $DestInfo = preg_replace('#È|É|Ê|Ë#', 'E', $DestInfo);
    $DestInfo = preg_replace('#à|á|â|ã|ä|å#', 'a', $DestInfo);
    $DestInfo = preg_replace('#À|Á|Â|Ã|Ä|Å#', 'A', $DestInfo);
    $DestInfo = preg_replace('#ì|í|î|ï#', 'i', $DestInfo);
    $DestInfo = preg_replace('#Ì|Í|Î|Ï#', 'I', $DestInfo);
    $DestInfo = preg_replace('#ð|ò|ó|ô|õ|ö#', 'o', $DestInfo);
    $DestInfo = preg_replace('#Ò|Ó|Ô|Õ|Ö#', 'O', $DestInfo);
    $DestInfo = preg_replace('#ù|ú|û|ü#', 'u', $DestInfo);
    $DestInfo = preg_replace('#Ù|Ú|Û|Ü#', 'U', $DestInfo);
    $DestInfo = preg_replace('#ý|ÿ#', 'y', $DestInfo);
    $DestInfo = preg_replace('#Ý#', 'Y', $DestInfo);
    return ($DestInfo);
}
//Fonction pour supprimer les espaces devant et derrière dans le champ destinataires
function EspaceFilter($String){
	$String=preg_replace('/^\s+/', '', $String);
	$String=preg_replace('/\s+$/', '', $String);
	return $String;
}
//Fonction de vérification de la compilation du formulaire.
function verif($bouton) {
	if (isset($_POST[$bouton])and(!empty($_POST))) {
		$Nom = EspaceFilter($_POST['Nom']);
		$tailleNom=strlen($Nom);
		$Prenom = EspaceFilter($_POST['Prenom']);
		$taillePrenom=strlen($Prenom);
		//$Tel = EspaceFilter($_POST['Tel']);
		//$Mail = EspaceFilter($_POST['Mail']);
		$Contact = EspaceFilter($_POST['Contact']);
		$TeamViewerID = EspaceFilter($_POST['TeamViewerID']);
		$TeamViewerPW = EspaceFilter($_POST['TeamViewerPW']);
		$RDV = EspaceFilter($_POST['RDV']);
		$Objet = EspaceFilter($_POST['Objet']);
		$Check=EspaceFilter($_POST['Check']);
		$Destinataires=EspaceFilter($_POST['Destinataires']);
		$MessageDebug='';
		$Erreur=''; 
		$_SESSION["Nom"]='';
		$_SESSION["Prenom"]='';
		$_SESSION["Tel"]='';
		$_SESSION["Mail"]='';
		$_SESSION["Contact"]='';
		$_SESSION["Objet"]='';
		$_SESSION["TeamViewerID"]='';
		$_SESSION["TeamViewerPW"]='';
		$_SESSION["Destinataires"]='';
		$_SESSION["RDV"]='';
		//$_SESSION["MailDestinataires"]='';
		$_SESSION["MailDest"]='';
		$_SESSION['Messagedemiseajour']=False;
		//On vérifie la compilation du formulaire en récupérant ceux qui sont bien remplis.
		//On vérifie que l'un des 2 champs, nom ou prénom, soit rempli.
		if ((!empty($Nom)) Or (!empty($Prenom))) {
                $_SESSION["Nom"]=$Nom;
                $_SESSION["Prenom"]=$Prenom;            
		} else {
				$Erreur='Entrez un nom ou un prénom';
				$MessageDebug=$MessageDebug." , ".$Erreur;
			}
		//On vérifie que ces 2 champs ne comprennent pas plus que 50 caractères. 
		if ($tailleNom > 50) { 
				$Erreur='Le nom ne doit pas dépasser 50 caractères';
				$_SESSION["Nom"]="";
				$MessageDebug=$MessageDebug." , ".$Erreur;
			} 
		if($taillePrenom > 50) {
				$Erreur='Le prénom ne doit pas dépasser 50 caractères';
				$_SESSION["Prenom"]="";
				$MessageDebug=$MessageDebug." , ".$Erreur;
			}

		if(!empty($Contact)) {
			if(preg_match('/^\d{1,10}$/mix',$Contact)) {
				if(preg_match('/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/mix', $Contact)) {
					$_SESSION["Tel"]=$Contact;
				}
				else {
					$Erreur="le numéro de téléphone est invalide ";
					$MessageDebug=$MessageDebug." , ".$Erreur;
				}
			}
			else if(!preg_match('/^\d{1,10}$/mix',$Contact)) {
				if(preg_match('/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/', $Contact)) {
					$_SESSION["Mail"]=$Contact;
				}
				else {
					$Erreur="L'E-Mail est invalide ";
					$MessageDebug=$MessageDebug." , ".$Erreur;
				}
			}		
		}
		else {
			$Erreur="Vous devez renseigner au moins un E-Mail ou un téléphone";
			$MessageDebug=$MessageDebug." , ".$Erreur;
		}	
		if(!empty($TeamViewerID) Or !empty($TeamViewerPW)) {
				$_SESSION["TeamViewerID"]=$TeamViewerID;
				$_SESSION["TeamViewerPW"]=$TeamViewerPW;
			}
		if(!empty($RDV)) {
				$_SESSION["RDV"]=$RDV;
			}
		if (!empty($Objet)) {
				$_SESSION["Objet"]=$Objet;
		}else {
				$Erreur='Vous devez renseigner un objet';
				$MessageDebug=$MessageDebug." , ".$Erreur;
			}
		//Si le champ destinataire est rempli, alors on envoi qu'à ces chargés client.
		if(!empty($Destinataires)) {
			$mysqli = new mysqli('localhost','root','','bddscceciaa') ;
			if ($mysqli->connect_errno) {
			    printf("Echec de la connexion : %s\n", $mysqli->connect_error);
			    exit();
			}
			$MailDest0=str_to_noaccent($Destinataires);
			$MailDest=explode(',', $MailDest0);
			$MailDestinataires='';
			//$tabMail, tableau pour 
			$tabMail=array();
			for($i=0; $i<count($MailDest); $i++) {
				$MailDest[$i]=preg_replace('/^\s+/', '', $MailDest[$i]);
				$MailDest[$i]=preg_replace('/\s+$/', '', $MailDest[$i]);
				//$result = $mysqli->query("SELECT * FROM chargeclient WHERE CONCAT(cc_nom, cc_prenom) LIKE '%$MailDest[$i]'");
				$result = $mysqli->query("SELECT * FROM chargeclient WHERE cc_prenom like '%$MailDest[$i]%' or cc_nom like '%$MailDest[$i]%'");	
					$ResultatsMail = $result->fetch_assoc();
					$MailDestinataires=$ResultatsMail["cc_email"].",".$MailDestinataires;
					$tabMail[$i]=$ResultatsMail["cc_email"];
			}
				$MailDestinataires=preg_replace('/^,/', '', $MailDestinataires);
				$MailDestinataires=preg_replace('/,$/', '', $MailDestinataires);
				$_SESSION["MailDestinataires"]=$MailDestinataires;
				$_SESSION["tabMail"]=$tabMail;
				$_SESSION["MailDest"]=$MailDest;
				$_SESSION["Destinataires"]=$Destinataires;
			if ($_POST['Destinataires']=='tous') {
				$mysqli = new mysqli('localhost','root','','bddscceciaa') ;
			if ($mysqli->connect_errno) {
			    printf("Echec de la connexion : %s\n", $mysqli->connect_error);
			    exit();
			}
				$result = $mysqli->query("SELECT * FROM chargeclient");
				$MailDestinataires='';
				$tab2Mail=array();
				foreach ( $result as $info_cc_client) { 
					extract($info_cc_client);
					$tab2Mail[]=$info_cc_client["cc_email"];
					$MailDestinataires=$info_cc_client["cc_email"].",".$MailDestinataires;
				}
				$_SESSION["MailDestinataires"]=$MailDestinataires;
				$_SESSION["tabMail"]=$tab2Mail;
			}
		//Si le champ destinataire est vide et la case pour l'envoi cochée, alors on envoi à tout les chargés client.
		} 

		//Si la vérification du formulaire est OK.
		if ($MessageDebug=='') {
		 	return True; 
		//Sinon, retour au formulaire avec les messages d'erreurs
		}else{ 
		 	$_SESSION["MessageDebug"]=$MessageDebug;
		 	$_SESSION["Type"]='danger';
			header('Location: accueil.php');
		} 
	}
}

//Enregistrement pour le bouton enregistrer.
if (verif('Enregistrer')==True){
		$_SESSION["majConf"]=false;
		$Nom = $_POST['Nom'];
		$Prenom = $_POST['Prenom'];
		//$Tel = $_POST['Tel'];
		//$Mail = $_POST['Mail'];
		$Tel = $_SESSION['Tel'];
		$Mail = $_SESSION['Mail'];
		//$Contact = $_POST['Contact'];
		$TeamViewerID = $_POST['TeamViewerID'];
		$TeamViewerPW = $_POST['TeamViewerPW'];
		$RDV = $_POST['RDV'];
		$Objet = $_POST['Objet'];
		$Destinataires = $_POST["Destinataires"];
		$Date = date("d-m-Y");
		$_SESSION['Nom']=$Nom;
		$_SESSION['Prenom']=$Prenom;
		$_SESSION['Tel']=$Tel;
		$_SESSION['Mail']=$Mail;
		$_SESSION['Contact']=$Contact;
		$_SESSION['TeamViewerID']=$TeamViewerID;
		$_SESSION['TeamViewerPW']=$TeamViewerPW;
		$_SESSION["RDV"]=$RDV;
		$_SESSION["Objet"]=$Objet;
				$IdPoste=$_SESSION['cc_id'];
				$result = $mysqli->query("SELECT * FROM chargeclient WHERE cc_idposte ='$IdPoste'");
			  	$attributs = $result->fetch_assoc();
				$cc_nom =$attributs['cc_nom'];
				$cc_prenom =$attributs['cc_prenom'];
				$cc_telint =$attributs['cc_telint'];
				$cc_portable =$attributs['cc_portable'];
				$cc_email=$attributs['cc_email'];
				$_SESSION['cc_email']=$attributs['cc_email'];
				$_SESSION['cc_nom']=$cc_nom;
				$_SESSION['cc_prenom']=$cc_prenom;
				//$_SESSION['MailDestinataires']='';
		$mysqli->query("INSERT INTO client (Nom,Prenom,Tel,Mail,TeamViewerID,TeamViewerPW,RDV,Objet,cc_nom,cc_prenom,cc_telint,cc_portable,cc_email,Date) VALUES('$Nom','$Prenom','$Tel','$Mail','$TeamViewerID','$TeamViewerPW','$RDV','$Objet','$cc_nom','$cc_prenom','$cc_telint','$cc_portable','$cc_email','$Date')");
	header("Location: accueil.php");	
		$_SESSION["MessageDebug"]='le formulaire a bien été enregistré';		
}

//Enregistrement pour le bouton mise à jour
if (verif('Mise_a_jour')==True) {
		$Miseajour=true;
		$_SESSION['Messagedemiseajour']=True;
		$ID = $_SESSION['ID'];
		$Nom = $_POST['Nom'];
		$Prenom = $_POST['Prenom'];
		//$Tel = $_POST['Tel'];
		//$Mail = $_POST['Mail'];
		$Tel = $_SESSION['Tel'];
		$Mail = $_SESSION['Mail'];
		$Contact=$_SESSION['Contact'];
		$TeamViewerID = $_POST['TeamViewerID'];
		$TeamViewerPW = $_POST['TeamViewerPW'];
		$RDV = $_POST['RDV'];
		$Objet = $_POST['Objet'];
		$Check= $_POST['Check'];
		$Destinataires=$_POST['Destinataires'];
		$Date = date("d-m-Y");
				$IdPoste=$_SESSION['cc_id'];
				$result = $mysqli->query("SELECT * FROM chargeclient WHERE cc_idposte ='$IdPoste'");
			  	$attributs = $result->fetch_assoc();
				$cc_nom =$attributs['cc_nom'];
				$cc_prenom =$attributs['cc_prenom'];
				$cc_telint =$attributs['cc_telint'];
				$cc_portable =$attributs['cc_portable'];
				$cc_email=$attributs["cc_email"];
				$_SESSION['cc_email']=$cc_email;
				$_SESSION['cc_nom']=$cc_nom;
				$_SESSION['cc_prenom']=$cc_prenom;

		$mysqli->query("UPDATE client SET Nom='$Nom', Prenom='$Prenom', Tel='$Tel', Mail='$Mail', TeamViewerID='$TeamViewerID', TeamViewerPW='$TeamViewerPW', RDV='$RDV', Objet='$Objet', cc_nom='$cc_nom', cc_prenom='$cc_prenom', cc_telint='$cc_telint', cc_portable='$cc_portable', cc_email='$cc_email', Date='$Date' WHERE ID =$ID");

	header("Location: accueil.php");
		$_SESSION["MessageDebug"]='Mise à jour réussie !';
		$_SESSION["majConf"]=false;	
}

//Annulation lors de la mise à jour.			
if (isset($_POST['Annuler'])){
	header("Location: accueil.php");
	$Miseajour=False;
	$_SESSION['majConf']=false;
	$_SESSION['maj']=false;
	$_SESSION["Messagedemiseajour"]=False;
} 
?>
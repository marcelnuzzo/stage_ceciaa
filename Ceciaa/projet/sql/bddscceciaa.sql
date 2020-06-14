-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  mar. 02 juil. 2019 à 09:21
-- Version du serveur :  5.7.26
-- Version de PHP :  7.2.18
CREATE DATABASE IF NOT EXISTS bddscceciaa DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE bddscceciaa;

SET FOREIGN_KEY_CHECKS=0;

--
-- Base de données :  `bddscceciaa`
--

-- --------------------------------------------------------

--
-- Structure de la table `chargeclient`
--

DROP TABLE IF EXISTS `chargeclient`;
CREATE TABLE IF NOT EXISTS `chargeclient` (
  `cc_id` int(11) NOT NULL AUTO_INCREMENT,
  `cc_nom` varchar(250) DEFAULT NULL,
  `cc_prenom` varchar(50) DEFAULT NULL,
  `cc_idposte` varchar(15) DEFAULT NULL,
  `cc_telint` varchar(15) DEFAULT NULL,
  `cc_portable` varchar(50) DEFAULT NULL,
  `cc_email` varchar(50) NOT NULL,
  PRIMARY KEY (`cc_id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `chargeclient`
--

INSERT INTO `chargeclient` (`cc_id`, `cc_nom`, `cc_prenom`, `cc_idposte`, `cc_telint`, `cc_portable`, `cc_email`) VALUES
(1, 'NUZZO', 'Marcel', '7HV', '', '', 'nuzzo.marcel@ceciaa.com'),
(2, 'AUGAUDY', 'Jean Luc', '100', '0143621462', '0677243553', 'direction@ceciaa.com'),
(3, 'CANDOTTI', 'Gilles', '105', '0143621474', '0681364210', 'gilles.candotti@ceciaa.com'),
(4, 'VON', 'Flora', '113', '0143621457', '0143621457', 'flora.von@ceciaa.com '),
(5, 'DELAYEN (THOMAS)', 'Aurélie', 'null', '0951298287', 'null', 'aurelie.thomas@ceciaa.com'),
(6, 'LEVY (OUEZMANE)', 'Aurélie', '101', '0143621462', 'null', 'aurelie.ouezmane@ceciaa.com'),
(7, 'JAYASEELAN', 'Jeromy', '108', '0143621462', 'null', 'jeromy.jayaseelan@ceciaa.com'),
(8, 'NEAULT', 'Valérie', '104', '0143621461', 'null', 'valerie.neault@ceciaa.com'),
(10, 'PEREIRA', 'Nelson', '115', '0143621452', '0603490120', 'nelson.pereira@ceciaa.com '),
(11, 'GERARD', 'Kevin', '114', '0143621467', 'null', 'kevin.gerard@ceciaa.com'),
(12, 'SOOSAIPILLAI', 'Andrew', '112', '0143621456', 'null', 'comptabilite@ceciaa.com'),
(13, 'LE ROUX', 'Mallorie', '203', '0143621468', 'null', 'mallorie.le.roux@ceciaa.com'),
(14, 'PILLAULT', 'Virginie', '121', '0143621468', 'null', 'virginie.pillault@ceciaa.com'),
(15, 'TAVARES', 'Philippe', '146', '0143621468', 'null', 'philippe.tavares@ceciaa.com'),
(16, 'PEREIRA', 'Antonio', '118', '0143621471', 'null', 'antonio.pereira@ceciaa.com'),
(17, 'YOUSFI', 'Nassim', '116', '0143621458', 'null', 'nassim.yousfi@ceciaa.com'),
(18, 'BARBARY', 'Stéphanie', '143', '0143621462', '0781752587', 'stephanie.barbary@ceciaa.com'),
(19, 'GARNICHAT', 'Sandrine', '122', '0143621462', '0695420135', 'sandrine.garnichat@ceciaa.com'),
(20, 'MACABREY', 'Isabelle', '128', '0143621462', '0607262758', 'isabelle.macabrey@ceciaa.com'),
(21, 'PERIES', 'Catherine', '120', '0143621470', '0679153945', 'catherine.peries@ceciaa.com'),
(22, 'FOLLEA', 'Benoît', '106', '0143621469', 'null', 'benoit.follea@ceciaa.com'),
(23, 'MERCIER', 'Alessandra', '205', '0143621459', '0612492801', 'alessandra.mercier@ceciaa.com'),
(24, 'LEVERT', 'Sébastien', '109', '0143621463', 'null', 'sebastien.levert@ceciaa.com'),
(25, 'FERON', 'Emmanuel', 'null', '0686610177', 'null', 'emmanuel.feron@ceciaa.com'),
(26, 'BITAN', 'Eveline', '107', '0607091548', 'null', 'eveline.bitan@ceciaa.com'),
(27, 'CRESPY', 'Olivier', 'null', '0682989071', 'null', 'olivier.crespy@ceciaa.com'),
(28, 'LEFEBVRE', 'Ingrid', 'null', '0660495225', 'null', 'ceciaa.lille@ceciaa.com'),
(29, 'BEKAERT', 'Brigitte', '127', '0143621451', 'null', 'marches.publics@ceciaa.com'),
(30, 'SHAHMIRIAN', 'Lévik', '154', '0143621465', 'null', 'levik.shahmirian@ceciaa.com'),
(63, 'CERUTTI', 'Ludovic', '172', '01 43 62 14 65', NULL, 'service.informatique@ceciaa.com'),
(65, 'SERVAN', 'Jason', '210', '01 43 62 14 65', NULL, 'stagiaire@ceciaa.com'),
(66, 'BOUCHAUD', 'Hélène', NULL, '09 61 31 01 95', NULL, 'helene.bouchaud@ceciaa.com'),
(67, 'ASSOUS', 'Nathalie', '312', '01 60 43 61 45', NULL, 'n.assous@acceciaa.com'),
(68, 'CHMIELINSKI', 'Andrzej', NULL, NULL, '07 76 95 86 73', 'a.chmielinski@acceciaa.com'),
(69, 'COSSON', 'Christophe', NULL, '01 60 43 61 46', '06 79 48 61 61', 'c.cosson@acceciaa.com'),
(70, 'FOULHOUX', 'Anne-Charlotte', NULL, '01 60 43 61 45', '06 79 48 48 80', 'ac.foulhoux@acceciaa.com'),
(72, 'SEGUIN', 'Clément', NULL, '01 60 43 61 45', '07 73 32 07 66', 'c.seguin@acceciaa.com'),
(74, 'ATHMANI', 'Driffa', NULL, '04 78 60 73 29', '06 08 25 09 69', 'ceciaa.lyon@ceciaa.com'),
(75, 'BLANCHARD', 'Nicolas', NULL, NULL, '07 66 53 68 62', 'nicolas.blanchard@ceciaa.com'),
(76, 'PECCHIA', 'Antoine', NULL, '04 91 33 95 91', '06 79 48 64 48', 'ceciaa.marseille@ceciaa.com'),
(77, 'PONCET', 'Sandra', NULL, NULL, '07 76 36 65 20', 'sandra.poncet@ceciaa.com'),
(78, 'DO', 'Bao', NULL, '01 48 35 68 71', NULL, 'bao.do@ceciaa.com'),
(79, 'Gomes', 'Marc', NULL, '01 48 35 68 71', NULL, 'marc.gomes@ceciaa.com'),
(80, 'Brunot', 'Willy', NULL, '01 48 35 68 70', NULL, 'willy.brunot@ceciaa.fr'),
(81, 'MENDES', 'Isma', NULL, '01 48 35 68 70', NULL, 'isma.mendes@ceciaa.com'),
(82, 'HAMADI', 'Mohamed', NULL, '01 48 35 68 70', NULL, 'mohamed,hamadi@ceciaa,com'),
(83, 'SOUPRAYEN', 'Holridson', NULL, '01 48 35 68 70', NULL, 'holridson.souprayen@ceciaa.com'),
(84, 'BRIMBAL', 'Michel', NULL, '01 55 26 91 19', '06 07 82 58 49', 'm.brimbal@eurobraille.com'),
(85, 'CONSUEGRA', 'Kévin', NULL, '01 55 26 91 15', NULL, 'k.consuegra@eurobraille.com'),
(86, 'DOLISY', 'Luc', NULL, '01 55 26 91 15', NULL, 'l.dolisy@eurobraille.com'),
(87, 'FLIPO', 'Pierre', NULL, '01 55 26 91 05', NULL, 'p.flipo@eurobraille.com'),
(88, 'MARTIN', 'François ', NULL, '09 52 08 63 76', NULL, 'f.martin@eurobraille.com'),
(89, 'ETIENNE', 'Maxime', NULL, '01 55 26 91 15', NULL, 'm.etienne@eurobraille.com'),
(90, 'POITOU', 'Didier', NULL, '01 55 26 91 12', NULL, 'd.poitou@eurobraille.com'),
(91, 'RICQ', 'Laurent', NULL, '03 20 05 49 60', '06 77 26 59 39', 'l.ricq@eurobraille.com'),
(92, 'ROUX', 'Elsa', NULL, '01 55 26 91 01', '06 66 77 81 10', 'e.roux@eurobraille.com'),
(93, 'ROUX', 'Jean Martial', NULL, '01 55 26 91 03', '06 82 98 91 37', 'jm.roux@eurobraille.com'),
(94, 'SIDA', 'Christina ', '129', '01 43 62 12 06', NULL, 'c.sida@unitedvision.fr'),
(95, 'FOUCQUE', 'Christophe', '202', NULL, '06 82 59 54 32', 'c.foucque@unitedvision.fr'),
(96, 'GARNIER', 'Jean-Luc', '207', NULL, '06 76 73 14 20 ', 'j.garnier@unitedvision.fr'),
(97, ' LASTRADE', 'Philippe', '207', NULL, '06 76 70 38 72', 'p.lastrade@unitedvision.fr'),
(98, 'TACQUET', 'Christophe ', NULL, NULL, '06 77 24 23 89', 'c.tacquet@unitedvision.fr'),
(99, 'HAMELIN', 'Magalie', NULL, '01 44 69 89 89', '06 65 72 17 30', 'magalie.hamelin@axos.eu'),
(100, 'JARDIN', 'Alexandre', NULL, '01 44 69 89 89', '06 83 77 21 85', 'alexandre.jardin@axos.eu');

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

DROP TABLE IF EXISTS `client`;
CREATE TABLE IF NOT EXISTS `client` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Nom` varchar(50) DEFAULT NULL,
  `Prenom` varchar(50) DEFAULT NULL,
  `Tel` varchar(50) DEFAULT NULL,
  `Mail` varchar(50) DEFAULT NULL,
  `TeamViewerID` varchar(50) DEFAULT NULL,
  `TeamViewerPW` varchar(50) DEFAULT NULL,
  `RDV` varchar(50) DEFAULT NULL,
  `Objet` longtext,
  `cc_nom` varchar(50) DEFAULT NULL,
  `cc_prenom` varchar(50) NOT NULL,
  `cc_telint` varchar(50) NOT NULL,
  `cc_portable` varchar(50) NOT NULL,
  `cc_email` varchar(100) NOT NULL,
  `Date` varchar(50) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=302 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `client`
--
/*
INSERT INTO `client` (`ID`, `Nom`, `Prenom`, `Tel`, `Mail`, `TeamViewerID`, `TeamViewerPW`, `RDV`, `Objet`, `cc_nom`, `cc_prenom`, `cc_telint`, `cc_portable`, `cc_email`, `Date`) VALUES
(296, '    Gainsbourg   ', '    Serge    ', '0123456789', 'nuzzo.marcel@aliceadsl.fr', 'qregzrg', 'zerghae', '1 Janvier 2020', 'llllllllllllllllllllllllllkjhfkjfgjhdjhdjthd', 'YOUSFI', 'Nassim', '0143621458', 'null', 'nassim.yousfi@ceciaa.com', '01-07-2019 11:52:23');
SET FOREIGN_KEY_CHECKS=1;
COMMIT;
*/


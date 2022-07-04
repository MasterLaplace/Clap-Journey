-- --------------------------------------------------------
-- Hôte :                        127.0.0.1
-- Version du serveur:           5.7.11 - MySQL Community Server (GPL)
-- SE du serveur:                Win64
-- HeidiSQL Version:             9.2.0.4961
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Export de la structure de la base pour chat
CREATE DATABASE IF NOT EXISTS 'chat' /*!40100 DEFAULT CHARACTER SET utf8 */;
USE 'chat';

-- Export de la structure de table chat. messages
CREATE TABLE IF NOT EXISTS 'messages' (
  'id' int(11) NOT NULL AUTO_INCREMENT,
  'author' varchar(50) DEFAULT NULL,
  'content' text,
  'created_at' datetime DEFAULT NULL,
  PRIMARY KEY ('id')
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT='All messages !';

-- Export de données de la table chat.messages : 46 rows
DELETE FROM 'messages';
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO 'messages' ('id', 'author', 'content', 'created_at') VALUES
	(1, 'Me', 'First Message.', '2022-07-3 17:32:00');
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
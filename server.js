var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');


const mysqldump = require('mysqldump')

mysqldump({
    connection: {
        host: 'ds031711.mlab.com',
        user: 'angular-node-server-db',
        port: '31711',
        password: '1234abcd5678',
        database: 'heroku_10j4c4gx',
    },
    dumpToFile: './dump.sql',
})



const sql = `CREATE DATABASE  IF NOT EXISTS \`heroku_b9591a250142bf1\` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE \`heroku_b9591a250142bf1\`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: us-cdbr-iron-east-04.cleardb.net    Database: heroku_b9591a250142bf1
-- ------------------------------------------------------
-- Server version	5.5.56-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table \`course\`
--

DROP TABLE IF EXISTS \`course\`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE \`course\` (
  \`id\` int(11) NOT NULL AUTO_INCREMENT,
  \`created\` datetime DEFAULT NULL,
  \`modified\` datetime DEFAULT NULL,
  \`title\` varchar(255) DEFAULT NULL,
  PRIMARY KEY (\`id\`)
) ENGINE=MyISAM AUTO_INCREMENT=273 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table \`course\`
--

LOCK TABLES \`course\` WRITE;
/*!40000 ALTER TABLE \`course\` DISABLE KEYS */;
INSERT INTO \`course\` VALUES (222,NULL,'2018-07-23 13:26:15','CS4500'),(162,NULL,'2018-07-17 17:39:13','CS6500'),(172,NULL,'2018-07-17 17:39:19','CS4510'),(202,NULL,'2018-07-17 22:46:08','WebDev'),(192,NULL,'2018-07-17 22:20:39','CS6200');
/*!40000 ALTER TABLE \`course\` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table \`lesson\`
--

DROP TABLE IF EXISTS \`lesson\`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE \`lesson\` (
  \`id\` int(11) NOT NULL AUTO_INCREMENT,
  \`title\` varchar(255) DEFAULT NULL,
  \`module_id\` int(11) DEFAULT NULL,
  PRIMARY KEY (\`id\`),
  KEY \`FK8ig5gt5ec58weexave6kdn2cv\` (\`module_id\`)
) ENGINE=MyISAM AUTO_INCREMENT=383 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table \`lesson\`
--

LOCK TABLES \`lesson\` WRITE;
/*!40000 ALTER TABLE \`lesson\` DISABLE KEYS */;
INSERT INTO \`lesson\` VALUES (102,'Introduction',132),(22,'React Introduction',72),(32,'Spring Boot',62),(42,'DOM Manipulation',62),(72,'Git Repositoy',62),(112,'DOM Manipulation',132),(122,'REST API',132),(132,'Git Repo',132),(142,'Lesson 1',182),(152,'Lesson 2',182),(162,'Introduction',202),(172,'DOM',202),(182,'REST',202),(202,'Heroku',202),(212,'Git',202),(262,'Spring API calls',202),(342,'New Lesson',432),(352,'New Lesson',212),(362,'l1',452),(382,'l5',452);
/*!40000 ALTER TABLE \`lesson\` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table \`module\`
--

DROP TABLE IF EXISTS \`module\`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE \`module\` (
  \`id\` int(11) NOT NULL AUTO_INCREMENT,
  \`title\` varchar(255) DEFAULT NULL,
  \`course_id\` int(11) DEFAULT NULL,
  PRIMARY KEY (\`id\`),
  KEY \`FKfq09oddpwjoxcirvkh9vnfnsg\` (\`course_id\`)
) ENGINE=MyISAM AUTO_INCREMENT=473 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table \`module\`
--

LOCK TABLES \`module\` WRITE;
/*!40000 ALTER TABLE \`module\` DISABLE KEYS */;
INSERT INTO \`module\` VALUES (2,'Module 7',72),(12,'module 6',72),(22,'module 5',72),(42,'Module 2',62),(52,'Module 3',62),(62,'JQuery',122),(72,'React',122),(82,'Redux',122),(92,'AngularJS',122),(122,'NodeJS',122),(132,'JQuery',142),(142,'React',142),(152,'REDUX',142),(162,'AngularJS',142),(172,'NodeJS',142),(182,'Module 1',182),(192,'Module 2',182),(202,'JQuery',202),(212,'React.js',202),(222,'Redux',202),(232,'Angular.js',202),(242,'Node.js',202),(312,'React Native',202),(432,'Module1',192),(442,'New Module',192);
/*!40000 ALTER TABLE \`module\` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table \`topic\`
--

DROP TABLE IF EXISTS \`topic\`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE \`topic\` (
  \`id\` int(11) NOT NULL AUTO_INCREMENT,
  \`title\` varchar(255) DEFAULT NULL,
  \`lesson_id\` int(11) DEFAULT NULL,
  PRIMARY KEY (\`id\`),
  KEY \`FKie3l7jgy01eohf5lyafc6qj1b\` (\`lesson_id\`)
) ENGINE=MyISAM AUTO_INCREMENT=253 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table \`topic\`
--

LOCK TABLES \`topic\` WRITE;
/*!40000 ALTER TABLE \`topic\` DISABLE KEYS */;
INSERT INTO \`topic\` VALUES (2,'M1.1',102),(12,'M1.2',102),(42,'Topic1',142),(52,'M1.1',162),(102,'M1.2',162),(132,'New Topic',172),(142,'New Topic',342),(152,'M1.3',162),(172,'New Topic',352),(192,'t8',362),(202,'t7',362),(212,'Topic',262),(232,'Topic2',262),(242,'Topic 3',262),(252,'New Topic',212);
/*!40000 ALTER TABLE \`topic\` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table \`user\`
--

DROP TABLE IF EXISTS \`user\`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE \`user\` (
  \`id\` int(11) NOT NULL AUTO_INCREMENT,
  \`date_of_birth\` datetime DEFAULT NULL,
  \`email\` varchar(255) DEFAULT NULL,
  \`first_name\` varchar(255) DEFAULT NULL,
  \`last_name\` varchar(255) DEFAULT NULL,
  \`password\` varchar(255) DEFAULT NULL,
  \`phone\` varchar(255) DEFAULT NULL,
  \`role\` varchar(255) DEFAULT NULL,
  \`username\` varchar(255) DEFAULT NULL,
  PRIMARY KEY (\`id\`)
) ENGINE=MyISAM AUTO_INCREMENT=303 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table \`user\`
--

LOCK TABLES \`user\` WRITE;
/*!40000 ALTER TABLE \`user\` DISABLE KEYS */;
INSERT INTO \`user\` VALUES (182,'2018-07-05 00:00:00','dsfjs','','','jake','46546546546','STUDENT','josh'),(92,'2018-07-04 20:00:00','dsf@df.com','Jake','Dakota','jake','45446546546','FACULTY','jake'),(102,NULL,NULL,'admin','admin','admin',NULL,'ADMIN','admin'),(172,'1995-05-04 20:00:00','dsfsdf@df.com','Alice','Brown','','46516165','STUDENT','Alice'),(302,'2020-09-14 00:00:00','lnl@dsf.com','nl','lnl','njn','5646546','STUDENT','sf');
/*!40000 ALTER TABLE \`user\` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table \`widget\`
--

DROP TABLE IF EXISTS \`widget\`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE \`widget\` (
  \`id\` int(11) NOT NULL AUTO_INCREMENT,
  \`edit\` bit(1) NOT NULL,
  \`list_items\` varchar(255) DEFAULT NULL,
  \`ordered\` bit(1) NOT NULL,
  \`size\` varchar(255) DEFAULT NULL,
  \`src\` varchar(255) DEFAULT NULL,
  \`text\` varchar(255) DEFAULT NULL,
  \`name\` varchar(255) DEFAULT NULL,
  \`type\` varchar(255) DEFAULT NULL,
  \`topic_id\` int(11) DEFAULT NULL,
  \`title\` varchar(255) DEFAULT NULL,
  PRIMARY KEY (\`id\`),
  KEY \`FKk5kh2djrqfks59tt3nh5tu29b\` (\`topic_id\`)
) ENGINE=MyISAM AUTO_INCREMENT=1103 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table \`widget\`
--

LOCK TABLES \`widget\` WRITE;
/*!40000 ALTER TABLE \`widget\` DISABLE KEYS */;
INSERT INTO \`widget\` VALUES (742,'\\0',NULL,'\\0',NULL,'https://steemitimages.com/DQmQf3u1kMvYPvEjGniqQ2fnmqXCMFq7bGHQrW8P3Ua7pew/smile-01.jpg',NULL,'Smili','IMAGE',102,NULL),(732,'\\0',NULL,'\\0',NULL,'wwww.rt.ytryr',NULL,'errrere','LINK',102,NULL),(712,'\\0',NULL,'\\0',NULL,NULL,'Hiiiiiiiiiiiiiiiiii','Para','PARAGRAPH',102,NULL),(722,'\\0',NULL,'\\0','1',NULL,'Good Morning','Heading 1','HEADING',102,NULL),(792,'\\0','a\\nb\\nc\\nd','\\0',NULL,NULL,NULL,NULL,'LIST',52,NULL),(782,'\\0',NULL,'\\0',NULL,NULL,'Helooooooooooooooooooooooooooooooo','hello','PARAGRAPH',52,NULL),(682,'\\0',NULL,'\\0','2',NULL,'Cats','H2 Cats','HEADING',152,NULL),(692,'\\0',NULL,'\\0','1','https://www.gettyimages.com/gi-resources/images/Embed/new/embed2.jpg',NULL,'Cat jumping','IMAGE',152,NULL),(772,'\\0',NULL,'\\0',NULL,'http://www.studentsoftheworld.info/sites/tv/img/8350_happy_face.jpg',NULL,'Smili','IMAGE',52,NULL),(762,'\\0',NULL,'\\0','1',NULL,'Helloo','H1','HEADING',52,NULL),(702,'\\0',NULL,'\\0','1','https://www.google.com','Google','Link to google','LINK',152,NULL),(752,'\\0',NULL,'\\0','1','https://farm1.staticflickr.com/928/43698960042_d1dfbc1121_b.jpg',NULL,'Earth','IMAGE',172,NULL),(802,'\\0',NULL,'\\0','1','https://www.google.com','Google','Link','LINK',52,NULL),(812,'\\0',NULL,'\\0','1','https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Nasa_blue_marble.jpg/250px-Nasa_blue_marble.jpg',NULL,'earth','IMAGE',52,NULL),(822,'\\0','a\\nb\\nc','',NULL,NULL,NULL,'List','LIST',52,NULL),(1072,'\\0',NULL,'\\0','1',NULL,'Heading 1','w1','HEADING',232,NULL),(1082,'\\0',NULL,'\\0','1',NULL,'New widget',NULL,'PARAGRAPH',232,NULL),(1092,'\\0',NULL,'\\0','1',NULL,'H1','w1','HEADING',242,NULL),(1052,'\\0',NULL,'\\0','1','https://my.northeastern.edu/','Blackboard','w4','LINK',212,NULL),(1032,'\\0','Create github repository link\\nSubmit on blackboard','\\0','1',NULL,'Create github repository link','w3','LIST',212,NULL),(1042,'\\0',NULL,'\\0','1',NULL,'Assignment 1','w1','HEADING',212,NULL),(1102,'\\0',NULL,'\\0','1',NULL,NULL,NULL,'IMAGE',252,NULL);
/*!40000 ALTER TABLE \`widget\` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-11-30 11:38:38
`;



var sql2json = require('./sqltojson');
var tables = sql2json.convert(sql);



var app = express();
app.use(function(req, res, next) {
    // res.header("Access-Control-Allow-Origin", "https://webdev-angular-client-4.herokuapp.com");
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", 'PUT, POST, GET, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'any string'
}));

app.get('/', function(req, res) {
    res.send('Hello World!')
});



app.listen(process.env.PORT || 3000)
app.listen(4000);

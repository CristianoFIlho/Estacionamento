-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: estacionamento
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cliente` (
  `cliente_id` varchar(12) NOT NULL,
  `nome` varchar(15) NOT NULL,
  `rg` int NOT NULL,
  `Veiculo_veiculo_id` smallint unsigned NOT NULL,
  `Ocorrencia_id_ocorencia` smallint unsigned NOT NULL,
  PRIMARY KEY (`cliente_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='Table storing all customers. Holds foreign keys to the address table and the store table where this customer is registered.\n\nBasic information about the customer like first and last name are stored in the table itself. Same for the date the record was created and when the information was last updated.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `desocupacao`
--

DROP TABLE IF EXISTS `desocupacao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `desocupacao` (
  `desocupacao_id` smallint unsigned NOT NULL AUTO_INCREMENT,
  `Veiculo_veiculo_id` smallint unsigned NOT NULL,
  `data_saida` date NOT NULL,
  `valor_cobrado` double NOT NULL,
  PRIMARY KEY (`desocupacao_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='Table storing all customers. Holds foreign keys to the address table and the store table where this customer is registered.\n\nBasic information about the customer like first and last name are stored in the table itself. Same for the date the record was created and when the information was last updated.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `desocupacao`
--

LOCK TABLES `desocupacao` WRITE;
/*!40000 ALTER TABLE `desocupacao` DISABLE KEYS */;
/*!40000 ALTER TABLE `desocupacao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ocorrencia`
--

DROP TABLE IF EXISTS `ocorrencia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ocorrencia` (
  `id_ocorencia` smallint unsigned NOT NULL AUTO_INCREMENT,
  `OrderNumber` varchar(10) NOT NULL,
  `last_update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `OrderDate` date DEFAULT NULL,
  `tipo_ocorrencia` varchar(45) DEFAULT NULL,
  `usuario_id_usuario` smallint unsigned NOT NULL,
  PRIMARY KEY (`id_ocorencia`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ocorrencia`
--

LOCK TABLES `ocorrencia` WRITE;
/*!40000 ALTER TABLE `ocorrencia` DISABLE KEYS */;
/*!40000 ALTER TABLE `ocorrencia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ocupacao`
--

DROP TABLE IF EXISTS `ocupacao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ocupacao` (
  `desocupacao_id` smallint unsigned NOT NULL AUTO_INCREMENT,
  `data_entrada` date NOT NULL,
  `UnitPrice` decimal(12,0) NOT NULL,
  PRIMARY KEY (`desocupacao_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='Table storing all customers. Holds foreign keys to the address table and the store table where this customer is registered.\n\nBasic information about the customer like first and last name are stored in the table itself. Same for the date the record was created and when the information was last updated.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ocupacao`
--

LOCK TABLES `ocupacao` WRITE;
/*!40000 ALTER TABLE `ocupacao` DISABLE KEYS */;
/*!40000 ALTER TABLE `ocupacao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `preco`
--

DROP TABLE IF EXISTS `preco`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `preco` (
  `idPreco` int NOT NULL,
  `Data_Inicial` datetime NOT NULL,
  `Cliente_cliente_id` varchar(12) NOT NULL,
  `preco_cobrado` double NOT NULL,
  PRIMARY KEY (`idPreco`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `preco`
--

LOCK TABLES `preco` WRITE;
/*!40000 ALTER TABLE `preco` DISABLE KEYS */;
/*!40000 ALTER TABLE `preco` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id_usuario` smallint unsigned NOT NULL AUTO_INCREMENT,
  `telefone_func` varchar(11) NOT NULL,
  `tipo_perfil` varchar(20) NOT NULL,
  `login` varchar(20) NOT NULL,
  `senha` varchar(15) NOT NULL,
  `mat_func` varchar(12) NOT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vaga`
--

DROP TABLE IF EXISTS `vaga`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vaga` (
  `numero_id` varchar(12) NOT NULL,
  `setor` varchar(15) NOT NULL,
  `vaga_id` varchar(45) NOT NULL,
  `Ocupacao_desocupacao_id` smallint unsigned NOT NULL,
  `Desocupacao_desocupacao_id` smallint unsigned NOT NULL,
  PRIMARY KEY (`vaga_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='Table storing all customers. Holds foreign keys to the address table and the store table where this customer is registered.\n\nBasic information about the customer like first and last name are stored in the table itself. Same for the date the record was created and when the information was last updated.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vaga`
--

LOCK TABLES `vaga` WRITE;
/*!40000 ALTER TABLE `vaga` DISABLE KEYS */;
/*!40000 ALTER TABLE `vaga` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `veiculo`
--

DROP TABLE IF EXISTS `veiculo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `veiculo` (
  `id` smallint unsigned NOT NULL AUTO_INCREMENT,
  `ocorrencia_id_ocorencia` smallint unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `veiculo`
--

LOCK TABLES `veiculo` WRITE;
/*!40000 ALTER TABLE `veiculo` DISABLE KEYS */;
INSERT INTO `veiculo` VALUES (1,123),(2,5464);
/*!40000 ALTER TABLE `veiculo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'estacionamento'
--

--
-- Dumping routines for database 'estacionamento'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-17 20:17:38

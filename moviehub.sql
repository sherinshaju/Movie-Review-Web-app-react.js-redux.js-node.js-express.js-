-- phpMyAdmin SQL Dump
-- version 4.4.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Sep 19, 2019 at 12:58 PM
-- Server version: 5.6.26
-- PHP Version: 5.6.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `moviehub`
--

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE IF NOT EXISTS `comment` (
  `new` int(225) NOT NULL,
  `id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `comment` varchar(255) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`new`, `id`, `name`, `comment`) VALUES
(33, 1, 'qwqw', 'qwqw'),
(34, 1, 'sherin', 'shaju'),
(35, 2, 'as', 'asa'),
(36, 2, 'sdsads', 'das'),
(37, 2, 'shaju', 'sherin'),
(38, 2, 'ar', 'araeware'),
(39, 3, 'asdas', 'dasda'),
(40, 3, 'sherin', 'shjau'),
(41, 3, 'asd', 'asd'),
(42, 3, 'cvcvc', 'cvcvv'),
(43, 3, 'knight', 'man'),
(44, 1, 'as', 'heahe'),
(45, 1, 'sherin', 'huhhaa'),
(46, 2, 'hello', 'sdfasd'),
(47, 3, 'sherin shaju', 'wow grate movie'),
(48, 3, 'ajo mon', 'niz grate'),
(49, 1, 'sherin shaju', 'hello boys'),
(50, 3, 'thanveer', 'niz mvss'),
(51, 3, 'ajo mon', 'good at all'),
(52, 3, 'sa', 'asa');

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE IF NOT EXISTS `movies` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `cover` varchar(255) DEFAULT NULL,
  `des` varchar(255) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `image` varchar(225) DEFAULT NULL,
  `coverImage` varchar(225) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`id`, `name`, `cover`, `des`, `rating`, `time`, `image`, `coverImage`) VALUES
(1, 'Harley Quinn', 'Fictional superhero,Comic', 'Fictional superhero,Comic', 5, NULL, 'image/a1.jpg', 'image/cv-1.jpg'),
(2, 'Black panther', 'Marvel Comic', 'Black panther movie', 4, NULL, 'image/a2.jpg', 'image/cover-3.jpg'),
(3, 'Iron Man', 'Marvel Comic', 'Iron Man all ', 5, NULL, 'image/a3.jpg', 'image/cover-2.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `upcoming`
--

CREATE TABLE IF NOT EXISTS `upcoming` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `cover` varchar(255) DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `releasedata` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `upcoming`
--

INSERT INTO `upcoming` (`id`, `name`, `cover`, `time`, `releasedata`, `image`) VALUES
(1, 'How to train your Dragon', 'comic  action ', NULL, '01/05/2019', 'image/1.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`new`);

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `upcoming`
--
ALTER TABLE `upcoming`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `new` int(225) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=53;
--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `upcoming`
--
ALTER TABLE `upcoming`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

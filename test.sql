-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 09, 2017 at 10:37 AM
-- Server version: 5.7.18
-- PHP Version: 7.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `edit`
--

CREATE TABLE `edit` (
  `id` int(5) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `checkbox` tinyint(1) DEFAULT NULL,
  `select` varchar(20) DEFAULT NULL,
  `widgetid` int(5) DEFAULT NULL,
  `areaid` int(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `edit`
--

INSERT INTO `edit` (`id`, `title`, `checkbox`, `select`, `widgetid`, `areaid`) VALUES
(1, 'A11', NULL, NULL, 1, 1),
(2, NULL, NULL, NULL, 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `editpage`
--

CREATE TABLE `editpage` (
  `id` int(3) NOT NULL,
  `title` varchar(100) NOT NULL,
  `checkbox` varchar(10) NOT NULL,
  `select` varchar(20) NOT NULL,
  `widgetid` int(2) NOT NULL,
  `areaid` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `editpage`
--

INSERT INTO `editpage` (`id`, `title`, `checkbox`, `select`, `widgetid`, `areaid`) VALUES
(1, 'A11', 'false', 'milk', 1, 1),
(2, 'B12', 'true', 'mead', 2, 1),
(3, 'A13', 'true', 'water', 3, 1),
(4, 'B14', 'true', 'water', 4, 1),
(5, 'A15', 'true', 'water', 5, 1),
(6, 'A21', 'true', 'mead', 1, 2),
(7, 'A22', 'false', 'milk', 2, 2),
(8, 'A23', 'true', 'milk', 3, 2),
(9, 'A24', 'true', 'milk', 4, 2),
(10, 'A25', 'true', 'milk', 5, 2),
(11, 'A31', 'false', 'water', 1, 3),
(12, 'A32', 'true', 'water', 2, 3),
(13, 'A33', 'false', 'juice', 3, 3),
(14, 'VCC', 'false', 'water', 4, 3),
(15, 'A35', 'true', 'water', 5, 3),
(16, 'A41', 'true', 'water', 1, 4),
(17, 'A42', 'true', 'water', 2, 4),
(18, 'ADtech', 'false', 'water', 3, 4),
(19, 'A44', 'true', 'water', 4, 4),
(20, 'A45', 'true', 'water', 5, 4),
(21, 'A51', 'false', 'wine', 1, 5),
(22, 'A52', 'true', 'water', 2, 5),
(23, 'A53', 'true', 'water', 3, 5),
(24, 'A54', 'true', 'water', 4, 5),
(25, 'A55', 'true', 'water', 5, 5),
(26, 'A61', 'true', 'water', 1, 6),
(27, 'A62', 'true', 'water', 2, 6),
(28, 'A63', 'true', 'water', 3, 6),
(29, 'A64', 'true', 'water', 4, 6),
(30, 'A65', 'true', 'water', 5, 6);

-- --------------------------------------------------------

--
-- Table structure for table `mytesttable`
--

CREATE TABLE `mytesttable` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `mytesttable`
--

INSERT INTO `mytesttable` (`id`, `username`, `email`, `password`) VALUES
(1, 'demo1', 'demo1@gmail.com', '1234'),
(24, 'demo6', 'tranguyenghia96@gmail.com', '1234'),
(25, 'nghiatran', 'nghia.trannguyen@outlook.com', '1234');

-- --------------------------------------------------------

--
-- Table structure for table `testdashboard`
--

CREATE TABLE `testdashboard` (
  `id` int(5) NOT NULL,
  `title` varchar(100) NOT NULL,
  `checkbox` varchar(10) NOT NULL,
  `select` varchar(20) NOT NULL,
  `widgetid` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `testdashboard`
--

INSERT INTO `testdashboard` (`id`, `title`, `checkbox`, `select`, `widgetid`) VALUES
(9, 'AdTech', 'false', 'wine', 2),
(11, 'undefined', 'true', 'milk', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `edit`
--
ALTER TABLE `edit`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `editpage`
--
ALTER TABLE `editpage`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mytesttable`
--
ALTER TABLE `mytesttable`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `testdashboard`
--
ALTER TABLE `testdashboard`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `edit`
--
ALTER TABLE `edit`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `editpage`
--
ALTER TABLE `editpage`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
--
-- AUTO_INCREMENT for table `mytesttable`
--
ALTER TABLE `mytesttable`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
--
-- AUTO_INCREMENT for table `testdashboard`
--
ALTER TABLE `testdashboard`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

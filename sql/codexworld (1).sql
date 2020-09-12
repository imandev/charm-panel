-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 28, 2020 at 06:31 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.2.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `codexworld`
--

-- --------------------------------------------------------

--
-- Table structure for table `gallery`
--

CREATE TABLE `gallery` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created` datetime NOT NULL,
  `modified` datetime NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1 COMMENT '1=Active | 0=Inactive'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `gallery`
--

INSERT INTO `gallery` (`id`, `title`, `created`, `modified`, `status`) VALUES
(1, 'دسته یک', '2020-08-18 18:55:30', '2020-08-18 18:55:30', 1),
(2, 'panel1', '2020-08-18 18:55:44', '2020-08-18 18:55:44', 1),
(3, 'دسته سه', '2020-08-18 19:01:59', '2020-08-18 19:01:59', 1),
(5, 'دسته جدید', '2020-08-19 20:45:58', '2020-08-19 20:45:58', 1),
(6, 'دسته پنج', '2020-08-20 02:49:24', '2020-08-20 02:49:24', 1),
(7, 'دسته شیش', '2020-08-20 02:50:56', '2020-08-20 02:53:49', 1);

-- --------------------------------------------------------

--
-- Table structure for table `gallery_images`
--

CREATE TABLE `gallery_images` (
  `id` int(11) NOT NULL,
  `gallery_id` int(11) NOT NULL,
  `file_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `uploaded_on` datetime NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `price` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `ext` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `gallery_images`
--

INSERT INTO `gallery_images` (`id`, `gallery_id`, `file_name`, `uploaded_on`, `name`, `price`, `description`, `ext`) VALUES
(1, 1, '1_45341816_554605314962849_6543882670835292701_n.jpg', '2020-08-18 18:55:30', 'بازنده سگ', '1000', '                                          \r\n       \r\n       \r\n       \r\n       \r\n       \r\n       ', ''),
(2, 1, '1_45823864_484338935421268_6118513071180368899_n.jpg', '2020-08-18 18:55:30', 'خانم جنگنده XD', '9000', '                                          \r\n       \r\n       \r\n       \r\n       \r\n       \r\n       ', ''),
(4, 2, '2_46182558_755487424800187_6345154374233482857_n.jpg', '2020-08-18 18:55:44', 'دریاچه', '700', '                                          \r\n       \r\n       \r\n       \r\n       \r\n       \r\n       ', ''),
(5, 2, '2_46829734_305943323586416_7043763984297732510_n.jpg', '2020-08-18 18:55:44', 'ببعی', '3000', '                                          \r\nخانمی با طرح ببعی       \r\n       \r\n       \r\n       \r\n       \r\n       ', '90'),
(6, 2, '2_46992143_1356662484470398_5602145099357154347_n.jpg', '2020-08-18 18:55:44', 'بب لا', '500', '                                          \r\n       \r\n       \r\n       \r\n       \r\n       \r\n       ', ''),
(7, 3, '3_50740932_393371854803834_6739036849545227228_n.jpg', '2020-08-18 19:01:59', 'ماجراجویی', '8000', '                                          \r\n       \r\n       \r\n       \r\n       \r\n       \r\n       ', ''),
(8, 5, '5_51110456_116895562712758_6818502899586314558_n.jpg', '2020-08-19 20:45:58', 'عشقولانه دو', '600', '                     \r\n       \r\n       \r\n       ', ''),
(9, 5, '5_52952776_206042797022497_4496690503957431740_n.jpg', '2020-08-19 20:45:58', 'ابر و باد', '400', '                     \r\n       \r\n       \r\n       ', ''),
(10, 5, '5_53112184_581221242360551_6220050714711597791_n.jpg', '2020-08-19 20:45:58', 'شوالیه گوزو', '13000', '                     \r\n       \r\n       \r\n       ', ''),
(11, 6, '6_58409781_536883653507658_7935652602085005954_n.jpg', '2020-08-20 02:49:24', 'آبشار', '1000', '              \r\n       \r\n       ', ''),
(12, 6, '6_58917189_146665076381414_6163408510466349826_n.jpg', '2020-08-20 02:49:24', 'ژاپنی استایل', '9000', '              \r\n       \r\n       ', ''),
(13, 6, '6_60011837_2671336052953944_2655910179278887482_n.jpg', '2020-08-20 02:49:24', 'غروب دو', '7000', '              \r\n       \r\n       ', ''),
(14, 6, '6_60552229_171977153819329_8953749726896727491_n.jpg', '2020-08-20 02:49:24', 'غروب یک', '3000', '              \r\n       \r\n       ', ''),
(15, 7, '7_64533404_143703920038447_1364285401476504378_n.jpg', '2020-08-20 02:50:56', 'در حال مرگ :)', '900', '              \r\n       \r\n       ', ''),
(16, 7, '7_66433562_149275439522100_2105032095367759111_n.jpg', '2020-08-20 02:50:56', 'عشقولانه', '500', '              \r\n       \r\n       ', ''),
(17, 7, '7_67841182_343079966573932_5200575460949076012_n.jpg', '2020-08-20 02:50:56', 'طرح صورت دو', '300', '              \r\n       \r\n       ', ''),
(18, 7, '7_51211766_386671248761445_4779127762945047866_n.jpg', '2020-08-20 02:53:49', 'طرح صورت یک', '100', '              \r\n       \r\n       ', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `gallery`
--
ALTER TABLE `gallery`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gallery_images`
--
ALTER TABLE `gallery_images`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `gallery`
--
ALTER TABLE `gallery`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `gallery_images`
--
ALTER TABLE `gallery_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

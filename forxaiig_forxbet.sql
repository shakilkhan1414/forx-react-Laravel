-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 14, 2023 at 05:39 PM
-- Server version: 10.5.20-MariaDB-cll-lve
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `forxaiig_forxbet`
--

-- --------------------------------------------------------

--
-- Table structure for table `deposits`
--

CREATE TABLE `deposits` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `payment_method` varchar(255) NOT NULL,
  `send_from` varchar(255) NOT NULL,
  `amount` varchar(255) NOT NULL,
  `transaction_id` varchar(255) NOT NULL,
  `status` varchar(255) DEFAULT NULL,
  `user_id` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `deposits`
--

INSERT INTO `deposits` (`id`, `payment_method`, `send_from`, `amount`, `transaction_id`, `status`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'bkash', '0175272727', '500', 'rrbrbddfgh', '1', '1', '2023-07-13 23:46:14', '2023-07-14 13:10:22'),
(2, 'bkash', '0167752752', '800', 'dhgdhghd', '1', '7', '2023-07-13 23:54:10', '2023-07-20 23:14:31'),
(3, 'nagad', '01358722752', '200', 'dfghdhdfgbre', '0', '18', '2023-07-13 23:56:04', '2023-07-14 12:57:32'),
(4, 'rocket', '01782725752', '1200', 'rtytyrgrytby', '1', '19', '2023-07-13 23:56:46', '2023-07-20 23:14:30'),
(5, 'nagad', '0138727527', '700', 'ghyujntyy', '0', '20', '2023-07-14 02:17:16', '2023-07-20 23:14:28'),
(6, 'nagad', '01587272752', '400', 'rthrtbytyh', '0', '21', '2023-07-14 02:17:33', '2023-07-20 23:14:27'),
(7, 'upay', '01782787227', '300', 'gnsvsdvsbdv', '1', '1', '2023-07-15 05:09:46', '2023-07-20 23:14:33'),
(13, 'Nagad', '9282882', '10000', 'Kwkkeje', '1', '7', '2023-07-20 05:42:10', '2023-07-20 05:43:06'),
(14, 'Bkash', '9272737', '500', 'He7eyeheg', '1', '18', '2023-07-20 12:20:38', '2023-07-20 12:21:40'),
(15, 'Bkash', '018288274747', '500', 'GDAJ6383JSHH', '1', '19', '2023-07-20 12:22:40', '2023-07-20 12:23:09'),
(16, 'Bkash', '345567', '500', 'Fhutff', '1', '20', '2023-07-20 23:13:31', '2023-07-20 23:14:26'),
(17, 'Rocket', '456789', '1000', 'Gjuddvg', '1', '21', '2023-07-20 23:15:59', '2023-07-20 23:16:43'),
(18, 'Upay', '345678', '2000', 'Ghyfggg', '1', '1', '2023-07-20 23:20:06', '2023-07-20 23:20:39'),
(19, 'Rocket', '997654', '1000', 'Bjjgujfjvj', '0', '7', '2023-07-20 23:21:15', '2023-07-20 23:21:36'),
(20, 'Nagad', '9876654', '10000', 'Ujhfrtg', '1', '18', '2023-07-20 23:25:28', '2023-07-20 23:25:39'),
(21, 'Bkash', '3445677', '500', 'Sfhjuyr4566', '0', '19', '2023-07-21 20:05:44', '2023-07-21 20:48:32'),
(22, 'Bkash', '45734368', '200', '3568458457hfjfjhj', '0', '20', '2023-07-21 20:11:54', '2023-07-21 20:48:36'),
(23, 'Bkash', '45734368', '200', 'gf675', '0', '21', '2023-07-21 20:12:00', '2023-07-21 20:48:39'),
(24, 'Bkash', '43573476', '200', '3736', '0', '1', '2023-07-21 20:28:08', '2023-07-21 20:48:42'),
(25, 'Rocket', '547557', '500', 'ggng67', '0', '7', '2023-07-21 20:31:05', '2023-07-21 20:48:43'),
(26, 'Nagad', '01793476636', '500', '7226YUN7', '1', '43', '2023-07-23 18:31:20', '2023-07-23 18:38:18'),
(27, 'Nagad', '01793476636', '500', '7226YUN7', '1', '43', '2023-07-23 18:35:47', '2023-07-23 18:38:30'),
(28, 'Nagad', '01779283782', '500', '9h297ej73h', '1', '46', '2023-07-23 18:47:01', '2023-07-23 18:47:49'),
(29, 'Nagad', '01763346540', '200', '72277MC1', NULL, '26', '2023-07-23 19:27:59', '2023-07-23 19:27:59'),
(30, 'Nagad', '01303656733', '200', '72277MC1', NULL, '26', '2023-07-23 19:29:13', '2023-07-23 19:29:13'),
(31, 'Nagad', '01763346540', '200', '72277MC1', NULL, '26', '2023-07-23 19:30:37', '2023-07-23 19:30:37'),
(32, 'Nagad', '01763346540', '200', '72277MC1', NULL, '26', '2023-07-23 20:38:03', '2023-07-23 20:38:03'),
(33, 'Nagad', '01401446375', '200', 'https://www.forxbet.site/', NULL, '31', '2023-07-24 15:47:21', '2023-07-24 15:47:21'),
(34, 'Nagad', '01401446375', '200', '01303656733', NULL, '31', '2023-07-24 16:03:55', '2023-07-24 16:03:55'),
(35, 'Nagad', '01401446375', '200', '01303656733', NULL, '31', '2023-07-24 16:03:56', '2023-07-24 16:03:56'),
(36, 'Nagad', '01723233923', '3700', '2354NFHB', '1', '53', '2023-08-03 22:19:55', '2023-08-03 22:21:33');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `links`
--

CREATE TABLE `links` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `type` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `links`
--

INSERT INTO `links` (`id`, `type`, `link`, `created_at`, `updated_at`) VALUES
(1, 'Hot Games', 'https://game.royalgaming.online/?token=820643b0-c9d5-4d2c-a207-8f02a3d82180&operatorId=rgst8&userName=l2c5gizmpe3xc&partnerId=ST8USD&providerId=RGONLINE&lobby=true&theme=DARK', '2023-07-17 18:00:00', '2023-07-20 18:22:10'),
(2, 'Cricket', 'https://10wickets.live/', '2023-07-17 18:00:00', '2023-08-09 17:34:51'),
(3, 'Casino', 'https://m2.fawk.app/#/splash-screen/fffc67e8-479a-5b6a-9c1b-a9a1a9daa079/9442', '2023-07-17 18:00:00', '2023-07-20 18:19:48'),
(4, 'Sports', 'https://bxawscf.binkaur.xyz/exchange/member/index.jsp?eventType=1', '2023-07-17 18:00:00', '2023-07-20 03:07:25'),
(5, 'Crush', 'https://zeppelin-us.betsolutions.com/?sessionId=c6b6e6e1-389f-4989-8d95-67c288ef03a4&Lang=en-US&MerchantId=6384&IsFreeplay=False&platform=mobile&gameId=7001', '2023-07-17 18:00:00', '2023-07-20 03:08:02');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_05_26_205407_create_user_types_table', 1),
(6, '2023_07_14_052016_create_deposits_table', 2),
(7, '2023_07_15_100543_create_payments_table', 3),
(8, '2023_07_16_222632_create_withdraws_table', 4),
(9, '2023_07_18_163613_create_links_table', 5);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `method` varchar(255) NOT NULL,
  `number` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`id`, `method`, `number`, `created_at`, `updated_at`) VALUES
(1, 'Bkash', '01726557702', '2023-07-14 18:00:00', '2023-07-21 19:58:51'),
(2, 'Rocket', '01000000000', '2023-07-14 18:00:00', '2023-07-21 19:59:54'),
(3, 'Nagad', '01303656733', '2023-07-14 18:00:00', '2023-07-21 20:00:38'),
(4, 'Upay', '0100000000', '2023-07-14 18:00:00', '2023-07-21 20:00:08');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `user_type` varchar(255) NOT NULL,
  `balance` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `phone`, `email`, `email_verified_at`, `password`, `user_type`, `balance`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Tony Stark', 'tony_stark', '01723435434', 'stark@gmail.com', NULL, '$2a$12$6EjTKXDE23BsehEVZVFukuljUC/nWqvFltjCtDPVbUNltW4NL5V/W', '1', '500', NULL, '2023-07-21 04:00:00', '2023-07-21 04:00:00'),
(7, 'Mastorul', 'mastorul_35', '01779565123', 'mastorulraj@gmail.com', NULL, '$2y$10$SYppqGB/ao8VAdG5xrsAs.keL5i5TrIY8LFWzHezDNIXq/p1DbMSS', '2', '300', NULL, '2023-07-12 13:51:06', '2023-07-21 20:34:05'),
(18, 'mastorul', 'mastorul_82', '01721523935', 'mastorul.rj@gmail.com', NULL, '$2y$10$kj35yhmp39Q8VW.hOTnF9.mkmZbceEKoiIDpyovreYvNAnp7NJSna', '2', '0', NULL, '2023-07-21 20:10:44', '2023-07-21 20:10:44'),
(19, 'MDrokieb14', 'mdrokieb14_57', '01867884814', NULL, NULL, '$2y$10$iP4iKI8rnro24YuC1w8Uze1bEKnwYWBsPsG2tdR4wwR8TLV124LWC', '2', '0', NULL, '2023-07-21 20:18:38', '2023-07-21 20:18:38'),
(20, 'rhryjer', 'rhryjer_74', '675746848', 'eryjryjjr@gmail.com', NULL, '$2y$10$6fRgN5W3idRqFegpoNmiL.KgqCtoREMM0yln10utjumvlU1Ou1e1C', '2', '0', NULL, '2023-07-21 20:24:00', '2023-07-21 20:24:00'),
(21, 'Muslem14', 'muslem14_06', '1867884814', NULL, NULL, '$2y$10$LRxueLrxjzN9lZT33G1l9eM5eprRo.EejaH7i51Am91nPuQpH8LoC', '2', '0', NULL, '2023-07-21 20:27:54', '2023-07-21 20:27:54'),
(22, 'Muslem70', 'muslem70_86', '01765430898', NULL, NULL, '$2y$10$6Z4aftfqpHFSM7h2s/G0V.GbHoX/mqCE.Dp0q3hBGS3kpQ/yMOSz6', '2', '0', NULL, '2023-07-21 20:52:15', '2023-07-21 20:52:15'),
(23, 'Muslem70', 'muslem70_94', '01765434548', 'Muslem70@gmail.com', NULL, '$2y$10$bKUGspqf390tsRXgDYXuXedbZu8lOXfDgowxfzR2g1WcvUA/qOr7q', '2', '0', NULL, '2023-07-21 20:53:32', '2023-07-21 20:59:56'),
(24, 'Mohona', 'mohona_54', '01910226387', 'rotonmondol4730@gmail.com', NULL, '$2y$10$o3t0784pzqNOXi6StlO8kO1l/0VPRfx1OdPz6gWBrJmH0ktq0VrUy', '2', '0', NULL, '2023-07-22 14:25:54', '2023-07-22 14:25:54'),
(25, 'Salman', 'salman_79', '01855902736', 'mdsamiulislamkhan57@gmail.com', NULL, '$2y$10$sxLNgRwtdeAsEmPLg82Q6OSysAUWHbSB5Itxgr3V1T3RkUnl3uDXG', '2', '0', NULL, '2023-07-22 16:21:22', '2023-07-22 16:21:22'),
(26, 'Salman', 'salman_19', '01763346540', 'salmansk50500@gmail.com', NULL, '$2y$10$2T00j7kb99bMDarl2wddTeWFv8YHJMOE/CsML1toNNJLinTWdDLfi', '2', '0', NULL, '2023-07-22 17:05:32', '2023-07-22 17:06:17'),
(27, 'Maruf', 'maruf_87', '01742444715', 'marufhassain0987@gmail.com', NULL, '$2y$10$y5XXGoAozfdK.RmYuaBYuek.vv4GsPJ.d7Qj8x88H.Y.LC7KO3OIG', '2', '0', NULL, '2023-07-22 17:50:01', '2023-07-22 17:50:01'),
(28, 'Md Nazrul Islam', 'md_nazrul_islam_03', '01715722629', 'ni739880@gmaol.com', NULL, '$2y$10$icu6hUfLiYcfNyinqDymku73iePPfUsLdLzmZAjE4k1L8Uv43ahgW', '2', '0', NULL, '2023-07-22 19:50:57', '2023-07-22 19:50:57'),
(29, 'jahid hasan', 'jahid_hasan_05', '01401446375', NULL, NULL, '$2y$10$14Dmc.Fr.8ijcAKfuslcReiq65GtAAifhdLwGU7j08SdE9np1h4Za', '2', '0', NULL, '2023-07-22 19:58:54', '2023-07-22 19:58:54'),
(31, 'jahid hasan', 'jahid_hasan_49', '01872995264', 'hasan016876@gmail.com', NULL, '$2y$10$WgIoVmYKUZwpfvABYpcQdeaigwi1/3B1TbNEqMscuUfQodb/SWqWG', '2', '0', NULL, '2023-07-22 20:01:43', '2023-07-24 15:34:44'),
(32, 'jhsumon406', 'jhsumon406_37', '01724616406', 'hkabirsumon101@gmail.com', NULL, '$2y$10$F9NRQg6MU4XvA6VgZmCxOegY7YoFrwLAnuaIOJJWSM8SZWbTFP2MC', '2', '0', NULL, '2023-07-22 20:09:42', '2023-07-22 20:09:42'),
(33, 'Md Ridoy', 'md_ridoy_01', '01952821754', 'ridoy55555555@gmail.com', NULL, '$2y$10$yy612ecQoTf1Tu1Pt/hneuy.1om7P9K3SG6.ZSPymYuEcPTL3AuTu', '2', '0', NULL, '2023-07-22 21:33:46', '2023-07-22 21:33:46'),
(34, 'aimon Chowdhury', 'aimon_chowdhury_70', '01829024406', 'aimonaimon024406@gmail.com', NULL, '$2y$10$9wsy82fpvWaTHrrdHJnZL.m8A9av3J0Y1bkSiaRJObEJy1.dZ8bVi', '2', '0', NULL, '2023-07-22 21:51:46', '2023-07-22 21:57:16'),
(39, 'alomgir', 'alomgir_21', '01932194686', 'Princealomgir2022@hmail.com', NULL, '$2y$10$LJaqzitaEkrWkdw1RzqtFOgr2jWuYRGRh.NLKPupBvwAriGm7O502', '2', '0', NULL, '2023-07-22 23:13:04', '2023-07-22 23:17:44'),
(40, 'Jgfhnnnb', 'jgfhnnnb_61', '9876543', 'bgghjjhh@gmail.com', NULL, '$2y$10$PdlKvxYLfkoKO.SFV6aOCuZQTFwDRjtdlZdzOaLaPjk3jFDTjre3W', '2', '0', NULL, '2023-07-22 23:20:45', '2023-07-22 23:20:45'),
(41, 'Ashikur Rahman Jewel', 'ashikur_rahman_jewel_74', '01640757318', 'edios9005@gmail.com', NULL, '$2y$10$90TZyXxoECpDNNv7BnnPquhSux14HJwu3g5F.GOlSGYTVTHpKLvB6', '2', '0', NULL, '2023-07-23 06:06:46', '2023-07-23 06:06:46'),
(42, 'Rasel', 'rasel_12', '01712130886', 'somaptiroy2003@gmail.com', NULL, '$2y$10$mJV9CpZu.vF/T9Kv/U7AC.DOHwfV.UOk.B0G34HhPMS5BF3a5ChK.', '2', '0', NULL, '2023-07-23 06:52:56', '2023-07-23 06:52:56'),
(43, 'mdfaisal57', 'mdfaisal57_04', '01786460057', 'mdfaisalinfo610@gmail.com', NULL, '$2y$10$2kXHUKpQy8cO7DYst7kL1uTgROnyspxN6uRA4a9COUs4EEEx71AIG', '2', '0', NULL, '2023-07-23 16:46:15', '2023-07-23 19:13:05'),
(44, 'apoun678', 'apoun678_64', '01782343650', 'eliassofiullah@gmail.com', NULL, '$2y$10$0jWLeBev1aQvuA7W6/oafObXglALduP49Xdv1rFwSLm4Gkg/204wu', '2', '0', NULL, '2023-07-23 17:12:18', '2023-07-23 17:12:18'),
(45, 'X men', 'x_men_40', '01996353758', 'sohanmondol617@gmail.com', NULL, '$2y$10$FQ46QKzjhErePu/jIR0zb.xIR//A129Kc/19h7/3Xz.gw9sJnm6vm', '2', '0', NULL, '2023-07-23 17:34:52', '2023-07-23 17:34:52'),
(46, 'Iejdjdhd', 'iejdjdhd_42', '939484774', 'jdjdhdjjdjr@gmail.com', NULL, '$2y$10$tnisuI2PySoodyBkgRZpGuUDk6EinV0Yxby70W9cE0wtdIMEu0XKe', '2', '500', NULL, '2023-07-23 18:46:35', '2023-07-23 18:47:49'),
(47, 'মহিন', 'মহিন_72', '01647433720', 'pondithmohin@gmail.com', NULL, '$2y$10$ITKbSzVUOXsagAw6l2bQOeEU9I.IXvT0NikI4/TAxmitjlKWRtfVW', '2', '0', NULL, '2023-07-23 19:29:02', '2023-07-23 19:29:02'),
(48, 'Md Rafiq', 'md_rafiq_52', '01618185091', 'rafiq10310330@gmail.com', NULL, '$2y$10$JAVz2E0yV9iFfrUL8eU56.yWnxg9eObFWxccVucFaFWHbClFM5192', '2', '0', NULL, '2023-07-23 19:39:15', '2023-07-23 19:39:15'),
(49, 'hane123', 'hane123_86', '01785279447', 'mdashikhosan17@gmail.com', NULL, '$2y$10$.F8.IXgWONU//HSKCErKeuzZGzcU3eD3sG2zGlgm0fJ0Autc6zjsC', '2', '0', NULL, '2023-07-23 20:33:53', '2023-07-23 20:33:53'),
(50, 'Rejaul', 'rejaul_34', '01619559868', 'nahinchowdhury8595@gamil.com', NULL, '$2y$10$tnHskCRdh7O5Zm6yhLdC..4MPFREXzxkjbp88G9R/2dgkI4.5AVqC', '2', '0', NULL, '2023-07-24 12:03:51', '2023-07-24 12:03:51'),
(51, 'Prakash48', 'prakash48_95', '01870568448', 'psd8177@gmail.com', NULL, '$2y$10$voIZzd60ZsY3l6nBd088bOOP.wSeCyhEk4swXiDEei5wtAh61r/6S', '2', '0', NULL, '2023-07-25 09:43:55', '2023-07-25 09:43:55'),
(52, 'Abir', 'abir_80', '01776662941', 'mahamudmdabir284@gmail.com', NULL, '$2y$10$UUwYuLFKV/9uxoNE.9RzluvGv.Sblu6fKJV1mJ5RkvPyzalu1SWg2', '2', '0', NULL, '2023-07-27 21:26:04', '2023-07-27 21:26:04'),
(53, 'Abdul', 'abdul_64', '01723233923', NULL, NULL, '$2y$10$ghvLdKESE7de602H.Up5AeNhYkb75PZ.UL5V7GqouH4ju8gLOQx/y', '2', '3700', NULL, '2023-08-03 22:14:43', '2023-08-03 22:21:33');

-- --------------------------------------------------------

--
-- Table structure for table `user_types`
--

CREATE TABLE `user_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_type` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_types`
--

INSERT INTO `user_types` (`id`, `user_type`, `created_at`, `updated_at`) VALUES
(1, 'admin', '2023-07-09 18:00:00', '2023-07-09 18:00:00'),
(2, 'member', '2023-07-09 18:00:00', '2023-07-09 18:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `withdraws`
--

CREATE TABLE `withdraws` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `withdraw_method` varchar(255) NOT NULL,
  `withdraw_number` varchar(255) NOT NULL,
  `withdraw_amount` varchar(255) NOT NULL,
  `status` varchar(255) DEFAULT NULL,
  `user_id` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `withdraws`
--

INSERT INTO `withdraws` (`id`, `withdraw_method`, `withdraw_number`, `withdraw_amount`, `status`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'Rocket', '01527275272', '400', '1', '1', '2023-07-16 16:38:55', '2023-07-16 17:51:39'),
(2, 'Nagad', '0175872782872', '300', '1', '7', '2023-07-16 16:41:01', '2023-07-20 23:12:05'),
(6, 'Nagad', '0172727272', '200', '0', '18', '2023-07-16 16:46:55', '2023-07-16 17:51:41'),
(9, 'Nagad', '01887272752', '10', '1', '19', '2023-07-16 16:56:07', '2023-07-20 23:12:07'),
(10, 'Bkash', '928373738', '1500', '0', '20', '2023-07-20 12:26:51', '2023-07-20 12:27:31'),
(11, 'Rocket', '928227', '11500', '1', '21', '2023-07-20 16:51:37', '2023-07-20 23:12:08'),
(12, 'Nagad', '245689', '1200', '1', '1', '2023-07-20 23:18:36', '2023-07-20 23:19:26'),
(13, 'Rocket', 'Hhgyy67h', '2600', '0', '7', '2023-07-20 23:22:19', '2023-07-20 23:22:34'),
(14, 'Nagad', '987654', '5000', '0', '18', '2023-07-20 23:26:12', '2023-07-21 20:48:19'),
(15, 'Rocket', '4673638', '5000', '0', '19', '2023-07-21 20:33:08', '2023-07-21 20:48:21'),
(16, 'Bkash', '7489986550', '200', '0', '20', '2023-07-21 20:34:05', '2023-07-21 20:48:23'),
(17, 'Nagad', '01786460057', '1000', NULL, '43', '2023-07-23 19:13:05', '2023-07-23 19:13:05');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `deposits`
--
ALTER TABLE `deposits`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `links`
--
ALTER TABLE `links`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_phone_unique` (`phone`);

--
-- Indexes for table `user_types`
--
ALTER TABLE `user_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `withdraws`
--
ALTER TABLE `withdraws`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `deposits`
--
ALTER TABLE `deposits`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `links`
--
ALTER TABLE `links`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT for table `user_types`
--
ALTER TABLE `user_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `withdraws`
--
ALTER TABLE `withdraws`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

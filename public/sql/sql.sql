-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 11, 2022 at 09:09 AM
-- Server version: 5.7.33
-- PHP Version: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `yoori`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `account_type` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `account_details` text COLLATE utf8mb4_unicode_ci,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `is_default` tinyint(4) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `activations`
--

CREATE TABLE `activations` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `code` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `completed` tinyint(1) NOT NULL DEFAULT '0',
  `completed_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `activations`
--

INSERT INTO `activations` (`id`, `user_id`, `code`, `completed`, `completed_at`, `created_at`, `updated_at`) VALUES
(1, 1, 'jtrgT5HKaZhXox6VmOIpHnZrCqBHp2QH', 1, '2022-04-06 00:07:38', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(2, 2, 'b8lmkVx7aiJquAXqcfghMtHSJC3j6XJ0', 1, '2022-04-24 14:10:00', '2022-04-24 14:10:00', '2022-04-24 14:10:00');

-- --------------------------------------------------------

--
-- Table structure for table `addons`
--

CREATE TABLE `addons` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `addon_identifier` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `purchase_code` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `version` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `image` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `addresses`
--

CREATE TABLE `addresses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_no` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `address_ids` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `country` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `state` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `latitude` decimal(10,8) DEFAULT NULL,
  `longitude` decimal(11,8) DEFAULT NULL,
  `postal_code` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `default_shipping` tinyint(4) NOT NULL DEFAULT '0' COMMENT '1 = default',
  `default_billing` tinyint(4) NOT NULL DEFAULT '0' COMMENT '1 = default',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `api_keys`
--

CREATE TABLE `api_keys` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `key` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `api_key_languages`
--

CREATE TABLE `api_key_languages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `api_key_id` bigint(20) UNSIGNED NOT NULL,
  `lang` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'en',
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `app_intros`
--

CREATE TABLE `app_intros` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `image_id` bigint(20) UNSIGNED DEFAULT NULL,
  `image` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `app_intro_languages`
--

CREATE TABLE `app_intro_languages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `order` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lang` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'en' COMMENT 'our default locale for system en',
  `app_intro_id` bigint(20) NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `attributes`
--

CREATE TABLE `attributes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `attribute_category`
--

CREATE TABLE `attribute_category` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `attribute_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `attribute_languages`
--

CREATE TABLE `attribute_languages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `attribute_id` bigint(20) UNSIGNED NOT NULL,
  `lang` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'en',
  `title` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `attribute_values`
--

CREATE TABLE `attribute_values` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `attribute_id` bigint(20) UNSIGNED NOT NULL,
  `value` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `banners`
--

CREATE TABLE `banners` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order` int(11) NOT NULL DEFAULT '1',
  `link` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '/',
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '1',
  `image_id` bigint(20) UNSIGNED DEFAULT NULL,
  `image` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `banners`
--

INSERT INTO `banners` (`id`, `order`, `link`, `status`, `image_id`, `image`, `created_at`, `updated_at`) VALUES
(1, 1, '/', '1', NULL, '[]', '2022-06-22 13:55:37', '2022-06-22 13:55:37'),
(2, 2, '/', '1', NULL, '[]', '2022-06-22 13:55:46', '2022-06-22 13:55:46'),
(3, 3, '/', '1', NULL, '[]', '2022-06-22 13:55:54', '2022-06-22 13:55:54'),
(4, 4, '/', '1', NULL, '[]', '2022-06-22 13:56:04', '2022-06-22 13:56:04');

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `image_id` bigint(20) UNSIGNED DEFAULT NULL,
  `image` text COLLATE utf8mb4_unicode_ci,
  `banner_id` bigint(20) UNSIGNED DEFAULT NULL,
  `banner` text COLLATE utf8mb4_unicode_ci,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'published',
  `slug` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `blog_categories`
--

CREATE TABLE `blog_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `slug` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `blog_category_languages`
--

CREATE TABLE `blog_category_languages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `blog_category_id` bigint(20) UNSIGNED NOT NULL,
  `lang` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'en' COMMENT 'our default locale for system en',
  `title` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_title` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_description` text COLLATE utf8mb4_unicode_ci COMMENT 'meta description for seo',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `blog_comments`
--

CREATE TABLE `blog_comments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'used like when user is logged in',
  `blog_id` bigint(20) UNSIGNED NOT NULL,
  `comment` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `blog_comment_likes`
--

CREATE TABLE `blog_comment_likes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `commentable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `commentable_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `blog_comment_replies`
--

CREATE TABLE `blog_comment_replies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'used like when user is logged in',
  `blog_comment_id` bigint(20) UNSIGNED NOT NULL,
  `parent_id` bigint(20) UNSIGNED DEFAULT NULL,
  `comment` text COLLATE utf8mb4_unicode_ci,
  `level` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `blog_languages`
--

CREATE TABLE `blog_languages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `blog_id` bigint(20) UNSIGNED NOT NULL,
  `lang` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'en' COMMENT 'our default locale for system en',
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `short_description` text COLLATE utf8mb4_unicode_ci,
  `long_description` longtext COLLATE utf8mb4_unicode_ci,
  `tags` text COLLATE utf8mb4_unicode_ci,
  `meta_title` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_description` text COLLATE utf8mb4_unicode_ci,
  `meta_keyword` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `blog_views`
--

CREATE TABLE `blog_views` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `blog_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `slug` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `logo_id` bigint(20) UNSIGNED DEFAULT NULL,
  `logo` text COLLATE utf8mb4_unicode_ci,
  `banner_id` bigint(20) UNSIGNED DEFAULT NULL,
  `banner` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `brand_languages`
--

CREATE TABLE `brand_languages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `brand_id` bigint(20) NOT NULL,
  `lang` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'our default locale for system en',
  `title` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_title` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `campaigns`
--

CREATE TABLE `campaigns` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `background_color` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `text_color` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `banner_id` bigint(20) UNSIGNED DEFAULT NULL,
  `banner` text COLLATE utf8mb4_unicode_ci,
  `thumbnail` text COLLATE utf8mb4_unicode_ci,
  `thumbnail_id` bigint(20) UNSIGNED DEFAULT NULL,
  `start_date` timestamp NULL DEFAULT NULL,
  `end_date` timestamp NULL DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `featured` tinyint(4) NOT NULL DEFAULT '0',
  `flash_sale` tinyint(4) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `campaign_languages`
--

CREATE TABLE `campaign_languages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `campaign_id` bigint(20) UNSIGNED NOT NULL,
  `lang` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `campaign_products`
--

CREATE TABLE `campaign_products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `campaign_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `discount` double DEFAULT NULL,
  `discount_type` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `campaign_requests`
--

CREATE TABLE `campaign_requests` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `campaign_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `discount` double(10,3) NOT NULL DEFAULT '0.000',
  `discount_type` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `seller_id` bigint(20) UNSIGNED DEFAULT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `guest_id` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `product_id` bigint(20) UNSIGNED DEFAULT NULL,
  `variant` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `discount` double DEFAULT NULL,
  `tax` double DEFAULT NULL,
  `shipping_cost` double DEFAULT NULL,
  `shipping_type` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `coupon_applied` tinyint(1) DEFAULT '0',
  `coupon_discount` double DEFAULT NULL,
  `trx_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `product_referral_code` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `parent_id` bigint(20) DEFAULT NULL,
  `position` int(11) DEFAULT NULL,
  `ordering` int(11) NOT NULL DEFAULT '0',
  `slug` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `commission` double(10,3) DEFAULT '0.000',
  `is_featured` tinyint(4) NOT NULL DEFAULT '0',
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `icon` text COLLATE utf8mb4_unicode_ci,
  `logo_id` bigint(20) UNSIGNED DEFAULT NULL,
  `logo` text COLLATE utf8mb4_unicode_ci,
  `banner_id` bigint(20) UNSIGNED DEFAULT NULL,
  `banner` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `parent_id`, `position`, `ordering`, `slug`, `commission`, `is_featured`, `status`, `icon`, `logo_id`, `logo`, `banner_id`, `banner`, `created_at`, `updated_at`) VALUES
(1, NULL, NULL, 0, 'category-four-yn5ad', 0.000, 0, 1, '', NULL, '[]', NULL, '[]', '2022-01-31 21:15:12', '2022-04-08 08:11:24'),
(2, NULL, NULL, 0, 'category-five-ndaew', 0.000, 0, 1, '', NULL, '[]', NULL, '[]', '2022-01-31 21:15:12', '2022-04-08 08:11:34'),
(3, NULL, NULL, 0, 'category-six-n2bo7', 0.000, 0, 1, '', NULL, '[]', NULL, '[]', '2022-01-31 21:15:12', '2022-04-08 08:11:56'),
(4, NULL, NULL, 0, 'category-seven-okccl', 0.000, 0, 1, '', NULL, '[]', NULL, '[]', '2022-01-31 21:15:12', '2022-04-08 08:13:05'),
(5, NULL, NULL, 0, 'category-eight-hnuml', 0.000, 0, 1, '', NULL, '[]', NULL, '[]', '2022-01-31 21:15:12', '2022-04-08 08:12:25'),
(6, NULL, NULL, 0, 'category-nine-jtrwm', 0.000, 0, 1, '', NULL, '[]', NULL, '[]', '2022-01-31 21:15:12', '2022-04-08 08:13:15'),
(7, NULL, NULL, 0, 'category-ten-uihpj', 0.000, 0, 1, '', NULL, '[]', NULL, '[]', '2022-01-31 21:15:12', '2022-04-08 08:12:44'),
(9, NULL, NULL, 0, 'category-two-jivat', 0.000, 0, 1, '', NULL, '[]', NULL, '[]', '2022-01-31 21:15:13', '2022-04-08 08:11:06'),
(10, NULL, NULL, 0, 'category-three-fhtpw', 0.000, 0, 1, '', NULL, '[]', NULL, '[]', '2022-01-31 21:15:13', '2022-04-08 08:10:54'),
(11, NULL, NULL, 0, 'category-one-kfs0j', 0.000, 0, 1, '', NULL, '[]', NULL, '[]', '2022-03-25 22:58:27', '2022-04-08 08:10:35');

-- --------------------------------------------------------

--
-- Table structure for table `category_languages`
--

CREATE TABLE `category_languages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) NOT NULL,
  `lang` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'en' COMMENT 'our default locale for system en',
  `title` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_title` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_description` text COLLATE utf8mb4_unicode_ci COMMENT 'meta description for seo',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `category_languages`
--

INSERT INTO `category_languages` (`id`, `category_id`, `lang`, `title`, `meta_title`, `meta_description`, `created_at`, `updated_at`) VALUES
(1, 1, 'en', 'Category Four', '', '', '2022-03-25 22:38:59', '2022-04-08 08:11:24'),
(2, 2, 'en', 'Category Five', '', '', '2022-03-25 22:38:59', '2022-04-08 08:11:34'),
(3, 3, 'en', 'Category Six', '', '', '2022-03-25 22:38:59', '2022-04-08 08:11:56'),
(4, 4, 'en', 'Category Seven', '', '', '2022-03-25 22:38:59', '2022-04-08 08:12:10'),
(5, 5, 'en', 'Category Eight', '', '', '2022-03-25 22:38:59', '2022-04-08 08:12:25'),
(6, 6, 'en', 'Category Nine', '', '', '2022-03-25 22:38:59', '2022-04-08 08:12:33'),
(7, 7, 'en', 'Category Ten', '', '', '2022-03-25 22:38:59', '2022-04-08 08:12:44'),
(9, 9, 'en', 'Category Two', '', '', '2022-03-25 22:38:59', '2022-04-08 08:10:28'),
(10, 10, 'en', 'Category Three', '', '', '2022-03-25 22:38:59', '2022-04-08 08:10:48'),
(11, 11, 'en', 'Category One', '', '', '2022-03-25 22:58:27', '2022-04-08 08:10:18');

-- --------------------------------------------------------

--
-- Table structure for table `checkouts`
--

CREATE TABLE `checkouts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `seller_id` bigint(20) UNSIGNED NOT NULL,
  `coupon_id` bigint(20) UNSIGNED DEFAULT NULL,
  `trx_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `coupon_discount` double DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cities`
--

CREATE TABLE `cities` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `state_id` bigint(20) UNSIGNED NOT NULL,
  `country_id` bigint(20) UNSIGNED NOT NULL,
  `cost` double(10,3) NOT NULL DEFAULT '0.000',
  `latitude` decimal(10,8) DEFAULT NULL,
  `longitude` decimal(11,8) DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `colors`
--

CREATE TABLE `colors` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `code` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `color_languages`
--

CREATE TABLE `color_languages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `color_id` bigint(20) UNSIGNED NOT NULL,
  `lang` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'en',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `commission_histories`
--

CREATE TABLE `commission_histories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` bigint(20) UNSIGNED DEFAULT NULL,
  `order_detail_id` bigint(20) UNSIGNED DEFAULT NULL,
  `seller_id` bigint(20) UNSIGNED DEFAULT NULL,
  `admin_commission` double(10,3) DEFAULT '0.000',
  `seller_earning` double(20,3) DEFAULT '0.000',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `compare_products`
--

CREATE TABLE `compare_products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `contact_us`
--

CREATE TABLE `contact_us` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `seller_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subject` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `reply` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `iso3` char(3) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `iso2` char(2) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phonecode` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `currency` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `currency_symbol` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `latitude` decimal(10,8) DEFAULT NULL,
  `longitude` decimal(11,8) DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`id`, `name`, `iso3`, `iso2`, `phonecode`, `currency`, `currency_symbol`, `latitude`, `longitude`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Afghanistan', 'AFG', 'AF', '93', 'AFN', '؋', '33.00000000', '65.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(2, 'Aland Islands', 'ALA', 'AX', '+358-18', 'EUR', '€', '60.11666700', '19.90000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(3, 'Albania', 'ALB', 'AL', '355', 'ALL', 'Lek', '41.00000000', '20.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(4, 'Algeria', 'DZA', 'DZ', '213', 'DZD', 'دج', '28.00000000', '3.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(5, 'American Samoa', 'ASM', 'AS', '+1-684', 'USD', '$', '-14.33333333', '-170.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(6, 'Andorra', 'AND', 'AD', '376', 'EUR', '€', '42.50000000', '1.50000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(7, 'Angola', 'AGO', 'AO', '244', 'AOA', 'Kz', '-12.50000000', '18.50000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(8, 'Anguilla', 'AIA', 'AI', '+1-264', 'XCD', '$', '18.25000000', '-63.16666666', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(9, 'Antarctica', 'ATA', 'AQ', '672', 'AAD', '$', '-74.65000000', '4.48000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(10, 'Antigua And Barbuda', 'ATG', 'AG', '+1-268', 'XCD', '$', '17.05000000', '-61.80000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(11, 'Argentina', 'ARG', 'AR', '54', 'ARS', '$', '-34.00000000', '-64.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(12, 'Armenia', 'ARM', 'AM', '374', 'AMD', '֏', '40.00000000', '45.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(13, 'Aruba', 'ABW', 'AW', '297', 'AWG', 'ƒ', '12.50000000', '-69.96666666', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(14, 'Australia', 'AUS', 'AU', '61', 'AUD', '$', '-27.00000000', '133.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(15, 'Austria', 'AUT', 'AT', '43', 'EUR', '€', '47.33333333', '13.33333333', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(16, 'Azerbaijan', 'AZE', 'AZ', '994', 'AZN', 'm', '40.50000000', '47.50000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(17, 'Bahamas The', 'BHS', 'BS', '+1-242', 'BSD', 'B$', '24.25000000', '-76.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(18, 'Bahrain', 'BHR', 'BH', '973', 'BHD', '.د.ب', '26.00000000', '50.55000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(19, 'Bangladesh', 'BGD', 'BD', '880', 'BDT', '৳', '24.00000000', '90.00000000', 1, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(20, 'Barbados', 'BRB', 'BB', '+1-246', 'BBD', 'Bds$', '13.16666666', '-59.53333333', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(21, 'Belarus', 'BLR', 'BY', '375', 'BYN', 'Br', '53.00000000', '28.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(22, 'Belgium', 'BEL', 'BE', '32', 'EUR', '€', '50.83333333', '4.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(23, 'Belize', 'BLZ', 'BZ', '501', 'BZD', '$', '17.25000000', '-88.75000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(24, 'Benin', 'BEN', 'BJ', '229', 'XOF', 'CFA', '9.50000000', '2.25000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(25, 'Bermuda', 'BMU', 'BM', '+1-441', 'BMD', '$', '32.33333333', '-64.75000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(26, 'Bhutan', 'BTN', 'BT', '975', 'BTN', 'Nu.', '27.50000000', '90.50000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(27, 'Bolivia', 'BOL', 'BO', '591', 'BOB', 'Bs.', '-17.00000000', '-65.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(28, 'Bosnia and Herzegovina', 'BIH', 'BA', '387', 'BAM', 'KM', '44.00000000', '18.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(29, 'Botswana', 'BWA', 'BW', '267', 'BWP', 'P', '-22.00000000', '24.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(30, 'Bouvet Island', 'BVT', 'BV', '0055', 'NOK', 'kr', '-54.43333333', '3.40000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(31, 'Brazil', 'BRA', 'BR', '55', 'BRL', 'R$', '-10.00000000', '-55.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(32, 'British Indian Ocean Territory', 'IOT', 'IO', '246', 'USD', '$', '-6.00000000', '71.50000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(33, 'Brunei', 'BRN', 'BN', '673', 'BND', 'B$', '4.50000000', '114.66666666', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(34, 'Bulgaria', 'BGR', 'BG', '359', 'BGN', 'Лв.', '43.00000000', '25.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(35, 'Burkina Faso', 'BFA', 'BF', '226', 'XOF', 'CFA', '13.00000000', '-2.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(36, 'Burundi', 'BDI', 'BI', '257', 'BIF', 'FBu', '-3.50000000', '30.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(37, 'Cambodia', 'KHM', 'KH', '855', 'KHR', 'KHR', '13.00000000', '105.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(38, 'Cameroon', 'CMR', 'CM', '237', 'XAF', 'FCFA', '6.00000000', '12.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(39, 'Canada', 'CAN', 'CA', '1', 'CAD', '$', '60.00000000', '-95.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(40, 'Cape Verde', 'CPV', 'CV', '238', 'CVE', '$', '16.00000000', '-24.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(41, 'Cayman Islands', 'CYM', 'KY', '+1-345', 'KYD', '$', '19.50000000', '-80.50000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(42, 'Central African Republic', 'CAF', 'CF', '236', 'XAF', 'FCFA', '7.00000000', '21.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(43, 'Chad', 'TCD', 'TD', '235', 'XAF', 'FCFA', '15.00000000', '19.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(44, 'Chile', 'CHL', 'CL', '56', 'CLP', '$', '-30.00000000', '-71.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(45, 'China', 'CHN', 'CN', '86', 'CNY', '¥', '35.00000000', '105.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(46, 'Christmas Island', 'CXR', 'CX', '61', 'AUD', '$', '-10.50000000', '105.66666666', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(47, 'Cocos (Keeling) Islands', 'CCK', 'CC', '61', 'AUD', '$', '-12.50000000', '96.83333333', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(48, 'Colombia', 'COL', 'CO', '57', 'COP', '$', '4.00000000', '-72.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(49, 'Comoros', 'COM', 'KM', '269', 'KMF', 'CF', '-12.16666666', '44.25000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(50, 'Congo', 'COG', 'CG', '242', 'XAF', 'FC', '-1.00000000', '15.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(51, 'Democratic Republic of the Congo', 'COD', 'CD', '243', 'CDF', 'FC', '0.00000000', '25.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(52, 'Cook Islands', 'COK', 'CK', '682', 'NZD', '$', '-21.23333333', '-159.76666666', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(53, 'Costa Rica', 'CRI', 'CR', '506', 'CRC', '₡', '10.00000000', '-84.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(54, 'Cote D\'Ivoire (Ivory Coast)', 'CIV', 'CI', '225', 'XOF', 'CFA', '8.00000000', '-5.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(55, 'Croatia', 'HRV', 'HR', '385', 'HRK', 'kn', '45.16666666', '15.50000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(56, 'Cuba', 'CUB', 'CU', '53', 'CUP', '$', '21.50000000', '-80.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(57, 'Cyprus', 'CYP', 'CY', '357', 'EUR', '€', '35.00000000', '33.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(58, 'Czech Republic', 'CZE', 'CZ', '420', 'CZK', 'Kč', '49.75000000', '15.50000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(59, 'Denmark', 'DNK', 'DK', '45', 'DKK', 'Kr.', '56.00000000', '10.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(60, 'Djibouti', 'DJI', 'DJ', '253', 'DJF', 'Fdj', '11.50000000', '43.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(61, 'Dominica', 'DMA', 'DM', '+1-767', 'XCD', '$', '15.41666666', '-61.33333333', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(62, 'Dominican Republic', 'DOM', 'DO', '+1-809 and 1-829', 'DOP', '$', '19.00000000', '-70.66666666', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(63, 'East Timor', 'TLS', 'TL', '670', 'USD', '$', '-8.83333333', '125.91666666', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(64, 'Ecuador', 'ECU', 'EC', '593', 'USD', '$', '-2.00000000', '-77.50000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(65, 'Egypt', 'EGY', 'EG', '20', 'EGP', 'ج.م', '27.00000000', '30.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(66, 'El Salvador', 'SLV', 'SV', '503', 'USD', '$', '13.83333333', '-88.91666666', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(67, 'Equatorial Guinea', 'GNQ', 'GQ', '240', 'XAF', 'FCFA', '2.00000000', '10.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(68, 'Eritrea', 'ERI', 'ER', '291', 'ERN', 'Nfk', '15.00000000', '39.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(69, 'Estonia', 'EST', 'EE', '372', 'EUR', '€', '59.00000000', '26.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(70, 'Ethiopia', 'ETH', 'ET', '251', 'ETB', 'Nkf', '8.00000000', '38.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(71, 'Falkland Islands', 'FLK', 'FK', '500', 'FKP', '£', '-51.75000000', '-59.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(72, 'Faroe Islands', 'FRO', 'FO', '298', 'DKK', 'Kr.', '62.00000000', '-7.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(73, 'Fiji Islands', 'FJI', 'FJ', '679', 'FJD', 'FJ$', '-18.00000000', '175.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(74, 'Finland', 'FIN', 'FI', '358', 'EUR', '€', '64.00000000', '26.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(75, 'France', 'FRA', 'FR', '33', 'EUR', '€', '46.00000000', '2.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(76, 'French Guiana', 'GUF', 'GF', '594', 'EUR', '€', '4.00000000', '-53.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(77, 'French Polynesia', 'PYF', 'PF', '689', 'XPF', '₣', '-15.00000000', '-140.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(78, 'French Southern Territories', 'ATF', 'TF', '262', 'EUR', '€', '-49.25000000', '69.16700000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(79, 'Gabon', 'GAB', 'GA', '241', 'XAF', 'FCFA', '-1.00000000', '11.75000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(80, 'Gambia The', 'GMB', 'GM', '220', 'GMD', 'D', '13.46666666', '-16.56666666', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(81, 'Georgia', 'GEO', 'GE', '995', 'GEL', 'ლ', '42.00000000', '43.50000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(82, 'Germany', 'DEU', 'DE', '49', 'EUR', '€', '51.00000000', '9.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(83, 'Ghana', 'GHA', 'GH', '233', 'GHS', 'GH₵', '8.00000000', '-2.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(84, 'Gibraltar', 'GIB', 'GI', '350', 'GIP', '£', '36.13333333', '-5.35000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(85, 'Greece', 'GRC', 'GR', '30', 'EUR', '€', '39.00000000', '22.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(86, 'Greenland', 'GRL', 'GL', '299', 'DKK', 'Kr.', '72.00000000', '-40.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(87, 'Grenada', 'GRD', 'GD', '+1-473', 'XCD', '$', '12.11666666', '-61.66666666', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(88, 'Guadeloupe', 'GLP', 'GP', '590', 'EUR', '€', '16.25000000', '-61.58333300', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(89, 'Guam', 'GUM', 'GU', '+1-671', 'USD', '$', '13.46666666', '144.78333333', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(90, 'Guatemala', 'GTM', 'GT', '502', 'GTQ', 'Q', '15.50000000', '-90.25000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(91, 'Guernsey and Alderney', 'GGY', 'GG', '+44-1481', 'GBP', '£', '49.46666666', '-2.58333333', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(92, 'Guinea', 'GIN', 'GN', '224', 'GNF', 'FG', '11.00000000', '-10.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(93, 'Guinea-Bissau', 'GNB', 'GW', '245', 'XOF', 'CFA', '12.00000000', '-15.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(94, 'Guyana', 'GUY', 'GY', '592', 'GYD', '$', '5.00000000', '-59.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(95, 'Haiti', 'HTI', 'HT', '509', 'HTG', 'G', '19.00000000', '-72.41666666', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(96, 'Heard Island and McDonald Islands', 'HMD', 'HM', '672', 'AUD', '$', '-53.10000000', '72.51666666', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(97, 'Honduras', 'HND', 'HN', '504', 'HNL', 'L', '15.00000000', '-86.50000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(98, 'Hong Kong S.A.R.', 'HKG', 'HK', '852', 'HKD', '$', '22.25000000', '114.16666666', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(99, 'Hungary', 'HUN', 'HU', '36', 'HUF', 'Ft', '47.00000000', '20.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(100, 'Iceland', 'ISL', 'IS', '354', 'ISK', 'kr', '65.00000000', '-18.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(101, 'India', 'IND', 'IN', '91', 'INR', '₹', '20.00000000', '77.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(102, 'Indonesia', 'IDN', 'ID', '62', 'IDR', 'Rp', '-5.00000000', '120.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(103, 'Iran', 'IRN', 'IR', '98', 'IRR', '﷼', '32.00000000', '53.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(104, 'Iraq', 'IRQ', 'IQ', '964', 'IQD', 'د.ع', '33.00000000', '44.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(105, 'Ireland', 'IRL', 'IE', '353', 'EUR', '€', '53.00000000', '-8.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(106, 'Israel', 'ISR', 'IL', '972', 'ILS', '₪', '31.50000000', '34.75000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(107, 'Italy', 'ITA', 'IT', '39', 'EUR', '€', '42.83333333', '12.83333333', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(108, 'Jamaica', 'JAM', 'JM', '+1-876', 'JMD', 'J$', '18.25000000', '-77.50000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(109, 'Japan', 'JPN', 'JP', '81', 'JPY', '¥', '36.00000000', '138.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(110, 'Jersey', 'JEY', 'JE', '+44-1534', 'GBP', '£', '49.25000000', '-2.16666666', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(111, 'Jordan', 'JOR', 'JO', '962', 'JOD', 'ا.د', '31.00000000', '36.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(112, 'Kazakhstan', 'KAZ', 'KZ', '7', 'KZT', 'лв', '48.00000000', '68.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(113, 'Kenya', 'KEN', 'KE', '254', 'KES', 'KSh', '1.00000000', '38.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(114, 'Kiribati', 'KIR', 'KI', '686', 'AUD', '$', '1.41666666', '173.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(115, 'North Korea', 'PRK', 'KP', '850', 'KPW', '₩', '40.00000000', '127.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(116, 'South Korea', 'KOR', 'KR', '82', 'KRW', '₩', '37.00000000', '127.50000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(117, 'Kuwait', 'KWT', 'KW', '965', 'KWD', 'ك.د', '29.50000000', '45.75000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(118, 'Kyrgyzstan', 'KGZ', 'KG', '996', 'KGS', 'лв', '41.00000000', '75.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(119, 'Laos', 'LAO', 'LA', '856', 'LAK', '₭', '18.00000000', '105.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(120, 'Latvia', 'LVA', 'LV', '371', 'EUR', '€', '57.00000000', '25.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(121, 'Lebanon', 'LBN', 'LB', '961', 'LBP', '£', '33.83333333', '35.83333333', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(122, 'Lesotho', 'LSO', 'LS', '266', 'LSL', 'L', '-29.50000000', '28.50000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(123, 'Liberia', 'LBR', 'LR', '231', 'LRD', '$', '6.50000000', '-9.50000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(124, 'Libya', 'LBY', 'LY', '218', 'LYD', 'د.ل', '25.00000000', '17.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(125, 'Liechtenstein', 'LIE', 'LI', '423', 'CHF', 'CHf', '47.26666666', '9.53333333', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(126, 'Lithuania', 'LTU', 'LT', '370', 'EUR', '€', '56.00000000', '24.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(127, 'Luxembourg', 'LUX', 'LU', '352', 'EUR', '€', '49.75000000', '6.16666666', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(128, 'Macau S.A.R.', 'MAC', 'MO', '853', 'MOP', '$', '22.16666666', '113.55000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(129, 'Macedonia', 'MKD', 'MK', '389', 'MKD', 'ден', '41.83333333', '22.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(130, 'Madagascar', 'MDG', 'MG', '261', 'MGA', 'Ar', '-20.00000000', '47.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(131, 'Malawi', 'MWI', 'MW', '265', 'MWK', 'MK', '-13.50000000', '34.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(132, 'Malaysia', 'MYS', 'MY', '60', 'MYR', 'RM', '2.50000000', '112.50000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(133, 'Maldives', 'MDV', 'MV', '960', 'MVR', 'Rf', '3.25000000', '73.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(134, 'Mali', 'MLI', 'ML', '223', 'XOF', 'CFA', '17.00000000', '-4.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(135, 'Malta', 'MLT', 'MT', '356', 'EUR', '€', '35.83333333', '14.58333333', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(136, 'Man (Isle of)', 'IMN', 'IM', '+44-1624', 'GBP', '£', '54.25000000', '-4.50000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(137, 'Marshall Islands', 'MHL', 'MH', '692', 'USD', '$', '9.00000000', '168.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(138, 'Martinique', 'MTQ', 'MQ', '596', 'EUR', '€', '14.66666700', '-61.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(139, 'Mauritania', 'MRT', 'MR', '222', 'MRO', 'MRU', '20.00000000', '-12.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(140, 'Mauritius', 'MUS', 'MU', '230', 'MUR', '₨', '-20.28333333', '57.55000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(141, 'Mayotte', 'MYT', 'YT', '262', 'EUR', '€', '-12.83333333', '45.16666666', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(142, 'Mexico', 'MEX', 'MX', '52', 'MXN', '$', '23.00000000', '-102.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(143, 'Micronesia', 'FSM', 'FM', '691', 'USD', '$', '6.91666666', '158.25000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(144, 'Moldova', 'MDA', 'MD', '373', 'MDL', 'L', '47.00000000', '29.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(145, 'Monaco', 'MCO', 'MC', '377', 'EUR', '€', '43.73333333', '7.40000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(146, 'Mongolia', 'MNG', 'MN', '976', 'MNT', '₮', '46.00000000', '105.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(147, 'Montenegro', 'MNE', 'ME', '382', 'EUR', '€', '42.50000000', '19.30000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(148, 'Montserrat', 'MSR', 'MS', '+1-664', 'XCD', '$', '16.75000000', '-62.20000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(149, 'Morocco', 'MAR', 'MA', '212', 'MAD', 'DH', '32.00000000', '-5.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(150, 'Mozambique', 'MOZ', 'MZ', '258', 'MZN', 'MT', '-18.25000000', '35.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(151, 'Myanmar', 'MMR', 'MM', '95', 'MMK', 'K', '22.00000000', '98.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(152, 'Namibia', 'NAM', 'NA', '264', 'NAD', '$', '-22.00000000', '17.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(153, 'Nauru', 'NRU', 'NR', '674', 'AUD', '$', '-0.53333333', '166.91666666', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(154, 'Nepal', 'NPL', 'NP', '977', 'NPR', '₨', '28.00000000', '84.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(155, 'Bonaire, Sint Eustatius and Saba', 'BES', 'BQ', '599', 'USD', '$', '12.15000000', '-68.26666700', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(156, 'Netherlands', 'NLD', 'NL', '31', 'EUR', '€', '52.50000000', '5.75000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(157, 'New Caledonia', 'NCL', 'NC', '687', 'XPF', '₣', '-21.50000000', '165.50000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(158, 'New Zealand', 'NZL', 'NZ', '64', 'NZD', '$', '-41.00000000', '174.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(159, 'Nicaragua', 'NIC', 'NI', '505', 'NIO', 'C$', '13.00000000', '-85.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(160, 'Niger', 'NER', 'NE', '227', 'XOF', 'CFA', '16.00000000', '8.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(161, 'Nigeria', 'NGA', 'NG', '234', 'NGN', '₦', '10.00000000', '8.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(162, 'Niue', 'NIU', 'NU', '683', 'NZD', '$', '-19.03333333', '-169.86666666', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(163, 'Norfolk Island', 'NFK', 'NF', '672', 'AUD', '$', '-29.03333333', '167.95000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(164, 'Northern Mariana Islands', 'MNP', 'MP', '+1-670', 'USD', '$', '15.20000000', '145.75000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(165, 'Norway', 'NOR', 'NO', '47', 'NOK', 'kr', '62.00000000', '10.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(166, 'Oman', 'OMN', 'OM', '968', 'OMR', '.ع.ر', '21.00000000', '57.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(167, 'Pakistan', 'PAK', 'PK', '92', 'PKR', '₨', '30.00000000', '70.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(168, 'Palau', 'PLW', 'PW', '680', 'USD', '$', '7.50000000', '134.50000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(169, 'Palestinian Territory Occupied', 'PSE', 'PS', '970', 'ILS', '₪', '31.90000000', '35.20000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(170, 'Panama', 'PAN', 'PA', '507', 'PAB', 'B/.', '9.00000000', '-80.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(171, 'Papua new Guinea', 'PNG', 'PG', '675', 'PGK', 'K', '-6.00000000', '147.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(172, 'Paraguay', 'PRY', 'PY', '595', 'PYG', '₲', '-23.00000000', '-58.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(173, 'Peru', 'PER', 'PE', '51', 'PEN', 'S/.', '-10.00000000', '-76.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(174, 'Philippines', 'PHL', 'PH', '63', 'PHP', '₱', '13.00000000', '122.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(175, 'Pitcairn Island', 'PCN', 'PN', '870', 'NZD', '$', '-25.06666666', '-130.10000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(176, 'Poland', 'POL', 'PL', '48', 'PLN', 'zł', '52.00000000', '20.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(177, 'Portugal', 'PRT', 'PT', '351', 'EUR', '€', '39.50000000', '-8.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(178, 'Puerto Rico', 'PRI', 'PR', '+1-787 and 1-939', 'USD', '$', '18.25000000', '-66.50000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(179, 'Qatar', 'QAT', 'QA', '974', 'QAR', 'ق.ر', '25.50000000', '51.25000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(180, 'Reunion', 'REU', 'RE', '262', 'EUR', '€', '-21.15000000', '55.50000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(181, 'Romania', 'ROU', 'RO', '40', 'RON', 'lei', '46.00000000', '25.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(182, 'Russia', 'RUS', 'RU', '7', 'RUB', '₽', '60.00000000', '100.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(183, 'Rwanda', 'RWA', 'RW', '250', 'RWF', 'FRw', '-2.00000000', '30.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(184, 'Saint Helena', 'SHN', 'SH', '290', 'SHP', '£', '-15.95000000', '-5.70000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(185, 'Saint Kitts And Nevis', 'KNA', 'KN', '+1-869', 'XCD', '$', '17.33333333', '-62.75000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(186, 'Saint Lucia', 'LCA', 'LC', '+1-758', 'XCD', '$', '13.88333333', '-60.96666666', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(187, 'Saint Pierre and Miquelon', 'SPM', 'PM', '508', 'EUR', '€', '46.83333333', '-56.33333333', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(188, 'Saint Vincent And The Grenadines', 'VCT', 'VC', '+1-784', 'XCD', '$', '13.25000000', '-61.20000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(189, 'Saint-Barthelemy', 'BLM', 'BL', '590', 'EUR', '€', '18.50000000', '-63.41666666', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(190, 'Saint-Martin (French part)', 'MAF', 'MF', '590', 'EUR', '€', '18.08333333', '-63.95000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(191, 'Samoa', 'WSM', 'WS', '685', 'WST', 'SAT', '-13.58333333', '-172.33333333', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(192, 'San Marino', 'SMR', 'SM', '378', 'EUR', '€', '43.76666666', '12.41666666', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(193, 'Sao Tome and Principe', 'STP', 'ST', '239', 'STD', 'Db', '1.00000000', '7.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(194, 'Saudi Arabia', 'SAU', 'SA', '966', 'SAR', '﷼', '25.00000000', '45.00000000', 0, '2018-07-20 08:11:03', '2021-09-26 01:09:09'),
(195, 'Senegal', 'SEN', 'SN', '221', 'XOF', 'CFA', '14.00000000', '-14.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(196, 'Serbia', 'SRB', 'RS', '381', 'RSD', 'din', '44.00000000', '21.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(197, 'Seychelles', 'SYC', 'SC', '248', 'SCR', 'SRe', '-4.58333333', '55.66666666', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(198, 'Sierra Leone', 'SLE', 'SL', '232', 'SLL', 'Le', '8.50000000', '-11.50000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(199, 'Singapore', 'SGP', 'SG', '65', 'SGD', '$', '1.36666666', '103.80000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(200, 'Slovakia', 'SVK', 'SK', '421', 'EUR', '€', '48.66666666', '19.50000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(201, 'Slovenia', 'SVN', 'SI', '386', 'EUR', '€', '46.11666666', '14.81666666', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(202, 'Solomon Islands', 'SLB', 'SB', '677', 'SBD', 'Si$', '-8.00000000', '159.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(203, 'Somalia', 'SOM', 'SO', '252', 'SOS', 'Sh.so.', '10.00000000', '49.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(204, 'South Africa', 'ZAF', 'ZA', '27', 'ZAR', 'R', '-29.00000000', '24.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(205, 'South Georgia', 'SGS', 'GS', '500', 'GBP', '£', '-54.50000000', '-37.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(206, 'South Sudan', 'SSD', 'SS', '211', 'SSP', '£', '7.00000000', '30.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(207, 'Spain', 'ESP', 'ES', '34', 'EUR', '€', '40.00000000', '-4.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(208, 'Sri Lanka', 'LKA', 'LK', '94', 'LKR', 'Rs', '7.00000000', '81.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(209, 'Sudan', 'SDN', 'SD', '249', 'SDG', '.س.ج', '15.00000000', '30.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(210, 'Suriname', 'SUR', 'SR', '597', 'SRD', '$', '4.00000000', '-56.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(211, 'Svalbard And Jan Mayen Islands', 'SJM', 'SJ', '47', 'NOK', 'kr', '78.00000000', '20.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(212, 'Swaziland', 'SWZ', 'SZ', '268', 'SZL', 'E', '-26.50000000', '31.50000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(213, 'Sweden', 'SWE', 'SE', '46', 'SEK', 'kr', '62.00000000', '15.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(214, 'Switzerland', 'CHE', 'CH', '41', 'CHF', 'CHf', '47.00000000', '8.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(215, 'Syria', 'SYR', 'SY', '963', 'SYP', 'LS', '35.00000000', '38.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(216, 'Taiwan', 'TWN', 'TW', '886', 'TWD', '$', '23.50000000', '121.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(217, 'Tajikistan', 'TJK', 'TJ', '992', 'TJS', 'SM', '39.00000000', '71.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(218, 'Tanzania', 'TZA', 'TZ', '255', 'TZS', 'TSh', '-6.00000000', '35.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(219, 'Thailand', 'THA', 'TH', '66', 'THB', '฿', '15.00000000', '100.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(220, 'Togo', 'TGO', 'TG', '228', 'XOF', 'CFA', '8.00000000', '1.16666666', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(221, 'Tokelau', 'TKL', 'TK', '690', 'NZD', '$', '-9.00000000', '-172.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(222, 'Tonga', 'TON', 'TO', '676', 'TOP', '$', '-20.00000000', '-175.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(223, 'Trinidad And Tobago', 'TTO', 'TT', '+1-868', 'TTD', '$', '11.00000000', '-61.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(224, 'Tunisia', 'TUN', 'TN', '216', 'TND', 'ت.د', '34.00000000', '9.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(225, 'Turkey', 'TUR', 'TR', '90', 'TRY', '₺', '39.00000000', '35.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(226, 'Turkmenistan', 'TKM', 'TM', '993', 'TMT', 'T', '40.00000000', '60.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(227, 'Turks And Caicos Islands', 'TCA', 'TC', '+1-649', 'USD', '$', '21.75000000', '-71.58333333', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(228, 'Tuvalu', 'TUV', 'TV', '688', 'AUD', '$', '-8.00000000', '178.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(229, 'Uganda', 'UGA', 'UG', '256', 'UGX', 'USh', '1.00000000', '32.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(230, 'Ukraine', 'UKR', 'UA', '380', 'UAH', '₴', '49.00000000', '32.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(231, 'United Arab Emirates', 'ARE', 'AE', '971', 'AED', 'إ.د', '24.00000000', '54.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(232, 'United Kingdom', 'GBR', 'GB', '44', 'GBP', '£', '54.00000000', '-2.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(233, 'United States', 'USA', 'US', '1', 'USD', '$', '38.00000000', '-97.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(234, 'United States Minor Outlying Islands', 'UMI', 'UM', '1', 'USD', '$', '0.00000000', '0.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(235, 'Uruguay', 'URY', 'UY', '598', 'UYU', '$', '-33.00000000', '-56.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(236, 'Uzbekistan', 'UZB', 'UZ', '998', 'UZS', 'лв', '41.00000000', '64.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(237, 'Vanuatu', 'VUT', 'VU', '678', 'VUV', 'VT', '-16.00000000', '167.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(238, 'Vatican City State (Holy See)', 'VAT', 'VA', '379', 'EUR', '€', '41.90000000', '12.45000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(239, 'Venezuela', 'VEN', 'VE', '58', 'VEF', 'Bs', '8.00000000', '-66.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(240, 'Vietnam', 'VNM', 'VN', '84', 'VND', '₫', '16.16666666', '107.83333333', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(241, 'Virgin Islands (British)', 'VGB', 'VG', '+1-284', 'USD', '$', '18.43138300', '-64.62305000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(242, 'Virgin Islands (US)', 'VIR', 'VI', '+1-340', 'USD', '$', '18.34000000', '-64.93000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(243, 'Wallis And Futuna Islands', 'WLF', 'WF', '681', 'XPF', '₣', '-13.30000000', '-176.20000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(244, 'Western Sahara', 'ESH', 'EH', '212', 'MAD', 'MAD', '24.50000000', '-13.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(245, 'Yemen', 'YEM', 'YE', '967', 'YER', '﷼', '15.00000000', '48.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(246, 'Zambia', 'ZMB', 'ZM', '260', 'ZMW', 'ZK', '-15.00000000', '30.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(247, 'Zimbabwe', 'ZWE', 'ZW', '263', 'ZWL', '$', '-20.00000000', '30.00000000', 0, '2018-07-20 08:11:03', '2021-08-01 02:37:27'),
(248, 'Kosovo', 'XKX', 'XK', '383', 'EUR', '€', '42.56129090', '20.34030350', 0, '2020-08-15 03:33:50', '2021-08-01 02:37:57'),
(249, 'Curaçao', 'CUW', 'CW', '599', 'ANG', 'ƒ', '12.11666700', '-68.93333300', 0, '2020-10-25 02:54:20', '2021-08-01 02:37:27'),
(250, 'Sint Maarten (Dutch part)', 'SXM', 'SX', '1721', 'ANG', 'ƒ', '18.03333300', '-63.05000000', 0, '2020-12-05 01:03:39', '2021-08-01 02:37:27');

-- --------------------------------------------------------

--
-- Table structure for table `coupons`
--

CREATE TABLE `coupons` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'if none or 1 then own else sellers',
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `banner_id` bigint(20) UNSIGNED DEFAULT NULL,
  `banner` text COLLATE utf8mb4_unicode_ci,
  `minimum_shopping` double DEFAULT NULL,
  `maximum_discount` double DEFAULT NULL,
  `product_id` text COLLATE utf8mb4_unicode_ci,
  `discount_type` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `discount` double DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `start_date` timestamp NULL DEFAULT NULL,
  `end_date` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `coupon_languages`
--

CREATE TABLE `coupon_languages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `coupon_id` bigint(20) UNSIGNED NOT NULL,
  `lang` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'en',
  `title` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `currencies`
--

CREATE TABLE `currencies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `symbol` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `exchange_rate` double DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `currencies`
--

INSERT INTO `currencies` (`id`, `name`, `symbol`, `code`, `exchange_rate`, `status`, `created_at`, `updated_at`) VALUES
(1, 'US Dollar', '$', 'USD', 1, 1, '2022-04-06 00:07:39', '2022-04-06 00:07:39');

-- --------------------------------------------------------

--
-- Table structure for table `delivery_heroes`
--

CREATE TABLE `delivery_heroes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `pickup_hub_id` bigint(20) UNSIGNED DEFAULT NULL,
  `driving_licence` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `driving_licence_image` text COLLATE utf8mb4_unicode_ci,
  `salary` double DEFAULT NULL,
  `commission` double DEFAULT NULL,
  `total_commission` double DEFAULT NULL,
  `total_collection` double DEFAULT NULL,
  `total_paid` double DEFAULT NULL,
  `country_id` bigint(20) DEFAULT NULL,
  `state_id` bigint(20) DEFAULT NULL,
  `city_id` int(11) DEFAULT NULL,
  `address` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `delivery_hero_accounts`
--

CREATE TABLE `delivery_hero_accounts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'processed by user',
  `order_id` bigint(20) UNSIGNED DEFAULT NULL,
  `delivery_hero_id` bigint(20) UNSIGNED DEFAULT NULL,
  `source` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'income means in, expense means out',
  `amount` double DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `delivery_histories`
--

CREATE TABLE `delivery_histories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `delivery_hero_id` bigint(20) UNSIGNED DEFAULT NULL,
  `event` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remarks` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `flag_icons`
--

CREATE TABLE `flag_icons` (
  `id` int(10) UNSIGNED NOT NULL,
  `image` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `flag_icons`
--

INSERT INTO `flag_icons` (`id`, `image`, `title`, `created_at`, `updated_at`) VALUES
(1, 'images/flags/ad.png', 'AD', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(2, 'images/flags/ae.png', 'AE', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(3, 'images/flags/af.png', 'AF', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(4, 'images/flags/ag.png', 'AG', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(5, 'images/flags/ai.png', 'AI', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(6, 'images/flags/al.png', 'AL', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(7, 'images/flags/am.png', 'AM', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(8, 'images/flags/ao.png', 'AO', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(9, 'images/flags/ar.png', 'AR', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(10, 'images/flags/as.png', 'AS', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(11, 'images/flags/at.png', 'AT', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(12, 'images/flags/au.png', 'AU', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(13, 'images/flags/aw.png', 'AW', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(14, 'images/flags/ax.png', 'AX', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(15, 'images/flags/az.png', 'AZ', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(16, 'images/flags/ba.png', 'BA', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(17, 'images/flags/bb.png', 'BB', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(18, 'images/flags/bd.png', 'BD', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(19, 'images/flags/be.png', 'BE', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(20, 'images/flags/bf.png', 'BF', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(21, 'images/flags/bg.png', 'BG', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(22, 'images/flags/bh.png', 'BH', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(23, 'images/flags/bi.png', 'BI', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(24, 'images/flags/bj.png', 'BJ', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(25, 'images/flags/bm.png', 'BM', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(26, 'images/flags/bn.png', 'BN', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(27, 'images/flags/bo.png', 'BO', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(28, 'images/flags/br.png', 'BR', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(29, 'images/flags/bs.png', 'BS', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(30, 'images/flags/bt.png', 'BT', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(31, 'images/flags/bv.png', 'BV', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(32, 'images/flags/bw.png', 'BW', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(33, 'images/flags/by.png', 'BY', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(34, 'images/flags/bz.png', 'BZ', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(35, 'images/flags/ca.png', 'CA', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(36, 'images/flags/cc.png', 'CC', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(37, 'images/flags/cd.png', 'CD', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(38, 'images/flags/cf.png', 'CF', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(39, 'images/flags/cg.png', 'CG', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(40, 'images/flags/ch.png', 'CH', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(41, 'images/flags/ci.png', 'CI', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(42, 'images/flags/ck.png', 'CK', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(43, 'images/flags/cl.png', 'CL', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(44, 'images/flags/cm.png', 'CM', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(45, 'images/flags/cn.png', 'CN', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(46, 'images/flags/co.png', 'CO', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(47, 'images/flags/cr.png', 'CR', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(48, 'images/flags/cu.png', 'CU', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(49, 'images/flags/cv.png', 'CV', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(50, 'images/flags/cx.png', 'CX', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(51, 'images/flags/cy.png', 'CY', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(52, 'images/flags/cz.png', 'CZ', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(53, 'images/flags/de.png', 'DE', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(54, 'images/flags/dj.png', 'DJ', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(55, 'images/flags/dk.png', 'DK', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(56, 'images/flags/dm.png', 'DM', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(57, 'images/flags/do.png', 'DO', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(58, 'images/flags/dz.png', 'DZ', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(59, 'images/flags/ec.png', 'EC', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(60, 'images/flags/ee.png', 'EE', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(61, 'images/flags/eg.png', 'EG', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(62, 'images/flags/eh.png', 'EH', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(63, 'images/flags/er.png', 'ER', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(64, 'images/flags/es.png', 'ES', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(65, 'images/flags/et.png', 'ET', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(66, 'images/flags/fi.png', 'FI', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(67, 'images/flags/fj.png', 'FJ', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(68, 'images/flags/fk.png', 'FK', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(69, 'images/flags/fm.png', 'FM', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(70, 'images/flags/fo.png', 'FO', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(71, 'images/flags/fr.png', 'FR', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(72, 'images/flags/ga.png', 'GA', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(73, 'images/flags/gb.png', 'GB', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(74, 'images/flags/gd.png', 'GD', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(75, 'images/flags/ge.png', 'GE', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(76, 'images/flags/gf.png', 'GF', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(77, 'images/flags/gh.png', 'GH', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(78, 'images/flags/gi.png', 'GI', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(79, 'images/flags/gl.png', 'GL', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(80, 'images/flags/gm.png', 'GM', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(81, 'images/flags/gn.png', 'GN', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(82, 'images/flags/gp.png', 'GP', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(83, 'images/flags/gq.png', 'GQ', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(84, 'images/flags/gr.png', 'GR', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(85, 'images/flags/gs.png', 'GS', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(86, 'images/flags/gt.png', 'GT', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(87, 'images/flags/gu.png', 'GU', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(88, 'images/flags/gw.png', 'GW', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(89, 'images/flags/gy.png', 'GY', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(90, 'images/flags/hk.png', 'HK', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(91, 'images/flags/hm.png', 'HM', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(92, 'images/flags/hn.png', 'HN', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(93, 'images/flags/hr.png', 'HR', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(94, 'images/flags/ht.png', 'HT', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(95, 'images/flags/hu.png', 'HU', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(96, 'images/flags/id.png', 'ID', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(97, 'images/flags/ie.png', 'IE', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(98, 'images/flags/il.png', 'IL', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(99, 'images/flags/in.png', 'IN', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(100, 'images/flags/io.png', 'IO', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(101, 'images/flags/iq.png', 'IQ', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(102, 'images/flags/ir.png', 'IR', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(103, 'images/flags/is.png', 'IS', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(104, 'images/flags/it.png', 'IT', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(105, 'images/flags/jm.png', 'JM', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(106, 'images/flags/jo.png', 'JO', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(107, 'images/flags/jp.png', 'JP', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(108, 'images/flags/ke.png', 'KE', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(109, 'images/flags/kg.png', 'KG', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(110, 'images/flags/kh.png', 'KH', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(111, 'images/flags/ki.png', 'KI', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(112, 'images/flags/km.png', 'KM', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(113, 'images/flags/kn.png', 'KN', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(114, 'images/flags/kp.png', 'KP', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(115, 'images/flags/kr.png', 'KR', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(116, 'images/flags/kw.png', 'KW', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(117, 'images/flags/ky.png', 'KY', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(118, 'images/flags/kz.png', 'KZ', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(119, 'images/flags/la.png', 'LA', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(120, 'images/flags/lb.png', 'LB', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(121, 'images/flags/lc.png', 'LC', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(122, 'images/flags/li.png', 'LI', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(123, 'images/flags/lk.png', 'LK', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(124, 'images/flags/lr.png', 'LR', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(125, 'images/flags/ls.png', 'LS', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(126, 'images/flags/lt.png', 'LT', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(127, 'images/flags/lu.png', 'LU', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(128, 'images/flags/lv.png', 'LV', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(129, 'images/flags/ly.png', 'LY', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(130, 'images/flags/ma.png', 'MA', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(131, 'images/flags/mc.png', 'MC', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(132, 'images/flags/md.png', 'MD', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(133, 'images/flags/me.png', 'ME', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(134, 'images/flags/mg.png', 'MG', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(135, 'images/flags/mh.png', 'MH', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(136, 'images/flags/mk.png', 'MK', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(137, 'images/flags/ml.png', 'ML', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(138, 'images/flags/mm.png', 'MM', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(139, 'images/flags/mn.png', 'MN', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(140, 'images/flags/mo.png', 'MO', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(141, 'images/flags/mp.png', 'MP', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(142, 'images/flags/mq.png', 'MQ', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(143, 'images/flags/mr.png', 'MR', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(144, 'images/flags/ms.png', 'MS', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(145, 'images/flags/mt.png', 'MT', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(146, 'images/flags/mu.png', 'MU', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(147, 'images/flags/mv.png', 'MV', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(148, 'images/flags/mw.png', 'MW', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(149, 'images/flags/mx.png', 'MX', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(150, 'images/flags/my.png', 'MY', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(151, 'images/flags/mz.png', 'MZ', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(152, 'images/flags/na.png', 'NA', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(153, 'images/flags/nc.png', 'NC', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(154, 'images/flags/ne.png', 'NE', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(155, 'images/flags/nf.png', 'NF', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(156, 'images/flags/ng.png', 'NG', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(157, 'images/flags/ni.png', 'NI', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(158, 'images/flags/nl.png', 'NL', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(159, 'images/flags/no.png', 'NO', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(160, 'images/flags/np.png', 'NP', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(161, 'images/flags/nr.png', 'NR', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(162, 'images/flags/nu.png', 'NU', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(163, 'images/flags/nz.png', 'NZ', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(164, 'images/flags/om.png', 'OM', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(165, 'images/flags/pa.png', 'PA', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(166, 'images/flags/pe.png', 'PE', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(167, 'images/flags/pf.png', 'PF', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(168, 'images/flags/pg.png', 'PG', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(169, 'images/flags/ph.png', 'PH', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(170, 'images/flags/pk.png', 'PK', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(171, 'images/flags/pl.png', 'PL', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(172, 'images/flags/pm.png', 'PM', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(173, 'images/flags/pn.png', 'PN', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(174, 'images/flags/pr.png', 'PR', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(175, 'images/flags/ps.png', 'PS', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(176, 'images/flags/pt.png', 'PT', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(177, 'images/flags/pw.png', 'PW', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(178, 'images/flags/py.png', 'PY', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(179, 'images/flags/qa.png', 'QA', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(180, 'images/flags/re.png', 'RE', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(181, 'images/flags/ro.png', 'RO', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(182, 'images/flags/rs.png', 'RS', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(183, 'images/flags/ru.png', 'RU', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(184, 'images/flags/rw.png', 'RW', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(185, 'images/flags/sa.png', 'SA', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(186, 'images/flags/sb.png', 'SB', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(187, 'images/flags/sc.png', 'SC', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(188, 'images/flags/sd.png', 'SD', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(189, 'images/flags/se.png', 'SE', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(190, 'images/flags/sg.png', 'SG', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(191, 'images/flags/sh.png', 'SH', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(192, 'images/flags/si.png', 'SI', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(193, 'images/flags/sj.png', 'SJ', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(194, 'images/flags/sk.png', 'SK', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(195, 'images/flags/sl.png', 'SL', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(196, 'images/flags/sm.png', 'SM', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(197, 'images/flags/sn.png', 'SN', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(198, 'images/flags/so.png', 'SO', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(199, 'images/flags/sr.png', 'SR', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(200, 'images/flags/st.png', 'ST', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(201, 'images/flags/sv.png', 'SV', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(202, 'images/flags/sy.png', 'SY', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(203, 'images/flags/sz.png', 'SZ', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(204, 'images/flags/tc.png', 'TC', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(205, 'images/flags/td.png', 'TD', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(206, 'images/flags/tf.png', 'TF', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(207, 'images/flags/tg.png', 'TG', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(208, 'images/flags/th.png', 'TH', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(209, 'images/flags/tj.png', 'TJ', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(210, 'images/flags/tk.png', 'TK', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(211, 'images/flags/tl.png', 'TL', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(212, 'images/flags/tm.png', 'TM', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(213, 'images/flags/tn.png', 'TN', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(214, 'images/flags/to.png', 'TO', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(215, 'images/flags/tr.png', 'TR', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(216, 'images/flags/tt.png', 'TT', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(217, 'images/flags/tv.png', 'TV', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(218, 'images/flags/tw.png', 'TW', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(219, 'images/flags/tz.png', 'TZ', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(220, 'images/flags/ua.png', 'UA', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(221, 'images/flags/us.png', 'US', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(222, 'images/flags/ug.png', 'UG', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(223, 'images/flags/um.png', 'UM', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(224, 'images/flags/uy.png', 'UY', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(225, 'images/flags/uz.png', 'UZ', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(226, 'images/flags/va.png', 'VA', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(227, 'images/flags/vc.png', 'VC', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(228, 'images/flags/ve.png', 'VE', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(229, 'images/flags/vg.png', 'VG', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(230, 'images/flags/vi.png', 'VI', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(231, 'images/flags/vn.png', 'VN', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(232, 'images/flags/vu.png', 'VU', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(233, 'images/flags/wf.png', 'WF', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(234, 'images/flags/ws.png', 'WS', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(235, 'images/flags/ye.png', 'YE', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(236, 'images/flags/yt.png', 'YT', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(237, 'images/flags/za.png', 'ZA', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(238, 'images/flags/zm.png', 'ZM', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(239, 'images/flags/zw.png', 'ZW', '2022-04-06 00:07:39', '2022-04-06 00:07:39');

-- --------------------------------------------------------

--
-- Table structure for table `languages`
--

CREATE TABLE `languages` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `locale` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `flag` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `text_direction` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT 'ltr',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `languages`
--

INSERT INTO `languages` (`id`, `name`, `locale`, `status`, `flag`, `text_direction`, `created_at`, `updated_at`) VALUES
(1, 'English', 'en', 1, 'images/flags/us.png', 'ltr', '2022-04-06 00:07:38', '2022-04-06 00:07:38');

-- --------------------------------------------------------

--
-- Table structure for table `language_configs`
--

CREATE TABLE `language_configs` (
  `id` int(10) UNSIGNED NOT NULL,
  `language_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `script` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `native` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `regional` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `language_configs`
--

INSERT INTO `language_configs` (`id`, `language_id`, `name`, `script`, `native`, `regional`, `created_at`, `updated_at`) VALUES
(1, 1, 'English', 'Latn', 'English', 'en_GB', '2022-04-06 00:07:38', '2022-04-06 00:07:38');

-- --------------------------------------------------------

--
-- Table structure for table `log_activities`
--

CREATE TABLE `log_activities` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `url` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `method` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ip` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `browser` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `platform` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `log_activities`
--

INSERT INTO `log_activities` (`id`, `url`, `method`, `ip`, `browser`, `platform`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'http://localhost/yoori_release_150/login', 'POST', '::1', 'Google Chrome', 'windows', 1, '2022-09-06 10:09:38', '2022-09-06 10:09:38'),
(2, 'http://localhost/yoori_release_151/login', 'POST', '::1', 'Google Chrome', 'windows', 1, '2022-09-10 09:36:18', '2022-09-10 09:36:18');

-- --------------------------------------------------------

--
-- Table structure for table `ltm_translations`
--

CREATE TABLE `ltm_translations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0',
  `locale` varchar(191) COLLATE utf8mb4_bin NOT NULL,
  `group` varchar(191) COLLATE utf8mb4_bin NOT NULL,
  `key` text COLLATE utf8mb4_bin NOT NULL,
  `value` text COLLATE utf8mb4_bin,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- --------------------------------------------------------

--
-- Table structure for table `media`
--

CREATE TABLE `media` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `storage` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'local',
  `type` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `extension` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `size` bigint(20) DEFAULT NULL,
  `original_file` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image_variants` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_03_18_124140_create_media_table', 1),
(2, '2014_04_02_193005_create_translations_table', 1),
(3, '2014_07_02_230147_migration_cartalyst_sentinel', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2021_09_08_034040_create_permissions_table', 1),
(6, '2021_09_12_044610_create_log_activities_table', 1),
(7, '2021_09_14_061644_create_languages_table', 1),
(8, '2021_09_14_061730_create_language_configs_table', 1),
(9, '2021_09_14_061736_create_flag_icons_table', 1),
(10, '2021_09_19_112851_create_settings_table', 1),
(11, '2021_10_18_110255_create_colors_table', 1),
(12, '2021_10_18_110619_create_brands_table', 1),
(13, '2021_10_18_121015_create_brand_languages_table', 1),
(14, '2021_10_20_105637_create_attributes_table', 1),
(15, '2021_10_20_170540_create_attribute_values_table', 1),
(16, '2021_10_21_171300_create_categories_table', 1),
(17, '2021_10_21_180000_create_category_languages_table', 1),
(18, '2021_10_21_180424_create_timezones_table', 1),
(19, '2021_10_25_105129_create_attribute_languages_table', 1),
(20, '2021_10_26_161907_create_color_languages_table', 1),
(21, '2021_10_30_103858_create_currencies_table', 1),
(22, '2021_10_30_114151_create_vat_taxes_table', 1),
(23, '2021_11_02_111015_create_seller_payouts_table', 1),
(24, '2021_11_02_151147_create_addresses_table', 1),
(25, '2021_11_04_111442_create_blog_categories_table', 1),
(26, '2021_11_04_111545_create_blogs_table', 1),
(27, '2021_11_04_111640_create_blog_languages_table', 1),
(28, '2021_11_04_111948_create_blog_category_languages_table', 1),
(29, '2021_11_04_152039_create_theme_options_table', 1),
(30, '2021_11_07_143523_create_sms_templates_table', 1),
(31, '2021_11_11_111455_create_sellers_table', 1),
(32, '2021_11_11_164432_create_products_table', 1),
(33, '2021_11_13_095212_create_product_languages_table', 1),
(34, '2021_11_13_095445_create_subscribers_table', 1),
(35, '2021_11_13_104618_create_product_stocks_table', 1),
(36, '2021_11_13_105547_create_coupons_table', 1),
(37, '2021_11_13_105550_create_coupon_languages_table', 1),
(38, '2021_11_13_115042_create_campaigns_table', 1),
(39, '2021_11_13_140800_create_campaign_languages_table', 1),
(40, '2021_11_14_152101_create_countries_table', 1),
(41, '2021_11_14_153250_create_cities_table', 1),
(42, '2021_11_14_154057_create_states_table', 1),
(43, '2021_11_14_154422_create_campaign_products_table', 1),
(44, '2021_11_16_145454_create_supports_table', 1),
(45, '2021_11_17_150959_create_support_departments_table', 1),
(46, '2021_11_17_154846_create_support_department_languages_table', 1),
(47, '2021_11_17_175113_create_product_vat_taxes_table', 1),
(48, '2021_11_20_121639_create_ticket_replays_table', 1),
(49, '2021_11_22_105028_create_campaign_requests_table', 1),
(50, '2021_11_22_164016_create_orders_table', 1),
(51, '2021_11_22_164053_create_order_details_table', 1),
(52, '2021_11_22_172210_create_pickup_hubs_table', 1),
(53, '2021_11_23_102936_create_pickup_hub_languages_table', 1),
(54, '2021_12_04_171817_create_commission_histories_table', 1),
(55, '2021_12_05_143946_create_wallets_table', 1),
(56, '2021_12_05_144327_create_wishlists_table', 1),
(57, '2021_12_05_152850_create_searches_table', 1),
(58, '2021_12_05_153311_create_app_intros_table', 1),
(59, '2021_12_05_153705_create_app_intro_languages_table', 1),
(60, '2021_12_08_124902_create_addons_table', 1),
(61, '2021_12_09_115403_create_rewards_table', 1),
(62, '2021_12_09_162836_create_wholesale_prices_table', 1),
(63, '2021_12_11_151457_create_reward_details_table', 1),
(64, '2021_12_12_142536_create_delivery_heroes_table', 1),
(65, '2021_12_12_150510_create_refunds_table', 1),
(66, '2021_12_14_113757_create_delivery_histories_table', 1),
(67, '2021_12_21_123917_create_carts_table', 1),
(68, '2021_12_26_154846_create_pages_table', 1),
(69, '2021_12_26_155025_create_page_languages_table', 1),
(70, '2022_01_01_160619_create_accounts_table', 1),
(71, '2022_01_03_110926_create_sliders_table', 1),
(72, '2022_01_03_113525_create_slider_languages_table', 1),
(73, '2022_01_04_113343_create_services_table', 1),
(74, '2022_01_04_113557_create_service_languages_table', 1),
(75, '2022_01_05_164528_create_product_views_table', 1),
(76, '2022_01_06_164906_create_reviews_table', 1),
(77, '2022_01_06_164949_create_review_likes_table', 1),
(78, '2022_01_06_165257_create_review_replies_table', 1),
(79, '2022_01_08_142918_create_blog_views_table', 1),
(80, '2022_01_08_144449_create_blog_comments_table', 1),
(81, '2022_01_08_151908_create_blog_comment_replies_table', 1),
(82, '2022_01_08_165746_create_blog_comment_likes_table', 1),
(83, '2022_01_11_111726_create_contact_us_table', 1),
(84, '2022_01_13_092927_create_user_socials_table', 1),
(85, '2022_01_15_151601_create_offline_methods_table', 1),
(86, '2022_01_15_151739_create_offline_method_languages_table', 1),
(87, '2022_02_05_094646_create_compare_products_table', 1),
(88, '2022_02_12_152514_create_checkouts_table', 1),
(89, '2022_02_19_170831_create_delivery_hero_accounts_table', 1),
(90, '2022_03_14_162023_create_notifications_table', 1),
(91, '2022_03_16_092829_create_seller_users_table', 1),
(92, '2022_03_17_111811_create_payment_histories_table', 1),
(93, '2022_03_18_173640_create_registration_requests_table', 1),
(94, '2022_04_10_110937_add_index_keys_to_tables', 1),
(95, '2022_04_10_150617_add_for_mobile_column_to_sliders', 1),
(96, '2022_04_12_110752_add_column_to_sellers_table', 1),
(97, '2022_04_18_130405_add_created_by_to_orders', 2),
(98, '2022_04_18_130405_add_created_by_to_new', 3),
(99, '2022_05_12_175148_add_update_112', 4),
(100, '2022_06_01_164230_add_updates_123', 5),
(101, '2022_06_06_125104_add_updates_130', 6),
(102, '2022_05_26_105454_video_shoppings', 7),
(103, '2022_06_06_125104_add_updates_131', 7),
(104, '2022_06_06_125104_add_updates_132', 8),
(105, '2022_07_21_164119_add_update_133', 8),
(106, '2022_07_21_164119_add_update_141', 9),
(107, '2022_08_20_111417_create_password_requests_table', 10),
(108, '2022_08_27_125533_add_update_to_150_table', 10),
(109, '2022_09_10_125533_add_update_to_151_table', 11),
(110, '2022_09_10_125533_add_update_to_152_table', 12);

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `details` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `url` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'unseen' COMMENT 'seen/unseen',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `seller_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'seller user id',
  `user_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'customer',
  `delivery_hero_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'from delivery hero table',
  `billing_address` longtext COLLATE utf8mb4_unicode_ci,
  `shipping_address` longtext COLLATE utf8mb4_unicode_ci,
  `delivery_status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `payment_type` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `payment_status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'unpaid',
  `payment_details` longtext COLLATE utf8mb4_unicode_ci,
  `sub_total` double DEFAULT NULL,
  `discount` double DEFAULT NULL,
  `coupon_discount` double DEFAULT NULL,
  `total_tax` double DEFAULT NULL,
  `total_amount` double DEFAULT NULL,
  `shipping_cost` double DEFAULT NULL,
  `total_payable` double DEFAULT NULL,
  `code` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date` timestamp NULL DEFAULT NULL,
  `viewed` tinyint(4) NOT NULL DEFAULT '0',
  `delivery_viewed` tinyint(4) NOT NULL DEFAULT '0',
  `payment_status_viewed` tinyint(4) NOT NULL DEFAULT '0',
  `commission_calculated` tinyint(4) NOT NULL DEFAULT '0',
  `is_cancelled` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `is_deleted` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `trx_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_mailed` tinyint(1) NOT NULL DEFAULT '0',
  `offline_method_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `offline_method_file` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `pickup_hub_id` bigint(20) UNSIGNED DEFAULT NULL,
  `cancel_request` tinyint(4) NOT NULL DEFAULT '0',
  `cancel_request_at` timestamp NULL DEFAULT NULL,
  `delivery_hero_assign_at` timestamp NULL DEFAULT NULL,
  `created_by` bigint(20) UNSIGNED DEFAULT NULL,
  `is_draft` tinyint(1) NOT NULL DEFAULT '0',
  `shipping_method` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_coupon_system_active` tinyint(1) DEFAULT NULL,
  `tax_method` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '{"vat_tax_type" : "","tax_type" : "" }',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `order_details`
--

CREATE TABLE `order_details` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `variation` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` double DEFAULT NULL,
  `tax` double DEFAULT NULL,
  `discount` double DEFAULT NULL,
  `coupon_discount` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'will be json data {"coupon_code" : "BLACK5", "discount" : 5}',
  `shipping_cost` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'will be json data {"type" : "flat","depend_on_quantity" : true, "per_cost" : 10}',
  `quantity` int(11) NOT NULL DEFAULT '1',
  `pickup_hub_id` bigint(20) DEFAULT NULL,
  `product_referral_code` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_refundable` tinyint(1) NOT NULL DEFAULT '0' COMMENT '1 => can be refunded',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pages`
--

CREATE TABLE `pages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` text COLLATE utf8mb4_unicode_ci,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `content` longtext COLLATE utf8mb4_unicode_ci,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `optional_email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `optional_phone` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_image` text COLLATE utf8mb4_unicode_ci,
  `meta_image_id` bigint(20) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pages`
--

INSERT INTO `pages` (`id`, `type`, `link`, `status`, `content`, `email`, `optional_email`, `phone`, `optional_phone`, `meta_image`, `meta_image_id`, `created_at`, `updated_at`) VALUES
(1, 'seller_policy_pages', 'seller-policy', 1, NULL, NULL, NULL, NULL, NULL, '[]', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(2, 'refund_policy_page', 'refund-policy', 1, NULL, NULL, NULL, NULL, NULL, '[]', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(3, 'support_policy_page', 'support-policy', 1, NULL, NULL, NULL, NULL, NULL, '[]', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(4, 'term_conditions_page', 'terms-conditions', 1, NULL, NULL, NULL, NULL, NULL, '[]', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(5, 'privacy_policy_page', 'privacy-policy', 1, NULL, NULL, NULL, NULL, NULL, '[]', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(6, 'about_us_page', 'about', 1, NULL, NULL, NULL, NULL, NULL, '[]', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(7, 'contact_us_page', 'contact', 1, NULL, NULL, NULL, NULL, NULL, '[]', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39');

-- --------------------------------------------------------

--
-- Table structure for table `page_languages`
--

CREATE TABLE `page_languages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `page_id` bigint(20) UNSIGNED NOT NULL,
  `lang` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'en' COMMENT 'our default locale for system en',
  `title` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `content` longtext COLLATE utf8mb4_unicode_ci,
  `meta_title` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_description` mediumtext COLLATE utf8mb4_unicode_ci,
  `keywords` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `page_languages`
--

INSERT INTO `page_languages` (`id`, `page_id`, `lang`, `title`, `address`, `content`, `meta_title`, `meta_description`, `keywords`, `created_at`, `updated_at`) VALUES
(1, 1, 'en', 'Seller Policy', NULL, NULL, NULL, NULL, NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(2, 2, 'en', 'Refund Policy', NULL, NULL, NULL, NULL, NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(3, 3, 'en', 'Support Policy', NULL, NULL, NULL, NULL, NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(4, 4, 'en', 'Term and Conditions', NULL, NULL, NULL, NULL, NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(5, 5, 'en', 'Privacy Policy', NULL, NULL, NULL, NULL, NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(6, 6, 'en', 'About Us', NULL, NULL, NULL, NULL, NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(7, 7, 'en', 'Contact Us', NULL, NULL, NULL, NULL, NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39');

-- --------------------------------------------------------

--
-- Table structure for table `password_requests`
--

CREATE TABLE `password_requests` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `otp` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payment_histories`
--

CREATE TABLE `payment_histories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `event` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remarks` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payment_method`
--

CREATE TABLE `payment_method` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `trx_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `api_token` text COLLATE utf8mb4_unicode_ci,
  `is_guest` tinyint(4) NOT NULL DEFAULT '0',
  `amount` double NOT NULL DEFAULT '0',
  `type` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` int(10) UNSIGNED NOT NULL,
  `attribute` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `keywords` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `attribute`, `keywords`, `created_at`, `updated_at`) VALUES
(1, 'order', '{\"read\":\"order_read\",\"create\":\"order_create\",\"update\":\"order_update\",\"view\":\"order_view\",\"invoice\":\"order_invoice\",\"approve_offline_payment\":\"order_approve_offline_payment\"}', '2022-04-08 08:05:01', '2022-04-08 08:05:01'),
(2, 'pickup_hub', '{\"read\":\"pickup_hub_read\",\"create\":\"pickup_hub_create\",\"update\":\"pickup_hub_update\",\"delete\":\"pickup_hub_delete\"}', '2022-04-08 08:05:01', '2022-04-08 08:05:01'),
(3, 'product', '{\"read\":\"product_read\",\"create\":\"product_create\",\"update\":\"product_update\",\"delete\":\"product_delete\",\"restore\":\"product_restore\",\"clone\":\"product_clone\"}', '2022-04-08 08:05:01', '2022-04-08 08:05:01'),
(4, 'color', '{\"read\":\"color_read\",\"create\":\"color_create\",\"update\":\"color_update\",\"delete\":\"color_delete\"}', '2022-04-08 08:05:01', '2022-04-08 08:05:01'),
(5, 'attribute_set', '{\"read\":\"attribute_set_read\",\"create\":\"attribute_set_create\",\"update\":\"attribute_set_update\",\"delete\":\"attribute_set_delete\"}', '2022-04-08 08:05:01', '2022-04-08 08:05:01'),
(6, 'attribute_value', '{\"read\":\"attribute_value_read\",\"create\":\"attribute_value_create\",\"update\":\"attribute_value_update\",\"delete\":\"attribute_value_delete\"}', '2022-04-08 08:05:01', '2022-04-08 08:05:01'),
(7, 'brand', '{\"read\":\"brand_read\",\"create\":\"brand_create\",\"update\":\"brand_update\",\"delete\":\"brand_delete\"}', '2022-04-08 08:05:01', '2022-04-08 08:05:01'),
(8, 'category', '{\"read\":\"category_read\",\"create\":\"category_create\",\"update\":\"category_update\",\"delete\":\"category_delete\"}', '2022-04-08 08:05:01', '2022-04-08 08:05:01'),
(9, 'wholesale_product', '{\"read\":\"wholesale_product_read\",\"create\":\"wholesale_product_create\",\"update\":\"wholesale_product_update\",\"delete\":\"wholesale_product_delete\",\"clone\":\"wholesale_product_clone\",\"restore\":\"wholesale_product_restore\",\"setting\":\"wholesale_product_setting\"}', '2022-04-08 08:05:01', '2022-04-08 08:05:01'),
(10, 'customer', '{\"read\":\"customer_read\",\"create\":\"customer_create\",\"update\":\"customer_update\",\"ban\":\"customer_ban\",\"user_reward_read\":\"user_reward_read\",\"user_reward_update\":\"user_reward_update\"}', '2022-04-08 08:05:01', '2022-04-08 08:05:01'),
(11, 'seller', '{\"read\":\"seller_read\",\"create\":\"seller_create\",\"update\":\"seller_update\",\"verify\":\"seller_verify\",\"ban\":\"seller_ban\",\"seller_commission_read\":\"seller_commission_read\",\"seller_commission_update\":\"seller_commission_update\",\"seller_payout_read\":\"seller_payout_read\",\"seller_payout_reject\":\"seller_payout_reject\",\"seller_payout_accept\":\"seller_payout_accept\"}', '2022-04-08 08:05:01', '2022-04-08 08:05:01'),
(12, 'delivery_hero', '{\"read\":\"delivery_hero_read\",\"create\":\"delivery_hero_create\",\"update\":\"delivery_hero_update\",\"Ban Delivery Hero\":\"delivery_hero_ban\",\"Account Deposit\":\"Delivery_hero_account_deposit\",\"Email Activation\":\"delivery_hero_email_activation\",\"Commission History\":\"delivery_hero_commission_history\",\"Deposit History\":\"delivery_hero_deposit_history\",\"Collection History\":\"delivery_hero_collection_history\",\"Cancel Request\":\"delivery_hero_cancel_request\",\"Configuration Read\":\"delivery_hero_configuration_read\",\"Configuration Update\":\"delivery_hero_configuration_update\"}', '2022-04-08 08:05:01', '2022-04-08 08:05:01'),
(13, 'media', '{\"read\":\"media_read\",\"create\":\"media_create\",\"update\":\"media_update\",\"delete\":\"media_delete\"}', '2022-04-08 08:05:01', '2022-04-08 08:05:01'),
(14, 'report', '{\"admin_product_sale\":\"admin_product_sale_read\",\"seller_product_sale\":\"seller_product_sale_read\",\"product_stock\":\"product_stock_read\",\"product_wishlist\":\"product_wishlist_read\",\"user_searches\":\"user_searches_read\",\"commission_history\":\"commission_history_read\",\"wallet_recharge_history\":\"wallet_recharge_history_read\"}', '2022-04-08 08:05:01', '2022-04-08 08:05:01'),
(15, 'refund', '{\"read\":\"refund_read\",\"approve\":\"refund_approve\",\"process\":\"refund_process\",\"reject\":\"refund_reject\",\"refund_setting_read\":\"refund_setting_read\",\"refund_setting_update\":\"refund_setting_update\"}', '2022-04-08 08:05:01', '2022-04-08 08:05:01'),
(16, 'bulk_sms', '{\"read\":\"bulk_sms_read\",\"send_sms\":\"send_bulk_sms\",\"otp_setting_read\":\"otp_setting_read\",\"otp_setting_update\":\"otp_setting_update\",\"sms_template_read\":\"sms_template_read\",\"sms_template_update\":\"sms_template_update\"}', '2022-04-08 08:05:01', '2022-04-08 08:05:01'),
(17, 'campaign', '{\"read\":\"campaign_read\",\"create\":\"campaign_create\",\"update\":\"campaign_update\",\"delete\":\"campaign_delete\",\"campaign_request_read\":\"campaign_request_read\",\"campaign_request_approved\":\"campaign_request_approved\"}', '2022-04-08 08:05:01', '2022-04-08 08:05:01'),
(18, 'campaign_product', '{\"read\":\"campaign_product_read\",\"create\":\"campaign_product_create\",\"update\":\"campaign_product_update\",\"delete\":\"campaign_product_delete\"}', '2022-04-08 08:05:01', '2022-04-08 08:05:01'),
(19, 'subscriber', '{\"read\":\"subscriber_read\",\"delete\":\"subscriber_delete\"}', '2022-04-08 08:05:01', '2022-04-08 08:05:01'),
(20, 'coupon', '{\"read\":\"coupon_read\",\"create\":\"coupon_create\",\"update\":\"coupon_update\",\"delete\":\"coupon_delete\"}', '2022-04-08 08:05:01', '2022-04-08 08:05:01'),
(21, 'blog', '{\"read\":\"blog_read\",\"create\":\"blog_create\",\"update\":\"blog_update\",\"delete\":\"blog_delete\",\"restore\":\"blog_restore\"}', '2022-04-08 08:05:01', '2022-04-08 08:05:01'),
(22, 'blog_category', '{\"read\":\"blog_category_read\",\"create\":\"blog_category_create\",\"update\":\"blog_category_update\",\"delete\":\"blog_category_delete\"}', '2022-04-08 08:05:01', '2022-04-08 08:05:01'),
(23, 'support', '{\"read\":\"support_read\",\"create\":\"support_create\",\"update\":\"support_update\",\"delete\":\"support_delete\"}', '2022-04-08 08:05:01', '2022-04-08 08:05:01'),
(24, 'support_department', '{\"read\":\"support_department_read\",\"create\":\"support_department_create\",\"update\":\"support_department_update\",\"delete\":\"support_department_delete\"}', '2022-04-08 08:05:01', '2022-04-08 08:05:01'),
(25, 'offline_payment', '{\"read\":\"offline_payment_read\",\"create\":\"offline_payment_create\",\"update\":\"offline_payment_update\",\"delete\":\"offline_payment_delete\",\"wallet_recharge_read\":\"wallet_recharge_read\",\"wallet_recharge_update\":\"wallet_recharge_update\"}', '2022-04-08 08:05:01', '2022-04-08 08:05:01'),
(26, 'reward_configuration', '{\"read\":\"reward_configuration_read\",\"update\":\"reward_configuration_update\",\"reward_setting_read\":\"reward_setting_read\",\"reward_setting_create\":\"reward_setting_create\",\"reward_setting_update\":\"reward_setting_update\"}', '2022-04-08 08:05:01', '2022-04-08 08:05:01'),
(27, 'payment_gateway', '{\"read\":\"payment_gateway_read\",\"update\":\"payment_gateway_update\"}', '2022-04-08 08:05:01', '2022-04-08 08:05:01'),
(28, 'shipping_configuration', '{\"read\":\"shipping_configuration_read\",\"update\":\"shipping_configuration_update\"}', '2022-04-08 08:05:01', '2022-04-08 08:05:01'),
(29, 'shipping_country', '{\"read\":\"country_read\",\"update\":\"country_update\"}', '2022-04-08 08:05:01', '2022-04-08 08:05:01'),
(30, 'shipping_state', '{\"read\":\"state_read\",\"create\":\"state_create\",\"update\":\"state_update\",\"delete\":\"state_delete\"}', '2022-04-08 08:05:01', '2022-04-08 08:05:01'),
(31, 'shipping_city', '{\"read\":\"city_read\",\"create\":\"city_create\",\"update\":\"city_update\",\"delete\":\"city_delete\"}', '2022-04-08 08:05:01', '2022-04-08 08:05:01'),
(32, 'store_front', '{\"theme_option\":\"theme_option_update\",\"header_content\":\"header_content_update\",\"footer_content\":\"footer_content_update\",\"home_page\":\"home_page_update\",\"website_seo\":\"website_seo_update\",\"website_popup\":\"website_popup_update\",\"custom_css\":\"custom_css_update\",\"custom_js\":\"custom_js_update\",\"gdpr\":\"gdpr_update\",\"all_page_read\":\"page_read\",\"all_page_create\":\"page_create\",\"all_page_update\":\"page_update\",\"all_page_delete\":\"page_delete\"}', '2022-04-08 08:05:01', '2022-04-08 08:05:01'),
(33, 'service', '{\"read\":\"service_read\",\"create\":\"service_create\",\"update\":\"service_update\",\"delete\":\"service_delete\"}', '2022-04-08 08:05:01', '2022-04-08 08:05:01'),
(34, 'slider', '{\"read\":\"slider_read\",\"create\":\"slider_create\",\"update\":\"slider_update\",\"delete\":\"slider_delete\"}', '2022-04-08 08:05:01', '2022-04-08 08:05:01'),
(35, 'wallet', '{\"Read\":\"recharge_request_read\",\"Status Update\":\"recharge_request_status_update\"}', '2022-04-08 08:05:01', '2022-04-08 08:05:01'),
(36, 'setting', '{\"general_setting\":\"general_setting_update\",\"preference\":\"preference_setting_update\",\"Social Login\":\"social_login_setting_update\",\"email_setting\":\"email_setting_update\",\"currency\":\"currency_setting_update\",\"vat_tax\":\"vat_tax_setting_update\",\"storage\":\"storage_setting_update\",\"cache\":\"cache_update\",\"miscellaneous\":\"miscellaneous_setting_update\",\"Admin Panel Setting Update\":\"admin_panel_setting_update\",\"Facebook Service\":\"facebook_service_update\",\"Google Service\":\"google_service_update\",\"Pusher Notification\":\"pusher_notification_update\"}', '2022-04-08 08:05:01', '2022-04-08 08:05:01'),
(37, 'chat_messenger', '{\"read\":\"chat_messenger_read\",\"update\":\"chat_messenger_update\"}', '2022-04-08 08:05:01', '2022-04-08 08:05:01'),
(38, 'language', '{\"read\":\"language_read\",\"create\":\"language_create\",\"update\":\"language_update\",\"delete\":\"language_delete\"}', '2022-04-08 08:05:01', '2022-04-08 08:05:01'),
(39, 'staff', '{\"read\":\"staff_read\",\"create\":\"staff_create\",\"update\":\"staff_update\",\"ban\":\"staff_ban\"}', '2022-04-08 08:05:01', '2022-04-08 08:05:01'),
(40, 'role', '{\"read\":\"role_read\",\"create\":\"role_create\",\"update\":\"role_update\",\"delete\":\"role_delete\"}', '2022-04-08 08:05:01', '2022-04-08 08:05:01'),
(41, 'mobile_apps', '{\"setting_update\":\"api_setting_update\",\"android_setting\":\"android_setting_update\",\"ios_setting\":\"ios_setting_update\",\"app_config\":\"app_config_update\",\"ads_config\":\"ads_config_update\",\"download_link\":\"download_link_update\"}', '2022-04-08 08:05:01', '2022-04-08 08:05:01'),
(42, 'mobile_app_intro', '{\"read\":\"mobile_app_intro_read\",\"create\":\"mobile_app_intro_create\",\"update\":\"mobile_app_intro_update\",\"delete\":\"mobile_app_intro_delete\"}', '2022-04-08 08:05:01', '2022-04-08 08:05:01'),
(43, 'pos_system', '{\"read\":\"pos_order\",\"update\":\"pos_config_update\"}', '2022-07-21 11:21:27', '2022-07-21 11:21:27'),
(44, 'api_key', '{\"create\":\"api_key_create\",\"read\":\"api_key_read\",\"update\":\"api_key_update\",\"delete\":\"api_key_delete\",\"read_all\":\"api_key_read_all\"}', '2022-07-21 11:21:27', '2022-07-21 11:21:27'),
(45, 'state_import', '{\"create\":\"state_import_create\"}', '2022-08-08 11:13:07', '2022-08-08 11:13:07'),
(46, 'city_import', '{\"create\":\"city_import_create\"}', '2022-08-08 11:13:07', '2022-08-08 11:13:07'),
(47, 'firebase', '{\"read\":\"firebase_read\"}', '2022-09-06 10:09:22', '2022-09-06 10:09:22'),
(48, 'firebase', '{\"update\":\"firebase_update\"}', '2022-09-06 10:09:22', '2022-09-06 10:09:22'),
(49, 'addon', '{\"read\":\"addon_read\",\"update\":\"addon_update\"}', '2022-10-11 09:08:35', '2022-10-11 09:08:35');

-- --------------------------------------------------------

--
-- Table structure for table `persistences`
--

CREATE TABLE `persistences` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `code` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `persistences`
--

INSERT INTO `persistences` (`id`, `user_id`, `code`, `created_at`, `updated_at`) VALUES
(1, 1, 'XcOAPV7MZHgWoaz3UsLUfiEAYYRCUKbz', '2022-04-21 13:01:43', '2022-04-21 13:01:43'),
(2, 1, '9OORWEt1f0aaHVfCSXIdmLqGKp4noHbS', '2022-05-23 12:24:38', '2022-05-23 12:24:38'),
(3, 1, 'bf9tjRp4K87ejsjcv857yx9wLCl2Q99A', '2022-05-26 11:54:02', '2022-05-26 11:54:02'),
(4, 1, 'X7kR3pSds8FIfnctoNm4WJ88rv3LPTL8', '2022-06-02 09:02:43', '2022-06-02 09:02:43'),
(5, 1, 'X5sk2lIfUwUA6z2BydgT37UJYUNdE7M2', '2022-06-22 13:54:53', '2022-06-22 13:54:53'),
(6, 1, 'F6V6FrEDkvcnfE2nV8UeH6SrXRSLsu1g', '2022-09-06 10:09:38', '2022-09-06 10:09:38');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pickup_hubs`
--

CREATE TABLE `pickup_hubs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pick_up_status` tinyint(4) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pickup_hub_languages`
--

CREATE TABLE `pickup_hub_languages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `pickup_hub_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `lang` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `brand_id` bigint(20) UNSIGNED DEFAULT NULL,
  `category_id` bigint(20) UNSIGNED DEFAULT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL COMMENT 'if none or 1 then own else sellers',
  `created_by` bigint(20) UNSIGNED NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` double DEFAULT NULL,
  `special_discount` double DEFAULT NULL,
  `special_discount_type` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `special_discount_start` datetime DEFAULT NULL,
  `special_discount_end` datetime DEFAULT NULL,
  `purchase_cost` double DEFAULT NULL,
  `barcode` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `video_provider` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `video_url` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `colors` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `attribute_sets` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vat_taxes` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `has_variant` tinyint(4) NOT NULL DEFAULT '0',
  `selected_variants` mediumtext COLLATE utf8mb4_unicode_ci,
  `selected_variants_ids` mediumtext COLLATE utf8mb4_unicode_ci,
  `thumbnail` text COLLATE utf8mb4_unicode_ci,
  `images` text COLLATE utf8mb4_unicode_ci,
  `description_images` longtext COLLATE utf8mb4_unicode_ci,
  `thumbnail_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image_ids` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `current_stock` int(11) NOT NULL,
  `minimum_order_quantity` int(11) NOT NULL DEFAULT '1',
  `stock_notification` tinyint(4) NOT NULL DEFAULT '0',
  `low_stock_to_notify` int(11) DEFAULT NULL,
  `stock_visibility` enum('hide_stock','visible_with_quantity','visible_with_text') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'hide_stock',
  `total_sale` bigint(20) NOT NULL DEFAULT '0',
  `status` enum('unpublished','published','trash') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'unpublished',
  `is_approved` tinyint(4) NOT NULL DEFAULT '0' COMMENT 'use for seller product approval purpose',
  `is_catalog` tinyint(4) NOT NULL DEFAULT '0' COMMENT 'if 1 can''t added to cart only view',
  `external_link` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_featured` tinyint(4) NOT NULL DEFAULT '0',
  `is_classified` tinyint(4) NOT NULL DEFAULT '0',
  `is_wholesale` tinyint(4) NOT NULL DEFAULT '0',
  `contact_info` text COLLATE utf8mb4_unicode_ci,
  `is_digital` tinyint(4) NOT NULL DEFAULT '0',
  `is_refundable` tinyint(4) NOT NULL DEFAULT '0',
  `todays_deal` tinyint(4) NOT NULL DEFAULT '0',
  `rating` double(8,2) NOT NULL DEFAULT '0.00',
  `viewed` bigint(20) NOT NULL DEFAULT '0' COMMENT 'total views of the product',
  `shipping_type` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `shipping_fee` double DEFAULT NULL,
  `shipping_fee_depend_on_quantity` tinyint(4) NOT NULL DEFAULT '0',
  `estimated_shipping_days` text COLLATE utf8mb4_unicode_ci COMMENT 'estimated time of delivering the product',
  `cash_on_delivery` tinyint(4) NOT NULL DEFAULT '0' COMMENT '0 not available, 1 available',
  `meta_image` text COLLATE utf8mb4_unicode_ci,
  `product_file` text COLLATE utf8mb4_unicode_ci,
  `product_file_id` bigint(20) UNSIGNED DEFAULT NULL,
  `meta_image_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `reward` double DEFAULT NULL,
  `is_deleted` tinyint(4) NOT NULL DEFAULT '0',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `brand_id`, `category_id`, `user_id`, `created_by`, `slug`, `price`, `special_discount`, `special_discount_type`, `special_discount_start`, `special_discount_end`, `purchase_cost`, `barcode`, `video_provider`, `video_url`, `colors`, `attribute_sets`, `vat_taxes`, `has_variant`, `selected_variants`, `selected_variants_ids`, `thumbnail`, `images`, `description_images`, `thumbnail_id`, `image_ids`, `current_stock`, `minimum_order_quantity`, `stock_notification`, `low_stock_to_notify`, `stock_visibility`, `total_sale`, `status`, `is_approved`, `is_catalog`, `external_link`, `is_featured`, `is_classified`, `is_wholesale`, `contact_info`, `is_digital`, `is_refundable`, `todays_deal`, `rating`, `viewed`, `shipping_type`, `shipping_fee`, `shipping_fee_depend_on_quantity`, `estimated_shipping_days`, `cash_on_delivery`, `meta_image`, `product_file`, `product_file_id`, `meta_image_id`, `reward`, `is_deleted`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, NULL, 1, 1, 1, 'demo-product-znkzt', 999, 20, 'flat', '2022-04-06 00:00:00', '2024-12-31 23:59:00', 0, '8Y6M2FWIBSDXEDPL', '', '', '[]', '[]', '', 0, '[]', '[]', '[]', '[]', '[{\"image\":\"images\\/description_images\\/951af39b-8f82-4754-900f-27528931160b.jpg\",\"storage\":\"local\"},{\"image\":\"images\\/description_images\\/42ec6842-eae0-40d3-b956-1c28bf357f10.png\",\"storage\":\"local\"},{\"image\":\"images\\/description_images\\/03a5460e-417c-4227-b1a7-ddc3db1cb255.jpg\",\"storage\":\"local\"},{\"image\":\"images\\/description_images\\/86f0ef3a-0619-45a0-9581-203ed4bb064b.jpg\",\"storage\":\"local\"},{\"image\":\"images\\/description_images\\/9477a35f-4ca1-4edf-84d4-386443cdb5e8.jpg\",\"storage\":\"local\"},{\"image\":\"images\\/description_images\\/0444dce1-d9c6-4127-9892-9e26ab2e248f.png\",\"storage\":\"local\"}]', NULL, NULL, 200, 1, 1, 10, 'visible_with_quantity', 0, 'published', 1, 0, NULL, 1, 0, 0, '[]', 0, 0, 1, 0.00, 0, 'flat_rate', 10, 1, '0', 1, '[]', NULL, NULL, NULL, 0, 0, NULL, '2022-04-06 02:44:09', '2022-09-10 09:51:02');

-- --------------------------------------------------------

--
-- Table structure for table `product_languages`
--

CREATE TABLE `product_languages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `lang` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'en',
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `short_description` text COLLATE utf8mb4_unicode_ci,
  `description` longtext COLLATE utf8mb4_unicode_ci,
  `pdf_specification_id` bigint(20) UNSIGNED DEFAULT NULL,
  `pdf_specification` mediumtext COLLATE utf8mb4_unicode_ci,
  `tags` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `unit` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_title` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_description` text COLLATE utf8mb4_unicode_ci,
  `meta_keywords` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_languages`
--

INSERT INTO `product_languages` (`id`, `product_id`, `lang`, `name`, `short_description`, `description`, `pdf_specification_id`, `pdf_specification`, `tags`, `unit`, `meta_title`, `meta_description`, `meta_keywords`, `created_at`, `updated_at`) VALUES
(1, 1, 'en', 'Demo Product', 'Short Description......', '<p>Long Description.......<br></p>', NULL, '[]', 'demo,demo teg', 'PCS', '', '', '', '2022-04-06 02:44:09', '2022-09-10 09:51:02');

-- --------------------------------------------------------

--
-- Table structure for table `product_stocks`
--

CREATE TABLE `product_stocks` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `variant_ids` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'first one is color,rest is attribute values',
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'auto generated by attributes and colors',
  `sku` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `current_stock` int(11) NOT NULL DEFAULT '0',
  `price` double DEFAULT NULL,
  `image` mediumtext COLLATE utf8mb4_unicode_ci,
  `image_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `product_stocks`
MODIFY COLUMN `image` json DEFAULT NULL;
--
-- Dumping data for table `product_stocks`
--

INSERT INTO `product_stocks` (`id`, `variant_ids`, `product_id`, `name`, `sku`, `current_stock`, `price`, `image`, `image_id`, `created_at`, `updated_at`) VALUES
(1, NULL, 1, '', 'Q59GQLJDJY9YKOQP', 200, 999, '[]', NULL, '2022-09-10 09:51:02', '2022-09-10 09:51:02');

-- --------------------------------------------------------

--
-- Table structure for table `product_vat_taxes`
--

CREATE TABLE `product_vat_taxes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `vat_tax_id` bigint(20) UNSIGNED NOT NULL,
  `amount` double DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `product_views`
--

CREATE TABLE `product_views` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_views`
--

INSERT INTO `product_views` (`id`, `user_id`, `product_id`, `created_at`, `updated_at`) VALUES
(4, 1, 1, '2022-09-10 09:51:42', '2022-09-10 09:51:42');

-- --------------------------------------------------------

--
-- Table structure for table `refunds`
--

CREATE TABLE `refunds` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `order_id` bigint(20) UNSIGNED DEFAULT NULL,
  `order_detail_id` bigint(20) UNSIGNED DEFAULT NULL,
  `seller_id` bigint(20) UNSIGNED DEFAULT NULL,
  `processed_by` bigint(20) UNSIGNED DEFAULT NULL,
  `total_amount` double DEFAULT NULL,
  `shipping_cost` double DEFAULT NULL,
  `refund_amount` double DEFAULT NULL,
  `seller_approval` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `admin_approval` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `reject_reason` text COLLATE utf8mb4_unicode_ci,
  `remark` longtext COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `registration_requests`
--

CREATE TABLE `registration_requests` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `otp` bigint(20) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `reminders`
--

CREATE TABLE `reminders` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `code` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `completed` tinyint(1) NOT NULL DEFAULT '0',
  `completed_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `title` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rating` double(6,3) NOT NULL DEFAULT '0.000',
  `comment` text COLLATE utf8mb4_unicode_ci,
  `images` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `review_likes`
--

CREATE TABLE `review_likes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `reviewable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `reviewable_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `review_replies`
--

CREATE TABLE `review_replies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `review_id` bigint(20) UNSIGNED NOT NULL,
  `parent_id` bigint(20) UNSIGNED DEFAULT NULL,
  `reply` text COLLATE utf8mb4_unicode_ci,
  `images` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `level` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `rewards`
--

CREATE TABLE `rewards` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `rewards` double(10,3) NOT NULL DEFAULT '0.000',
  `last_converted` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `reward_details`
--

CREATE TABLE `reward_details` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `reward_id` bigint(20) NOT NULL,
  `product_id` bigint(20) NOT NULL,
  `product_qty` bigint(20) NOT NULL,
  `reward` bigint(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(10) UNSIGNED NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `permissions` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `slug`, `name`, `permissions`, `created_at`, `updated_at`) VALUES
(1, 'superadmin', 'Superadmin', '[\"customer_create\",\"customer_read\",\"customer_update\",\"customer_delete\",\"staff_create\",\"staff_read\",\"staff_update\",\"staff_delete\",\"staff_ban\",\"role_create\",\"role_read\",\"role_update\",\"role_delete\",\"seller_create\",\"seller_read\",\"seller_update\",\"seller_delete\",\"seller_verify\",\"language_create\",\"language_read\",\"language_update\",\"language_delete\",\"translation_message_update\",\"media_create\",\"media_read\",\"media_update\",\"media_delete\",\"media_download\",\"brand_create\",\"brand_read\",\"brand_update\",\"brand_delete\",\"color_create\",\"color_read\",\"color_update\",\"color_delete\",\"attribute_set_create\",\"attribute_set_read\",\"attribute_set_update\",\"attribute_set_delete\",\"attribute_value_create\",\"attribute_value_read\",\"attribute_value_update\",\"attribute_value_delete\",\"category_create\",\"category_read\",\"category_update\",\"category_delete\",\"product_create\",\"product_read\",\"product_update\",\"product_delete\",\"product_restore\",\"product_clone\",\"blog_create\",\"blog_read\",\"blog_update\",\"blog_delete\",\"blog_restore\",\"blog_category_create\",\"blog_category_read\",\"blog_category_update\",\"blog_category_delete\",\"support_create\",\"support_read\",\"support_update\",\"support_delete\",\"support_department_create\",\"support_department_read\",\"support_department_update\",\"support_department_delete\",\"seller_payout_read\",\"seller_payout_accept\",\"seller_payout_reject\",\"seller_commission_read\",\"seller_commission_update\",\"order_create\",\"order_read\",\"order_update\",\"order_view\",\"order_delete\",\"order_invoice\",\"pickup_hub_create\",\"pickup_hub_read\",\"pickup_hub_update\",\"pickup_hub_delete\",\"recharge_request_read\",\"recharge_request_status_update\",\"general_setting_update\",\"preference_setting_update\",\"email_setting_update\",\"currency_setting_update\",\"vat_tax_setting_update\",\"storage_setting_update\",\"cache_update\",\"miscellaneous_setting_update\",\"admin_panel_setting_update\",\"facebook_service_update\",\"google_service_update\",\"pusher_notification_update\",\"otp_setting_read\",\"otp_setting_update\",\"sms_template_read\",\"sms_template_update\",\"payment_gateway_read\",\"payment_gateway_update\",\"theme_option_update\",\"header_content_update\",\"footer_content_update\",\"home_page_update\",\"website_seo_update\",\"website_popup_update\",\"custom_css_update\",\"custom_js_update\",\"gdpr_update\",\"page_read\",\"page_create\",\"page_update\",\"page_delete\",\"campaign_create\",\"campaign_read\",\"campaign_update\",\"campaign_delete\",\"campaign_request_read\",\"campaign_request_approved\",\"campaign_product_create\",\"campaign_product_read\",\"campaign_product_update\",\"campaign_product_delete\",\"bulk_sms_read\",\"send_bulk_sms\",\"subscriber_read\",\"subscriber_delete\",\"coupon_read\",\"coupon_create\",\"coupon_update\",\"coupon_delete\",\"shipping_configuration_read\",\"shipping_configuration_update\",\"country_read\",\"country_update\",\"state_read\",\"state_create\",\"state_update\",\"state_delete\",\"city_read\",\"city_create\",\"city_update\",\"city_delete\",\"admin_product_sale_read\",\"seller_product_sale_read\",\"product_stock_read\",\"product_wishlist_read\",\"user_searches_read\",\"commission_history_read\",\"wallet_recharge_history_read\",\"api_setting_update\",\"android_setting_update\",\"ios_setting_update\",\"app_config_update\",\"ads_config_update\",\"download_link_update\",\"mobile_app_intro_read\",\"mobile_app_intro_create\",\"mobile_app_intro_update\",\"mobile_app_intro_delete\",\"delivery_hero_read\",\"delivery_hero_create\",\"delivery_hero_update\",\"delivery_hero_delete\",\"delivery_hero_ban\",\"Delivery_hero_account_deposit\",\"delivery_hero_email_activation\",\"delivery_hero_commission_history\",\"delivery_hero_deposit_history\",\"delivery_hero_collection_history\",\"delivery_hero_cancel_request\",\"delivery_hero_configuration_read\",\"delivery_hero_configuration_update\",\"wholesale_product_read\",\"wholesale_product_create\",\"wholesale_product_update\",\"wholesale_product_delete\",\"wholesale_product_clone\",\"wholesale_product_restore\",\"wholesale_product_setting\",\"refund_read\",\"refund_approve\",\"refund_process\",\"refund_reject\",\"refund_setting_read\",\"refund_setting_update\",\"reward_configuration_read\",\"reward_configuration_update\",\"reward_setting_read\",\"reward_setting_create\",\"reward_setting_update\",\"user_reward_read\",\"user_reward_update\",\"offline_payment_read\",\"offline_payment_create\",\"offline_payment_update\",\"offline_payment_delete\",\"service_read\",\"service_create\",\"service_update\",\"service_delete\",\"slider_read\",\"slider_create\",\"slider_update\",\"slider_delete\",\"wallet_recharge_read\",\"wallet_recharge_update\",\"login_singup_read\",\"login_singup_update\"]', '2022-04-06 00:07:38', '2022-04-06 00:07:38'),
(2, 'staff', 'Staff', '[\"customer_create\",\"customer_read\",\"customer_update\",\"customer_delete\",\"customer_ban\",\"staff_create\",\"staff_read\",\"staff_update\",\"staff_delete\",\"role_create\",\"role_read\",\"role_update\",\"role_delete\",\"seller_create\",\"seller_read\",\"seller_update\",\"seller_delete\",\"seller_ban\",\"language_create\",\"language_read\",\"language_update\",\"language_delete\",\"translation_message_update\",\"media_create\",\"media_read\",\"media_update\",\"media_delete\",\"media_download\",\"brand_create\",\"brand_read\",\"brand_update\",\"brand_delete\",\"color_create\",\"color_read\",\"color_update\",\"color_delete\"]', '2022-04-06 00:07:38', '2022-04-06 00:07:38');

-- --------------------------------------------------------

--
-- Table structure for table `role_users`
--

CREATE TABLE `role_users` (
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `role_users`
--

INSERT INTO `role_users` (`user_id`, `role_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2022-04-06 00:07:38', '2022-04-06 00:07:38');

-- --------------------------------------------------------

--
-- Table structure for table `searches`
--

CREATE TABLE `searches` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `query` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_search` bigint(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sellers`
--

CREATE TABLE `sellers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `shop_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `verified_at` datetime DEFAULT NULL,
  `license_no` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tax_paper` text COLLATE utf8mb4_unicode_ci,
  `logo` text COLLATE utf8mb4_unicode_ci,
  `banner` text COLLATE utf8mb4_unicode_ci,
  `shop_page_contents` text COLLATE utf8mb4_unicode_ci,
  `mobile_shop_page_contents` text COLLATE utf8mb4_unicode_ci,
  `shop_banner_id` bigint(20) UNSIGNED DEFAULT NULL,
  `shop_banner` text COLLATE utf8mb4_unicode_ci,
  `shop_tagline` text COLLATE utf8mb4_unicode_ci,
  `phone_no` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rating_count` double DEFAULT '0',
  `reviews_count` bigint(20) DEFAULT '0',
  `facebook` text COLLATE utf8mb4_unicode_ci,
  `google` text COLLATE utf8mb4_unicode_ci,
  `twitter` text COLLATE utf8mb4_unicode_ci,
  `youtube` text COLLATE utf8mb4_unicode_ci,
  `meta_title` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `seller_payouts`
--

CREATE TABLE `seller_payouts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `amount` double DEFAULT NULL,
  `message` longtext COLLATE utf8mb4_unicode_ci,
  `payment_to` mediumtext COLLATE utf8mb4_unicode_ci,
  `payment_by` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `payment_from` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` enum('pending','accepted','rejected','canceled','processed') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `seller_profile_user`
--

CREATE TABLE `seller_profile_user` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `seller_profile_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `position` int(11) NOT NULL DEFAULT '1',
  `image` text COLLATE utf8mb4_unicode_ci,
  `image_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `service_languages`
--

CREATE TABLE `service_languages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `service_id` bigint(20) UNSIGNED NOT NULL,
  `lang` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sub_title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `lang` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT 'en',
  `title` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `lang`, `title`, `value`, `created_at`, `updated_at`) VALUES
(1, 'en', 'current_version', '152', '2022-04-06 00:07:39', '2022-10-11 09:08:35'),
(2, 'en', 'default_language', 'en', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(3, 'en', 'system_name', 'Yoori e-Commerce CMS', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(4, 'en', 'default_time_zone', 'Asia/Dhaka', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(5, 'en', 'default_currency', '1', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(6, 'en', 'favicon', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(7, 'en', 'https', '0', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(8, 'en', 'maintenance_mode', '0', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(9, 'en', 'seller_system', '1', '2022-04-06 00:07:39', '2022-04-17 13:16:28'),
(10, 'en', 'classified_product', '1', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(11, 'en', 'seller_product_auto_approve', '0', '2022-04-06 00:07:39', '2022-04-17 13:17:38'),
(12, 'en', 'wallet_system', '1', '2022-04-06 00:07:39', '2022-04-17 13:17:36'),
(13, 'en', 'coupon_system', '1', '2022-04-06 00:07:39', '2022-04-17 13:17:36'),
(14, 'en', 'pickup_point', '1', '2022-04-06 00:07:39', '2022-04-17 13:17:35'),
(15, 'en', 'conversation', '1', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(16, 'en', 'color', '1', '2022-04-06 00:07:39', '2022-04-06 01:53:45'),
(17, 'en', 'mail_driver', 'smtp', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(18, 'en', 'smtp_mail_host', 'smtp.gmail.com', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(19, 'en', 'smtp_mail_port', '587', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(20, 'en', 'smtp_mail_address', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(21, 'en', 'smtp_name', 'YOORI', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(22, 'en', 'smtp_mail_username', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(23, 'en', 'smtp_mail_password', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(24, 'en', 'smtp_mail_encryption_type', 'tls', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(25, 'en', 'sendgrid_mail_host', 'smtp.sendgrid.net', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(26, 'en', 'sendgrid_mail_port', '587', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(27, 'en', 'sendgrid_mail_address', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(28, 'en', 'sendgrid_name', 'yoori', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(29, 'en', 'sendgrid_mail_username', 'apikey', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(30, 'en', 'sendgrid_mail_password', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(31, 'en', 'sendgrid_mail_encryption_type', 'tls', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(32, 'en', 'sendmail_path', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(33, 'en', 'mailgun_mail_host', 'smtp.mailgun.org', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(34, 'en', 'mailgun_mail_port', '587', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(35, 'en', 'mailgun_mail_address', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(36, 'en', 'mailgun_name', 'yoori', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(37, 'en', 'mailgun_mail_username', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(38, 'en', 'mailgun_mail_password', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(39, 'en', 'mailgun_mail_encryption_type', 'tls', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(40, 'en', 'mailgun_domain', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(41, 'en', 'mailgun_secret', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(42, 'en', 'mail_signature', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(43, 'en', 'currency_symbol_format', 'symbol_amount', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(44, 'en', 'decimal_separator', '.', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(45, 'en', 'no_of_decimals', '2', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(46, 'en', 'default_storage', 'local', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(47, 'en', 'aws_access_key_id', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(48, 'en', 'aws_secret_access_key', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(49, 'en', 'aws_default_region', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(50, 'en', 'aws_bucket', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(51, 'en', 'image_optimization', '1', '2022-04-06 00:07:39', '2022-04-06 00:12:27'),
(52, 'en', 'image_optimization_percentage', '80', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(53, 'en', 'is_cache_enabled', 'disable', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(54, 'en', 'default_cache', 'file', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(55, 'en', 'redis_host', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(56, 'en', 'redis_password', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(57, 'en', 'redis_port', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(58, 'en', 'memcached_host', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(59, 'en', 'memcached_password', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(60, 'en', 'memcached_port', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(61, 'en', 'pagination', '15', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(62, 'en', 'api_paginate', '20', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(63, 'en', 'index_form_paginate', '10', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(64, 'en', 'media_paginate', '32', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(65, 'en', 'order_prefix', 'YR', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(66, 'en', 'primary_color', '#ea2424', '2022-04-06 00:07:39', '2022-04-06 03:45:33'),
(67, 'en', 'secondary_color', '#333333', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(68, 'en', 'full_width_menu_background', '1', '2022-04-06 00:07:39', '2022-04-06 00:21:14'),
(69, 'en', 'menu_background_color', '#fcb800', '2022-04-06 00:07:39', '2022-09-06 10:09:22'),
(70, 'en', 'menu_text_color', '#444444', '2022-04-06 00:07:39', '2022-09-10 09:35:34'),
(71, 'en', 'menu_border_bottom_color', '#EEEEEE', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(72, 'en', 'fonts', 'Poppins', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(73, 'en', 'meta_title', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(74, 'en', 'meta_description', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(75, 'en', 'keyword', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(76, 'en', 'article', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(77, 'en', 'og_image', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(78, 'en', 'popup_title', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(79, 'en', 'popup_description', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(80, 'en', 'popup_show_in', 'home_page', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(81, 'en', 'popup_image', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(82, 'en', 'site_popup_status', '0', '2022-04-06 00:07:39', '2022-04-06 06:07:46'),
(83, 'en', 'custom_css', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(84, 'en', 'custom_header_script', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(85, 'en', 'custom_footer_script', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(86, 'en', 'cookies_agreement', '<p><b>Notice: </b>Yoori uses cookies to provide necessary website functionality, improve your experience and analyze our traffic. By using our website, you agree to our Privacy Policy and our Cookies Policy.<br></p>', '2022-04-06 00:07:39', '2022-04-06 03:40:30'),
(87, 'en', 'cookies_status', '0', '2022-04-06 00:07:39', '2022-04-06 03:43:39'),
(88, 'en', 'header_theme', 'header_theme1', '2022-04-06 00:07:39', '2022-04-06 05:42:36'),
(91, 'en', 'header_contact_number', '1', '2022-04-06 00:07:39', '2022-04-06 05:53:20'),
(92, 'en', 'header_contact_phone', '8801234567890', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(93, 'en', 'header_contact_email', 'support@website.com', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(94, 'en', 'language_switcher', '1', '2022-04-06 00:07:39', '2022-04-06 05:35:25'),
(95, 'en', 'currency_switcher', '1', '2022-04-06 00:07:39', '2022-04-06 05:34:32'),
(96, 'en', 'topbar_play_store_link', '0', '2022-04-06 00:07:39', '2022-04-21 13:01:59'),
(97, 'en', 'topbar_app_store_link', '0', '2022-04-06 00:07:39', '2022-04-21 13:02:01'),
(98, 'en', 'banner_link', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(99, 'en', 'banner_image', '[]', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(100, 'en', 'header_menu', 'a:7:{i:0;a:2:{s:5:\"label\";s:4:\"Home\";s:3:\"url\";s:1:\"/\";}i:1;a:2:{s:5:\"label\";s:8:\"Products\";s:3:\"url\";s:9:\"/products\";}i:2;a:2:{s:5:\"label\";s:10:\"Categories\";s:3:\"url\";s:11:\"/categories\";}i:3;a:2:{s:5:\"label\";s:6:\"Brands\";s:3:\"url\";s:7:\"/brands\";}i:4;a:2:{s:5:\"label\";s:9:\"Campaigns\";s:3:\"url\";s:10:\"/campaigns\";}i:5;a:2:{s:5:\"label\";s:7:\"Sellers\";s:3:\"url\";s:8:\"/sellers\";}i:6;a:5:{s:5:\"label\";s:5:\"Pages\";s:3:\"url\";s:18:\"javascript:void(0)\";i:0;a:2:{s:5:\"label\";s:5:\"Blogs\";s:3:\"url\";s:6:\"/blogs\";}i:1;a:2:{s:5:\"label\";s:8:\"About Us\";s:3:\"url\";s:11:\"/page/about\";}i:2;a:2:{s:5:\"label\";s:10:\"Contact Us\";s:3:\"url\";s:8:\"/contact\";}}}', '2022-04-06 00:07:39', '2022-04-17 13:19:32'),
(101, 'en', 'footer_theme', 'footer_theme1', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(102, 'en', 'about_description', '<p><span style=\"font-family: Poppins, Helvetica, sans-serif;\"><font color=\"#767676\"><b>Yoori&nbsp;</b></font></span><span style=\"color: rgb(102, 102, 102); font-family: Roboto, Helvetica, sans-serif;\">being the trusted online shop in over the world aims to provide a trouble-free shopping experience for the people of the world but is also providing ample opportunity for international online shopping from yoori.&nbsp;</span><span style=\"font-size: 0.875rem; font-family: Roboto, Helvetica, sans-serif;\"><font color=\"#767676\"><span style=\"font-weight: bolder;\">Yoori&nbsp;</span></font></span><span style=\"font-size: 0.875rem; color: rgb(102, 102, 102); font-family: Roboto, Helvetica, sans-serif;\">being the trusted online shop in over the world aims to provide a trouble-free shopping experience for the people of the world but is also providing ample opportunity for international online shopping from yoori.&nbsp;</span>', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(106, 'en', 'show_social_links', '1', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(107, 'en', 'footer_contact_phone', '01234567890', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(108, 'en', 'footer_contact_email', 'test@spagreen.net', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(109, 'en', 'footer_contact_address', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(110, 'en', 'copyright', '©Yoori by SpaGreen Creative 2022, All Rights Reserved.', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(111, 'en', 'footer_menu', 'a:6:{i:0;a:2:{s:5:\"label\";s:4:\"Home\";s:3:\"url\";s:1:\"/\";}i:1;a:2:{s:5:\"label\";s:14:\"All Categories\";s:3:\"url\";s:10:\"categories\";}i:2;a:2:{s:5:\"label\";s:10:\"All Brands\";s:3:\"url\";s:6:\"brands\";}i:3;a:2:{s:5:\"label\";s:12:\"All Products\";s:3:\"url\";s:8:\"products\";}i:4;a:2:{s:5:\"label\";s:5:\"Blogs\";s:3:\"url\";s:5:\"blogs\";}i:5;a:2:{s:5:\"label\";s:9:\"Campaigns\";s:3:\"url\";s:9:\"campaigns\";}}', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(112, 'en', 'useful_links', 'a:7:{i:0;a:2:{s:5:\"label\";s:11:\"Latest News\";s:3:\"url\";s:6:\"/blogs\";}i:1;a:2:{s:5:\"label\";s:19:\"Browse All Products\";s:3:\"url\";s:9:\"/products\";}i:2;a:2:{s:5:\"label\";s:19:\"Browse All Category\";s:3:\"url\";s:11:\"/categories\";}i:3;a:2:{s:5:\"label\";s:17:\"Browse All Brands\";s:3:\"url\";s:7:\"/brands\";}i:4;a:2:{s:5:\"label\";s:18:\"Terms & Conditions\";s:3:\"url\";s:22:\"/page/terms-conditions\";}i:5;a:2:{s:5:\"label\";s:14:\"Privacy Policy\";s:3:\"url\";s:20:\"/page/privacy-policy\";}i:6;a:2:{s:5:\"label\";s:13:\"Refund Policy\";s:3:\"url\";s:19:\"/page/refund-policy\";}}', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(113, 'en', 'facebook_link', 'https://www.facebook.com/', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(114, 'en', 'twitter_link', 'https://www.twitter.com/', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(115, 'en', 'instagram_link', 'https://www.instagram.com/', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(116, 'en', 'youtube_link', 'https://www.youtube.com/', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(117, 'en', 'linkedin_link', 'https://www.linked.com/', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(118, 'en', 'social_link_status', '0', '2022-04-06 00:07:39', '2022-04-06 00:18:03'),
(119, 'en', 'payment_method_banner', '', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(120, 'en', 'active_sms_provider', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(121, 'en', 'sms_method', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(122, 'en', 'twilio_sms_sid', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(123, 'en', 'twilio_sms_auth_token', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(124, 'en', 'valid_twilio_sms_number', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(125, 'en', 'is_twilio_sms_activated', '0', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(126, 'en', 'fast_2_auth_key', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(127, 'en', 'fast_2_entity_id', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(128, 'en', 'fast_2_route', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(129, 'en', 'fast_2_language', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(130, 'en', 'fast_2_sender_id', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(131, 'en', 'is_fast_2_activated', '0', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(132, 'en', 'spagreen_url', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(133, 'en', 'spagreen_sms_api_key', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(134, 'en', 'spagreen_secret_key', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(135, 'en', 'is_spagreen_sms_activated', '0', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(136, 'en', 'mimo_username', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(137, 'en', 'mimo_sms_password', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(138, 'en', 'mimo_sms_sender_id', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(139, 'en', 'is_mimo_sms_activated', '0', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(140, 'en', 'nexmo_sms_key', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(141, 'en', 'nexmo_sms_secret_key', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(142, 'en', 'type', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(143, 'en', 'is_nexmo_sms_activated', '0', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(144, 'en', 'ssl_sms_api_token', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(145, 'en', 'ssl_sms_sid', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(146, 'en', 'ssm_sms_url', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(147, 'en', 'is_ssl_wireless_sms_activated', '0', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(148, 'en', 'payment_method', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(149, 'en', 'paypal_client_id', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(150, 'en', 'paypal_client_secret', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(151, 'en', 'is_paypal_activated', '0', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(152, 'en', 'is_paypal_sandbox_mode_activated', '0', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(153, 'en', 'stripe_key', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(154, 'en', 'stripe_secret', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(155, 'en', 'is_stripe_activated', '0', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(156, 'en', 'is_stripe_sandbox_mode_activated', '0', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(157, 'en', 'sslcommerz_id', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(158, 'en', 'sslcommerz_password', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(159, 'en', 'is_sslcommerz_activated', '0', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(160, 'en', 'is_sslcommerz_sandbox_mode_activated', '0', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(161, 'en', 'merchant_id', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(162, 'en', 'merchant_key', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(163, 'en', 'merchant_website', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(164, 'en', 'channel', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(165, 'en', 'industry_type', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(166, 'en', 'is_paytm_activated', '0', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(167, 'en', 'is_paytm_sandbox_mode_activated', '0', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(168, 'en', 'jazz_cash_merchant_id', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(169, 'en', 'jazz_cash_password', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(170, 'en', 'jazz_cash_integrity_salt', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(171, 'en', 'is_jazz_cash_activated', '0', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(172, 'en', 'razorpay_key', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(173, 'en', 'razorpay_secret', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(174, 'en', 'is_razorpay_activated', '0', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(175, 'en', 'api_server_url', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(176, 'en', 'api_key_app', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(177, 'en', 'latest_apk_version', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(178, 'en', 'latest_apk_code', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(179, 'en', 'apk_file_url', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(180, 'en', 'whats_new_latest_apk', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(181, 'en', 'android_skippable', '0', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(182, 'en', 'latest_ipa_version', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(183, 'en', 'latest_ipa_code', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(184, 'en', 'ipa_file_url', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(185, 'en', 'whats_new_latest_ipa', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(186, 'en', 'ios_skippable', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(187, 'en', 'privacy_policy_url', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(188, 'en', 'terms_condition_url', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(189, 'en', 'support_url', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(190, 'en', 'intro_skippable', '0', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(191, 'en', 'mandatory_login', '0', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(192, 'en', 'admob_app_id', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(193, 'en', 'admob_banner_ads_id', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(194, 'en', 'admob_interstitial_ads_id', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(195, 'en', 'admob_native_ads_id', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(196, 'en', 'ads_enable', '0', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(197, 'en', 'seller_commission', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(198, 'en', 'seller_commission_status', '1', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(199, 'en', 'delivery_hero_payment_type', 'delivery_hero_salary', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(200, 'en', 'delivery_hero_send_mail', '0', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(201, 'en', 'delivery_hero_OTP', '0', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(202, 'en', 'refund_request_time', '10', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(203, 'en', 'refund_sticker', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(204, 'en', 'reward_convert_rate', '10', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(205, 'en', 'shipping_fee_type', 'product_base', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(206, 'en', 'shipping_fee_flat_rate', '', '2022-04-06 00:07:39', '2022-05-23 12:25:03'),
(207, 'en', 'shipping_fee_admin_product', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(208, 'en', 'home_page_contents', 'a:11:{i:0;a:1:{s:6:\"banner\";a:2:{s:9:\"thumbnail\";a:2:{i:0;s:1:\"2\";i:1;s:1:\"3\";}s:3:\"url\";a:2:{i:0;s:1:\"/\";i:1;s:1:\"/\";}}}i:1;a:1:{s:16:\"popular_category\";a:6:{i:0;s:1:\"1\";i:1;s:1:\"3\";i:2;s:1:\"4\";i:3;s:1:\"6\";i:4;s:1:\"9\";i:5;s:2:\"10\";}}i:2;a:1:{s:11:\"todays_deal\";s:1:\"3\";}i:3;a:1:{s:10:\"flash_deal\";s:1:\"4\";}i:4;a:1:{s:12:\"top_category\";a:5:{i:0;s:1:\"1\";i:1;s:1:\"2\";i:2;s:1:\"3\";i:3;s:1:\"4\";i:4;s:2:\"11\";}}i:5;a:1:{s:16:\"category_section\";a:3:{s:8:\"category\";s:1:\"1\";s:6:\"banner\";s:0:\"\";s:10:\"banner_url\";s:1:\"/\";}}i:6;a:1:{s:21:\"best_selling_products\";a:1:{i:0;s:1:\"7\";}}i:7;a:1:{s:17:\"offer_ending_soon\";a:2:{s:6:\"banner\";s:0:\"\";s:10:\"banner_url\";s:1:\"/\";}}i:8;a:1:{s:14:\"latest_product\";s:1:\"9\";}i:9;a:1:{s:11:\"latest_news\";a:1:{i:0;s:2:\"10\";}}i:10;a:1:{s:14:\"popular_brands\";a:1:{i:0;s:2:\"11\";}}}', '2022-04-06 00:07:39', '2022-04-08 08:14:37'),
(209, 'en', 'show_service_info_section', '0', '2022-04-06 00:07:39', '2022-04-06 01:45:10'),
(210, 'en', 'show_subscription_section', '0', '2022-04-06 00:07:39', '2022-04-06 01:45:10'),
(211, 'en', 'is_facebook_login_activated', '0', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(212, 'en', 'facebook_client_id', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(213, 'en', 'facebook_client_secret', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(214, 'en', 'is_google_login_activated', '0', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(215, 'en', 'google_client_id', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(216, 'en', 'google_client_secret', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(217, 'en', 'is_twitter_login_activated', '0', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(218, 'en', 'twitter_client_id', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(219, 'en', 'twitter_client_secret', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(220, 'en', 'is_pusher_notification_active', '0', '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(221, 'en', 'pusher_app_id', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(222, 'en', 'pusher_app_key', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(223, 'en', 'pusher_app_secret', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(224, 'en', 'pusher_app_cluster', NULL, '2022-04-06 00:07:39', '2022-04-06 00:07:39'),
(225, 'en', 'id', NULL, '2022-04-06 00:20:25', '2022-04-17 10:02:54'),
(226, 'en', 'home_page_article', '', '2022-04-06 01:45:10', '2022-04-06 01:45:10'),
(227, 'en', 'show_blog_section', '0', '2022-04-06 01:45:10', '2022-04-06 01:45:10'),
(228, 'en', 'show_recent_viewed_products', '0', '2022-04-06 01:45:10', '2022-04-06 01:45:10'),
(229, 'en', 'show_categories_section', '0', '2022-04-06 01:45:10', '2022-04-06 01:45:10'),
(230, 'en', 'seller_agreement', '', '2022-04-06 03:39:56', '2022-04-06 03:39:56'),
(231, 'en', 'customer_agreement', '', '2022-04-06 03:39:56', '2022-04-06 03:39:56'),
(232, 'en', 'privacy_agreement', '', '2022-04-06 03:39:56', '2022-04-06 03:39:56'),
(233, 'en', 'admin_panel_copyright_text', '©Yoori by SpaGreen Creative 2022, All Rights Reserved.', NULL, NULL),
(234, 'en', 'admin_panel_title', 'Yoori e-Commerce CMS', '2022-04-17 09:52:21', '2022-04-17 09:52:41'),
(235, 'en', 'system_short_name', 'Yoori', '2022-04-17 09:55:01', '2022-04-17 09:56:13'),
(239, 'en', 'pay_later_system', '1', '2022-04-17 13:17:35', '2022-04-17 13:17:35'),
(240, 'en', 'invoice_based_shipping_fee', 'a:1:{i:0;a:3:{s:10:\"min_amount\";s:0:\"\";s:10:\"max_amount\";s:0:\"\";s:3:\"fee\";s:0:\"\";}}', '2022-05-23 12:25:03', '2022-05-23 12:25:03'),
(241, 'en', 'shipping_fee_default_rate', '', '2022-05-23 12:25:03', '2022-05-23 12:25:03'),
(242, 'en', 'default_country', '19', NULL, NULL),
(243, 'en', 'refund_protection_title', 'Yoori eCommerce Refund Protection', NULL, NULL),
(244, 'en', 'refund_protection_sub_title', '30 Days cash back Guarantee', NULL, NULL),
(245, 'en', 'refund_policy_agreement', 'refund-policy', NULL, NULL),
(246, 'en', 'purchase_code', '', '2022-07-21 17:21:27', '2022-10-11 15:08:35'),
(247, 'en', 'mobile_home_page_contents', 'a:8:{i:0;a:1:{s:14:\"latest_product\";s:2:\"10\";}i:1;a:1:{s:12:\"top_category\";a:4:{i:0;s:1:\"1\";i:1;s:1:\"2\";i:2;s:1:\"3\";i:3;s:1:\"4\";}}i:2;a:1:{s:21:\"best_selling_products\";a:1:{i:0;s:1:\"2\";}}i:3;a:1:{s:11:\"latest_news\";a:1:{i:0;s:1:\"4\";}}i:4;a:1:{s:11:\"top_sellers\";a:1:{i:0;s:1:\"5\";}}i:5;a:1:{s:12:\"best_sellers\";a:1:{i:0;s:1:\"6\";}}i:6;a:1:{s:10:\"flash_deal\";s:1:\"7\";}i:7;a:1:{s:11:\"todays_deal\";s:1:\"8\";}}', '2022-07-26 13:45:27', '2022-07-26 13:45:27'),
(248, 'en', 'version_code', '1.5.3', '2022-08-08 11:13:06', '2022-10-11 09:08:35'),
(249, 'en', 'menu_active_color', '#000000', '2022-09-06 10:09:22', '2022-09-06 10:09:22'),
(250, 'en', 'button_background_color', '#333333', '2022-09-06 10:09:22', '2022-09-10 09:35:34'),
(251, 'en', 'button_text_color', '#ffffff', '2022-09-06 10:09:22', '2022-09-06 10:09:22'),
(252, 'en', 'button_text_color', '#ea2424', '2022-09-06 10:09:22', '2022-09-06 10:09:22'),
(253, 'en', 'button_border_color', '#333333', '2022-09-10 09:35:34', '2022-09-10 09:35:34');

-- --------------------------------------------------------

--
-- Table structure for table `sliders`
--

CREATE TABLE `sliders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `for_mobile` tinyint(1) NOT NULL DEFAULT '0',
  `action_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '/',
  `bg_image` text COLLATE utf8mb4_unicode_ci,
  `bg_image_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sliders`
--

INSERT INTO `sliders` (`id`, `order`, `status`, `for_mobile`, `action_type`, `link`, `bg_image`, `bg_image_id`, `created_at`, `updated_at`) VALUES
(2, 1, 1, 0, '', '/', '[]', 1, '2022-06-22 13:55:21', '2022-06-22 13:55:21');

-- --------------------------------------------------------

--
-- Table structure for table `states`
--

CREATE TABLE `states` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `country_id` bigint(20) UNSIGNED NOT NULL,
  `latitude` decimal(10,8) DEFAULT NULL,
  `longitude` decimal(11,8) DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `subscribers`
--

CREATE TABLE `subscribers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `supports`
--

CREATE TABLE `supports` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `subject` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `support_department_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `priority` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` tinyint(4) NOT NULL,
  `ticket_id` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `viewed` tinyint(4) NOT NULL DEFAULT '0',
  `client_viewed` tinyint(4) NOT NULL DEFAULT '0',
  `file` text COLLATE utf8mb4_unicode_ci,
  `ticket_body` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `support_departments`
--

CREATE TABLE `support_departments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `support_department_languages`
--

CREATE TABLE `support_department_languages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `support_department_id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lang` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `theme_options`
--

CREATE TABLE `theme_options` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `theme_options`
--

INSERT INTO `theme_options` (`id`, `name`, `options`, `created_at`, `updated_at`) VALUES
(1, 'theme_one', '{\"header_style\":\"header_style1\",\"footer_style\":\"footer_style1\",\"primary_color\":\"#000000\",\"fonts\":\"roboto\"}', '2022-04-06 00:07:39', '2022-04-06 00:07:39');

-- --------------------------------------------------------

--
-- Table structure for table `throttle`
--

CREATE TABLE `throttle` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ip` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ticket_replays`
--

CREATE TABLE `ticket_replays` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `ticket_id` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `support_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `file` text COLLATE utf8mb4_unicode_ci,
  `file_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `replay` longtext COLLATE utf8mb4_unicode_ci,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `timezones`
--

CREATE TABLE `timezones` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `country_code` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  `timezone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gmt_offset` varchar(8) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dst_offset` varchar(8) COLLATE utf8mb4_unicode_ci NOT NULL,
  `raw_offset` varchar(8) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `timezones`
--

INSERT INTO `timezones` (`id`, `country_code`, `timezone`, `gmt_offset`, `dst_offset`, `raw_offset`, `created_at`, `updated_at`) VALUES
(1, 'AD', 'Europe/Andorra', '1.00', '2.00', '1.00', NULL, NULL),
(2, 'AE', 'Asia/Dubai', '4.00', '4.00', '4.00', NULL, NULL),
(3, 'AF', 'Asia/Kabul', '4.50', '4.50', '4.50', NULL, NULL),
(4, 'AG', 'America/Antigua', '-4.00', '-4.00', '-4.00', NULL, NULL),
(5, 'AI', 'America/Anguilla', '-4.00', '-4.00', '-4.00', NULL, NULL),
(6, 'AL', 'Europe/Tirane', '1.00', '2.00', '1.00', NULL, NULL),
(7, 'AM', 'Asia/Yerevan', '4.00', '4.00', '4.00', NULL, NULL),
(8, 'AO', 'Africa/Luanda', '1.00', '1.00', '1.00', NULL, NULL),
(9, 'AQ', 'Antarctica/Casey', '8.00', '8.00', '8.00', NULL, NULL),
(10, 'AQ', 'Antarctica/Davis', '7.00', '7.00', '7.00', NULL, NULL),
(11, 'AQ', 'Antarctica/DumontDUrville', '10.00', '10.00', '10.00', NULL, NULL),
(12, 'AQ', 'Antarctica/Mawson', '5.00', '5.00', '5.00', NULL, NULL),
(13, 'AQ', 'Antarctica/McMurdo', '13.00', '12.00', '12.00', NULL, NULL),
(14, 'AQ', 'Antarctica/Palmer', '-3.00', '-4.00', '-4.00', NULL, NULL),
(15, 'AQ', 'Antarctica/Rothera', '-3.00', '-3.00', '-3.00', NULL, NULL),
(16, 'AQ', 'Antarctica/South_Pole', '13.00', '12.00', '12.00', NULL, NULL),
(17, 'AQ', 'Antarctica/Syowa', '3.00', '3.00', '3.00', NULL, NULL),
(18, 'AQ', 'Antarctica/Vostok', '6.00', '6.00', '6.00', NULL, NULL),
(19, 'AR', 'America/Argentina/Buenos_Aires', '-3.00', '-3.00', '-3.00', NULL, NULL),
(20, 'AR', 'America/Argentina/Catamarca', '-3.00', '-3.00', '-3.00', NULL, NULL),
(21, 'AR', 'America/Argentina/Cordoba', '-3.00', '-3.00', '-3.00', NULL, NULL),
(22, 'AR', 'America/Argentina/Jujuy', '-3.00', '-3.00', '-3.00', NULL, NULL),
(23, 'AR', 'America/Argentina/La_Rioja', '-3.00', '-3.00', '-3.00', NULL, NULL),
(24, 'AR', 'America/Argentina/Mendoza', '-3.00', '-3.00', '-3.00', NULL, NULL),
(25, 'AR', 'America/Argentina/Rio_Gallegos', '-3.00', '-3.00', '-3.00', NULL, NULL),
(26, 'AR', 'America/Argentina/Salta', '-3.00', '-3.00', '-3.00', NULL, NULL),
(27, 'AR', 'America/Argentina/San_Juan', '-3.00', '-3.00', '-3.00', NULL, NULL),
(28, 'AR', 'America/Argentina/San_Luis', '-3.00', '-3.00', '-3.00', NULL, NULL),
(29, 'AR', 'America/Argentina/Tucuman', '-3.00', '-3.00', '-3.00', NULL, NULL),
(30, 'AR', 'America/Argentina/Ushuaia', '-3.00', '-3.00', '-3.00', NULL, NULL),
(31, 'AS', 'Pacific/Pago_Pago', '-11.00', '-11.00', '-11.00', NULL, NULL),
(32, 'AT', 'Europe/Vienna', '1.00', '2.00', '1.00', NULL, NULL),
(33, 'AU', 'Antarctica/Macquarie', '11.00', '11.00', '11.00', NULL, NULL),
(34, 'AU', 'Australia/Adelaide', '10.50', '9.50', '9.50', NULL, NULL),
(35, 'AU', 'Australia/Brisbane', '10.00', '10.00', '10.00', NULL, NULL),
(36, 'AU', 'Australia/Broken_Hill', '10.50', '9.50', '9.50', NULL, NULL),
(37, 'AU', 'Australia/Currie', '11.00', '10.00', '10.00', NULL, NULL),
(38, 'AU', 'Australia/Darwin', '9.50', '9.50', '9.50', NULL, NULL),
(39, 'AU', 'Australia/Eucla', '8.75', '8.75', '8.75', NULL, NULL),
(40, 'AU', 'Australia/Hobart', '11.00', '10.00', '10.00', NULL, NULL),
(41, 'AU', 'Australia/Lindeman', '10.00', '10.00', '10.00', NULL, NULL),
(42, 'AU', 'Australia/Lord_Howe', '11.00', '10.50', '10.50', NULL, NULL),
(43, 'AU', 'Australia/Melbourne', '11.00', '10.00', '10.00', NULL, NULL),
(44, 'AU', 'Australia/Perth', '8.00', '8.00', '8.00', NULL, NULL),
(45, 'AU', 'Australia/Sydney', '11.00', '10.00', '10.00', NULL, NULL),
(46, 'AW', 'America/Aruba', '-4.00', '-4.00', '-4.00', NULL, NULL),
(47, 'AX', 'Europe/Mariehamn', '2.00', '3.00', '2.00', NULL, NULL),
(48, 'AZ', 'Asia/Baku', '4.00', '5.00', '4.00', NULL, NULL),
(49, 'BA', 'Europe/Sarajevo', '1.00', '2.00', '1.00', NULL, NULL),
(50, 'BB', 'America/Barbados', '-4.00', '-4.00', '-4.00', NULL, NULL),
(51, 'BD', 'Asia/Dhaka', '6.00', '6.00', '6.00', NULL, NULL),
(52, 'BE', 'Europe/Brussels', '1.00', '2.00', '1.00', NULL, NULL),
(53, 'BF', 'Africa/Ouagadougou', '0.00', '0.00', '0.00', NULL, NULL),
(54, 'BG', 'Europe/Sofia', '2.00', '3.00', '2.00', NULL, NULL),
(55, 'BH', 'Asia/Bahrain', '3.00', '3.00', '3.00', NULL, NULL),
(56, 'BI', 'Africa/Bujumbura', '2.00', '2.00', '2.00', NULL, NULL),
(57, 'BJ', 'Africa/Porto-Novo', '1.00', '1.00', '1.00', NULL, NULL),
(58, 'BL', 'America/St_Barthelemy', '-4.00', '-4.00', '-4.00', NULL, NULL),
(59, 'BM', 'Atlantic/Bermuda', '-4.00', '-3.00', '-4.00', NULL, NULL),
(60, 'BN', 'Asia/Brunei', '8.00', '8.00', '8.00', NULL, NULL),
(61, 'BO', 'America/La_Paz', '-4.00', '-4.00', '-4.00', NULL, NULL),
(62, 'BQ', 'America/Kralendijk', '-4.00', '-4.00', '-4.00', NULL, NULL),
(63, 'BR', 'America/Araguaina', '-3.00', '-3.00', '-3.00', NULL, NULL),
(64, 'BR', 'America/Bahia', '-3.00', '-3.00', '-3.00', NULL, NULL),
(65, 'BR', 'America/Belem', '-3.00', '-3.00', '-3.00', NULL, NULL),
(66, 'BR', 'America/Boa_Vista', '-4.00', '-4.00', '-4.00', NULL, NULL),
(67, 'BR', 'America/Campo_Grande', '-3.00', '-4.00', '-4.00', NULL, NULL),
(68, 'BR', 'America/Cuiaba', '-3.00', '-4.00', '-4.00', NULL, NULL),
(69, 'BR', 'America/Eirunepe', '-5.00', '-5.00', '-5.00', NULL, NULL),
(70, 'BR', 'America/Fortaleza', '-3.00', '-3.00', '-3.00', NULL, NULL),
(71, 'BR', 'America/Maceio', '-3.00', '-3.00', '-3.00', NULL, NULL),
(72, 'BR', 'America/Manaus', '-4.00', '-4.00', '-4.00', NULL, NULL),
(73, 'BR', 'America/Noronha', '-2.00', '-2.00', '-2.00', NULL, NULL),
(74, 'BR', 'America/Porto_Velho', '-4.00', '-4.00', '-4.00', NULL, NULL),
(75, 'BR', 'America/Recife', '-3.00', '-3.00', '-3.00', NULL, NULL),
(76, 'BR', 'America/Rio_Branco', '-5.00', '-5.00', '-5.00', NULL, NULL),
(77, 'BR', 'America/Santarem', '-3.00', '-3.00', '-3.00', NULL, NULL),
(78, 'BR', 'America/Sao_Paulo', '-2.00', '-3.00', '-3.00', NULL, NULL),
(79, 'BS', 'America/Nassau', '-5.00', '-4.00', '-5.00', NULL, NULL),
(80, 'BT', 'Asia/Thimphu', '6.00', '6.00', '6.00', NULL, NULL),
(81, 'BW', 'Africa/Gaborone', '2.00', '2.00', '2.00', NULL, NULL),
(82, 'BY', 'Europe/Minsk', '3.00', '3.00', '3.00', NULL, NULL),
(83, 'BZ', 'America/Belize', '-6.00', '-6.00', '-6.00', NULL, NULL),
(84, 'CA', 'America/Atikokan', '-5.00', '-5.00', '-5.00', NULL, NULL),
(85, 'CA', 'America/Blanc-Sablon', '-4.00', '-4.00', '-4.00', NULL, NULL),
(86, 'CA', 'America/Cambridge_Bay', '-7.00', '-6.00', '-7.00', NULL, NULL),
(87, 'CA', 'America/Creston', '-7.00', '-7.00', '-7.00', NULL, NULL),
(88, 'CA', 'America/Dawson', '-8.00', '-7.00', '-8.00', NULL, NULL),
(89, 'CA', 'America/Dawson_Creek', '-7.00', '-7.00', '-7.00', NULL, NULL),
(90, 'CA', 'America/Edmonton', '-7.00', '-6.00', '-7.00', NULL, NULL),
(91, 'CA', 'America/Glace_Bay', '-4.00', '-3.00', '-4.00', NULL, NULL),
(92, 'CA', 'America/Goose_Bay', '-4.00', '-3.00', '-4.00', NULL, NULL),
(93, 'CA', 'America/Halifax', '-4.00', '-3.00', '-4.00', NULL, NULL),
(94, 'CA', 'America/Inuvik', '-7.00', '-6.00', '-7.00', NULL, NULL),
(95, 'CA', 'America/Iqaluit', '-5.00', '-4.00', '-5.00', NULL, NULL),
(96, 'CA', 'America/Moncton', '-4.00', '-3.00', '-4.00', NULL, NULL),
(97, 'CA', 'America/Montreal', '-5.00', '-4.00', '-5.00', NULL, NULL),
(98, 'CA', 'America/Nipigon', '-5.00', '-4.00', '-5.00', NULL, NULL),
(99, 'CA', 'America/Pangnirtung', '-5.00', '-4.00', '-5.00', NULL, NULL),
(100, 'CA', 'America/Rainy_River', '-6.00', '-5.00', '-6.00', NULL, NULL),
(101, 'CA', 'America/Rankin_Inlet', '-6.00', '-5.00', '-6.00', NULL, NULL),
(102, 'CA', 'America/Regina', '-6.00', '-6.00', '-6.00', NULL, NULL),
(103, 'CA', 'America/Resolute', '-6.00', '-5.00', '-6.00', NULL, NULL),
(104, 'CA', 'America/St_Johns', '-3.50', '-2.50', '-3.50', NULL, NULL),
(105, 'CA', 'America/Swift_Current', '-6.00', '-6.00', '-6.00', NULL, NULL),
(106, 'CA', 'America/Thunder_Bay', '-5.00', '-4.00', '-5.00', NULL, NULL),
(107, 'CA', 'America/Toronto', '-5.00', '-4.00', '-5.00', NULL, NULL),
(108, 'CA', 'America/Vancouver', '-8.00', '-7.00', '-8.00', NULL, NULL),
(109, 'CA', 'America/Whitehorse', '-8.00', '-7.00', '-8.00', NULL, NULL),
(110, 'CA', 'America/Winnipeg', '-6.00', '-5.00', '-6.00', NULL, NULL),
(111, 'CA', 'America/Yellowknife', '-7.00', '-6.00', '-7.00', NULL, NULL),
(112, 'CC', 'Indian/Cocos', '6.50', '6.50', '6.50', NULL, NULL),
(113, 'CD', 'Africa/Kinshasa', '1.00', '1.00', '1.00', NULL, NULL),
(114, 'CD', 'Africa/Lubumbashi', '2.00', '2.00', '2.00', NULL, NULL),
(115, 'CF', 'Africa/Bangui', '1.00', '1.00', '1.00', NULL, NULL),
(116, 'CG', 'Africa/Brazzaville', '1.00', '1.00', '1.00', NULL, NULL),
(117, 'CH', 'Europe/Zurich', '1.00', '2.00', '1.00', NULL, NULL),
(118, 'CI', 'Africa/Abidjan', '0.00', '0.00', '0.00', NULL, NULL),
(119, 'CK', 'Pacific/Rarotonga', '-10.00', '-10.00', '-10.00', NULL, NULL),
(120, 'CL', 'America/Santiago', '-3.00', '-4.00', '-4.00', NULL, NULL),
(121, 'CL', 'Pacific/Easter', '-5.00', '-6.00', '-6.00', NULL, NULL),
(122, 'CM', 'Africa/Douala', '1.00', '1.00', '1.00', NULL, NULL),
(123, 'CN', 'Asia/Chongqing', '8.00', '8.00', '8.00', NULL, NULL),
(124, 'CN', 'Asia/Harbin', '8.00', '8.00', '8.00', NULL, NULL),
(125, 'CN', 'Asia/Kashgar', '8.00', '8.00', '8.00', NULL, NULL),
(126, 'CN', 'Asia/Shanghai', '8.00', '8.00', '8.00', NULL, NULL),
(127, 'CN', 'Asia/Urumqi', '8.00', '8.00', '8.00', NULL, NULL),
(128, 'CO', 'America/Bogota', '-5.00', '-5.00', '-5.00', NULL, NULL),
(129, 'CR', 'America/Costa_Rica', '-6.00', '-6.00', '-6.00', NULL, NULL),
(130, 'CU', 'America/Havana', '-5.00', '-4.00', '-5.00', NULL, NULL),
(131, 'CV', 'Atlantic/Cape_Verde', '-1.00', '-1.00', '-1.00', NULL, NULL),
(132, 'CW', 'America/Curacao', '-4.00', '-4.00', '-4.00', NULL, NULL),
(133, 'CX', 'Indian/Christmas', '7.00', '7.00', '7.00', NULL, NULL),
(134, 'CY', 'Asia/Nicosia', '2.00', '3.00', '2.00', NULL, NULL),
(135, 'CZ', 'Europe/Prague', '1.00', '2.00', '1.00', NULL, NULL),
(136, 'DE', 'Europe/Berlin', '1.00', '2.00', '1.00', NULL, NULL),
(137, 'DE', 'Europe/Busingen', '1.00', '2.00', '1.00', NULL, NULL),
(138, 'DJ', 'Africa/Djibouti', '3.00', '3.00', '3.00', NULL, NULL),
(139, 'DK', 'Europe/Copenhagen', '1.00', '2.00', '1.00', NULL, NULL),
(140, 'DM', 'America/Dominica', '-4.00', '-4.00', '-4.00', NULL, NULL),
(141, 'DO', 'America/Santo_Domingo', '-4.00', '-4.00', '-4.00', NULL, NULL),
(142, 'DZ', 'Africa/Algiers', '1.00', '1.00', '1.00', NULL, NULL),
(143, 'EC', 'America/Guayaquil', '-5.00', '-5.00', '-5.00', NULL, NULL),
(144, 'EC', 'Pacific/Galapagos', '-6.00', '-6.00', '-6.00', NULL, NULL),
(145, 'EE', 'Europe/Tallinn', '2.00', '3.00', '2.00', NULL, NULL),
(146, 'EG', 'Africa/Cairo', '2.00', '2.00', '2.00', NULL, NULL),
(147, 'EH', 'Africa/El_Aaiun', '0.00', '0.00', '0.00', NULL, NULL),
(148, 'ER', 'Africa/Asmara', '3.00', '3.00', '3.00', NULL, NULL),
(149, 'ES', 'Africa/Ceuta', '1.00', '2.00', '1.00', NULL, NULL),
(150, 'ES', 'Atlantic/Canary', '0.00', '1.00', '0.00', NULL, NULL),
(151, 'ES', 'Europe/Madrid', '1.00', '2.00', '1.00', NULL, NULL),
(152, 'ET', 'Africa/Addis_Ababa', '3.00', '3.00', '3.00', NULL, NULL),
(153, 'FI', 'Europe/Helsinki', '2.00', '3.00', '2.00', NULL, NULL),
(154, 'FJ', 'Pacific/Fiji', '13.00', '12.00', '12.00', NULL, NULL),
(155, 'FK', 'Atlantic/Stanley', '-3.00', '-3.00', '-3.00', NULL, NULL),
(156, 'FM', 'Pacific/Chuuk', '10.00', '10.00', '10.00', NULL, NULL),
(157, 'FM', 'Pacific/Kosrae', '11.00', '11.00', '11.00', NULL, NULL),
(158, 'FM', 'Pacific/Pohnpei', '11.00', '11.00', '11.00', NULL, NULL),
(159, 'FO', 'Atlantic/Faroe', '0.00', '1.00', '0.00', NULL, NULL),
(160, 'FR', 'Europe/Paris', '1.00', '2.00', '1.00', NULL, NULL),
(161, 'GA', 'Africa/Libreville', '1.00', '1.00', '1.00', NULL, NULL),
(162, 'GB', 'Europe/London', '0.00', '1.00', '0.00', NULL, NULL),
(163, 'GD', 'America/Grenada', '-4.00', '-4.00', '-4.00', NULL, NULL),
(164, 'GE', 'Asia/Tbilisi', '4.00', '4.00', '4.00', NULL, NULL),
(165, 'GF', 'America/Cayenne', '-3.00', '-3.00', '-3.00', NULL, NULL),
(166, 'GG', 'Europe/Guernsey', '0.00', '1.00', '0.00', NULL, NULL),
(167, 'GH', 'Africa/Accra', '0.00', '0.00', '0.00', NULL, NULL),
(168, 'GI', 'Europe/Gibraltar', '1.00', '2.00', '1.00', NULL, NULL),
(169, 'GL', 'America/Danmarkshavn', '0.00', '0.00', '0.00', NULL, NULL),
(170, 'GL', 'America/Godthab', '-3.00', '-2.00', '-3.00', NULL, NULL),
(171, 'GL', 'America/Scoresbysund', '-1.00', '0.00', '-1.00', NULL, NULL),
(172, 'GL', 'America/Thule', '-4.00', '-3.00', '-4.00', NULL, NULL),
(173, 'GM', 'Africa/Banjul', '0.00', '0.00', '0.00', NULL, NULL),
(174, 'GN', 'Africa/Conakry', '0.00', '0.00', '0.00', NULL, NULL),
(175, 'GP', 'America/Guadeloupe', '-4.00', '-4.00', '-4.00', NULL, NULL),
(176, 'GQ', 'Africa/Malabo', '1.00', '1.00', '1.00', NULL, NULL),
(177, 'GR', 'Europe/Athens', '2.00', '3.00', '2.00', NULL, NULL),
(178, 'GS', 'Atlantic/South_Georgia', '-2.00', '-2.00', '-2.00', NULL, NULL),
(179, 'GT', 'America/Guatemala', '-6.00', '-6.00', '-6.00', NULL, NULL),
(180, 'GU', 'Pacific/Guam', '10.00', '10.00', '10.00', NULL, NULL),
(181, 'GW', 'Africa/Bissau', '0.00', '0.00', '0.00', NULL, NULL),
(182, 'GY', 'America/Guyana', '-4.00', '-4.00', '-4.00', NULL, NULL),
(183, 'HK', 'Asia/Hong_Kong', '8.00', '8.00', '8.00', NULL, NULL),
(184, 'HN', 'America/Tegucigalpa', '-6.00', '-6.00', '-6.00', NULL, NULL),
(185, 'HR', 'Europe/Zagreb', '1.00', '2.00', '1.00', NULL, NULL),
(186, 'HT', 'America/Port-au-Prince', '-5.00', '-4.00', '-5.00', NULL, NULL),
(187, 'HU', 'Europe/Budapest', '1.00', '2.00', '1.00', NULL, NULL),
(188, 'ID', 'Asia/Jakarta', '7.00', '7.00', '7.00', NULL, NULL),
(189, 'ID', 'Asia/Jayapura', '9.00', '9.00', '9.00', NULL, NULL),
(190, 'ID', 'Asia/Makassar', '8.00', '8.00', '8.00', NULL, NULL),
(191, 'ID', 'Asia/Pontianak', '7.00', '7.00', '7.00', NULL, NULL),
(192, 'IE', 'Europe/Dublin', '0.00', '1.00', '0.00', NULL, NULL),
(193, 'IL', 'Asia/Jerusalem', '2.00', '3.00', '2.00', NULL, NULL),
(194, 'IM', 'Europe/Isle_of_Man', '0.00', '1.00', '0.00', NULL, NULL),
(195, 'IN', 'Asia/Kolkata', '5.50', '5.50', '5.50', NULL, NULL),
(196, 'IO', 'Indian/Chagos', '6.00', '6.00', '6.00', NULL, NULL),
(197, 'IQ', 'Asia/Baghdad', '3.00', '3.00', '3.00', NULL, NULL),
(198, 'IR', 'Asia/Tehran', '3.50', '4.50', '3.50', NULL, NULL),
(199, 'IS', 'Atlantic/Reykjavik', '0.00', '0.00', '0.00', NULL, NULL),
(200, 'IT', 'Europe/Rome', '1.00', '2.00', '1.00', NULL, NULL),
(201, 'JE', 'Europe/Jersey', '0.00', '1.00', '0.00', NULL, NULL),
(202, 'JM', 'America/Jamaica', '-5.00', '-5.00', '-5.00', NULL, NULL),
(203, 'JO', 'Asia/Amman', '2.00', '3.00', '2.00', NULL, NULL),
(204, 'JP', 'Asia/Tokyo', '9.00', '9.00', '9.00', NULL, NULL),
(205, 'KE', 'Africa/Nairobi', '3.00', '3.00', '3.00', NULL, NULL),
(206, 'KG', 'Asia/Bishkek', '6.00', '6.00', '6.00', NULL, NULL),
(207, 'KH', 'Asia/Phnom_Penh', '7.00', '7.00', '7.00', NULL, NULL),
(208, 'KI', 'Pacific/Enderbury', '13.00', '13.00', '13.00', NULL, NULL),
(209, 'KI', 'Pacific/Kiritimati', '14.00', '14.00', '14.00', NULL, NULL),
(210, 'KI', 'Pacific/Tarawa', '12.00', '12.00', '12.00', NULL, NULL),
(211, 'KM', 'Indian/Comoro', '3.00', '3.00', '3.00', NULL, NULL),
(212, 'KN', 'America/St_Kitts', '-4.00', '-4.00', '-4.00', NULL, NULL),
(213, 'KP', 'Asia/Pyongyang', '9.00', '9.00', '9.00', NULL, NULL),
(214, 'KR', 'Asia/Seoul', '9.00', '9.00', '9.00', NULL, NULL),
(215, 'KW', 'Asia/Kuwait', '3.00', '3.00', '3.00', NULL, NULL),
(216, 'KY', 'America/Cayman', '-5.00', '-5.00', '-5.00', NULL, NULL),
(217, 'KZ', 'Asia/Almaty', '6.00', '6.00', '6.00', NULL, NULL),
(218, 'KZ', 'Asia/Aqtau', '5.00', '5.00', '5.00', NULL, NULL),
(219, 'KZ', 'Asia/Aqtobe', '5.00', '5.00', '5.00', NULL, NULL),
(220, 'KZ', 'Asia/Oral', '5.00', '5.00', '5.00', NULL, NULL),
(221, 'KZ', 'Asia/Qyzylorda', '6.00', '6.00', '6.00', NULL, NULL),
(222, 'LA', 'Asia/Vientiane', '7.00', '7.00', '7.00', NULL, NULL),
(223, 'LB', 'Asia/Beirut', '2.00', '3.00', '2.00', NULL, NULL),
(224, 'LC', 'America/St_Lucia', '-4.00', '-4.00', '-4.00', NULL, NULL),
(225, 'LI', 'Europe/Vaduz', '1.00', '2.00', '1.00', NULL, NULL),
(226, 'LK', 'Asia/Colombo', '5.50', '5.50', '5.50', NULL, NULL),
(227, 'LR', 'Africa/Monrovia', '0.00', '0.00', '0.00', NULL, NULL),
(228, 'LS', 'Africa/Maseru', '2.00', '2.00', '2.00', NULL, NULL),
(229, 'LT', 'Europe/Vilnius', '2.00', '3.00', '2.00', NULL, NULL),
(230, 'LU', 'Europe/Luxembourg', '1.00', '2.00', '1.00', NULL, NULL),
(231, 'LV', 'Europe/Riga', '2.00', '3.00', '2.00', NULL, NULL),
(232, 'LY', 'Africa/Tripoli', '2.00', '2.00', '2.00', NULL, NULL),
(233, 'MA', 'Africa/Casablanca', '0.00', '0.00', '0.00', NULL, NULL),
(234, 'MC', 'Europe/Monaco', '1.00', '2.00', '1.00', NULL, NULL),
(235, 'MD', 'Europe/Chisinau', '2.00', '3.00', '2.00', NULL, NULL),
(236, 'ME', 'Europe/Podgorica', '1.00', '2.00', '1.00', NULL, NULL),
(237, 'MF', 'America/Marigot', '-4.00', '-4.00', '-4.00', NULL, NULL),
(238, 'MG', 'Indian/Antananarivo', '3.00', '3.00', '3.00', NULL, NULL),
(239, 'MH', 'Pacific/Kwajalein', '12.00', '12.00', '12.00', NULL, NULL),
(240, 'MH', 'Pacific/Majuro', '12.00', '12.00', '12.00', NULL, NULL),
(241, 'MK', 'Europe/Skopje', '1.00', '2.00', '1.00', NULL, NULL),
(242, 'ML', 'Africa/Bamako', '0.00', '0.00', '0.00', NULL, NULL),
(243, 'MM', 'Asia/Rangoon', '6.50', '6.50', '6.50', NULL, NULL),
(244, 'MN', 'Asia/Choibalsan', '8.00', '8.00', '8.00', NULL, NULL),
(245, 'MN', 'Asia/Hovd', '7.00', '7.00', '7.00', NULL, NULL),
(246, 'MN', 'Asia/Ulaanbaatar', '8.00', '8.00', '8.00', NULL, NULL),
(247, 'MO', 'Asia/Macau', '8.00', '8.00', '8.00', NULL, NULL),
(248, 'MP', 'Pacific/Saipan', '10.00', '10.00', '10.00', NULL, NULL),
(249, 'MQ', 'America/Martinique', '-4.00', '-4.00', '-4.00', NULL, NULL),
(250, 'MR', 'Africa/Nouakchott', '0.00', '0.00', '0.00', NULL, NULL),
(251, 'MS', 'America/Montserrat', '-4.00', '-4.00', '-4.00', NULL, NULL),
(252, 'MT', 'Europe/Malta', '1.00', '2.00', '1.00', NULL, NULL),
(253, 'MU', 'Indian/Mauritius', '4.00', '4.00', '4.00', NULL, NULL),
(254, 'MV', 'Indian/Maldives', '5.00', '5.00', '5.00', NULL, NULL),
(255, 'MW', 'Africa/Blantyre', '2.00', '2.00', '2.00', NULL, NULL),
(256, 'MX', 'America/Bahia_Banderas', '-6.00', '-5.00', '-6.00', NULL, NULL),
(257, 'MX', 'America/Cancun', '-6.00', '-5.00', '-6.00', NULL, NULL),
(258, 'MX', 'America/Chihuahua', '-7.00', '-6.00', '-7.00', NULL, NULL),
(259, 'MX', 'America/Hermosillo', '-7.00', '-7.00', '-7.00', NULL, NULL),
(260, 'MX', 'America/Matamoros', '-6.00', '-5.00', '-6.00', NULL, NULL),
(261, 'MX', 'America/Mazatlan', '-7.00', '-6.00', '-7.00', NULL, NULL),
(262, 'MX', 'America/Merida', '-6.00', '-5.00', '-6.00', NULL, NULL),
(263, 'MX', 'America/Mexico_City', '-6.00', '-5.00', '-6.00', NULL, NULL),
(264, 'MX', 'America/Monterrey', '-6.00', '-5.00', '-6.00', NULL, NULL),
(265, 'MX', 'America/Ojinaga', '-7.00', '-6.00', '-7.00', NULL, NULL),
(266, 'MX', 'America/Santa_Isabel', '-8.00', '-7.00', '-8.00', NULL, NULL),
(267, 'MX', 'America/Tijuana', '-8.00', '-7.00', '-8.00', NULL, NULL),
(268, 'MY', 'Asia/Kuala_Lumpur', '8.00', '8.00', '8.00', NULL, NULL),
(269, 'MY', 'Asia/Kuching', '8.00', '8.00', '8.00', NULL, NULL),
(270, 'MZ', 'Africa/Maputo', '2.00', '2.00', '2.00', NULL, NULL),
(271, 'NA', 'Africa/Windhoek', '2.00', '1.00', '1.00', NULL, NULL),
(272, 'NC', 'Pacific/Noumea', '11.00', '11.00', '11.00', NULL, NULL),
(273, 'NE', 'Africa/Niamey', '1.00', '1.00', '1.00', NULL, NULL),
(274, 'NF', 'Pacific/Norfolk', '11.50', '11.50', '11.50', NULL, NULL),
(275, 'NG', 'Africa/Lagos', '1.00', '1.00', '1.00', NULL, NULL),
(276, 'NI', 'America/Managua', '-6.00', '-6.00', '-6.00', NULL, NULL),
(277, 'NL', 'Europe/Amsterdam', '1.00', '2.00', '1.00', NULL, NULL),
(278, 'NO', 'Europe/Oslo', '1.00', '2.00', '1.00', NULL, NULL),
(279, 'NP', 'Asia/Kathmandu', '5.75', '5.75', '5.75', NULL, NULL),
(280, 'NR', 'Pacific/Nauru', '12.00', '12.00', '12.00', NULL, NULL),
(281, 'NU', 'Pacific/Niue', '-11.00', '-11.00', '-11.00', NULL, NULL),
(282, 'NZ', 'Pacific/Auckland', '13.00', '12.00', '12.00', NULL, NULL),
(283, 'NZ', 'Pacific/Chatham', '13.75', '12.75', '12.75', NULL, NULL),
(284, 'OM', 'Asia/Muscat', '4.00', '4.00', '4.00', NULL, NULL),
(285, 'PA', 'America/Panama', '-5.00', '-5.00', '-5.00', NULL, NULL),
(286, 'PE', 'America/Lima', '-5.00', '-5.00', '-5.00', NULL, NULL),
(287, 'PF', 'Pacific/Gambier', '-9.00', '-9.00', '-9.00', NULL, NULL),
(288, 'PF', 'Pacific/Marquesas', '-9.50', '-9.50', '-9.50', NULL, NULL),
(289, 'PF', 'Pacific/Tahiti', '-10.00', '-10.00', '-10.00', NULL, NULL),
(290, 'PG', 'Pacific/Port_Moresby', '10.00', '10.00', '10.00', NULL, NULL),
(291, 'PH', 'Asia/Manila', '8.00', '8.00', '8.00', NULL, NULL),
(292, 'PK', 'Asia/Karachi', '5.00', '5.00', '5.00', NULL, NULL),
(293, 'PL', 'Europe/Warsaw', '1.00', '2.00', '1.00', NULL, NULL),
(294, 'PM', 'America/Miquelon', '-3.00', '-2.00', '-3.00', NULL, NULL),
(295, 'PN', 'Pacific/Pitcairn', '-8.00', '-8.00', '-8.00', NULL, NULL),
(296, 'PR', 'America/Puerto_Rico', '-4.00', '-4.00', '-4.00', NULL, NULL),
(297, 'PS', 'Asia/Gaza', '2.00', '3.00', '2.00', NULL, NULL),
(298, 'PS', 'Asia/Hebron', '2.00', '3.00', '2.00', NULL, NULL),
(299, 'PT', 'Atlantic/Azores', '-1.00', '0.00', '-1.00', NULL, NULL),
(300, 'PT', 'Atlantic/Madeira', '0.00', '1.00', '0.00', NULL, NULL),
(301, 'PT', 'Europe/Lisbon', '0.00', '1.00', '0.00', NULL, NULL),
(302, 'PW', 'Pacific/Palau', '9.00', '9.00', '9.00', NULL, NULL),
(303, 'PY', 'America/Asuncion', '-3.00', '-4.00', '-4.00', NULL, NULL),
(304, 'QA', 'Asia/Qatar', '3.00', '3.00', '3.00', NULL, NULL),
(305, 'RE', 'Indian/Reunion', '4.00', '4.00', '4.00', NULL, NULL),
(306, 'RO', 'Europe/Bucharest', '2.00', '3.00', '2.00', NULL, NULL),
(307, 'RS', 'Europe/Belgrade', '1.00', '2.00', '1.00', NULL, NULL),
(308, 'RU', 'Asia/Anadyr', '12.00', '12.00', '12.00', NULL, NULL),
(309, 'RU', 'Asia/Irkutsk', '9.00', '9.00', '9.00', NULL, NULL),
(310, 'RU', 'Asia/Kamchatka', '12.00', '12.00', '12.00', NULL, NULL),
(311, 'RU', 'Asia/Khandyga', '10.00', '10.00', '10.00', NULL, NULL),
(312, 'RU', 'Asia/Krasnoyarsk', '8.00', '8.00', '8.00', NULL, NULL),
(313, 'RU', 'Asia/Magadan', '12.00', '12.00', '12.00', NULL, NULL),
(314, 'RU', 'Asia/Novokuznetsk', '7.00', '7.00', '7.00', NULL, NULL),
(315, 'RU', 'Asia/Novosibirsk', '7.00', '7.00', '7.00', NULL, NULL),
(316, 'RU', 'Asia/Omsk', '7.00', '7.00', '7.00', NULL, NULL),
(317, 'RU', 'Asia/Sakhalin', '11.00', '11.00', '11.00', NULL, NULL),
(318, 'RU', 'Asia/Ust-Nera', '11.00', '11.00', '11.00', NULL, NULL),
(319, 'RU', 'Asia/Vladivostok', '11.00', '11.00', '11.00', NULL, NULL),
(320, 'RU', 'Asia/Yakutsk', '10.00', '10.00', '10.00', NULL, NULL),
(321, 'RU', 'Asia/Yekaterinburg', '6.00', '6.00', '6.00', NULL, NULL),
(322, 'RU', 'Europe/Kaliningrad', '3.00', '3.00', '3.00', NULL, NULL),
(323, 'RU', 'Europe/Moscow', '4.00', '4.00', '4.00', NULL, NULL),
(324, 'RU', 'Europe/Samara', '4.00', '4.00', '4.00', NULL, NULL),
(325, 'RU', 'Europe/Volgograd', '4.00', '4.00', '4.00', NULL, NULL),
(326, 'RW', 'Africa/Kigali', '2.00', '2.00', '2.00', NULL, NULL),
(327, 'SA', 'Asia/Riyadh', '3.00', '3.00', '3.00', NULL, NULL),
(328, 'SB', 'Pacific/Guadalcanal', '11.00', '11.00', '11.00', NULL, NULL),
(329, 'SC', 'Indian/Mahe', '4.00', '4.00', '4.00', NULL, NULL),
(330, 'SD', 'Africa/Khartoum', '3.00', '3.00', '3.00', NULL, NULL),
(331, 'SE', 'Europe/Stockholm', '1.00', '2.00', '1.00', NULL, NULL),
(332, 'SG', 'Asia/Singapore', '8.00', '8.00', '8.00', NULL, NULL),
(333, 'SH', 'Atlantic/St_Helena', '0.00', '0.00', '0.00', NULL, NULL),
(334, 'SI', 'Europe/Ljubljana', '1.00', '2.00', '1.00', NULL, NULL),
(335, 'SJ', 'Arctic/Longyearbyen', '1.00', '2.00', '1.00', NULL, NULL),
(336, 'SK', 'Europe/Bratislava', '1.00', '2.00', '1.00', NULL, NULL),
(337, 'SL', 'Africa/Freetown', '0.00', '0.00', '0.00', NULL, NULL),
(338, 'SM', 'Europe/San_Marino', '1.00', '2.00', '1.00', NULL, NULL),
(339, 'SN', 'Africa/Dakar', '0.00', '0.00', '0.00', NULL, NULL),
(340, 'SO', 'Africa/Mogadishu', '3.00', '3.00', '3.00', NULL, NULL),
(341, 'SR', 'America/Paramaribo', '-3.00', '-3.00', '-3.00', NULL, NULL),
(342, 'SS', 'Africa/Juba', '3.00', '3.00', '3.00', NULL, NULL),
(343, 'ST', 'Africa/Sao_Tome', '0.00', '0.00', '0.00', NULL, NULL),
(344, 'SV', 'America/El_Salvador', '-6.00', '-6.00', '-6.00', NULL, NULL),
(345, 'SX', 'America/Lower_Princes', '-4.00', '-4.00', '-4.00', NULL, NULL),
(346, 'SY', 'Asia/Damascus', '2.00', '3.00', '2.00', NULL, NULL),
(347, 'SZ', 'Africa/Mbabane', '2.00', '2.00', '2.00', NULL, NULL),
(348, 'TC', 'America/Grand_Turk', '-5.00', '-4.00', '-5.00', NULL, NULL),
(349, 'TD', 'Africa/Ndjamena', '1.00', '1.00', '1.00', NULL, NULL),
(350, 'TF', 'Indian/Kerguelen', '5.00', '5.00', '5.00', NULL, NULL),
(351, 'TG', 'Africa/Lome', '0.00', '0.00', '0.00', NULL, NULL),
(352, 'TH', 'Asia/Bangkok', '7.00', '7.00', '7.00', NULL, NULL),
(353, 'TJ', 'Asia/Dushanbe', '5.00', '5.00', '5.00', NULL, NULL),
(354, 'TK', 'Pacific/Fakaofo', '13.00', '13.00', '13.00', NULL, NULL),
(355, 'TL', 'Asia/Dili', '9.00', '9.00', '9.00', NULL, NULL),
(356, 'TM', 'Asia/Ashgabat', '5.00', '5.00', '5.00', NULL, NULL),
(357, 'TN', 'Africa/Tunis', '1.00', '1.00', '1.00', NULL, NULL),
(358, 'TO', 'Pacific/Tongatapu', '13.00', '13.00', '13.00', NULL, NULL),
(359, 'TR', 'Europe/Istanbul', '2.00', '3.00', '2.00', NULL, NULL),
(360, 'TT', 'America/Port_of_Spain', '-4.00', '-4.00', '-4.00', NULL, NULL),
(361, 'TV', 'Pacific/Funafuti', '12.00', '12.00', '12.00', NULL, NULL),
(362, 'TW', 'Asia/Taipei', '8.00', '8.00', '8.00', NULL, NULL),
(363, 'TZ', 'Africa/Dar_es_Salaam', '3.00', '3.00', '3.00', NULL, NULL),
(364, 'UA', 'Europe/Kiev', '2.00', '3.00', '2.00', NULL, NULL),
(365, 'UA', 'Europe/Simferopol', '2.00', '4.00', '4.00', NULL, NULL),
(366, 'UA', 'Europe/Uzhgorod', '2.00', '3.00', '2.00', NULL, NULL),
(367, 'UA', 'Europe/Zaporozhye', '2.00', '3.00', '2.00', NULL, NULL),
(368, 'UG', 'Africa/Kampala', '3.00', '3.00', '3.00', NULL, NULL),
(369, 'UM', 'Pacific/Johnston', '-10.00', '-10.00', '-10.00', NULL, NULL),
(370, 'UM', 'Pacific/Midway', '-11.00', '-11.00', '-11.00', NULL, NULL),
(371, 'UM', 'Pacific/Wake', '12.00', '12.00', '12.00', NULL, NULL),
(372, 'US', 'America/Adak', '-10.00', '-9.00', '-10.00', NULL, NULL),
(373, 'US', 'America/Anchorage', '-9.00', '-8.00', '-9.00', NULL, NULL),
(374, 'US', 'America/Boise', '-7.00', '-6.00', '-7.00', NULL, NULL),
(375, 'US', 'America/Chicago', '-6.00', '-5.00', '-6.00', NULL, NULL),
(376, 'US', 'America/Denver', '-7.00', '-6.00', '-7.00', NULL, NULL),
(377, 'US', 'America/Detroit', '-5.00', '-4.00', '-5.00', NULL, NULL),
(378, 'US', 'America/Indiana/Indianapolis', '-5.00', '-4.00', '-5.00', NULL, NULL),
(379, 'US', 'America/Indiana/Knox', '-6.00', '-5.00', '-6.00', NULL, NULL),
(380, 'US', 'America/Indiana/Marengo', '-5.00', '-4.00', '-5.00', NULL, NULL),
(381, 'US', 'America/Indiana/Petersburg', '-5.00', '-4.00', '-5.00', NULL, NULL),
(382, 'US', 'America/Indiana/Tell_City', '-6.00', '-5.00', '-6.00', NULL, NULL),
(383, 'US', 'America/Indiana/Vevay', '-5.00', '-4.00', '-5.00', NULL, NULL),
(384, 'US', 'America/Indiana/Vincennes', '-5.00', '-4.00', '-5.00', NULL, NULL),
(385, 'US', 'America/Indiana/Winamac', '-5.00', '-4.00', '-5.00', NULL, NULL),
(386, 'US', 'America/Juneau', '-9.00', '-8.00', '-9.00', NULL, NULL),
(387, 'US', 'America/Kentucky/Louisville', '-5.00', '-4.00', '-5.00', NULL, NULL),
(388, 'US', 'America/Kentucky/Monticello', '-5.00', '-4.00', '-5.00', NULL, NULL),
(389, 'US', 'America/Los_Angeles', '-8.00', '-7.00', '-8.00', NULL, NULL),
(390, 'US', 'America/Menominee', '-6.00', '-5.00', '-6.00', NULL, NULL),
(391, 'US', 'America/Metlakatla', '-8.00', '-8.00', '-8.00', NULL, NULL),
(392, 'US', 'America/New_York', '-5.00', '-4.00', '-5.00', NULL, NULL),
(393, 'US', 'America/Nome', '-9.00', '-8.00', '-9.00', NULL, NULL),
(394, 'US', 'America/North_Dakota/Beulah', '-6.00', '-5.00', '-6.00', NULL, NULL),
(395, 'US', 'America/North_Dakota/Center', '-6.00', '-5.00', '-6.00', NULL, NULL),
(396, 'US', 'America/North_Dakota/New_Salem', '-6.00', '-5.00', '-6.00', NULL, NULL),
(397, 'US', 'America/Phoenix', '-7.00', '-7.00', '-7.00', NULL, NULL),
(398, 'US', 'America/Shiprock', '-7.00', '-6.00', '-7.00', NULL, NULL),
(399, 'US', 'America/Sitka', '-9.00', '-8.00', '-9.00', NULL, NULL),
(400, 'US', 'America/Yakutat', '-9.00', '-8.00', '-9.00', NULL, NULL),
(401, 'US', 'Pacific/Honolulu', '-10.00', '-10.00', '-10.00', NULL, NULL),
(402, 'UY', 'America/Montevideo', '-2.00', '-3.00', '-3.00', NULL, NULL),
(403, 'UZ', 'Asia/Samarkand', '5.00', '5.00', '5.00', NULL, NULL),
(404, 'UZ', 'Asia/Tashkent', '5.00', '5.00', '5.00', NULL, NULL),
(405, 'VA', 'Europe/Vatican', '1.00', '2.00', '1.00', NULL, NULL),
(406, 'VC', 'America/St_Vincent', '-4.00', '-4.00', '-4.00', NULL, NULL),
(407, 'VE', 'America/Caracas', '-4.50', '-4.50', '-4.50', NULL, NULL),
(408, 'VG', 'America/Tortola', '-4.00', '-4.00', '-4.00', NULL, NULL),
(409, 'VI', 'America/St_Thomas', '-4.00', '-4.00', '-4.00', NULL, NULL),
(410, 'VN', 'Asia/Ho_Chi_Minh', '7.00', '7.00', '7.00', NULL, NULL),
(411, 'VU', 'Pacific/Efate', '11.00', '11.00', '11.00', NULL, NULL),
(412, 'WF', 'Pacific/Wallis', '12.00', '12.00', '12.00', NULL, NULL),
(413, 'WS', 'Pacific/Apia', '14.00', '13.00', '13.00', NULL, NULL),
(414, 'YE', 'Asia/Aden', '3.00', '3.00', '3.00', NULL, NULL),
(415, 'YT', 'Indian/Mayotte', '3.00', '3.00', '3.00', NULL, NULL),
(416, 'ZA', 'Africa/Johannesburg', '2.00', '2.00', '2.00', NULL, NULL),
(417, 'ZM', 'Africa/Lusaka', '2.00', '2.00', '2.00', NULL, NULL),
(418, 'ZW', 'Africa/Harare', '2.00', '2.00', '2.00', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `permissions` text COLLATE utf8mb4_unicode_ci,
  `first_name` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_name` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_type` enum('admin','staff','seller','customer','delivery_hero','walk_in') COLLATE utf8mb4_unicode_ci DEFAULT 'customer',
  `gender` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT 'male',
  `date_of_birth` date DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '0 inactive, 1 active',
  `is_user_banned` tinyint(4) NOT NULL DEFAULT '0' COMMENT '0 unban, 1 ban',
  `newsletter_enable` tinyint(4) NOT NULL DEFAULT '0' COMMENT '0 unable, 1 enable',
  `otp` int(11) DEFAULT NULL COMMENT 'used for reset password',
  `firebase_auth_id` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'this is for mobile app.',
  `is_password_set` tinyint(4) NOT NULL DEFAULT '1' COMMENT '0 for social login',
  `images` text COLLATE utf8mb4_unicode_ci,
  `socials` longtext COLLATE utf8mb4_unicode_ci COMMENT 'it will be array data',
  `last_login` timestamp NULL DEFAULT NULL,
  `last_ip` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_password_change` timestamp NULL DEFAULT NULL,
  `image_id` bigint(20) UNSIGNED DEFAULT NULL,
  `role_id` int(10) UNSIGNED DEFAULT NULL,
  `pickup_hub_id` bigint(20) UNSIGNED DEFAULT NULL,
  `balance` double DEFAULT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `phone`, `password`, `permissions`, `first_name`, `last_name`, `user_type`, `gender`, `date_of_birth`, `status`, `is_user_banned`, `newsletter_enable`, `otp`, `firebase_auth_id`, `is_password_set`, `images`, `socials`, `last_login`, `last_ip`, `last_password_change`, `image_id`, `role_id`, `pickup_hub_id`, `balance`, `is_deleted`, `created_at`, `updated_at`) VALUES
(1, 'admin@spagreen.net', NULL, '$2y$10$sdlyljdqrJGSp41McOaRCOFG2llvcYN4uZeaCVCHBZsQhqnWqIpDW', '[\"customer_create\",\"customer_read\",\"customer_update\",\"customer_delete\",\"customer_ban\",\"staff_create\",\"staff_read\",\"staff_update\",\"staff_delete\",\"staff_ban\",\"role_create\",\"role_read\",\"role_update\",\"role_delete\",\"seller_create\",\"seller_read\",\"seller_update\",\"seller_delete\",\"seller_verify\",\"seller_ban\",\"seller_payout_read\",\"seller_payout_accept\",\"seller_payout_reject\",\"seller_commission_read\",\"seller_commission_update\",\"language_create\",\"language_read\",\"language_update\",\"language_delete\",\"translation_message_update\",\"media_create\",\"media_read\",\"media_update\",\"media_delete\",\"media_download\",\"brand_create\",\"brand_read\",\"brand_update\",\"brand_delete\",\"color_create\",\"color_read\",\"color_update\",\"color_delete\",\"attribute_set_create\",\"attribute_set_read\",\"attribute_set_update\",\"attribute_set_delete\",\"attribute_value_create\",\"attribute_value_read\",\"attribute_value_update\",\"attribute_value_delete\",\"category_create\",\"category_read\",\"category_update\",\"category_delete\",\"product_create\",\"product_read\",\"product_update\",\"product_delete\",\"product_restore\",\"product_clone\",\"blog_create\",\"blog_read\",\"blog_update\",\"blog_delete\",\"blog_restore\",\"blog_category_create\",\"blog_category_read\",\"blog_category_update\",\"blog_category_delete\",\"support_create\",\"support_read\",\"support_update\",\"support_delete\",\"support_department_create\",\"support_department_read\",\"support_department_update\",\"support_department_delete\",\"order_create\",\"order_read\",\"order_update\",\"order_view\",\"order_delete\",\"order_invoice\",\"order_approve_offline_payment\",\"pickup_hub_create\",\"pickup_hub_read\",\"pickup_hub_update\",\"pickup_hub_delete\",\"recharge_request_read\",\"recharge_request_status_update\",\"general_setting_update\",\"preference_setting_update\",\"email_setting_update\",\"currency_setting_update\",\"vat_tax_setting_update\",\"storage_setting_update\",\"cache_update\",\"miscellaneous_setting_update\",\"admin_panel_setting_update\",\"facebook_service_update\",\"google_service_update\",\"pusher_notification_update\",\"otp_setting_read\",\"otp_setting_update\",\"sms_template_read\",\"sms_template_update\",\"payment_gateway_read\",\"payment_gateway_update\",\"theme_option_update\",\"header_content_update\",\"footer_content_update\",\"home_page_update\",\"website_seo_update\",\"website_popup_update\",\"custom_css_update\",\"custom_js_update\",\"gdpr_update\",\"page_read\",\"page_create\",\"page_update\",\"page_delete\",\"campaign_create\",\"campaign_read\",\"campaign_update\",\"campaign_delete\",\"campaign_request_read\",\"campaign_request_approved\",\"bulk_sms_read\",\"send_bulk_sms\",\"subscriber_read\",\"subscriber_delete\",\"campaign_product_create\",\"campaign_product_read\",\"campaign_product_update\",\"campaign_product_delete\",\"coupon_read\",\"coupon_create\",\"coupon_update\",\"coupon_delete\",\"shipping_configuration_read\",\"shipping_configuration_update\",\"country_read\",\"country_update\",\"state_read\",\"state_create\",\"state_update\",\"state_delete\",\"city_read\",\"city_create\",\"city_update\",\"city_delete\",\"admin_product_sale_read\",\"seller_product_sale_read\",\"product_stock_read\",\"product_wishlist_read\",\"user_searches_read\",\"commission_history_read\",\"wallet_recharge_history_read\",\"api_setting_update\",\"android_setting_update\",\"ios_setting_update\",\"app_config_update\",\"ads_config_update\",\"download_link_update\",\"mobile_app_intro_read\",\"mobile_app_intro_create\",\"mobile_app_intro_update\",\"mobile_app_intro_delete\",\"delivery_hero_read\",\"delivery_hero_create\",\"delivery_hero_update\",\"delivery_hero_delete\",\"delivery_hero_ban\",\"Delivery_hero_account_deposit\",\"delivery_hero_email_activation\",\"delivery_hero_commission_history\",\"delivery_hero_deposit_history\",\"delivery_hero_collection_history\",\"delivery_hero_cancel_request\",\"delivery_hero_configuration_read\",\"delivery_hero_configuration_update\",\"wholesale_product_read\",\"wholesale_product_create\",\"wholesale_product_update\",\"wholesale_product_delete\",\"wholesale_product_clone\",\"wholesale_product_restore\",\"wholesale_product_setting\",\"refund_read\",\"refund_approve\",\"refund_process\",\"refund_reject\",\"refund_setting_read\",\"refund_setting_update\",\"reward_configuration_read\",\"reward_configuration_update\",\"reward_setting_read\",\"reward_setting_create\",\"reward_setting_update\",\"user_reward_read\",\"user_reward_update\",\"offline_payment_read\",\"offline_payment_create\",\"offline_payment_update\",\"offline_payment_delete\",\"service_read\",\"service_create\",\"service_update\",\"service_delete\",\"slider_read\",\"slider_create\",\"slider_update\",\"slider_delete\",\"wallet_recharge_read\",\"wallet_recharge_update\",\"login_singup_read\",\"login_singup_update\",\"chat_messenger_read\",\"chat_messenger_update\",\"social_login_setting_update\",\"video_shopping_read\",\"video_shopping_create\",\"video_shopping_update\",\"video_shopping_delete\",\"pos_config_update\",\"pos_order\",\"api_key_create\",\"api_key_update\",\"api_key_delete\",\"api_key_read\",\"api_key_read_all\",\"state_import_create\",\"city_import_create\",\"firebase_read\",\"firebase_update\",\"addon_read\",\"addon_update\"]', 'Super', 'Admin', 'admin', 'male', NULL, 1, 0, 0, NULL, NULL, 1, '[]', '[]', '2022-09-10 09:36:18', NULL, NULL, NULL, NULL, NULL, 0, 0, '2022-04-06 00:07:38', '2022-10-11 09:08:35'),
(2, NULL, NULL, '$2y$10$4G7oN2kI8zJAx3WBlaDUoujmIahD8LisITdXchaOd2C4MbYzOAjqS', '[]', 'Walk-In', 'Customer', 'walk_in', 'male', NULL, 1, 0, 0, NULL, NULL, 1, '[]', '[]', NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, '2022-04-24 14:10:00', '2022-04-24 14:10:00');

-- --------------------------------------------------------

--
-- Table structure for table `user_socials`
--

CREATE TABLE `user_socials` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `vat_taxes`
--

CREATE TABLE `vat_taxes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `vat_tax` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `percentage` double(7,3) NOT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `video_shoppings`
--

CREATE TABLE `video_shoppings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `slug` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) NOT NULL DEFAULT '1',
  `thumbnail_id` bigint(20) DEFAULT NULL,
  `thumbnail` text COLLATE utf8mb4_unicode_ci,
  `style` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'style_1',
  `video_type` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `video_url` text COLLATE utf8mb4_unicode_ci,
  `is_live` tinyint(4) NOT NULL DEFAULT '0',
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `enable_related_product` tinyint(4) NOT NULL DEFAULT '1',
  `product_ids` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `total_viewed` bigint(20) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `video_shopping_languages`
--

CREATE TABLE `video_shopping_languages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `video_shopping_id` bigint(20) NOT NULL,
  `lang` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'our default locale for system en',
  `title` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_title` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meta_description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `wallets`
--

CREATE TABLE `wallets` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `order_id` bigint(20) UNSIGNED DEFAULT NULL,
  `amount` double DEFAULT NULL,
  `source` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'opening_balance, wallet_recharge,refunded_to_wallet',
  `type` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `payment_method` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `payment_details` text COLLATE utf8mb4_unicode_ci,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending' COMMENT 'pending, approved, rejected',
  `transaction_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `wishlists`
--

CREATE TABLE `wishlists` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `activations`
--
ALTER TABLE `activations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `addons`
--
ALTER TABLE `addons`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `addresses`
--
ALTER TABLE `addresses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `api_keys`
--
ALTER TABLE `api_keys`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `api_key_languages`
--
ALTER TABLE `api_key_languages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `app_intros`
--
ALTER TABLE `app_intros`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `app_intro_languages`
--
ALTER TABLE `app_intro_languages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `app_intro_languages_lang_index` (`lang`);

--
-- Indexes for table `attributes`
--
ALTER TABLE `attributes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `attribute_category`
--
ALTER TABLE `attribute_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `attribute_languages`
--
ALTER TABLE `attribute_languages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `attribute_languages_attribute_id_lang_index` (`attribute_id`,`lang`);

--
-- Indexes for table `attribute_values`
--
ALTER TABLE `attribute_values`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `banners`
--
ALTER TABLE `banners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `blogs_user_id_status_index` (`user_id`,`status`);

--
-- Indexes for table `blog_categories`
--
ALTER TABLE `blog_categories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `blog_categories_slug_status_index` (`slug`,`status`);

--
-- Indexes for table `blog_category_languages`
--
ALTER TABLE `blog_category_languages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `blog_category_languages_blog_category_id_lang_index` (`blog_category_id`,`lang`);

--
-- Indexes for table `blog_comments`
--
ALTER TABLE `blog_comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `blog_comments_user_id_foreign` (`user_id`),
  ADD KEY `blog_comments_blog_id_foreign` (`blog_id`);

--
-- Indexes for table `blog_comment_likes`
--
ALTER TABLE `blog_comment_likes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `blog_comment_likes_commentable_type_commentable_id_index` (`commentable_type`,`commentable_id`);

--
-- Indexes for table `blog_comment_replies`
--
ALTER TABLE `blog_comment_replies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `blog_comment_replies_user_id_foreign` (`user_id`),
  ADD KEY `blog_comment_replies_blog_comment_id_foreign` (`blog_comment_id`),
  ADD KEY `blog_comment_replies_parent_id_foreign` (`parent_id`);

--
-- Indexes for table `blog_languages`
--
ALTER TABLE `blog_languages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `blog_languages_blog_id_lang_index` (`blog_id`,`lang`);

--
-- Indexes for table `blog_views`
--
ALTER TABLE `blog_views`
  ADD PRIMARY KEY (`id`),
  ADD KEY `blog_views_user_id_foreign` (`user_id`),
  ADD KEY `blog_views_blog_id_foreign` (`blog_id`);

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`),
  ADD KEY `brands_slug_status_index` (`slug`,`status`);

--
-- Indexes for table `brand_languages`
--
ALTER TABLE `brand_languages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `brand_languages_lang_index` (`lang`),
  ADD KEY `brand_languages_brand_id_lang_title_index` (`brand_id`,`lang`,`title`);

--
-- Indexes for table `campaigns`
--
ALTER TABLE `campaigns`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `campaigns_slug_unique` (`slug`),
  ADD KEY `campaigns_slug_start_date_end_date_status_index` (`slug`,`start_date`,`end_date`,`status`);

--
-- Indexes for table `campaign_languages`
--
ALTER TABLE `campaign_languages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `campaign_languages_campaign_id_lang_title_index` (`campaign_id`,`lang`,`title`);

--
-- Indexes for table `campaign_products`
--
ALTER TABLE `campaign_products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `campaign_requests`
--
ALTER TABLE `campaign_requests`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categories_parent_id_slug_status_index` (`parent_id`,`slug`,`status`),
  ADD KEY `categories_is_featured_index` (`is_featured`),
  ADD KEY `categories_ordering_index` (`ordering`);

--
-- Indexes for table `category_languages`
--
ALTER TABLE `category_languages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_languages_category_id_lang_title_index` (`category_id`,`lang`,`title`);

--
-- Indexes for table `checkouts`
--
ALTER TABLE `checkouts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `colors`
--
ALTER TABLE `colors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `color_languages`
--
ALTER TABLE `color_languages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `color_languages_color_id_name_lang_index` (`color_id`,`name`,`lang`);

--
-- Indexes for table `commission_histories`
--
ALTER TABLE `commission_histories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `compare_products`
--
ALTER TABLE `compare_products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact_us`
--
ALTER TABLE `contact_us`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `coupons`
--
ALTER TABLE `coupons`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `coupon_languages`
--
ALTER TABLE `coupon_languages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `currencies`
--
ALTER TABLE `currencies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `delivery_heroes`
--
ALTER TABLE `delivery_heroes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `delivery_hero_accounts`
--
ALTER TABLE `delivery_hero_accounts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `delivery_histories`
--
ALTER TABLE `delivery_histories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `flag_icons`
--
ALTER TABLE `flag_icons`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `languages`
--
ALTER TABLE `languages`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `languages_locale_unique` (`locale`),
  ADD KEY `languages_name_index` (`name`);

--
-- Indexes for table `language_configs`
--
ALTER TABLE `language_configs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `log_activities`
--
ALTER TABLE `log_activities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ltm_translations`
--
ALTER TABLE `ltm_translations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `media`
--
ALTER TABLE `media`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `notifications_user_id_index` (`user_id`),
  ADD KEY `notifications_title_index` (`title`),
  ADD KEY `notifications_url_index` (`url`),
  ADD KEY `notifications_status_index` (`status`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_details`
--
ALTER TABLE `order_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pages_status_index` (`status`);

--
-- Indexes for table `page_languages`
--
ALTER TABLE `page_languages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `page_languages_page_id_lang_title_index` (`page_id`,`lang`,`title`);

--
-- Indexes for table `password_requests`
--
ALTER TABLE `password_requests`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payment_histories`
--
ALTER TABLE `payment_histories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payment_method`
--
ALTER TABLE `payment_method`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `persistences`
--
ALTER TABLE `persistences`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `persistences_code_unique` (`code`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `pickup_hubs`
--
ALTER TABLE `pickup_hubs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pickup_hub_languages`
--
ALTER TABLE `pickup_hub_languages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pickup_hub_languages_pickup_hub_id_index` (`pickup_hub_id`),
  ADD KEY `pickup_hub_languages_lang_index` (`lang`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_category_id_user_id_slug_index` (`category_id`,`user_id`,`slug`),
  ADD KEY `products_price_special_discount_special_discount_type_index` (`price`,`special_discount`,`special_discount_type`),
  ADD KEY `products_special_discount_start_special_discount_end_index` (`special_discount_start`,`special_discount_end`),
  ADD KEY `products_current_stock_minimum_order_quantity_status_index` (`current_stock`,`minimum_order_quantity`,`status`),
  ADD KEY `products_is_approved_index` (`is_approved`);

--
-- Indexes for table `product_languages`
--
ALTER TABLE `product_languages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_languages_product_id_index` (`product_id`),
  ADD KEY `product_languages_lang_index` (`lang`);

--
-- Indexes for table `product_stocks`
--
ALTER TABLE `product_stocks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_vat_taxes`
--
ALTER TABLE `product_vat_taxes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_views`
--
ALTER TABLE `product_views`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_views_user_id_foreign` (`user_id`),
  ADD KEY `product_views_product_id_foreign` (`product_id`);

--
-- Indexes for table `refunds`
--
ALTER TABLE `refunds`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `registration_requests`
--
ALTER TABLE `registration_requests`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reminders`
--
ALTER TABLE `reminders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reviews_user_id_foreign` (`user_id`),
  ADD KEY `reviews_product_id_foreign` (`product_id`),
  ADD KEY `reviews_status_index` (`status`);

--
-- Indexes for table `review_likes`
--
ALTER TABLE `review_likes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `review_likes_user_id_foreign` (`user_id`),
  ADD KEY `review_likes_reviewable_type_reviewable_id_index` (`reviewable_type`,`reviewable_id`);

--
-- Indexes for table `review_replies`
--
ALTER TABLE `review_replies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `review_replies_user_id_foreign` (`user_id`),
  ADD KEY `review_replies_review_id_foreign` (`review_id`),
  ADD KEY `review_replies_parent_id_foreign` (`parent_id`);

--
-- Indexes for table `rewards`
--
ALTER TABLE `rewards`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reward_details`
--
ALTER TABLE `reward_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_slug_unique` (`slug`);

--
-- Indexes for table `role_users`
--
ALTER TABLE `role_users`
  ADD PRIMARY KEY (`user_id`,`role_id`);

--
-- Indexes for table `searches`
--
ALTER TABLE `searches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sellers`
--
ALTER TABLE `sellers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sellers_user_id_index` (`user_id`),
  ADD KEY `sellers_shop_name_index` (`shop_name`),
  ADD KEY `sellers_slug_index` (`slug`);

--
-- Indexes for table `seller_payouts`
--
ALTER TABLE `seller_payouts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `seller_profile_user`
--
ALTER TABLE `seller_profile_user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`),
  ADD KEY `services_position_index` (`position`);

--
-- Indexes for table `service_languages`
--
ALTER TABLE `service_languages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `service_languages_service_id_lang_title_index` (`service_id`,`lang`,`title`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `settings_lang_index` (`lang`),
  ADD KEY `settings_title_index` (`title`);

--
-- Indexes for table `sliders`
--
ALTER TABLE `sliders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sliders_order_btn_link_status_index` (`order`,`status`),
  ADD KEY `sliders_action_type_index` (`action_type`);

--
-- Indexes for table `states`
--
ALTER TABLE `states`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subscribers`
--
ALTER TABLE `subscribers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `subscribers_email_index` (`email`);

--
-- Indexes for table `supports`
--
ALTER TABLE `supports`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `support_departments`
--
ALTER TABLE `support_departments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `support_department_languages`
--
ALTER TABLE `support_department_languages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `support_department_languages_lang_index` (`lang`);

--
-- Indexes for table `theme_options`
--
ALTER TABLE `theme_options`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `throttle`
--
ALTER TABLE `throttle`
  ADD PRIMARY KEY (`id`),
  ADD KEY `throttle_user_id_index` (`user_id`);

--
-- Indexes for table `ticket_replays`
--
ALTER TABLE `ticket_replays`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `timezones`
--
ALTER TABLE `timezones`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `users_email_phone_index` (`email`,`phone`);

--
-- Indexes for table `user_socials`
--
ALTER TABLE `user_socials`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_socials_user_id_foreign` (`user_id`);

--
-- Indexes for table `vat_taxes`
--
ALTER TABLE `vat_taxes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `video_shoppings`
--
ALTER TABLE `video_shoppings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `video_shoppings_slug_index` (`slug`);

--
-- Indexes for table `video_shopping_languages`
--
ALTER TABLE `video_shopping_languages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `video_shopping_languages_video_shopping_id_index` (`video_shopping_id`),
  ADD KEY `video_shopping_languages_lang_index` (`lang`);

--
-- Indexes for table `wallets`
--
ALTER TABLE `wallets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wishlists`
--
ALTER TABLE `wishlists`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `activations`
--
ALTER TABLE `activations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `addons`
--
ALTER TABLE `addons`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `addresses`
--
ALTER TABLE `addresses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `api_keys`
--
ALTER TABLE `api_keys`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `api_key_languages`
--
ALTER TABLE `api_key_languages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `app_intros`
--
ALTER TABLE `app_intros`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `app_intro_languages`
--
ALTER TABLE `app_intro_languages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `attributes`
--
ALTER TABLE `attributes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `attribute_category`
--
ALTER TABLE `attribute_category`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `attribute_languages`
--
ALTER TABLE `attribute_languages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `attribute_values`
--
ALTER TABLE `attribute_values`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `banners`
--
ALTER TABLE `banners`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `blog_categories`
--
ALTER TABLE `blog_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `blog_category_languages`
--
ALTER TABLE `blog_category_languages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `blog_comments`
--
ALTER TABLE `blog_comments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `blog_comment_likes`
--
ALTER TABLE `blog_comment_likes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `blog_comment_replies`
--
ALTER TABLE `blog_comment_replies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `blog_languages`
--
ALTER TABLE `blog_languages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `blog_views`
--
ALTER TABLE `blog_views`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `brand_languages`
--
ALTER TABLE `brand_languages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `campaigns`
--
ALTER TABLE `campaigns`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `campaign_languages`
--
ALTER TABLE `campaign_languages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `campaign_products`
--
ALTER TABLE `campaign_products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `campaign_requests`
--
ALTER TABLE `campaign_requests`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `category_languages`
--
ALTER TABLE `category_languages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `checkouts`
--
ALTER TABLE `checkouts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cities`
--
ALTER TABLE `cities`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `colors`
--
ALTER TABLE `colors`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `color_languages`
--
ALTER TABLE `color_languages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `commission_histories`
--
ALTER TABLE `commission_histories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `compare_products`
--
ALTER TABLE `compare_products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `contact_us`
--
ALTER TABLE `contact_us`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `countries`
--
ALTER TABLE `countries`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=251;

--
-- AUTO_INCREMENT for table `coupons`
--
ALTER TABLE `coupons`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `coupon_languages`
--
ALTER TABLE `coupon_languages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `currencies`
--
ALTER TABLE `currencies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `delivery_heroes`
--
ALTER TABLE `delivery_heroes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `delivery_hero_accounts`
--
ALTER TABLE `delivery_hero_accounts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `delivery_histories`
--
ALTER TABLE `delivery_histories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `flag_icons`
--
ALTER TABLE `flag_icons`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=240;

--
-- AUTO_INCREMENT for table `languages`
--
ALTER TABLE `languages`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `language_configs`
--
ALTER TABLE `language_configs`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `log_activities`
--
ALTER TABLE `log_activities`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `ltm_translations`
--
ALTER TABLE `ltm_translations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `media`
--
ALTER TABLE `media`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=111;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order_details`
--
ALTER TABLE `order_details`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pages`
--
ALTER TABLE `pages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `page_languages`
--
ALTER TABLE `page_languages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `password_requests`
--
ALTER TABLE `password_requests`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `payment_histories`
--
ALTER TABLE `payment_histories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `payment_method`
--
ALTER TABLE `payment_method`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `persistences`
--
ALTER TABLE `persistences`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pickup_hubs`
--
ALTER TABLE `pickup_hubs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pickup_hub_languages`
--
ALTER TABLE `pickup_hub_languages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `product_languages`
--
ALTER TABLE `product_languages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `product_stocks`
--
ALTER TABLE `product_stocks`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `product_vat_taxes`
--
ALTER TABLE `product_vat_taxes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product_views`
--
ALTER TABLE `product_views`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `refunds`
--
ALTER TABLE `refunds`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `registration_requests`
--
ALTER TABLE `registration_requests`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `reminders`
--
ALTER TABLE `reminders`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `review_likes`
--
ALTER TABLE `review_likes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `review_replies`
--
ALTER TABLE `review_replies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rewards`
--
ALTER TABLE `rewards`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `reward_details`
--
ALTER TABLE `reward_details`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `searches`
--
ALTER TABLE `searches`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sellers`
--
ALTER TABLE `sellers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `seller_payouts`
--
ALTER TABLE `seller_payouts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `seller_profile_user`
--
ALTER TABLE `seller_profile_user`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `service_languages`
--
ALTER TABLE `service_languages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=254;

--
-- AUTO_INCREMENT for table `sliders`
--
ALTER TABLE `sliders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `states`
--
ALTER TABLE `states`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `subscribers`
--
ALTER TABLE `subscribers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `supports`
--
ALTER TABLE `supports`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `support_departments`
--
ALTER TABLE `support_departments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `support_department_languages`
--
ALTER TABLE `support_department_languages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `theme_options`
--
ALTER TABLE `theme_options`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `throttle`
--
ALTER TABLE `throttle`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ticket_replays`
--
ALTER TABLE `ticket_replays`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `timezones`
--
ALTER TABLE `timezones`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=419;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user_socials`
--
ALTER TABLE `user_socials`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vat_taxes`
--
ALTER TABLE `vat_taxes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `video_shoppings`
--
ALTER TABLE `video_shoppings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `video_shopping_languages`
--
ALTER TABLE `video_shopping_languages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `wallets`
--
ALTER TABLE `wallets`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `wishlists`
--
ALTER TABLE `wishlists`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `blog_comments`
--
ALTER TABLE `blog_comments`
  ADD CONSTRAINT `blog_comments_blog_id_foreign` FOREIGN KEY (`blog_id`) REFERENCES `blogs` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `blog_comments_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `blog_comment_replies`
--
ALTER TABLE `blog_comment_replies`
  ADD CONSTRAINT `blog_comment_replies_blog_comment_id_foreign` FOREIGN KEY (`blog_comment_id`) REFERENCES `blog_comments` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `blog_comment_replies_parent_id_foreign` FOREIGN KEY (`parent_id`) REFERENCES `blog_comment_replies` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `blog_comment_replies_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `blog_views`
--
ALTER TABLE `blog_views`
  ADD CONSTRAINT `blog_views_blog_id_foreign` FOREIGN KEY (`blog_id`) REFERENCES `blogs` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `blog_views_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `product_views`
--
ALTER TABLE `product_views`
  ADD CONSTRAINT `product_views_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `product_views_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `reviews_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `review_likes`
--
ALTER TABLE `review_likes`
  ADD CONSTRAINT `review_likes_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `review_replies`
--
ALTER TABLE `review_replies`
  ADD CONSTRAINT `review_replies_parent_id_foreign` FOREIGN KEY (`parent_id`) REFERENCES `review_replies` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `review_replies_review_id_foreign` FOREIGN KEY (`review_id`) REFERENCES `reviews` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `review_replies_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `service_languages`
--
ALTER TABLE `service_languages`
  ADD CONSTRAINT `service_languages_service_id_foreign` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `user_socials`
--
ALTER TABLE `user_socials`
  ADD CONSTRAINT `user_socials_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

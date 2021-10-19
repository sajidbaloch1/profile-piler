-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.7.31 - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for facebook_db
CREATE DATABASE IF NOT EXISTS `facebook_db` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `facebook_db`;

-- Dumping structure for table facebook_db.keywords
CREATE TABLE IF NOT EXISTS `keywords` (
  `id` bigint(50) unsigned NOT NULL AUTO_INCREMENT,
  `Keyword` varchar(100) NOT NULL,
  `Source` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Keyword` (`Keyword`)
) ENGINE=MyISAM DEFAULT CHARSET=utf16;

-- Data exporting was unselected.

-- Dumping structure for table facebook_db.keyword_crawl_jobs
CREATE TABLE IF NOT EXISTS `keyword_crawl_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `KeywordID` bigint(20) unsigned DEFAULT NULL,
  `Keyword` varchar(100) CHARACTER SET utf32 DEFAULT NULL,
  `StartAt` int(10) unsigned DEFAULT NULL,
  `CrawledAt` timestamp NULL DEFAULT NULL,
  `HttpErrorCode` smallint(6) DEFAULT NULL,
  `Error` text,
  PRIMARY KEY (`id`),
  KEY `KeywordID` (`KeywordID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table facebook_db.links
CREATE TABLE IF NOT EXISTS `links` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `RelativeURL` varchar(500) NOT NULL,
  `Title` varchar(500) CHARACTER SET utf16 DEFAULT NULL,
  `BreadCrumb` varchar(500) CHARACTER SET utf16 DEFAULT NULL,
  `Description` varchar(500) CHARACTER SET utf16 DEFAULT NULL,
  `Ratings` varchar(500) DEFAULT NULL,
  `DiscoveredAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `CrawledAt` timestamp NULL DEFAULT NULL,
  `HttpErrorCode` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `RelativeURL` (`RelativeURL`)
) ENGINE=MyISAM AUTO_INCREMENT=1774464 DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table facebook_db.pages
CREATE TABLE IF NOT EXISTS `pages` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) DEFAULT NULL,
  `Username` varchar(200) NOT NULL,
  `Category` varchar(255) DEFAULT NULL,
  `Description` varchar(10000) DEFAULT NULL,
  `Location` varchar(255) DEFAULT NULL,
  `ProfilePic` varchar(255) DEFAULT NULL,
  `LikesCount` bigint(20) unsigned DEFAULT NULL,
  `FollowersCount` bigint(20) unsigned DEFAULT NULL,
  `CheckinsCount` bigint(20) unsigned DEFAULT NULL,
  `IsVerified` bit(1) DEFAULT NULL,
  `Rating` float unsigned DEFAULT NULL,
  `RatingCount` bigint(20) unsigned DEFAULT NULL,
  `TwitterURL` varchar(255) DEFAULT NULL,
  `YoutubeURL` varchar(255) DEFAULT NULL,
  `InstagramURL` varchar(255) DEFAULT NULL,
  `TumblrURL` varchar(255) DEFAULT NULL,
  `TiktokURL` varchar(255) DEFAULT NULL,
  `FlickrURL` varchar(255) DEFAULT NULL,
  `DiscoveredAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `CrawledAt` timestamp NULL DEFAULT NULL,
  `HttpErrorCode` smallint(6) DEFAULT NULL,
  `AboutPageCrawledAt` timestamp NULL DEFAULT NULL,
  `AboutPageErrorCode` smallint(6) DEFAULT NULL,
  `Recrawl` smallint(1) DEFAULT NULL,
  `SocialEntityProcessedCode` enum('UNPROCESSED','PROCESSED','ERRORED') DEFAULT NULL,
  `SocialEntityId` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Username` (`Username`),
  KEY `SocialEntityId` (`SocialEntityId`),
  KEY `SocialEntityProcessedCode` (`SocialEntityProcessedCode`)
) ENGINE=MyISAM AUTO_INCREMENT=7504848 DEFAULT CHARSET=utf32 COMMENT='Facebook pages';

-- Data exporting was unselected.

-- Dumping structure for table facebook_db.stats
CREATE TABLE IF NOT EXISTS `stats` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `DateTime` timestamp NULL DEFAULT NULL,
  `StatsJson` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=utf16;

-- Data exporting was unselected.


-- Dumping database structure for facebook_db_test
CREATE DATABASE IF NOT EXISTS `facebook_db_test` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `facebook_db_test`;

-- Dumping structure for table facebook_db_test.keywords
CREATE TABLE IF NOT EXISTS `keywords` (
  `id` bigint(50) unsigned NOT NULL AUTO_INCREMENT,
  `Keyword` varchar(100) NOT NULL,
  `Source` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Keyword` (`Keyword`)
) ENGINE=MyISAM DEFAULT CHARSET=utf16;

-- Data exporting was unselected.

-- Dumping structure for table facebook_db_test.keyword_crawl_jobs
CREATE TABLE IF NOT EXISTS `keyword_crawl_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `KeywordID` bigint(20) unsigned DEFAULT NULL,
  `Keyword` varchar(100) CHARACTER SET utf32 DEFAULT NULL,
  `StartAt` int(10) unsigned DEFAULT NULL,
  `CrawledAt` timestamp NULL DEFAULT NULL,
  `HttpErrorCode` smallint(6) DEFAULT NULL,
  `Error` text,
  PRIMARY KEY (`id`),
  KEY `KeywordID` (`KeywordID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table facebook_db_test.links
CREATE TABLE IF NOT EXISTS `links` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `RelativeURL` varchar(500) NOT NULL,
  `Title` varchar(500) CHARACTER SET utf16 DEFAULT NULL,
  `BreadCrumb` varchar(500) CHARACTER SET utf16 DEFAULT NULL,
  `Description` varchar(500) CHARACTER SET utf16 DEFAULT NULL,
  `Ratings` varchar(500) DEFAULT NULL,
  `DiscoveredAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `CrawledAt` timestamp NULL DEFAULT NULL,
  `HttpErrorCode` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `RelativeURL` (`RelativeURL`)
) ENGINE=MyISAM AUTO_INCREMENT=1774464 DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table facebook_db_test.pages
CREATE TABLE IF NOT EXISTS `pages` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) DEFAULT NULL,
  `Username` varchar(200) NOT NULL,
  `Category` varchar(255) DEFAULT NULL,
  `Description` varchar(10000) DEFAULT NULL,
  `Location` varchar(255) DEFAULT NULL,
  `ProfilePic` varchar(255) DEFAULT NULL,
  `LikesCount` bigint(20) unsigned DEFAULT NULL,
  `FollowersCount` bigint(20) unsigned DEFAULT NULL,
  `CheckinsCount` bigint(20) unsigned DEFAULT NULL,
  `IsVerified` bit(1) DEFAULT NULL,
  `Rating` float unsigned DEFAULT NULL,
  `RatingCount` bigint(20) unsigned DEFAULT NULL,
  `TwitterURL` varchar(255) DEFAULT NULL,
  `YoutubeURL` varchar(255) DEFAULT NULL,
  `InstagramURL` varchar(255) DEFAULT NULL,
  `TumblrURL` varchar(255) DEFAULT NULL,
  `TiktokURL` varchar(255) DEFAULT NULL,
  `FlickrURL` varchar(255) DEFAULT NULL,
  `DiscoveredAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `CrawledAt` timestamp NULL DEFAULT NULL,
  `HttpErrorCode` smallint(6) DEFAULT NULL,
  `AboutPageCrawledAt` timestamp NULL DEFAULT NULL,
  `AboutPageErrorCode` smallint(6) DEFAULT NULL,
  `Recrawl` smallint(1) DEFAULT NULL,
  `SocialEntityProcessedCode` enum('UNPROCESSED','PROCESSED','ERRORED') DEFAULT NULL,
  `SocialEntityId` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Username` (`Username`),
  KEY `SocialEntityId` (`SocialEntityId`),
  KEY `SocialEntityProcessedCode` (`SocialEntityProcessedCode`)
) ENGINE=MyISAM AUTO_INCREMENT=7504941 DEFAULT CHARSET=utf32 COMMENT='Facebook pages';

-- Data exporting was unselected.

-- Dumping structure for table facebook_db_test.stats
CREATE TABLE IF NOT EXISTS `stats` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `DateTime` timestamp NULL DEFAULT NULL,
  `StatsJson` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=utf16;

-- Data exporting was unselected.


-- Dumping database structure for flickr
CREATE DATABASE IF NOT EXISTS `flickr` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `flickr`;

-- Dumping structure for table flickr.api_store
CREATE TABLE IF NOT EXISTS `api_store` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `Key` varchar(255) DEFAULT NULL,
  `CrawledAt` date DEFAULT NULL,
  `HttpErrorCode` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table flickr.hashtags
CREATE TABLE IF NOT EXISTS `hashtags` (
  `id` bigint(20) unsigned NOT NULL DEFAULT '0',
  `Hashtag` varchar(200) CHARACTER SET utf16 NOT NULL,
  `Source` enum('best-hashtags','instagram-directory','instagram-post','locations-db') CHARACTER SET utf16 DEFAULT NULL,
  `CrawledAt` timestamp NULL DEFAULT NULL,
  `HttpErrorCode` smallint(6) DEFAULT NULL,
  `FlickrPostCount` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Data exporting was unselected.

-- Dumping structure for table flickr.jobs
CREATE TABLE IF NOT EXISTS `jobs` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `Hashtag` varchar(50) NOT NULL,
  `PageNum` smallint(6) DEFAULT NULL,
  `CreatedAt` date DEFAULT NULL,
  `CrawledAt` date DEFAULT NULL,
  `HttpErrorCode` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table flickr.stats
CREATE TABLE IF NOT EXISTS `stats` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `DateTime` timestamp NULL DEFAULT NULL,
  `StatsJson` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1213 DEFAULT CHARSET=utf16;

-- Data exporting was unselected.

-- Dumping structure for table flickr.users
CREATE TABLE IF NOT EXISTS `users` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `UserName` varchar(50) CHARACTER SET utf16 DEFAULT NULL,
  `RealName` varchar(80) CHARACTER SET utf16 DEFAULT NULL,
  `FirstName` varchar(80) DEFAULT NULL,
  `LastName` varchar(80) DEFAULT NULL,
  `ProfileDescription` longtext CHARACTER SET utf16,
  `ProfileDescriptionExpanded` longtext CHARACTER SET utf16,
  `City` varchar(80) DEFAULT NULL,
  `Country` varchar(80) DEFAULT NULL,
  `Website` varchar(255) DEFAULT NULL,
  `DbID` bigint(20) DEFAULT NULL,
  `NsID` varchar(30) DEFAULT NULL,
  `PathAlias` varchar(50) DEFAULT NULL,
  `Friend` bigint(20) DEFAULT NULL,
  `Family` int(11) DEFAULT NULL,
  `IsPro` tinyint(4) DEFAULT NULL,
  `IsAdFree` tinyint(4) DEFAULT NULL,
  `IsDeleted` tinyint(4) DEFAULT NULL,
  `ProBadge` varchar(50) DEFAULT NULL,
  `PhotosCount` bigint(20) DEFAULT NULL,
  `PhotoViewsCount` bigint(20) DEFAULT NULL,
  `Followers` bigint(20) DEFAULT NULL,
  `Following` bigint(20) DEFAULT NULL,
  `Tags` int(11) DEFAULT NULL,
  `GeoTagged` int(11) DEFAULT NULL,
  `Groups` int(11) DEFAULT NULL,
  `Occupation` varchar(255) DEFAULT NULL,
  `HomeTown` varchar(255) DEFAULT NULL,
  `Favorites` int(11) DEFAULT NULL,
  `Image` varchar(250) DEFAULT NULL,
  `Facebook` varchar(250) DEFAULT NULL,
  `Twitter` varchar(250) DEFAULT NULL,
  `Tumbler` varchar(250) DEFAULT NULL,
  `Instagram` varchar(250) DEFAULT NULL,
  `Pinterest` varchar(250) DEFAULT NULL,
  `FacebookUrl` varchar(250) DEFAULT NULL,
  `TwitterUrl` varchar(250) DEFAULT NULL,
  `TumblerUrl` varchar(250) DEFAULT NULL,
  `InstagramUrl` varchar(250) DEFAULT NULL,
  `PinterestUrl` varchar(250) DEFAULT NULL,
  `JoinedDate` timestamp NULL DEFAULT NULL,
  `CrawledAt` timestamp NULL DEFAULT NULL,
  `HttpErrorCode` smallint(6) DEFAULT NULL,
  `ProfileCrawledAt` timestamp NULL DEFAULT NULL,
  `ProfileHttpErrorCode` smallint(6) DEFAULT NULL,
  `UpdatedAt` timestamp NULL DEFAULT NULL,
  `Recrawl` smallint(1) DEFAULT NULL,
  `SocialEntityProcessedCode` enum('UNPROCESSED','PROCESSED','ERRORED') DEFAULT NULL,
  `SocialEntityId` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `NsID` (`NsID`),
  KEY `ProfileCrawledAt` (`ProfileCrawledAt`),
  KEY `CrawledAt` (`CrawledAt`),
  KEY `UpdatedAt` (`UpdatedAt`),
  KEY `SocialEntityId` (`SocialEntityId`),
  KEY `SocialEntityProcessedCode` (`SocialEntityProcessedCode`)
) ENGINE=InnoDB AUTO_INCREMENT=2947 DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping database structure for flickr_test
CREATE DATABASE IF NOT EXISTS `flickr_test` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `flickr_test`;

-- Dumping structure for table flickr_test.api_store
CREATE TABLE IF NOT EXISTS `api_store` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `Key` varchar(255) DEFAULT NULL,
  `CrawledAt` date DEFAULT NULL,
  `HttpErrorCode` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table flickr_test.hashtags
CREATE TABLE IF NOT EXISTS `hashtags` (
  `id` bigint(20) unsigned NOT NULL DEFAULT '0',
  `Hashtag` varchar(200) CHARACTER SET utf16 NOT NULL,
  `Source` enum('best-hashtags','instagram-directory','instagram-post','locations-db') CHARACTER SET utf16 DEFAULT NULL,
  `CrawledAt` timestamp NULL DEFAULT NULL,
  `HttpErrorCode` smallint(6) DEFAULT NULL,
  `FlickrPostCount` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Data exporting was unselected.

-- Dumping structure for table flickr_test.jobs
CREATE TABLE IF NOT EXISTS `jobs` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `Hashtag` varchar(50) NOT NULL,
  `PageNum` smallint(6) DEFAULT NULL,
  `CreatedAt` date DEFAULT NULL,
  `CrawledAt` date DEFAULT NULL,
  `HttpErrorCode` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table flickr_test.stats
CREATE TABLE IF NOT EXISTS `stats` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `DateTime` timestamp NULL DEFAULT NULL,
  `StatsJson` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1213 DEFAULT CHARSET=utf16;

-- Data exporting was unselected.

-- Dumping structure for table flickr_test.users
CREATE TABLE IF NOT EXISTS `users` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `UserName` varchar(50) CHARACTER SET utf16 DEFAULT NULL,
  `RealName` varchar(80) CHARACTER SET utf16 DEFAULT NULL,
  `FirstName` varchar(80) DEFAULT NULL,
  `LastName` varchar(80) DEFAULT NULL,
  `ProfileDescription` longtext CHARACTER SET utf16,
  `ProfileDescriptionExpanded` longtext CHARACTER SET utf16,
  `City` varchar(80) DEFAULT NULL,
  `Country` varchar(80) DEFAULT NULL,
  `Website` varchar(255) DEFAULT NULL,
  `DbID` bigint(20) DEFAULT NULL,
  `NsID` varchar(30) DEFAULT NULL,
  `PathAlias` varchar(50) DEFAULT NULL,
  `Friend` bigint(20) DEFAULT NULL,
  `Family` int(11) DEFAULT NULL,
  `IsPro` tinyint(4) DEFAULT NULL,
  `IsAdFree` tinyint(4) DEFAULT NULL,
  `IsDeleted` tinyint(4) DEFAULT NULL,
  `ProBadge` varchar(50) DEFAULT NULL,
  `PhotosCount` bigint(20) DEFAULT NULL,
  `PhotoViewsCount` bigint(20) DEFAULT NULL,
  `Followers` bigint(20) DEFAULT NULL,
  `Following` bigint(20) DEFAULT NULL,
  `Tags` int(11) DEFAULT NULL,
  `GeoTagged` int(11) DEFAULT NULL,
  `Groups` int(11) DEFAULT NULL,
  `Occupation` varchar(255) DEFAULT NULL,
  `HomeTown` varchar(255) DEFAULT NULL,
  `Favorites` int(11) DEFAULT NULL,
  `Image` varchar(250) DEFAULT NULL,
  `Facebook` varchar(250) DEFAULT NULL,
  `Twitter` varchar(250) DEFAULT NULL,
  `Tumbler` varchar(250) DEFAULT NULL,
  `Instagram` varchar(250) DEFAULT NULL,
  `Pinterest` varchar(250) DEFAULT NULL,
  `FacebookUrl` varchar(250) DEFAULT NULL,
  `TwitterUrl` varchar(250) DEFAULT NULL,
  `TumblerUrl` varchar(250) DEFAULT NULL,
  `InstagramUrl` varchar(250) DEFAULT NULL,
  `PinterestUrl` varchar(250) DEFAULT NULL,
  `JoinedDate` timestamp NULL DEFAULT NULL,
  `CrawledAt` timestamp NULL DEFAULT NULL,
  `HttpErrorCode` smallint(6) DEFAULT NULL,
  `ProfileCrawledAt` timestamp NULL DEFAULT NULL,
  `ProfileHttpErrorCode` smallint(6) DEFAULT NULL,
  `UpdatedAt` timestamp NULL DEFAULT NULL,
  `Recrawl` smallint(1) DEFAULT NULL,
  `SocialEntityProcessedCode` enum('UNPROCESSED','PROCESSED','ERRORED') DEFAULT NULL,
  `SocialEntityId` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `NsID` (`NsID`),
  KEY `ProfileCrawledAt` (`ProfileCrawledAt`),
  KEY `CrawledAt` (`CrawledAt`),
  KEY `UpdatedAt` (`UpdatedAt`),
  KEY `SocialEntityId` (`SocialEntityId`),
  KEY `SocialEntityProcessedCode` (`SocialEntityProcessedCode`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping database structure for influencer_db
CREATE DATABASE IF NOT EXISTS `influencer_db` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `influencer_db`;

-- Dumping structure for table influencer_db.hashtags
CREATE TABLE IF NOT EXISTS `hashtags` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `Hashtag` varchar(200) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `Source` enum('best-hashtags','instagram-directory','instagram-post','locations-db') DEFAULT NULL,
  `InstagramPostCount` bigint(20) unsigned DEFAULT NULL,
  `InstagramHttpErrorCode` smallint(6) DEFAULT '0',
  `InstagramScannedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Identity` (`Hashtag`)
) ENGINE=InnoDB AUTO_INCREMENT=1632282 DEFAULT CHARSET=latin1 CHECKSUM=1 COMMENT='new table for hastags';

-- Data exporting was unselected.

-- Dumping structure for table influencer_db.hashtags_cleaned
CREATE TABLE IF NOT EXISTS `hashtags_cleaned` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `Hashtag` varchar(200) NOT NULL,
  `Source` enum('best-hashtags','instagram-directory','instagram-post','locations-db') DEFAULT NULL,
  `InstagramPostCount` bigint(20) unsigned DEFAULT NULL,
  `InstagramHttpErrorCode` smallint(6) DEFAULT NULL,
  `InstagramScannedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Identity` (`Hashtag`)
) ENGINE=InnoDB AUTO_INCREMENT=88001 DEFAULT CHARSET=utf16 CHECKSUM=1 COMMENT='new table for hastags';

-- Data exporting was unselected.

-- Dumping structure for table influencer_db.hashtags_old
CREATE TABLE IF NOT EXISTS `hashtags_old` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `Hashtag` varchar(500) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `Source` varchar(30) DEFAULT NULL,
  `InstagramPostCount` bigint(20) unsigned DEFAULT NULL,
  `InstagramHttpErrorCode` bit(1) DEFAULT b'0',
  `InstagramScannedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Hashtag` (`Hashtag`)
) ENGINE=InnoDB AUTO_INCREMENT=11624928 DEFAULT CHARSET=latin1 CHECKSUM=1 COMMENT='database of hastags';

-- Data exporting was unselected.

-- Dumping structure for table influencer_db.hashtag_groups
CREATE TABLE IF NOT EXISTS `hashtag_groups` (
  `id` bigint(50) NOT NULL AUTO_INCREMENT,
  `Group` varchar(2000) NOT NULL,
  `GroupedIds` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=75665 DEFAULT CHARSET=utf16le;

-- Data exporting was unselected.

-- Dumping structure for table influencer_db.hashtag_groups_subset
CREATE TABLE IF NOT EXISTS `hashtag_groups_subset` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Group` varchar(2000) CHARACTER SET utf16 DEFAULT NULL,
  `GroupedIds` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=400001 DEFAULT CHARSET=utf8mb4;

-- Data exporting was unselected.

-- Dumping structure for table influencer_db.insta_posts
CREATE TABLE IF NOT EXISTS `insta_posts` (
  `Id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `ShortCode` varchar(50) NOT NULL,
  `CreatedAt` timestamp NOT NULL,
  `ProcessedAt` timestamp NULL DEFAULT NULL,
  `CrawlFailed` bit(1) DEFAULT b'0',
  `HttpErrorCode` smallint(6) DEFAULT NULL,
  `Example` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `ShortCode` (`ShortCode`),
  KEY `Example` (`Example`)
) ENGINE=MyISAM AUTO_INCREMENT=313647 DEFAULT CHARSET=latin1 COMMENT='this table holds the post short_code from instagram until processed by the post reader bot';

-- Data exporting was unselected.

-- Dumping structure for table influencer_db.profiles
CREATE TABLE IF NOT EXISTS `profiles` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `Username` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `FollowerCount` bigint(20) unsigned DEFAULT NULL,
  `FollowingCount` bigint(20) unsigned DEFAULT NULL,
  `PostCount` bigint(20) unsigned DEFAULT NULL,
  `ConnectedFacebookPage` varchar(500) DEFAULT NULL,
  `BusinessCategoryName` varchar(250) DEFAULT NULL,
  `RefID` varchar(100) DEFAULT NULL,
  `Bio` varchar(5000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `FullName` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ProfilePic` varchar(5000) DEFAULT NULL,
  `IsPrivate` bit(1) DEFAULT NULL,
  `IsJoinedRecently` bit(1) DEFAULT NULL,
  `IsBusinessAccount` bit(1) DEFAULT NULL,
  `IsVerified` bit(1) DEFAULT NULL,
  `hasChannel` bit(1) DEFAULT NULL,
  `ExternalURL` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `DiscovedAt` timestamp NULL DEFAULT NULL,
  `CrawledAt` timestamp NULL DEFAULT NULL,
  `CrawlFailed` bit(1) DEFAULT b'0',
  `HttpErrorCode` smallint(5) unsigned DEFAULT NULL,
  `Recrawl` smallint(1) DEFAULT NULL,
  `SocialEntityProcessedCode` enum('UNPROCESSED','PROCESSED','ERRORED') DEFAULT NULL,
  `SocialEntityId` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Username` (`Username`),
  KEY `Recrawl` (`Recrawl`),
  KEY `SocialEntityId` (`SocialEntityId`),
  KEY `SocialEntityProcessedCode` (`SocialEntityProcessedCode`)
) ENGINE=InnoDB AUTO_INCREMENT=14138684 DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table influencer_db.stats
CREATE TABLE IF NOT EXISTS `stats` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `DateTime` timestamp NULL DEFAULT NULL,
  `StatsJson` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf16;

-- Data exporting was unselected.

-- Dumping structure for table influencer_db.worldcities
CREATE TABLE IF NOT EXISTS `worldcities` (
  `CityID` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `city` varchar(250) DEFAULT NULL,
  `city_ascii` varchar(250) DEFAULT NULL,
  `lat` double DEFAULT NULL,
  `lng` double DEFAULT NULL,
  `country` text,
  `iso2` text,
  `iso3` text,
  `admin` text,
  `admin_code` text,
  `admin_type` text,
  `capital` varchar(200) DEFAULT NULL,
  `density` double DEFAULT NULL,
  `population` bigint(20) unsigned DEFAULT NULL,
  `population_proper` bigint(20) unsigned DEFAULT NULL,
  `id` int(11) DEFAULT NULL,
  PRIMARY KEY (`CityID`),
  KEY `population` (`population`),
  KEY `density` (`density`),
  KEY `capital` (`capital`),
  KEY `city_ascii` (`city_ascii`)
) ENGINE=MyISAM AUTO_INCREMENT=3958418 DEFAULT CHARSET=utf16;

-- Data exporting was unselected.


-- Dumping database structure for influencer_db_test
CREATE DATABASE IF NOT EXISTS `influencer_db_test` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `influencer_db_test`;

-- Dumping structure for table influencer_db_test.hashtags
CREATE TABLE IF NOT EXISTS `hashtags` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `Hashtag` varchar(200) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `Source` enum('best-hashtags','instagram-directory','instagram-post','locations-db') DEFAULT NULL,
  `InstagramPostCount` bigint(20) unsigned DEFAULT NULL,
  `InstagramHttpErrorCode` smallint(6) DEFAULT '0',
  `InstagramScannedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Identity` (`Hashtag`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 CHECKSUM=1 COMMENT='new table for hastags';

-- Data exporting was unselected.

-- Dumping structure for table influencer_db_test.hashtags_cleaned
CREATE TABLE IF NOT EXISTS `hashtags_cleaned` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `Hashtag` varchar(200) NOT NULL,
  `Source` enum('best-hashtags','instagram-directory','instagram-post','locations-db') DEFAULT NULL,
  `InstagramPostCount` bigint(20) unsigned DEFAULT NULL,
  `InstagramHttpErrorCode` smallint(6) DEFAULT NULL,
  `InstagramScannedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Identity` (`Hashtag`)
) ENGINE=InnoDB DEFAULT CHARSET=utf16 CHECKSUM=1 COMMENT='new table for hastags';

-- Data exporting was unselected.

-- Dumping structure for table influencer_db_test.hashtags_old
CREATE TABLE IF NOT EXISTS `hashtags_old` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `Hashtag` varchar(500) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `Source` varchar(30) DEFAULT NULL,
  `InstagramPostCount` bigint(20) unsigned DEFAULT NULL,
  `InstagramHttpErrorCode` bit(1) DEFAULT b'0',
  `InstagramScannedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Hashtag` (`Hashtag`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 CHECKSUM=1 COMMENT='database of hastags';

-- Data exporting was unselected.

-- Dumping structure for table influencer_db_test.hashtag_groups
CREATE TABLE IF NOT EXISTS `hashtag_groups` (
  `id` bigint(50) NOT NULL AUTO_INCREMENT,
  `Group` varchar(2000) NOT NULL,
  `GroupedIds` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=75665 DEFAULT CHARSET=utf16le;

-- Data exporting was unselected.

-- Dumping structure for table influencer_db_test.insta_posts
CREATE TABLE IF NOT EXISTS `insta_posts` (
  `Id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `ShortCode` varchar(50) NOT NULL,
  `CreatedAt` timestamp NOT NULL,
  `ProcessedAt` timestamp NULL DEFAULT NULL,
  `CrawlFailed` bit(1) DEFAULT b'0',
  `HttpErrorCode` smallint(6) DEFAULT NULL,
  `Example` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `ShortCode` (`ShortCode`),
  KEY `Example` (`Example`)
) ENGINE=MyISAM AUTO_INCREMENT=313647 DEFAULT CHARSET=latin1 COMMENT='this table holds the post short_code from instagram until processed by the post reader bot';

-- Data exporting was unselected.

-- Dumping structure for table influencer_db_test.profiles
CREATE TABLE IF NOT EXISTS `profiles` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `Username` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `FollowerCount` bigint(20) unsigned DEFAULT NULL,
  `FollowingCount` bigint(20) unsigned DEFAULT NULL,
  `PostCount` bigint(20) unsigned DEFAULT NULL,
  `ConnectedFacebookPage` varchar(500) DEFAULT NULL,
  `BusinessCategoryName` varchar(250) DEFAULT NULL,
  `RefID` varchar(100) DEFAULT NULL,
  `Bio` varchar(5000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `FullName` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ProfilePic` varchar(5000) DEFAULT NULL,
  `IsPrivate` bit(1) DEFAULT NULL,
  `IsJoinedRecently` bit(1) DEFAULT NULL,
  `IsBusinessAccount` bit(1) DEFAULT NULL,
  `IsVerified` bit(1) DEFAULT NULL,
  `hasChannel` bit(1) DEFAULT NULL,
  `ExternalURL` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `DiscovedAt` timestamp NULL DEFAULT NULL,
  `CrawledAt` timestamp NULL DEFAULT NULL,
  `CrawlFailed` bit(1) DEFAULT b'0',
  `HttpErrorCode` smallint(5) unsigned DEFAULT NULL,
  `Recrawl` smallint(1) DEFAULT NULL,
  `SocialEntityProcessedCode` enum('UNPROCESSED','PROCESSED','ERRORED') DEFAULT NULL,
  `SocialEntityId` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Username` (`Username`),
  KEY `Recrawl` (`Recrawl`),
  KEY `SocialEntityId` (`SocialEntityId`),
  KEY `SocialEntityProcessedCode` (`SocialEntityProcessedCode`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table influencer_db_test.stats
CREATE TABLE IF NOT EXISTS `stats` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `DateTime` timestamp NULL DEFAULT NULL,
  `StatsJson` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf16;

-- Data exporting was unselected.

-- Dumping structure for table influencer_db_test.worldcities
CREATE TABLE IF NOT EXISTS `worldcities` (
  `CityID` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `city` varchar(250) DEFAULT NULL,
  `city_ascii` varchar(250) DEFAULT NULL,
  `lat` double DEFAULT NULL,
  `lng` double DEFAULT NULL,
  `country` text,
  `iso2` text,
  `iso3` text,
  `admin` text,
  `admin_code` text,
  `admin_type` text,
  `capital` varchar(200) DEFAULT NULL,
  `density` double DEFAULT NULL,
  `population` bigint(20) unsigned DEFAULT NULL,
  `population_proper` bigint(20) unsigned DEFAULT NULL,
  `id` int(11) DEFAULT NULL,
  PRIMARY KEY (`CityID`),
  KEY `population` (`population`),
  KEY `density` (`density`),
  KEY `capital` (`capital`),
  KEY `city_ascii` (`city_ascii`)
) ENGINE=MyISAM AUTO_INCREMENT=3958418 DEFAULT CHARSET=utf16;

-- Data exporting was unselected.


-- Dumping database structure for pinterest
CREATE DATABASE IF NOT EXISTS `pinterest` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `pinterest`;

-- Dumping structure for table pinterest.jobs
CREATE TABLE IF NOT EXISTS `jobs` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `Keyword` varchar(50) NOT NULL,
  `BookmarkToken` varchar(2000) DEFAULT NULL,
  `CreatedAt` date DEFAULT NULL,
  `CrawledAt` date DEFAULT NULL,
  `HttpErrorCode` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table pinterest.keyword-terms
CREATE TABLE IF NOT EXISTS `keyword-terms` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `Keyword` varchar(50) DEFAULT NULL,
  `Term` varchar(80) DEFAULT NULL,
  `Display` varchar(50) DEFAULT NULL,
  `CrawledAt` timestamp NULL DEFAULT NULL,
  `HttpErrorCode` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table pinterest.keywords
CREATE TABLE IF NOT EXISTS `keywords` (
  `id` bigint(50) unsigned NOT NULL AUTO_INCREMENT,
  `Keyword` varchar(100) NOT NULL,
  `CrawledAt` timestamp NULL DEFAULT NULL,
  `HttpErrorCode` smallint(6) DEFAULT NULL,
  `Source` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Keyword` (`Keyword`)
) ENGINE=MyISAM AUTO_INCREMENT=8380900 DEFAULT CHARSET=utf16;

-- Data exporting was unselected.

-- Dumping structure for table pinterest.stats
CREATE TABLE IF NOT EXISTS `stats` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `DateTime` timestamp NULL DEFAULT NULL,
  `StatsJson` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1056 DEFAULT CHARSET=utf16;

-- Data exporting was unselected.

-- Dumping structure for table pinterest.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `PinterestID` bigint(20) DEFAULT NULL,
  `Website` varchar(250) DEFAULT NULL,
  `UserName` varchar(250) CHARACTER SET utf16 DEFAULT NULL,
  `FirstName` varchar(250) CHARACTER SET utf16 DEFAULT NULL,
  `LastName` varchar(250) CHARACTER SET utf16 DEFAULT NULL,
  `FullName` varchar(250) CHARACTER SET utf16 DEFAULT NULL,
  `ProfilePic` varchar(1000) DEFAULT NULL,
  `Location` varchar(500) DEFAULT NULL,
  `Type` varchar(50) DEFAULT NULL,
  `Followers` bigint(20) DEFAULT NULL,
  `Following` bigint(20) DEFAULT NULL,
  `PinCount` int(11) DEFAULT NULL,
  `ProfileViewedCount` bigint(20) DEFAULT NULL,
  `CommunitiesJoined` smallint(6) DEFAULT NULL,
  `BoardCount` smallint(6) DEFAULT NULL,
  `Description` text CHARACTER SET utf16,
  `CrawledAt` timestamp NULL DEFAULT NULL,
  `HttpErrorCode` smallint(6) DEFAULT NULL,
  `Recrawl` smallint(1) DEFAULT NULL,
  `SocialEntityProcessedCode` enum('UNPROCESSED','PROCESSED','ERRORED') DEFAULT NULL,
  `SocialEntityId` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `PinterestID` (`PinterestID`),
  KEY `CrawledAt` (`CrawledAt`),
  KEY `SocialEntityId` (`SocialEntityId`),
  KEY `SocialEntityProcessedCode` (`SocialEntityProcessedCode`)
) ENGINE=InnoDB AUTO_INCREMENT=5035 DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping database structure for pinterest_test
CREATE DATABASE IF NOT EXISTS `pinterest_test` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `pinterest_test`;

-- Dumping structure for table pinterest_test.jobs
CREATE TABLE IF NOT EXISTS `jobs` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `Keyword` varchar(50) NOT NULL,
  `BookmarkToken` varchar(2000) DEFAULT NULL,
  `CreatedAt` date DEFAULT NULL,
  `CrawledAt` date DEFAULT NULL,
  `HttpErrorCode` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table pinterest_test.keyword-terms
CREATE TABLE IF NOT EXISTS `keyword-terms` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `Keyword` varchar(50) DEFAULT NULL,
  `Term` varchar(80) DEFAULT NULL,
  `Display` varchar(50) DEFAULT NULL,
  `CrawledAt` timestamp NULL DEFAULT NULL,
  `HttpErrorCode` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table pinterest_test.keywords
CREATE TABLE IF NOT EXISTS `keywords` (
  `id` bigint(50) unsigned NOT NULL AUTO_INCREMENT,
  `Keyword` varchar(100) NOT NULL,
  `CrawledAt` timestamp NULL DEFAULT NULL,
  `HttpErrorCode` smallint(6) DEFAULT NULL,
  `Source` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Keyword` (`Keyword`)
) ENGINE=MyISAM AUTO_INCREMENT=8380900 DEFAULT CHARSET=utf16;

-- Data exporting was unselected.

-- Dumping structure for table pinterest_test.stats
CREATE TABLE IF NOT EXISTS `stats` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `DateTime` timestamp NULL DEFAULT NULL,
  `StatsJson` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1056 DEFAULT CHARSET=utf16;

-- Data exporting was unselected.

-- Dumping structure for table pinterest_test.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `PinterestID` bigint(20) DEFAULT NULL,
  `Website` varchar(250) DEFAULT NULL,
  `UserName` varchar(250) CHARACTER SET utf16 DEFAULT NULL,
  `FirstName` varchar(250) CHARACTER SET utf16 DEFAULT NULL,
  `LastName` varchar(250) CHARACTER SET utf16 DEFAULT NULL,
  `FullName` varchar(250) CHARACTER SET utf16 DEFAULT NULL,
  `ProfilePic` varchar(1000) DEFAULT NULL,
  `Location` varchar(500) DEFAULT NULL,
  `Type` varchar(50) DEFAULT NULL,
  `Followers` bigint(20) DEFAULT NULL,
  `Following` bigint(20) DEFAULT NULL,
  `PinCount` mediumint(9) DEFAULT NULL,
  `ProfileViewedCount` bigint(20) DEFAULT NULL,
  `CommunitiesJoined` smallint(6) DEFAULT NULL,
  `BoardCount` smallint(6) DEFAULT NULL,
  `Description` text CHARACTER SET utf16,
  `CrawledAt` timestamp NULL DEFAULT NULL,
  `HttpErrorCode` smallint(6) DEFAULT NULL,
  `Recrawl` smallint(1) DEFAULT NULL,
  `SocialEntityProcessedCode` enum('UNPROCESSED','PROCESSED','ERRORED') DEFAULT NULL,
  `SocialEntityId` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `PinterestID` (`PinterestID`),
  KEY `CrawledAt` (`CrawledAt`),
  KEY `SocialEntityId` (`SocialEntityId`),
  KEY `SocialEntityProcessedCode` (`SocialEntityProcessedCode`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping database structure for profile-piler-db
CREATE DATABASE IF NOT EXISTS `profile-piler-db` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `profile-piler-db`;

-- Dumping structure for table profile-piler-db.cache
CREATE TABLE IF NOT EXISTS `cache` (
  `key` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int(11) NOT NULL,
  UNIQUE KEY `cache_key_unique` (`key`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Data exporting was unselected.

-- Dumping structure for table profile-piler-db.curated_lists
CREATE TABLE IF NOT EXISTS `curated_lists` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sub_heading` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `seo_url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_active` bit(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Data exporting was unselected.

-- Dumping structure for table profile-piler-db.curated_list_profiles
CREATE TABLE IF NOT EXISTS `curated_list_profiles` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `curated_list_id` bigint(20) NOT NULL,
  `profile_id` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `profile_json` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Data exporting was unselected.

-- Dumping structure for table profile-piler-db.curated_list_tag
CREATE TABLE IF NOT EXISTS `curated_list_tag` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `curated_list_id` bigint(20) NOT NULL,
  `tag_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=68 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Data exporting was unselected.

-- Dumping structure for table profile-piler-db.elastic_search_logs
CREATE TABLE IF NOT EXISTS `elastic_search_logs` (
  `query` varchar(2000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `query_time_ms` int(11) NOT NULL,
  `timed_out` bit(1) NOT NULL,
  `failed_shareds_count` smallint(6) NOT NULL,
  `skipped_shared_count` smallint(6) NOT NULL,
  `total_hits` bigint(20) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY `elastic_search_logs_datetime_index` (`created_at`) USING BTREE
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Data exporting was unselected.

-- Dumping structure for table profile-piler-db.failed_jobs
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Data exporting was unselected.

-- Dumping structure for table profile-piler-db.jobs
CREATE TABLE IF NOT EXISTS `jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `queue` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint(3) unsigned NOT NULL,
  `reserved_at` int(10) unsigned DEFAULT NULL,
  `available_at` int(10) unsigned NOT NULL,
  `created_at` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_queue_index` (`queue`)
) ENGINE=MyISAM AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Data exporting was unselected.

-- Dumping structure for table profile-piler-db.keywords
CREATE TABLE IF NOT EXISTS `keywords` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `keyword` varchar(100) NOT NULL,
  `source` varchar(50) NOT NULL,
  `category` varchar(100) DEFAULT NULL,
  `resultsCount` int(10) unsigned DEFAULT NULL,
  `scannedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=24768 DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table profile-piler-db.migrations
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Data exporting was unselected.

-- Dumping structure for table profile-piler-db.password_resets
CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Data exporting was unselected.

-- Dumping structure for table profile-piler-db.recently_searched_profiles
CREATE TABLE IF NOT EXISTS `recently_searched_profiles` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `profileId` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `platform` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` date NOT NULL,
  `expiration` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `profileId` (`profileId`)
) ENGINE=MyISAM AUTO_INCREMENT=463 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Data exporting was unselected.

-- Dumping structure for table profile-piler-db.tags
CREATE TABLE IF NOT EXISTS `tags` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Data exporting was unselected.

-- Dumping structure for table profile-piler-db.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Data exporting was unselected.


-- Dumping database structure for profile-piler-db-test
CREATE DATABASE IF NOT EXISTS `profile-piler-db-test` /*!40100 DEFAULT CHARACTER SET utf16 */;
USE `profile-piler-db-test`;

-- Dumping structure for table profile-piler-db-test.keywords
CREATE TABLE IF NOT EXISTS `keywords` (
  `id` int(11) NOT NULL,
  `keyword` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `source` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `resultsCount` int(11) NOT NULL,
  `scannedAt` date NOT NULL,
  `expiration` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Data exporting was unselected.

-- Dumping structure for table profile-piler-db-test.migrations
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Data exporting was unselected.

-- Dumping structure for table profile-piler-db-test.recently_searched_profiles
CREATE TABLE IF NOT EXISTS `recently_searched_profiles` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `profileId` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `platform` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` date NOT NULL,
  `expiration` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Data exporting was unselected.


-- Dumping database structure for quora
CREATE DATABASE IF NOT EXISTS `quora` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `quora`;

-- Dumping structure for table quora.education_list
CREATE TABLE IF NOT EXISTS `education_list` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `text` varchar(500) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `education` (`text`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Data exporting was unselected.

-- Dumping structure for table quora.keywords
CREATE TABLE IF NOT EXISTS `keywords` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `Keyword` varchar(100) NOT NULL,
  `CrawledAt` timestamp NULL DEFAULT NULL,
  `HttpErrorCode` smallint(6) DEFAULT NULL,
  `Source` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Keyword` (`Keyword`)
) ENGINE=MyISAM AUTO_INCREMENT=8380900 DEFAULT CHARSET=utf16;

-- Data exporting was unselected.

-- Dumping structure for table quora.post-links
CREATE TABLE IF NOT EXISTS `post-links` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `Uri` varchar(500) DEFAULT NULL,
  `CrawledAt` date DEFAULT NULL,
  `HttpErrorCode` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Uri` (`Uri`),
  KEY `CrawledAt` (`CrawledAt`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table quora.stats
CREATE TABLE IF NOT EXISTS `stats` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `DateTime` timestamp NULL DEFAULT NULL,
  `StatsJson` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=580 DEFAULT CHARSET=utf16;

-- Data exporting was unselected.

-- Dumping structure for table quora.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `UserName` varchar(120) CHARACTER SET utf16 DEFAULT NULL,
  `Name` varchar(500) CHARACTER SET utf16 DEFAULT NULL,
  `ProfilePic` varchar(500) DEFAULT NULL,
  `Title` varchar(500) CHARACTER SET utf16 DEFAULT NULL,
  `Description` text CHARACTER SET utf16,
  `Credentials` varchar(250) DEFAULT NULL,
  `Work` varchar(250) DEFAULT NULL,
  `Location` varchar(250) DEFAULT NULL,
  `Answers` mediumint(9) DEFAULT NULL,
  `Questions` mediumint(9) DEFAULT NULL,
  `Shares` mediumint(9) DEFAULT NULL,
  `Posts` mediumint(9) DEFAULT NULL,
  `Followers` bigint(20) DEFAULT NULL,
  `Following` bigint(20) DEFAULT NULL,
  `CrawledAt` timestamp NULL DEFAULT NULL,
  `HttpErrorCode` smallint(6) DEFAULT NULL,
  `Recrawl` smallint(1) DEFAULT NULL,
  `SocialEntityProcessedCode` enum('UNPROCESSED','PROCESSED','ERRORED') DEFAULT NULL,
  `SocialEntityId` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Uri` (`UserName`),
  KEY `CrawledAt` (`CrawledAt`),
  KEY `SocialEntityId` (`SocialEntityId`),
  KEY `SocialEntityProcessedCode` (`SocialEntityProcessedCode`)
) ENGINE=InnoDB AUTO_INCREMENT=4078435 DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping database structure for quora_test
CREATE DATABASE IF NOT EXISTS `quora_test` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `quora_test`;

-- Dumping structure for table quora_test.education_list
CREATE TABLE IF NOT EXISTS `education_list` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `text` varchar(500) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `education` (`text`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Data exporting was unselected.

-- Dumping structure for table quora_test.keywords
CREATE TABLE IF NOT EXISTS `keywords` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `Keyword` varchar(100) NOT NULL,
  `CrawledAt` timestamp NULL DEFAULT NULL,
  `HttpErrorCode` smallint(6) DEFAULT NULL,
  `Source` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Keyword` (`Keyword`)
) ENGINE=MyISAM AUTO_INCREMENT=8380900 DEFAULT CHARSET=utf16;

-- Data exporting was unselected.

-- Dumping structure for table quora_test.post-links
CREATE TABLE IF NOT EXISTS `post-links` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `Uri` varchar(500) DEFAULT NULL,
  `CrawledAt` date DEFAULT NULL,
  `HttpErrorCode` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Uri` (`Uri`),
  KEY `CrawledAt` (`CrawledAt`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table quora_test.stats
CREATE TABLE IF NOT EXISTS `stats` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `DateTime` timestamp NULL DEFAULT NULL,
  `StatsJson` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=580 DEFAULT CHARSET=utf16;

-- Data exporting was unselected.

-- Dumping structure for table quora_test.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `UserName` varchar(120) CHARACTER SET utf16 DEFAULT NULL,
  `Name` varchar(500) CHARACTER SET utf16 DEFAULT NULL,
  `ProfilePic` varchar(500) DEFAULT NULL,
  `Title` varchar(500) CHARACTER SET utf16 DEFAULT NULL,
  `Description` text CHARACTER SET utf16,
  `Credentials` varchar(250) DEFAULT NULL,
  `Work` varchar(250) DEFAULT NULL,
  `Location` varchar(250) DEFAULT NULL,
  `Answers` mediumint(9) DEFAULT NULL,
  `Questions` mediumint(9) DEFAULT NULL,
  `Shares` mediumint(9) DEFAULT NULL,
  `Posts` mediumint(9) DEFAULT NULL,
  `Followers` bigint(20) DEFAULT NULL,
  `Following` bigint(20) DEFAULT NULL,
  `CrawledAt` timestamp NULL DEFAULT NULL,
  `HttpErrorCode` smallint(6) DEFAULT NULL,
  `Recrawl` smallint(1) DEFAULT NULL,
  `SocialEntityProcessedCode` enum('UNPROCESSED','PROCESSED','ERRORED') DEFAULT NULL,
  `SocialEntityId` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Uri` (`UserName`),
  KEY `CrawledAt` (`CrawledAt`),
  KEY `SocialEntityId` (`SocialEntityId`),
  KEY `SocialEntityProcessedCode` (`SocialEntityProcessedCode`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping database structure for social_entity_db
CREATE DATABASE IF NOT EXISTS `social_entity_db` /*!40100 DEFAULT CHARACTER SET utf16 */;
USE `social_entity_db`;

-- Dumping structure for table social_entity_db.social_entities
CREATE TABLE IF NOT EXISTS `social_entities` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `Name` varchar(500) DEFAULT NULL,
  `Adress` varchar(100) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL,
  `Location` varchar(100) DEFAULT NULL,
  `Country` varchar(100) DEFAULT NULL,
  `City` varchar(100) DEFAULT NULL,
  `Phone` varchar(100) DEFAULT NULL,
  `Description` text,
  `Photo` varchar(50) DEFAULT NULL,
  `Facebook` varchar(50) DEFAULT NULL COMMENT 'facebook username',
  `Youtube` varchar(50) DEFAULT NULL,
  `Instagram` varchar(50) DEFAULT NULL,
  `Twitter` varchar(50) DEFAULT NULL,
  `Flickr` varchar(50) DEFAULT NULL,
  `Pinterest` varchar(50) DEFAULT NULL,
  `Quora` varchar(50) DEFAULT NULL,
  `Tumblr` varchar(50) DEFAULT NULL,
  `LinkedIn` varchar(50) DEFAULT NULL,
  `Tiktok` varchar(50) DEFAULT NULL,
  `Vimeo` varchar(50) DEFAULT NULL,
  `Reddit` varchar(50) DEFAULT NULL,
  `Medium` varchar(50) DEFAULT NULL,
  `TravelMassive` varchar(50) DEFAULT NULL,
  `DailyMotion` varchar(50) DEFAULT NULL,
  `Website` varchar(100) DEFAULT NULL,
  `WebsiteScannedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Facebook` (`Facebook`),
  KEY `Youtube` (`Youtube`),
  KEY `Instagram` (`Instagram`),
  KEY `Twitter` (`Twitter`),
  KEY `TravelMassive` (`TravelMassive`),
  KEY `Pinterest` (`Pinterest`),
  KEY `Quora` (`Quora`),
  KEY `Tiktok` (`Tiktok`),
  KEY `Flickr` (`Flickr`),
  KEY `Vimeo` (`Vimeo`),
  KEY `Tumblr` (`Tumblr`),
  KEY `Reddit` (`Reddit`),
  KEY `Medium` (`Medium`),
  KEY `LinkedIn` (`LinkedIn`),
  KEY `DailyMotion` (`DailyMotion`),
  KEY `WebisteScannedAt` (`WebsiteScannedAt`) USING BTREE,
  KEY `Website` (`Website`)
) ENGINE=MyISAM AUTO_INCREMENT=1632 DEFAULT CHARSET=utf32;

-- Data exporting was unselected.

-- Dumping structure for table social_entity_db.stats
CREATE TABLE IF NOT EXISTS `stats` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `DateTime` timestamp NULL DEFAULT NULL,
  `StatsJson` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=582 DEFAULT CHARSET=utf16;

-- Data exporting was unselected.


-- Dumping database structure for social_entity_db_test
CREATE DATABASE IF NOT EXISTS `social_entity_db_test` /*!40100 DEFAULT CHARACTER SET utf16 */;
USE `social_entity_db_test`;

-- Dumping structure for table social_entity_db_test.social_entities
CREATE TABLE IF NOT EXISTS `social_entities` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `Name` varchar(500) DEFAULT NULL,
  `Adress` varchar(100) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL,
  `Location` varchar(100) DEFAULT NULL,
  `Country` varchar(100) DEFAULT NULL,
  `City` varchar(100) DEFAULT NULL,
  `Phone` varchar(100) DEFAULT NULL,
  `Description` text,
  `Photo` varchar(50) DEFAULT NULL,
  `Facebook` varchar(50) DEFAULT NULL COMMENT 'facebook username',
  `Youtube` varchar(50) DEFAULT NULL,
  `Instagram` varchar(50) DEFAULT NULL,
  `Twitter` varchar(50) DEFAULT NULL,
  `Flickr` varchar(50) DEFAULT NULL,
  `Pinterest` varchar(50) DEFAULT NULL,
  `Quora` varchar(50) DEFAULT NULL,
  `Tumblr` varchar(50) DEFAULT NULL,
  `LinkedIn` varchar(50) DEFAULT NULL,
  `Tiktok` varchar(50) DEFAULT NULL,
  `Vimeo` varchar(50) DEFAULT NULL,
  `Reddit` varchar(50) DEFAULT NULL,
  `Medium` varchar(50) DEFAULT NULL,
  `TravelMassive` varchar(50) DEFAULT NULL,
  `DailyMotion` varchar(50) DEFAULT NULL,
  `Website` varchar(100) DEFAULT NULL,
  `WebsiteScannedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Facebook` (`Facebook`),
  KEY `Youtube` (`Youtube`),
  KEY `Instagram` (`Instagram`),
  KEY `Twitter` (`Twitter`),
  KEY `TravelMassive` (`TravelMassive`),
  KEY `Pinterest` (`Pinterest`),
  KEY `Quora` (`Quora`),
  KEY `Tiktok` (`Tiktok`),
  KEY `Flickr` (`Flickr`),
  KEY `Vimeo` (`Vimeo`),
  KEY `Tumblr` (`Tumblr`),
  KEY `Reddit` (`Reddit`),
  KEY `Medium` (`Medium`),
  KEY `LinkedIn` (`LinkedIn`),
  KEY `DailyMotion` (`DailyMotion`),
  KEY `WebisteScannedAt` (`WebsiteScannedAt`) USING BTREE,
  KEY `Website` (`Website`)
) ENGINE=MyISAM AUTO_INCREMENT=2034 DEFAULT CHARSET=utf32;

-- Data exporting was unselected.

-- Dumping structure for table social_entity_db_test.stats
CREATE TABLE IF NOT EXISTS `stats` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `DateTime` timestamp NULL DEFAULT NULL,
  `StatsJson` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=582 DEFAULT CHARSET=utf16;

-- Data exporting was unselected.


-- Dumping database structure for tiktok_db
CREATE DATABASE IF NOT EXISTS `tiktok_db` /*!40100 DEFAULT CHARACTER SET utf16le */;
USE `tiktok_db`;

-- Dumping structure for table tiktok_db.country_codes
CREATE TABLE IF NOT EXISTS `country_codes` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Code` varchar(2) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `CrawledAt` timestamp NULL DEFAULT NULL,
  `HttpErrorCode` smallint(5) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=260 DEFAULT CHARSET=utf16le;

-- Data exporting was unselected.

-- Dumping structure for table tiktok_db.hashtags
CREATE TABLE IF NOT EXISTS `hashtags` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `Hashtag` varchar(100) CHARACTER SET utf16 NOT NULL,
  `TiktokID` bigint(20) DEFAULT NULL,
  `TiktokPostCount` bigint(20) DEFAULT NULL,
  `TiktokViewsCount` bigint(20) DEFAULT NULL,
  `TiktokText` varchar(2000) DEFAULT NULL,
  `TiktokIsCommerce` bit(1) DEFAULT NULL,
  `Source` enum('best-hashtags','locations-db','tiktok-post','tiktok-trending','instagram-directory','instagram-post') DEFAULT NULL,
  `CrawledAt` timestamp NULL DEFAULT NULL,
  `HttpErrorCode` smallint(6) DEFAULT NULL,
  `ErrorMsg` varchar(1000) DEFAULT NULL,
  `CrawledTagAt` timestamp NULL DEFAULT NULL,
  `CrawledTagHttpErrorCode` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `hashtag` (`Hashtag`)
) ENGINE=MyISAM AUTO_INCREMENT=4150818 DEFAULT CHARSET=utf16le;

-- Data exporting was unselected.

-- Dumping structure for table tiktok_db.hashtag_groups
CREATE TABLE IF NOT EXISTS `hashtag_groups` (
  `id` bigint(50) NOT NULL AUTO_INCREMENT,
  `Group` varchar(2000) NOT NULL,
  `GroupedIds` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1896 DEFAULT CHARSET=utf16le;

-- Data exporting was unselected.

-- Dumping structure for table tiktok_db.stats
CREATE TABLE IF NOT EXISTS `stats` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `DateTime` timestamp NULL DEFAULT NULL,
  `StatsJson` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf16;

-- Data exporting was unselected.

-- Dumping structure for table tiktok_db.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `UserID` bigint(20) unsigned DEFAULT NULL,
  `SecUid` varchar(200) DEFAULT NULL,
  `Username` varchar(100) NOT NULL,
  `Title` varchar(100) DEFAULT NULL,
  `ProfilePic` varchar(100) DEFAULT NULL,
  `Description` varchar(5000) DEFAULT NULL,
  `FollowerCount` bigint(20) unsigned DEFAULT NULL,
  `FollowingCount` bigint(20) unsigned DEFAULT NULL,
  `LikesCount` bigint(20) unsigned DEFAULT NULL,
  `IsVerified` bit(1) DEFAULT NULL,
  `VideoCount` bigint(20) DEFAULT NULL,
  `DiscoveredAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `CrawledAt` timestamp NULL DEFAULT NULL,
  `HttpErrorCode` smallint(6) DEFAULT NULL,
  `Recrawl` smallint(1) DEFAULT NULL,
  `SocialEntityProcessedCode` enum('UNPROCESSED','PROCESSED','ERRORED') DEFAULT NULL,
  `SocialEntityId` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Username` (`Username`),
  KEY `SocialEntityId` (`SocialEntityId`),
  KEY `SocialEntityProcessedCode` (`SocialEntityProcessedCode`)
) ENGINE=MyISAM AUTO_INCREMENT=3797 DEFAULT CHARSET=utf16le COMMENT='ticktok users data';

-- Data exporting was unselected.


-- Dumping database structure for tiktok_db_test
CREATE DATABASE IF NOT EXISTS `tiktok_db_test` /*!40100 DEFAULT CHARACTER SET utf16le */;
USE `tiktok_db_test`;

-- Dumping structure for table tiktok_db_test.country_codes
CREATE TABLE IF NOT EXISTS `country_codes` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Code` varchar(2) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `CrawledAt` timestamp NULL DEFAULT NULL,
  `HttpErrorCode` smallint(5) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=260 DEFAULT CHARSET=utf16le;

-- Data exporting was unselected.

-- Dumping structure for table tiktok_db_test.hashtags
CREATE TABLE IF NOT EXISTS `hashtags` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `Hashtag` varchar(100) CHARACTER SET utf16 NOT NULL,
  `TiktokID` bigint(20) DEFAULT NULL,
  `TiktokPostCount` bigint(20) DEFAULT NULL,
  `TiktokViewsCount` bigint(20) DEFAULT NULL,
  `TiktokText` varchar(2000) DEFAULT NULL,
  `TiktokIsCommerce` bit(1) DEFAULT NULL,
  `Source` enum('best-hashtags','locations-db','tiktok-post','tiktok-trending','instagram-directory','instagram-post') DEFAULT NULL,
  `CrawledAt` timestamp NULL DEFAULT NULL,
  `HttpErrorCode` smallint(6) DEFAULT NULL,
  `ErrorMsg` varchar(1000) DEFAULT NULL,
  `CrawledTagAt` timestamp NULL DEFAULT NULL,
  `CrawledTagHttpErrorCode` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `hashtag` (`Hashtag`)
) ENGINE=MyISAM AUTO_INCREMENT=4150818 DEFAULT CHARSET=utf16le;

-- Data exporting was unselected.

-- Dumping structure for table tiktok_db_test.hashtag_groups
CREATE TABLE IF NOT EXISTS `hashtag_groups` (
  `id` bigint(50) NOT NULL AUTO_INCREMENT,
  `Group` varchar(2000) NOT NULL,
  `GroupedIds` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1896 DEFAULT CHARSET=utf16le;

-- Data exporting was unselected.

-- Dumping structure for table tiktok_db_test.stats
CREATE TABLE IF NOT EXISTS `stats` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `DateTime` timestamp NULL DEFAULT NULL,
  `StatsJson` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf16;

-- Data exporting was unselected.

-- Dumping structure for table tiktok_db_test.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `UserID` bigint(20) unsigned DEFAULT NULL,
  `SecUid` varchar(200) DEFAULT NULL,
  `Username` varchar(100) NOT NULL,
  `Title` varchar(100) DEFAULT NULL,
  `ProfilePic` varchar(100) DEFAULT NULL,
  `Description` varchar(5000) DEFAULT NULL,
  `FollowerCount` bigint(20) unsigned DEFAULT NULL,
  `FollowingCount` bigint(20) unsigned DEFAULT NULL,
  `LikesCount` bigint(20) unsigned DEFAULT NULL,
  `IsVerified` bit(1) DEFAULT NULL,
  `VideoCount` bigint(20) DEFAULT NULL,
  `DiscoveredAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `CrawledAt` timestamp NULL DEFAULT NULL,
  `HttpErrorCode` smallint(6) DEFAULT NULL,
  `Recrawl` smallint(1) DEFAULT NULL,
  `SocialEntityProcessedCode` enum('UNPROCESSED','PROCESSED','ERRORED') DEFAULT NULL,
  `SocialEntityId` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Username` (`Username`),
  KEY `SocialEntityId` (`SocialEntityId`),
  KEY `SocialEntityProcessedCode` (`SocialEntityProcessedCode`)
) ENGINE=MyISAM AUTO_INCREMENT=3912 DEFAULT CHARSET=utf16le COMMENT='ticktok users data';

-- Data exporting was unselected.


-- Dumping database structure for travel-massive
CREATE DATABASE IF NOT EXISTS `travel-massive` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `travel-massive`;

-- Dumping structure for table travel-massive.chapters
CREATE TABLE IF NOT EXISTS `chapters` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `RelativeURL` varchar(100) NOT NULL,
  `Name` varchar(100) DEFAULT NULL,
  `PictureURL` varchar(500) DEFAULT NULL,
  `CoverPhoto` varchar(500) DEFAULT NULL,
  `About` varchar(2000) DEFAULT NULL,
  `FollowersCount` bigint(20) DEFAULT NULL,
  `WebsiteURL` varchar(250) DEFAULT NULL,
  `InstagramURL` varchar(250) DEFAULT NULL,
  `TwitterURL` varchar(250) DEFAULT NULL,
  `FacebookURL` varchar(250) DEFAULT NULL,
  `YoutubeURL` varchar(250) DEFAULT NULL,
  `CrawledAt` timestamp NULL DEFAULT NULL,
  `HttpErrorCode` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `RelativeURL` (`RelativeURL`)
) ENGINE=MyISAM AUTO_INCREMENT=165 DEFAULT CHARSET=utf32;

-- Data exporting was unselected.

-- Dumping structure for table travel-massive.companies
CREATE TABLE IF NOT EXISTS `companies` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `RelativeURL` varchar(100) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Description` varchar(1000) NOT NULL,
  `Category` varchar(250) DEFAULT NULL,
  `Picture` varchar(1000) DEFAULT NULL,
  `CoverPhoto` varchar(1000) DEFAULT NULL,
  `FollowerCount` bigint(20) unsigned DEFAULT NULL,
  `FollowingCount` bigint(20) unsigned DEFAULT NULL,
  `EventsCount` bigint(20) unsigned DEFAULT NULL,
  `CrawledAt` timestamp NULL DEFAULT NULL,
  `HttpErrorCode` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `relativeURL` (`RelativeURL`)
) ENGINE=MyISAM AUTO_INCREMENT=3673 DEFAULT CHARSET=utf32;

-- Data exporting was unselected.

-- Dumping structure for table travel-massive.companies_pages
CREATE TABLE IF NOT EXISTS `companies_pages` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `pageNo` int(10) unsigned DEFAULT NULL,
  `CrawledAt` timestamp NULL DEFAULT NULL,
  `HttpErrorCode` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=403 DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table travel-massive.member_pages
CREATE TABLE IF NOT EXISTS `member_pages` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `pageNo` int(10) unsigned DEFAULT NULL,
  `CrawledAt` timestamp NULL DEFAULT NULL,
  `HttpErrorCode` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3305 DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table travel-massive.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `Username` varchar(100) NOT NULL,
  `Name` varchar(100) DEFAULT NULL,
  `Role` varchar(250) DEFAULT NULL,
  `Sticker` varchar(100) DEFAULT NULL,
  `Picture` varchar(1000) DEFAULT NULL,
  `CoverPhoto` varchar(1000) DEFAULT NULL,
  `Location` varchar(250) DEFAULT NULL,
  `About` varchar(2000) DEFAULT NULL,
  `LinkedInURL` varchar(250) DEFAULT NULL,
  `TwitterURL` varchar(250) DEFAULT NULL,
  `InstagramURL` varchar(250) DEFAULT NULL,
  `FacebookURL` varchar(250) DEFAULT NULL,
  `WebsiteURL` varchar(250) DEFAULT NULL,
  `YoutubeURL` varchar(250) DEFAULT NULL,
  `VimeoURL` varchar(250) DEFAULT NULL,
  `SnapchatURL` varchar(250) DEFAULT NULL,
  `Profession` varchar(250) DEFAULT NULL,
  `ReasonForJoining` varchar(500) DEFAULT NULL,
  `FavoriteDestination` varchar(500) DEFAULT NULL,
  `DreamDestination` varchar(500) DEFAULT NULL,
  `FirstTravelJob` varchar(500) DEFAULT NULL,
  `LearnMoreAbout` varchar(500) DEFAULT NULL,
  `WhyShouldTravel` varchar(500) DEFAULT NULL,
  `Company` varchar(200) DEFAULT NULL,
  `Approved` bit(1) DEFAULT NULL,
  `FollowerCount` bigint(20) unsigned DEFAULT NULL,
  `FollowingCount` bigint(20) unsigned DEFAULT NULL,
  `EventsCount` bigint(20) unsigned DEFAULT NULL,
  `IsPrivateProfile` bit(1) DEFAULT NULL,
  `CrawledAt` timestamp NULL DEFAULT NULL,
  `HttpErrorCode` smallint(6) DEFAULT NULL,
  `Recrawl` smallint(1) DEFAULT NULL,
  `SocialEntityProcessedCode` enum('UNPROCESSED','PROCESSED','ERRORED') DEFAULT NULL,
  `SocialEntityId` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Username` (`Username`),
  KEY `SocialEntityId` (`SocialEntityId`),
  KEY `SocialEntityProcessedCode` (`SocialEntityProcessedCode`)
) ENGINE=MyISAM AUTO_INCREMENT=31048 DEFAULT CHARSET=utf32;

-- Data exporting was unselected.

-- Dumping structure for table travel-massive.user_chapters
CREATE TABLE IF NOT EXISTS `user_chapters` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned NOT NULL,
  `chapter_id` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=43520 DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping database structure for travel-massive_test
CREATE DATABASE IF NOT EXISTS `travel-massive_test` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `travel-massive_test`;

-- Dumping structure for table travel-massive_test.chapters
CREATE TABLE IF NOT EXISTS `chapters` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `RelativeURL` varchar(100) NOT NULL,
  `Name` varchar(100) DEFAULT NULL,
  `PictureURL` varchar(500) DEFAULT NULL,
  `CoverPhoto` varchar(500) DEFAULT NULL,
  `About` varchar(2000) DEFAULT NULL,
  `FollowersCount` bigint(20) DEFAULT NULL,
  `WebsiteURL` varchar(250) DEFAULT NULL,
  `InstagramURL` varchar(250) DEFAULT NULL,
  `TwitterURL` varchar(250) DEFAULT NULL,
  `FacebookURL` varchar(250) DEFAULT NULL,
  `YoutubeURL` varchar(250) DEFAULT NULL,
  `CrawledAt` timestamp NULL DEFAULT NULL,
  `HttpErrorCode` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `RelativeURL` (`RelativeURL`)
) ENGINE=MyISAM AUTO_INCREMENT=165 DEFAULT CHARSET=utf32;

-- Data exporting was unselected.

-- Dumping structure for table travel-massive_test.companies
CREATE TABLE IF NOT EXISTS `companies` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `RelativeURL` varchar(100) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Description` varchar(1000) NOT NULL,
  `Category` varchar(250) DEFAULT NULL,
  `Picture` varchar(1000) DEFAULT NULL,
  `CoverPhoto` varchar(1000) DEFAULT NULL,
  `FollowerCount` bigint(20) unsigned DEFAULT NULL,
  `FollowingCount` bigint(20) unsigned DEFAULT NULL,
  `EventsCount` bigint(20) unsigned DEFAULT NULL,
  `CrawledAt` timestamp NULL DEFAULT NULL,
  `HttpErrorCode` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `relativeURL` (`RelativeURL`)
) ENGINE=MyISAM AUTO_INCREMENT=3673 DEFAULT CHARSET=utf32;

-- Data exporting was unselected.

-- Dumping structure for table travel-massive_test.companies_pages
CREATE TABLE IF NOT EXISTS `companies_pages` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `pageNo` int(10) unsigned DEFAULT NULL,
  `CrawledAt` timestamp NULL DEFAULT NULL,
  `HttpErrorCode` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=403 DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table travel-massive_test.member_pages
CREATE TABLE IF NOT EXISTS `member_pages` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `pageNo` int(10) unsigned DEFAULT NULL,
  `CrawledAt` timestamp NULL DEFAULT NULL,
  `HttpErrorCode` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3305 DEFAULT CHARSET=latin1;

-- Data exporting was unselected.

-- Dumping structure for table travel-massive_test.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `Username` varchar(100) NOT NULL,
  `Name` varchar(100) DEFAULT NULL,
  `Role` varchar(250) DEFAULT NULL,
  `Sticker` varchar(100) DEFAULT NULL,
  `Picture` varchar(1000) DEFAULT NULL,
  `CoverPhoto` varchar(1000) DEFAULT NULL,
  `Location` varchar(250) DEFAULT NULL,
  `About` varchar(2000) DEFAULT NULL,
  `LinkedInURL` varchar(250) DEFAULT NULL,
  `TwitterURL` varchar(250) DEFAULT NULL,
  `InstagramURL` varchar(250) DEFAULT NULL,
  `FacebookURL` varchar(250) DEFAULT NULL,
  `WebsiteURL` varchar(250) DEFAULT NULL,
  `YoutubeURL` varchar(250) DEFAULT NULL,
  `VimeoURL` varchar(250) DEFAULT NULL,
  `SnapchatURL` varchar(250) DEFAULT NULL,
  `Profession` varchar(250) DEFAULT NULL,
  `ReasonForJoining` varchar(500) DEFAULT NULL,
  `FavoriteDestination` varchar(500) DEFAULT NULL,
  `DreamDestination` varchar(500) DEFAULT NULL,
  `FirstTravelJob` varchar(500) DEFAULT NULL,
  `LearnMoreAbout` varchar(500) DEFAULT NULL,
  `WhyShouldTravel` varchar(500) DEFAULT NULL,
  `Company` varchar(200) DEFAULT NULL,
  `Approved` bit(1) DEFAULT NULL,
  `FollowerCount` bigint(20) unsigned DEFAULT NULL,
  `FollowingCount` bigint(20) unsigned DEFAULT NULL,
  `EventsCount` bigint(20) unsigned DEFAULT NULL,
  `IsPrivateProfile` bit(1) DEFAULT NULL,
  `CrawledAt` timestamp NULL DEFAULT NULL,
  `HttpErrorCode` smallint(6) DEFAULT NULL,
  `Recrawl` smallint(1) DEFAULT NULL,
  `SocialEntityProcessedCode` enum('UNPROCESSED','PROCESSED','ERRORED') DEFAULT NULL,
  `SocialEntityId` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Username` (`Username`),
  KEY `SocialEntityId` (`SocialEntityId`),
  KEY `SocialEntityProcessedCode` (`SocialEntityProcessedCode`)
) ENGINE=MyISAM AUTO_INCREMENT=31447 DEFAULT CHARSET=utf32;

-- Data exporting was unselected.

-- Dumping structure for table travel-massive_test.user_chapters
CREATE TABLE IF NOT EXISTS `user_chapters` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned NOT NULL,
  `chapter_id` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=43520 DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping database structure for twitter
CREATE DATABASE IF NOT EXISTS `twitter` /*!40100 DEFAULT CHARACTER SET utf16 */;
USE `twitter`;

-- Dumping structure for table twitter.twitter
CREATE TABLE IF NOT EXISTS `twitter` (
  `id` bigint(20) unsigned NOT NULL DEFAULT '0',
  `name` varchar(255) DEFAULT NULL,
  `screen_name` varchar(255) DEFAULT NULL,
  `location` varchar(255) NOT NULL,
  `description` mediumtext NOT NULL,
  `followers_count` int(10) unsigned NOT NULL DEFAULT '0',
  `friends_count` int(10) unsigned NOT NULL DEFAULT '0',
  `listed_count` int(10) unsigned NOT NULL DEFAULT '0',
  `favourites_count` int(10) unsigned NOT NULL DEFAULT '0',
  `statuses_count` int(10) unsigned NOT NULL DEFAULT '0',
  `created_at` varchar(50) NOT NULL,
  `profile_background_image_url_https` mediumtext NOT NULL,
  `profile_image_url_https` mediumtext NOT NULL,
  `profile_banner_url` mediumtext NOT NULL,
  `lang` varchar(10) NOT NULL DEFAULT '',
  `log_date_created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `log_date_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `SocialEntityProcessedCode` enum('UNPROCESSED','PROCESSED','ERRORED') DEFAULT NULL,
  `SocialEntityId` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `followers_count` (`followers_count`),
  KEY `log_date_updated` (`log_date_updated`),
  KEY `SocialEntityId` (`SocialEntityId`),
  KEY `SocialEntityProcessedCode` (`SocialEntityProcessedCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

-- Data exporting was unselected.


-- Dumping database structure for twitter_test
CREATE DATABASE IF NOT EXISTS `twitter_test` /*!40100 DEFAULT CHARACTER SET utf16 */;
USE `twitter_test`;

-- Dumping structure for table twitter_test.twitter
CREATE TABLE IF NOT EXISTS `twitter` (
  `id` bigint(20) unsigned NOT NULL DEFAULT '0',
  `name` varchar(255) DEFAULT NULL,
  `screen_name` varchar(255) DEFAULT NULL,
  `location` varchar(255) NOT NULL,
  `description` mediumtext NOT NULL,
  `followers_count` int(10) unsigned NOT NULL DEFAULT '0',
  `friends_count` int(10) unsigned NOT NULL DEFAULT '0',
  `listed_count` int(10) unsigned NOT NULL DEFAULT '0',
  `favourites_count` int(10) unsigned NOT NULL DEFAULT '0',
  `statuses_count` int(10) unsigned NOT NULL DEFAULT '0',
  `created_at` varchar(50) NOT NULL,
  `profile_background_image_url_https` mediumtext NOT NULL,
  `profile_image_url_https` mediumtext NOT NULL,
  `profile_banner_url` mediumtext NOT NULL,
  `lang` varchar(10) NOT NULL DEFAULT '',
  `log_date_created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `log_date_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `SocialEntityProcessedCode` enum('UNPROCESSED','PROCESSED','ERRORED') DEFAULT NULL,
  `SocialEntityId` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `followers_count` (`followers_count`),
  KEY `log_date_updated` (`log_date_updated`),
  KEY `SocialEntityId` (`SocialEntityId`),
  KEY `SocialEntityProcessedCode` (`SocialEntityProcessedCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf16;

-- Data exporting was unselected.


-- Dumping database structure for youtube_data
CREATE DATABASE IF NOT EXISTS `youtube_data` /*!40100 DEFAULT CHARACTER SET utf16 */;
USE `youtube_data`;

-- Dumping structure for table youtube_data.channels
CREATE TABLE IF NOT EXISTS `channels` (
  `id` bigint(50) unsigned NOT NULL AUTO_INCREMENT,
  `ChannelId` varchar(100) DEFAULT NULL,
  `Username` varchar(100) DEFAULT NULL,
  `Title` varchar(1000) DEFAULT NULL,
  `Thumbnail` varchar(500) DEFAULT NULL,
  `Banner` varchar(2000) DEFAULT NULL,
  `Keywords` varchar(5000) DEFAULT NULL,
  `IsFamilySafe` bit(1) DEFAULT NULL,
  `FacebookProfileId` varchar(100) DEFAULT NULL,
  `Description` varchar(5000) DEFAULT NULL,
  `VideoCount` bigint(20) DEFAULT NULL,
  `SubscriberCount` bigint(20) DEFAULT NULL,
  `IsVerified` bit(1) DEFAULT NULL,
  `TotalsView` bigint(20) DEFAULT NULL,
  `JoinedAt` datetime DEFAULT NULL,
  `Location` varchar(50) DEFAULT NULL,
  `DiscovedAt` timestamp NULL DEFAULT NULL,
  `CrawledAt` timestamp NULL DEFAULT NULL,
  `HttpErrorCode` smallint(6) DEFAULT NULL,
  `SocialEntityProcessedCode` enum('UNPROCESSED','PROCESSED','ERRORED') DEFAULT NULL,
  `SocialEntityId` bigint(20) unsigned DEFAULT NULL,
  `Recrawl` smallint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ChannelId` (`ChannelId`)
) ENGINE=MyISAM AUTO_INCREMENT=22382183 DEFAULT CHARSET=utf16;

-- Data exporting was unselected.

-- Dumping structure for table youtube_data.channels_temp
CREATE TABLE IF NOT EXISTS `channels_temp` (
  `id` bigint(50) unsigned NOT NULL AUTO_INCREMENT,
  `ChannelId` varchar(100) DEFAULT NULL,
  `Username` varchar(100) DEFAULT NULL,
  `Title` varchar(1000) DEFAULT NULL,
  `Thumbnail` varchar(500) DEFAULT NULL,
  `Banner` varchar(2000) DEFAULT NULL,
  `Keywords` varchar(5000) DEFAULT NULL,
  `IsFamilySafe` bit(1) DEFAULT NULL,
  `FacebookProfileId` varchar(100) DEFAULT NULL,
  `Description` varchar(5000) DEFAULT NULL,
  `VideoCount` bigint(20) DEFAULT NULL,
  `SubscriberCount` bigint(20) DEFAULT NULL,
  `IsVerified` bit(1) DEFAULT NULL,
  `TotalsView` bigint(20) DEFAULT NULL,
  `JoinedAt` datetime DEFAULT NULL,
  `Location` varchar(50) DEFAULT NULL,
  `DiscovedAt` timestamp NULL DEFAULT NULL,
  `CrawledAt` timestamp NULL DEFAULT NULL,
  `HttpErrorCode` smallint(6) DEFAULT NULL,
  `SocialEntityProcessedCode` enum('UNPROCESSED','PROCESSED','ERRORED') DEFAULT NULL,
  `SocialEntityId` bigint(20) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ChannelId` (`ChannelId`)
) ENGINE=MyISAM AUTO_INCREMENT=13379797 DEFAULT CHARSET=utf16;

-- Data exporting was unselected.

-- Dumping structure for table youtube_data.channel_urls
CREATE TABLE IF NOT EXISTS `channel_urls` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `ChannelId` bigint(20) unsigned NOT NULL,
  `Url` varchar(200) NOT NULL,
  `Title` varchar(500) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Url` (`Url`)
) ENGINE=MyISAM AUTO_INCREMENT=7109801 DEFAULT CHARSET=utf16;

-- Data exporting was unselected.

-- Dumping structure for table youtube_data.channel_urls_temp
CREATE TABLE IF NOT EXISTS `channel_urls_temp` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `ChannelId` bigint(20) unsigned NOT NULL,
  `Url` varchar(200) NOT NULL,
  `Title` varchar(500) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Url` (`Url`)
) ENGINE=MyISAM AUTO_INCREMENT=1494 DEFAULT CHARSET=utf16;

-- Data exporting was unselected.

-- Dumping structure for table youtube_data.continution_jobs
CREATE TABLE IF NOT EXISTS `continution_jobs` (
  `id` bigint(50) NOT NULL AUTO_INCREMENT,
  `SearchQuery` varchar(50) NOT NULL,
  `Token` varchar(5000) NOT NULL,
  `CreatedAt` timestamp NOT NULL,
  `CrawledAt` timestamp NULL DEFAULT NULL,
  `HttpErrorCode` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=utf16;

-- Data exporting was unselected.

-- Dumping structure for table youtube_data.home_page_crawler_jobs
CREATE TABLE IF NOT EXISTS `home_page_crawler_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `ChannelId` varchar(100) NOT NULL DEFAULT '',
  `CrawledAt` timestamp NULL DEFAULT NULL,
  `HttpErrorCode` smallint(5) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ChannelId` (`ChannelId`),
  KEY `CrawledAt` (`CrawledAt`)
) ENGINE=MyISAM AUTO_INCREMENT=10001 DEFAULT CHARSET=utf16;

-- Data exporting was unselected.

-- Dumping structure for table youtube_data.imdb_titles
CREATE TABLE IF NOT EXISTS `imdb_titles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Title` varchar(100) NOT NULL,
  `source` enum('imdb-names','imdb-title') NOT NULL DEFAULT 'imdb-names',
  PRIMARY KEY (`id`),
  UNIQUE KEY `Title` (`Title`)
) ENGINE=MyISAM AUTO_INCREMENT=10776269 DEFAULT CHARSET=utf16;

-- Data exporting was unselected.

-- Dumping structure for table youtube_data.keywords
CREATE TABLE IF NOT EXISTS `keywords` (
  `id` bigint(50) unsigned NOT NULL AUTO_INCREMENT,
  `Keyword` varchar(100) NOT NULL,
  `CrawledAt` timestamp NULL DEFAULT NULL,
  `HttpErrorCode` smallint(6) unsigned DEFAULT NULL,
  `Source` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Keyword` (`Keyword`)
) ENGINE=MyISAM AUTO_INCREMENT=2261361 DEFAULT CHARSET=utf16;

-- Data exporting was unselected.

-- Dumping structure for table youtube_data.stats
CREATE TABLE IF NOT EXISTS `stats` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `DateTime` timestamp NULL DEFAULT NULL,
  `StatsJson` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf16;

-- Data exporting was unselected.

-- Dumping structure for table youtube_data.stats_sc
CREATE TABLE IF NOT EXISTS `stats_sc` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `DateTime` timestamp NULL DEFAULT NULL,
  `StatsJson` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf16;

-- Data exporting was unselected.

-- Dumping structure for table youtube_data.videos
CREATE TABLE IF NOT EXISTS `videos` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `Code` varchar(100) NOT NULL,
  `ViewsCount` bigint(20) DEFAULT NULL,
  `CrawledAt` timestamp NULL DEFAULT NULL,
  `HttpErrorCode` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Code` (`Code`),
  KEY `ViewsCount` (`ViewsCount`),
  KEY `CrawledAt` (`CrawledAt`)
) ENGINE=MyISAM AUTO_INCREMENT=3193 DEFAULT CHARSET=utf16;

-- Data exporting was unselected.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;

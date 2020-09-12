CREATE TABLE `gallery_images` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `gallery_id` int(11) NOT NULL,
 `file_name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
 `uploaded_on` datetime NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
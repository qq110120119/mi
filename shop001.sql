/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : shop001

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2018-10-18 11:26:45
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `mark` varchar(255) DEFAULT NULL,
  `ps` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'xinyi-01', '12345654', '1', null);
INSERT INTO `user` VALUES ('3', 'xiaolan-01', '12345654', '1', null);
INSERT INTO `user` VALUES ('4', 'kenan01', '552266', '2', null);
INSERT INTO `user` VALUES ('5', 'kenan01', '552266', '2', null);
INSERT INTO `user` VALUES ('6', 'kenan01', '552266', '2', null);
INSERT INTO `user` VALUES ('7', 'jide02', '778899', null, '自动注册');
INSERT INTO `user` VALUES ('8', '', '', null, '自动注册');
INSERT INTO `user` VALUES ('9', 'xinyi01', '12345654', null, '自动注册');
INSERT INTO `user` VALUES ('10', 'xinyi01526', '778899562', null, '自动注册');
INSERT INTO `user` VALUES ('11', 'ajax', '123456', null, null);
INSERT INTO `user` VALUES ('12', 'baby', '12345', null, null);
INSERT INTO `user` VALUES ('13', 'angelababay', '3210', null, null);
INSERT INTO `user` VALUES ('14', 'gem', '2580', null, null);

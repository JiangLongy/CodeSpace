# 字节难度的sql知识
关系型数据库 行列
写一条 mysql sql 创建一个表 avatar 用户头像
索引， 要建 为了查询 但是也不能乱建
思考以后的查询需求，先写出select语句
    主键 Primary
    普通索引 首页文章列表、个人主页都要根据用户id查询头像
    唯一索引
    联合索引
create table `avatar`(
    `id` int(11) not null auto_increment,
    `minitype` varchar(255) not null,
    `filename` varchar(255) not null,
    `size` int(11) not null,
    `userId` int(11) not null,
    primary key(`id`),
    key `userId` (`userId`),
    constraint `avatar_ibfk_1` foreign key (`userId`) references `user` (`id`)
) engine=InnoDB default charset=utf8mb4;

create table `comment` (
    `id` int(11) not null auto_increment,
    `content` longtext not null,
    `postId` int(11) not null,
    `userId` int(11) not null,
    `parentId` int(11) not null,
    primary key (`id`),
    key `userId` (`userId`),
    key `postId` (`postId`),
    key `parentId` (`parentId`),
    constraint `comment_ibfk_1` foreign key (`userId`) references `user` (`id`)
)

- 部署 
    - 本地部署
        测试数据和服务端代码  blog.sql
    - 远程部署
        阿里云服务器    blog.sql
    - 分布式部署
        blog.sql 在mysql 运行一下
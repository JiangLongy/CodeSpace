# 后端数据逻辑

- 查询
    - 数据库.collection(name).get()
    - where 条件查询
    - count 
        注册 name+password
        {total} = where ({name}).count 
        if(total>=0){return}
    - limit 限制数量
        第五页数据 .offset((page-1)*size).limit(size)
- 
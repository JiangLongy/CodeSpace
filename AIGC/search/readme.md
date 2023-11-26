# 搜索

- 项目亮点
    搜索比较难，可以在面试的时候讲出来
- 全栈
    - 前端   防抖和节流
    - 后端 
        - SQL posts LIKE `%${keyword}%`
        - 各种数据放入hadop flink 
        - Elastic Search node
    - AIGC 

- 数据?
    - python 爬虫
    - AIGC 生成数据 
        get_response
        prompt 电商网站 手机 50条手机

- pandas 来处理aigc 生成的text文本
    - split('\n') 按换行符切割
    - data.strip()：这是对字符串进行截断（去掉）空白字符的操作。空白字符包括空格、制表符和换行符。这是为了保证字符串末端没有多余的空格。

    data.strip().split('\n')：在进行了strip()操作之后，split('\n')将字符串根据换行符( '\n')进行分割，生成一个包含分割后的子字符串的列表。这通常用于将包含多个行的文本数据分割成单独的行。
    - pandas 提供了DataFrame实例
        pd.DataFrame({"product_name"}) 
        这行代码创建了一个 DataFrame 对象df，其中有一个名为 'product_name' 的列，列的值来自product_names列表。
        column_name
    - pd.head()
    然后，df.head()用于显示DataFrame的前几行，默认是前五行。这是为了让你能够快速查看DataFrame的结构和内容。

- 文本 如何转成向量 数学表达 openai 提供 embedding 接口
    cosin值
- openai Completion\chat\embedding
- embedding
    openai的新接口
    查询keyword+数据都进行向量计算
    cosine_smilarity 两个向量间的相似度 =>0 相同的或者相似的 相反的话 负值
1.git init 初始化本地仓库（让git掌管文件夹）
    - git-learn 工作区
    - .git 隐藏文件夹 代码仓库
2.git status 查看该仓库中的文件状态
3.git add . 将所有的文件提交到暂存区
    先add 再 commit
    为什么要分几步？
    带业务场景
    网易上班 请写一个vue+langChain 聊天功能
    1.py
    2.vue 界面
    两个文件    暂存区
    git add 1.py
    git add 2.vue
    git commit -m '' 老板要看
    一个上午 3次 
- 当我们在写代码时，有可能会改到别人的代码，摸了下鱼   忘了
    git status 当前仓库状态
    对比修改    改了啥
    git deff 在add之前，再次确认你改了哪些？
4.git commit -m '你的注释' 将暂存区的代码提交到master区域
5.git push origin master  将文件夹推送到远程仓库
# Words-Helper
这个项目是用来辅助背单词的，你可以提前将需要背诵的单词（或者短语）写入一个文本文件中，使用这个工具可以随机向你抽查单词（或者短语），并且可以在抽查结束之后给你显示你错误过的单词

包含单词的文本文件格式如下：
```text
你好 hello
世界 world
```

包含短语的文本文件格式如下：
```text
你好世界:hello world
快狐跨懒狗:The quick brown fox jumps over the lazy dog.
```

运行程序的命令如下：
```bash
node ./helper.js ./words.txt 1 # ./words.txt替换为包括你写好的单词的文件，也可为短语文件 最后加1表示使用单词，不加表示使用短语
```
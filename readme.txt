项目所添加的内容：
导入gulp
1.
npm install gulp --save-dev
2.文件合并
npm install --save-dev gulp-concat
3.js文件压缩
npm install --save-dev gulp-uglify
4.sass编译
npm install --save-dev gulp-sass
5.图片压缩(有丢失)
npm install --save-dev gulp-imagemin
6.自动刷新
npm install --save-dev gulp-connect
7.css
npm install --save-dev gulp-minify-css

文件路径存放规范：
1.*** dist文件夹里有各自的 image 文件，大家可以把自己用到的图片放到里面。
(建议：iconfont的文件可以在dist里面image中自行建立以自己相应开头的文件夹。例如 h_iconfont )
2.除了 index.html ， 其他人所有人的 html 写在外层html文件中；
3.所有人的 js 文件写在外层  js  文件夹中；
4.所有人的 sass 文件放在外层  sass  文件中；
5.所有人的 css 文件放在外层css文件夹中；
6.注意，修改以上文件的时候要切记切记切记启用gulp,运行run,文件才会自己合并到dist相应文件夹里面。
7.如果有掉包自行下载插件。
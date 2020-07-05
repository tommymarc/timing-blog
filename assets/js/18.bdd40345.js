(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{886:function(a,t,s){"use strict";s.r(t);var e=s(22),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"git创建新分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git创建新分支"}},[a._v("#")]),a._v(" git创建新分支")]),a._v(" "),s("h3",{attrs:{id:"_1-创建本地分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建本地分支"}},[a._v("#")]),a._v(" 1.创建本地分支")]),a._v(" "),s("p",[a._v("git branch 分支名，例如：git branch 2.0.1.20120806\n注：2.0.1.20120806是分支名称，可以随便定义。")]),a._v(" "),s("h3",{attrs:{id:"_2-切换本地分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-切换本地分支"}},[a._v("#")]),a._v(" 2.切换本地分支")]),a._v(" "),s("p",[a._v("git checkout 分支名，例如从master切换到分支：git checkout 2.0.1.20120806")]),a._v(" "),s("h3",{attrs:{id:"_3-远程分支就是本地分支push到服务器上。比如master就是一个最典型的远程分支（默认）。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-远程分支就是本地分支push到服务器上。比如master就是一个最典型的远程分支（默认）。"}},[a._v("#")]),a._v(" 3.远程分支就是本地分支push到服务器上。比如master就是一个最典型的远程分支（默认）。")]),a._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git push origin 2.0.1.20120806\n")])])]),s("h3",{attrs:{id:"_4-远程分支和本地分支需要区分好，所以，在从服务器上拉取特定分支的时候，需要指定远程分支的名字。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-远程分支和本地分支需要区分好，所以，在从服务器上拉取特定分支的时候，需要指定远程分支的名字。"}},[a._v("#")]),a._v(" 4.远程分支和本地分支需要区分好，所以，在从服务器上拉取特定分支的时候，需要指定远程分支的名字。")]),a._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git checkout --track origin/2.0.1.20120806\n")])])]),s("p",[a._v("注意该命令由于带有--track参数，所以要求git1.6.4以上！这样git会自动切换到分支。")]),a._v(" "),s("h3",{attrs:{id:"_5-提交分支数据到远程服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-提交分支数据到远程服务器"}},[a._v("#")]),a._v(" 5.提交分支数据到远程服务器")]),a._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git push origin <local_branch_name>:<remote_branch_name>\n")])])]),s("p",[a._v("例如：")]),a._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git push origin 2.0.1.20120806:2.0.1.20120806\n")])])]),s("p",[a._v("一般当前如果不在该分支时，使用这种方式提交。如果当前在 2.0.1.20120806 分支下，也可以直接提交")]),a._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git push\n")])])]),s("h3",{attrs:{id:"_6-删除远程分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-删除远程分支"}},[a._v("#")]),a._v(" 6.删除远程分支")]),a._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git push origin :develop\n")])])]),s("hr"),a._v(" "),s("h3",{attrs:{id:"_1-从已有的分支创建新的分支-如从master分支-创建一个dev分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-从已有的分支创建新的分支-如从master分支-创建一个dev分支"}},[a._v("#")]),a._v(" 1,从已有的分支创建新的分支(如从master分支),创建一个dev分支")]),a._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Git checkout -b dev\n")])])]),s("h3",{attrs:{id:"_2-创建完可以查看一下-分支已经切换到dev"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建完可以查看一下-分支已经切换到dev"}},[a._v("#")]),a._v(" 2,创建完可以查看一下,分支已经切换到dev")]),a._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git branch\n\n    * dev\n\n    master\n")])])]),s("h3",{attrs:{id:"_3-提交该分支到远程仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-提交该分支到远程仓库"}},[a._v("#")]),a._v(" 3,提交该分支到远程仓库")]),a._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git push origin dev\n")])])]),s("h3",{attrs:{id:"_4-测试从远程获取dev"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-测试从远程获取dev"}},[a._v("#")]),a._v(" 4,测试从远程获取dev")]),a._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git pull origin dev\n")])])]),s("p",[a._v("或者：")]),a._v(" "),s("p",[a._v("如果用命令行，运行 git fetch，可以将远程分支信息获取到本地，再运行 git checkout -b local-branchname origin/remote_branchname  就可以将远程分支映射到本地命名为local-branchname  的一分支")]),a._v(" "),s("h3",{attrs:{id:"_5-我觉得现在重要的就是设置git-push-pull默认的提交获取分支-这样就很方便的使用git-push-提交信息或git-pull获取信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-我觉得现在重要的就是设置git-push-pull默认的提交获取分支-这样就很方便的使用git-push-提交信息或git-pull获取信息"}},[a._v("#")]),a._v(" 5,我觉得现在重要的就是设置git push,pull默认的提交获取分支,这样就很方便的使用git push 提交信息或git pull获取信息")]),a._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git branch --set-upstream-to=origin/dev\n")])])]),s("p",[a._v("取消对master的跟踪")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git branch --unset-upstream master\n")])])]),s("h3",{attrs:{id:"_6-现在随便修改一下工程文件的内容-然后git-commit-git-push-之后就可以直接提交到远程的dev分支中-而不会是master"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-现在随便修改一下工程文件的内容-然后git-commit-git-push-之后就可以直接提交到远程的dev分支中-而不会是master"}},[a._v("#")]),a._v(" 6,现在随便修改一下工程文件的内容,然后git commit ,git push,之后就可以直接提交到远程的dev分支中,而不会是master")])])}),[],!1,null,null,null);t.default=r.exports}}]);
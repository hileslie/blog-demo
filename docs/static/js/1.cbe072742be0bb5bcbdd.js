webpackJsonp([1],{GJyG:function(_,v,t){"use strict";Object.defineProperty(v,"__esModule",{value:!0});var d=t("QODy"),e=t("o7Pn"),r=e(null,d.a,null,null,null);v.default=r.exports},QODy:function(_,v,t){"use strict";var d=function(){var _=this,v=_.$createElement;_._self._c;return _._m(0)},e=[function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("section",[t("p",[_._v('{\n"title": "代码大全2-笔记",\n"tags": ["code"],\n"date": "2017-06-21",\n"desc": "代码大全2一些摘要",\n"cover": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507623504039&di=6b0f1a398e16a1e8de5a6db7eeb62eae&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3Da5dda3cf7bf0f736d8ab44053f659f2f%2Fb03533fa828ba61ea66a5d9f4234970a314e59fd.jpg"\n}')]),_._v(" "),t("h2",[_._v("问题定义的先决条件")]),_._v(" "),t("p",[_._v("问题定义只是定义问题是什么，而不是解决问题的解决方案！！！")]),_._v(" "),t("p",[_._v("问题定义应从客户的角度来描述问题，除非需要解决的问题与计算机本身相关，可以用程序员术语来描述。")]),_._v(" "),t("h3",[_._v("问题定义为是随后的开发过程的基础")]),_._v(" "),t("p",[_._v("问题定义==》需求==》架构==》构建==》系统测试==》将来的改进")]),_._v(" "),t("hr"),_._v(" "),t("h2",[_._v("需求的先决条件")]),_._v(" "),t("p",[_._v("需求描述软件系统应该做什么。")]),_._v(" "),t("h3",[_._v("为什么要有正式的需求")]),_._v(" "),t("p",[_._v("明确的需求可以帮助用户自行评审，并进行核准。让程序员明白程序该做什么。")]),_._v(" "),t("h3",[_._v("需求核对表")]),_._v(" "),t("p",[_._v("|针对功能需求|针对非功能需求（质量需求）|需求的质量|需求的完备性|\n|---|---|---|\n|是否详细定义了系统的全部输入，包括其来源、精度、取值范围、出现频率等|是否为全部必要的操作，从用户的视角，详细描述了期望响应时间|需求是用用户的语言书写的吗，用户也这么认为吗|对于在开始之前无法获得的信息，是否详细描述了信息不完全的区域|\n|是否详细定义了系统的全部输出，包括目的地、精度、取值范围、出现频率、格式等|是否详细描述了其他与计时有关的考虑，例如处理时间、数据传输率、系统吞吐量|每条需求都不与其他需求冲突吗|需求的完备度是否能达到这种程度：如果产品满足所有需求，那么它就是可接受的？|\n|是否详细定义了所有输出格式（web页面、报表等）|是否详细定义了安全级别|是否详细定义了相互竞争的特性之间的权衡--例如，健壮性与正确性之间的权衡||\n|是否详细定义了所有硬件及软件的外部接口|是否详细定义了可靠性，包括软件失灵的后果、发生故障时需要保护的至关重要的信息、错误检测与恢复的策略等|是否避免在需求中规定设计方案|你对全部需求都感到很舒服吗，你是否已经去掉了那些不可能实现的需求|\n|是否详细定义了全部外部通信接口，包括握手协议、纠错协议、通信协议等|是否详细定义了机器内存和剩余磁盘空间的最小值|需求是否在详细程度上保持相当一致的水平，有些需求应该更详细的描述吗，有些需求应该更粗略的描述吗||\n|是否列出了用户想要做的全部事情|是否详细定义了系统的可维护性，包括适应特定功能的变更、操作环境的变更、与其他软件的接口的变更能力|需求是否足够清晰，即使转交给一个独立的小组去构建，他们也能理解吗，开发者也这么想吗||\n|是否详细定义了每个任务所用的数据，以及每个任务得到的数据|是否包含对“成功”的定义，“失败”的定义|每个条款都与待解决的问题及其解决方案相关吗，能从每个条款上溯到它在问题域中对应的根源吗||\n|||是否详细描述了所有可能的对需求的改动，包括改动的可能性||")]),_._v(" "),t("hr"),_._v(" "),t("h2",[_._v("架构的先决条件")]),_._v(" "),t("p",[_._v("架构的质量决定了系统的“概念完整性”。")]),_._v(" "),t("h2",[_._v("架构核对表")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("针对各架构主题")]),_._v(" "),t("th",[_._v("架构的总体质量")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("程序的整体组织结构是否清晰，是否包含一个良好的架构全局观（及其理由）")]),_._v(" "),t("td",[_._v("架构是否解决了全部需求")])]),_._v(" "),t("tr",[t("td",[_._v("是否明确定义了主要的构造块（包括每个构造块的职责范围及与其他构造块的接口）")]),_._v(" "),t("td",[_._v("有没有哪个部分是“过渡架构”或“欠架构”，是否明确宣布了在这方面的预期指标")])]),_._v(" "),t("tr",[t("td",[_._v("是否明显涵盖了整个架构是否在概念上协调一致")]),_._v(" "),t("td",[_._v("“需求”中列出的所有功能（每个功能对应的构造块不太多也不太少）")])]),_._v(" "),t("tr",[t("td",[_._v("是否描述并论证了那些最关键的类")]),_._v(" "),t("td",[_._v("顶层设计是否独立于用作实现它的机器和语言")])]),_._v(" "),t("tr",[t("td",[_._v("是否描述并论证了数据设计")]),_._v(" "),t("td",[_._v("是否说明了所有主要的决策的动机")])]),_._v(" "),t("tr",[t("td",[_._v("是否详细定义了数据库的组织结构和内容")]),_._v(" "),t("td",[_._v("作为实现该系统的程序员，是否对这个架构感觉良好")])]),_._v(" "),t("tr",[t("td",[_._v("是否指出了所用关键的业务规则，并描述其对系统的影响")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("是否描述了用户界面设计的策略")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("是否将用户界面模块化，使界面的变更不会影响程序其余部分")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("是否描述并论证了处理I/O的策略")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("是否估算了稀缺资源（如线程、数据库连接、句柄、网络带宽等）的使用量，是否描述并论证了资源管理的策略")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("是否描述了架构的安全需求")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("架构是否为每个类、每个子系统、或每个功能域提出空间与预算时间")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("架构是否描述了如何达到可伸缩性")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("架构是否关注互操作性")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("是否描述了国际化/本地化的策略")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("是否提供了一套内聚的错误处理策略")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("是否规定了容错的办法（如果需要）")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("是否证实了系统各个部分的技术可行性")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("是否详细描述了过渡工程的方法")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("是否包含了必要的“买vs造”的决策")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("架构是否描述了如何加工被复用的代码，使之符合其他架构目标")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("是否将架构设计的能够适应很可能出现的变更")]),_._v(" "),t("td")])])]),_._v(" "),t("hr"),_._v(" "),t("h2",[_._v("构建决策")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("选择语言：")]),_._v(" "),t("p",[_._v("选择合适项目的，自己熟悉的编程语言")])]),_._v(" "),t("li",[t("p",[_._v("编程约定：")]),_._v(" "),t("p",[_._v("“实现”必须与指导该实现的“架构”，保持一致，并且这种一致性是内在的、固有的。")])])]),_._v(" "),t("h3",[_._v("构建核对表")]),_._v(" "),t("p",[_._v("|编码|团队工作|质量保证|工具\n|---|---|---|\n|有没有确定，多少设计工作要预先进行|有没有定义一套集成工序，即有没有定义一套特定的步骤，规定程序员在把代码签入到主源码中之前，必须履行这些步骤|程序员在编码之前，是否先为之编写测试用例|是否选用了某种版本控制工具|\n|有没有规定诸如名称、注释、代码格式等“编码约定”|程序员是结对编程、还是独自编程，或者是这二种的某种组合|程序员会为自己的代码写单元测试吗|是否选定了一种语言，以及语言的版本或编译器版本|\n|有没有规定特定的由软件架构确定的编码实践，比如如何处理错误条件、如何处理安全性事项、对于类接口有哪些约定、可重用的代码遵循哪些标准、在编码时考虑多少性能因素等||程序员在签入代码之前，会用调试器单步跟踪整个代码流程吗|是否选择了某个编程框架，或者明确不使用编程框架|\n|是否知道如何深入一种语言去编程||程序员在签入代码之前，是否进行集成测试|是否决定允许使用非标准的语言特性|\n|||程序员会复审或检查别人的代码吗|是否选定并拥有了其他将要用到的工具--编辑器、重构工具、调试器、测试框架、语法检查器等|")])])}],r={render:d,staticRenderFns:e};v.a=r},sUrP:function(_,v,t){_.exports=t("GJyG")}});
//# sourceMappingURL=1.cbe072742be0bb5bcbdd.js.map
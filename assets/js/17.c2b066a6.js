(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{506:function(t,v,_){"use strict";_.r(v);var e=_(69),r=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"简介"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),_("p",[t._v("Apache Iceberg 是一种用于海量数据分析的开放式表格式。Iceberg 使用高性能的表格式将表添加到计算引擎中，包括 Spark、Trino、PrestoDB、Flink 以及 Hive，其工作形式类似于 SQL 表。")]),t._v(" "),_("div",{staticClass:"custom-block info"},[_("p",{staticClass:"custom-block-title"},[t._v("官方介绍")]),t._v(" "),_("p",[_("strong",[t._v("Apache Iceberg is an open table format for huge analytic datasets.")]),t._v(" Iceberg adds tables to compute engines including Spark, Trino, PrestoDB, Flink and Hive using a high-performance table format that works just like a SQL table.")])]),t._v(" "),_("h2",{attrs:{id:"特性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[t._v("#")]),t._v(" 特性")]),t._v(" "),_("p",[t._v("Iceberg 使得"),_("strong",[t._v("用户无需了解分区也可快速查询获得数据")]),t._v("，并且 Iceberg 是为大型表设计的，"),_("strong",[t._v("单表可以包含数十PB的数据")]),t._v("，甚至这些大表"),_("strong",[t._v("可以在没有分布式 SQL 引擎的情况下进行读取")]),t._v("，其次，Iceberg 旨在解决云端对象存储最终一致的正确性问题。简单的说，就是为了"),_("strong",[t._v("确保云端对象存储的最终一致性")]),t._v("。")]),t._v(" "),_("p",[t._v("Iceberg 具有一下特点：")]),t._v(" "),_("ul",[_("li",[t._v("格式演变：支持 add、drop、update 以及 rename，并且没有副作用")]),t._v(" "),_("li",[t._v("隐藏分区：防止用户错误操作导致无提示的错误结果或者极慢的查询")]),t._v(" "),_("li",[t._v("分区布局演变：可以根据数据量或查询模式的变化更新表的布局")]),t._v(" "),_("li",[t._v("Time travel：启用完全相同的表快照的可重现查询，或者使用户更容易地检查更改")]),t._v(" "),_("li",[t._v("版本回归：允许用户通过将表重置到一个良好状态来快速更正问题")]),t._v(" "),_("li",[t._v("快速扫描数据：无需分布式 SQL 引擎即可读取表或者查找文件")]),t._v(" "),_("li",[t._v("高级筛选：使用表元数据，通过分区以及列级的统计信息去除数据文件中多余部分")]),t._v(" "),_("li",[t._v("适用于任何云存储：存储在HDFS中时，通过避免 listing 以及 rename 来减少 NameNode 拥堵")]),t._v(" "),_("li",[t._v("序列化隔离：表更改事原子性的，读取操作永远无法看到部分更改或者未提交的更改")]),t._v(" "),_("li",[t._v("多并发写入：多并发写入使用乐观并发，即使写入冲突，也会重试以确保兼容的更新成功")])]),t._v(" "),_("h2",{attrs:{id:"flink-支持"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#flink-支持"}},[t._v("#")]),t._v(" Flink 支持")]),t._v(" "),_("p",[t._v("Apache Iceberg 同时支持 Flink 的 DataStream API 和 Table API。目前，Apache Iceberg 支持 Flink 的1.12、1.13、1.14。")]),t._v(" "),_("table",{attrs:{border:"1"}},[_("tr",[_("th"),t._v(" "),_("th",[t._v("功能支持")]),t._v(" "),_("th",[t._v("Flink")]),t._v(" "),_("th",[t._v("Note")])]),t._v(" "),_("tr",[_("td",{attrs:{rowspan:"9"}},[t._v("SQL")]),t._v(" "),_("td",[t._v("CREATE CATALOG")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("CREATE DATABASE")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("CREATE TABLE")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("CREATE TABLE LIKE")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("ALTER TABLE")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("仅支持修改  table properties，不支持 column 和 partition 的更改 ")])]),t._v(" "),_("tr",[_("td",[t._v("DROP TABLE")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("SELECT")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("支持流和批")])]),t._v(" "),_("tr",[_("td",[t._v("INSERT INTO")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td",[t._v("支持流和批")])]),t._v(" "),_("tr",[_("td",[t._v("INSERT OVERWRITE")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",{attrs:{rowspan:"3"}},[t._v("DataStream")]),t._v(" "),_("td",[t._v("Read")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Append")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("overwrite")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("Metadata")]),t._v(" "),_("td",[t._v("tables")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("仅支持 Java API，不支持 Flink SQL")])]),t._v(" "),_("tr",[_("td",[t._v("Rewrite")]),t._v(" "),_("td",[t._v("files action")]),t._v(" "),_("td",[t._v("✅")]),t._v(" "),_("td")])])])}),[],!1,null,null,null);v.default=r.exports}}]);
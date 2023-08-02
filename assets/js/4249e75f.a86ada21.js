"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7852],{73587:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>i,default:()=>b,frontMatter:()=>l,metadata:()=>p,toc:()=>g});var n=t(87462),o=(t(67294),t(3905)),s=t(50214),r=(t(58764),t(29518));const l={title:"DataTable.Pagination"},i=void 0,p={unversionedId:"components/DataTable/DataTablePagination",id:"components/DataTable/DataTablePagination",title:"DataTable.Pagination",description:"A component to show pagination for data table.",source:"@site/docs/components/DataTable/DataTablePagination.mdx",sourceDirName:"components/DataTable",slug:"/components/DataTable/DataTablePagination",permalink:"/react-native-paper/docs/components/DataTable/DataTablePagination",draft:!1,editUrl:"https://github.com/callstack/react-native-paper/tree/main/src/components/DataTable/DataTablePagination.tsx",tags:[],version:"current",frontMatter:{title:"DataTable.Pagination"},sidebar:"components",previous:{title:"DataTable.Header",permalink:"/react-native-paper/docs/components/DataTable/DataTableHeader"},next:{title:"DataTable.Row",permalink:"/react-native-paper/docs/components/DataTable/DataTableRow"}},m={},g=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],c={toc:g};function b(e){let{components:a,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A component to show pagination for data table."),(0,o.kt)(r.Z,{screenshotData:"screenshots/data-table-pagination.png",baseUrl:"/react-native-paper/",mdxType:"ScreenshotTabs"}),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { DataTable } from 'react-native-paper';\n\nconst numberOfItemsPerPageList = [2, 3, 4];\n\nconst items = [\n  {\n    key: 1,\n    name: 'Page 1',\n  },\n  {\n    key: 2,\n    name: 'Page 2',\n  },\n  {\n    key: 3,\n    name: 'Page 3',\n  },\n];\n\nconst MyComponent = () => {\n  const [page, setPage] = React.useState(0);\n  const [numberOfItemsPerPage, onItemsPerPageChange] = React.useState(numberOfItemsPerPageList[0]);\n  const from = page * numberOfItemsPerPage;\n  const to = Math.min((page + 1) * numberOfItemsPerPage, items.length);\n\n  React.useEffect(() => {\n     setPage(0);\n  }, [numberOfItemsPerPage]);\n\n  return (\n    <DataTable>\n      <DataTable.Pagination\n        page={page}\n        numberOfPages={Math.ceil(items.length / numberOfItemsPerPage)}\n        onPageChange={page => setPage(page)}\n        label={`${from + 1}-${to} of ${items.length}`}\n        showFastPaginationControls\n        numberOfItemsPerPageList={numberOfItemsPerPageList}\n        numberOfItemsPerPage={numberOfItemsPerPage}\n        onItemsPerPageChange={onItemsPerPageChange}\n        selectPageDropdownLabel={'Rows per page'}\n      />\n    </DataTable>\n  );\n};\n\nexport default MyComponent;\n")),(0,o.kt)("span",null),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)(s.Z,{link:"DataTable/DataTablePagination",mdxType:"PropTable"}),(0,o.kt)("span",null),(0,o.kt)("span",null))}b.isMDXComponent=!0}}]);
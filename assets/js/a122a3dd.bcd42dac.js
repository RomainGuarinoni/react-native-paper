"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1806],{2798:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var n=o(7462),a=(o(7294),o(3905)),i=o(214);const l={title:"Dialog.Icon"},s=void 0,r={unversionedId:"components/Dialog/DialogIcon",id:"components/Dialog/DialogIcon",title:"Dialog.Icon",description:"@supported Available in v5.x with theme version 3",source:"@site/docs/components/Dialog/DialogIcon.mdx",sourceDirName:"components/Dialog",slug:"/components/Dialog/DialogIcon",permalink:"/react-native-paper/docs/components/Dialog/DialogIcon",draft:!1,editUrl:"https://github.com/callstack/react-native-paper/tree/main/docs/docs/components/Dialog/DialogIcon.mdx",tags:[],version:"current",frontMatter:{title:"Dialog.Icon"},sidebar:"components",previous:{title:"Dialog.Content",permalink:"/react-native-paper/docs/components/Dialog/DialogContent"},next:{title:"Dialog.ScrollArea",permalink:"/react-native-paper/docs/components/Dialog/DialogScrollArea"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],g={toc:p};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"@supported Available in v5.x with theme version 3\nA component to show an icon in a Dialog."),(0,a.kt)("div",{class:"screenshots"},(0,a.kt)("img",{class:"small",src:"/react-native-paper/screenshots/dialog-icon.png"})),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { StyleSheet } from 'react-native';\nimport { Dialog, Portal, Text } from 'react-native-paper';\n\nconst MyComponent = () => {\n  const [visible, setVisible] = React.useState(false);\n\n  const hideDialog = () => setVisible(false);\n\n  return (\n    <Portal>\n      <Dialog visible={visible} onDismiss={hideDialog}>\n        <Dialog.Icon icon=\"alert\" />\n        <Dialog.Title style={styles.title}>This is a title</Dialog.Title>\n        <Dialog.Content>\n          <Text variant=\"bodyMedium\">This is simple dialog</Text>\n        </Dialog.Content>\n      </Dialog>\n    </Portal>\n  );\n};\n\nconst styles = StyleSheet.create({\n  title: {\n    textAlign: 'center',\n  },\n})\n\nexport default MyComponent;\n")),(0,a.kt)("h2",{id:"props"},"Props"),(0,a.kt)(i.Z,{link:"Dialog/DialogIcon",mdxType:"PropTable"}))}m.isMDXComponent=!0}}]);
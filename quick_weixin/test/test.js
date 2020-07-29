import {OnekitPage} from "../onekit/onekit.js"
import router from '../onekit/api/system/router'
import { tabsData } from './data'
OnekitPage({
  /**
   * @desc
   * private内定义的属性不允许被覆盖
   * protected内定义的属性，允许被应用内部页面请求传递的数据覆盖
   * public内定义的属性允许被传入的数据覆盖
   */
  private: {
    dataMap: tabsData,
    tabItemList: [],
    selectedIdxMap:{}
  },
  onInit() {
    this.$set("tabItemList", [].concat(Object.keys(this.data.dataMap)));
    this.data.tabItemList.forEach(tabItem => {
      this.$set(`selectedIdxMap.${tabItem}`, -1)
    })
  },
  selectConFn (e){//(tabItem, index) {
    console.log("selectConFn",e);
    this.data.selectedIdxMap[tabItem] = this.data.selectedIdxMap[tabItem] === index ? -1 : index
  },
  routePath(e){//} (path, params) {
    console.log("routePath",e);
    router.push({ uri: path, params: params })
  }
})
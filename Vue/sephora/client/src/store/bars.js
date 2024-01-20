import { defineStore } from 'pinia'
export const useBarsStore = defineStore('bars', {
    state: () => {
        return {
            barList: [
                {
                    id: 1,
                    title: "护肤",
                    pic: 'https://img.zcool.cn/community/01ec245e887a75a80120a895e355d2.png@1280w_1l_2o_100sh.png',
                    subList: [
                        {
                            title: '卸妆清洁',
                            list: [
                                {
                                    pic: 'https://img.zcool.cn/community/01e15d5e099327a801216518bfa789.jpg@1280w_1l_2o_100sh.jpg',
                                    name: '卸妆'
                                },
                                {
                                    pic:'https://img.zcool.cn/community/0190df6062c72111013fb117be7547.jpg@1280w_1l_2o_100sh.jpg',
                                    name: '清洁'
                                },
                                {
                                    pic: 'https://img.zcool.cn/community/01c4b059049882a801214550f8ae72.jpg@0o.jpg',
                                    name: '礼盒套装'
                                }                               
                            ]
                        },
                        {
                            title: '卸妆清洁',
                            list: [
                                {
                                    pic: 'https://img.zcool.cn/community/01e15d5e099327a801216518bfa789.jpg@1280w_1l_2o_100sh.jpg',
                                    name: '卸妆'
                                },
                                {
                                    pic:'https://img.zcool.cn/community/0190df6062c72111013fb117be7547.jpg@1280w_1l_2o_100sh.jpg',
                                    name: '清洁'
                                },
                                {
                                    pic: 'https://img.zcool.cn/community/01c4b059049882a801214550f8ae72.jpg@0o.jpg',
                                    name: '礼盒套装'
                                }                               
                            ]
                        },
                        {
                            title: '卸妆清洁',
                            list: [
                                {
                                    pic: 'https://img.zcool.cn/community/01e15d5e099327a801216518bfa789.jpg@1280w_1l_2o_100sh.jpg',
                                    name: '卸妆'
                                },
                                {
                                    pic:'https://img.zcool.cn/community/0190df6062c72111013fb117be7547.jpg@1280w_1l_2o_100sh.jpg',
                                    name: '清洁'
                                },
                                {
                                    pic: 'https://img.zcool.cn/community/01c4b059049882a801214550f8ae72.jpg@0o.jpg',
                                    name: '礼盒套装'
                                }                               
                            ]
                        },
                    ]
                }
                , {
                    id: 2,
                    title: "彩妆"
                },
                {
                    id: 3,
                    title: "香水"
                },
                {
                    id: 4,
                    title: "工具"
                },
                {
                    id: 5,
                    title: "男士"
                },
                {
                    id: 6,
                    title: "洗浴护体"
                },
                {
                    id: 7,
                    title: "美发护发"
                },
                {
                    id: 8,
                    title: "品牌"
                }
            ],
            activeBarId: 0,
            value:''
        }
    },
    actions: {
        changeId(currentId){
            this.activeBarId = currentId
        }
    },
})
<template>
    <div>
        <div class="eachList">
            <ul>
                <li>
                    <div class="eachOne">
                        <div class="down"></div>
                        <div class="left">
                            <div class="title">骗子转来26万元,竟有如此好事?</div>
                            <div class="date">国家反诈中心 2023-12-26</div>
                        </div>
                        <div class="pic">
                            <img src="https://tse3-mm.cn.bing.net/th/id/OIP-C.i7ntALi3e43gPKiMLFuccAHaEo?w=281&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                                alt="">
                        </div>
                    </div>
                </li>
                <li>
                    <div class="eachOne">
                        <div class="down"></div>
                        <div class="left">
                            <div class="title">骗子转来26万元,竟有如此好事?</div>
                            <div class="date">国家反诈中心 2023-12-26</div>
                        </div>
                        <div class="pic">
                            <img src="https://tse3-mm.cn.bing.net/th/id/OIP-C.i7ntALi3e43gPKiMLFuccAHaEo?w=281&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                                alt="">
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { Cloud } from "laf-client-sdk";

const cloud = new Cloud({
  baseUrl: "https://bsp268.laf.run", // 这里的 <AppID> 需要换成自己的 AppID
  getAccessToken: () => '', // 这里先为空
})

export default {
  data() {
    return {
      list: []
    }
  },
  async created() {
    try {
        const res = await cloud.invoke("selectData", { method: "GET" });

      this.list = res.data;
      console.log(this.list);
    } catch (error) {
      console.error(error);
    }
  }
}
</script>

<style lang="less" scoped>
.eachList {
    overflow: hidden;

    .eachOne {
        overflow: hidden;

        .down {
            margin-top: 5px;
            background: rgb(240, 235, 235);
            width: 100%;
            height: 0.5px;
        }

        .left {
            float: left;
            margin-left: 10px;
            height: 100px;
            position: relative;
            width: 220px;

            .title {
                margin-top: 15px;
                font-weight: bold;

            }

            .date {
                position: absolute;
                font-size: 12px;
                color: darkgray;
                bottom: 15px;
            }

        }

        .pic {
            flex: 0 0 57px;
            margin-right: 15px;
            float: right;
            width: 100px;
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 100%;
                border-radius: 5px;
            }
        }
    }
}
</style>
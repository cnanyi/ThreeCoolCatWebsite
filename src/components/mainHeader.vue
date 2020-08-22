<template>
    <div class="mainHeader">
        <el-row type="flex" align="middle">
            <div style="flex:1"/>
            <div style="width:1080px;display:flex;justify-content:space-around">
                <div class="title">
                    <span>三酷猫教育</span>
                </div>
                <el-menu :default-active="activeIndex" 
                    mode="horizontal"
                    background-color="#fff"
                    style="padding-left:40px"
                    >
                    <el-menu-item index="1">首页</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">课程介绍</template>
                        <el-menu-item index="2-1">互动课堂</el-menu-item>
                        <el-menu-item index="2-3">直播课程</el-menu-item>
                        <el-menu-item index="2-2">免费试听</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="3" >名师风采</el-menu-item>
                    <el-menu-item index="4" >精品图书</el-menu-item>
                    <el-menu-item index="5" >热点资讯</el-menu-item>
                    <el-menu-item index="6">联系我们</el-menu-item>
                </el-menu>
                <div style="">
                    <div><a style="color:#17BA7A" href="/admin/">登录</a></div>
                </div>
            </div>
            <div style="flex:1"></div>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'mainHeader',
    data() {
        return {
            activeIndex: '1'
        }
    },
    // 过滤器
    filter: {},

    // 计算属性
    computed: {

    },

    // 监听属性
    watch: {

    },

    // 模板编译挂载之后
    created() {
    },

    // 事件方法
    methods: {
      
    }

}
</script>

<style lang="less" scoped>
@main-color: #d9001b;
.mainHeader {
    line-height: 60px;
    .title {
        font-size:20px;
        font-weight:800;
        color:rgba(75,106,226,1);
    }
}
</style>

<template>
    <div>
        <div class="banner">
            <div style="flex:1" />
            <div class="title">
                大banner
            </div>
            <div style="flex:1" />
        </div>
        
        <el-row type="flex" justify="center" class="grid-row even">
            
            <el-col class="grid-block">
                <el-divider>推荐课程</el-divider>
                <div class="grid-content"></div>
                <div class="grid-content"></div>
                <div class="grid-content"></div>
                <div class="grid-content"></div>
                <div class="grid-content"></div>
                <div class="grid-content"></div>
                <div class="grid-content"></div>
                <div class="grid-content"></div>
            </el-col>
        </el-row>
       
        <el-row type="flex" justify="center" class="grid-row odd">
            <el-col class="grid-block">
                 <el-divider class="odd">精品图书</el-divider>
                <div class="grid-content"></div>
                <div class="grid-content"></div>
                <div class="grid-content"></div>
                <div class="grid-content"></div>
                <div class="grid-content"></div>
                <div class="grid-content"></div>
                <div class="grid-content"></div>
                <div class="grid-content"></div>
            </el-col>
        </el-row>

        <el-row type="flex" justify="center" class="grid-row even">
            
            <el-col class="grid-block">
                <el-divider>名师风采</el-divider>
                <div class="grid-content"></div>
                <div class="grid-content"></div>
                <div class="grid-content"></div>
                <div class="grid-content"></div>
                <div class="grid-content"></div>
                <div class="grid-content"></div>
                <div class="grid-content"></div>
                <div class="grid-content"></div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>

.banner {
    height: 320px;
    background:linear-gradient(135deg,rgba(15,67,255,1) 0%, rgba(35,173,255,1) 75%);
    position: relative;
    display: flex;
    .title {
        position: absolute;
        left: 20px;
        top: 40px;
        color: #fff;
        font-size: 28px;
    }
}
.grid-row {
    &.even {
        background-color: #fff;
    }
    &.odd {
        background-color: #f1f2f3;
    }
    .grid-block {
        width:1080px;display:flex;flex-wrap:wrap;justify-content:center;
        .grid-content {
            background-color: red;
            width: 200px;
            height: 160px;
            margin: 20px;
        }
    }
    
}

</style>

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
                <div v-for="course in courseList" :key="course.id" class="grid-content grid-book">
                    <div style="line-height:160px">
                        <router-link :to="{path: '/bookDetail', query: {courseId: course.id}}">
                            <img :src="getCoverUrl(course.cover)" :alt="course.name" width="100px" />
                        </router-link>
                    </div>
                    <div>
                        <div style="font-size:12px">《{{course.name}}》</div>
                        <!-- <div style="font-size:12px">{{book.author?book.author:'无名'}}&nbsp;著</div> -->
                        <div style="font-size:12px">{{course.intro}}&nbsp;</div>
                    </div>
                </div>
                
                <div class="grid-content grid-book" style="font-size:20px; line-height:160px;text-align:center;color:#666">更多</div>
            </el-col>
        </el-row>
       
        <el-row type="flex" justify="center" class="grid-row odd">
            <el-col class="grid-block">
                 <el-divider class="odd">精品图书</el-divider>
                <div v-for="book in bookList" :key="book.id" class="grid-content grid-book">
                    <div style="line-height:160px">
                        <router-link :to="{path: '/bookDetail', query: {bookId: book.id}}">
                            <img :src="getCoverUrl(book.cover)" :alt="book.name" width="100px" />
                        </router-link>
                    </div>
                    <div>
                        <div style="font-size:12px">《{{book.name}}》</div>
                        <div style="font-size:12px">{{book.author?book.author:'无名'}}&nbsp;著</div>
                        <div style="font-size:12px">{{book.sub_title}}&nbsp;</div>
                    </div>
                </div>
                
                <div class="grid-content grid-book" style="font-size:20px; line-height:160px;text-align:center;color:#666">更多</div>
            </el-col>
        </el-row>

        <el-row type="flex" justify="center" class="grid-row even">
            
            <el-col class="grid-block">
                <el-divider>名师风采</el-divider>
                <div v-for="teacher in teacherList" :key="teacher.id" class="grid-content grid-book">
                    <div style="line-height:160px">
                        <router-link :to="{path: '/bookDetail', query: {teacherId: teacher.id}}">
                            <img :src="getCoverUrl(teacher.cover)" :alt="teacher.name" width="100px" />
                        </router-link>
                    </div>
                    <div>
                        <div style="font-size:12px">{{teacher.name}}</div>
                    </div>
                </div>
                
                <div class="grid-content grid-book" style="font-size:20px; line-height:160px;text-align:center;color:#666">更多</div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import { getBooks } from '@/api/shop'
import { getCourses, getTeachers } from '@/api/school'
export default {
    data() {
        return {
            bookList: [],
            courseList: [],
            teacherList: [],
        }
    },
    mounted() {
        this.getBookList()
        this.getCourseList()
        this.getTeacherList()
    },
    methods: {
        getBookList() {
            /**
             * 当前页面展示最多7条数据， 最后一条是“更多”，跳转至图书列表页面
             */
            getBooks({page: 1, size: 7}).then(res=>{
                this.bookList = res
            })
        },
        getCourseList() {
            /**
             * 当前页面展示最多7条数据， 最后一条是“更多”，跳转至课程列表页面
             */
            getCourses({page: 1, size: 7}).then(res=>{
                this.courseList = res
            })
        },
        getTeacherList() {
            /**
             * 当前页面展示最多7条数据， 最后一条是“更多”，跳转至课程列表页面
             */
            getTeachers({page: 1, size: 7}).then(res=>{
                this.teacherList = res
            })
        },
        getCoverUrl(url) {
            return process.env.VUE_APP_BASE_API + url
        }
    }
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
            // background-color: red;

            width: 200px;
            height: 160px;
            margin: 20px;
        }
        .grid-book {
            background-color: #fff;
            border:1px solid #fdfdfd;
            border-radius: 4px;
            display:flex;
            justify-content: center;
        }
    }
    
}

</style>

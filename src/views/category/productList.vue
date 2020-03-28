<template>
        <div>
                <div>列表内容1212</div>
            <a-form :form="form">
                <a-form-item
                        label="姓名"
                        :label-col="{ span: 3 }"
                        :wrapper-col="{ span: 12 }"
                >
                    <a-input v-model="userName" />
                </a-form-item>
                <a-form-item
                        label="性别"
                        :label-col="{ span: 3 }"
                        :wrapper-col="{ span: 12 }"
                >
                    <a-radio-group name="radioGroup" :defaultValue="1" v-model="sex">
                        <a-radio :value="1">男</a-radio>
                        <a-radio :value="2">女</a-radio>
                        <a-radio :value="3">保密</a-radio>
                    </a-radio-group>
                </a-form-item>
                <a-form-item
                        label="金额"
                        :label-col="{ span: 3 }"
                        :wrapper-col="{ span: 12 }"
                >
                    <a-input placeholder="请输入金额"  v-model="money"/>
                </a-form-item>
                <a-form-item
                        :wrapper-col="{ span: 12, offset: 3 }"
                >
                    <a-button
                            type="primary"
                            html-type="submit" @click="addUser()"
                    >
                        添加
                    </a-button>
                </a-form-item>
            </a-form>
<!--列表-->
              <table class="tableBox" ref="table">
                        <tr>
                                <td>姓名</td>
                                <td>性别</td>
                                <td>金额</td>
                                <td>操作</td>
                        </tr>
                         <tr v-for="(list,index) in bannerArrObj">
                                <td>{{list.name}}</td>
                                <td>{{list.sex == 1 ? '男':'女'}}</td>
                                <td>¥{{list.money}}</td>
                                <td @click="delFun(list.id)">删除</td>
                        </tr>

                </table>
            <a-pagination showSizeChanger
                          :pageSize.sync="pageSize"
                          @change="pageChange"
                          :pageSizeOptions="pageSizeOptions"
                          :total="50" v-model="current"/>
            <div style="padding-bottom: 100px">
                <table class="tableBox" v-if="books.length">
                    <tr>
                        <td>序号</td>
                        <td>书籍名称</td>
                        <td>出版日期</td>
                        <td>价格</td>
                        <td>购买数量</td>
                        <td>操作</td>
                    </tr>
                    <tr v-for="(item,index) in books" :key="item.id">
                        <td>{{item.id}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.date}}</td>
                        <td>{{priceFun(item.price)}}</td>
                        <td><button @click="decrement(index)" :disabled="item.count <=1">-</button> {{item.count}} <button @click="increment(index)">+</button></td>
                        <td><a href="javascript:;" @click="removeFun(index)">移除</a></td>
                    </tr>
                    <tr>
                        <td colspan="6">总价:{{totalPriceFun}}</td>
                    </tr>
                </table>
                <h3 v-else>购物车为空</h3>
            </div>
        </div>

</template>

<script>
    export default {
        name: "productList",
        data(){
                return{
                    bannerArrObj:[],
                    isActiveColor:true,
                    formLayout: 'horizontal',
                    form: this.$form.createForm(this),
                    userName:'',
                    sex:'',
                    money:'',
                    pageSize: 20,
                    defaultPageSize:5,
                    pageSizeOptions:['5','10', '20', '30', '40'],
                    current:1,
                   books:[
                     {
                       id:1,
                       name:'算法导论',
                       date:'2020-1',
                       price:100,
                       count:'1'
                     },
                     {
                       id:2,
                       name:'javascript编程',
                       date:'2020-2',
                       price:99.00,
                       count:'1'
                     },
                     {
                       id:3,
                       name:'jquery入门',
                       date:'2020-3',
                       price:188.00,
                       count:'1'
                     }
                   ],

                }
        },
      watch:{
        pageSize(val) {
        },
        current(val) {
        }
      },
            methods:{

              removeFun(index){
                this.books.splice(index,1)
              },
              increment(index){
                this.books[index].count++

              },
              decrement(index){
                this.books[index].count--
              },
              priceFun(price){
                return  '￥'+price.toFixed(2)
              },
              getDataList(){
                this.$axios({
                  url:'http://flower-world.cn/index/test/index',
                  method:'get',
                  params:{
                    page:this.current,
                    limit:this.pageSize
                  }
                }).then(res=>{
                  if(res.data.error==0){
                    this.bannerArrObj=res.data.data
                    console.log( this.bannerArrObj)
                  }
                })
              },
              refeshFun(){
                this.getDataList()
              },
              addUser(){
                this.$axios({
                  url:'http://flower-world.cn/index/test/add',
                  method:'get',
                  params:{
                    username:this.userName,
                    sex:this.sex,
                    money:this.money
                  }
                }).then(res=>{
                  if(res.data.error==0){
                    alert(res.data.msg)
                    this.refeshFun()
                  }


                })
              },
              delFun(id){
                console.log(id);
                this.$axios({
                  url:'http://flower-world.cn/index/test/delete',
                  method:'get',
                  params:{
                    id:id
                  }
                }).then(res=>{
                  if(res.data.error==0){
                    alert(res.data.msg)
                    this.refeshFun()
                  }
                })
              },
              pageChange(current, pageSize){
                this.$axios({
                  url:'http://flower-world.cn/index/test/index',
                  method:'get',
                  params:{
                    page:current,
                    limit:pageSize
                  }
                }).then(res=>{
                  console.log(res)
                  if(res.data.error==0){
                    this.bannerArrObj=res.data.data
                  }
                })
              }
            },
      computed:{
        totalPriceFun(){
          let totalPrice=0
          // for (let i=0;i<this.books.length;i++){
          //   totalPrice+=this.books[i].price*this.books[i].count
          // }
          // return totalPrice
         let tt= this.books.map(function(val,index){
                return val.price*val.count;
         }).reduce(function (prevale,n) {
            return prevale + n
             },0)

         return tt;

        }
      },
        created(){
          this.getDataList()
         }
    }

</script>

<style scoped lang="less">
 .tableBox{
        width: 90%;margin:10px auto;border:1px solid #ddd;
         tr:nth-of-type(1){
                background-color: #f4f4f4;
         }
         tr td{
                 border:1px solid #ddd;
         }
 }

 .activeColor{color:red;}
</style>
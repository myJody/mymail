<template>
    <div>
        <swiper></swiper>
        <table class="tableBox">
            <tr class="boldTr">
                <td>用户名</td>
                <td>性别</td>
                <td>创建时间</td>
                <td>index</td>
                <td>id</td>
                <td>操作</td>
            </tr>
            <tr  v-for="(userList,index) in userLists" :key="userList.id" :class="{test:userList.id == 3 ? true : false}">
                <td>{{userList.username}}</td>
                <td>{{userList.sex}}</td>
                <td>{{userList.createDate}}</td>
                <td>{{index}}</td>
                <td>{{userList.id}}</td>
                <td><a href="javascript:;" @click="delFun(userList.id)">删除</a></td>
            </tr>
        </table>

    </div>
</template>

<script>
    import swiper  from 'components/content/swiper'
    export default {
        name: "home",
        data(){
            return {
                testData:[
                    {
                        name:'lan123',
                        key:0
                    },
                    {
                        name:'lan',
                        key:1
                    },
                    {
                        name:'huang',
                        key:2
                    }
                ],
                userLists:[
                    {
                        id:1,
                        username:'wuxiaolan',
                        sex:'女',
                        createDate:new Date().toLocaleDateString()
                    },
                    {
                        id:2,
                        username:'huangziluo',
                        sex:'女',
                        createDate:new Date().toLocaleDateString()
                    },
                    {
                        id:3,
                        username:'huangbin',
                        sex:'男',
                        createDate:new Date().toLocaleDateString()
                    },
                    {
                        id:4,
                        username:'aaaahuangbin',
                        sex:'男',
                        createDate:new Date().toLocaleDateString()
                    }
                ],
                useCount:[
                    {
                        list:{
                            price:33.44,
                            num:2,
                        },
                    },
                    {
                        list:{
                            price:229.4,
                            num:25,
                        },
                    },
                    {
                        list:{
                            price:200,
                            num:99
                        },
                    },
                    {
                        list:{
                            price:2200,
                            num:2,
                        },
                    },
                ],
                newData: [
                    {
                        title:'商品1',
                        goods_info:[
                            {
                                num:1,
                                price:100,
                            },
                            {
                                num:2,
                                price:100,
                            }
                        ]
                    },
                    {
                        title:'商品2',
                        goods_info:[
                            {
                                num:3,
                                price:200,
                            },
                            {
                                num:4,
                                price:200,
                            }
                        ]
                    },

                ],
                prizeArr:''
            }
        },
        components:{
            swiper
        },
        created:function() {
            this.mySum()
           // console.log(this.newData[0].goods_info.price)

            // let total = 0;
            // for(let i=0;i<this.useCount.length;i++){
            //     let prizeObj=this.useCount[i].list.price;
            //     let num=this.useCount[i].list.num;
            //     let totalPrice =(prizeObj*num);//单总价
            //
            //     total += totalPrice
            //
            //     this.prizeArr=(total)
            // }


            // for(let i=0;i<this.useCount;i++){
            //     for(let j=0;j<this.useCount[i].list;j++){
            //         console.log(this.useCount[i][j].list.price)
            //     }
            // }

            // let oldArr=[1,2,3,4,5];
            // let newArr=oldArr.forEach(function(value,index,arr){
            //     console.log(index);
            //     return arr[index]=value*10;
            //    // return value*10;
            // });
            // console.log(oldArr);
            // console.log(newArr);
        },
        methods:{
            delFun(id){
                let delIndex=this.userLists.findIndex(function (item) {
                    return item.id==id
                });
                this.userLists.splice(delIndex,1)
            },
            // mySum:function () {
            //   let total=0;
            //     this.newData.forEach(function (val) {
            //         let gooArr=val.goods_info
            //         gooArr.forEach(function (v) {
            //             v.price=v.price+1
            //             console.log(v.price)
            //             total += (v.num*v.price);
            //
            //         })
            //
            //     })
            //     return total;
            // }
            mySum(){
                //let total =0;
                let arrTest= this.newData.map(function (val) {
                    console.log(val)
                    val.goods_info.map(function (v) {
                        console.log(v);
                        v.price+=v.price+1;
                        console.log(val.price)
                        //total += (v.num*val.price);

                    })
                    return val.price
                })
                //return total;
                console.log(arrTest)
            }

        }
    }
</script>

<style scoped lang="less">
.tableBox{border:1px solid #ddd; width: 80%; margin:10px auto}
.boldTr td{font-weight: bold; background-color: #fac3c3
}
.tableBox tr td {border:1px solid #ddd; padding: 10px}

.test{
        background-color: #ff0000;
    }

/*.jz(@w,@h:400px,@c:red){
    width: @w;
    height: @h;
    background-color: @c;
}
.box{
        .jz(@w:900px);
    }

 */
</style>
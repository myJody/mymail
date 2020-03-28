import axios from 'axios'
export function request(config) {
   // return new Promise((resolve,reject)=>{
   //   //1.创建axios实例
   //   const instance=axios.create({
   //     baseURL:'http://123.207.32.32:8000/',
   //     timeout:5000
   //   })
   //   instance(config).then(res=>{
   //     resolve(res)
   //   }).catch(err=>{
   //     reject(err)
   //   })
   // })

  //因为axios本身返回的是promise 所以直接return 就可以
    const instance=axios.create({
      //baseURL:'http://123.207.32.32:8000/test',
      timeout:5000
    })

  instance.interceptors.request.use(config=>{

    return config
  },err=>{

  })
  instance.interceptors.response.use(config=>{
    return config
  },err=>{
  })
    return instance(config)
}



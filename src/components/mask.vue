<template>
    <div class="mask" >
       <div class="mask_cover">
          <div class="mask_title flex-row-end-center">
            <a @click="close" class="mask_close"></a>
           </div>
          <div class="mask_body"> 
             <p>提交成功！</p> 
             <p>点击右上角END结束</p>
          </div>
       </div>
      
    </div>

</template>
 <script lang="ts" setup>

import {defineProps, defineEmits} from 'vue'
const props = defineProps({
   showModel: {
    type: Boolean,
    default:false
  },
})




const emit = defineEmits(['update:showModel'])
const close =() => {
  emit('update:showModel', false)
}

// 使用defineEmits创建名称，接受一个数组
// const emits = defineEmits(['getItemFn'])

// const getItem = (item)=>{
//     console.log(item,list)
//     let arrayItem =ref(item)
//     console.log(arrayItem._rawValue)
//     //传递给父组件

//   emits('getItemFn',arrayItem._rawValue)
  
// }
</script>

<style lang="less">
.mask{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100vh;
    background-color:rgba(0,0,0,0.7);
    z-index:10;
    .mask_cover{
        width:5.8rem;
        border-radius:.3rem;
        background-color:#ffffff;
        padding:0.1rem .3rem .3rem;
        position:fixed;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);
        .mask_title{
            text-align:right;
             .mask_close{
                display:block;
                width:.5rem;
                height:.4rem;
                background:url(../assets/images/close.png) right no-repeat;
            background-size:.16rem .15rem;
            }
        }
       
         .mask_body p{
             margin-bottom:.1rem;
             text-align:center;
         }
        .mask_body p:first-child{
            color:#e60012;
            font-size:.36rem;
           
        }
         .mask_body p:last-child{
            color:#333333;
            font-size:.3rem;
        }
    }
}
</style>
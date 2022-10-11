<template>
    <div v-for="item,index in list.children" class="radio-box">
      
       <label :for="item.question+index" class="flex-row-center-center"  :class="{active:list.checked==item}"> 
       <input type='radio' v-model="list.checked" :value="item" @change.self="getItem(item)"  :id="item.question+index" />
         {{item.val}}
         <span v-if="list.id==1&&index<4" @click.stop.prevent="tip(true,index)">?
          <div class="label_txt" v-if="showTxt&&showIndex==index" v-html='txtArr[index]'></div>
         </span>
        
       </label>
    </div>

</template>


 <script lang="ts" setup>

import {ref,toRefs, defineProps, defineEmits,onMounted,onUnmounted} from 'vue'
const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
})




// 设置提示框内容
const txtArr = ref([
  '只要新产品的价格比在院同类产品都低，就同意引进该新产品',
  '只要临床强烈要求，就同意引进该新产品',
   `只要新产品有充足的卫生经济学证据，能够带来更高的性价比，就同意引进该新产品`,
  `<P>当新产品能满足以下条件之一，就同意引进该新产品：</p>
   <P>1）新产品有充足的临床证据，能够带来更好的临床效果</p>
   <P>2）新产品能够帮助开展新的临床手术，提高诊疗水平</p>`
  
])

// 使用defineEmits创建名称，接受一个数组
const emits = defineEmits(['getItemFn'])

const getItem = (item)=>{
    console.log(item,list)
    let arrayItem =ref(item)
    console.log(arrayItem._rawValue)
    //传递给父组件

  emits('getItemFn',arrayItem._rawValue)
  
}
const showTxt = ref(false);
const showIndex = ref('');
const time = ref('');
const tip = (isshow,index)=>{
  console.log(isshow,'123123')
   showTxt.value = isshow
   showIndex.value = index;
}

onMounted(() => {
    document.body.addEventListener('click',(e)=>{
        console.log(e,111,'dsdfsdf')
      showTxt.value = false;
    },false)
    
    })
 
  onUnmounted(() => {
    document.body.removeEventListener('click', function (event) {
 
  },false);

  })


</script>

<style lang="less">
.radio-box{
   
    label{
        width:100%;
        height:100%;
        position: relative;
        width:100%;
        height:.84rem;
        border-radius:.1rem;
        border:1px solid #999999;
        margin-bottom:.2rem;
        span{
              display: block;
              width: .3rem;
              height: .3rem;
              border-radius: 50%;
              color:#ffffff;
              background: #e60012;
              text-align: center;
              line-height: .3rem;
              margin-left:.3rem;
              position:relative;
               .label_txt{
          width:5.6rem;
          padding:.3rem;
          border-radius:.3rem;
          border:1px solid #e60012;
          font-size:.28rem;
          color:#e60012;
          background-color:#ffffff;
          position:absolute;
          z-index:1;
          top: .6rem;
          right: -1.1rem;
        text-align: justify;
        line-height: .4rem;
       }
       .label_txt::after{
        content:'';
        display:block;
        width:.23rem;
        height:.18rem;
        background:url(../assets/images/ait.png) center no-repeat;
        background-size:.23rem .18rem;
        position: absolute;
        top: -.18rem;
        right: 1.1rem;
       }
        }
       
      
    }
       
    label.active{
          background-color:#e60012;
          border:none;
          color:#ffffff;
          span{
              background: #c8c8c8;
          }
    }
    
}
.radio-box:last-child{
    margin:0
}
</style>

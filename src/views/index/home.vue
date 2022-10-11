<template>
    <div class="wrap">
       <div class="tip flex-row-center-center ">说明：由销售同事基于对该非临专家的理念认知进行勾选</div>
        <div v-for="item in vm" class="content">
           <h2>{{item.question}}</h2>
           <itembox :list="item" @getItemFn="getItem"></itembox>
        </div>
        <div class="footer-btn" @click="saveSurvey">提交</div>
        <div class="tooltip" v-if='showTip'>{{tooltip}}</div>
        <showmodel v-model:showModel="showModel" v-if="showModel" />
    </div>
    <!-- <div> -->
        <!-- 新特性支持多个根节点 -->
        <!--<script>
        // setup第二种写法
        import { ref, reactive, defineComponent } from 'vue'
        export default defineComponent({
            props: {
            collectionName: String
            },
            setup(props) {
            const count = ref(0)
            const book = reactive({ title: 'Vue 3 Guide' })

            // 暴露给 template
            return {
                count,
                book
            }
            }
        })
        </script> -->
    <!-- </div> -->
</template>


 <script lang="ts" setup>
 import itembox from '@/components/checkitem.vue';
 import showmodel from '@/components/mask.vue';
//  setup 两种写法 直接写在标签中，语法糖写的，内容直接暴露给模板
import {ref, reactive,defineComponent } from 'vue';
const vm = reactive([{
        question:'1. 请选择该非临专家的准入理念（单选）',
         id:'1',
        children:[{
            sid:'KEYMESSAGE',
            question:'1. 请选择该非临专家的准入理念（单选）',
            val:'非循证理念-基于价格',
        },{
            sid:'KEYMESSAGE',
            question:'1. 请选择该非临专家的准入理念（单选）',
            val:'非循证理念-基于临床需求',
        },{
            sid:'KEYMESSAGE',
            question:'1. 请选择该非临专家的准入理念（单选）',
            val:'基于卫生经济学价值',
        },{
            sid:'KEYMESSAGE',
            question:'1. 请选择该非临专家的准入理念（单选）',
            val:'基于临床应用价值',
        },{
            sid:'KEYMESSAGE',
            question:'1. 请选择该非临专家的准入理念（单选）',
            val:'不清楚',
        }]
    },{
     question:'2. 请选择该非临专家的产品理念（单选）',
      id:'2',
        children:[{
            sid:'KEYMESSAGE',
            question:'2. 请选择该非临专家的产品理念（单选）',
            val:'不认可止血材料',
        },{
            sid:'KEYMESSAGE',
            question:'2. 请选择该非临专家的产品理念（单选）',
            val:'认可止血材料有用',
        },{
            sid:'KEYMESSAGE',
            question:'2. 请选择该非临专家的产品理念（单选）',
            val:'认可止血材料品类有差异',
        },{
            sid:'KEYMESSAGE',
            question:'2. 请选择该非临专家的产品理念（单选）',
            val:'认可强生止血产品',
        },{
            sid:'KEYMESSAGE',
            question:'2. 请选择该非临专家的产品理念（单选）',
            val:'不清楚',
        }]
    }]);
     const tooltip = ref('请先进行选择');
     const showTip = ref(false);
     const showModel = ref(false);
     
const getItem =(item)=>{
  console.log(JSON.parse(JSON.stringify(vm)),'vm[1]vm[1]vm[1]vm[1]vm[1]',item,'item==========')
}
const saveSurvey = ()=>{
    console.log(JSON.parse(JSON.stringify(vm)))
    let isValid = []
    JSON.parse(JSON.stringify(vm)).forEach(element => {
        if(element.checked){
            isValid.push(element.checked)
        }
    })
    console.log(isValid)
    if(isValid.length==JSON.parse(JSON.stringify(vm)).length){
         showModel.value = true;
      if(window.parent.saveSurvey){
          window.parent.saveSurvey('理念调研问卷',isValid,'理念调研问卷')

       }  
    }else{
     showTip.value = true
      setTimeout(function () {
        showTip.value = false
       }, 5500);
    }
    
}



</script>

<style lang="less">
  .wrap{
    width:100%;
    min-height:100vh;
    background-color: #fafafa;
    padding:.2rem .3rem;
    .tip{
        font-size:.24rem;
        color:#353535;
        padding-left:.5rem;
        background:url(../../assets/images/tip.png) .29rem no-repeat;
        background-size:.29rem .29rem;
        margin-bottom:.3rem;
    }
    .content{
        padding: 0.3rem;
        border-radius: 0.1rem;
        background-color: #ffffff;
        box-shadow: 0 3px 10px #bcbcbc;
        margin-bottom: .3rem;
        h2{
            font-size:.3rem;
            color:#222222;
            margin-bottom:.2rem;
        }
    }
    .footer-btn{
        width:.6.3rem;
        height:.8rem;
        margin:.4rem auto;
        background:#e60012;
        border-radius:.4rem;
        font-size:.36rem;
        color:#ffffff;
        text-align:center;
        line-height:.8rem;
    }
    .tooltip{
        position:fixed;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);
        background-color:rgba(0,0,0,0.5);
        padding:.1rem;
        border-radius:.04rem;
        color:#ffffff;
        min-width:2rem;
        text-align:center;
    }
  }
</style>

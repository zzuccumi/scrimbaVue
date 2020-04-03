Vue.component('todo-item',{
    template: '<li>굳이 왜 이렇게 쓰는지는 모르겠지만</li>'
})

var app = new Vue({
    el:'#app',
    data:{
        message:'이런거 한번에 써줄 순 없나 ㅋ',
        seen:true,
        todos :[
            {text :'나 지금 영국이야'},
            {text :'어떤 선택을 하든 잘될거야'},
            {text :'온 우주가 날 도와주고 있거든'}
        ],
        btnMsg: 'Hello Vue!!',
        btnMsg02: 'Hello Vue!!',
        inputMsg:'I am in England'
    },
    methods:{
        reverseMsg:function(){
            this.btnMsg = this.btnMsg.split('')
        },
        reverseMsg02:function(){
            this.btnMsg02 = this.btnMsg02.split('').reverse().join('')
        }
    }
})

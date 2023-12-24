/**
 * @func 就地编辑
 * @params {id:string ,parent:string,value:string}
 */
function EditInPlace(id,parent,value){
    this.id = id;
    this.parent = parent;
    this.value =value || "这个家伙很懒，什么都没有留下"; 
    this.createElements()//动态装配html结点
    this.attachEvents();
}
EditInPlace.prototype = {
    createElements:function(){
        this.containerElement = document.createElement('div');
        this.containerElement.id= this.id;
        //签名文字部分
        this.staicElement = document.createElement('span');
        this.staicElement.innerText = this.value
        this.containerElement.appendChild(this.staicElement);
        //输入框
        this.fieldElement = document.createElement('input')
        this.fieldElement.type = 'text'
        this.fieldElement.value = this.value;
        this.containerElement.appendChild(this.fieldElement);
        //save 确认
        this.saveButton = document.createElement('input');
        this.saveButton.type = 'button'
        this.saveButton.value = '保存' 
        this.containerElement.appendChild(this.saveButton)
        //取消按钮
        this.cancelButton = document.createElement('input')
        this.cancelButton.type = 'button'
        this.cancelButton.value = '取消' 
        this.containerElement.appendChild(this.cancelButton)


        this.parent.appendChild(this.containerElement)
        this.converToText();

    },
    converToText:function(){
        this.staicElement.style.display = 'inline';
        this.fieldElement.style.display = 'none'
        this.saveButton.style.display = 'none'
        this.cancelButton.style.display = 'none'
    },
    converToEdit:function(){
        this.staicElement.style.display = 'none';
        this.fieldElement.style.display = 'inline'
        this.saveButton.style.display = 'inline'
        this.cancelButton.style.display = 'inline'
    },
    attachEvents:function(){
        //第一种方法
        // this.staicElement.addEventListener('click',()=>{
        //     //this丢失 用箭头函数
        //     this.converToEdit();
        // })
        //第二种
        // var that= this
        // this.staicElement.addEventListener('click',function(){
        //     that.converToEdit();
        // })
        //第三种
        var that = this
        this.staicElement.addEventListener('click',this.converToEdit.bind(this))
        this.cancelButton.addEventListener('click',this.converToText.bind(this))
        this.saveButton.addEventListener('click',function(){
            var value = that.fieldElement.value;
            that.staicElement.innerText = value;
            that.converToText();
        })
    }

}
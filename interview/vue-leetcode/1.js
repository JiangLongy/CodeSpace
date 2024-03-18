//patchs 的过程 有哪些改变要收集
// [{type:patchFlag}]
// patchFlag 变量 响应式业务后生成 哪种类型的改变


const PatchFlags = {
    CLASS:1,
    text:2,
    STYLE:4,
    ELEMENT:8,
    COMPONENT:16
}
patchFlag = 1
if(patchFlag & PatchFlags.CLASS){
    if(ordProps.class !== new ordProps.class){
        hotPatchProp(el,'class',null,newProps.class,isSVG)
    }
    // patchFlag == PatchFlags.STYLE
}else if(patchFlag & PatchFlags.STYLE){ // 
    
}else if(shapeFlag & PatchFlags.COMPONENT){

}else if(shapeFlag & PatchFlags.ELEMENT){

}


//0010
//0001

//0100
//0011
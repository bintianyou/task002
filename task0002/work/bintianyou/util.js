/**
 * Created by sky on 2015/6/8.
 */
// �ж�arr�Ƿ�Ϊһ�����飬����һ��boolֵ
function isArray(arr){
    document.write(arr.constructor ===Array);
}

// �ж�fn�Ƿ�Ϊһ������������һ��boolֵ
function isFunction(a) {
    document.write( typeof(a)==='function' );
}
//��������
var  arr = [0,1,2,3];
var a = function open(){};
isArray(arr);
isFunction(a);



//��¡
function cloneObject(src) {
    if( typeof(src) === "number"|| typeof(src) === "boolean" || typeof(src) === "string"){
        var clone = src;
        return clone;
    }

    if(typeof(src) == "Date"){
        var clone = new Date(src.getData());
    }

    if(typeof(src) == "Array"){
        var clone = [];
        for(var i=0; i<src.length;i++){
            clone[i] = src[i];
        }
        return clone;
    }

    if(src instanceof Object){
        var clone = {};
        for(var i in src){
            clone[i] = cloneObject(src[i]);
        }
        return clone;
    }
}

var srcObj = {
    a: 1,
    b: {
        b1: ["hello", "hi"],
        b2: "JavaScript"
    }
};
var abObj = srcObj;
var tarObj = cloneObject(srcObj);

srcObj.a = 2;
srcObj.b.b1[0] = "Hello";

document.write(abObj.a);
document.write(abObj.b.b1[0]);

document.write(tarObj.a);
document.write(tarObj.b.b1[0]);
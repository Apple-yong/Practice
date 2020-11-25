class jQuery {
    constructor(selector){
        const result = document.querySelectorAll(selector)
        const length = result.length
        for(let i=0; i < length; i++){
            this[i] = result[i]
        }
        this.length = length
        this.selector = selector
    }
    get(index){
        return this[index]
    }
    each(fn) {
        for(let i=0; i<this.length; i++){
            const elem = this[i]
            fn(elem)
        }
    }
    on(type, fn){
        return this.each(elem => {
            elem.addEventListener(type, fn, false)
        })
    }
}

// 弹窗插件
jQuery.prototype.dialog = function (info) {
    alert(info)
}


// promise加载图片
function loadImg(src) {  
    return new Promise((resolve, reject) => {
        const img = document.createElement('img')
        img.onload = () => {
            resolve(img)
        }
        img.onerror = () => {
            const err = new Error(`图片加载失败 ${src}`)
            reject(err)
        }
        img.src = src
    });
}

const url = "https://upload.jianshu.io/users/upload_avatars/4820992/9165dbb8-9df8-467a-af97-773c0e0a2d05.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240"
loadImg(url).then(img =>{
    console.log(img.width)
    return img
}).then(img =>{
    console.log(img.height)
}).catch(ex => console.log(ex))


// 手写bind函数
Function.prototype.bind1 = function () {
    // 将参数解析为数组  
    const args = Array.prototype.slice.call(arguments)
    // 获取this(去除数组第一项，数组剩余的就是传递的参数)
    const t = args.shift()
    const self = this  // 当前函数
    // 返回一个函数
    return function () {  
        // 执行原函数，并返回结果
        return self.apply(t, args)
    }
}

// 执行例子
function fn1(a,b,c) {  
    console.log('this', this);
    console.log(a,b,c)
    return 'this is fn1'
}

const fn2 = fn1.bind1({x:100}, 10, 20, 30)
const res = fn2()
console.log(res);


// Promise执行案例
Promise.resolve().then(() =>{
    console.log('1');
}).catch(() => {
    console.log('2');
}).then(() => {
    console.log('3');
})


Promise.resolve().then(() =>{
    console.log('1');
    throw new Error("error1")
}).catch(() => {
    console.log('2');
}).then(() => {
    console.log('3');
})


Promise.resolve().then(() =>{
    console.log('1');
    throw new Error("error1")
}).catch(() => {
    console.log('2');
}).catch(() => {
    console.log('3');
})

// 执行async函数，返回的是Promise对象
async function fn1() {  
    return 100
}
const res1 = fn1()
console.log(res1);

// await相当于Promise的then
(async function () {  
    const p1 = Promise.resolve(300)
    const data = await p1    // await相当于Promise的then，resolved才会执行
    console.log(data);
})()

(async function () {  
    const data = await 200    // await相当于Promise的then，resolved才会执行
    console.log(data);
})()


async function fn1() {  
    return Promise.resolve(200)
}
(async function () {  
    const data = await fn1()    
    console.log(data);
})()

// try...catch可捕获异常，代替了Promise的catch
(async function () {  
    const p1 = Promise.reject("err1")
    try {
        const res = await p4
        console.log(res);
    } catch (error) {
        console.log(error);
    }
})()
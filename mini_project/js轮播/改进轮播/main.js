let $buttons = $('#buttonWrapper>button')
let $images = $('#slides>img')
let current = 0

makeSlides()
$("#slides").css({transform:'translateX(-300px)'})
bindEvents()
$(next).on('click', function(){
    goToSlide(current+1)
})
$(previous).on('click', function(){
    goToSlide(current-1)
})

let timer = setInterval(function(){
    goToSlide(current+1)
},3000)
$('.container').on('mouseenter', function(){
    window.clearInterval(timer)
}).on('mouseleave', function(){
    timer = setInterval(function(){
        goToSlide(current+1)
    },3000)
})

function bindEvents() {
    $buttons.click(function(){
        let index = $(this).index()
        goToSlide(index)
    })
}

function goToSlide(index) {
    if(index > $buttons.length-1){
        index = 0
      }else if(index <0){
        index = $buttons.length - 1
    }  
    if(current === $buttons.length -1 && index === 0){
        //最后一张到第一张
        $("#slides").css({transform:`translateX(${-($buttons.length + 1) * 300}px)`})//假的
            .one('transitionend', function () {
                $("#slides").hide().offset()
                $("#slides").css({transform:`translateX(${-(index+1)*300}px)`}).show()
            })
    }else if(current === 0 && index === $buttons.length - 1){
        // 第一张到最后一张
        $("#slides").css({transform:`translateX(0px)`})
                .one('transitionend', function(){
                $("#slides").hide().offset()
                $("#slides").css({transform:`translateX(${-(index+1)*300}px)`}).show()
            })
    }else{
        $("#slides").css({transform:`translateX(${- (index + 1) * 300}px)`})
    }
    current = index
}



function makeSlides() {  
    let $firstCopy = $images.eq(0).clone(true)
    let $lastCopy = $images.eq($images.length-1).clone(true)
    $("#slides").append($firstCopy)
    $("#slides").prepend($lastCopy)
}
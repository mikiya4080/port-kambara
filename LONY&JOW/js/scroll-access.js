animation03_list = document.querySelectorAll('.Accessanime');
const animation03 = ()=>{
    let margin = 200;
    for(i = 0 ; i < animation03_list.length; i++){
        let element_top = animation03_list[i].offsetTop;
        let nowDisplay = window.innerHeight + window.scrollY;
        if(nowDisplay > element_top + margin){
            animation03_list[i].classList.add('on-active');
        }
        if(nowDisplay < element_top){
            if(animation03_list[i].classList.contains('on-active')){
                animation03_list[i].classList.remove('on-active');
            }
        }
    }
}
window.addEventListener('load', animation03);
window.addEventListener('scroll', animation03);
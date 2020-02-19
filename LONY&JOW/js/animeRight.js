animation02_list = document.querySelectorAll('.anime-right');
const animation02 = ()=>{
    let margin = 200;
    for(i = 0 ; i < animation02_list.length; i++){
        let element_top = animation02_list[i].offsetTop;
        let nowDisplay = window.innerHeight + window.scrollY;
        if(nowDisplay > element_top + margin){
            animation02_list[i].classList.add('is-active');
        }
        if(nowDisplay < element_top){
            if(animation02_list[i].classList.contains('is-active')){
                animation02_list[i].classList.remove('is-active');
            }
        }
    }
}
window.addEventListener('load', animation02);
window.addEventListener('scroll', animation02);
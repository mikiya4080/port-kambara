animation_list = document.querySelectorAll('.anime');
const animation = ()=>{
    let margin = 200;
    for(i = 0 ; i < animation_list.length; i++){
        let element_top = animation_list[i].offsetTop;
        let nowDisplay = window.innerHeight + window.scrollY;
        if(nowDisplay > element_top + margin){
            animation_list[i].classList.add('is-active');
        }
        if(nowDisplay < element_top){
            if(animation_list[i].classList.contains('is-active')){
                animation_list[i].classList.remove('is-active');
            }
        }
    }
}
window.addEventListener('load', animation);
window.addEventListener('scroll', animation);
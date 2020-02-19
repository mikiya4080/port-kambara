animation01_list = document.querySelectorAll('.anime-left');
const animation01 = ()=>{
    let margin = 200;
    for(i = 0 ; i < animation01_list.length; i++){
        let element_top = animation01_list[i].offsetTop;
        let nowDisplay = window.innerHeight + window.scrollY;
        if(nowDisplay > element_top + margin){
            animation01_list[i].classList.add('is-active');
        }
        if(nowDisplay < element_top){
            if(animation01_list[i].classList.contains('is-active')){
                animation01_list[i].classList.remove('is-active');
            }
        }
    }
}
window.addEventListener('load', animation01);
window.addEventListener('scroll', animation01);
import print from './b';

const creat = ()=>{
    const ele = document.createElement("span");
    ele.innerHTML = print();
    return ele;
}

export default document.body.appendChild(creat());
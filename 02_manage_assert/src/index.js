import './style.css'

const create = () => {
    const newEle = document.createElement("div");
    newEle.classList.add('hello');
    return newEle;
}

document.body.appendChild(create());
import { hello, add } from "./util";
import "./css/style.css";
import logo from "./images/네즈코.jpeg";

const text = hello("Webpack Setting~~!! ");
const num = add(1, 2);
const img = `<img src="${logo}" alt="로고" />`;

document.getElementById("root").innerHTML = img + text + num;

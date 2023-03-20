import SetWindowSize from "./setWindowSize";

export default function IsDesktop() {
    const windowSize=SetWindowSize();
    if(windowSize > 600)return true;
    else return false;
}

type msg = string;
type Options = {
    text: string;
    duration: number;
    type: string;
};
type style = {
    [key: string]: string | number;
};

export default function LLmessage(params: msg | Options) {
    let msg: string,
        time: number = 3000;
    if (typeof params === 'string') {
        msg = params;
    } else {
        msg = params.text;
        time = params.duration || 3000;
    }
    if (!msg) {
        return;
    }
    popupMsg(msg, time);
}

function popupMsg(msg: string, time: number) {
    const style: style = {
        padding: '5px 10px',
        'border-radius': '5px',
        background: '#ccc',
        color: '#fff',
        'max-width': '80%',
        position: 'fixed',
        'margin-top': '-50px',
        top: '50px',
        left: '50%',
        transform: 'translateX(-50%)',
        transition: 'all .3s',
        'word-break': 'break-all'
    };
    const box = document.createElement('div');
    box.innerText = msg;
    Object.assign(box.style, style);
    document.body.appendChild(box);
    box.style.marginTop = '0';
    setTimeout(() => {
        box.style.marginTop = '-50px';
        setTimeout(() => {
            document.body.removeChild(box);
        }, 300);
    }, time);
}

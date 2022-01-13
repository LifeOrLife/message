type msg = string;
type Options = {
    text: string;
    duration: number;
    style?: style;
};
type style = {
    [key: string]: string | number;
};

export default function LLmessage(params: msg | Options) {
    let msg: string,
        time: number = 3000,
        style: style | undefined;
    if (typeof params === 'string') {
        msg = params;
    } else {
        msg = params.text;
        time = params.duration || 3000;
        style = params.style;
    }
    if (!msg) {
        return;
    }
    popupMsg(msg, time, style);
}

function popupMsg(msg: string, time: number, style?: style) {
    const _style: style = {
        padding: '5px 10px',
        'border-radius': '5px',
        background: '#ccc',
        color: '#fff',
        'max-width': '80%',
        position: 'fixed',
        top: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        opacity: 0,
        transition: 'all .3s',
        'word-break': 'break-all'
    };
    const box = document.createElement('div');
    box.innerText = msg;
    Object.assign(box.style, { ..._style, ...style });
    document.body.appendChild(box);
    setTimeout(() => {
        box.style.top = '50px';
        box.style.opacity = '1';
    });
    setTimeout(() => {
        box.style.top = '0';
        setTimeout(() => {
            document.body.removeChild(box);
        }, 300);
    }, time);
}

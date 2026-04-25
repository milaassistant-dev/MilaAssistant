const btn_1 = document.getElementById('btn_1');
btn_1.onclick = function () {
    window.location.href = 'https://github.com/website7777/mila/releases'
};
const btn_2 = document.getElementById('btn_2');
btn_2.onclick = function () {
    window.location.href = 'https://github.com/website7777/mila/releases'
};
const btn_3 = document.getElementById('btn_3');
btn_3.onclick = function () {
    window.location.href = '#third'
};
const btn_4 = document.getElementById('btn_4');
btn_4.onclick = function () {
    window.location.href = 'https://github.com/website7777/mila/releases'
};
const h2_11 = document.getElementById('h2_11');
h2_11.onclick = function () {
    window.location.href = '#first'
};
const p12 = document.getElementById('p12')
const p13 = document.getElementById('p13')
const p14 = document.getElementById('p14')
const p15 = document.getElementById('p15')
const p16 = document.getElementById('p16')
const p17 = document.getElementById('p17')
p12.onclick = function () {
    p13.style.opacity = p13.style.opacity === '1' || p13.style.opacity === '100' ? '0' : '1'
}
p14.onclick = function () {
    p15.style.opacity = p15.style.opacity === '1' || p15.style.opacity === '100' ? '0' : '1'
}
p16.onclick = function () {
    p17.style.opacity = p17.style.opacity === '1' || p17.style.opacity === '100' ? '0' : '1'
}
const oportunity = document.getElementById('oportunity');
oportunity.onclick = function () {
    window.location.href = '#third'
};
const pc_manage = document.getElementById('pc_manage');
pc_manage.onclick = function () {
    window.location.href = '#fourth'
};
const telegram = document.getElementById('telegram');
telegram.onclick = function () {
    window.location.href = '#fivth'
};
const FAQ = document.getElementById('FAQ');
FAQ.onclick = function () {
    window.location.href = '#ninth'
};

const androidBtnDownload = document.getElementById('android_btn_download');
if (androidBtnDownload) {
    androidBtnDownload.onclick = function () {
        window.location.href = 'https://github.com/website7777/mila/releases'
    };
}

const androidBtnFeatures = document.getElementById('android_btn_features');
if (androidBtnFeatures) {
    androidBtnFeatures.onclick = function () {
        window.location.href = '#third'
    };
}
const AndroiFaq_h4_1 = document.getElementById('AndroiFaq_h4_1')
const AndroiFaq_h4_2 = document.getElementById('AndroiFaq_h4_2')
const AndroiFaq_h4_3 = document.getElementById('AndroiFaq_h4_3')
const AndroiFaq_p1 = document.getElementById('AndroiFaq_p1')
const AndroiFaq_p2 = document.getElementById('AndroiFaq_p2')
const AndroiFaq_p3 = document.getElementById('AndroiFaq_p3')

function toggleOpacity(el) {
    if (!el) return;
    el.style.opacity = el.style.opacity === '1' || el.style.opacity === '100' ? '0' : '1'
}

if (AndroiFaq_h4_1) {
    AndroiFaq_h4_1.onclick = function () {
        toggleOpacity(AndroiFaq_p1)
    }
}

if (AndroiFaq_h4_2) {
    AndroiFaq_h4_2.onclick = function () {
        toggleOpacity(AndroiFaq_p2)
    }
}

if (AndroiFaq_h4_3) {
    AndroiFaq_h4_3.onclick = function () {
        toggleOpacity(AndroiFaq_p3)
    }
}
const footer_telegram = document.getElementById('footer_telegram');
footer_telegram.onclick = function () {
    window.location.href = 'https://t.me/mila_assistant12345'
};
const footer_github = document.getElementById('footer_github');
footer_github.onclick = function () {
    window.location.href = 'https://github.com/website7777/mila/releases'
};
footer_support.onclick = function () {
    window.location.href = 'https://t.me/Mila_Assistant_Support_bot'
};
const android_app = document.getElementById('Android')
android_app.onclick = function () {
    window.location.href = '#android-app'
};

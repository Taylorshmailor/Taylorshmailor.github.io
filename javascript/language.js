const enbtn = 'en';
const esbtn = 'es';
const vnbtn = 'vn';
function change_text(){
    if (btn.textContent.toLowerCase().includes(enbtn.toLowerCase())) {
        btn.textContent = esbtn;
    } else if (btn.textContent.toLowerCase().includes(esbtn.toLowerCase())) {
        btn.textContent = vnbtn;
    } else {
        btn.textContent = enbtn;
    }
}

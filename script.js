function moveButton() {
    const btn = document.getElementById('noBtn');
    
    // คำนวณขอบเขตหน้าจอโดยหักลบขนาดปุ่มออก
    const padding = 50; // เว้นระยะขอบจอ
    const maxWidth = window.innerWidth - btn.clientWidth - padding;
    const maxHeight = window.innerHeight - btn.clientHeight - padding;
    
    // สุ่มตำแหน่งใหม่
    const randomX = Math.max(padding, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxHeight));
    
    // เปลี่ยนเป็น Fixed เพื่อให้กระโดดไปมาทั่วจอ
    btn.style.position = 'fixed';
    btn.style.left = randomX + 'px';
    btn.style.top = randomY + 'px';
    btn.style.zIndex = '1000';
}

function handleForgive() {
    const mainEmoji = document.getElementById('mainEmoji');
    const title = document.getElementById('title');
    const message = document.getElementById('message');
    const successMsg = document.getElementById('success');
    const btnGroup = document.querySelector('.btn-group');

    mainEmoji.innerText = '🥰💙';
    title.innerText = 'เย้ๆๆๆๆ';
    message.innerText = 'พี่จะรักและดูแลตัวมิ้นให้ดีที่สุดเลยยยยยยย!';
    
    successMsg.style.display = 'block';
    btnGroup.style.display = 'none';
    
    document.body.style.backgroundColor = '#dcf0ff';

}

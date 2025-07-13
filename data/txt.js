// 等页面加载完成后再执行
window.addEventListener('DOMContentLoaded', () => {
    fetch('./data/note.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error('无法加载 note.txt：' + response.status);
            }
            return response.text();
        })
        .then(text => {
            const logContent = document.getElementById('log-content');
            if (logContent) {
                logContent.textContent = text;
            } else {
                console.error('找不到 #log-content 元素');
            }
        })
        .catch(err => {
            console.error('加载 note.txt 出错:', err);
        });
});

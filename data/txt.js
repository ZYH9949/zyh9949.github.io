// 等页面加载完成后再执行
window.addEventListener('DOMContentLoaded', () => {
    // 从 ./data/note.txt 获取文本
    fetch('./data/note.txt')  // ✅ 路径写对
        .then(response => {
            if (!response.ok) {
                throw new Error('无法加载 note.txt：' + response.status);
            }
            return response.text(); // ✅ 正确处理文本内容
        })
        .then(text => {
            // 找到页面上的 #log-content 元素
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

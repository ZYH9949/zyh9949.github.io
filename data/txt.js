// 等页面加载完成后再执行
window.addEventListener('DOMContentLoaded', () => {
    // 从 data/note.txt 获取文本
    fetch('http://zyh9949.top:5245/d/zz%E7%A7%81%E6%9C%89%E7%9B%AE%E5%BD%95/%E7%AC%AC%E4%B8%89%E6%96%B9%E4%BA%91%E7%9B%98%E6%9C%8D%E5%8A%A1/ZCloud/webnote.txt?sign=Qh8KLQqD10DOz9zvKyi66oksF_GI0qxDTUh-lrdfVr8=:0')
        .then(response => {
            if (!response.ok) {
                throw new Error('无法加载 note.txt：' + response.status);
            }
            return response.text(); // 获取文本内容
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

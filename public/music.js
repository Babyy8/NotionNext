// 创建一个 div 容器
var musicDiv = document.createElement('div');
// 设置容器的 class (使用 Tailwind CSS 类名)
musicDiv.className = 'fixed bottom-4 left-0 right-0 z-50 flex justify-center animate__animated animate__fadeInUp';
// 设置 ID 以便后续控制
musicDiv.id = 'my-custom-music-player';

// 设置内部 HTML (就是刚才那个 iframe 代码)
musicDiv.innerHTML = `
  <div class="backdrop-blur-xl bg-white/60 dark:bg-black/50 border border-gray-200/50 dark:border-gray-700/50 p-1.5 rounded-full shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 hover:scale-105 hover:bg-white/80 dark:hover:bg-black/70 overflow-hidden" style="display:flex; align-items:center;">
    <iframe 
      frameborder="no" 
      border="0" 
      marginwidth="0" 
      marginheight="0" 
      width="320" 
      height="66" 
      src="//music.163.com/outchain/player?type=2&id=17612590630&auto=1&height=66" 
      class="max-w-[90vw]"
      style="display: block;"
    ></iframe>
  </div>
`;

// 把这个 div 挂载到页面的 body 上
document.body.appendChild(musicDiv);

// 解决路由跳转时不刷新的问题 (监听 Next.js 路由变化)
// 注意：NotionNext 是单页应用，这段脚本通常只加载一次，所以不需要特殊处理，挂在 body 上就会一直都在。

/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return (
    <style jsx global>{`
      body {
        background-color: #f7f9fe;
      }

      // 公告栏中的字体固定白色
      #theme-heo #announcement-content .notion {
        color: white;
      }

      ::-webkit-scrollbar-thumb {
        background: rgba(60, 60, 67, 0.4);
        border-radius: 8px;
        cursor: pointer;
      }

      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }

      #more {
        white-space: nowrap;
      }

      .today-card-cover {
        -webkit-mask-image: linear-gradient(to top, transparent 5%, black 70%);
        mask-image: linear-gradient(to top, transparent 5%, black 70%);
      }

      .recent-top-post-group::-webkit-scrollbar {
        display: none;
      }

      .scroll-hidden::-webkit-scrollbar {
        display: none;
      }

      * {
        box-sizing: border-box;
      }

      // 标签滚动动画
      .tags-group-wrapper {
        animation: rowup 60s linear infinite;
      }

      @keyframes rowup {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-50%);
        }
      }

     /* ================================== 
     1. 定义蹦迪动画 (RGB呼吸灯) 
     ================================== */
  @keyframes disco-glow {
    0% { box-shadow: 0 0 10px #ff0055, 0 0 20px #ff0055; border-color: #ff0055; }
    25% { box-shadow: 0 0 10px #0055ff, 0 0 20px #0055ff; border-color: #0055ff; }
    50% { box-shadow: 0 0 10px #00ff55, 0 0 20px #00ff55; border-color: #00ff55; }
    75% { box-shadow: 0 0 10px #ffdd00, 0 0 20px #ffdd00; border-color: #ffdd00; }
    100% { box-shadow: 0 0 10px #ff0055, 0 0 20px #ff0055; border-color: #ff0055; }
  }

  /* ================================== 
     2. APlayer 核心胶囊样式 
     ================================== */
  .aplayer.aplayer-fixed.aplayer-narrow .aplayer-body,
  .aplayer-narrow .aplayer-body {
    border-radius: 50px !important;
    border: 2px solid transparent !important; /* 预留给边框颜色变化 */
    background: rgba(255, 255, 255, 0.9) !important;
    transition: all 0.3s ease !important;
    z-index: 9999 !important;
    
    /* 核心：调用上面的蹦迪动画，2秒循环一次 */
    animation: disco-glow 3s infinite linear !important;
  }

  /* 悬停时稍微放大，停止乱动，方便点击 */
  .aplayer.aplayer-fixed.aplayer-narrow .aplayer-body:hover {
    transform: scale(1.05);
    background: #fff !important;
  }

  /* ================================== 
     3. 歌词样式 (左移 + 加粗 + 霓虹字) 
     ================================== */
  .aplayer-lrc {
    /* 强制把歌词容器往左边拉，靠近播放器主体 */
    left: 80px !important; 
    right: auto !important; 
    width: auto !important;
    text-align: left !important;
    text-shadow: 0 0 2px rgba(0,0,0,0.8) !important; /* 增加文字黑色描边，防看不清 */
    margin-bottom: 3px !important; /* 稍微调整位置 */
  }

  /* 具体每一行歌词 */
  .aplayer-lrc-contents p {
    font-size: 16px !important;     /* 字号加大 */
    font-weight: 800 !important;    /* 字体特粗 */
    color: #fff !important;         /* 纯白字 */
    letter-spacing: 1px !important; /* 字间距稍微拉开一点 */
    
    /* 这里的文字也给点光晕 */
    text-shadow: 0 0 5px #0055ff, 0 0 10px #0055ff !important;
  }
  
  /* 当前播放的那一句歌词 */
  .aplayer-lrc-contents p.aplayer-lrc-current {
    color: #ffdd00 !important;      /* 高亮色：金色 */
    transform: scale(1.1) !important; /* 当前句稍微放大 */
  }

  /* ================================== 
     4. 封面变圆 
     ================================== */
  .aplayer.aplayer-fixed.aplayer-narrow .aplayer-pic {
    border-radius: 50% !important;
    margin: 2px !important;
    box-shadow: 0 0 5px rgba(0,0,0,0.2) !important;
  }

  /* ================================== 
     5. 暗黑模式适配 
     ================================== */
  @media (prefers-color-scheme: dark) {
    .aplayer.aplayer-fixed.aplayer-narrow .aplayer-body {
      background: rgba(30, 30, 30, 0.95) !important;
    }
  }
    `}</style>
  )
}

export { Style }

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
     1. 播放器主体 (胶囊) - 保持不变
     ================================== */
  .aplayer.aplayer-fixed .aplayer-body {
    bottom: 20px !important;        /* 离底部稍微留点空隙，不要贴死 */
    left: 20px !important;
    max-width: 320px !important;    /* 稍微收窄一点，更精致 */
    border-radius: 40px !important;
    background: rgba(255, 255, 255, 0.95) !important;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1) !important;
    border: none !important;
    z-index: 99999 !important;
  }
  
  /* 封面图修正 */
  .aplayer.aplayer-fixed .aplayer-pic {
    width: 50px !important;
    height: 50px !important;
    border-radius: 50% !important;
    margin: 8px !important;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1) !important;
  }
  
  /* 隐藏不需要的元素 */
  .aplayer.aplayer-fixed .aplayer-info .aplayer-time .aplayer-time-inner,
  .aplayer.aplayer-fixed .aplayer-volume-wrap {
    display: none !important;
  }

  /* ==================================
     2. 歌词区域 - 核心修复 (解决重叠)
     ================================== */
  .aplayer-lrc {
    display: block !important;
    position: fixed !important;
    bottom: 100px !important;   /* 放在播放器上方 */
    left: 20px !important;
    width: 320px !important;    /* 和播放器同宽 */
    height: 120px !important;   /* 【关键】限制高度，只够放3-4行 */
    overflow: hidden !important;/* 【关键】超出的藏起来 */
    z-index: 99998 !important;
    pointer-events: none !important;
    
    /* 【高级感】给歌词加一个渐变遮罩，让上下边缘淡出，不生硬 */
    mask-image: linear-gradient(to bottom, 
      transparent 0%, 
      black 15%, 
      black 85%, 
      transparent 100%
    ) !important;
    -webkit-mask-image: linear-gradient(to bottom, 
      transparent 0%, 
      black 15%, 
      black 85%, 
      transparent 100%
    ) !important;
  }

  /* 歌词滚动容器 */
  .aplayer-lrc-contents {
    width: 100% !important;
    transform-origin: left top !important; /* 确保滚动基准点正确 */
  }

  /* ==================================
     3. 歌词文字 - 减重更清晰
     ================================== */
  .aplayer-lrc-contents p {
    color: rgba(255,255,255, 0.6) !important; /*哪怕是白字也先给点透明度 */
    font-size: 16px !important;
    font-weight: 700 !important;   /* 粗体，但不要极粗 */
    line-height: 2.2 !important;   /* 【关键】行高拉大，解决重叠！ */
    text-align: left !important;
    margin: 0 !important;
    padding-left: 10px !important; /* 跟播放器对齐 */
    
    /* 描边减淡，不要那么黑的一坨 */
    text-shadow: 1px 1px 2px rgba(0,0,0,0.6) !important;
    transition: all 0.3s ease !important;
  }

  /* 高亮当前句 */
  .aplayer-lrc-contents p.aplayer-lrc-current {
    color: #fff !important;        /* 纯白 */
    font-size: 20px !important;    /* 放大 */
    font-weight: 900 !important;
    opacity: 1 !important;
    /* 给当前句加个漂亮的蓝色/金色光晕，突出重点 */
    text-shadow: 0 0 10px rgba(0, 120, 255, 0.8), 1px 1px 2px rgba(0,0,0,0.8) !important;
    transform: scale(1.05) !important;
    transform-origin: left center !important;
  }

  /* 暗黑模式微调 */
  @media (prefers-color-scheme: dark) {
    .aplayer.aplayer-fixed .aplayer-body {
      background: rgba(40, 40, 40, 0.9) !important;
    }
  }
    `}</style>
  )
}

export { Style }

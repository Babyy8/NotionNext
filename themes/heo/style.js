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
     1. 整体定位：移到左下角红框区域
     ================================== */

  /* 播放器主体容器 */
  .aplayer.aplayer-fixed {
    bottom: 160px !important;   /* 往上提，离开最底部 */
    left: 20px !important;      /* 靠左，留点边距 */
    width: auto !important;
    max-width: 360px !important;/* 限制宽度，不让它太长 */
    background: transparent !important; /* 去掉多余背景 */
    box-shadow: none !important;
    z-index: 99999 !important;
  }

  /* 歌词容器 - 定位到播放器正上方 */
  .aplayer-lrc {
    position: fixed !important;
    bottom: 230px !important;   /* 放在播放器上面 (160 + 高度 + 间距) */
    left: 20px !important;      /* 与播放器左对齐 */
    width: 360px !important;    /* 宽度一致 */
    height: auto !important;    /* 高度自适应 */
    max-height: 80px !important;/* 限制最大高度，显示2-3行 */
    z-index: 99998 !important;  /* 在播放器下面一点 */
    text-align: left !important;/* 歌词文字靠左 */
    background: transparent !important;
    text-shadow: none !important;
    pointer-events: none !important; /* 让鼠标能点透歌词，不挡操作 */
    overflow: hidden !important;
  }

  /* ==================================
     2. 歌词样式强化 (粗体 + 描边)
     ================================== */
  
  /* 修复歌词容器可能的偏移 */
  .aplayer-lrc-contents {
    transform: translateY(0) !important;
    margin: 0 !important;
  }

  /* 普通歌词行 */
  .aplayer-lrc-contents p {
    color: #ffffff !important;      /* 白字 */
    font-size: 18px !important;     /* 字号加大 */
    font-weight: 900 !important;    /* 字体极粗 */
    line-height: 1.3 !important;    /* 行高紧凑点 */
    margin: 2px 0 !important;
    padding: 0 !important;
    opacity: 0.8 !important;        /* 非高亮行稍微淡点 */
    /* 核心：强力黑色描边，确保在任何背景上都清晰可见 */
    text-shadow: 2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 0 2px 0 #000, 2px 0 0 #000, 0 -2px 0 #000, -2px 0 0 #000, 0 0 5px rgba(0,0,0,0.5) !important;
  }

  /* 当前播放的高亮歌词 */
  .aplayer-lrc-contents p.aplayer-lrc-current {
    color: #FFD700 !important;      /* 金色高亮 */
    font-size: 20px !important;     /* 字号更大 */
    opacity: 1 !important;          /* 不透明 */
    /* 金色发光 + 黑色描边 */
    text-shadow: 2px 2px 0 #000, -2px -2px 0 #000, 0 0 15px #FFD700 !important;
    transition: all 0.3s ease !important;
  }

  /* ==================================
     3. 播放器主体样式 (保持圆角高级感)
     ================================== */
  .aplayer.aplayer-fixed .aplayer-body {
    border-radius: 50px !important; /* 胶囊大圆角 */
    background: rgba(255, 255, 255, 0.95) !important; /* 微透白底 */
    /* 干净的高级光晕，去掉之前的蹦迪效果 */
    box-shadow: 0 10px 20px rgba(0,0,0,0.15), 0 0 15px rgba(79, 101, 240, 0.3) !important;
    border: none !important;
    margin: 0 !important;
    padding-right: 15px !important; /* 右边留点空 */
  }
  
  /* 封面变大圆 */
  .aplayer.aplayer-fixed .aplayer-pic {
    border-radius: 50% !important;
    width: 56px !important;
    height: 56px !important;
    margin: 5px !important;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2) !important;
  }

  /* 隐藏不需要的元素，保持简洁 */
  .aplayer.aplayer-fixed .aplayer-info .aplayer-time .aplayer-time-inner,
  .aplayer.aplayer-fixed .aplayer-volume-wrap {
    display: none !important;
  }

  /* 暗黑模式适配 */
  @media (prefers-color-scheme: dark) {
    .aplayer.aplayer-fixed .aplayer-body {
      background: rgba(40, 40, 40, 0.95) !important; /* 深色底 */
      box-shadow: 0 10px 20px rgba(0,0,0,0.3), 0 0 15px rgba(255, 215, 0, 0.2) !important; /* 金色光晕 */
    }
    .aplayer.aplayer-fixed .aplayer-info .aplayer-music .aplayer-title { color: #fff !important; }
    .aplayer.aplayer-fixed .aplayer-info .aplayer-music .aplayer-author { color: #ccc !important; }
  }
    `}</style>
  )
}

export { Style }

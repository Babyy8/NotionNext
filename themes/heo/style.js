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
         稳健的赛博霓虹播放器 (Static Neon Glow)
         ================================== */

      /* 1. 针对 APlayer (Meting) 的核心容器 */
      .aplayer.aplayer-fixed.aplayer-narrow .aplayer-body,
      .aplayer-narrow .aplayer-body {
        border-radius: 50px !important; /* 强制胶囊圆角 */
        border: none !important;        /* 移除边框 */
        /* 核心：稳健的霓虹光晕 - 冰蓝色 */
        box-shadow: 0 0 10px rgba(79, 101, 240, 0.4), 
                    0 0 25px rgba(79, 101, 240, 0.2) !important;
        background: rgba(255, 255, 255, 0.95) !important; /* 微透背景 */
        transition: all 0.3s ease !important;
        z-index: 9999 !important;
      }

      /* 2. 鼠标悬停交互 */
      .aplayer.aplayer-fixed.aplayer-narrow .aplayer-body:hover {
        transform: translateX(-20px); 
        box-shadow: 0 0 15px rgba(79, 101, 240, 0.6), 
                    0 0 35px rgba(79, 101, 240, 0.3) !important;
      }

      /* 3. 封面变圆 */
      .aplayer.aplayer-fixed.aplayer-narrow .aplayer-pic {
        border-radius: 50% !important;
        margin: 2px !important;
        box-shadow: 0 0 5px rgba(0,0,0,0.2) !important;
      }

      /* 4. 暗黑模式适配 (琥珀金光) */
      @media (prefers-color-scheme: dark) {
        .aplayer.aplayer-fixed.aplayer-narrow .aplayer-body {
          background: rgba(26, 26, 26, 0.95) !important;
          box-shadow: 0 0 10px rgba(251, 191, 36, 0.3), 
                      0 0 25px rgba(251, 191, 36, 0.15) !important;
        }
        .aplayer.aplayer-fixed.aplayer-narrow .aplayer-body:hover {
          box-shadow: 0 0 15px rgba(251, 191, 36, 0.5), 
                      0 0 35px rgba(251, 191, 36, 0.25) !important;
        }
        .aplayer .aplayer-info .aplayer-music .aplayer-title {
          color: #eee !important;
        }
      }
    `}</style>
  )
}

export { Style }

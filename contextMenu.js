chrome.contextMenus.create({
  id: 'open',
  title: '[인벤] 썸네일 원본 열기',
  contexts: ['image'],
  targetUrlPatterns: ['*://*.inven.co.kr/upload/*/thumb/*n*'],
})

chrome.contextMenus.onClicked.addListener((info, tab) => {
  const url = info.srcUrl
  const originalUrl = url.replace('thumb/n', 'i')

  const options = {
    url: originalUrl,
  }

  chrome.tabs.create(options)
})
window.onload = () => {
  window.setInterval(() => {
    const box = document.querySelectorAll('.messages-box');
    if (box.length > 0) {
      const msgs = document.querySelectorAll('.message.system');
      Array.from(msgs)
        .filter((e) => ['left', '退去'].some(v => e.textContent.includes(v)))
        .forEach((e) => e.setAttribute('style', 'display: none;'));
    }
  }, 1000);
}

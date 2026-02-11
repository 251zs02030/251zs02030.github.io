const circle = document.getElementById("button")

let state = 0 //0は開始前、1は待機中、2はタイマー経過
let startTime
let timer

function changeButtonStyle(text, color) {
  circle.textContent = text
  circle.style.backgroundColor = color
}

circle.addEventListener("click", () => {
  if (state === 0) {
    state = 1
    changeButtonStyle("wait...", "red")

    const delay = Math.random() * 5000 + 2000
    timer = setTimeout(() => {
      state = 2
      changeButtonStyle("押！！！", "blue")
      startTime = Date.now()
    }, delay)

  } else if (state === 1) {
    clearTimeout(timer)
    changeButtonStyle("お手付き\nリトライしてね", "red")
    state = 0

  } else if (state === 2) {
    const record = Date.now() - startTime
    changeButtonStyle(`記録 ${record} ms`, "blue")
    state = 0
  }
})

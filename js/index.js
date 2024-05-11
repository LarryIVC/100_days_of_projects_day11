const pay = document.getElementById("pay")
const modal = document.getElementById("modal")
const close = document.getElementById("close")
const main = document.querySelector("main")

pay.addEventListener("click", () => {
  modal.showModal()
  main.style.filter = "blur(5px)"
})

close.addEventListener("click", () => {
  modal.close()
  main.style.filter = "none"
})

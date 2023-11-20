document.getElementById("submit").addEventListener("click", () => {
    document.getElementById('content').style.display = "none"
    document.getElementById('content-submit').style.display = "flex"
})
for (let index = 1; index < 6; index++) {
    document.getElementById(`step${index}`).addEventListener("click", () => {
        for (let i = 1; i < 6; i++) {
            document.getElementById(`step${i}`).classList.add('normal-back')
        }
        document.getElementById(`step${index}`).classList.add('orange-back')
        document.getElementById(`step${index}`).classList.remove('normal-back')
        document.getElementById(`selectedNo`).innerText = index
    })

}
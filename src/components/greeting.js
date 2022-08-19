import '../css/greeting.css'
export const greeting = (name) => {
  const h1 = document.getElementById('title')
  h1.innerText = `Hi ${name}, Wellcome to Webpack Initial`
}

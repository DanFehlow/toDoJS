// 1 - Trocar seletores por getElementbyID --> Ok
// 2 - Criar iD div HTML (32), chamar esse iD, apagar linha 15 (criar uma const e passar o template string)
// 3 - Tentar matar o atualizar a tela e o removeChild --> Ok
// 4 - Para a cor do check, mudar a classe e não a cor. --> Ok

let banco = []

const getBanco = () => JSON.parse(localStorage.getItem('todo')) ?? []
const setBanco = (banco) => localStorage.setItem('todo', JSON.stringify(banco))

const criarItem = (evento) => {
  const tecla = evento.key
  const texto = evento.target.value
  const taskQuantity = document.querySelectorAll('#task-checkbox').length
  const taskNextQuantity = taskQuantity + 1
  // if (!texto) {
  //   return alert('Por favor, escreva sua tarefa')
  // }

  if (tecla === 'Enter') {
    evento.target.value = ''
    console.log('taskQuantity', taskQuantity)
    const newTask = document.createElement('div')
    newTask.innerHTML = `
    <div class="mudar">
      <div class="checkboxtask" id="task-checkbox">
          <input type="checkbox" name=""
          id="done-button-${taskNextQuantity}"
          onclick="doneButton(${taskNextQuantity})"/>
          
      </div>
      <div id = "teste -${taskNextQuantity}" class = "written-tasks">${texto}</div>
    </div>
    `
    document.querySelector('.written-tasks').appendChild(newTask)
  }
}

const atualizarTela = () => {
  const banco = getBanco()
  banco.push(document.getElementById(`teste -${taskNextQuantity}`))
  setBanco(banco)
  const history = getBanco()
  history.forEach((newTask) => {
    criarItem(newTask.texto)
  })
}

const doneButton = (taskNextQuantity) => {
  const checkbox = document.getElementById(`done-button-${taskNextQuantity}`)
  const input = document.getElementById(`teste -${taskNextQuantity}`)
  const audio = new Audio('done-sound.mp3')
  if (checkbox.checked == true) {
    input.classList.add('color-done')
    audio.play()
  } else {
    input.classList.remove('color-done')
  }
}

// const removeChild = () => {
//   const parent = document.querySelector('.written-tasks')
//   while (parent.firstChild) {
//     parent.removeChild(parent.lastChild)
//   }
// }

document.getElementById('tasks').addEventListener('keypress', criarItem)
// atualizarTela()

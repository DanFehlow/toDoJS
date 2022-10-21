const getBanco = () => JSON.parse(localStorage.getItem('todo')) ?? []
const setBanco = (banco) => localStorage.setItem('todo', JSON.stringify(banco))

const criarItem = (tarefa) => {
  const taskQuantity = document.querySelectorAll('#task-checkbox').length
  const taskNextQuantity = taskQuantity + 1
  if (!tarefa) {
    alert('Por favor, escreva sua tarefa')
  }
  console.log('taskQuantity', taskQuantity)
  const newTask = document.createElement('div')
  newTask.innerHTML = `
    <div class="mudar">
      <div class="checkboxtask" id="task-checkbox">
          <input type="checkbox" name=""
          id="done-button-${taskNextQuantity}"
          onclick="doneButton(${taskNextQuantity})"
          />   
      </div>
      <div id = "teste -${taskNextQuantity}" class = "written-tasks">${tarefa}</div>
      <button><img src="./icon/trash.png" alt="trash" id="trash-icon"/></button>
    </div>
    `
  document.querySelector('.written-tasks').appendChild(newTask)
}

const insertTask = (evento) => {
  const tecla = evento.key
  const texto = evento.target.value
  if (tecla === 'Enter') {
    const banco = getBanco()
    banco.push({ tarefa: texto })
    setBanco(banco)
    atualizarTela()
    evento.target.value = ''
  }
}

const atualizarTela = () => {
  removeChild()
  const banco = getBanco()
  banco.forEach((newTask) => {
    criarItem(newTask.tarefa)
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

const removeChild = () => {
  const parent = document.querySelector('.written-tasks')
  while (parent.firstChild) {
    parent.removeChild(parent.lastChild)
  }
}

document.getElementById('tasks').addEventListener('keypress', insertTask)
atualizarTela()

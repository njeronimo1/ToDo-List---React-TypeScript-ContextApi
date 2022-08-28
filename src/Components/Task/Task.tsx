import { useEffect, useState } from "react";
import { useTask } from "../../hooks/useTask";
import { toast } from "react-toastify";

import { Container } from "./styles";
import { ContainerContent } from "./styles";
import Trash from './../../assets/trash.png';
import plus from './../../assets/plus.png';
import archive from './../../assets/Clipboard.png';

export interface Task{
  id: number;
  isComplete: boolean;
  title: string
}

export function Task(){

  const {task, addTask, removeTask, updateTask} = useTask();
  const [taskTitle, setTaskTitle] = useState('');
  const [taskCont, setTaskCont] = useState(0);
  const [taskSucess, setTaskSucess] = useState(0);

  function handleToggleTaskCompletion(taskId: number){
      updateTask({taskId});
  }

  function onCreateNewTask(){

    if(taskTitle == ''){
      return toast.error('Preencha um titulo para criar a Task');
    }

    var id =  Math.random()
    var isComplete = false
    var title = taskTitle

    addTask(id, isComplete, title);
    setTaskTitle('');
  }

  function handleDeleteTask(taskId: number){
    removeTask(taskId);
  }

  useEffect(() => {
    const taskCreated = [...task];

    var count = taskCreated.length;
    setTaskCont(count);

    var taskSucess = taskCreated.filter(task => task.isComplete == true);
    setTaskSucess(taskSucess.length);

  }, [task]);

  console.log(task);


    if(taskCont > 0){
      return(
        <div>
          <ContainerContent>
                <div>
                    <header>
                        <input 
                        
                        type="text" 
                        placeholder="Adicione uma nova tarefa" 
                        value={taskTitle}
                        onChange={(e) => setTaskTitle(e.target.value)}
    
                        />
                        
                        <button type="submit"
                        onClick={onCreateNewTask}
                        >Criar <img src={plus}/></button>
                    </header>
    
    
                    <div className="contagem_tarefas">
                        <div>
                            <span className="p_criadas">Tarefas criadas</span>
                            <span className="style_zero">{taskCont}</span>
                        </div>
                        <div>
                            <span className="p_concluida">Concluídas</span>
                            <span className="style_zero">{taskSucess} de {taskCont}</span>
                        </div>
                    </div>
    
                </div>
    
                
            </ContainerContent>
    
    
            
            <Container>
                <main className="container_list">
                  {task.map(task => (
                    <div key={task.id}
                    className={task.isComplete ? 'completed' : ''}>
                      <label className="checkbox-container">
                      <input 
                        type="checkbox"
                        readOnly
                        checked={task.isComplete}
                        onClick={() => handleToggleTaskCompletion(task.id)}
                      />
                      <span className="checkmark"></span>
                      
                      </label>
                      <label>{task.title}</label>
    
                      <img 
                      src={Trash} 
                      alt="Excluir" 
                      onClick={(e) => handleDeleteTask(task.id)}
                      />
                    </div>
                  ))}
                    
                </main>
            </Container>
          </div>
      )
    }else{
      return(
        <div>
          <ContainerContent>
              <div>
                  <header>
                      <input 
                      
                      type="text" 
                      placeholder="Adicione uma nova tarefa" 
                      value={taskTitle}
                      onChange={(e) => setTaskTitle(e.target.value)}
  
                      />
                      
                      <button type="submit"
                      onClick={onCreateNewTask}
                      >Criar <img src={plus}/></button>
                  </header>
  
  
                  <div className="contagem_tarefas">
                      <div>
                          <span className="p_criadas">Tarefas criadas</span>
                          <span className="style_zero">{taskCont}</span>
                      </div>
                      <div>
                          <span className="p_concluida">Concluídas</span>
                          <span className="style_zero">{taskSucess} de {taskCont}</span>
                      </div>
                  </div>

                  <div className="container_tarefas_n_cadastradas">
                    <img src={archive} />

                    <h3>Você ainda não tem tarefas cadastradas</h3>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                  </div>
  
              </div>
  
              
          </ContainerContent>
        </div>
      )
    }
}
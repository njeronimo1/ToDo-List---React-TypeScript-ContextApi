
import styled from 'styled-components';

export const ContainerContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    max-width: 1000px;
    

    header{
        max-width: 1000px;
        margin-top: -1.5rem;
        display: flex;

        input{
            background-color: var(--gray-500);
            padding: 0rem 1rem;
            height: 3.25rem;
            border-radius: 8px;
            border: none;
            color: var(--gray-200);

            width: 40rem;
            
            &:focus{
                outline: transparent;
                box-shadow:0px 0px 0px 1px  var(--purple-dark);
            }
        }

        button{
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: white;
            background-color: var(--blue-dark);
            height: 3.25rem;
            padding: 0rem 1rem;
            border-radius: 8px;
            margin-left: 0.3rem;
            border:none;

            &:hover{
                background-color: var(--blue);
                cursor: pointer;
            }
        }
    }

    .contagem_tarefas{
        display: flex;
        color: white;
        justify-content: space-between;
        font-size: 0.875rem;
        font-weight: 600;
        margin-top: 4rem;

        .p_criadas{
            color:var(--blue);
        }

        .p_concluida{
            color:var(--purple);
        }

        .style_zero{
            background-color: var(--gray-400);
            padding: 0.1rem 0.6rem 0.1rem 0.6rem;
            border-radius: 0.6rem;
            margin-left: 0.45rem;
            color: var(--gray-200);
        }
    }

    .container_tarefas_n_cadastradas{
        margin-top: 1.5rem;
        padding-top: 3.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 18px;
        border-top: 0.15rem solid var(--gray-500);

        color: var(--gray-300);
        
        img{
            margin-bottom: 1rem;
        }

        h3, p{
            
            font-size: 1rem;
        }
    }

    @media(max-width:768px){
        header{

        input{
            width: 100%;
            }
        }
    }
    
    

`

export const Container = styled.div`

    margin-top: 1.5rem;

    div{
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: space-around;
        color: var(--gray-100);
        font-size: 0.875rem;
        gap: 1rem;

        background-color: var(--gray-500);
        padding: 1rem;
        border-radius: 8px;
        border:0.1rem solid var(--gray-400);

        label{
            width: 85%;
        }

        img{
            &:hover{
                background-color: var(--gray-400);
                color: red;
                border-radius: 4px;
                cursor: pointer;
            }
        }

        .checkbox-container {
            display: block;
            position: relative;
            width: 2%;
          
            &:hover{
                cursor: pointer;
            }

            input {
              position: absolute;
              opacity: 0;
              cursor: pointer;
              height: 0;
              width: 0;

                
              &:checked {
                & ~ .checkmark {
                  background-color: var(--purple);
                }

                & ~ .checkmark:after {
                  display: block;
                }
              } 
            }
          
            .checkmark {
              position: absolute;
              top: 0;
              left: 0;
              width: 18px;
              height: 18px;
              /* background-color: var(--blue); */
              border: 0.15rem solid var(--purple);
              border-radius: 50%;
          
              &:after {
                content: "";
                position: absolute;
                display: none;
                left: 4px;
                top: 1px;
                width: 4px;
                height: 7px;
                border: solid white;
                
                border-width: 0 2px 2px 0;
                transform: rotate(45deg);
              }
            }
        }

        
    }
    .container_list{
            display: flex;
            flex-direction: column;
        }

    .completed{
        text-decoration:line-through;
        opacity: 0.6;
    }
    

`
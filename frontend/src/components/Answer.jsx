import React, {useEffect, useState} from 'react'
import { formatDate } from '../js/utilities'
import Button from './Button'
import Swal from 'sweetalert2'
import { toast } from 'react-toastify'
import AnswerModal from './AnswerModal'

const Answer = ({answer, user, setAnswers}) => {

  const {token} = user
  const {id} = answer
  const [isPropietary, setIsPropietary] = useState(false)
  const [answerModal, setAnswerModal] = useState(false)

  useEffect(() => {
    if(user.id === answer.user.id) {
      setIsPropietary(true)
    }
  }, [])

  const handleDelete = (e) => {
    e.preventDefault()
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:8080/answers/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((response) => {
          if (response.status === 204) {
            toast.success("Topic deleted successfully", {
              position: "bottom-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            setAnswers(prevAnswers => prevAnswers.filter(prevAnswer => prevAnswer.id !== id))
          }
        });
      }
    });
  }
  

  return (
    <div className='rounded-lg bg-white shadow-lg p-4 flex flex-col gap-4 dark:bg-slate-800'>
        {answerModal && ( <AnswerModal prevAnswer={answer} setAnswerModal={setAnswerModal} setAnswers={setAnswers} user={user}/> )}
        <p>{answer.answer}</p>
        <div className='flex items-center justify-between'>
          <p className='italic'>{`Answered on ${formatDate(answer.created_at)} by ${answer.user.username}`}</p>
          {isPropietary && (
            <div className='flex gap-2'>
              <Button action={(e) => handleDelete(e)}>Delete</Button>
              <Button action={(e) => setAnswerModal(true)}>Edit</Button>
            </div>
          )}
        </div>
    </div>
  )
}

export default Answer
import axios from 'axios'
import Swal from 'sweetalert2'

const API_URL = 'http://localhost:2002/'

// Get data of questions
const getquestions = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const response = await axios.get(API_URL+'data') 
    return response.data
}

// update question 
const updatequestion = async (id_question,questionData) => {
 if(questionData){
  const response = await axios.put(API_URL+'data/'+id_question, questionData)
  Swal.fire('Updated!', '', 'success')
  return response.data
 }else{
  Swal.fire( 'there is a problem !', 'warning')
 }
}

// get one question by id 
const getonequestion = async (questionId) =>{
  const res = await axios.get(API_URL+'question/'+questionId)
  return res.data
}

// Delete question question
const deletequestion = async (questionId) => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // }
  
    axios.delete(API_URL+'data/'+questionId)
    
  
}

const questionService = {
  updatequestion,
  getquestions,
  getonequestion,
  deletequestion,
}

export default questionService
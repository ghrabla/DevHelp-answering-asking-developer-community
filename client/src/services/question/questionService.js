import axios from 'axios'
import Swal from 'sweetalert2'

const API_URL = 'http://localhost:2002/questions/';

// Create new question
const createquestion = async (questionData) => {
    if(questionData){
     const response = await axios.post(API_URL+'create', questionData)
     Swal.fire('Saved!', '', 'success')
     return response.data
    }else{
     Swal.fire( 'please fill all feilds !', 'warning')
    }
   }

// Get data of questions
const getquestions = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const response = await axios.get(API_URL) 
    return response.data
}

// update question 
const updatequestion = async (id_question,questionData) => {
 if(questionData){
  const response = await axios.put(API_URL+id_question, questionData)
  Swal.fire('Updated!', '', 'success')
  return response.data
 }else{
  Swal.fire( 'there is a problem !', 'warning')
 }
}

// get one question by id 
const getonequestion = async (questionId) =>{
  const res = await axios.get(API_URL+questionId)
  return res.data
}

// Delete question question
const deletequestion = async (questionId) => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // }
  
    axios.delete(API_URL+questionId)
    
  
}

const questionService = {
  createquestion,
  updatequestion,
  getquestions,
  getonequestion,
  deletequestion,
}

export default questionService;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import res from 'express/lib/response'
import questionService from './questionService'

const initialState = {
  questions: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}


// Get user questions
export const getquestions = createAsyncThunk(
  'questions/getAll',
  async (_, thunkAPI) => {
    try {
      // const token = thunkAPI.getState().auth.user.token
      return await questionService.getquestions()
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)


// Get user questions
export const getonequestion = createAsyncThunk(
  'questions/getone',
  async (id_question) => {
    try {
      // const token = thunkAPI.getState().auth.user.token
      return await questionService.getonequestion(id_question)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
    }
  }
)


export const updatequestion = createAsyncThunk(
  'questions/update',
  async (questiondata,{ dispatch, getState }) => {
    try { 
      // const token = thunkAPI.getState().auth.user.token
      
      const res = await questionService.updatequestion(questiondata.dataid,questiondata.questionInfo)
      // dispatch(getquestions())
      return res;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      // return thunkAPI.rejectWithValue(message)
    }
  }
)


// Delete user question
export const deletequestion = createAsyncThunk(
  'questions/delete',
  async (id,{ dispatch, getState }) => {
    try {
      // const token = thunkAPI.getState().auth.user.token
    const res = await questionService.deletequestion(id)
    dispatch(getquestions());
    return res;
  
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      // return rejectWithValue(message)
    }
  }
)

export const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getquestions.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getquestions.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.questions = action.payload
      })
      .addCase(getquestions.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(updatequestion.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updatequestion.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.questions = action.payload
      })
      .addCase(updatequestion.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deletequestion.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deletequestion.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.questions = state.questions.filter(
          (question) => question._id !== action.payload.id
        )
      })
      .addCase(deletequestion.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = questionSlice.actions
export default questionSlice.reducer
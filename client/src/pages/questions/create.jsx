import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const CreateQuestion = () => {

    const modules = {
        toolbar: [
            [{ font: [] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ color: [] }, { background: [] }],
            [{ script: "sub" }, { script: "super" }],
            ["blockquote", "code-block"],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
            ["link", "image", "video"],
            ["clean"],
        ],
    };

    const [value, setValue] = useState("");
    console.log(value);

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div class="container mx-auto mt-8">
                    <h1 class="text-3xl font-bold mb-4">Question Creation Page</h1>
                    <p class="mb-4">This is where you can design and customize your own set of questions for your survey, quiz, or any other application that requires user input.</p>
                    <ul class="list-disc list-inside mb-4">
                        <li class="p-2 rounded-lg">
                            <i class="fas fa-pencil-alt mr-2"></i>
                            To get started, think about the purpose of your questions. Are you trying to gather information, test knowledge, or simply engage your audience? Once you have a clear objective in mind, you can begin crafting your questions.
                        </li>
                        <li class="p-2 rounded-lg">
                            <i class="fas fa-lightbulb mr-2"></i>
                            Some tips for creating effective questions include being clear and concise, avoiding ambiguity, and using simple language. You may also want to consider using a mix of question types, such as multiple-choice, open-ended, or rating scales, to capture different types of data.
                        </li>
                        <li class="p-2 rounded-lg">
                            <i class="fas fa-users mr-2"></i>
                            When designing your questions, think about your target audience and tailor your language and tone accordingly. You want your questions to be relevant and engaging to your audience, and to encourage them to provide honest and thoughtful responses.
                        </li>
                        <li class="p-2 rounded-lg">
                            <i class="fas fa-check-circle mr-2"></i>
                            Once you have created your questions, be sure to test them out to ensure they are effective and easy to understand. You may also want to consider conducting a pilot study with a small group of people to gather feedback and refine your questions before using them on a larger scale.
                        </li>
                    </ul>
                    <p class="mb-4">Thank you for choosing our question creation page, and we wish you the best of luck in designing your questions!</p>
                </div>
            </div>
            <div className="w-3/4 mx-10 my-10">
                <div class="mt-4">
                    <label for="title" class="block font-medium text-xl text-gray-700 my-3">Title</label>
                    <p class="my-3">Be specific and imagine you’re asking a question to another person.</p>
                    <input id="title" name="title" type="text" class="border-solid border-2 border-cyane-500 rounded block w-full sm:text-sm sm:leading-5 py-3 px-4 my-3 " placeholder="Enter your question title here"/>
                </div>
                <label for="body" class="block font-medium text-xl text-gray-700 my-3">Body</label>
                <ReactQuill modules={modules} theme="snow" onChange={setValue} placeholder="Content goes here..." />
                <a href="javascript:void(0)" class="mt-5 inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-500">
                    submit question
                </a>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default CreateQuestion;
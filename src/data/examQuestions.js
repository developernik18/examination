import { questionBank1 } from "./questionBank/questionBank1";
import { questionBank2 } from "./questionBank/questionBank2";
import { questionBank3 } from "./questionBank/questionBank3";


export const getExamQuestions = (id) => {
  const questionBank = allQuestionBank.filter((questionBank) => {
    if(id === questionBank.id) {
      return true;
    }
    return false;
  });

  return questionBank[0].collection;
}


const allQuestionBank = [{
  "id" : "_32445",
  "collection": questionBank1
},{
  "id" : "_32446",
  "collection": questionBank2
},{
  "id" : "_32447",
  "collection": questionBank3
}]


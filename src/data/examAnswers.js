import { answerSheet1 } from "./answerSheets/answerSheet1";


export const getExamAnswers = (id) => {
  const answerSheet = allAnswerSheets.filter((answerSheet) => {
    if(id === answerSheet.id) {
      return true;
    }
    return false;
  });

  return answerSheet[0].collection;
}

const allAnswerSheets = [{
  "id" : "_32445",
  "collection": answerSheet1
},{
  "id" : "_32446",
  "collection": answerSheet1
},{
  "id" : "_32447",
  "collection": answerSheet1
}]


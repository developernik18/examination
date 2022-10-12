export const allExamsData = [{
  'Name': 'HTML Basics',
  'Duration': 120, // in minutes
  'Questions': 50,
  'id':"_32445"
},{
  'Name': 'CSS Basics',
  'Duration': 120, // in minutes
  'Questions': 60,
  'id':"_32446"
},{
  'Name': 'JavaScript Basics',
  'Duration': 180, // in minutes
  'Questions': 40,
  'id':"_32447"
}];

/**
 * 
 * @param {string} id - exam id
 * @returns {object} - exam details
 */

export function getExamDetailById(id) {
  let result = null;
  allExamsData.forEach(element => {
    if(element.id === id) {
      result = element;
    }
  });
  return result;
}

/**
 * Exam duration in seconds
 * @param {string} id - exam id
 * @returns number - time duration
 */
export function getExamDurationById(id) {
  const minutesToSecond = 60;
  return getExamDetailById(id).Duration * minutesToSecond;
}
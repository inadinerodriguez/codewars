/*
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/


function removeExclamationMarks(str) {
    return [...str].filter((value) => value !== "!").join('');
}

// const removeExclamationMarks = s => s.replace(/!/g,"") ;

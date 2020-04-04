function taptocomment(event) {
    event.preventDefault();
    var commentbox = document.getElementById("commentBox").value;
    if (commentbox===""){
        alert("Enter your comment...")
        return false;
    }
    else {
        alert("Your comment is here...")
        doneComment = document.getElementById("done-comments"). innerHTML = commentbox;
        
        return true;
    }
}

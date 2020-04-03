function taptocomment(){
    var commentbox = document.getElementById("commentBox").value;
    if (commentbox===""){
        alert("Enter your comment...")
        return false;
    }
    else {
        alert("Your comment is here...")
        return true;
    }
}
function render (data){
    var html ="<div class='comment'>"<div class = 'commentBox'+ data>"+ data .comment"</div>
    ('#container').append(html);
}
(document) .ready (function(){
    var comment = [
        {"comment": "this is good"}
    ];
        for (var i=0, i<coment){
        render (comment(i));
    }   
('#comment') .click (function(){
    varaddObj = {
        "commentbox" ('#comment') val(),
    },
    console.log(addObj);
    comment.push(addObj);
    render(addObj);
})
})
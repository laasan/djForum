//NavBar
const burger = document.getElementById("iconBar"),
      close_burger = document.getElementById("close-icon"),
      show_comment = document.querySelectorAll("#show-comment"),
      reply = document.querySelectorAll("#show-reply");

function showMoreBar() {
    var iconBar = document.getElementById("iconBar");
    var navigation = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:none;");
    navigation.classList.remove("hide");
}

function hideMoreBar() {
    var iconBar = document.getElementById("iconBar");
    var navigation = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:block;");
    navigation.classList.add("hide");
}

burger.addEventListener("click", showMoreBar);
close_burger.addEventListener("click", hideMoreBar);

//Comment
function showComment(){
    var commentArea = document.getElementById("comment-area");
    commentArea.classList.remove("hide");
}

show_comment.forEach(btn => btn.addEventListener('click', showComment));

//Reply
function showReply(){
    var replyArea = document.getElementById("reply-area");
    replyArea.classList.remove("hide");
}

reply.forEach(btn => btn.addEventListener('click', showReply));
const markAsRead=document.getElementById("mark");
const notificationContainers=document.getElementsByClassName("notification-container")
const notificationHeader=document.getElementById("notificationHeaderId");

markAsRead.addEventListener("click",function(){
    for(let i=0 ; i<notificationContainers.length ; i++) {
        notificationContainers[i].classList.remove("notification-container-new");
    }
});
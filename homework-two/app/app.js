import * as MODEL from '../app/model.js';

function init() {

    $("nav a").click(function (e) {
        let btnId = this.id;
        let contentId = btnId + "Content";
        if (btnId == "home") {
            MODEL.getPageContent(contentId);
        }
        else {
            MODEL.getPageContent(contentId);
        }  
    })
}

$(document).ready(function() {
    init()
    MODEL.getPageContent("homeContent");
})


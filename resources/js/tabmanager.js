const mainTab = document.getElementById("mainTab");
const brukerstotteTab = document.getElementById("brukerstotteTab");
const yffTab = document.getElementById("yffTab");
const tabs = [
    mainTab,
    brukerstotteTab,
    yffTab
];

const mainContent = document.getElementById("mainContent");
const BSU3Content = document.getElementById("BSU3Content");
const BSU33Content = document.getElementById("BSU33Content");
const BSU34Content = document.getElementById("BSU34Content");
const BSU35Content = document.getElementById("BSU35Content");
const contents = [
    mainContent,
    BSU3Content,
    BSU33Content,
    BSU34Content,
    BSU35Content
];

function gotoTab(tabid) {
    hideTab()
    const tab = document.getElementById(tabid);
    tab.style.display = "block";
    if (tabid == "mainTab") {
        gotoContent("mainContent");
    } else if (tabid == "brukerstotteTab") {
        gotoContent("brukerstotteContent");
    }
}

function gotoContent(contentid) {
    hideContent();
    document.getElementById(contentid).style.display = "block";
}

function hideContent() {
    contents.forEach(content => content.style.display = 'none');
}
function hideTab() {
    tabs.forEach(tab => tab.style.display = "none");
}
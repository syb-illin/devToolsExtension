
chrome.devtools.panels.create("Flow",
    "MyPanelIcon.png",
    null,
    function(panel) {
    	panel.setExpression("window.document", "rootTitle");
      // code invoked on panel creation
    }
);
chrome.devtools.panels.elements.createSidebarPane("Flow Builder",
    function(sidebar) {
        // sidebar initialization code here
         sidebar.setExpression("$A.getContext().storeInstance.getCurrentState()", "Store current state");
});

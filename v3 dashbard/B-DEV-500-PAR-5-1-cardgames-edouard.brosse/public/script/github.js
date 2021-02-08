function github(favofol) {
    token = '063608e7de541b0ae6bb7e0e19019e043dd2b713';
    console.log('My token:', token);
    const axios = require('axios');
  
    async function makeRequest() {
  
      const config = {
          method: 'get',
          url: 'https://owlbot.info/api/v4/dictionary/',
          headers: { 'Authorization': `token 0decfd96da4986c118451309a2593808e9661da3` }
      }
  
      let res = await axios(config)
  
        const def = res.data.definition.definition;
        var first = '<h1>' + '<strong>' + "DEFINITION" + favofol + '</strong>' + '</h1>'
        var second = '<h2 id="' + def + '"><label></label> ' + def + '</h2>'
        this.grid = $('.grid-stack').data('gridstack')
        var node = {
            x: 3,
            y: 3,
            width: 4,
            height: 2
        }
        var elementId = 'id="' + favofol + '"'
        var valueID = 'value="' + favofol + '"'
        var button = '<form action="/deleteWidget" method="POST"><input type="hidden" name="toRemove" ' + valueID + '></input><button class="trashButton" type="submit"></button></form>'
        var createElement = '<div class="grid-stack-item" ' + elementId + ' style="background-color: grey; margin: 10px; border-radius: 10px;"><i style="position:absolute; top:3px; right: 4px"></i><button id="editButton" class="editButton" onclick="editWidget(this.parentNode.id)"></button><div class="grid-stack-item-content" style="padding: 20px; text-align: center">' + button + first + second + '</div></div>'
        this.grid.addWidget($(createElement), node.x, node.y, node.width, node.height)
        
    };
    makeRequest()
}
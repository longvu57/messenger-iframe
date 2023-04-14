window.addEventListener('message', function(event) {
    var decodedData = decodeURIComponent(event.data);
    var params = new URLSearchParams(decodedData);
    var type = params.get('type');
    var state = JSON.parse(params.get('state'));
    var shouldHide = params.get('shouldHide');
    var titleText = params.get('titleText');
    var bottom = params.get('bottom');

    // Message Replied
    if(type == 'mpn.updatePageTitle' && titleText != null){
      dataLayer.push({
          'event': 'ownerRepliedMessage',
          'message': titleText
        });
   }
  });

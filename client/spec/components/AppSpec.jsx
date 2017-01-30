describe('App', function() {
  var {
    Simulate,
    renderIntoDocument,
    findRenderedDOMComponentWithClass,
    scryRenderedDOMComponentsWithClass
  } = React.addons.TestUtils;

  var app;

  beforeEach(function() {
    app = renderIntoDocument(
      <App />
    );
  });

  it('should be a stateful class component', function() {
    expect(React.Component.isPrototypeOf(App)).to.be.true;
  });

  it('should render a single VideoList component', function() {
    var eventList = findRenderedDOMComponentWithClass(app, 'event-list');
    expect(eventList).to.exist;
  });

  it('should update the video player when a video entry\'s title is clicked', function() {

    expect(React.Component.isPrototypeOf(App)).to.be.true;

    var eventEntryTitleElements = scryRenderedDOMComponentsWithClass(app, 'event-entry-title');

    eventEntryTitleElements.forEach((videoEntryTitle) => {
      Simulate.click(videoEntryTitle);
      var player = findRenderedDOMComponentWithClass(app, 'video-player');
      var playerTitle = player.querySelector('.video-player-details h3');

      // This test assumes that if you can successfully update the video player's title,
      // you can also update the video and description
      expect(playerTitle.innerHTML).to.equal(videoEntryTitle.innerHTML);
    });
  });

   it('should load data when app is initialized', function() {

      var EventEntryTitleElements = scryRenderedDOMComponentsWithClass(app, 'event-entry-title');

      EventEntryTitleElements.forEach((eventEntryTitle, i) =>
        expect(eventEntryTitle.innerHTML).to.equal(fakeEventData[i].snippet.title)
      );
    });
});
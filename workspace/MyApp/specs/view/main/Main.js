Ext.define('TestSuite.view.main.Main', function() {
    describe('# Main panel', function() {
    	var mainPanel;
    	var mainController;
      var mainModel = null;

    	beforeEach(function(){
    		mainPanel = Ext.create('MyApp.view.main.Main');
    		mainController = mainPanel.getController();
        mainModel = Ext.create('MyApp.view.main.MainModel');
    	});

    	afterEach(function () {
    		mainPanel.destroy();
    	});

      it('Get the truthyTest function in main controller', function() {
          expect(mainController.getTruthyTest()).toBe(true);
      });

      it('Check the main model availability', function() {
        expect(mainModel != null).toBe(true);
      })

      it('Check the home pane if defined in tabpanel', function () {
      	var home = mainPanel.down('#home');
      	expect(home).toBeDefined();
      });

      it("is version 6", function() {
        expect(Ext.getVersion().major).toEqual(6);
      });
    });
    return {};
}());

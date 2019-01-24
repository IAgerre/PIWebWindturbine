(function (PV) {
	"use strict";


	function symbolVis() { };
	PV.deriveVisualizationFromBase(symbolVis);


	var definition = {
		typeName: "gifIeltxu",
		datasourceBehavior: PV.Extensibility.Enums.DatasourceBehaviors.Single,
		visObjectType: symbolVis,
		getDefaultConfig: function(){
			return {
				Height: 150,
				Width: 150,
				BackgroundColor: 'lightskyblue',
				BorderRadius:10,
				FontColor: 'black',
				Border: 1
			};
		},
		configOptions: function()
		{
			return [
				{
					title:"Format Symbol",
					mode:"format"
				}
			];
		}
	};
	
	symbolVis.prototype.init = function(scope, elem) {	
		this.onDataUpdate=dataUpdate;
		function dataUpdate(data){
			if (data!=null)
			{
				if(data.Label)
				{					
					var res = data.Label.split("|");
					scope.Windturbine=res[0];
					scope.Element=res[1];
					scope.Units=data.Units;
				}
				scope.Value=data.Value;
				scope.Time=data.Time;
			}
		}
	};

	PV.symbolCatalog.register(definition);
})(window.PIVisualization);
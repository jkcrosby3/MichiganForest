//load the google charts

			google.charts.load('current', {'packages':['table']});
			google.charts.load('current', {'packages':['controls']});
			google.charts.load('current', {'packages':['line']});

			google.charts.load('current',{'packages':['corechart']});

			//load the Callback function that runs when page loads
			//google.charts.setOnLoadCallback(drawTable);
			google.charts.setOnLoadCallback(drawAllSheets);

			function drawAllSheets(){
				drawSheetName('sr002_areaforestland', 
							'Select A,B,C',
							forestlandResponseHandler);


				drawSheetName('sr004_acresflandbyowner', 
							'Select A,B,C,D,E',
							forestownershipResponseHandler);

				drawSheetName('sr004_acresflandbyowner2017', 
							'Select A,B',
							forestownerpieResponseHandler);

				drawSheetName('sr005_acresflandbytreesize', 
							'Select A,B,C,D,E',
							forestlandstandsizeResponseHandler);

				drawSheetName('sr006_acresflandbyage', 
							'Select A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V ',
							forestlandstandageResponseHandler);

				drawSheetName('sr009_numlivetreebysizefland', 
							'Select A,B,C,D,E,F,G,H,I,J,K,L,M',
							forestlandnumlivetreebysizeResponseHandler);	
				drawSheetName('sr008-acrestlandbysize', 
							'Select A,B,C,D,E',
							timberlandacresbysizeResponseHandler);							
				drawSheetName('sr007-acresflandregentype-2017', 
							'Select A,B',
							forestlandacresregennaturalpieResponseHandler);
				drawSheetName('sr010_numdeadtreesforestland', 
							'Select A,B,C,D,E,F,G,H,I,J,K',
							forestlandnumdeadtreebysizeResponseHandler);
				drawSheetName('sr010_numdeadtreesforestland_2017', 
							'Select A,B,C,D,E,F,G,H,I,J,K',
							forestlanddeadsizepieResponseHandler);
				drawSheetName('sr006_acresflandbyage_2017', 
							'Select A,B',
							forestlandagepieResponseHandler);


			}  //drawAllSheets
//************************************************************************************************
			function drawSheetName(sheetName, query, responseHandler){
				var queryString = encodeURIComponent(query);
				var query = new google.visualization.Query(
					'https://docs.google.com/spreadsheets/d/1OtLIqyW9qkbcbqznwuW2F2iA5UWC6bocgn9djBm446w/gviz/tq?sheet=' +sheetName + '&headers = 1&tq=' +queryString);

				query.send(responseHandler);				


			}  //drawSheetName

			/**************************************************************/
			function forestlandResponseHandler(response){
				if (response.isError()) {
					alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
					return;
				}
				var data = response.getDataTable();
				var options = {
						/*chart: {
							title: 'Michigan Forest Land and Timberland by Year, 2004, 2009, 20014, 2017'
						},*/
						legend: {
						  position: 'right'
						},
						axes: {
						  x: {
							0: {side: 'bottom'}
						  }
						},
						textStyle: {fontSize: 6}
				};

			var chart = new google.charts.Line(document.getElementById('forestland_div')
									)
				chart.draw(data, google.charts.Line.convertOptions(options));
				}
				//forestlandResponseHandler

			/**************************************************************/
			function forestownershipResponseHandler(response){
				if (response.isError()) {
					alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
					return;
				}
				var data = response.getDataTable();
				var options = {
						/*chart: {
							title: 'Michigan Forest Ownership, 2017'
						},
						legend: {
						  position: 'right'
						},*/
						axes: {
						  x: {
							0: {side: 'bottom'}
						  }
						},
						textStyle: {fontSize: 6}
				};

			var chart = new google.charts.Line(document.getElementById('forestownership_div')
									)
				chart.draw(data, google.charts.Line.convertOptions(options));
				}
				//forestownershipResponseHandler
				/************************************************************/


			function forestownerpieResponseHandler(response){
				var data = response.getDataTable();
				data.sort({column:1, desc:true});
				var options = {
							title : 'Michigan Forest Ownership (2017)',
							width: 550,
							backgroundColor: '#f8f8f8'
				};

				var chart = new google.visualization.PieChart(
							document.getElementById('forestownerpie_div')
							)
				chart.draw(data,options);

			}  //forestownerpieResponseHandler	
			/**************************************************************/
			function forestlandstandsizeResponseHandler(response){
				if (response.isError()) {
					alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
					return;
				}
				var data = response.getDataTable();
				var options = {
						/*chart: {
							title: 'Michigan Forest Land Stand Size'
						},
						legend: {
						  position: 'right'
						},*/
						axes: {
						  x: {
							0: {side: 'bottom'}
						  }
						},
						textStyle: {fontSize: 6}
				};

			var chart = new google.charts.Line(document.getElementById('forestlandstandsize_div')
									)
				chart.draw(data, google.charts.Line.convertOptions(options));
				}
				//forestlandstandsizeResponseHandler

			/**************************************************************/				
			function forestlandstandageResponseHandler(response){
				if (response.isError()) {
					alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
					return;
				}
				var data = response.getDataTable();
				var options = {
				  title : 'Acres of Forest Land by Stand-Age Class (2004-2017)',
				  vAxis: {title: 'Acres'},
				  hAxis: {title: 'Year'},
				  seriesType: 'bars',
				  series: {5: {type: 'line'}}
				};
				var chart = new google.visualization.ComboChart(document.getElementById('forestlandstandage_div'));
				chart.draw(data, options);
				}
				//forestlandstandageResponseHandler

			/**************************************************************/				
			function forestlandnumlivetreebysizeResponseHandler(response){
				if (response.isError()) {
					alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
					return;
				}
				var data = response.getDataTable();
				var options = {
				  title : 'Acres of Forest Land by Stand-Size Class (2004-2017)',
				  vAxis: {title: 'Number Live Trees'},
				  hAxis: {title: 'Year'},
				  seriesType: 'bars',
				  series: {5: {type: 'line'}}
				};
				var chart = new google.visualization.ComboChart(document.getElementById('flandlivetreebysize_div'));
				chart.draw(data, options);
				}
				//forestlandnumlivetreebysizeResponseHandler		
			/**************************************************************/
			function timberlandacresbysizeResponseHandler(response){
				if (response.isError()) {
					alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
					return;
				}
				var data = response.getDataTable();
				var options = {
						/*chart: {
							title: 'Acres of Timberland by Stand Size'
						},*/
						legend: {
						  position: 'right'
						},
						axes: {
						  x: {
							0: {side: 'bottom'}
						  }
						},
						textStyle: {fontSize: 6}
				};

			var chart = new google.charts.Line(document.getElementById('timberlandacressize_div')
									)
				chart.draw(data, google.charts.Line.convertOptions(options));
				}
				//timberlandacresbysizeResponseHandler
/************************************************************/


			function forestlandacresregennaturalpieResponseHandler(response){
				var data = response.getDataTable();
				data.sort({column:1, desc:true});
				var options = {
							title : 'Acres Forest Land Artificially or Naturally Regenerating (2017)',
							width: 550,
							backgroundColor: '#f8f8f8'
				};

				var chart = new google.visualization.PieChart(
							document.getElementById('forestlandregenacrespie_div')
							)
				chart.draw(data,options);

			}  //forestlandacresregennaturalpieResponseHandler

			/**************************************************************/				

			function forestlandnumdeadtreebysizeResponseHandler(response){
				if (response.isError()) {
					alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
					return;
				}
				var data = response.getDataTable();
				var options = {
				  title : 'Number of Dead Trees in  Forest Land by Stand-Size Class (2004-2017)',
				  vAxis: {title: 'Number Dead Trees'},
				  hAxis: {title: 'Year'},
				  seriesType: 'bars',
				  series: {5: {type: 'line'}}
				};
				var chart = new google.visualization.ComboChart(document.getElementById('forestlandnumdeadsize_div'));
				chart.draw(data, options);
				}
				//forestlandnumdeadtreebysizebarsResponseHandler
			/**************************************************************/

			/************************************************************/


			function forestlandagepieResponseHandler(response){
				var data = response.getDataTable();
				data.sort({column:1, desc:true});
				var options = {
							title : 'Acres Forest Land by Stand-Age (2017)',
							width: 550,
							backgroundColor: '#f8f8f8'
				};

				var chart = new google.visualization.PieChart(
							document.getElementById('forestlandacresagepie_div')
							)
				chart.draw(data,options);
				}

						/************************************************************/


			function forestlanddeadsizepieResponseHandler(response){
				var data = response.getDataTable();
				data.sort({column:1, desc:true});
				var options = {
							title : 'Acres Forest Land Dead by Stand-Size (2017)',
							width: 550,
							backgroundColor: '#f8f8f8'
				};

				var chart = new google.visualization.PieChart(
							document.getElementById('forestlanddeadacressizepie_div')
							)
				chart.draw(data,options);
				}

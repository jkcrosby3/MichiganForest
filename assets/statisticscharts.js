

			//load the google charts
			
			google.charts.load('current', {'packages':['table']});
			google.charts.load('current', {'packages':['controls']});
			
			google.charts.load('current',{'packages':['corechart']});
			
			//load the Callback function that runs when page loads
			//google.charts.setOnLoadCallback(drawTable);
			google.charts.setOnLoadCallback(drawAllSheets);
			
			function drawAllSheets(){
				drawSheetName('stats', 
							'Select A,B,C,D,E,F,G,H,I',
							michstatsResponseHandler);
			
				
			}  //drawAllSheets
//************************************************************************************************

			function drawSheetName(sheetName, query, responseHandler){
				var queryString = encodeURIComponent(query);
				var query = new google.visualization.Query(
					'https://docs.google.com/spreadsheets/d/1OtLIqyW9qkbcbqznwuW2F2iA5UWC6bocgn9djBm446w/gviz/tq?sheet=' +sheetName + '&headers = 1&tq=' +queryString);
				
				query.send(responseHandler);				
							
				
			}  //drawSheetName
			
			
			function michstatsResponseHandler(response){
				if (response.isError()) {
					alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
					return;
				}
				var data = response.getDataTable();
				var options = {
						//width:900,
						title: 'Michigan Forest Statistics, 2004, 2009, 20014, 2017',
						textStyle: {fontSize: 6}
						//backgroundColor '#f8f8f8',
						//,showRowNumber: true
						
						};

			var table = new google.visualization.Table(
									document.getElementById('michstats_div')
									)
				table.draw(data, options );
				}
				//michstatsResponseHandler
	

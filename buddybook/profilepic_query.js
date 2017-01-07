$(document).ready(function(){
	
	/*function changetext()
	{
		$('#upload').attr('placeholder','your DP is ready :)');
		
	}*/
	$('#exampleInputFile').change(function(){
		$('#upload').attr('disabled',false);
		
	});
	
	$('#upload').click(function()
	{
		$('#upload').text('uploading your DP......');
		//setTimeout(changetext,3000);
		$('#upload').text('your DP is ready :)');
		
	});
	$('#continue').attr('disabled',false);
	
	

	});
$(document).ready(function(){
	
	
	$('#exampleInputFile').change(function(){
		$('#upload').attr('disabled',false);
		
	});
	
	$('#upload').click(function()
	{
		$('#upload').text('uploading your DP......');
		
		$('#upload').text('your cover photo is ready :)');
		
	});
	$('#continue').click(function(){
		
		$(this).text('preparing your profile....');
	});
	
	

	});
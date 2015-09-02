<!DOCTYPE html>
<html>
<head>
    <title>LeafletFileLayer Plugin</title>
    <meta charset="utf-8" />
</head>
<body>
	<input type="file" id="pxfile" />
	<script src="gardaProper.js"></script>
		<script type="text/javascript" src="javascript/underscore.js"></script>
		<script type="text/javascript" src="javascript/px.js"></script>
    <script>
		
		

		document.getElementById('pxfile').onchange = handlePxfile;

		var px = {};
		function handlePxfile() {
			var reader = new FileReader();

			reader.onload = function() {
				return px = new Px(reader.result);
			};
			reader.readAsText(this.files[0]);
		}
		
		console.log(px);
    </script>
</body>
</html>

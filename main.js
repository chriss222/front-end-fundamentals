function doClick(){
			alert('You clicked')
		}
		function changeText(id){
			id.innerHTML = 'You Clicked';
		}
		function ChangeText(){
			var heading = document.getElementById('heading');
			heading.innerHTML = 'You Clicked!';
		}
		function schimbAutor(){
			var autor = document.getElementById('autor');
			autor.innerHTML = 'With Andrew';
		}
		function showDate(){
			var time = document.getElementById('time');
			time.innerHTML = Date();
		}
		function hideDate(){
			var time = document.getElementById('time');
			time.innerHTML = '';
		}
		function changeButtonText(){
			var textButon = document.getElementById('textButon')
			textButon.innerHTML = 'Cristi nu are mere';
		}
		function changeColor(x){
			console.log(x.value);
			var heading = document.getElementById('heading');
			heading.style.color = x.value;
		}
		function validateForm(){
			var firstName=document.forms["myForm"]["firstName"].value;

			if(firstName == null || firstName == ""){
				alert('First name is required');
				return false;
			}

			if(firstName.length < 3){
				alert('First name must be at least 3 characters');
				return false;
			}
			var lastName=document.forms["myForm"]["lastName"].value;

			if(lastName == null || lastName == ""){
				alert('Last name is required');
				return false;
			}

			if(lastName.length < 3){
				alert('Last name must be at least 3 characters');
				return false;
			}
		}
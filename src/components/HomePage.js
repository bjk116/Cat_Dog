var React = require('react');
var PetComponent = require('./PetComponent');

var style = {
	textAlign: 'center',
	fontSize: '2em',
	color: 'rebeccapurple'
};

var HomePage = function() {

  return (
  	<div>
    	<h1 style={style}>
    		Welcome to Cat and Dog Cuteness Fight Game!!!
    	</h1>
    	<div style={{marginTop:60, textAlign: 'center'}}>
	    	<PetComponent 
	    		petName="Cat" 
	    		petImageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgr6Ch5ME_dsSuvh0Z2tfgK2FznF_2YOp4RmzWE0HIQ8bUAbUn3hCMsh7G"
	    	/>
	    	<PetComponent 
	    		petName="Dog" 
	    		petImageURL="http://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-8.jpg"
	    	/>
	    </div>
  	</div>
  );
};


module.exports = HomePage;
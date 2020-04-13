function deepEqual(x, y) 
{
	//check if x is an object
	if (typeof(x) == "object" && x != null)
	{
			//check if x and y are both objects
			if (typeof(y) == "object" && y != null)
			{
				//check if length of property lists are the same for x and y
				if (Object.keys(x).length == Object.keys(y).length)
				{	
					//if length of property lists are the same compare their property lists
					for (var p in x)
					{
							//check if the property names are the same
							if (x.hasOwnProperty(p) == y.hasOwnProperty(p))
							{
								//check if property types are objects, if so recursively call deepEqual function
								//and check return value
								if (typeof(x[p]) == "object" && typeof(y[p]) == "object")
								{	
									var result = deepEqual(x[p], y[p]);
									if (result == false)
									{
										return false;
									}	
								}	
								else
								{
									//if their types are not both objects, directly compare the values
									return x[p] === y[p];
								}		
							}
							else
							{
								//property names are different
								return false;
							}				
					}	
					
					//if iterate through for loop and all values match
					return true;
				}
				else
				{
					//x and y have different lengths of property lists
					return false;
				}		
			}
			else
			{
				//x is an object but y is not an object
				return x === y;		
			}			
	}	
	else
	{
		//x is not an object
		return x === y;
	}		
}	

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));

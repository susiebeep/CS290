/******************************************************************************* 
 ** Program Name: Source code for input validation function (integers)
 ** Author:       Susan Hibbert
 ** Date:         5 June 2019
 ** Description:  This program contains the function definition for an input validation
		  function for integers. It takes an string input by the user as a parameter
		  and, using a do-while loop, checks that each character in the string is
		  an integer. If so, the string is converted to an int and returned to the
		  calling program. If a non-integer is found in the input string, the user
		  will be asked to re-enter an integer. 
 ** Citations:	  Checking cin input stream produces an integer, Stack Overflow
		  5.10- std::cin, extraction, and dealing with invalid text input, 
		  Learncpp.com
		  std::stoi, C++ Reference, Cplusplus.com
		  Validating input and getline() function, Stack Overflow
		  A way to not accept float as input C++, Stack Overflow
		  Section 5.7 The do-while loop, Starting Out With C++ Early Objects,
		  9th Edition, Gaddis
 ** *******************************************************************************/ 
#include <iostream>
#include "input.hpp"
#include <string>

int int_input_val(std::string input)
{
	int int_input;
	bool is_valid;
	
	//do loop executes once before checking while condition. An if statement checks
	//if the user simply pressed the enter key and if so sets the boolean flag to false
	//and the user will be prompted to enter an integer value.
	//The for loop checks that every character in the input string is valid and if it is
	//the for loop and do-while loops are exited and the input string is converted to
	//an integer. If an invalid character is found in the input, the boolean flag is set
	//to false, the if statement is executed and the user is prompted to enter an integer
	//value. The while condition causes the do loop to iterate until there is valid input
	//from the user

	do
	{
		is_valid = true;
	
		//if user just pressed the enter key with no input	
		if (input.length() == 0)
		{
			is_valid = false;
		}

		for (int i = 0; i < input.length() && is_valid; i++)
		{
			if (input.at(i) >= '0' && input.at(i) <= '9')
			{
				is_valid = true;			
			}
					
			else
			{
				is_valid = false;
			}
		}
		
		if (!is_valid) 
		{
			std::cout << "Not an integer! Please re-enter an integer" << std::endl;
			std::getline(std::cin, input);
		}
	}	
	while (!is_valid);

	int_input = std::stoi(input);

	return int_input;
}


